"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [income, setIncome] = useState("5000000");
  const [age, setAge] = useState("30");
  const [down, setDown] = useState("5000000");

  const i = parseFloat(income) || 0;
  const a = parseInt(age) || 0;
  const d = parseFloat(down) || 0;
  const maxYears = Math.min(35, 65 - a);
  const rate = 0.008 / 12; // 0.8% annual
  const n = maxYears * 12;
  const monthlyBudget = i * 0.25 / 12; // 年収の25%
  const maxLoan = rate > 0 ? monthlyBudget * (1 - Math.pow(1 + rate, -n)) / rate : monthlyBudget * n;
  const totalBudget = maxLoan + d;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>住宅購入力診断</span></nav>
      <h1 className="text-2xl font-bold mb-2">住宅購入力診断ツール</h1>
      <p className="text-muted mb-8">年収・年齢・頭金から購入可能な住宅価格の目安を計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">年収(円)</label><input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">年齢</label><input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">頭金(円)</label><input type="number" value={down} onChange={e => setDown(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">最長ローン期間</div><div className="text-lg font-bold">{maxYears}年</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月の返済目安</div><div className="text-sm font-bold">¥{Math.round(monthlyBudget).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">借入可能額</div><div className="text-sm font-bold">¥{Math.round(maxLoan).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">購入可能額</div><div className="text-xl font-bold text-primary">¥{Math.round(totalBudget).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted">※ 金利0.8%・返済負担率25%で計算。実際は審査・他借入で変動します。</p>
      </div>
      <ToolFAQSection
        toolName="住宅購入力診断"
        howTo={[
          "年収（税込・円）を入力する",
          "年齢を入力する（65歳完済目安で最長ローン期間が決まる）",
          "用意できる頭金（円）を入力する",
          "購入可能な住宅価格の目安・月の返済額・借入可能額が計算される",
        ]}
        faqs={[
          {
            question: "年収倍率の目安は？",
            answer: "一般的に年収の5〜7倍が借入上限。年収500万円なら2500〜3500万円、年収1000万円なら5000〜7000万円。ただし金融機関の審査では返済負担率（年間返済額÷年収）が重視され、25〜35%以内が推奨。無理のないラインは返済負担率20〜25%、手取りの20%以内の月返済額が鉄則です。",
          },
          {
            question: "変動金利と固定金利どっち？",
            answer: "低金利継続予想なら変動（0.3〜0.5%）、金利上昇不安なら固定（フラット35で1.3〜1.5%）。変動は5年ルール（5年毎の見直しで最大25%増）＆125%ルールあり、短期的には安全。返済期間20年超なら固定も有力、ミックスプラン（変動50%＋固定50%）も選択肢です。",
          },
          {
            question: "頭金はいくら必要？",
            answer: "物件価格の10〜20%が目安、フルローンも可能だが金利上乗せあり。3500万円物件なら頭金350〜700万円、諸費用100〜200万円を別途用意。頭金多いほど月返済額軽減・金利優遇あり、ただし手元資金ゼロは緊急時リスク大、生活費6ヶ月分は残しておきましょう。",
          },
          {
            question: "住宅ローン控除の効果は？",
            answer: "年末残高の0.7%を所得税・住民税から控除（13年間）。3500万円ローンなら年24.5万円×13年＝約318万円の税金還付。2024年以降は省エネ基準を満たす新築のみ対象、中古は条件あり。モゲチェック・住信SBI等で複数銀行の一括比較で最適金利を探すのが鉄則です。",
          },
        ]}
      />
      <AffiliateSection slug="mortgage-affordability" category="日常ツール" />
      <RelatedTools currentSlug="mortgage-affordability" category="日常ツール" />
    </div>
  );
}
