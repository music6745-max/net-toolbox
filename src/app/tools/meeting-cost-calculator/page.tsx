"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [participants, setParticipants] = useState("8");
  const [duration, setDuration] = useState("60");
  const [avgSalary, setAvgSalary] = useState("500000");

  const p = parseInt(participants) || 0;
  const d = parseInt(duration) || 0;
  const s = parseFloat(avgSalary) || 0;
  const hourlyRate = s / 160; // 月160時間勤務想定
  const costPerMinute = hourlyRate / 60;
  const totalCost = costPerMinute * d * p;
  const yearlyIfWeekly = totalCost * 52;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>会議コスト計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">会議コスト計算ツール</h1>
      <p className="text-muted mb-8">参加人数・時間・平均月給から会議の人件費コストを可視化。無駄な会議の削減に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">参加人数</label><input type="number" value={participants} onChange={e => setParticipants(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">時間(分)</label><input type="number" value={duration} onChange={e => setDuration(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">平均月給(円)</label><input type="number" value={avgSalary} onChange={e => setAvgSalary(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1人あたり時給</div><div className="text-lg font-bold">¥{Math.round(hourlyRate).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">この会議のコスト</div><div className="text-xl font-bold text-primary">¥{Math.round(totalCost).toLocaleString()}</div></div>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎週なら年間</div><div className="text-lg font-bold text-red-500">¥{Math.round(yearlyIfWeekly).toLocaleString()}</div></div>
        </div>
      </div>
      <AffiliateSection slug="meeting-cost-calculator" category="日常ツール" />
      <RelatedTools currentSlug="meeting-cost-calculator" category="日常ツール" />
    </div>
  );
}
