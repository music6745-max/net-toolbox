"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [hourly, setHourly] = useState("1500");
  const [hours, setHours] = useState("20");
  const [nightHours, setNightHours] = useState("0");
  const [holidayHours, setHolidayHours] = useState("0");

  const h = parseFloat(hourly) || 0;
  const reg = parseFloat(hours) || 0;
  const night = parseFloat(nightHours) || 0;
  const holiday = parseFloat(holidayHours) || 0;
  const regPay = h * 1.25 * reg;
  const nightPay = h * 1.5 * night;
  const holidayPay = h * 1.35 * holiday;
  const total = regPay + nightPay + holidayPay;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>残業代計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">残業代・深夜・休日労働計算ツール</h1>
      <p className="text-muted mb-8">通常時給から残業代(1.25倍)・深夜手当(1.5倍)・休日手当(1.35倍)を計算。給与明細のチェックに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">時給(円)</label><input type="number" value={hourly} onChange={e => setHourly(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">残業(h)</label><input type="number" value={hours} onChange={e => setHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">深夜(h)</label><input type="number" value={nightHours} onChange={e => setNightHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">休日(h)</label><input type="number" value={holidayHours} onChange={e => setHolidayHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">残業代</div><div className="text-lg font-bold">¥{Math.round(regPay).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">深夜手当</div><div className="text-lg font-bold">¥{Math.round(nightPay).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">休日手当</div><div className="text-lg font-bold">¥{Math.round(holidayPay).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">合計</div><div className="text-xl font-bold text-primary">¥{Math.round(total).toLocaleString()}</div></div>
        </div>
      </div>
      <AffiliateSection slug="overtime-calculator" category="日常ツール" />
      <RelatedTools currentSlug="overtime-calculator" category="日常ツール" />
    </div>
  );
}
