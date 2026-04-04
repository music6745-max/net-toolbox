"use client";

import { useState } from "react";
import Link from "next/link";

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function gcdArray(nums: number[]): number {
  return nums.reduce((acc, n) => gcd(acc, n));
}

function lcm(a: number, b: number): number {
  return (Math.abs(a) / gcd(a, b)) * Math.abs(b);
}

function lcmArray(nums: number[]): number {
  return nums.reduce((acc, n) => lcm(acc, n));
}

function getDivisors(n: number): number[] {
  n = Math.abs(n);
  const divs: number[] = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divs.push(i);
      if (i !== n / i) divs.push(n / i);
    }
  }
  return divs.sort((a, b) => a - b);
}

export default function GcdLcmPage() {
  const [input, setInput] = useState("12, 18");
  const [result, setResult] = useState<{
    nums: number[];
    gcdVal: number;
    lcmVal: number;
    divisors: number[][];
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const parts = input.split(/[\s,、]+/).filter(Boolean);
    const nums = parts.map(Number);
    if (nums.some(isNaN) || nums.some((n) => !Number.isInteger(n) || n <= 0)) {
      setError("正の整数をカンマまたはスペースで区切って入力してください");
      setResult(null);
      return;
    }
    if (nums.length < 2) {
      setError("2つ以上の数を入力してください");
      setResult(null);
      return;
    }
    if (nums.some((n) => n > 1_000_000)) {
      setError("1,000,000以下の数を入力してください");
      setResult(null);
      return;
    }
    setError("");
    setResult({
      nums,
      gcdVal: gcdArray(nums),
      lcmVal: lcmArray(nums),
      divisors: nums.map(getDivisors),
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>最大公約数・最小公倍数計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">最大公約数・最小公倍数計算ツール</h1>
      <p className="text-muted mb-8">
        2つ以上の整数の最大公約数（GCD）と最小公倍数（LCM）を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            整数（カンマまたはスペース区切りで2つ以上）
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="例: 12, 18, 24"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={calculate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          計算する
        </button>

        {result && (
          <div className="mt-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-lg border border-card-border p-5 text-center">
                <p className="text-xs text-muted mb-1">最大公約数（GCD）</p>
                <p className="text-4xl font-bold text-primary">{result.gcdVal}</p>
              </div>
              <div className="bg-background rounded-lg border border-card-border p-5 text-center">
                <p className="text-xs text-muted mb-1">最小公倍数（LCM）</p>
                <p className="text-4xl font-bold text-primary">{result.lcmVal.toLocaleString()}</p>
              </div>
            </div>

            <div className="bg-background rounded-lg border border-card-border p-4 text-sm">
              <p className="font-medium mb-3">各数の約数</p>
              <div className="space-y-2">
                {result.nums.map((n, i) => (
                  <div key={i}>
                    <span className="font-semibold">{n} の約数: </span>
                    <span className="text-muted">{result.divisors[i].join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>

            {result.nums.length === 2 && (
              <div className="bg-background rounded-lg border border-card-border p-4 text-sm text-muted">
                <p className="font-medium text-foreground mb-1">計算の確認</p>
                <p>{result.nums[0]} × {result.nums[1]} = GCD × LCM → {result.nums[0] * result.nums[1]} = {result.gcdVal} × {result.lcmVal} = {result.gcdVal * result.lcmVal}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">最大公約数・最小公倍数計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 計算したい整数をカンマまたはスペース区切りで入力します（2つ以上）。</p>
          <p>2. 「計算する」ボタンをクリックすると最大公約数（GCD）と最小公倍数（LCM）が表示されます。</p>
          <p>最大公約数（GCD）: 複数の整数の共通の約数のうち最大のもの。</p>
          <p>最小公倍数（LCM）: 複数の整数の共通の倍数のうち最小のもの。</p>
          <p>ユークリッドの互除法を使って計算しています。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
