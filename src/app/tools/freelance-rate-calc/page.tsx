"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [targetIncome, setTargetIncome] = useState("5000000");
  const [workDays, setWorkDays] = useState("20");
  const [workHours, setWorkHours] = useState("6");
  const [expenses, setExpenses] = useState("500000");

  const target = parseFloat(targetIncome) || 0;
  const wd = parseInt(workDays) || 1;
  const wh = parseInt(workHours) || 1;
  const exp = parseFloat(expenses) || 0;
  const totalNeeded = target + exp + target * 0.3; // 税金30%概算
  const monthlyNeeded = totalNeeded / 12;
  const dailyRate = monthlyNeeded / wd;
  const hourlyRate = dailyRate / wh;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>フリーランス単価計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">フリーランス適正単価計算ツール</h1>
      <p className="text-muted mb-8">目標年収・稼働日数・経費から適正な日単価・時間単価を逆算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">目標手取り年収(円)</label><input type="number" value={targetIncome} onChange={e => setTargetIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">年間経費(円)</label><input type="number" value={expenses} onChange={e => setExpenses(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">月の稼働日数</label><input type="number" value={workDays} onChange={e => setWorkDays(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">1日の稼働時間</label><input type="number" value={workHours} onChange={e => setWorkHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">必要売上(税込)</div><div className="text-sm font-bold">¥{Math.round(totalNeeded).toLocaleString()}/年</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">必要日単価</div><div className="text-xl font-bold text-primary">¥{Math.round(dailyRate).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">必要時間単価</div><div className="text-lg font-bold">¥{Math.round(hourlyRate).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted">※ 税金は概算30%で計算。実際は所得により変動します。</p>
      </div>
      <AffiliateSection slug="freelance-rate-calc" category="日常ツール" />
      <RelatedTools currentSlug="freelance-rate-calc" category="日常ツール" />
    </div>
  );
}
