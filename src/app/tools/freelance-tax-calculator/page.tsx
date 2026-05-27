"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [income, setIncome] = useState("5000000");
  const [expense, setExpense] = useState("1000000");

  const inc = parseFloat(income) || 0;
  const exp = parseFloat(expense) || 0;
  // 青色申告控除65万、基礎控除48万
  const blueDeduction = 650000;
  const basicDeduction = 480000;
  const businessIncome = Math.max(0, inc - exp - blueDeduction);

  // 国民健康保険（概算: 所得 x 10%、上限約100万）
  const kokuho = Math.min(1000000, Math.round(businessIncome * 0.1 + 50000));
  // 国民年金（年額 約20.4万）
  const nenkin = 204000;

  const taxableIncome = Math.max(0, businessIncome - basicDeduction - kokuho - nenkin);

  // 所得税（速算表）
  let incomeTax = 0;
  if (taxableIncome <= 1950000) incomeTax = taxableIncome * 0.05;
  else if (taxableIncome <= 3300000) incomeTax = taxableIncome * 0.1 - 97500;
  else if (taxableIncome <= 6950000) incomeTax = taxableIncome * 0.2 - 427500;
  else if (taxableIncome <= 9000000) incomeTax = taxableIncome * 0.23 - 636000;
  else if (taxableIncome <= 18000000) incomeTax = taxableIncome * 0.33 - 1536000;
  else incomeTax = taxableIncome * 0.4 - 2796000;
  incomeTax = Math.max(0, Math.round(incomeTax));

  // 住民税（一律10% + 均等割5000）
  const residentTax = Math.round(taxableIncome * 0.1) + 5000;

  const totalTax = incomeTax + residentTax + kokuho + nenkin;
  const takeHome = inc - exp - totalTax;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>フリーランス税金計算</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">フリーランス税金計算ツール</h1>
      <p className="text-muted mb-8">年収と経費を入力するだけで、所得税・住民税・国保・年金の概算と手取り額を試算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">年間売上（円）</label>
            <input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">年間経費（円）</label>
            <input type="number" value={expense} onChange={e => setExpense(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">所得税</div><div className="text-lg font-bold">¥{incomeTax.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">住民税</div><div className="text-lg font-bold">¥{residentTax.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">国民健康保険</div><div className="text-lg font-bold">¥{kokuho.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">国民年金</div><div className="text-lg font-bold">¥{nenkin.toLocaleString()}</div></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">税金・社会保険合計</div><div className="text-xl font-bold text-primary">¥{totalTax.toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">手取り額（年間）</div><div className="text-xl font-bold text-primary">¥{takeHome.toLocaleString()}</div></div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary transition-colors">
            <div className="font-semibold mb-1">確定申告ソフト比較</div>
            <div className="text-xs text-muted">freee・弥生・マネーフォワードを徹底比較</div>
          </Link>
          <Link href="/guide/invoice-system-comparison" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary transition-colors">
            <div className="font-semibold mb-1">請求書システム比較</div>
            <div className="text-xs text-muted">請求・入金管理の選び方</div>
          </Link>
        </div>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>※ 青色申告控除65万円・基礎控除48万円を反映した概算です。実際の税額は控除や扶養により変動します。</p></div></section>
      <AffiliateSection slug="freelance-tax-calculator" category="日常ツール" />
      <RelatedTools currentSlug="freelance-tax-calculator" category="日常ツール" />
    </div>
  );
}
