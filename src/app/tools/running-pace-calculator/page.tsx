"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [distance, setDistance] = useState("10");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("55");
  const [seconds, setSeconds] = useState("0");

  const dist = parseFloat(distance) || 0;
  const totalSec = (parseInt(hours) || 0) * 3600 + (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0);
  const paceSec = dist > 0 ? totalSec / dist : 0;
  const paceMin = Math.floor(paceSec / 60);
  const paceS = Math.round(paceSec % 60);
  const speed = totalSec > 0 ? (dist / (totalSec / 3600)) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ランニングペース計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">ランニングペース計算ツール</h1>
      <p className="text-muted mb-8">距離とタイムからkmあたりのペース（min/km）と時速（km/h）を算出。マラソン・トレーニング計画に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">距離（km）</label><input type="number" value={distance} onChange={e => setDistance(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div className="grid grid-cols-3 gap-3">
            <div><label className="block text-sm font-medium mb-2">時間</label><input type="number" value={hours} onChange={e => setHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
            <div><label className="block text-sm font-medium mb-2">分</label><input type="number" value={minutes} onChange={e => setMinutes(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
            <div><label className="block text-sm font-medium mb-2">秒</label><input type="number" value={seconds} onChange={e => setSeconds(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ペース</div><div className="text-xl font-bold text-primary">{paceMin}'{paceS.toString().padStart(2, '0')}"/km</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">時速</div><div className="text-xl font-bold">{speed.toFixed(2)} km/h</div></div>
        </div>
      </div>
      <AffiliateSection slug="running-pace-calculator" category="日常ツール" />
      <RelatedTools currentSlug="running-pace-calculator" category="日常ツール" />
    </div>
  );
}
