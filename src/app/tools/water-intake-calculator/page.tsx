"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [weight, setWeight] = useState("60");
  const [activity, setActivity] = useState("normal");

  const w = parseFloat(weight) || 0;
  const factors: Record<string, number> = { low: 30, normal: 35, high: 40 };
  const total = w * factors[activity];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>水分摂取量計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">1日の水分摂取量計算ツール</h1>
      <p className="text-muted mb-8">体重と活動量から1日に必要な水分量を計算。健康維持・ダイエット・スポーツに活用。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">体重(kg)</label><input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">活動量</label>
          <select value={activity} onChange={e => setActivity(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="low">低い（デスクワーク中心）</option>
            <option value="normal">普通（立ち仕事/通勤）</option>
            <option value="high">高い（運動/肉体労働）</option>
          </select>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center mt-4">
          <div className="text-xs text-muted mb-1">1日に必要な水分量</div>
          <div className="text-3xl font-bold text-primary">{(total / 1000).toFixed(2)} L</div>
          <div className="text-xs text-muted mt-2">≒ コップ{Math.ceil(total / 200)}杯分(200ml換算)</div>
        </div>
      </div>
      <ToolFAQSection
        toolName="水分摂取量計算"
        howTo={[
          "体重（kg）を入力する",
          "活動量を選択する（低い・普通・高い）",
          "1日に必要な水分量（L）とコップ換算が自動計算される",
          "毎日の水分補給目標として活用する",
        ]}
        faqs={[
          {
            question: "計算式の根拠は？",
            answer: "体重1kgあたりの必要水分量を活動量で調整：低活動（デスクワーク中心）30ml、普通活動（立ち仕事・通勤）35ml、高活動（運動・肉体労働）40ml。体重60kgの普通活動なら60×35＝2,100ml/日。厚生労働省・各国栄養士会の推奨値をベースにした標準式で、健康な成人向けの目安です。",
          },
          {
            question: "食事からの水分も含まれますか？",
            answer: "計算値には食事水分（通常1L程度）を含む「総水分摂取量」です。飲み物からは1.5〜2L/日が目安、お茶・コーヒー（カフェイン含む）も半分は水分カウント。アルコールは利尿作用で水分マイナス扱い、特にビール500ml飲んだら+200mlの追加補給が必要です。",
          },
          {
            question: "高齢者・子供の水分摂取は？",
            answer: "高齢者：のどの渇きを感じにくくなるため、1日2L（意識的に）必要。子供（6〜12歳）：体重×40〜50ml（体重30kgなら1.2〜1.5L）、大人より体重比で多め。幼児（1〜5歳）：体重×60〜80ml。妊娠・授乳中は+300〜700ml追加が推奨されます。",
          },
          {
            question: "水分摂取不足の症状は？",
            answer: "初期：のどの渇き・尿が濃い黄色・頭痛・疲労感。中度：めまい・便秘・肌の乾燥・筋肉痙攣。重度：集中力低下・血圧低下・意識障害。1日の水分摂取量が体重×25ml以下が2〜3日続くと慢性的脱水リスク、特に夏場・運動時・高齢者は積極的な水分補給が必要です。",
          },
        ]}
      />
      <AffiliateSection slug="water-intake-calculator" category="日常ツール" />
      <RelatedTools currentSlug="water-intake-calculator" category="日常ツール" />
    </div>
  );
}
