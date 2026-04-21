"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [oneway, setOneway] = useState("60");
  const [daysPerWeek, setDaysPerWeek] = useState("5");
  const [hourlyRate, setHourlyRate] = useState("2500");
  const [years, setYears] = useState("10");

  const oneWayMin = parseFloat(oneway) || 0;
  const days = parseFloat(daysPerWeek) || 0;
  const hr = parseFloat(hourlyRate) || 0;
  const y = parseFloat(years) || 0;

  const weeklyMin = oneWayMin * 2 * days;
  const yearlyMin = weeklyMin * 48; // 48週換算
  const yearlyHours = yearlyMin / 60;
  const totalHours = yearlyHours * y;
  const opportunityCost = totalHours * hr;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>通勤時間予算計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">通勤時間予算計算ツール</h1>
      <p className="text-muted mb-8">通勤時間を時給換算し、長期的な機会損失を可視化。転職・引越しの判断材料に。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">片道通勤時間（分）</label><input type="number" value={oneway} onChange={(e) => setOneway(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">出社日数（週）</label><input type="number" value={daysPerWeek} onChange={(e) => setDaysPerWeek(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">あなたの時給換算（円）</label><input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /><p className="text-xs text-muted mt-1">年収÷(1800時間)が目安。年収400万なら約2200円。</p></div>
          <div><label className="block text-sm font-medium mb-2">現職を続ける想定年数</label><input type="number" value={years} onChange={(e) => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">週の通勤時間</div><div className="text-xl font-bold">{Math.round(weeklyMin / 60 * 10) / 10}時間</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間の通勤時間</div><div className="text-xl font-bold">{Math.round(yearlyHours)}時間</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">機会損失（{y}年）</div><div className="text-xl font-bold text-primary">¥{Math.round(opportunityCost).toLocaleString()}</div></div>
        </div>
      </div>

      <ToolFAQSection
        toolName="通勤時間予算計算"
        howTo={[
          "片道通勤時間（分）を入力",
          "週の出社日数を入力",
          "あなたの時給換算（年収÷1800時間）を入力",
          "想定勤続年数を入力、機会損失額が計算される",
        ]}
        faqs={[
          {
            question: "長時間通勤の経済損失は？",
            answer: "片道1時間・週5日×10年の場合、年間通勤時間480時間＝60労働日分、時給2,500円で1,200万円の機会損失。睡眠・家族時間・自己投資時間も失う、健康面でも心臓病・うつ病リスク30%UP（米国研究）。職住近接or リモートワークで年数百万円の時間価値を取り戻せます。",
          },
          {
            question: "リモートワーク転職のメリットは？",
            answer: "①通勤時間ゼロ＝年480時間の自由時間②昼休み活用（家事・ジム）③服装自由で被服費削減④ランチ代削減（年20〜30万円）⑤家賃安い郊外住まい可能⑥家族との時間増加。年収下がっても総合的な生活価値UP、20〜30代の転職先選定ポイントとして重要視されています。",
          },
          {
            question: "職住近接のメリットは？",
            answer: "徒歩通勤10分：年2,000時間の自由時間、健康効果も（毎日運動）。ただし都心部家賃高い（月15〜25万円）、通勤1時間圏の郊外（月8〜12万円）との差額年100万円。通勤時間×時給で損益分岐点計算、本ツールで数値化して最適な住居選びできます。",
          },
          {
            question: "時給換算の計算方法は？",
            answer: "年収÷年間労働時間（約1800時間）。年収400万→時給2,222円、年収600万→3,333円、年収800万→4,444円、年収1000万→5,555円。残業・副業込みなら実質時給はさらに低下、正確な評価には総労働時間での再計算が必要、キャリアアップ判断の基準になります。",
          },
        ]}
      />

      <AffiliateSection slug="commute-time-budget" category="日常ツール" />
      <RelatedTools currentSlug="commute-time-budget" category="日常ツール" />
    </div>
  );
}
