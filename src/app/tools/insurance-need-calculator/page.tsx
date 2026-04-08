"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [monthlyLiving, setMonthlyLiving] = useState("250000");
  const [spouseYears, setSpouseYears] = useState("30");
  const [children, setChildren] = useState("2");
  const [eduPerChild, setEduPerChild] = useState("10000000");
  const [loan, setLoan] = useState("20000000");
  const [hasGroupLife, setHasGroupLife] = useState("yes");
  const [savings, setSavings] = useState("3000000");
  const [survivorPension, setSurvivorPension] = useState("100000");

  const ml = parseFloat(monthlyLiving) || 0;
  const yrs = parseFloat(spouseYears) || 0;
  const ch = parseInt(children) || 0;
  const epc = parseFloat(eduPerChild) || 0;
  const l = parseFloat(loan) || 0;
  const s = parseFloat(savings) || 0;
  const sp = parseFloat(survivorPension) || 0;

  // 遺族生活費は現在の7割として試算
  const livingNeed = ml * 0.7 * 12 * yrs;
  const eduNeed = ch * epc;
  const loanNeed = hasGroupLife === "yes" ? 0 : l;
  const pensionOffset = sp * 12 * yrs;

  const totalNeed = livingNeed + eduNeed + loanNeed;
  const totalHave = s + pensionOffset;
  const required = Math.max(0, totalNeed - totalHave);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>必要保障額計算ツール</span></nav>
      <h1 className="text-2xl font-bold mb-2">必要保障額計算ツール</h1>
      <p className="text-muted mb-8">家族構成・収入・住宅ローンから生命保険の必要保障額（万一の場合に不足する金額）を計算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">現在の月間生活費（円）</label><input type="number" value={monthlyLiving} onChange={e => setMonthlyLiving(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">配偶者が必要とする年数</label><input type="number" value={spouseYears} onChange={e => setSpouseYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">子供の人数</label><input type="number" value={children} onChange={e => setChildren(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">子供1人あたり教育費（円）</label><input type="number" value={eduPerChild} onChange={e => setEduPerChild(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">住宅ローン残高（円）</label><input type="number" value={loan} onChange={e => setLoan(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div>
            <label className="block text-sm font-medium mb-2">団体信用生命保険（団信）加入</label>
            <select value={hasGroupLife} onChange={e => setHasGroupLife(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="yes">加入（ローン残高は保障不要）</option>
              <option value="no">未加入</option>
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">現在の貯蓄額（円）</label><input type="number" value={savings} onChange={e => setSavings(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">遺族年金の月額目安（円）</label><input type="number" value={survivorPension} onChange={e => setSurvivorPension(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>

        <div className="mt-6 bg-primary/10 rounded-lg p-5 text-center">
          <div className="text-xs text-muted mb-1">必要保障額（生命保険で備える額）</div>
          <div className="text-3xl font-bold text-primary">¥{Math.round(required).toLocaleString()}</div>
        </div>

        <div className="mt-4 space-y-1 text-xs text-muted">
          <div className="flex justify-between"><span>必要資金合計</span><span>¥{Math.round(totalNeed).toLocaleString()}</span></div>
          <div className="flex justify-between pl-4"><span>└ 遺族の生活費（現状の70%）</span><span>¥{Math.round(livingNeed).toLocaleString()}</span></div>
          <div className="flex justify-between pl-4"><span>└ 教育費</span><span>¥{Math.round(eduNeed).toLocaleString()}</span></div>
          <div className="flex justify-between pl-4"><span>└ 住宅ローン</span><span>¥{Math.round(loanNeed).toLocaleString()}</span></div>
          <div className="flex justify-between"><span>準備済み資金</span><span>¥{Math.round(totalHave).toLocaleString()}</span></div>
          <div className="flex justify-between pl-4"><span>└ 貯蓄</span><span>¥{Math.round(s).toLocaleString()}</span></div>
          <div className="flex justify-between pl-4"><span>└ 遺族年金総額</span><span>¥{Math.round(pensionOffset).toLocaleString()}</span></div>
        </div>
      </div>

      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link href="/guide/insurance-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">生命保険を比較</div>
          <p className="text-xs text-muted">主要生命保険を保障と保険料で比較するガイドを見る →</p>
        </Link>
        <Link href="/guide/cancer-insurance-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">がん保険を比較</div>
          <p className="text-xs text-muted">主要がん保険を保障・給付金で比較するガイドを見る →</p>
        </Link>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>万一の場合に必要な資金（遺族の生活費・教育費・住宅ローン）から、すでに準備済みの資金（貯蓄・遺族年金）を差し引いた金額が必要保障額です。団信加入済みならローン残高は保障不要となります。</p></div></section>

      <AffiliateSection slug="insurance-need-calculator" category="日常ツール" />
      <RelatedTools currentSlug="insurance-need-calculator" category="日常ツール" />
    </div>
  );
}
