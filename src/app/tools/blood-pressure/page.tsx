"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [sys, setSys] = useState("120");
  const [dia, setDia] = useState("80");
  const s = parseInt(sys)||0;
  const d2 = parseInt(dia)||0;
  const getLevel = () => { if(s<120&&d2<80) return {l:"正常血圧",c:"text-green-600"}; if(s<130&&d2<80) return {l:"正常高値",c:"text-yellow-600"}; if(s<140||d2<90) return {l:"高値血圧",c:"text-orange-600"}; if(s<160||d2<100) return {l:"I度高血圧",c:"text-red-500"}; if(s<180||d2<110) return {l:"II度高血圧",c:"text-red-600"}; return {l:"III度高血圧",c:"text-red-700"}; };
  const level = getLevel();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>血圧判定</span></nav>
      <h1 className="text-2xl font-bold mb-2">血圧判定ツール</h1>
      <p className="text-muted mb-8">収縮期・拡張期の血圧値から血圧レベルを判定。WHO基準に基づく分類。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-2">収縮期血圧 (上)</label><input type="number" value={sys} onChange={e=>setSys(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">拡張期血圧 (下)</label><input type="number" value={dia} onChange={e=>setDia(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          </div>
          <div className="bg-background rounded-lg p-6 text-center">
            <div className="text-sm text-muted mb-2">判定結果</div>
            <div className={`text-2xl font-bold ${level.c}`}>{level.l}</div>
            <div className="text-lg mt-2">{sys}/{dia} mmHg</div>
          </div>
          <p className="text-xs text-muted">※日本高血圧学会の基準に基づく分類です。医療上の判断は医師にご相談ください。</p>
        </div>
      </div>
      <ToolFAQSection
        toolName="血圧判定"
        howTo={[
          "血圧計で測定した収縮期（上）・拡張期（下）の数値を入力する",
          "日本高血圧学会基準の6段階で血圧レベルが自動判定される",
          "定期的な測定で血圧の経過を記録する（朝晩2回推奨）",
          "I度高血圧以上が続く場合は、医療機関で受診を検討する",
        ]}
        faqs={[
          {
            question: "正しい血圧測定の方法は？",
            answer: "朝（起床後1時間以内・排尿後・朝食前・服薬前）と夜（就寝前）の1日2回、それぞれ1〜2分安静にしてから測定します。上腕式カフで心臓と同じ高さ、足は組まず背もたれに寄りかかる姿勢で。1回目と2回目の差が10mmHg以上ある場合は3回目も測定して平均値を記録します。",
          },
          {
            question: "高血圧の診断基準は？",
            answer: "日本高血圧学会の2024年基準：正常血圧（120/80未満）・正常高値（120〜129/80未満）・高値血圧（130〜139/80〜89）・I度高血圧（140〜159/90〜99）・II度高血圧（160〜179/100〜109）・III度高血圧（180以上/110以上）。家庭血圧は診察室血圧より5mmHg低めが基準（家庭135/85以上で高血圧）です。",
          },
          {
            question: "高血圧の自覚症状はありますか？",
            answer: "高血圧は「沈黙の病気」と呼ばれ、ほとんど無症状です。頭痛・めまい・肩こりが出るのは重症（180/110以上）の場合がほとんど。症状がないため40歳以上は定期健診での血圧測定が重要、I度高血圧以上でも放置すると脳卒中リスクが3〜5倍、心筋梗塞リスクが2〜3倍に上がります。",
          },
          {
            question: "高血圧の治療・改善方法は？",
            answer: "生活習慣改善（減塩6g/日以下・有酸素運動30分/日・減量・禁煙・節酒）で10〜20mmHg低下可能。改善しない場合は降圧薬（ARB・ACE阻害薬・Ca拮抗薬・利尿薬）を医師処方で継続。II度高血圧以上は即座に医療機関受診、遺伝的素因が強い場合は40代から服薬継続が一般的です。",
          },
        ]}
      />
      <AffiliateSection slug="blood-pressure" category="日常ツール" />

      <RelatedTools currentSlug="blood-pressure" category="日常ツール" />
    </div>
  );
}