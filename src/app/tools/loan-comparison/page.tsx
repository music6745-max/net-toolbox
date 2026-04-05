"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type LoanResult = {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
};

function calcLoan(principal: number, annualRate: number, years: number): LoanResult {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  if (monthlyRate === 0) {
    const monthlyPayment = principal / months;
    return { monthlyPayment: Math.round(monthlyPayment), totalPayment: principal, totalInterest: 0 };
  }
  const monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = Math.round(monthlyPayment * months);
  return { monthlyPayment: Math.round(monthlyPayment), totalPayment, totalInterest: totalPayment - principal };
}

export default function LoanComparisonPage() {
  const [p1, setP1] = useState("30000000");
  const [r1, setR1] = useState("1.5");
  const [y1, setY1] = useState("35");
  const [p2, setP2] = useState("30000000");
  const [r2, setR2] = useState("2.0");
  const [y2, setY2] = useState("35");
  const [results, setResults] = useState<[LoanResult, LoanResult] | null>(null);

  const compare = () => {
    const a = calcLoan(Number(p1), Number(r1), Number(y1));
    const b = calcLoan(Number(p2), Number(r2), Number(y2));
    setResults([a, b]);
  };

  const fmt = (n: number) => n.toLocaleString();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ローン比較計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">ローン比較計算ツール</h1>
      <p className="text-muted mb-8">2つのローン条件を入力して、月々の返済額・総支払額・利息総額を比較できます。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[["プランA", p1, setP1, r1, setR1, y1, setY1], ["プランB", p2, setP2, r2, setR2, y2, setY2]].map(([label, p, setP, r, setR, y, setY], i) => (
            <div key={i} className="space-y-3">
              <h3 className="font-bold text-lg">{label as string}</h3>
              <div><label className="block text-sm mb-1">借入額（円）</label><input type="number" value={p as string} onChange={e => (setP as Function)(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
              <div><label className="block text-sm mb-1">金利（年%）</label><input type="number" step="0.1" value={r as string} onChange={e => (setR as Function)(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
              <div><label className="block text-sm mb-1">返済期間（年）</label><input type="number" value={y as string} onChange={e => (setY as Function)(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
            </div>
          ))}
        </div>
        <button onClick={compare} className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition">比較する</button>
        {results && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((r, i) => (
              <div key={i} className={"rounded-lg p-4 border " + (r.totalPayment <= results[1-i].totalPayment ? "border-green-400 bg-green-50 dark:bg-green-900/20" : "border-card-border bg-card-bg")}>
                <h4 className="font-bold mb-2">{i === 0 ? "プランA" : "プランB"}{r.totalPayment <= results[1-i].totalPayment && <span className="ml-2 text-green-600 text-sm">お得</span>}</h4>
                <p className="text-sm">月々返済: <span className="font-bold text-lg">{fmt(r.monthlyPayment)}円</span></p>
                <p className="text-sm">総支払額: {fmt(r.totalPayment)}円</p>
                <p className="text-sm">利息総額: <span className="text-red-500">{fmt(r.totalInterest)}円</span></p>
              </div>
            ))}
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>2つのローン条件（借入額・金利・期間）を入力して比較できます。住宅ローンやカーローンの検討にご活用ください。</p><p>※元利均等返済方式で計算しています。</p></div></section>
      <AffiliateSection slug="loan-comparison" category="日常ツール" />
      <RelatedTools currentSlug="loan-comparison" category="日常ツール" />
    </div>
  );
}
