"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [amount, setAmount] = useState("100000");
  const [taxRate, setTaxRate] = useState("10");
  const [isQualified, setIsQualified] = useState(true);

  const a = parseFloat(amount) || 0;
  const r = (parseFloat(taxRate) || 0) / 100;
  const tax = Math.round(a * r);
  const total = a + tax;
  // 非適格：経過措置 2023-2026 80%, 2026-2029 50%, 以降0%
  const deductibleRate = isQualified ? 1 : 0.8;
  const deductibleTax = Math.round(tax * deductibleRate);
  const nonDeductibleTax = tax - deductibleTax;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>インボイス税額計算</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">インボイス税額計算ツール</h1>
      <p className="text-muted mb-8">適格請求書発行事業者と非適格事業者との取引で、仕入税額控除の差額を計算します。経過措置（80%控除・50%控除）にも対応。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">取引金額（税抜・円）</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">消費税率（%）</label>
            <select value={taxRate} onChange={e => setTaxRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="10">10%（標準税率）</option>
              <option value="8">8%（軽減税率）</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">取引先の種別</label>
            <div className="flex gap-2">
              <button onClick={() => setIsQualified(true)} className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${isQualified ? "bg-primary text-white" : "bg-background border border-card-border"}`}>適格請求書発行事業者</button>
              <button onClick={() => setIsQualified(false)} className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${!isQualified ? "bg-primary text-white" : "bg-background border border-card-border"}`}>非適格事業者</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">消費税額</div>
            <div className="text-xl font-bold">¥{tax.toLocaleString()}</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">仕入税額控除可能額</div>
            <div className="text-xl font-bold text-primary">¥{deductibleTax.toLocaleString()}</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">税込合計</div>
            <div className="text-xl font-bold">¥{total.toLocaleString()}</div>
          </div>
        </div>
        {!isQualified && (
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              ⚠ 非適格事業者との取引では経過措置により80%のみ控除可能（2023年10月〜2026年9月）。差額 ¥{nonDeductibleTax.toLocaleString()} は控除不可となります。
            </p>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>取引金額と税率、取引先が適格請求書発行事業者かどうかを選択すると、仕入税額控除の可能額と差額を自動計算します。</p>
          <p>経過措置期間中は非適格事業者からの仕入でも80%まで控除可能ですが、2029年10月以降は完全に控除不可となります。</p>
        </div>
      </section>

      <section className="mt-10 mb-10">
        <Link href="/guide/invoice-system-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">請求書・電子インボイス比較ガイド</div>
          <p className="text-xs text-muted">インボイス制度対応の請求書発行サービスを徹底比較 →</p>
        </Link>
      </section>

      <AffiliateSection slug="invoice-tax-calculator" category="日常ツール" />
      <RelatedTools currentSlug="invoice-tax-calculator" category="日常ツール" />
    </div>
  );
}
