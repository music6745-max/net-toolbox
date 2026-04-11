"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [income, setIncome] = useState("5000000");
  const [age, setAge] = useState("30");
  const [down, setDown] = useState("5000000");

  const i = parseFloat(income) || 0;
  const a = parseInt(age) || 0;
  const d = parseFloat(down) || 0;
  const maxYears = Math.min(35, 65 - a);
  const rate = 0.008 / 12; // 0.8% annual
  const n = maxYears * 12;
  const monthlyBudget = i * 0.25 / 12; // 年収の25%
  const maxLoan = rate > 0 ? monthlyBudget * (1 - Math.pow(1 + rate, -n)) / rate : monthlyBudget * n;
  const totalBudget = maxLoan + d;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>住宅購入力診断</span></nav>
      <h1 className="text-2xl font-bold mb-2">住宅購入力診断ツール</h1>
      <p className="text-muted mb-8">年収・年齢・頭金から購入可能な住宅価格の目安を計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">年収(円)</label><input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">年齢</label><input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">頭金(円)</label><input type="number" value={down} onChange={e => setDown(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">最長ローン期間</div><div className="text-lg font-bold">{maxYears}年</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月の返済目安</div><div className="text-sm font-bold">¥{Math.round(monthlyBudget).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">借入可能額</div><div className="text-sm font-bold">¥{Math.round(maxLoan).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">購入可能額</div><div className="text-xl font-bold text-primary">¥{Math.round(totalBudget).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted">※ 金利0.8%・返済負担率25%で計算。実際は審査・他借入で変動します。</p>
      </div>
      <AffiliateSection slug="mortgage-affordability" category="日常ツール" />
      <RelatedTools currentSlug="mortgage-affordability" category="日常ツール" />
    </div>
  );
}
