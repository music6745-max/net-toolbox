"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function TipCalculatorPage() {
  const [amount, setAmount] = useState("");
  const [tipPercent, setTipPercent] = useState(15);
  const [people, setPeople] = useState(1);

  const bill = Number(amount) || 0;
  const tip = Math.round(bill * tipPercent / 100);
  const total = bill + tip;
  const perPerson = people > 0 ? Math.round(total / people) : total;

  const fmt = (n: number) => n.toLocaleString();
  const presets = [10, 15, 18, 20, 25];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>チップ計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">チップ計算ツール</h1>
      <p className="text-muted mb-8">食事代からチップ額と割り勘を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">お会計金額</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="例: 5000" className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">チップ率: {tipPercent}%</label>
          <div className="flex gap-2 mb-2">
            {presets.map(p => (
              <button key={p} onClick={() => setTipPercent(p)} className={"flex-1 py-1 rounded-lg text-sm font-medium transition " + (tipPercent === p ? "bg-primary text-white" : "bg-card-bg border border-card-border")}>{p}%</button>
            ))}
          </div>
          <input type="range" min={0} max={50} value={tipPercent} onChange={e => setTipPercent(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">人数</label>
          <div className="flex items-center gap-3">
            <button onClick={() => setPeople(Math.max(1, people - 1))} className="w-10 h-10 rounded-lg border border-card-border text-lg font-bold">-</button>
            <span className="text-xl font-bold w-10 text-center">{people}</span>
            <button onClick={() => setPeople(people + 1)} className="w-10 h-10 rounded-lg border border-card-border text-lg font-bold">+</button>
          </div>
        </div>
        {bill > 0 && (
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
              <p className="text-xs text-muted">チップ額</p>
              <p className="text-xl font-bold">{fmt(tip)}円</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
              <p className="text-xs text-muted">合計</p>
              <p className="text-xl font-bold">{fmt(total)}円</p>
            </div>
            {people > 1 && (
              <div className="col-span-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
                <p className="text-xs text-muted">1人あたり</p>
                <p className="text-2xl font-bold">{fmt(perPerson)}円</p>
              </div>
            )}
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>お会計金額とチップ率を入力すると、チップ額と合計が計算されます。人数を設定すれば割り勘額も表示されます。</p></div></section>
      <AffiliateSection slug="tip-calculator" category="日常ツール" />
      <RelatedTools currentSlug="tip-calculator" category="日常ツール" />
    </div>
  );
}
