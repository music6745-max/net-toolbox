"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function MortgageCalculatorPage() {
  const [principal, setPrincipal] = useState(30000000);
  const [rate, setRate] = useState(1.5);
  const [years, setYears] = useState(35);

  const monthlyRate = rate / 100 / 12;
  const totalPayments = years * 12;
  const monthly = monthlyRate > 0
    ? principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments) / (Math.pow(1 + monthlyRate, totalPayments) - 1)
    : principal / totalPayments;
  const totalAmount = monthly * totalPayments;
  const totalInterest = totalAmount - principal;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>住宅ローン計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">住宅ローン計算ツール</h1>
      <p className="text-muted mb-8">借入額・金利・返済期間から毎月の返済額と総支払額をシミュレーション。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">借入額（円）</label>
          <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">金利（年%）</label>
            <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">返済期間（年）</label>
            <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {[
            { label: "毎月の返済額", value: `¥${Math.round(monthly).toLocaleString()}` },
            { label: "総返済額", value: `¥${Math.round(totalAmount).toLocaleString()}` },
            { label: "利息総額", value: `¥${Math.round(totalInterest).toLocaleString()}` },
          ].map((s) => (
            <div key={s.label} className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">住宅ローン計算の使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>借入額、年利、返済期間を入力すると、元利均等返済方式での毎月の返済額を計算します。</p><p>住宅購入の資金計画にお役立てください。</p></div></section>
      <AffiliateSection slug="mortgage-calculator" category="日常ツール" />
      <RelatedTools currentSlug="mortgage-calculator" category="日常ツール" />
    </div>
  );
}
