"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [principal, setPrincipal] = useState("1000000");
  const [rate, setRate] = useState("0.2");
  const [years, setYears] = useState("10");
  const [compound, setCompound] = useState("monthly");

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) / 100;
  const y = parseFloat(years) || 0;
  const n = compound === "monthly" ? 12 : compound === "daily" ? 365 : 1;
  const amount = p * Math.pow(1 + r / n, n * y);
  const interest = amount - p;
  const afterTax = interest * 0.79685; // 20.315% 税引後
  const finalAmount = p + afterTax;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>定期預金複利計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">定期預金・複利計算ツール</h1>
      <p className="text-muted mb-8">元本・金利・期間から定期預金の満期額を計算。税引後の手取り額も表示。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">元本(円)</label><input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">年利(%)</label><input type="number" step="0.01" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">期間(年)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">複利計算頻度</label>
          <select value={compound} onChange={e => setCompound(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="yearly">年1回</option>
            <option value="monthly">月1回</option>
            <option value="daily">毎日</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">税引前利息</div><div className="text-lg font-bold">¥{Math.round(interest).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">税引後満期額</div><div className="text-xl font-bold text-primary">¥{Math.round(finalAmount).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 税率は20.315%で計算。マル優等の非課税制度は考慮していません。</p>
      </div>
      <AffiliateSection slug="deposit-interest-calc" category="日常ツール" />
      <RelatedTools currentSlug="deposit-interest-calc" category="日常ツール" />
    </div>
  );
}
