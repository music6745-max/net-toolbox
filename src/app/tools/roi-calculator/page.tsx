"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function RoiCalculatorPage() {
  const [investment, setInvestment] = useState("");
  const [returnValue, setReturnValue] = useState("");
  const [period, setPeriod] = useState("");
  const [result, setResult] = useState<{
    roi: number;
    netGain: number;
    annualRoi: number | null;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const inv = Number(investment);
    const ret = Number(returnValue);
    const p = period ? Number(period) : null;

    if (!investment || !returnValue || isNaN(inv) || isNaN(ret)) {
      setError("投資額とリターン（回収額）を入力してください");
      setResult(null);
      return;
    }
    if (inv <= 0) { setError("投資額は0より大きい値を入力してください"); setResult(null); return; }
    if (ret < 0) { setError("リターン（回収額）は0以上の値を入力してください"); setResult(null); return; }
    if (p !== null && (isNaN(p) || p <= 0)) { setError("期間は正の数を入力してください"); setResult(null); return; }

    setError("");
    const netGain = ret - inv;
    const roi = (netGain / inv) * 100;
    const annualRoi = p ? (Math.pow(ret / inv, 1 / p) - 1) * 100 : null;
    setResult({ roi, netGain, annualRoi });
  };

  const reset = () => {
    setInvestment("");
    setReturnValue("");
    setPeriod("");
    setResult(null);
    setError("");
  };

  const fmt = (n: number) => Math.round(n).toLocaleString("ja-JP");

  const getRoiColor = (roi: number) => {
    if (roi >= 50) return "text-green-600";
    if (roi >= 10) return "text-primary";
    if (roi >= 0) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ROI計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ROI計算ツール</h1>
      <p className="text-muted mb-8">
        投資額と回収額を入力してROI（投資収益率）を計算します。期間を入力すると年利換算ROIも算出できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">投資額 (円)</label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              placeholder="例: 1000000"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">回収額・リターン (円)</label>
            <input
              type="number"
              value={returnValue}
              onChange={(e) => setReturnValue(e.target.value)}
              placeholder="例: 1300000"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">運用期間 (年・任意)</label>
            <input
              type="number"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              placeholder="例: 3"
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
                <p className="text-sm text-muted mb-1">ROI</p>
                <p className={`text-3xl font-bold ${getRoiColor(result.roi)}`}>
                  {result.roi.toFixed(2)}%
                </p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">純利益</p>
                <p className={`text-3xl font-bold ${result.netGain >= 0 ? "text-green-600" : "text-red-500"}`}>
                  ¥{fmt(result.netGain)}
                </p>
              </div>
              {result.annualRoi !== null && (
                <div className="bg-background rounded-lg p-4 text-center">
                  <p className="text-sm text-muted mb-1">年利換算ROI</p>
                  <p className={`text-3xl font-bold ${getRoiColor(result.annualRoi)}`}>
                    {result.annualRoi.toFixed(2)}%
                  </p>
                </div>
              )}
            </div>
            <div className="bg-background rounded-lg p-4 text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted">投資額</span>
                <span className="font-medium">¥{fmt(Number(investment))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">回収額</span>
                <span className="font-medium">¥{fmt(Number(returnValue))}</span>
              </div>
              <div className="flex justify-between border-t border-card-border pt-1 mt-1">
                <span className="text-muted">純利益 (回収額 − 投資額)</span>
                <span className="font-bold">¥{fmt(result.netGain)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">ROI = 純利益 ÷ 投資額 × 100</span>
                <span className="font-medium">{result.roi.toFixed(2)}%</span>
              </div>
              {result.annualRoi !== null && (
                <div className="flex justify-between">
                  <span className="text-muted">年利換算ROI (CAGR)</span>
                  <span className="font-medium">{result.annualRoi.toFixed(2)}%</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ROI計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 投資額（初期コスト）を入力します。</p>
          <p>2. 回収額（リターン）を入力します。</p>
          <p>3. 任意で運用期間（年数）を入力すると年利換算ROI（CAGR）も計算されます。</p>
          <p>ROI（投資収益率）= (回収額 − 投資額) ÷ 投資額 × 100</p>
          <p>ROIが高いほど投資効率が良いことを示します。負の場合は損失を意味します。</p>
          <p>広告・設備投資・不動産など様々な投資判断にご活用ください。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="roi-calculator" category="日常ツール" />
      <RelatedTools currentSlug="roi-calculator" category="日常ツール" />
    </div>
  );
}
