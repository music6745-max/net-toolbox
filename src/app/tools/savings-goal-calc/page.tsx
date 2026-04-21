"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [goal, setGoal] = useState("1000000");
  const [months, setMonths] = useState("12");
  const [current, setCurrent] = useState("100000");

  const g = parseFloat(goal) || 0;
  const m = parseInt(months) || 1;
  const c = parseFloat(current) || 0;
  const remaining = g - c;
  const monthly = remaining / m;
  const weekly = monthly / 4.33;
  const daily = monthly / 30;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>貯金目標計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">貯金目標達成シミュレーター</h1>
      <p className="text-muted mb-8">目標額と期間から毎月・毎週・毎日の必要貯金額を計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">目標額(円)</label><input type="number" value={goal} onChange={e => setGoal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">期間(ヶ月)</label><input type="number" value={months} onChange={e => setMonths(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">現在の貯金(円)</label><input type="number" value={current} onChange={e => setCurrent(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎月</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎週</div><div className="text-lg font-bold">¥{Math.round(weekly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎日</div><div className="text-lg font-bold">¥{Math.round(daily).toLocaleString()}</div></div>
        </div>
        <div className="text-xs text-muted mt-2">残り必要額: ¥{Math.round(remaining).toLocaleString()}</div>
      </div>
      <ToolFAQSection
        toolName="貯金目標達成シミュレーター"
        howTo={[
          "目標額（円）を入力する（マイホーム頭金500万・結婚資金300万・旅行100万など）",
          "達成期間（ヶ月）を入力する",
          "現在の貯金額（円）を入力する",
          "毎月・毎週・毎日の必要貯金額が自動計算される",
        ]}
        faqs={[
          {
            question: "目標を達成しやすい貯金方法は？",
            answer: "①先取り貯金（給与から自動振替）②目的別口座分離③積立定期預金④新NISAで複利運用⑤家計簿アプリで支出管理。「残ったお金で貯金」は失敗パターン、月収の20〜30%を機械的に別口座へ送ることで、意志力不要で目標達成できます。",
          },
          {
            question: "金利・運用で加速できる？",
            answer: "達成できる。月3万円×20年を普通預金（0.001%）なら元本720万・年利息7円/年の惨劇。新NISAで年7%運用なら1560万円と2倍以上、20年で900万円の差。長期目標（5年以上）は新NISA併用、短期目標（2年以内）は預金が原則です。",
          },
          {
            question: "家族目標別の相場額は？",
            answer: "結婚式：300〜500万円（12〜24ヶ月目標）、子育て資金（幼稚園〜大学）：1000〜2000万円（15〜20年）、マイホーム頭金：物件価格の10〜20%（500〜1000万円）、老後資金：2000万円（30年）、教育資金（1人）：1000万円（20年）。複数並行する場合、優先順位を明確化しましょう。",
          },
          {
            question: "挫折しないコツは？",
            answer: "①目標を可視化（通帳コピー・紙に書く）②小さな達成を祝う（10万円達成で1万円ご褒美）③アプリで毎日確認（Zaim・マネーフォワード）④家族や友人に宣言（強制力発生）⑤自動化で意志力不要に。継続のための仕組み化こそが最強のコツです。",
          },
        ]}
      />
      <AffiliateSection slug="savings-goal-calc" category="日常ツール" />
      <RelatedTools currentSlug="savings-goal-calc" category="日常ツール" />
    </div>
  );
}
