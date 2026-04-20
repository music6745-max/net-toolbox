"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [goal, setGoal] = useState(2000);
  const [logs, setLogs] = useState<number[]>([]);
  const total = logs.reduce((s, l) => s + l, 0);
  const pct = goal > 0 ? Math.min(100, Math.round(total / goal * 100)) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>水分摂取記録</span></nav>
      <h1 className="text-2xl font-bold mb-2">水分摂取記録ツール</h1>
      <p className="text-muted mb-8">1日の水分摂取量を記録して目標達成を管理。健康管理・ダイエットに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">1日の目標(ml)</label><input type="number" value={goal} onChange={e => setGoal(parseInt(e.target.value)||0)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="flex flex-wrap gap-2">
          {[100, 200, 250, 350, 500].map(ml => (
            <button key={ml} onClick={() => setLogs([...logs, ml])} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg text-sm font-medium hover:bg-blue-100">+{ml}ml</button>
          ))}
        </div>
        <div className="bg-background rounded-lg p-4">
          <div className="flex justify-between text-sm mb-2"><span>進捗</span><span>{total}ml / {goal}ml ({pct}%)</span></div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4"><div className="bg-primary h-4 rounded-full transition-all" style={{width: `${pct}%`}} /></div>
        </div>
        {logs.length > 0 && (
          <div className="text-xs text-muted">記録: {logs.map((l, i) => `${l}ml`).join(' + ')} = {total}ml
            <button onClick={() => setLogs([])} className="ml-2 text-red-500">リセット</button>
          </div>
        )}
      </div>
      <ToolFAQSection
        toolName="水分摂取記録"
        howTo={[
          "1日の目標水分量を設定する（デフォルト2000ml）",
          "水を飲むたびに「+100ml」〜「+500ml」のボタンをタップして記録する",
          "プログレスバーで目標達成率が視覚的に確認できる",
          "毎日の習慣化で脱水予防・ダイエット効果・肌の調子改善に役立てる",
        ]}
        faqs={[
          {
            question: "1日どれくらい水を飲めば良い？",
            answer: "体重×30〜40ml（普通の活動量）が目安です。体重60kgなら1800〜2400ml/日、運動する日や夏場は+500〜1000ml追加。食事から摂る水分（約1L）を除き、純粋な飲み物は1.5〜2L/日が目標。カフェイン・アルコールは利尿作用でマイナスカウント（コーヒー1杯で-100ml扱い）です。",
          },
          {
            question: "水分補給のタイミングは？",
            answer: "①起床後（脱水状態解消）②食前30分（食欲抑制＆消化促進）③午前10時・午後3時（作業中の集中力維持）④運動前後⑤入浴後⑥就寝1時間前。一気飲みより1回150〜250mlをこまめに飲む方が吸収効率良く、夜間頻尿を避けるため就寝30分前以降は控えめに。",
          },
          {
            question: "水・お茶・スポーツドリンクどれが良い？",
            answer: "基本は水（軟水）・麦茶・ルイボスティー等のノンカフェイン。スポーツドリンクは運動30分以上・大量発汗時のみ（糖質・塩分過多になりがち）。経口補水液（OS-1等）は脱水症状時の医療用。コーヒー・紅茶・緑茶は1日2〜3杯までに抑え、カフェインフリーが水分補給のメイン。",
          },
          {
            question: "水分不足のサインは？",
            answer: "①のどの渇き（既に軽度脱水）②尿が濃い黄色（透明〜薄い黄色が理想）③頭痛・めまい④疲労感⑤便秘⑥肌の乾燥⑦筋肉痙攣。高齢者・子供はのどの渇きを感じにくいため意識的な補給が重要、1日8回（コップ1杯×8）のタイマー設定もおすすめです。",
          },
        ]}
      />
      <AffiliateSection slug="daily-water-log" category="日常ツール" />
      <RelatedTools currentSlug="daily-water-log" category="日常ツール" />
    </div>
  );
}
