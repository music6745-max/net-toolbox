"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [size, setSize] = useState("60");
  const [weight, setWeight] = useState("2");

  const s = parseInt(size) || 0;
  const w = parseFloat(weight) || 0;

  // Approximate regular prices per size for major carriers
  const yamato: Record<number, number> = { 60: 1060, 80: 1280, 100: 1580, 120: 1810, 140: 2050, 160: 2310, 180: 3250, 200: 3840 };
  const sagawa: Record<number, number> = { 60: 990, 80: 1210, 100: 1410, 140: 1700, 160: 1920 };
  const japanPost: Record<number, number> = { 60: 810, 80: 1030, 100: 1280, 120: 1530, 140: 1780, 160: 2010, 170: 2340 };

  const findNearest = (r: Record<number, number>) => {
    const keys = Object.keys(r).map(Number).sort((a, b) => a - b);
    for (const k of keys) if (s <= k) return r[k];
    return r[keys[keys.length - 1]];
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>宅配便料金比較</span></nav>
      <h1 className="text-2xl font-bold mb-2">宅配便料金比較ツール</h1>
      <p className="text-muted mb-8">サイズ・重量からヤマト・佐川・ゆうパックの料金を比較(同一地域・関東圏目安)。最安の配送業者を選べます。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">サイズ(60/80/100/120/140/160/170/180/200)</label>
          <select value={size} onChange={e => setSize(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            {[60, 80, 100, 120, 140, 160, 170, 180, 200].map(sz => <option key={sz} value={sz}>{sz}サイズ</option>)}
          </select>
        </div>
        <div><label className="block text-sm font-medium mb-2">重量(kg)</label><input type="number" step="0.5" value={weight} onChange={e => setWeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ヤマト運輸</div><div className="text-lg font-bold">¥{findNearest(yamato).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">佐川急便</div><div className="text-lg font-bold">¥{findNearest(sagawa).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ゆうパック</div><div className="text-lg font-bold">¥{findNearest(japanPost).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 目安です。実際の料金は配送会社・地域・キャンペーンで変動します。</p>
      </div>
      <AffiliateSection slug="shipping-cost-comparator" category="日常ツール" />
      <RelatedTools currentSlug="shipping-cost-comparator" category="日常ツール" />
    </div>
  );
}
