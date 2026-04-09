"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [distance, setDistance] = useState("1000");
  const [fuelEff, setFuelEff] = useState("15");
  const [price, setPrice] = useState("175");

  const d = parseFloat(distance) || 0;
  const f = parseFloat(fuelEff) || 1;
  const p = parseFloat(price) || 0;
  const liters = d / f;
  const cost = liters * p;
  const yearly = cost * 12;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>月間ガソリン代計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">月間ガソリン代計算ツール</h1>
      <p className="text-muted mb-8">月間走行距離・燃費・ガソリン単価からガソリン代を計算。家計管理・車購入検討に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">月間走行距離(km)</label><input type="number" value={distance} onChange={e => setDistance(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">燃費(km/L)</label><input type="number" step="0.1" value={fuelEff} onChange={e => setFuelEff(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">ガソリン単価(円/L)</label><input type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月間使用量</div><div className="text-lg font-bold">{liters.toFixed(1)} L</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月間ガソリン代</div><div className="text-xl font-bold text-primary">¥{Math.round(cost).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間</div><div className="text-lg font-bold">¥{Math.round(yearly).toLocaleString()}</div></div>
        </div>
      </div>
      <AffiliateSection slug="monthly-gas-cost" category="日常ツール" />
      <RelatedTools currentSlug="monthly-gas-cost" category="日常ツール" />
    </div>
  );
}
