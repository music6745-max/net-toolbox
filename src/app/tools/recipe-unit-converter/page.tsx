"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("cup");

  const a = parseFloat(amount) || 0;
  const conversions: Record<string, { ml: number; label: string }> = {
    cup: { ml: 200, label: "カップ(200ml)" },
    tbsp: { ml: 15, label: "大さじ(15ml)" },
    tsp: { ml: 5, label: "小さじ(5ml)" },
    ml: { ml: 1, label: "ml" },
    cc: { ml: 1, label: "cc" },
    l: { ml: 1000, label: "リットル" },
    dl: { ml: 100, label: "デシリットル" },
    oz: { ml: 29.57, label: "オンス(fl oz)" },
    uscup: { ml: 236.59, label: "USカップ(236ml)" },
  };

  const fromMl = a * (conversions[from]?.ml || 1);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>料理の計量単位変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">料理の計量単位変換ツール</h1>
      <p className="text-muted mb-8">カップ・大さじ・小さじ・ml・オンスを相互変換。レシピの分量調整に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">量</label><input type="number" step="0.1" value={amount} onChange={e => setAmount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">単位</label>
            <select value={from} onChange={e => setFrom(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
              {Object.entries(conversions).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {Object.entries(conversions).filter(([k]) => k !== from).map(([k, v]) => (
            <div key={k} className="flex justify-between bg-background rounded-lg p-3 text-sm">
              <span>{v.label}</span>
              <span className="font-bold">{(fromMl / v.ml).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
      <AffiliateSection slug="recipe-unit-converter" category="日常ツール" />
      <RelatedTools currentSlug="recipe-unit-converter" category="日常ツール" />
    </div>
  );
}
