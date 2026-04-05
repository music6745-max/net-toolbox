"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function TaxCalculatorPage() {
  const [amount, setAmount] = useState(1000);
  const [taxRate, setTaxRate] = useState(10);
  const [mode, setMode] = useState<"exclude" | "include">("exclude");

  const taxIncluded = mode === "exclude" ? amount * (1 + taxRate / 100) : amount;
  const taxExcluded = mode === "include" ? amount / (1 + taxRate / 100) : amount;
  const taxAmount = taxIncluded - taxExcluded;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>消費税計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">消費税計算ツール</h1>
      <p className="text-muted mb-8">税込・税抜価格を即座に計算。8%・10%の軽減税率にも対応。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setMode("exclude")} className={`flex-1 py-2 rounded-lg text-sm font-medium ${mode === "exclude" ? "bg-primary text-white" : "bg-background border border-card-border"}`}>税抜→税込</button>
          <button onClick={() => setMode("include")} className={`flex-1 py-2 rounded-lg text-sm font-medium ${mode === "include" ? "bg-primary text-white" : "bg-background border border-card-border"}`}>税込→税抜</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{mode === "exclude" ? "税抜価格" : "税込価格"}（円）</label>
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">税率</label>
            <div className="flex gap-2">
              {[8, 10].map((r) => (
                <button key={r} onClick={() => setTaxRate(r)} className={`flex-1 py-2.5 rounded-lg text-sm font-medium ${taxRate === r ? "bg-primary text-white" : "bg-background border border-card-border"}`}>{r}%</button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            { label: "税抜価格", value: `¥${Math.round(taxExcluded).toLocaleString()}` },
            { label: "消費税額", value: `¥${Math.round(taxAmount).toLocaleString()}` },
            { label: "税込価格", value: `¥${Math.round(taxIncluded).toLocaleString()}` },
          ].map((s) => (
            <div key={s.label} className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">消費税計算の使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>金額を入力し、税率（8%または10%）を選ぶと、税込・税抜価格と消費税額が表示されます。</p><p>軽減税率8%は食品や新聞、標準税率10%はそれ以外に適用されます。</p></div></section>
      <AffiliateSection slug="tax-calculator" category="日常ツール" />
      <RelatedTools currentSlug="tax-calculator" category="日常ツール" />
    </div>
  );
}
