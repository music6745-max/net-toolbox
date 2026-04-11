"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [birthYear, setBirthYear] = useState("1990");
  const [retireAge, setRetireAge] = useState("65");
  const [monthlyExpense, setMonthlyExpense] = useState("250000");

  const by = parseInt(birthYear) || 0;
  const ra = parseInt(retireAge) || 0;
  const me = parseFloat(monthlyExpense) || 0;
  const now = new Date().getFullYear();
  const currentAge = now - by;
  const yearsToRetire = ra - currentAge;
  const retireYear = now + yearsToRetire;
  const lifeExpectancy = 87; // 日本人平均
  const retirementYears = lifeExpectancy - ra;
  const totalNeeded = me * 12 * retirementYears;
  const pensionEstimate = 150000 * 12 * retirementYears; // 年金概算
  const gap = totalNeeded - pensionEstimate;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>定年までの準備計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">定年退職までの準備シミュレーター</h1>
      <p className="text-muted mb-8">生まれ年・定年年齢・月の生活費から、老後に必要な資金と年金不足額を概算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">生まれ年</label><input type="number" value={birthYear} onChange={e => setBirthYear(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">定年年齢</label><input type="number" value={retireAge} onChange={e => setRetireAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">月の生活費(円)</label><input type="number" value={monthlyExpense} onChange={e => setMonthlyExpense(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">現在の年齢</div><div className="text-lg font-bold">{currentAge}歳</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">定年まで</div><div className="text-lg font-bold">{yearsToRetire > 0 ? `${yearsToRetire}年` : "定年済み"}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">老後期間</div><div className="text-lg font-bold">{retirementYears}年</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">老後総額</div><div className="text-sm font-bold">¥{Math.round(totalNeeded).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年金見込(概算)</div><div className="text-sm font-bold">¥{Math.round(pensionEstimate).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">不足額</div><div className="text-xl font-bold text-primary">¥{Math.round(gap).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 年金は月15万円の概算。実際は加入歴・年収で変動します。インフレ未考慮。</p>
      </div>
      <AffiliateSection slug="age-retirement-calc" category="日常ツール" />
      <RelatedTools currentSlug="age-retirement-calc" category="日常ツール" />
    </div>
  );
}
