"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [oneway, setOneway] = useState("60");
  const [daysPerWeek, setDaysPerWeek] = useState("5");
  const [hourlyRate, setHourlyRate] = useState("2500");
  const [years, setYears] = useState("10");

  const oneWayMin = parseFloat(oneway) || 0;
  const days = parseFloat(daysPerWeek) || 0;
  const hr = parseFloat(hourlyRate) || 0;
  const y = parseFloat(years) || 0;

  const weeklyMin = oneWayMin * 2 * days;
  const yearlyMin = weeklyMin * 48; // 48週換算
  const yearlyHours = yearlyMin / 60;
  const totalHours = yearlyHours * y;
  const opportunityCost = totalHours * hr;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>通勤時間予算計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">通勤時間予算計算ツール</h1>
      <p className="text-muted mb-8">通勤時間を時給換算し、長期的な機会損失を可視化。転職・引越しの判断材料に。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">片道通勤時間（分）</label><input type="number" value={oneway} onChange={(e) => setOneway(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">出社日数（週）</label><input type="number" value={daysPerWeek} onChange={(e) => setDaysPerWeek(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">あなたの時給換算（円）</label><input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /><p className="text-xs text-muted mt-1">年収÷(1800時間)が目安。年収400万なら約2200円。</p></div>
          <div><label className="block text-sm font-medium mb-2">現職を続ける想定年数</label><input type="number" value={years} onChange={(e) => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">週の通勤時間</div><div className="text-xl font-bold">{Math.round(weeklyMin / 60 * 10) / 10}時間</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間の通勤時間</div><div className="text-xl font-bold">{Math.round(yearlyHours)}時間</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">機会損失（{y}年）</div><div className="text-xl font-bold text-primary">¥{Math.round(opportunityCost).toLocaleString()}</div></div>
        </div>
      </div>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>通勤時間を時給換算することで、長時間通勤の本当のコストが見えてきます。リモートワーク可能な転職や職住近接への引越し判断の参考にしてください。</p></div></section>

      <section className="mt-10 mb-6">
        <Link href="/guide/women-job-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">働き方を見直す転職ガイドを読む</div>
          <p className="text-xs text-muted">リモート・時短対応の求人情報 →</p>
        </Link>
      </section>

      <AffiliateSection slug="commute-time-budget" category="日常ツール" />
      <RelatedTools currentSlug="commute-time-budget" category="日常ツール" />
    </div>
  );
}
