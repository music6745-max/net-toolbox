"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function BreakevenCalculatorPage() {
  const [fixedCost, setFixedCost] = useState("");
  const [variableCost, setVariableCost] = useState("");
  const [price, setPrice] = useState("");
  const [result, setResult] = useState<{
    breakevenQty: number;
    breakevenRevenue: number;
    contributionMargin: number;
    contributionMarginRate: number;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const fc = Number(fixedCost);
    const vc = Number(variableCost);
    const p = Number(price);

    if (!fixedCost || !variableCost || !price || isNaN(fc) || isNaN(vc) || isNaN(p)) {
      setError("すべての項目を正しく入力してください");
      setResult(null);
      return;
    }
    if (fc < 0) { setError("固定費は0以上の値を入力してください"); setResult(null); return; }
    if (vc < 0) { setError("変動費は0以上の値を入力してください"); setResult(null); return; }
    if (p <= 0) { setError("販売価格は0より大きい値を入力してください"); setResult(null); return; }
    if (vc >= p) { setError("変動費が販売価格以上のため、損益分岐点が存在しません"); setResult(null); return; }

    setError("");
    const contributionMargin = p - vc;
    const contributionMarginRate = (contributionMargin / p) * 100;
    const breakevenQty = fc / contributionMargin;
    const breakevenRevenue = breakevenQty * p;

    setResult({ breakevenQty, breakevenRevenue, contributionMargin, contributionMarginRate });
  };

  const reset = () => {
    setFixedCost("");
    setVariableCost("");
    setPrice("");
    setResult(null);
    setError("");
  };

  const fmt = (n: number) => Math.round(n).toLocaleString("ja-JP");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>損益分岐点計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">損益分岐点計算ツール</h1>
      <p className="text-muted mb-8">
        固定費・変動費・販売価格を入力して、黒字転換に必要な販売数量と売上を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">固定費 (円)</label>
            <input
              type="number"
              value={fixedCost}
              onChange={(e) => setFixedCost(e.target.value)}
              placeholder="例: 500000"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <p className="text-xs text-muted mt-1">家賃・人件費など売上によらない費用</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">変動費 (円/個)</label>
            <input
              type="number"
              value={variableCost}
              onChange={(e) => setVariableCost(e.target.value)}
              placeholder="例: 300"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <p className="text-xs text-muted mt-1">1個あたりの原材料費・仕入れ費用</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">販売価格 (円/個)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="例: 1000"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <p className="text-xs text-muted mt-1">1個あたりの販売価格</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">損益分岐点（販売数量）</p>
                <p className="text-3xl font-bold text-primary">
                  {result.breakevenQty.toFixed(1)} <span className="text-lg font-normal">個</span>
                </p>
                <p className="text-xs text-muted mt-1">
                  切り上げ: {Math.ceil(result.breakevenQty).toLocaleString()}個
                </p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">損益分岐点（売上高）</p>
                <p className="text-3xl font-bold text-green-600">¥{fmt(result.breakevenRevenue)}</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted">固定費</span>
                <span className="font-medium">¥{fmt(Number(fixedCost))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">変動費（1個）</span>
                <span className="font-medium">¥{fmt(Number(variableCost))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">販売価格（1個）</span>
                <span className="font-medium">¥{fmt(Number(price))}</span>
              </div>
              <div className="flex justify-between border-t border-card-border pt-1 mt-1">
                <span className="text-muted">限界利益（1個あたり）</span>
                <span className="font-medium">¥{fmt(result.contributionMargin)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">限界利益率</span>
                <span className="font-medium">{result.contributionMarginRate.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">損益分岐点計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 固定費（売上に関わらず発生するコスト）を入力します。例: 家賃、人件費</p>
          <p>2. 変動費（1個あたりの製造・仕入れコスト）を入力します。</p>
          <p>3. 販売価格（1個あたりの販売金額）を入力します。</p>
          <p>4. 「計算する」を押すと、損益分岐点（販売数量・売上額）が表示されます。</p>
          <p>損益分岐点 = 固定費 ÷ (販売価格 − 変動費)</p>
          <p>損益分岐点以上の販売数量・売上を達成すれば黒字になります。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="breakeven-calculator" category="日常ツール" />
    </div>
  );
}
