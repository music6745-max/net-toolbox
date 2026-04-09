"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [weight, setWeight] = useState("60");
  const [gender, setGender] = useState("male");
  const [drink, setDrink] = useState("beer");
  const [ml, setMl] = useState("350");

  const drinks: Record<string, number> = { beer: 5, wine: 12, sake: 15, shochu: 25, whisky: 40, chuhai: 7 };
  const alcohol = parseFloat(drink in drinks ? String(drinks[drink]) : "5");
  const m = parseFloat(ml) || 0;
  const pureAlcohol = m * alcohol * 0.01 * 0.8; // grams
  // Widmark formula
  const w = parseFloat(weight) || 0;
  const factor = gender === "male" ? 0.68 : 0.55;
  const bac = (pureAlcohol / (w * 1000 * factor)) * 100; // percent
  const hoursToSober = bac / 0.015; // avg elimination

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>アルコール分解時間計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">アルコール分解時間・血中濃度計算</h1>
      <p className="text-muted mb-8">飲酒量・体重・性別からおおよその血中アルコール濃度と分解時間を計算。※参考値です。飲酒運転は絶対NG。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">体重(kg)</label><input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">性別</label>
            <select value={gender} onChange={e => setGender(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
              <option value="male">男性</option>
              <option value="female">女性</option>
            </select>
          </div>
        </div>
        <div><label className="block text-sm font-medium mb-2">お酒の種類</label>
          <select value={drink} onChange={e => setDrink(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="beer">ビール (5%)</option>
            <option value="chuhai">チューハイ (7%)</option>
            <option value="wine">ワイン (12%)</option>
            <option value="sake">日本酒 (15%)</option>
            <option value="shochu">焼酎 (25%)</option>
            <option value="whisky">ウイスキー (40%)</option>
          </select>
        </div>
        <div><label className="block text-sm font-medium mb-2">飲酒量(ml)</label><input type="number" value={ml} onChange={e => setMl(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">純アルコール量</div><div className="text-lg font-bold">{pureAlcohol.toFixed(1)} g</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">推定血中濃度</div><div className="text-lg font-bold text-primary">{bac.toFixed(3)}%</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">分解時間目安</div><div className="text-lg font-bold">約{hoursToSober.toFixed(1)}時間</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 参考値です。個人差があります。飲酒運転は法律で禁止されています。</p>
      </div>
      <AffiliateSection slug="alcohol-calculator" category="日常ツール" />
      <RelatedTools currentSlug="alcohol-calculator" category="日常ツール" />
    </div>
  );
}
