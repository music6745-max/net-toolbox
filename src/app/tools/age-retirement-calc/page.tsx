"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [birthYear, setBirthYear] = useState("1990");
  const [retireAge, setRetireAge] = useState("65");
  const [monthlyExpense, setMonthlyExpense] = useState("250000");

  const by = parseInt(birthYear) || 0;
  const ra = parseInt(retireAge) || 0;
  const me = parseFloat(monthlyExpense) || 0;
  const now = new Date().getFullYear();
  const currentAge = now - by;
  const yearsToRetire = ra - currentAge;
  const retireYear = now + yearsToRetire;
  const lifeExpectancy = 87; // 日本人平均
  const retirementYears = lifeExpectancy - ra;
  const totalNeeded = me * 12 * retirementYears;
  const pensionEstimate = 150000 * 12 * retirementYears; // 年金概算
  const gap = totalNeeded - pensionEstimate;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>定年までの準備計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">定年退職までの準備シミュレーター</h1>
      <p className="text-muted mb-8">生まれ年・定年年齢・月の生活費から、老後に必要な資金と年金不足額を概算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">生まれ年</label><input type="number" value={birthYear} onChange={e => setBirthYear(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">定年年齢</label><input type="number" value={retireAge} onChange={e => setRetireAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">月の生活費(円)</label><input type="number" value={monthlyExpense} onChange={e => setMonthlyExpense(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">現在の年齢</div><div className="text-lg font-bold">{currentAge}歳</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">定年まで</div><div className="text-lg font-bold">{yearsToRetire > 0 ? `${yearsToRetire}年` : "定年済み"}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">老後期間</div><div className="text-lg font-bold">{retirementYears}年</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">老後総額</div><div className="text-sm font-bold">¥{Math.round(totalNeeded).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年金見込(概算)</div><div className="text-sm font-bold">¥{Math.round(pensionEstimate).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">不足額</div><div className="text-xl font-bold text-primary">¥{Math.round(gap).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 年金は月15万円の概算。実際は加入歴・年収で変動します。インフレ未考慮。</p>
      </div>
      <ToolFAQSection
        toolName="定年退職までの準備シミュレーター"
        howTo={[
          "生まれ年・定年予定年齢・月の生活費を入力",
          "現在の年齢、定年までの年数、老後期間（平均寿命87歳基準）が自動計算される",
          "老後に必要な総額と年金見込額（月15万円想定）の差額（不足額）が表示される",
          "不足額を参考に、iDeCo・新NISAでの積立額を決定する",
        ]}
        faqs={[
          {
            question: "老後2000万円問題は本当に必要ですか？",
            answer: "夫婦2人で月26万円の生活費＋公的年金月22万円なら不足月4万円、30年で1440万円が必要。このツールは単身者・夫婦別で個別試算可能です。人によっては3000万円超の準備が必要なため、早期の資産形成が重要になります。",
          },
          {
            question: "年金見込額の月15万円は妥当ですか？",
            answer: "厚生年金の平均受給額は月14.5万円、国民年金のみは月5.5万円。会社員なら月15万円の試算はほぼ妥当、自営業者（国民年金のみ）なら月5.5万円に修正して再試算が必要です。",
          },
          {
            question: "定年年齢は65歳と70歳どちらで計算すべき？",
            answer: "健康寿命72歳・平均寿命87歳を考慮すると、65歳受給＋70歳まで再雇用で働くモデルが現実的。ただし70歳以降でも元気なら就労可能、年金繰下げ受給（75歳まで可、受給額+84%）を活用する戦略も有効です。",
          },
          {
            question: "不足額を解消する方法は？",
            answer: "①iDeCoで月2.3〜6.8万円積立（所得控除あり）②新NISAで月10万円以下積立③退職金運用④収支改善（副業・節約）。不足500万円なら月2.3万円×20年、不足2000万円なら月5万円×25年（年利5%）が目安です。",
          },
        ]}
      />
      <AffiliateSection slug="age-retirement-calc" category="日常ツール" />
      <RelatedTools currentSlug="age-retirement-calc" category="日常ツール" />
    </div>
  );
}
