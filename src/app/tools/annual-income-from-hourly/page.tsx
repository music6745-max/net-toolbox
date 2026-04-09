"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [hourly, setHourly] = useState("1200");
  const [hoursDay, setHoursDay] = useState("8");
  const [daysWeek, setDaysWeek] = useState("5");

  const h = parseFloat(hourly) || 0;
  const hd = parseFloat(hoursDay) || 0;
  const dw = parseFloat(daysWeek) || 0;
  const daily = h * hd;
  const weekly = daily * dw;
  const monthly = weekly * 4.33;
  const annual = monthly * 12;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>時給から年収計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">時給から年収・月収を計算</h1>
      <p className="text-muted mb-8">パート・アルバイトの時給から年収・月収・週収・日収を計算。扶養内で働く際の収入管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">時給(円)</label><input type="number" value={hourly} onChange={e => setHourly(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">1日の勤務時間</label><input type="number" step="0.5" value={hoursDay} onChange={e => setHoursDay(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">週の勤務日数</label><input type="number" value={daysWeek} onChange={e => setDaysWeek(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">日収</div><div className="text-lg font-bold">¥{Math.round(daily).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">週収</div><div className="text-lg font-bold">¥{Math.round(weekly).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月収</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年収</div><div className="text-lg font-bold">¥{Math.round(annual).toLocaleString()}</div></div>
        </div>
        <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 text-xs text-yellow-800 dark:text-yellow-200">
          扶養内目安: 年収103万円以下(所得税非課税) / 130万円以下(社保扶養)
        </div>
      </div>
      <AffiliateSection slug="annual-income-from-hourly" category="日常ツール" />
      <RelatedTools currentSlug="annual-income-from-hourly" category="日常ツール" />
    </div>
  );
}
