"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [amount, setAmount] = useState("30000000");
  const [rate, setRate] = useState("1.5");
  const [years, setYears] = useState("35");

  const a = parseFloat(amount) || 0;
  const r = (parseFloat(rate) || 0) / 100 / 12;
  const n = (parseInt(years) || 0) * 12;
  const monthly = r > 0 ? (a * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : a / n;
  const total = monthly * n;
  const interest = total - a;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ローン返済計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">ローン返済計算ツール</h1>
      <p className="text-muted mb-8">借入額・金利・返済期間から月々の返済額と総返済額を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">借入額（円）</label><input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">年利（%）</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">返済期間（年）</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月々の返済額</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">総返済額</div><div className="text-xl font-bold">¥{Math.round(total).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">利息合計</div><div className="text-xl font-bold">¥{Math.round(interest).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="ローン返済計算"
        howTo={[
          "借入額（円）を入力する",
          "年利（%）を入力する（住宅ローン0.3〜1.5%、自動車ローン2〜5%、カードローン3〜18%）",
          "返済期間（年）を入力する",
          "元利均等返済方式で月々返済額・総返済額・利息合計が自動計算される",
        ]}
        faqs={[
          {
            question: "元利均等返済と元金均等返済の違いは？",
            answer: "元利均等返済：毎月の返済額が一定（初期は利息多め、後半は元金多め）、計画立てやすく住宅ローンの標準。元金均等返済：毎月の元金返済額が一定（初期は返済額多め・利息多め、徐々に減少）、総利息が少なく済む。総利息を最小化したい場合は元金均等がおすすめ、このツールは元利均等方式で計算しています。",
          },
          {
            question: "ローンの種類別の金利相場は？",
            answer: "住宅ローン：変動0.3〜0.5%・固定0.8〜1.5%。自動車ローン：ディーラー3〜5%・銀行1〜3%。カードローン：3〜18%。教育ローン：2〜4%。事業者ローン：2〜8%。フリーローン：5〜15%。金利が高いほど返済額大幅増、借入時は複数社比較が節約の鍵です。",
          },
          {
            question: "借入額の上限目安は？",
            answer: "住宅ローン：年収の5〜7倍（年収500万円なら2500〜3500万円）、返済負担率25〜35%以内。自動車ローン：年収の30%程度・毎月5〜8万円以内。カードローン：年収の1/3（総量規制）。無理のない返済額は毎月手取りの20%以内が目安、生活費・貯蓄・娯楽費のバランスで計算します。",
          },
          {
            question: "繰り上げ返済のメリットは？",
            answer: "期間短縮型：総返済額を大幅削減（3500万円35年ローンで500万円短縮なら利息80万円節約）。返済額軽減型：月々の負担軽減。低金利時代は繰り上げより資産運用（年8%）の方が有利だが、心理的安定・金利上昇リスクヘッジとして繰り上げも有効。住宅ローン控除期間（10〜13年）は繰り上げせず維持が節税優先です。",
          },
        ]}
      />
      <AffiliateSection slug="loan-calculator" category="日常ツール" />

      <RelatedTools currentSlug="loan-calculator" category="日常ツール" />
    </div>
  );
}