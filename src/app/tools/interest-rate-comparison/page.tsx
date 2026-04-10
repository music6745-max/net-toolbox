"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [principal, setPrincipal] = useState("1000000");
  const [rate1, setRate1] = useState("0.1");
  const [rate2, setRate2] = useState("0.5");
  const [years, setYears] = useState("10");

  const p = parseFloat(principal) || 0;
  const r1 = parseFloat(rate1) / 100;
  const r2 = parseFloat(rate2) / 100;
  const y = parseFloat(years) || 0;
  const amount1 = p * Math.pow(1 + r1, y);
  const amount2 = p * Math.pow(1 + r2, y);
  const diff = amount2 - amount1;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>金利差シミュレーション</span></nav>
      <h1 className="text-2xl font-bold mb-2">金利差シミュレーション</h1>
      <p className="text-muted mb-8">2つの金利で預けた場合の差額を計算。銀行選びの参考に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">元本(円)</label><input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">金利A(%)</label><input type="number" step="0.01" value={rate1} onChange={e => setRate1(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">金利B(%)</label><input type="number" step="0.01" value={rate2} onChange={e => setRate2(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">期間(年)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">金利A({rate1}%)</div><div className="text-lg font-bold">¥{Math.round(amount1).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">金利B({rate2}%)</div><div className="text-lg font-bold">¥{Math.round(amount2).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">差額</div><div className="text-xl font-bold text-primary">¥{Math.round(diff).toLocaleString()}</div></div>
        </div>
      </div>
      <AffiliateSection slug="interest-rate-comparison" category="日常ツール" />
      <RelatedTools currentSlug="interest-rate-comparison" category="日常ツール" />
    </div>
  );
}
