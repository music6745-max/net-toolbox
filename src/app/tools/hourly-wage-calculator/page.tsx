"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [annual, setAnnual] = useState("4500000");
  const [workDays, setWorkDays] = useState("245");
  const [workHours, setWorkHours] = useState("8");

  const a = parseFloat(annual) || 0;
  const d = parseFloat(workDays) || 1;
  const h = parseFloat(workHours) || 1;
  const monthly = a / 12;
  const daily = a / d;
  const hourly = a / (d * h);
  const minutely = hourly / 60;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>時給換算計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">年収・時給換算計算ツール</h1>
      <p className="text-muted mb-8">年収から時給・日給・月給を逆算。転職時の年収交渉や働き方を考える材料に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">年収(円)</label><input type="number" value={annual} onChange={e => setAnnual(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">年間労働日数</label><input type="number" value={workDays} onChange={e => setWorkDays(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">1日の労働時間</label><input type="number" value={workHours} onChange={e => setWorkHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月給</div><div className="text-xl font-bold">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">日給</div><div className="text-xl font-bold">¥{Math.round(daily).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">時給</div><div className="text-2xl font-bold text-primary">¥{Math.round(hourly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">分給</div><div className="text-xl font-bold">¥{Math.round(minutely).toLocaleString()}</div></div>
        </div>
      </div>
      <AffiliateSection slug="hourly-wage-calculator" category="日常ツール" />
      <RelatedTools currentSlug="hourly-wage-calculator" category="日常ツール" />
    </div>
  );
}
