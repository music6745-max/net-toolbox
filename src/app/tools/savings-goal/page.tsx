"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [goal, setGoal] = useState("1000000");
  const [months, setMonths] = useState("12");
  const [current, setCurrent] = useState("0");

  const g = parseFloat(goal) || 0;
  const m = parseInt(months) || 1;
  const c = parseFloat(current) || 0;
  const remaining = g - c;
  const monthly = remaining / m;
  const daily = monthly / 30;
  const weekly = monthly / 4.33;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>貯金目標計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">貯金目標シミュレーター</h1>
      <p className="text-muted mb-8">目標額・期間・現在の貯金額から毎月・毎週・毎日いくら貯めればよいかを計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">目標貯金額(円)</label><input type="number" value={goal} onChange={e => setGoal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">達成期間(ヶ月)</label><input type="number" value={months} onChange={e => setMonths(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">現在の貯金額(円)</label><input type="number" value={current} onChange={e => setCurrent(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎月</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎週</div><div className="text-lg font-bold">¥{Math.round(weekly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎日</div><div className="text-lg font-bold">¥{Math.round(daily).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="貯金目標シミュレーター"
        howTo={[
          "目標貯金額を入力する（旅行100万円・結婚資金300万円・マイホーム頭金500万円等）",
          "達成期間（ヶ月）を入力する",
          "現在の貯金額を入力する",
          "毎月・毎週・毎日いくら貯めれば良いかが自動計算される",
        ]}
        faqs={[
          {
            question: "目標別の貯金額目安は？",
            answer: "旅行：50〜100万円／半年〜1年。結婚資金：300〜400万円／2〜3年。マイホーム頭金：500〜1000万円／5〜10年。教育資金（子供1人）：300〜500万円／15年。老後資金：2000万円／30年（月5.5万円）。目的別に期間を設定することで、無理なく達成できる計画が立てられます。",
          },
          {
            question: "先取り貯金のコツは？",
            answer: "①給与から自動で別口座に振替（20〜30%目標）②財形貯蓄・社内預金（利息0.5〜2%、一般銀行より有利）③積立定期預金（月1万円〜）④新NISA（年40万円で非課税運用）。「残ったお金で貯金」ではなく「先に貯金してから消費」が鉄則、手取りの20〜30%を貯金に回すのが目標です。",
          },
          {
            question: "月5万円貯めるのは難しい？",
            answer: "年収400万円（手取り320万円）なら月5万円は手取りの19%、頑張れる範囲。固定費見直し（格安SIM・光熱費・保険）で月1〜3万円削減、変動費（外食・娯楽）で月1〜2万円削減すれば、現状から月5万円の貯金は十分可能。10年続ければ600万円貯まり、新NISAで運用すれば+500万円（年8%想定）増えます。",
          },
          {
            question: "貯金と投資のバランスは？",
            answer: "緊急用資金（生活費6ヶ月分）を貯金＋残りを投資が王道。例：手取り25万円なら緊急用150万円までは預金、それ以上は新NISA・iDeCoで運用。年収500万円超なら月5万円NISA＋月3万円貯金のバランスがおすすめ、20代〜40代は投資比率高め（70%以上）、50代〜60代は貯金比率上げる（50%）が鉄則です。",
          },
        ]}
      />
      <AffiliateSection slug="savings-goal" category="日常ツール" />
      <RelatedTools currentSlug="savings-goal" category="日常ツール" />
    </div>
  );
}
