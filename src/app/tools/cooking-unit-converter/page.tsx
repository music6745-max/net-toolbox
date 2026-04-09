"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("cup");

  const a = parseFloat(amount) || 0;
  const conversions: Record<string, Record<string, number>> = {
    cup: { ml: 200, tbsp: 13.33, tsp: 40, g_flour: 110, g_sugar: 130, g_rice: 150 },
    tbsp: { ml: 15, cup: 0.075, tsp: 3, g_flour: 8.25, g_sugar: 9.75 },
    tsp: { ml: 5, cup: 0.025, tbsp: 0.33, g_flour: 2.75, g_sugar: 3.25 },
  };
  const conv = conversions[from] || {};

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>料理の計量変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">料理の計量単位変換ツール</h1>
      <p className="text-muted mb-8">カップ・大さじ・小さじをml・グラムに変換。レシピの分量調整に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">量</label><input type="number" step="0.1" value={amount} onChange={e => setAmount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">単位</label>
            <select value={from} onChange={e => setFrom(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
              <option value="cup">カップ(200ml)</option>
              <option value="tbsp">大さじ(15ml)</option>
              <option value="tsp">小さじ(5ml)</option>
            </select>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          {conv.ml && <div className="flex justify-between bg-background rounded-lg p-3"><span>ml</span><span className="font-bold">{(a * conv.ml).toFixed(1)} ml</span></div>}
          {conv.cup && <div className="flex justify-between bg-background rounded-lg p-3"><span>カップ</span><span className="font-bold">{(a * conv.cup).toFixed(2)} カップ</span></div>}
          {conv.tbsp && <div className="flex justify-between bg-background rounded-lg p-3"><span>大さじ</span><span className="font-bold">{(a * conv.tbsp).toFixed(1)} 杯</span></div>}
          {conv.tsp && <div className="flex justify-between bg-background rounded-lg p-3"><span>小さじ</span><span className="font-bold">{(a * conv.tsp).toFixed(1)} 杯</span></div>}
          {conv.g_flour && <div className="flex justify-between bg-primary/10 rounded-lg p-3"><span>薄力粉</span><span className="font-bold text-primary">{(a * conv.g_flour).toFixed(0)} g</span></div>}
          {conv.g_sugar && <div className="flex justify-between bg-background rounded-lg p-3"><span>砂糖</span><span className="font-bold">{(a * conv.g_sugar).toFixed(0)} g</span></div>}
          {conv.g_rice && <div className="flex justify-between bg-background rounded-lg p-3"><span>米</span><span className="font-bold">{(a * conv.g_rice).toFixed(0)} g</span></div>}
        </div>
      </div>
      <AffiliateSection slug="cooking-unit-converter" category="日常ツール" />
      <RelatedTools currentSlug="cooking-unit-converter" category="日常ツール" />
    </div>
  );
}
