"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [age, setAge] = useState("30");
  const [resting, setResting] = useState("60");

  const a = parseInt(age) || 0;
  const r = parseInt(resting) || 0;
  const max = 220 - a;
  const reserve = max - r;
  const zones = [
    { name: "Zone1 ウォームアップ", low: 0.5, high: 0.6 },
    { name: "Zone2 脂肪燃焼", low: 0.6, high: 0.7 },
    { name: "Zone3 有酸素", low: 0.7, high: 0.8 },
    { name: "Zone4 無酸素", low: 0.8, high: 0.9 },
    { name: "Zone5 最大", low: 0.9, high: 1.0 },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>心拍ゾーン計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">心拍ゾーン計算ツール</h1>
      <p className="text-muted mb-8">年齢と安静時心拍からカルボーネン法でトレーニング心拍ゾーンを算出。ダイエット・持久力向上に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">年齢</label><input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">安静時心拍数（bpm）</label><input type="number" value={resting} onChange={e => setResting(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="mt-6 text-sm text-muted">最大心拍数: <span className="font-bold text-foreground">{max} bpm</span></div>
        <div className="mt-4 space-y-2">
          {zones.map(z => {
            const lo = Math.round(reserve * z.low + r);
            const hi = Math.round(reserve * z.high + r);
            return <div key={z.name} className="flex justify-between bg-background rounded-lg p-3 text-sm"><span>{z.name}</span><span className="font-bold">{lo}〜{hi} bpm</span></div>;
          })}
        </div>
      </div>
      <AffiliateSection slug="heart-rate-zone" category="日常ツール" />
      <RelatedTools currentSlug="heart-rate-zone" category="日常ツール" />
    </div>
  );
}
