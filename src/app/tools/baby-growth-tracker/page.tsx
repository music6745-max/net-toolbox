"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [gender, setGender] = useState("boy");
  const [months, setMonths] = useState("6");
  const [weight, setWeight] = useState("7.5");
  const [height, setHeight] = useState("67");

  const m = parseInt(months) || 0;
  const w = parseFloat(weight) || 0;
  const h = parseFloat(height) || 0;

  // Average growth data (simplified WHO standards)
  const boyAvg: Record<number, { w: number; h: number }> = {
    0: { w: 3.3, h: 49.9 }, 1: { w: 4.5, h: 54.7 }, 2: { w: 5.6, h: 58.4 }, 3: { w: 6.4, h: 61.4 },
    4: { w: 7.0, h: 63.9 }, 5: { w: 7.5, h: 65.9 }, 6: { w: 7.9, h: 67.6 }, 7: { w: 8.3, h: 69.2 },
    8: { w: 8.6, h: 70.6 }, 9: { w: 8.9, h: 72.0 }, 10: { w: 9.2, h: 73.3 }, 11: { w: 9.4, h: 74.5 },
    12: { w: 9.6, h: 75.7 }, 18: { w: 10.9, h: 82.3 }, 24: { w: 12.2, h: 87.8 },
  };
  const girlAvg: Record<number, { w: number; h: number }> = {
    0: { w: 3.2, h: 49.1 }, 1: { w: 4.2, h: 53.7 }, 2: { w: 5.1, h: 57.1 }, 3: { w: 5.8, h: 59.8 },
    4: { w: 6.4, h: 62.1 }, 5: { w: 6.9, h: 64.0 }, 6: { w: 7.3, h: 65.7 }, 7: { w: 7.6, h: 67.3 },
    8: { w: 7.9, h: 68.7 }, 9: { w: 8.2, h: 70.1 }, 10: { w: 8.5, h: 71.5 }, 11: { w: 8.7, h: 72.8 },
    12: { w: 8.9, h: 74.0 }, 18: { w: 10.2, h: 80.7 }, 24: { w: 11.5, h: 86.4 },
  };

  const avg = gender === "boy" ? boyAvg : girlAvg;
  const closest = avg[m] || avg[Math.min(...Object.keys(avg).map(Number).filter(k => k >= m))] || { w: 0, h: 0 };
  const wDiff = closest.w > 0 ? ((w - closest.w) / closest.w * 100).toFixed(1) : "0";
  const hDiff = closest.h > 0 ? ((h - closest.h) / closest.h * 100).toFixed(1) : "0";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>赤ちゃん成長チェック</span></nav>
      <h1 className="text-2xl font-bold mb-2">赤ちゃん成長チェックツール</h1>
      <p className="text-muted mb-8">月齢・体重・身長をWHO基準の平均値と比較。成長の目安を確認できます。※医療助言ではありません。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">性別</label>
          <select value={gender} onChange={e => setGender(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="boy">男の子</option>
            <option value="girl">女の子</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">月齢</label><input type="number" value={months} onChange={e => setMonths(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">体重(kg)</label><input type="number" step="0.1" value={weight} onChange={e => setWeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">身長(cm)</label><input type="number" step="0.1" value={height} onChange={e => setHeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        {closest.w > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-card-bg border border-card-border rounded-lg p-4">
              <div className="text-xs text-muted mb-2">体重</div>
              <div className="flex justify-between text-sm"><span>あなたのお子さま</span><span className="font-bold">{w}kg</span></div>
              <div className="flex justify-between text-sm"><span>平均値</span><span>{closest.w}kg</span></div>
              <div className="text-sm mt-1 font-bold" style={{color: parseFloat(wDiff) >= 0 ? '#22c55e' : '#ef4444'}}>平均比 {wDiff}%</div>
            </div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4">
              <div className="text-xs text-muted mb-2">身長</div>
              <div className="flex justify-between text-sm"><span>あなたのお子さま</span><span className="font-bold">{h}cm</span></div>
              <div className="flex justify-between text-sm"><span>平均値</span><span>{closest.h}cm</span></div>
              <div className="text-sm mt-1 font-bold" style={{color: parseFloat(hDiff) >= 0 ? '#22c55e' : '#ef4444'}}>平均比 {hDiff}%</div>
            </div>
          </div>
        )}
        <p className="text-xs text-muted mt-2">※ WHO成長基準の簡略化された平均値です。個人差は大きいため、心配な場合は小児科にご相談ください。</p>
      </div>
      <AffiliateSection slug="baby-growth-tracker" category="日常ツール" />
      <RelatedTools currentSlug="baby-growth-tracker" category="日常ツール" />
    </div>
  );
}
