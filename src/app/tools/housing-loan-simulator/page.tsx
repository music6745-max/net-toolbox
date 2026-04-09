"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [principal, setPrincipal] = useState("35000000");
  const [rate, setRate] = useState("0.8");
  const [years, setYears] = useState("35");

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) / 100 / 12;
  const n = (parseFloat(years) || 0) * 12;
  const monthly = r > 0 ? (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : p / n;
  const total = monthly * n;
  const interest = total - p;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>住宅ローン返済シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">住宅ローン返済シミュレーター</h1>
      <p className="text-muted mb-8">借入額・金利・返済期間から毎月の返済額・総返済額・利息を計算。元利均等返済方式。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">借入額(円)</label><input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">金利(年%)</label><input type="number" step="0.01" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">返済期間(年)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎月返済額</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">総返済額</div><div className="text-lg font-bold">¥{Math.round(total).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">利息合計</div><div className="text-lg font-bold">¥{Math.round(interest).toLocaleString()}</div></div>
        </div>
      </div>
      <AffiliateSection slug="housing-loan-simulator" category="日常ツール" />
      <RelatedTools currentSlug="housing-loan-simulator" category="日常ツール" />
    </div>
  );
}
