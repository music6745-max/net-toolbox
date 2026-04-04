"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type Mode = "amount" | "rate";

export default function DiscountCalculatorPage() {
  const [mode, setMode] = useState<Mode>("amount");

  // Mode: amount — original price + discount %
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [amountResult, setAmountResult] = useState<{
    discountAmount: number;
    finalPrice: number;
  } | null>(null);

  // Mode: rate — price A and price B
  const [priceA, setPriceA] = useState("");
  const [priceB, setPriceB] = useState("");
  const [rateResult, setRateResult] = useState<{
    discountRate: number;
    discountAmount: number;
  } | null>(null);

  const [error, setError] = useState("");

  const calculateAmount = () => {
    const p = Number(originalPrice);
    const d = Number(discountPercent);
    if (!originalPrice || isNaN(p) || p <= 0) {
      setError("有効な元の価格を入力してください");
      setAmountResult(null);
      return;
    }
    if (!discountPercent || isNaN(d) || d < 0 || d > 100) {
      setError("割引率は0〜100の範囲で入力してください");
      setAmountResult(null);
      return;
    }
    setError("");
    const discountAmount = p * (d / 100);
    setAmountResult({ discountAmount, finalPrice: p - discountAmount });
  };

  const calculateRate = () => {
    const a = Number(priceA);
    const b = Number(priceB);
    if (!priceA || isNaN(a) || a <= 0) {
      setError("有効な元の価格Aを入力してください");
      setRateResult(null);
      return;
    }
    if (!priceB || isNaN(b) || b < 0) {
      setError("有効な価格Bを入力してください");
      setRateResult(null);
      return;
    }
    if (b > a) {
      setError("価格Bは価格Aより小さい値を入力してください");
      setRateResult(null);
      return;
    }
    setError("");
    const discountAmount = a - b;
    const discountRate = (discountAmount / a) * 100;
    setRateResult({ discountRate, discountAmount });
  };

  const reset = () => {
    setOriginalPrice("");
    setDiscountPercent("");
    setPriceA("");
    setPriceB("");
    setAmountResult(null);
    setRateResult(null);
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>割引計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">割引計算ツール</h1>
      <p className="text-muted mb-8">
        割引後の価格計算と、2つの価格から割引率を逆算する2つのモードに対応しています。
      </p>

      {/* Mode selector */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setMode("amount"); reset(); }}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
            mode === "amount"
              ? "bg-primary text-white border-primary"
              : "border-card-border hover:bg-background"
          }`}
        >
          割引後の価格を計算
        </button>
        <button
          onClick={() => { setMode("rate"); reset(); }}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
            mode === "rate"
              ? "bg-primary text-white border-primary"
              : "border-card-border hover:bg-background"
          }`}
        >
          割引率を逆算
        </button>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        {mode === "amount" ? (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">元の価格 (円)</label>
                <input
                  type="number"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  placeholder="例: 5000"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">割引率 (%)</label>
                <input
                  type="number"
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(e.target.value)}
                  placeholder="例: 20"
                  min="0"
                  max="100"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="flex gap-3">
              <button
                onClick={calculateAmount}
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

            {amountResult && (
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="bg-background rounded-lg p-4 text-center">
                  <p className="text-xs text-muted mb-1">割引額</p>
                  <p className="text-2xl font-bold text-red-500">
                    -{amountResult.discountAmount.toLocaleString("ja-JP", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} 円
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <p className="text-xs text-muted mb-1">割引後の価格</p>
                  <p className="text-2xl font-bold text-primary">
                    {amountResult.finalPrice.toLocaleString("ja-JP", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} 円
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">元の価格A (円)</label>
                <input
                  type="number"
                  value={priceA}
                  onChange={(e) => setPriceA(e.target.value)}
                  placeholder="例: 5000"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">割引後の価格B (円)</label>
                <input
                  type="number"
                  value={priceB}
                  onChange={(e) => setPriceB(e.target.value)}
                  placeholder="例: 3500"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="flex gap-3">
              <button
                onClick={calculateRate}
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

            {rateResult && (
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="bg-background rounded-lg p-4 text-center">
                  <p className="text-xs text-muted mb-1">割引率</p>
                  <p className="text-2xl font-bold text-primary">
                    {rateResult.discountRate.toFixed(2)}%
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <p className="text-xs text-muted mb-1">割引額</p>
                  <p className="text-2xl font-bold text-red-500">
                    -{rateResult.discountAmount.toLocaleString("ja-JP", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} 円
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">割引計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>【割引後の価格を計算】元の価格と割引率（%）を入力すると、割引額と割引後の最終価格が計算されます。</p>
          <p>【割引率を逆算】元の価格Aと割引後の価格Bを入力すると、何%オフかの割引率と割引額を逆算できます。</p>
          <p>セールやクーポン適用時の価格確認にお使いください。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="discount-calculator" category="日常ツール" />
    </div>
  );
}
