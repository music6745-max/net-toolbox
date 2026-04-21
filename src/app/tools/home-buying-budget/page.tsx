"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [annual, setAnnual] = useState("6000000");
  const [rate, setRate] = useState("0.8");
  const [years, setYears] = useState("35");
  const [ratio, setRatio] = useState("25");

  const a = parseFloat(annual) || 0;
  const r = parseFloat(rate) / 100 / 12;
  const n = (parseFloat(years) || 0) * 12;
  const loanRatio = parseFloat(ratio) / 100;
  const monthlyBudget = (a * loanRatio) / 12;
  // PV of annuity
  const maxLoan = r > 0 ? monthlyBudget * (1 - Math.pow(1 + r, -n)) / r : monthlyBudget * n;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>住宅購入予算</span></nav>
      <h1 className="text-2xl font-bold mb-2">住宅購入 予算算出ツール</h1>
      <p className="text-muted mb-8">年収と返済負担率から借入可能額を逆算。住宅購入の予算目安を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">年収(円)</label><input type="number" value={annual} onChange={e => setAnnual(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">金利(年%)</label><input type="number" step="0.01" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">返済期間(年)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">返済負担率(%)※年収の何%を返済に充てるか</label>
          <select value={ratio} onChange={e => setRatio(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="20">20%(余裕あり)</option>
            <option value="25">25%(標準)</option>
            <option value="30">30%(やや高め)</option>
            <option value="35">35%(上限)</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎月返済目安</div><div className="text-lg font-bold">¥{Math.round(monthlyBudget).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">借入可能額目安</div><div className="text-xl font-bold text-primary">¥{Math.round(maxLoan).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 概算です。実際の審査では年収・勤続年数・他借入・団信加入等で決まります。</p>
      </div>
      <ToolFAQSection
        toolName="住宅購入予算"
        howTo={[
          "年収（額面・円）を入力",
          "金利（住宅ローン、変動0.3〜0.5%・固定1.0〜1.5%）を入力",
          "返済期間（通常35年）を入力",
          "返済負担率（年収の何%を返済）を選択、借入可能額が逆算",
        ]}
        faqs={[
          {
            question: "年収の何倍まで借りられる？",
            answer: "一般的に年収の5〜7倍が借入上限（金融機関の目安）。年収500万円なら2500〜3500万円、年収700万円なら3500〜4900万円、年収1000万円なら5000〜7000万円。フラット35は年収400万以上で返済負担率35%以内、ネット銀行は6〜8倍まで貸出可能な場合もあります。",
          },
          {
            question: "返済負担率25%と35%の違いは？",
            answer: "年収500万円なら25%＝年125万円（月10.4万円）・35%＝年175万円（月14.6万円）の返済。25%は余裕ある家計、35%はギリギリ。金融機関審査通過は35%だが、生活費・教育費・旅行・投資を考えると25%が現実的。老後破綻予防のためにも25%以内推奨です。",
          },
          {
            question: "頭金はいくら必要？",
            answer: "物件価格の10〜20%が目安、フルローン（頭金ゼロ）も可能だが金利優遇少ない。3500万円物件なら頭金350〜700万円＋諸費用100〜200万円。諸費用：登記費用・仲介手数料・火災保険・税金で物件価格の5〜10%。手元資金ゼロは緊急時リスク大、生活防衛資金は残しておきましょう。",
          },
          {
            question: "住宅ローン金利の選び方は？",
            answer: "変動（0.3〜0.5%）：低金利継続予想なら有利、5年ルール・125%ルールで急激な返済額増は避けられる。固定（1.3〜1.5%）：金利上昇リスクヘッジ、将来の支出計画立てやすい。迷ったら変動50%＋固定50%のミックスも選択肢、モゲチェックで複数銀行比較推奨です。",
          },
        ]}
      />
      <AffiliateSection slug="home-buying-budget" category="日常ツール" />
      <RelatedTools currentSlug="home-buying-budget" category="日常ツール" />
    </div>
  );
}
