"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function LogarithmPage() {
  const [number, setNumber] = useState("");
  const [customBase, setCustomBase] = useState("2");
  const [results, setResults] = useState<{
    log2: string;
    log10: string;
    ln: string;
    custom: string;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const n = parseFloat(number);
    const base = parseFloat(customBase);

    if (isNaN(n) || n <= 0) {
      setError("0より大きい数値を入力してください");
      setResults(null);
      return;
    }
    if (isNaN(base) || base <= 0 || base === 1) {
      setError("底は0より大きく、1以外の数値を入力してください");
      setResults(null);
      return;
    }

    setError("");
    setResults({
      log2: (Math.log2(n)).toPrecision(10),
      log10: (Math.log10(n)).toPrecision(10),
      ln: (Math.log(n)).toPrecision(10),
      custom: (Math.log(n) / Math.log(base)).toPrecision(10),
    });
  };

  const reset = () => {
    setNumber("");
    setCustomBase("2");
    setResults(null);
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>対数計算ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">対数計算ツール</h1>
      <p className="text-muted mb-8">
        常用対数・自然対数・二進対数・任意の底の対数を一括計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">
            真数（計算する数値）
          </label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="例: 100"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            任意の底（カスタム底）
          </label>
          <input
            type="number"
            value={customBase}
            onChange={(e) => setCustomBase(e.target.value)}
            placeholder="例: 2"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
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

        {results && (
          <div className="mt-2 space-y-3">
            <h2 className="text-sm font-semibold">計算結果</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "log₂（二進対数）", value: results.log2 },
                { label: "log₁₀（常用対数）", value: results.log10 },
                { label: "ln（自然対数）", value: results.ln },
                { label: `log${customBase}（カスタム底）`, value: results.custom },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-background rounded-lg p-4 border border-card-border"
                >
                  <p className="text-xs text-muted mb-1">{label}</p>
                  <p className="text-lg font-mono font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">対数計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 「真数」欄に対数を求めたい数値（0より大きい値）を入力します。</p>
          <p>2. 任意の底を使う場合は「カスタム底」欄に底の値を入力します。</p>
          <p>3. 「計算する」ボタンを押すと、log₂・log₁₀・ln・カスタム底の対数が一括表示されます。</p>
          <p>※ 真数は必ず正の数（0より大きい値）を入力してください。</p>
        </div>
      </section>


      <RelatedTools currentSlug="logarithm" category="日常ツール" />
    </div>
  );
}
