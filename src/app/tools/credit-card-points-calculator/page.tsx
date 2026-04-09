"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [monthly, setMonthly] = useState("100000");
  const [rate, setRate] = useState("1.0");

  const m = parseFloat(monthly) || 0;
  const r = parseFloat(rate) || 0;
  const monthlyPoints = m * r / 100;
  const yearlyPoints = monthlyPoints * 12;
  const fiveYearPoints = yearlyPoints * 5;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>クレカポイント還元計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">クレジットカードポイント還元計算</h1>
      <p className="text-muted mb-8">月の利用額と還元率から獲得ポイントを計算。クレカ選びの参考に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">月の利用額(円)</label><input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">還元率(%)</label><input type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月間ポイント</div><div className="text-lg font-bold">{Math.round(monthlyPoints).toLocaleString()}pt</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間ポイント</div><div className="text-xl font-bold text-primary">{Math.round(yearlyPoints).toLocaleString()}pt</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">5年間</div><div className="text-lg font-bold">{Math.round(fiveYearPoints).toLocaleString()}pt</div></div>
        </div>
      </div>
      <AffiliateSection slug="credit-card-points-calculator" category="日常ツール" />
      <RelatedTools currentSlug="credit-card-points-calculator" category="日常ツール" />
    </div>
  );
}
