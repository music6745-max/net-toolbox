"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [wakeTime, setWakeTime] = useState("07:00");

  const cycles = [3, 4, 5, 6];
  const calc = () => {
    const [h, m] = wakeTime.split(":").map(Number);
    if (isNaN(h) || isNaN(m)) return [];
    return cycles.map(c => {
      let total = h * 60 + m - c * 90 - 14; // 14 min to fall asleep
      while (total < 0) total += 24 * 60;
      const hh = Math.floor(total / 60) % 24;
      const mm = total % 60;
      return { c, time: `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}` };
    });
  };
  const result = calc();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>睡眠サイクル計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">睡眠サイクル計算ツール</h1>
      <p className="text-muted mb-8">起床時刻から逆算して、睡眠サイクル(90分)に合わせた最適な就寝時刻を提示。すっきり目覚めるための1本。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">起床時刻</label>
        <input type="time" value={wakeTime} onChange={e => setWakeTime(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" />
        <div className="mt-6 space-y-2">
          {result.map(r => (
            <div key={r.c} className="flex justify-between bg-background rounded-lg p-3 text-sm">
              <span>{r.c}サイクル ({r.c * 1.5}時間睡眠)</span>
              <span className="font-bold text-primary">{r.time} 就寝</span>
            </div>
          ))}
        </div>
      </div>
      <AffiliateSection slug="sleep-cycle-calculator" category="日常ツール" />
      <RelatedTools currentSlug="sleep-cycle-calculator" category="日常ツール" />
    </div>
  );
}
