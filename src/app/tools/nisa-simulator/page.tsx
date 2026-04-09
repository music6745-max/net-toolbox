"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [monthly, setMonthly] = useState("30000");
  const [years, setYears] = useState("20");
  const [rate, setRate] = useState("5");

  const m = parseFloat(monthly) || 0;
  const y = parseFloat(years) || 0;
  const r = parseFloat(rate) || 0;
  const months = y * 12;
  const monthlyRate = r / 100 / 12;
  // Future value of annuity
  const fv = monthlyRate > 0 ? m * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) : m * months;
  const totalInvested = m * months;
  const profit = fv - totalInvested;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>NISA積立シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">新NISA積立シミュレーター</h1>
      <p className="text-muted mb-8">毎月の積立額・期間・想定利回りから将来の資産額を試算。新NISAの枠内での資産形成プランに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">毎月の積立額(円)</label><input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">積立期間(年)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">想定年利(%)</label><input type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">元本合計</div><div className="text-lg font-bold">¥{Math.round(totalInvested).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">将来資産</div><div className="text-lg font-bold text-primary">¥{Math.round(fv).toLocaleString()}</div></div>
          <div className="bg-green-50 dark:bg-green-900/40 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">運用益</div><div className="text-lg font-bold text-green-600">¥{Math.round(profit).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 将来の運用成果を保証するものではありません。最終判断はご自身で行ってください。</p>
      </div>
      <AffiliateSection slug="nisa-simulator" category="日常ツール" />
      <RelatedTools currentSlug="nisa-simulator" category="日常ツール" />
    </div>
  );
}
