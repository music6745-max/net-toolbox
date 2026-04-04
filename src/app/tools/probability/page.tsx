"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function factorial(n: number): bigint {
  if (n < 0) return BigInt(-1);
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) result *= BigInt(i);
  return result;
}

function permutation(n: number, r: number): bigint {
  if (r < 0 || r > n) return BigInt(0);
  return factorial(n) / factorial(n - r);
}

function combination(n: number, r: number): bigint {
  if (r < 0 || r > n) return BigInt(0);
  return factorial(n) / (factorial(r) * factorial(n - r));
}

export default function ProbabilityPage() {
  const [n, setN] = useState("");
  const [r, setR] = useState("");
  const [favorable, setFavorable] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState<{
    perm: string;
    comb: string;
    prob: string | null;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const nv = parseInt(n, 10);
    const rv = parseInt(r, 10);

    if (isNaN(nv) || isNaN(rv) || nv < 0 || rv < 0) {
      setError("n と r に0以上の整数を入力してください");
      setResult(null);
      return;
    }
    if (nv > 20) {
      setError("n は20以下にしてください（計算量の制限）");
      setResult(null);
      return;
    }
    if (rv > nv) {
      setError("r は n 以下にしてください");
      setResult(null);
      return;
    }

    const fv = parseFloat(favorable);
    const tv = parseFloat(total);
    let prob: string | null = null;

    if (favorable !== "" && total !== "") {
      if (isNaN(fv) || isNaN(tv) || tv <= 0) {
        setError("確率計算には正の数値を入力してください");
        setResult(null);
        return;
      }
      if (fv > tv) {
        setError("有利な結果の数は全事象の数以下にしてください");
        setResult(null);
        return;
      }
      prob = (fv / tv).toPrecision(6);
    }

    setError("");
    setResult({
      perm: permutation(nv, rv).toString(),
      comb: combination(nv, rv).toString(),
      prob,
    });
  };

  const reset = () => {
    setN("");
    setR("");
    setFavorable("");
    setTotal("");
    setResult(null);
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>確率計算ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">確率計算ツール</h1>
      <p className="text-muted mb-8">
        順列P(n,r)・組み合わせC(n,r)・事象の確率を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <h2 className="text-sm font-semibold">順列・組み合わせ</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">n（全体の数）</label>
            <input
              type="number"
              value={n}
              onChange={(e) => setN(e.target.value)}
              placeholder="例: 5"
              min={0}
              max={20}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">r（選ぶ数）</label>
            <input
              type="number"
              value={r}
              onChange={(e) => setR(e.target.value)}
              placeholder="例: 2"
              min={0}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        <div className="border-t border-card-border pt-4">
          <h2 className="text-sm font-semibold mb-3">確率計算（任意）</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">有利な結果の数</label>
              <input
                type="number"
                value={favorable}
                onChange={(e) => setFavorable(e.target.value)}
                placeholder="例: 3"
                min={0}
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">全事象の数</label>
              <input
                type="number"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                placeholder="例: 10"
                min={1}
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            計算する
          </button>
          <button
            onClick={reset}
            className="border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {result && (
          <div className="mt-2 space-y-3">
            <h2 className="text-sm font-semibold">計算結果</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-background rounded-lg p-4 border border-card-border">
                <p className="text-xs text-muted mb-1">順列 P({n},{r})</p>
                <p className="text-xl font-mono font-semibold">{result.perm}</p>
              </div>
              <div className="bg-background rounded-lg p-4 border border-card-border">
                <p className="text-xs text-muted mb-1">組み合わせ C({n},{r})</p>
                <p className="text-xl font-mono font-semibold">{result.comb}</p>
              </div>
              {result.prob !== null && (
                <div className="bg-background rounded-lg p-4 border border-card-border">
                  <p className="text-xs text-muted mb-1">確率</p>
                  <p className="text-xl font-mono font-semibold">{result.prob}</p>
                  <p className="text-xs text-muted mt-1">
                    ({(parseFloat(result.prob) * 100).toPrecision(4)}%)
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">確率計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. n（全体の数）と r（選ぶ数）を入力して「計算する」を押すと、順列と組み合わせを計算します。</p>
          <p>2. 確率を求める場合は「有利な結果の数」と「全事象の数」も入力してください。</p>
          <p>3. 順列P(n,r) = n! / (n-r)!、組み合わせC(n,r) = n! / (r!(n-r)!) で計算します。</p>
          <p>※ n は計算量の関係で20以下に制限しています。</p>
        </div>
      </section>


      <AffiliateSection slug="probability" category="日常ツール" />
      <RelatedTools currentSlug="probability" category="日常ツール" />
    </div>
  );
}
