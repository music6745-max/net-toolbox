"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [people, setPeople] = useState("5");
  const [minutes, setMinutes] = useState("60");
  const [avgSalary, setAvgSalary] = useState("500000");

  const p = parseInt(people) || 0;
  const m = parseInt(minutes) || 0;
  const s = parseFloat(avgSalary) || 0;
  const hourlyRate = s / 160;
  const costPerPerson = hourlyRate * (m / 60);
  const totalCost = costPerPerson * p;
  const yearlyMeetings = 50;
  const yearlyCost = totalCost * yearlyMeetings;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>会議コスト計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">会議コスト計算ツール</h1>
      <p className="text-muted mb-8">参加人数・時間・平均月給から会議の人件費コストを可視化。無駄な会議の削減に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">参加人数</label><input type="number" value={people} onChange={e => setPeople(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">時間(分)</label><input type="number" value={minutes} onChange={e => setMinutes(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">平均月給(円)</label><input type="number" value={avgSalary} onChange={e => setAvgSalary(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">この会議のコスト</div><div className="text-xl font-bold text-primary">¥{Math.round(totalCost).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1人あたり</div><div className="text-lg font-bold">¥{Math.round(costPerPerson).toLocaleString()}</div></div>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間(週1回で)</div><div className="text-lg font-bold text-red-500">¥{Math.round(yearlyCost).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="会議コスト計算"
        howTo={[
          "参加人数を入力する",
          "会議時間（分）を入力する",
          "参加者の平均月給（円）を入力する",
          "コスト内訳（1人あたり・全体・年間）が自動計算される",
        ]}
        faqs={[
          {
            question: "会議コストの計算式は？",
            answer: "時給（月給÷160時間）×会議時間×参加人数で計算。月給50万円・8人・60分なら、時給3,125円×1時間×8人＝25,000円。週1回開催すれば年130万円のコスト。この数字を社内で共有すると、無駄な会議の意識改革につながります。",
          },
          {
            question: "会議を削減するコツは？",
            answer: "①目的明確化（結論・決定事項・情報共有のいずれか）②アジェンダ事前共有（前日まで）③時間厳守（開始・終了時刻）④参加者厳選（必要最小限）⑤立ち会議で30%時短⑥毎週開催→隔週・月1への変更⑦チャット・メールでの非同期化。年50〜100時間の時短で数十万円の人件費削減。",
          },
          {
            question: "Zoom会議も同じコスト？",
            answer: "同じです。人件費は変わらないため、在宅でもオフィスでもコストは同等。ただし移動時間ゼロ（往復30分×人数分）がメリット、年間数十時間の時短効果。一方で雑談・アイデア創発の機会減少リスク、重要会議はオフラインの判断も必要です。",
          },
          {
            question: "会議効率化ツールは？",
            answer: "Notion・Miro（議事録・ブレスト）、Google Meet録画（後で参加）、Asana・Trello（アクションアイテム管理）、Loom（非同期動画説明）。これらをSaaS導入で年数万円、人件費削減数百万円なら圧倒的ROI、特に中規模以上の企業は即効性あります。",
          },
        ]}
      />
      <AffiliateSection slug="meeting-cost-calc" category="日常ツール" />
      <RelatedTools currentSlug="meeting-cost-calc" category="日常ツール" />
    </div>
  );
}
