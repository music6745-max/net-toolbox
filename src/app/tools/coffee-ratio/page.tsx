"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [water, setWater] = useState("300");
  const [ratio, setRatio] = useState("16");

  const w = parseFloat(water) || 0;
  const r = parseFloat(ratio) || 1;
  const beans = w / r;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>コーヒー抽出計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">コーヒー抽出比率計算ツール</h1>
      <p className="text-muted mb-8">お湯の量と抽出比率(1:○)からコーヒー豆の必要量を計算。プロ品質の一杯を毎朝に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">お湯の量(g/ml)</label><input type="number" value={water} onChange={e => setWater(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">抽出比率 (1:○)</label>
          <select value={ratio} onChange={e => setRatio(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="14">1:14 濃いめ</option>
            <option value="15">1:15 やや濃いめ</option>
            <option value="16">1:16 標準</option>
            <option value="17">1:17 やや薄め</option>
            <option value="18">1:18 薄め</option>
          </select>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center mt-4">
          <div className="text-xs text-muted mb-1">必要なコーヒー豆</div>
          <div className="text-3xl font-bold text-primary">{beans.toFixed(1)} g</div>
        </div>
      </div>
      <AffiliateSection slug="coffee-ratio" category="日常ツール" />
      <RelatedTools currentSlug="coffee-ratio" category="日常ツール" />
    </div>
  );
}
