"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [height, setHeight] = useState("170");

  const h = parseFloat(height) || 0;
  const h2 = (h / 100) * (h / 100);
  const minWeight = 18.5 * h2;
  const maxWeight = 25 * h2;
  const idealWeight = 22 * h2;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>理想体重計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">理想体重・標準体重計算</h1>
      <p className="text-muted mb-8">身長から理想体重(BMI22)と標準範囲(BMI18.5〜25)を計算。ダイエット目標設定に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">身長(cm)</label><input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">標準下限(BMI18.5)</div><div className="text-lg font-bold">{minWeight.toFixed(1)}kg</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">理想(BMI22)</div><div className="text-xl font-bold text-primary">{idealWeight.toFixed(1)}kg</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">標準上限(BMI25)</div><div className="text-lg font-bold">{maxWeight.toFixed(1)}kg</div></div>
        </div>
      </div>
      <AffiliateSection slug="bmi-ideal-weight" category="日常ツール" />
      <RelatedTools currentSlug="bmi-ideal-weight" category="日常ツール" />
    </div>
  );
}
