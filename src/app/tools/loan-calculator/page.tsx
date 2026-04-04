"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [amount, setAmount] = useState("30000000");
  const [rate, setRate] = useState("1.5");
  const [years, setYears] = useState("35");

  const a = parseFloat(amount) || 0;
  const r = (parseFloat(rate) || 0) / 100 / 12;
  const n = (parseInt(years) || 0) * 12;
  const monthly = r > 0 ? (a * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : a / n;
  const total = monthly * n;
  const interest = total - a;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ローン返済計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">ローン返済計算ツール</h1>
      <p className="text-muted mb-8">借入額・金利・返済期間から月々の返済額と総返済額を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">借入額（円）</label><input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">年利（%）</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">返済期間（年）</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月々の返済額</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">総返済額</div><div className="text-xl font-bold">¥{Math.round(total).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">利息合計</div><div className="text-xl font-bold">¥{Math.round(interest).toLocaleString()}</div></div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>借入額・年利・返済期間を入力すると、元利均等返済方式での月々の返済額を計算します。</p></div></section>
      <AffiliateSection slug="loan-calculator" category="日常ツール" />

      <RelatedTools currentSlug="loan-calculator" category="日常ツール" />
    </div>
  );
}