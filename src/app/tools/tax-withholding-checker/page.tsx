"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [income, setIncome] = useState("5000000");
  const [deductions, setDeductions] = useState("480000");

  const i = parseFloat(income) || 0;
  const d = parseFloat(deductions) || 0;
  const taxable = Math.max(0, i - d - 480000); // 基礎控除48万
  // 簡易所得税率
  let tax = 0;
  if (taxable <= 1950000) tax = taxable * 0.05;
  else if (taxable <= 3300000) tax = taxable * 0.1 - 97500;
  else if (taxable <= 6950000) tax = taxable * 0.2 - 427500;
  else if (taxable <= 9000000) tax = taxable * 0.23 - 636000;
  else if (taxable <= 18000000) tax = taxable * 0.33 - 1536000;
  else if (taxable <= 40000000) tax = taxable * 0.4 - 2796000;
  else tax = taxable * 0.45 - 4796000;
  const residentTax = taxable * 0.1;
  const totalTax = tax + residentTax;
  const effectiveRate = i > 0 ? (totalTax / i * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>所得税・住民税概算</span></nav>
      <h1 className="text-2xl font-bold mb-2">所得税・住民税 概算計算ツール</h1>
      <p className="text-muted mb-8">年収と控除額から所得税・住民税の概算を計算。確定申告前の目安に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">年収(円)</label><input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">控除合計(社保・配偶者等)(円)</label><input type="number" value={deductions} onChange={e => setDeductions(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">課税所得</div><div className="text-sm font-bold">¥{Math.round(taxable).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">所得税(概算)</div><div className="text-sm font-bold">¥{Math.round(tax).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">住民税(概算)</div><div className="text-sm font-bold">¥{Math.round(residentTax).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">実効税率</div><div className="text-xl font-bold text-primary">{effectiveRate.toFixed(1)}%</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 概算です。給与所得控除・復興特別所得税等は簡略化しています。正確な計算は税理士にご相談ください。</p>
      </div>
      <AffiliateSection slug="tax-withholding-checker" category="日常ツール" />
      <RelatedTools currentSlug="tax-withholding-checker" category="日常ツール" />
    </div>
  );
}
