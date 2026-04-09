"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [weight, setWeight] = useState("60");
  const [activity, setActivity] = useState("normal");

  const w = parseFloat(weight) || 0;
  const factors: Record<string, number> = { low: 30, normal: 35, high: 40 };
  const total = w * factors[activity];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>水分摂取量計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">1日の水分摂取量計算ツール</h1>
      <p className="text-muted mb-8">体重と活動量から1日に必要な水分量を計算。健康維持・ダイエット・スポーツに活用。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">体重(kg)</label><input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">活動量</label>
          <select value={activity} onChange={e => setActivity(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="low">低い（デスクワーク中心）</option>
            <option value="normal">普通（立ち仕事/通勤）</option>
            <option value="high">高い（運動/肉体労働）</option>
          </select>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center mt-4">
          <div className="text-xs text-muted mb-1">1日に必要な水分量</div>
          <div className="text-3xl font-bold text-primary">{(total / 1000).toFixed(2)} L</div>
          <div className="text-xs text-muted mt-2">≒ コップ{Math.ceil(total / 200)}杯分(200ml換算)</div>
        </div>
      </div>
      <AffiliateSection slug="water-intake-calculator" category="日常ツール" />
      <RelatedTools currentSlug="water-intake-calculator" category="日常ツール" />
    </div>
  );
}
