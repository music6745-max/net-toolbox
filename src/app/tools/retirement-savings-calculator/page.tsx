"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [age, setAge] = useState("35");
  const [retireAge, setRetireAge] = useState("65");
  const [goal, setGoal] = useState("20000000");
  const [current, setCurrent] = useState("1000000");
  const [rate, setRate] = useState("4");

  const years = Math.max(0, (parseInt(retireAge) || 0) - (parseInt(age) || 0));
  const n = years * 12;
  const r = (parseFloat(rate) || 0) / 100 / 12;
  const g = parseFloat(goal) || 0;
  const c = parseFloat(current) || 0;

  // 現在資産の将来価値
  const futureCurrent = c * Math.pow(1 + r, n);
  const need = Math.max(0, g - futureCurrent);
  // 積立の将来価値 FV = P * ((1+r)^n - 1) / r  → P = need * r / ((1+r)^n - 1)
  const monthly = n > 0 ? (r > 0 ? need * r / (Math.pow(1 + r, n) - 1) : need / n) : 0;
  const totalContrib = monthly * n + c;
  const profit = g - totalContrib;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>老後資金シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">老後資金シミュレーター</h1>
      <p className="text-muted mb-8">現在年齢・目標金額・想定利回りから、目標達成に必要な月々の積立額を計算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">現在年齢</label><input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">退職年齢</label><input type="number" value={retireAge} onChange={e => setRetireAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">目標金額（円）</label><input type="number" value={goal} onChange={e => setGoal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">現在の貯蓄額（円）</label><input type="number" value={current} onChange={e => setCurrent(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">想定年利回り（%）</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">必要月額積立</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">積立総額（元本）</div><div className="text-xl font-bold">¥{Math.round(totalContrib).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">運用益</div><div className="text-xl font-bold">¥{Math.round(profit).toLocaleString()}</div></div>
        </div>
        <div className="mt-4 text-xs text-muted">運用期間 {years}年・現在資産の将来価値 ¥{Math.round(futureCurrent).toLocaleString()}</div>
      </div>

      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link href="/guide/nisa-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">NISA口座を比較</div>
          <p className="text-xs text-muted">主要ネット証券のNISA口座を手数料・商品数で比較 →</p>
        </Link>
        <Link href="/guide/investment-app-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">投資アプリを比較</div>
          <p className="text-xs text-muted">初心者向けから上級者向けまで主要投資アプリを比較 →</p>
        </Link>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>退職までの年数と想定利回りから、目標金額達成に必要な月額積立額を元利合計法（複利）で計算します。NISA・iDeCoで長期運用する際の目安にどうぞ。</p></div></section>

      <AffiliateSection slug="retirement-savings-calculator" category="日常ツール" />
      <RelatedTools currentSlug="retirement-savings-calculator" category="日常ツール" />
    </div>
  );
}
