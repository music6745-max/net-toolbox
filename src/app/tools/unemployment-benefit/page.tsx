"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [wage, setWage] = useState("300000");
  const [age, setAge] = useState("30");
  const [years, setYears] = useState("5");
  const [reason, setReason] = useState("voluntary");

  const w = parseFloat(wage) || 0;
  const a = parseFloat(age) || 0;
  const y = parseFloat(years) || 0;

  const daily = (w * 6) / 180; // 日額
  let rate = 0.5;
  if (daily <= 13630) rate = 0.8;
  else if (daily <= 17310) rate = 0.65;
  else rate = 0.5;
  const benefitDaily = Math.min(daily * rate, 8500); // 上限目安

  // 給付日数
  let days = 90;
  if (reason === "involuntary") {
    if (a < 30) days = y < 1 ? 90 : y < 5 ? 90 : y < 10 ? 120 : y < 20 ? 180 : 240;
    else if (a < 35) days = y < 1 ? 90 : y < 5 ? 120 : y < 10 ? 180 : y < 20 ? 210 : 240;
    else if (a < 45) days = y < 1 ? 90 : y < 5 ? 150 : y < 10 ? 180 : y < 20 ? 240 : 270;
    else if (a < 60) days = y < 1 ? 90 : y < 5 ? 180 : y < 10 ? 240 : y < 20 ? 270 : 330;
    else days = y < 1 ? 90 : y < 5 ? 150 : y < 10 ? 180 : y < 20 ? 210 : 240;
  } else {
    days = y < 10 ? 90 : y < 20 ? 120 : 150;
  }
  const total = benefitDaily * days;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>失業手当シミュレーション</span></nav>
      <h1 className="text-2xl font-bold mb-2">失業手当(雇用保険)給付額シミュレーター</h1>
      <p className="text-muted mb-8">離職時の給与・年齢・勤続年数・離職理由から失業手当の給付額・日数を概算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">離職前6ヶ月の月給平均(円)</label><input type="number" value={wage} onChange={e => setWage(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">年齢</label><input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">勤続年数</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">離職理由</label>
          <select value={reason} onChange={e => setReason(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="voluntary">自己都合</option>
            <option value="involuntary">会社都合</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">基本手当日額</div><div className="text-lg font-bold">¥{Math.round(benefitDaily).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">給付日数</div><div className="text-lg font-bold">{days}日</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">総額目安</div><div className="text-xl font-bold text-primary">¥{Math.round(total).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 概算です。正確な額はハローワークにご確認ください。自己都合の場合は2ヶ月の給付制限期間があります。</p>
      </div>
      <AffiliateSection slug="unemployment-benefit" category="日常ツール" />
      <RelatedTools currentSlug="unemployment-benefit" category="日常ツール" />
    </div>
  );
}
