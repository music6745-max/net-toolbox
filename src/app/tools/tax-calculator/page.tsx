"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type TaxRate = 10 | 8;

function formatNumber(n: number): string {
  return n.toLocaleString("ja-JP", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function TaxCalculatorPage() {
  const [price, setPrice] = useState("");
  const [taxRate, setTaxRate] = useState<TaxRate>(10);
  const [priceType, setPriceType] = useState<"excluding" | "including">("excluding");
  const [result, setResult] = useState<{
    taxAmount: number;
    priceExcluding: number;
    priceIncluding: number;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const p = Number(price);
    if (!price || isNaN(p) || p < 0) {
      setError("有効な価格を入力してください");
      setResult(null);
      return;
    }
    setError("");
    const rate = taxRate / 100;
    if (priceType === "excluding") {
      const taxAmount = p * rate;
      setResult({
        taxAmount,
        priceExcluding: p,
        priceIncluding: p + taxAmount,
      });
    } else {
      const priceExcluding = p / (1 + rate);
      const taxAmount = p - priceExcluding;
      setResult({
        taxAmount,
        priceExcluding,
        priceIncluding: p,
      });
    }
  };

  const reset = () => {
    setPrice("");
    setTaxRate(10);
    setPriceType("excluding");
    setResult(null);
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>消費税計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">消費税計算ツール</h1>
      <p className="text-muted mb-8">
        価格と税率を入力して消費税額・税込価格・税抜価格を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">入力する価格の種類</label>
          <div className="flex gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="radio"
                name="priceType"
                checked={priceType === "excluding"}
                onChange={() => setPriceType("excluding")}
                className="accent-primary"
              />
              税抜価格
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="radio"
                name="priceType"
                checked={priceType === "including"}
                onChange={() => setPriceType("including")}
                className="accent-primary"
              />
              税込価格
            </label>
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">
            {priceType === "excluding" ? "税抜価格" : "税込価格"} (円)
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="例: 1000"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">税率</label>
          <div className="flex gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="radio"
                name="taxRate"
                checked={taxRate === 10}
                onChange={() => setTaxRate(10)}
                className="accent-primary"
              />
              10%（標準税率）
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="radio"
                name="taxRate"
                checked={taxRate === 8}
                onChange={() => setTaxRate(8)}
                className="accent-primary"
              />
              8%（軽減税率）
            </label>
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
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-background rounded-lg p-4 text-center">
              <p className="text-xs text-muted mb-1">消費税額</p>
              <p className="text-2xl font-bold text-primary">¥{formatNumber(result.taxAmount)}</p>
              <p className="text-xs text-muted mt-1">({taxRate}%)</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center">
              <p className="text-xs text-muted mb-1">税抜価格</p>
              <p className="text-2xl font-bold">¥{formatNumber(result.priceExcluding)}</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center">
              <p className="text-xs text-muted mb-1">税込価格</p>
              <p className="text-2xl font-bold">¥{formatNumber(result.priceIncluding)}</p>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">消費税計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 「税抜価格」か「税込価格」のどちらを入力するか選択します。</p>
          <p>2. 価格（円）を入力します。</p>
          <p>3. 税率を「10%（標準税率）」か「8%（軽減税率）」から選択します。軽減税率は食料品や新聞などに適用されます。</p>
          <p>4. 「計算する」ボタンをクリックすると消費税額・税抜価格・税込価格が表示されます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="tax-calculator" category="日常ツール" />
    </div>
  );
}
