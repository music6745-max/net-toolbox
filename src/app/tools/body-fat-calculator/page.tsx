"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [gender, setGender] = useState("male");
  const [waist, setWaist] = useState("80");
  const [neck, setNeck] = useState("38");
  const [hip, setHip] = useState("95");
  const [height, setHeight] = useState("170");

  const w = parseFloat(waist) || 0;
  const n = parseFloat(neck) || 0;
  const h = parseFloat(height) || 0;
  const hp = parseFloat(hip) || 0;

  let bodyFat = 0;
  if (gender === "male") {
    bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
  } else {
    bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.22100 * Math.log10(h)) - 450;
  }

  const evaluation = (() => {
    if (gender === "male") {
      if (bodyFat < 14) return "アスリート";
      if (bodyFat < 18) return "良好";
      if (bodyFat < 24) return "標準";
      if (bodyFat < 30) return "やや高い";
      return "高い";
    } else {
      if (bodyFat < 21) return "アスリート";
      if (bodyFat < 25) return "良好";
      if (bodyFat < 31) return "標準";
      if (bodyFat < 37) return "やや高い";
      return "高い";
    }
  })();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>体脂肪率計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">体脂肪率計算ツール（米海軍法）</h1>
      <p className="text-muted mb-8">米海軍式の体脂肪率推定。腹囲・首周り・身長(女性は腰囲も)を入力するだけで体脂肪率を推定します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">性別</label>
          <select value={gender} onChange={e => setGender(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="male">男性</option>
            <option value="female">女性</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">腹囲(cm)</label><input type="number" value={waist} onChange={e => setWaist(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">首周り(cm)</label><input type="number" value={neck} onChange={e => setNeck(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          {gender === "female" && (
            <div><label className="block text-sm font-medium mb-2">腰囲(cm)</label><input type="number" value={hip} onChange={e => setHip(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          )}
          <div><label className="block text-sm font-medium mb-2">身長(cm)</label><input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">体脂肪率</div><div className="text-2xl font-bold text-primary">{bodyFat.toFixed(1)}%</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">評価</div><div className="text-xl font-bold">{evaluation}</div></div>
        </div>
      </div>
      <AffiliateSection slug="body-fat-calculator" category="日常ツール" />
      <RelatedTools currentSlug="body-fat-calculator" category="日常ツール" />
    </div>
  );
}
