"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [gross, setGross] = useState("300000");
  const [age, setAge] = useState("30");

  const g = parseFloat(gross) || 0;
  const a = parseFloat(age) || 0;
  // Simplified: health 10%, pension 9.15%, employment 0.6%, tax estimated
  const health = g * 0.0495;
  const pension = g * 0.0915;
  const employment = g * 0.006;
  const nurseCare = a >= 40 ? g * 0.009 : 0;
  const socialInsurance = health + pension + employment + nurseCare;
  const taxable = g - socialInsurance;
  const incomeTax = taxable * 0.05; // approximated
  const residentTax = taxable * 0.1;
  const total = socialInsurance + incomeTax + residentTax;
  const netPay = g - total;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>月給手取り計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">月給の手取り額計算ツール</h1>
      <p className="text-muted mb-8">額面月給から健康保険・厚生年金・雇用保険・所得税・住民税を差し引いた手取り額を概算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">額面月給(円)</label><input type="number" value={gross} onChange={e => setGross(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">年齢</label><input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-muted">健康保険(約4.95%)</span><span>-¥{Math.round(health).toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted">厚生年金(約9.15%)</span><span>-¥{Math.round(pension).toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted">雇用保険(0.6%)</span><span>-¥{Math.round(employment).toLocaleString()}</span></div>
          {a >= 40 && <div className="flex justify-between"><span className="text-muted">介護保険(約0.9%)</span><span>-¥{Math.round(nurseCare).toLocaleString()}</span></div>}
          <div className="flex justify-between"><span className="text-muted">所得税(概算)</span><span>-¥{Math.round(incomeTax).toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted">住民税(概算)</span><span>-¥{Math.round(residentTax).toLocaleString()}</span></div>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center mt-4">
          <div className="text-xs text-muted mb-1">月の手取り額(概算)</div>
          <div className="text-3xl font-bold text-primary">¥{Math.round(netPay).toLocaleString()}</div>
        </div>
        <p className="text-xs text-muted mt-2">※ 東京都の一般的な料率で計算した概算です。実際の給与明細とは異なる場合があります。</p>
      </div>
      <AffiliateSection slug="take-home-pay" category="日常ツール" />
      <RelatedTools currentSlug="take-home-pay" category="日常ツール" />
    </div>
  );
}
