"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [buy, setBuy] = useState("1000000");
  const [sell, setSell] = useState("1300000");
  const [years, setYears] = useState("3");

  const b = parseFloat(buy) || 0;
  const s = parseFloat(sell) || 0;
  const y = parseFloat(years) || 1;
  const profit = s - b;
  const returnRate = b > 0 ? (profit / b * 100) : 0;
  const annualReturn = b > 0 ? ((Math.pow(s / b, 1 / y) - 1) * 100) : 0;
  const tax = profit > 0 ? profit * 0.20315 : 0;
  const afterTax = profit - tax;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>投資リターン計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">投資リターン計算ツール</h1>
      <p className="text-muted mb-8">購入額と売却額からリターン率・年率・税引後利益を計算。※投資助言ではありません。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">購入額(円)</label><input type="number" value={buy} onChange={e => setBuy(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">売却額(円)</label><input type="number" value={sell} onChange={e => setSell(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">保有年数</label><input type="number" step="0.1" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">損益</div><div className={`text-lg font-bold ${profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>¥{Math.round(profit).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">トータルリターン</div><div className="text-lg font-bold text-primary">{returnRate.toFixed(1)}%</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年率リターン</div><div className="text-lg font-bold">{annualReturn.toFixed(2)}%</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">税引後利益</div><div className="text-sm font-bold">¥{Math.round(afterTax).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted">※ 税率20.315%で計算。NISA口座なら非課税。</p>
      </div>
      <AffiliateSection slug="investment-return-calc" category="日常ツール" />
      <RelatedTools currentSlug="investment-return-calc" category="日常ツール" />
    </div>
  );
}
