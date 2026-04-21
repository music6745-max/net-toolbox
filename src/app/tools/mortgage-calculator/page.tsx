"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function MortgageCalculatorPage() {
  const [principal, setPrincipal] = useState(30000000);
  const [rate, setRate] = useState(1.5);
  const [years, setYears] = useState(35);

  const monthlyRate = rate / 100 / 12;
  const totalPayments = years * 12;
  const monthly = monthlyRate > 0
    ? principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments) / (Math.pow(1 + monthlyRate, totalPayments) - 1)
    : principal / totalPayments;
  const totalAmount = monthly * totalPayments;
  const totalInterest = totalAmount - principal;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>住宅ローン計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">住宅ローン計算ツール</h1>
      <p className="text-muted mb-8">借入額・金利・返済期間から毎月の返済額と総支払額をシミュレーション。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">借入額（円）</label>
          <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">金利（年%）</label>
            <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">返済期間（年）</label>
            <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {[
            { label: "毎月の返済額", value: `¥${Math.round(monthly).toLocaleString()}` },
            { label: "総返済額", value: `¥${Math.round(totalAmount).toLocaleString()}` },
            { label: "利息総額", value: `¥${Math.round(totalInterest).toLocaleString()}` },
          ].map((s) => (
            <div key={s.label} className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <ToolFAQSection
        toolName="住宅ローン計算"
        howTo={[
          "借入額（円）を入力（3500万円＝35,000,000）",
          "年利（%）を入力（変動0.3〜0.5%、固定1.0〜1.5%）",
          "返済期間（年）を入力（最長35年）",
          "毎月返済額・総返済額・利息総額が自動計算",
        ]}
        faqs={[
          {
            question: "3500万円のローンで毎月いくら？",
            answer: "金利0.5%・35年：月90,854円、総返済額3,815万円、利息315万円。金利1.5%・35年：月107,164円、総返済額4,501万円、利息1,001万円。金利1%差で総返済額が686万円違う、慎重な金利選びが重要です。頭金多め＋長期固定金利の組合せが安定経営に有利です。",
          },
          {
            question: "元利均等と元金均等どっち？",
            answer: "元利均等：毎月返済額が一定、家計計画立てやすい（標準）。元金均等：元金を均等分割、利息合計が少ない（総返済額減）。3500万円35年比較：元利均等総返済額3,815万円 vs 元金均等3,595万円（220万円差）。ただし元金均等は初期の返済額が大きく、家計負担重い、余裕ある人向けです。",
          },
          {
            question: "頭金はどれくらい必要？",
            answer: "物件価格の10〜20%が理想、フルローンも可能だが金利優遇少ない。3500万円物件なら頭金350〜700万円＋諸費用100〜200万円。頭金多めで借入額減＋優遇金利獲得、総返済額数百万円の削減効果。ただし手元資金ゼロは緊急時リスク、生活防衛資金6ヶ月分は残しておきましょう。",
          },
          {
            question: "繰り上げ返済のタイミングは？",
            answer: "住宅ローン控除期間（10〜13年）は繰り上げしないのが節税。控除額（年末残高×0.7%）最大化で税金還付数百万円。控除期間終了後に繰り上げ、あるいは新NISA・iDeCo等の運用で年7%リターンと金利1%の差を取る選択も。金利上昇局面では繰り上げ優先も合理的です。",
          },
        ]}
      />
      <AffiliateSection slug="mortgage-calculator" category="日常ツール" />
      <RelatedTools currentSlug="mortgage-calculator" category="日常ツール" />
    </div>
  );
}
