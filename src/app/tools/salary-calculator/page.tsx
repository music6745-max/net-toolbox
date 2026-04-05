"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function SalaryCalculatorPage() {
  const [annual, setAnnual] = useState("");
  const [age, setAge] = useState("30");
  const [dependents, setDependents] = useState("0");
  const [result, setResult] = useState<{
    gross: number; healthIns: number; pension: number; employment: number;
    socialTotal: number; incomeTax: number; residentTax: number; taxTotal: number;
    takeHome: number; monthlyTakeHome: number;
  } | null>(null);

  const calculate = () => {
    const gross = Number(annual);
    if (!gross || gross <= 0) return;
    const monthlyGross = gross / 12;
    const healthIns = Math.round(gross * 0.04985);
    const pension = Math.round(gross * 0.0915);
    const employment = Math.round(gross * 0.006);
    const socialTotal = healthIns + pension + employment;
    const taxableBase = gross - socialTotal;
    let deduction = 0;
    if (taxableBase <= 1625000) deduction = 550000;
    else if (taxableBase <= 1800000) deduction = Math.round(taxableBase * 0.4 - 100000);
    else if (taxableBase <= 3600000) deduction = Math.round(taxableBase * 0.3 + 80000);
    else if (taxableBase <= 6600000) deduction = Math.round(taxableBase * 0.2 + 440000);
    else if (taxableBase <= 8500000) deduction = Math.round(taxableBase * 0.1 + 1100000);
    else deduction = 1950000;
    const basicDeduction = 480000;
    const dependentDeduction = Number(dependents) * 380000;
    const taxableIncome = Math.max(0, taxableBase - deduction - basicDeduction - dependentDeduction);
    let incomeTax = 0;
    if (taxableIncome <= 1950000) incomeTax = Math.round(taxableIncome * 0.05);
    else if (taxableIncome <= 3300000) incomeTax = Math.round(taxableIncome * 0.1 - 97500);
    else if (taxableIncome <= 6950000) incomeTax = Math.round(taxableIncome * 0.2 - 427500);
    else if (taxableIncome <= 9000000) incomeTax = Math.round(taxableIncome * 0.23 - 636000);
    else if (taxableIncome <= 18000000) incomeTax = Math.round(taxableIncome * 0.33 - 1536000);
    else if (taxableIncome <= 40000000) incomeTax = Math.round(taxableIncome * 0.40 - 2796000);
    else incomeTax = Math.round(taxableIncome * 0.45 - 4796000);
    incomeTax = Math.round(incomeTax * 1.021);
    const residentTax = Math.round(taxableIncome * 0.1 + 5000);
    const taxTotal = incomeTax + residentTax;
    const takeHome = gross - socialTotal - taxTotal;
    setResult({ gross, healthIns, pension, employment, socialTotal, incomeTax, residentTax, taxTotal, takeHome, monthlyTakeHome: Math.round(takeHome / 12) });
  };

  const fmt = (n: number) => n.toLocaleString();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>手取り計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">手取り計算ツール</h1>
      <p className="text-muted mb-8">年収を入力すると、社会保険料・税金を差し引いた手取り額の概算を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">年収（額面）</label>
          <input type="number" value={annual} onChange={e => setAnnual(e.target.value)} placeholder="例: 5000000" className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">年齢</label>
            <select value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent">
              {["20","25","30","35","40","45","50","55","60"].map(a => <option key={a} value={a}>{a}歳</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">扶養人数</label>
            <select value={dependents} onChange={e => setDependents(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent">
              {["0","1","2","3","4","5"].map(d => <option key={d} value={d}>{d}人</option>)}
            </select>
          </div>
        </div>
        <button onClick={calculate} className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition">計算する</button>
        {result && (
          <div className="mt-4 space-y-3">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
              <p className="text-sm text-muted">年間手取り</p>
              <p className="text-3xl font-bold text-green-600">{fmt(result.takeHome)}円</p>
              <p className="text-sm text-muted mt-1">月額 約 {fmt(result.monthlyTakeHome)}円</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3"><p className="text-muted">健康保険</p><p className="font-medium">{fmt(result.healthIns)}円</p></div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3"><p className="text-muted">厚生年金</p><p className="font-medium">{fmt(result.pension)}円</p></div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3"><p className="text-muted">雇用保険</p><p className="font-medium">{fmt(result.employment)}円</p></div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3"><p className="text-muted">社保合計</p><p className="font-bold">{fmt(result.socialTotal)}円</p></div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3"><p className="text-muted">所得税</p><p className="font-medium">{fmt(result.incomeTax)}円</p></div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3"><p className="text-muted">住民税</p><p className="font-medium">{fmt(result.residentTax)}円</p></div>
            </div>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>年収（額面）、年齢、扶養人数を入力して「計算する」をクリックすると、社会保険料・所得税・住民税を差し引いた手取り額の概算が表示されます。</p><p>※概算値です。実際の金額は勤務先や自治体により異なります。</p></div></section>
      <AffiliateSection slug="salary-calculator" category="日常ツール" />
      <RelatedTools currentSlug="salary-calculator" category="日常ツール" />
    </div>
  );
}
