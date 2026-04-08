"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [price, setPrice] = useState("3000000");
  const [down, setDown] = useState("500000");
  const [rate, setRate] = useState("2.5");
  const [years, setYears] = useState("5");

  const p = Math.max(0, (parseFloat(price) || 0) - (parseFloat(down) || 0));
  const r = (parseFloat(rate) || 0) / 100 / 12;
  const n = (parseInt(years) || 0) * 12;
  const monthly = n > 0 ? (r > 0 ? (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : p / n) : 0;
  const total = monthly * n;
  const interest = total - p;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>自動車ローンシミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">自動車ローンシミュレーター</h1>
      <p className="text-muted mb-8">車両価格・頭金・金利・返済期間から月々の返済額と総返済額を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">車両価格（円）</label><input type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">頭金（円）</label><input type="number" value={down} onChange={e => setDown(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">年利（%）</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">返済期間（年）</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月々の返済額</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">総返済額</div><div className="text-xl font-bold">¥{Math.round(total).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">利息合計</div><div className="text-xl font-bold">¥{Math.round(interest).toLocaleString()}</div></div>
        </div>
        <div className="mt-4 text-xs text-muted">借入元本 ¥{p.toLocaleString()}（車両価格 − 頭金）・元利均等返済方式で計算</div>
      </div>

      <section className="mt-8">
        <Link href="/guide/car-loan-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">自動車ローンおすすめ5選を比較</div>
          <p className="text-xs text-muted">銀行ローン／ディーラーローンを金利・総返済額で徹底比較するガイドを見る →</p>
        </Link>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>車両価格から頭金を差し引いた借入元本に対して、元利均等返済方式で月々の返済額を計算します。金利・期間を変えて総返済額がどう変わるか比較してください。</p></div></section>

      <AffiliateSection slug="car-loan-simulator" category="日常ツール" />
      <RelatedTools currentSlug="car-loan-simulator" category="日常ツール" />
    </div>
  );
}
