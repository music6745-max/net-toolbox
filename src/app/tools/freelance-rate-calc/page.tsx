"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [targetIncome, setTargetIncome] = useState("5000000");
  const [workDays, setWorkDays] = useState("20");
  const [workHours, setWorkHours] = useState("6");
  const [expenses, setExpenses] = useState("500000");

  const target = parseFloat(targetIncome) || 0;
  const wd = parseInt(workDays) || 1;
  const wh = parseInt(workHours) || 1;
  const exp = parseFloat(expenses) || 0;
  const totalNeeded = target + exp + target * 0.3; // 税金30%概算
  const monthlyNeeded = totalNeeded / 12;
  const dailyRate = monthlyNeeded / wd;
  const hourlyRate = dailyRate / wh;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>フリーランス単価計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">フリーランス適正単価計算ツール</h1>
      <p className="text-muted mb-8">目標年収・稼働日数・経費から適正な日単価・時間単価を逆算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">目標手取り年収(円)</label><input type="number" value={targetIncome} onChange={e => setTargetIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">年間経費(円)</label><input type="number" value={expenses} onChange={e => setExpenses(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">月の稼働日数</label><input type="number" value={workDays} onChange={e => setWorkDays(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">1日の稼働時間</label><input type="number" value={workHours} onChange={e => setWorkHours(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">必要売上(税込)</div><div className="text-sm font-bold">¥{Math.round(totalNeeded).toLocaleString()}/年</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">必要日単価</div><div className="text-xl font-bold text-primary">¥{Math.round(dailyRate).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">必要時間単価</div><div className="text-lg font-bold">¥{Math.round(hourlyRate).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted">※ 税金は概算30%で計算。実際は所得により変動します。</p>
      </div>
      <ToolFAQSection
        toolName="フリーランス適正単価計算"
        howTo={[
          "目標手取り年収（円）を入力する",
          "年間経費（家賃按分・通信費・PC等）を入力する",
          "月の稼働日数（通常15〜20日）を入力する",
          "1日の稼働時間（通常6〜8時間）を入力する",
          "必要な日単価・時間単価が逆算される",
        ]}
        faqs={[
          {
            question: "フリーランスの相場時給は？",
            answer: "業種別目安：Webデザイナー3,000〜8,000円、エンジニア5,000〜15,000円、ライター2,000〜5,000円、イラストレーター2,000〜8,000円、翻訳3,000〜6,000円、コンサルタント10,000〜30,000円。経験年数・スキル・専門性で大きく変動、若手は相場下限から、5年以上ベテランは相場上限を目標にしましょう。",
          },
          {
            question: "年収500万円の手取りは？",
            answer: "フリーランス年収500万円の手取り：約360〜380万円（税金・社会保険料で120〜140万円）。正社員なら手取り400〜420万円でフリーランスの方が手取り少なめ。その分、経費計上範囲広い・働く時間の自由度・ボーナス期待等のメリットあり、トータルで判断が必要です。",
          },
          {
            question: "稼働率・稼働日数の目安は？",
            answer: "専業フリーランスの目安：月15〜20日稼働（週休2日）、1日6〜8時間実働。有給・病気・研修・営業時間も考慮すると、実質稼働日は月18日程度。年240〜260日稼働が標準、営業・自己投資・休暇時間も必要で、全時間を売上に使うのは現実的でないです。",
          },
          {
            question: "経費計上できる項目は？",
            answer: "家賃（業務使用分の按分）・光熱費（同）・通信費・パソコン・書籍・研修費・交通費・取引先との会食・備品・消耗品。家事按分は床面積比or使用時間比で算出、年間経費の目安は売上の20〜30%程度。青色申告65万円控除＋経費計上で税負担を30%以上削減可能です。",
          },
        ]}
      />
      <AffiliateSection slug="freelance-rate-calc" category="日常ツール" />
      <RelatedTools currentSlug="freelance-rate-calc" category="日常ツール" />
    </div>
  );
}
