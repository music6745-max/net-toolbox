"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

function shotokuRate(income: number): number {
  // 概算（給与所得控除＋基礎控除＋社保15%控除後の課税所得から判定）
  const taxable = Math.max(0, income - income * 0.15 - 1_080_000);
  if (taxable <= 1_950_000) return 0.05;
  if (taxable <= 3_300_000) return 0.10;
  if (taxable <= 6_950_000) return 0.20;
  if (taxable <= 9_000_000) return 0.23;
  if (taxable <= 18_000_000) return 0.33;
  if (taxable <= 40_000_000) return 0.40;
  return 0.45;
}

export default function Page() {
  const [monthly, setMonthly] = useState("23000");
  const [income, setIncome] = useState("5000000");
  const [years, setYears] = useState("25");
  const [yieldRate, setYieldRate] = useState("3");
  const [job, setJob] = useState("company"); // company/civil/self/housewife

  const m = parseFloat(monthly) || 0;
  const inc = parseFloat(income) || 0;
  const y = parseInt(years) || 0;
  const r = (parseFloat(yieldRate) || 0) / 100 / 12;
  const n = y * 12;

  const limits: Record<string, number> = { company: 23000, civil: 12000, self: 68000, housewife: 23000 };
  const limit = limits[job];
  const overLimit = m > limit;

  const annualContribution = m * 12;
  const incomeRate = shotokuRate(inc);
  const taxSaveYear = annualContribution * (incomeRate + 0.10); // 所得税＋住民税10%
  const taxSaveTotal = taxSaveYear * y;

  // 複利将来価値
  const fv = r > 0 ? m * ((Math.pow(1 + r, n) - 1) / r) * (1 + r) : m * n;
  const principal = m * n;
  const profit = fv - principal;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>iDeCoシミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">iDeCoシミュレーター</h1>
      <p className="text-muted mb-8">毎月の積立額・年収・職業区分から、年間節税額と運用後の将来資産を試算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">職業区分</label>
            <select value={job} onChange={e => setJob(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="company">会社員（企業年金なし）</option>
              <option value="civil">公務員</option>
              <option value="self">自営業・フリーランス</option>
              <option value="housewife">専業主婦（夫）</option>
            </select>
            <div className="text-xs text-muted mt-1">月額上限：¥{limit.toLocaleString()}</div>
          </div>
          <div><label className="block text-sm font-medium mb-2">毎月の積立額（円）</label><input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />{overLimit && <div className="text-xs text-red-500 mt-1">上限を超えています</div>}</div>
          <div><label className="block text-sm font-medium mb-2">年収（円）</label><input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">積立期間（年）</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">想定利回り（年率%）</label><input type="number" value={yieldRate} onChange={e => setYieldRate(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間節税額</div><div className="text-xl font-bold text-primary">¥{Math.round(taxSaveYear).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">{y}年間の節税合計</div><div className="text-xl font-bold text-primary">¥{Math.round(taxSaveTotal).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">積立元本</div><div className="text-lg font-bold">¥{Math.round(principal).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">運用後資産</div><div className="text-lg font-bold">¥{Math.round(fv).toLocaleString()}</div></div>
        </div>
        <div className="mt-4 text-xs text-muted">運用益：¥{Math.round(profit).toLocaleString()}（節税額は所得税＋住民税10%の概算）</div>
      </div>

      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link href="/guide/nisa-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">NISA比較ガイドを見る</div>
          <p className="text-xs text-muted">iDeCoと併用したいNISA口座を比較 →</p>
        </Link>
        <Link href="/guide/investment-app-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">投資アプリ比較ガイドを見る</div>
          <p className="text-xs text-muted">資産運用に役立つアプリを比較 →</p>
        </Link>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>職業区分・毎月の積立額・年収・期間・利回りを入力すると、iDeCoの所得控除による節税額と、運用後の将来資産を試算します。</p></div></section>

      <AffiliateSection slug="ideco-simulator" category="日常ツール" />
      <RelatedTools currentSlug="ideco-simulator" category="日常ツール" />
    </div>
  );
}
