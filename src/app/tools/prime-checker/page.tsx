"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function getFactors(n: number): number[] {
  const factors: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return factors;
}

function getPrimeFactors(n: number): number[] {
  const factors: number[] = [];
  let d = 2;
  while (d * d <= n) {
    while (n % d === 0) {
      factors.push(d);
      n = Math.floor(n / d);
    }
    d++;
  }
  if (n > 1) factors.push(n);
  return factors;
}

function primesUpTo(n: number): number[] {
  if (n < 2) return [];
  const sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) sieve[j] = false;
    }
  }
  return sieve.reduce((acc: number[], v, i) => (v ? [...acc, i] : acc), []);
}

export default function PrimeCheckerPage() {
  const [checkInput, setCheckInput] = useState("17");
  const [listInput, setListInput] = useState("50");
  const [checkResult, setCheckResult] = useState<{
    n: number;
    prime: boolean;
    factors: number[];
    primeFactors: number[];
  } | null>(null);
  const [primeList, setPrimeList] = useState<number[] | null>(null);
  const [checkError, setCheckError] = useState("");
  const [listError, setListError] = useState("");

  const check = () => {
    const n = Number(checkInput);
    if (!checkInput || isNaN(n) || !Number.isInteger(n) || n < 1) {
      setCheckError("1以上の整数を入力してください");
      setCheckResult(null);
      return;
    }
    if (n > 10_000_000) {
      setCheckError("10,000,000以下の数を入力してください");
      setCheckResult(null);
      return;
    }
    setCheckError("");
    setCheckResult({
      n,
      prime: isPrime(n),
      factors: n <= 100000 ? getFactors(n) : [],
      primeFactors: isPrime(n) ? [n] : getPrimeFactors(n),
    });
  };

  const generateList = () => {
    const n = Number(listInput);
    if (!listInput || isNaN(n) || !Number.isInteger(n) || n < 2) {
      setListError("2以上の整数を入力してください");
      setPrimeList(null);
      return;
    }
    if (n > 10000) {
      setListError("10,000以下の数を入力してください");
      setPrimeList(null);
      return;
    }
    setListError("");
    setPrimeList(primesUpTo(n));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>素数判定</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">素数判定ツール</h1>
      <p className="text-muted mb-8">
        数が素数かどうかを判定します。素数でない場合は因数と素因数分解も表示します。
      </p>

      <div className="space-y-6">
        {/* Checker */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-base font-semibold mb-4">素数判定</h2>
          <div className="flex gap-3 mb-4">
            <input
              type="number"
              value={checkInput}
              onChange={(e) => setCheckInput(e.target.value)}
              placeholder="例: 17"
              min="1"
              className="w-40 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <button
              onClick={check}
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              判定する
            </button>
          </div>
          {checkError && <p className="text-red-500 text-sm mb-3">{checkError}</p>}

          {checkResult && (
            <div className="space-y-3">
              <div className={`rounded-lg border p-4 text-center ${checkResult.prime ? "border-green-300 bg-green-50" : "border-orange-300 bg-orange-50"}`}>
                <p className="text-2xl font-bold mb-1">{checkResult.n.toLocaleString()}</p>
                <p className={`text-lg font-semibold ${checkResult.prime ? "text-green-700" : "text-orange-700"}`}>
                  {checkResult.prime ? "素数です" : "素数ではありません"}
                </p>
              </div>

              {!checkResult.prime && (
                <>
                  <div className="bg-background rounded-lg border border-card-border p-4 text-sm">
                    <p className="font-medium mb-2">素因数分解</p>
                    <p className="font-mono text-base">
                      {checkResult.n} = {checkResult.primeFactors.join(" × ")}
                    </p>
                  </div>
                  {checkResult.factors.length > 0 && (
                    <div className="bg-background rounded-lg border border-card-border p-4 text-sm">
                      <p className="font-medium mb-2">約数（{checkResult.factors.length}個）</p>
                      <p className="text-muted">{checkResult.factors.join(", ")}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        {/* Prime list */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-base font-semibold mb-4">N以下の素数一覧</h2>
          <div className="flex gap-3 mb-4">
            <input
              type="number"
              value={listInput}
              onChange={(e) => setListInput(e.target.value)}
              placeholder="例: 100"
              min="2"
              max="10000"
              className="w-40 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <button
              onClick={generateList}
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              一覧を表示
            </button>
          </div>
          {listError && <p className="text-red-500 text-sm mb-3">{listError}</p>}

          {primeList && (
            <div className="bg-background rounded-lg border border-card-border p-4">
              <p className="text-sm text-muted mb-3">{listInput}以下の素数: {primeList.length}個</p>
              <div className="flex flex-wrap gap-1.5">
                {primeList.map((p) => (
                  <span
                    key={p}
                    className="inline-block bg-primary/10 text-primary text-xs font-mono px-2 py-1 rounded"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">素数判定ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 「素数判定」に調べたい数を入力して「判定する」をクリックします。</p>
          <p>2. 素数であれば緑、そうでなければ橙色で表示されます。素数でない場合は素因数分解と約数も表示されます。</p>
          <p>3. 「N以下の素数一覧」に上限を入力すると、その数以下の素数を全て表示します（最大10,000）。</p>
          <p>素数とは、1とその数自身以外に約数を持たない2以上の整数です。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="prime-checker" category="日常ツール" />
    </div>
  );
}
