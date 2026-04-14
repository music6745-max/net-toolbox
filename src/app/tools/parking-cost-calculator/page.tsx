"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [rate, setRate] = useState("200");
  const [interval, setInterval] = useState("30");
  const [hours, setHours] = useState("3");
  const [minutes, setMinutes] = useState("0");
  const [maxRate, setMaxRate] = useState("1500");

  const r = parseFloat(rate) || 0;
  const iv = parseFloat(interval) || 1;
  const h = parseFloat(hours) || 0;
  const m = parseFloat(minutes) || 0;
  const mx = parseFloat(maxRate) || 0;

  const totalMinutes = h * 60 + m;
  const units = Math.ceil(totalMinutes / iv);
  const timeBased = units * r;
  const actual = mx > 0 ? Math.min(timeBased, mx) : timeBased;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>駐車場料金計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">駐車場料金計算ツール</h1>
      <p className="text-muted mb-8">時間貸し駐車場の料金を計算。最大料金との比較も。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">単価(円)</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">課金単位(分)</label><input type="number" value={interval} onChange={e => setInterval(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">駐車時間(時間)</label><input type="number" value={hours} onChange={e => setHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">駐車時間(分)</label><input type="number" value={minutes} onChange={e => setMinutes(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">最大料金(円/日) ※0で上限なし</label><input type="number" value={maxRate} onChange={e => setMaxRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">時間課金額</div><div className="text-lg font-bold">¥{Math.round(timeBased).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">最大料金</div><div className="text-lg font-bold">{mx > 0 ? `¥${Math.round(mx).toLocaleString()}` : "なし"}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">適用料金</div><div className="text-xl font-bold text-primary">¥{Math.round(actual).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 概算値です。実際の金額は条件により異なります。</p>
      </div>
      <AffiliateSection slug="parking-cost-calculator" category="日常ツール" />
      <RelatedTools currentSlug="parking-cost-calculator" category="日常ツール" />
    </div>
  );
}
