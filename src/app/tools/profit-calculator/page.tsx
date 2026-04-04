"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function ProfitCalculatorPage() {
  const [revenue, setRevenue] = useState("");
  const [cost, setCost] = useState("");
  const [result, setResult] = useState<{
    profit: number;
    profitMargin: number;
    markupRate: number;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const r = Number(revenue);
    const c = Number(cost);

    if (!revenue || !cost || isNaN(r) || isNaN(c)) {
      setError("売上と原価を正しく入力してください");
      setResult(null);
      return;
    }
    if (r <= 0) { setError("売上は0より大きい値を入力してください"); setResult(null); return; }
    if (c < 0) { setError("原価は0以上の値を入力してください"); setResult(null); return; }
    if (c > r) { setError("原価が売上を上回っています（赤字の場合もこのまま計算できます）"); }
    else { setError(""); }

    const profit = r - c;
    const profitMargin = (profit / r) * 100;
    const markupRate = c > 0 ? (profit / c) * 100 : Infinity;
    setResult({ profit, profitMargin, markupRate });
  };

  const reset = () => {
    setRevenue("");
    setCost("");
    setResult(null);
    setError("");
  };

  const fmt = (n: number) => Math.round(n).toLocaleString("ja-JP");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>利益率計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">利益率計算ツール</h1>
      <p className="text-muted mb-8">
        売上と原価（コスト）を入力して、利益・粗利率・マークアップ率を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">売上 (円)</label>
            <input
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              placeholder="例: 1000000"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">原価・コスト (円)</label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="例: 600000"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            計算する
          </button>
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {result && (
          <div className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">利益</p>
                <p className={`text-2xl font-bold ${result.profit >= 0 ? "text-primary" : "text-red-500"}`}>
                  ¥{fmt(result.profit)}
                </p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">粗利率</p>
                <p className={`text-2xl font-bold ${result.profitMargin >= 0 ? "text-green-600" : "text-red-500"}`}>
                  {result.profitMargin.toFixed(2)}%
                </p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">マークアップ率</p>
                <p className="text-2xl font-bold text-orange-500">
                  {isFinite(result.markupRate) ? `${result.markupRate.toFixed(2)}%` : "—"}
                </p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted">売上</span>
                <span className="font-medium">¥{fmt(Number(revenue))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">原価・コスト</span>
                <span className="font-medium text-red-500">－¥{fmt(Number(cost))}</span>
              </div>
              <div className="flex justify-between border-t border-card-border pt-1 mt-1">
                <span className="text-muted">利益（粗利）</span>
                <span className={`font-bold ${result.profit >= 0 ? "" : "text-red-500"}`}>
                  ¥{fmt(result.profit)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">粗利率 = 利益 ÷ 売上 × 100</span>
                <span className="font-medium">{result.profitMargin.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">マークアップ率 = 利益 ÷ 原価 × 100</span>
                <span className="font-medium">
                  {isFinite(result.markupRate) ? `${result.markupRate.toFixed(2)}%` : "—"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">利益率計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 売上金額（Revenue）を入力します。</p>
          <p>2. 原価・コスト（Cost）を入力します。</p>
          <p>3. 「計算する」ボタンを押すと、利益・粗利率・マークアップ率が表示されます。</p>
          <p>粗利率（利益率）= 利益 ÷ 売上 × 100</p>
          <p>マークアップ率 = 利益 ÷ 原価 × 100</p>
          <p>粗利率30%以上が一般的に健全とされますが、業種によって異なります。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="profit-calculator" category="日常ツール" />
      <RelatedTools currentSlug="profit-calculator" category="日常ツール" />
    </div>
  );
}
