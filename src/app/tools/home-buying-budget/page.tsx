"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [annual, setAnnual] = useState("6000000");
  const [rate, setRate] = useState("0.8");
  const [years, setYears] = useState("35");
  const [ratio, setRatio] = useState("25");

  const a = parseFloat(annual) || 0;
  const r = parseFloat(rate) / 100 / 12;
  const n = (parseFloat(years) || 0) * 12;
  const loanRatio = parseFloat(ratio) / 100;
  const monthlyBudget = (a * loanRatio) / 12;
  // PV of annuity
  const maxLoan = r > 0 ? monthlyBudget * (1 - Math.pow(1 + r, -n)) / r : monthlyBudget * n;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>住宅購入予算</span></nav>
      <h1 className="text-2xl font-bold mb-2">住宅購入 予算算出ツール</h1>
      <p className="text-muted mb-8">年収と返済負担率から借入可能額を逆算。住宅購入の予算目安を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">年収(円)</label><input type="number" value={annual} onChange={e => setAnnual(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">金利(年%)</label><input type="number" step="0.01" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">返済期間(年)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">返済負担率(%)※年収の何%を返済に充てるか</label>
          <select value={ratio} onChange={e => setRatio(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="20">20%(余裕あり)</option>
            <option value="25">25%(標準)</option>
            <option value="30">30%(やや高め)</option>
            <option value="35">35%(上限)</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎月返済目安</div><div className="text-lg font-bold">¥{Math.round(monthlyBudget).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">借入可能額目安</div><div className="text-xl font-bold text-primary">¥{Math.round(maxLoan).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 概算です。実際の審査では年収・勤続年数・他借入・団信加入等で決まります。</p>
      </div>
      <AffiliateSection slug="home-buying-budget" category="日常ツール" />
      <RelatedTools currentSlug="home-buying-budget" category="日常ツール" />
    </div>
  );
}
