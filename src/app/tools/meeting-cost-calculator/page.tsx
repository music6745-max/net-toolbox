"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [participants, setParticipants] = useState("8");
  const [duration, setDuration] = useState("60");
  const [avgSalary, setAvgSalary] = useState("500000");

  const p = parseInt(participants) || 0;
  const d = parseInt(duration) || 0;
  const s = parseFloat(avgSalary) || 0;
  const hourlyRate = s / 160; // 月160時間勤務想定
  const costPerMinute = hourlyRate / 60;
  const totalCost = costPerMinute * d * p;
  const yearlyIfWeekly = totalCost * 52;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>会議コスト計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">会議コスト計算ツール</h1>
      <p className="text-muted mb-8">参加人数・時間・平均月給から会議の人件費コストを可視化。無駄な会議の削減に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">参加人数</label><input type="number" value={participants} onChange={e => setParticipants(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">時間(分)</label><input type="number" value={duration} onChange={e => setDuration(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">平均月給(円)</label><input type="number" value={avgSalary} onChange={e => setAvgSalary(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1人あたり時給</div><div className="text-lg font-bold">¥{Math.round(hourlyRate).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">この会議のコスト</div><div className="text-xl font-bold text-primary">¥{Math.round(totalCost).toLocaleString()}</div></div>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎週なら年間</div><div className="text-lg font-bold text-red-500">¥{Math.round(yearlyIfWeekly).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="会議コスト計算"
        howTo={[
          "参加人数を入力する",
          "会議時間（分）を入力する",
          "参加者の平均月給（円）を入力する",
          "会議の人件費コストと、毎週開催時の年間コストが可視化される",
        ]}
        faqs={[
          {
            question: "会議コストの計算方法は？",
            answer: "参加者の時給（月給÷160時間）×会議時間×参加人数で計算。例：平均月給50万円・8人・60分の会議なら、時給3,125円×1時間×8人＝25,000円。毎週同じ会議を開催すると年130万円のコスト。ダラダラ会議の見直しで年数百万円の人件費削減が可能です。",
          },
          {
            question: "会議時間を短縮するコツは？",
            answer: "①アジェンダを事前共有（前日まで）②開始時刻・終了時刻を厳守③発言ルール（1人2分以内）④ファシリテーター設置⑤議事録テンプレ化⑥座る会議→立つ会議（30%時短効果）⑦オンライン会議で移動時間ゼロ。1時間会議→45分会議で25%削減、年数十万円の効果があります。",
          },
          {
            question: "会議をやめる判断基準は？",
            answer: "①情報共有のみ：メール・チャットで代替（週1以内）②定例会議：KPI見直しで隔週・月1に③決裁承認：オンライン承認システムで会議不要④ブレスト：月1の集中会議1回に絞る。全ての会議をABC分析（重要度）で仕分け、C評価は廃止・縮小で生産性30〜50%向上します。",
          },
          {
            question: "効率的な会議の進め方は？",
            answer: "①アジェンダ5分で共有②各議題15〜20分で結論出す③アクションアイテム明記（担当者・期日）④次回までのToDoを議事録で共有⑤最後5分で振り返り。1時間会議なら議題3〜4個が上限、それ以上は別会議へ分割。生産性重視で「会議は結論を出す場」と意識することが重要です。",
          },
        ]}
      />
      <AffiliateSection slug="meeting-cost-calculator" category="日常ツール" />
      <RelatedTools currentSlug="meeting-cost-calculator" category="日常ツール" />
    </div>
  );
}
