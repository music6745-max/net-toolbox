"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [dist, setDist] = useState("42.195");
  const [hours, setHours] = useState("4");
  const [mins, setMins] = useState("0");
  const d = parseFloat(dist)||0;
  const totalMin = (parseInt(hours)||0)*60 + (parseInt(mins)||0);
  const pace = d > 0 ? totalMin / d : 0;
  const speed = totalMin > 0 ? (d / totalMin) * 60 : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ランニングペース計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">ランニングペース計算ツール</h1>
      <p className="text-muted mb-8">距離・タイムからペース(分/km)を計算。マラソン・ジョギングの記録管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">距離 (km)</label><input type="number" value={dist} onChange={e=>setDist(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-2">時間</label><input type="number" value={hours} onChange={e=>setHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">分</label><input type="number" value={mins} onChange={e=>setMins(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ペース</div><div className="text-xl font-bold text-primary">{Math.floor(pace)}分{Math.round((pace%1)*60)}秒/km</div></div>
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">平均速度</div><div className="text-xl font-bold">{speed.toFixed(1)} km/h</div></div>
          </div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>距離・タイムからペース(分/km)を計算。マラソン・ジョギングの記録管理に。</p></div></section>
      <RelatedTools currentSlug="pace-calculator" category="日常ツール" />
    </div>
  );
}