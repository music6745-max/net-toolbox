"use client";

import { useState } from "react";
import Link from "next/link";

function calcTakeHome(annualSalary: number): {
  incomeTax: number;
  socialInsurance: number;
  annualTakeHome: number;
  monthlyTakeHome: number;
  effectiveRate: number;
} {
  // Social insurance: ~15% of gross
  const socialInsurance = annualSalary * 0.15;
  const taxableIncome = annualSalary - socialInsurance;

  // Rough progressive income tax (including resident tax ~10%)
  let incomeTaxRate: number;
  if (annualSalary <= 1_950_000) incomeTaxRate = 0.05;
  else if (annualSalary <= 3_300_000) incomeTaxRate = 0.10;
  else if (annualSalary <= 6_950_000) incomeTaxRate = 0.20;
  else if (annualSalary <= 9_000_000) incomeTaxRate = 0.23;
  else if (annualSalary <= 18_000_000) incomeTaxRate = 0.33;
  else incomeTaxRate = 0.40;

  // Basic deduction ~480,000 yen
  const basicDeduction = 480_000;
  // Employment income deduction (simplified)
  let employmentDeduction: number;
  if (annualSalary <= 1_625_000) employmentDeduction = 550_000;
  else if (annualSalary <= 1_800_000) employmentDeduction = annualSalary * 0.40 - 100_000;
  else if (annualSalary <= 3_600_000) employmentDeduction = annualSalary * 0.30 + 80_000;
  else if (annualSalary <= 6_600_000) employmentDeduction = annualSalary * 0.20 + 440_000;
  else if (annualSalary <= 8_500_000) employmentDeduction = annualSalary * 0.10 + 1_100_000;
  else employmentDeduction = 1_950_000;

  const taxBase = Math.max(0, taxableIncome - employmentDeduction - basicDeduction);
  const incomeTax = taxBase * incomeTaxRate;

  const annualTakeHome = annualSalary - socialInsurance - incomeTax;
  const monthlyTakeHome = annualTakeHome / 12;
  const effectiveRate = ((annualSalary - annualTakeHome) / annualSalary) * 100;

  return { incomeTax, socialInsurance, annualTakeHome, monthlyTakeHome, effectiveRate };
}

export default function SalaryCalculatorPage() {
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calcTakeHome> | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const s = Number(salary);
    if (!salary || isNaN(s) || s <= 0) {
      setError("有効な年収を入力してください");
      setResult(null);
      return;
    }
    if (s > 100_000_000) {
      setError("年収は1億円以下で入力してください");
      setResult(null);
      return;
    }
    setError("");
    setResult(calcTakeHome(s));
  };

  const reset = () => {
    setSalary("");
    setResult(null);
    setError("");
  };

  const fmt = (n: number) => Math.round(n).toLocaleString("ja-JP");

  const presets = [3_000_000, 4_000_000, 5_000_000, 6_000_000, 8_000_000, 10_000_000];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>給与手取り計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">給与手取り計算ツール</h1>
      <p className="text-muted mb-8">
        年収を入力して、所得税・社会保険料を差し引いた手取り額の目安を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">年収 (円)</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="例: 5000000"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {presets.map((p) => (
            <button
              key={p}
              onClick={() => setSalary(String(p))}
              className="px-3 py-1.5 rounded-lg text-xs border border-card-border hover:bg-background transition-colors"
            >
              {(p / 10000).toLocaleString()}万円
            </button>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            計算する
          </button>
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {result && (
          <div className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">月手取り（概算）</p>
                <p className="text-3xl font-bold text-primary">¥{fmt(result.monthlyTakeHome)}</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <p className="text-sm text-muted mb-1">年手取り（概算）</p>
                <p className="text-3xl font-bold text-primary">¥{fmt(result.annualTakeHome)}</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted">年収（額面）</span>
                <span className="font-medium">¥{fmt(Number(salary))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">社会保険料（概算）</span>
                <span className="font-medium text-red-500">－¥{fmt(result.socialInsurance)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">所得税・住民税（概算）</span>
                <span className="font-medium text-red-500">－¥{fmt(result.incomeTax)}</span>
              </div>
              <div className="flex justify-between border-t border-card-border pt-1 mt-1">
                <span className="text-muted">年手取り</span>
                <span className="font-bold">¥{fmt(result.annualTakeHome)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">実効税負担率</span>
                <span className="font-medium">{result.effectiveRate.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">給与手取り計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 年収（税込の額面年収）を入力します。下のプリセットボタンも利用できます。</p>
          <p>2. 「計算する」ボタンを押すと、手取りの概算額が表示されます。</p>
          <p>社会保険料は年収の約15%、所得税・住民税は累進税率で概算しています。</p>
          <p>※ 配偶者控除・扶養控除・各種保険料控除等は考慮していません。あくまで参考値としてご利用ください。</p>
          <p>正確な計算は税理士または会社の給与担当にご確認ください。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
