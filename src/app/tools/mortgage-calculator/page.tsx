"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function calcMortgage(principal: number, annualRate: number, years: number) {
  const p = principal * 10000; // 万円 → 円
  const n = years * 12; // total months

  if (annualRate === 0) {
    const monthly = p / n;
    return {
      monthly,
      total: p,
      interest: 0,
    };
  }

  const r = annualRate / 100 / 12; // monthly rate
  const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const total = monthly * n;
  const interest = total - p;

  return { monthly, total, interest };
}

function formatYen(value: number) {
  return Math.round(value).toLocaleString("ja-JP") + "円";
}

export default function MortgageCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState("3000");
  const [rate, setRate] = useState("1.5");
  const [years, setYears] = useState("35");

  const result = useMemo(() => {
    const p = parseFloat(loanAmount);
    const r = parseFloat(rate);
    const y = parseFloat(years);
    if (!p || p <= 0 || r < 0 || !y || y <= 0) return null;
    return calcMortgage(p, r, y);
  }, [loanAmount, rate, years]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>住宅ローン計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">住宅ローン計算ツール</h1>
      <p className="text-muted mb-8">
        借入金額・金利・返済期間を入力して月々の返済額を計算します。元利均等返済方式で計算しています。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">借入金額（万円）</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              min="1"
              placeholder="例: 3000"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">年利（%）</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              min="0"
              step="0.1"
              placeholder="例: 1.5"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">返済期間（年）</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              min="1"
              max="50"
              placeholder="例: 35"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
            />
          </div>
        </div>

        {result ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{formatYen(result.monthly)}</div>
              <div className="text-xs text-muted mt-1">月々の返済額</div>
            </div>
            <div className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{formatYen(result.total)}</div>
              <div className="text-xs text-muted mt-1">総返済額</div>
            </div>
            <div className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{formatYen(result.interest)}</div>
              <div className="text-xs text-muted mt-1">利息総額</div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted">正しい値を入力すると計算結果が表示されます。</p>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">住宅ローン計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 借入金額を万円単位で入力します（例：3000 = 3,000万円）。</p>
          <p>2. 年利（%）を入力します（例：1.5 = 年利1.5%）。</p>
          <p>3. 返済期間を年単位で入力します（最大50年）。</p>
          <p>元利均等返済方式で月々の返済額・総返済額・利息総額を自動計算します。</p>
          <p>※ 本ツールはシミュレーション用途です。実際のローン審査・契約は金融機関にご相談ください。</p>
        </div>
      </section>


      <AffiliateSection slug="mortgage-calculator" category="日常ツール" />
      <RelatedTools currentSlug="mortgage-calculator" category="日常ツール" />
    </div>
  );
}
