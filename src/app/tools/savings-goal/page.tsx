"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [goal, setGoal] = useState("1000000");
  const [months, setMonths] = useState("12");
  const [current, setCurrent] = useState("0");

  const g = parseFloat(goal) || 0;
  const m = parseInt(months) || 1;
  const c = parseFloat(current) || 0;
  const remaining = g - c;
  const monthly = remaining / m;
  const daily = monthly / 30;
  const weekly = monthly / 4.33;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>貯金目標計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">貯金目標シミュレーター</h1>
      <p className="text-muted mb-8">目標額・期間・現在の貯金額から毎月・毎週・毎日いくら貯めればよいかを計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">目標貯金額(円)</label><input type="number" value={goal} onChange={e => setGoal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">達成期間(ヶ月)</label><input type="number" value={months} onChange={e => setMonths(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">現在の貯金額(円)</label><input type="number" value={current} onChange={e => setCurrent(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎月</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎週</div><div className="text-lg font-bold">¥{Math.round(weekly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎日</div><div className="text-lg font-bold">¥{Math.round(daily).toLocaleString()}</div></div>
        </div>
      </div>
      <AffiliateSection slug="savings-goal" category="日常ツール" />
      <RelatedTools currentSlug="savings-goal" category="日常ツール" />
    </div>
  );
}
