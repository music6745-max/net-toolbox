"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [watts, setWatts] = useState("1000");
  const [hours, setHours] = useState("4");
  const [rate, setRate] = useState("31");

  const w = parseFloat(watts) || 0;
  const h = parseFloat(hours) || 0;
  const r = parseFloat(rate) || 0;
  const kwhPerDay = (w * h) / 1000;
  const daily = kwhPerDay * r;
  const monthly = daily * 30;
  const yearly = daily * 365;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>家電の電気代計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">家電の電気代計算ツール</h1>
      <p className="text-muted mb-8">消費電力・使用時間・電気料金単価から家電の電気代を計算。節約の検討材料に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">消費電力(W)</label><input type="number" value={watts} onChange={e => setWatts(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">1日の使用時間(h)</label><input type="number" step="0.5" value={hours} onChange={e => setHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">電気料金単価(円/kWh)</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1日</div><div className="text-lg font-bold">¥{Math.round(daily).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1ヶ月</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1年</div><div className="text-lg font-bold">¥{Math.round(yearly).toLocaleString()}</div></div>
        </div>
      </div>
      <AffiliateSection slug="appliance-electricity-cost" category="日常ツール" />
      <RelatedTools currentSlug="appliance-electricity-cost" category="日常ツール" />
    </div>
  );
}
