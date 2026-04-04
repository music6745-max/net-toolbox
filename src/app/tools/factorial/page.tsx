"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

function factorialBig(n: number): bigint {
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) result *= BigInt(i);
  return result;
}

function permutation(n: number, r: number): bigint {
  if (r > n) return BigInt(0);
  let result = BigInt(1);
  for (let i = n; i > n - r; i--) result *= BigInt(i);
  return result;
}

function combination(n: number, r: number): bigint {
  if (r > n) return BigInt(0);
  if (r === 0 || r === n) return BigInt(1);
  const rr = Math.min(r, n - r);
  let result = BigInt(1);
  for (let i = 0; i < rr; i++) {
    result = result * BigInt(n - i) / BigInt(i + 1);
  }
  return result;
}

function formatBig(n: bigint): string {
  const s = n.toString();
  if (s.length <= 20) return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return s.slice(0, 10) + "..." + s.slice(-10) + ` (${s.length}桁)`;
}

export default function FactorialPage() {
  const [nInput, setNInput] = useState("10");
  const [rInput, setRInput] = useState("3");
  const [result, setResult] = useState<{
    n: number;
    r: number;
    fact: bigint;
    perm: bigint;
    comb: bigint;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const n = Number(nInput);
    const r = Number(rInput);
    if (!nInput || isNaN(n) || !Number.isInteger(n) || n < 0) {
      setError("nは0以上の整数を入力してください");
      setResult(null);
      return;
    }
    if (!rInput || isNaN(r) || !Number.isInteger(r) || r < 0) {
      setError("rは0以上の整数を入力してください");
      setResult(null);
      return;
    }
    if (n > 1000) {
      setError("nは1000以下にしてください");
      setResult(null);
      return;
    }
    if (r > n) {
      setError("rはn以下にしてください");
      setResult(null);
      return;
    }
    setError("");
    setResult({
      n,
      r,
      fact: factorialBig(n),
      perm: permutation(n, r),
      comb: combination(n, r),
    });
  };

  const TABLE_ROWS = Array.from({ length: 13 }, (_, i) => i);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>階乗計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">階乗計算ツール</h1>
      <p className="text-muted mb-8">
        n!（階乗）、順列 P(n,r)、組み合わせ C(n,r) を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">n（全体数）</label>
            <input
              type="number"
              value={nInput}
              onChange={(e) => setNInput(e.target.value)}
              placeholder="例: 10"
              min="0"
              max="1000"
              className="w-28 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">r（選ぶ数）</label>
            <input
              type="number"
              value={rInput}
              onChange={(e) => setRInput(e.target.value)}
              placeholder="例: 3"
              min="0"
              className="w-28 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={calculate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          計算する
        </button>

        {result && (
          <div className="mt-8 space-y-3">
            <div className="bg-background rounded-lg border border-card-border p-5">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted mb-1">n! = {result.n}!（階乗）</p>
                  <p className="font-mono font-bold text-lg break-all">{formatBig(result.fact)}</p>
                </div>
                <div className="border-t border-card-border pt-4">
                  <p className="text-xs text-muted mb-1">P({result.n}, {result.r})（順列: {result.n}個から{result.r}個を選んで並べる）</p>
                  <p className="font-mono font-bold text-lg break-all">{formatBig(result.perm)}</p>
                </div>
                <div className="border-t border-card-border pt-4">
                  <p className="text-xs text-muted mb-1">C({result.n}, {result.r})（組み合わせ: {result.n}個から{result.r}個を選ぶ）</p>
                  <p className="font-mono font-bold text-lg break-all">{formatBig(result.comb)}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick table */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold mb-3">階乗早見表（0〜12）</h3>
          <div className="overflow-hidden rounded-lg border border-card-border text-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-background text-left">
                  <th className="px-4 py-2 font-medium text-muted">n</th>
                  <th className="px-4 py-2 font-medium text-muted">n!</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border">
                {TABLE_ROWS.map((n) => (
                  <tr key={n} className={result && result.n === n ? "bg-primary/5 font-semibold" : ""}>
                    <td className="px-4 py-2">{n}</td>
                    <td className="px-4 py-2 font-mono">{factorialBig(n).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">階乗計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. nに全体の数、rに選ぶ数を入力します。</p>
          <p>2. 「計算する」ボタンをクリックすると階乗・順列・組み合わせが計算されます。</p>
          <p>階乗 n! = n × (n-1) × ... × 2 × 1</p>
          <p>順列 P(n,r) = n! / (n-r)! ：n個からr個を選んで順番に並べる場合の数</p>
          <p>組み合わせ C(n,r) = n! / (r! × (n-r)!) ：n個からr個を選ぶ場合の数（順序なし）</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="factorial" category="日常ツール" />
    </div>
  );
}
