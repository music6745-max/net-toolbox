"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [bill, setBill] = useState("5000");
  const [tipRate, setTipRate] = useState("15");
  const [people, setPeople] = useState("1");
  const b = parseFloat(bill)||0;
  const t = parseFloat(tipRate)||0;
  const p = parseInt(people)||1;
  const tip = b * t / 100;
  const total = b + tip;
  const perPerson = total / p;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>チップ計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">チップ計算ツール</h1>
      <p className="text-muted mb-8">食事代からチップ額と合計を計算。割り勘にも対応。海外旅行に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">お会計額</label><input type="number" value={bill} onChange={e=>setBill(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">チップ率 (%)</label><div className="flex gap-2 mb-2">{[10,15,18,20].map(r=><button key={r} onClick={()=>setTipRate(String(r))} className={`px-3 py-1 rounded text-sm ${parseInt(tipRate)===r?"bg-primary text-white":"bg-background"}`}>{r}%</button>)}</div><input type="number" value={tipRate} onChange={e=>setTipRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">人数</label><input type="number" value={people} onChange={e=>setPeople(e.target.value)} min="1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">チップ額</div><div className="text-xl font-bold">¥{Math.round(tip).toLocaleString()}</div></div>
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">合計</div><div className="text-xl font-bold">¥{Math.round(total).toLocaleString()}</div></div>
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">一人あたり</div><div className="text-xl font-bold text-primary">¥{Math.round(perPerson).toLocaleString()}</div></div>
          </div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>食事代からチップ額と合計を計算。割り勘にも対応。海外旅行に。</p></div></section>
      <AffiliateSection slug="tip-calculator" category="日常ツール" />

      <RelatedTools currentSlug="tip-calculator" category="日常ツール" />
    </div>
  );
}