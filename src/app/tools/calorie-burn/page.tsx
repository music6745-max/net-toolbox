"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";

const exercises = [
  { name: "ウォーキング", met: 3.5 },
  { name: "ジョギング", met: 7.0 },
  { name: "ランニング", met: 10.0 },
  { name: "水泳", met: 8.0 },
  { name: "サイクリング", met: 6.8 },
  { name: "ヨガ", met: 2.5 },
  { name: "筋トレ", met: 5.0 },
  { name: "階段昇り", met: 8.8 },
  { name: "テニス", met: 7.3 },
  { name: "ダンス", met: 5.5 },
];

export default function CalorieBurnPage() {
  const [weight, setWeight] = useState(60);
  const [minutes, setMinutes] = useState(30);
  const [exerciseIdx, setExerciseIdx] = useState(0);

  const calories = exercises[exerciseIdx].met * weight * (minutes / 60) * 1.05;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>消費カロリー計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">消費カロリー計算ツール</h1>
      <p className="text-muted mb-8">運動の種類と時間から消費カロリーを計算。ダイエット・健康管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">運動の種類</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {exercises.map((ex, i) => (
              <button key={ex.name} onClick={() => setExerciseIdx(i)} className={`py-2 rounded-lg text-sm ${exerciseIdx === i ? "bg-primary text-white" : "bg-background border border-card-border hover:border-primary"}`}>{ex.name}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">体重（kg）</label>
            <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">運動時間（分）</label>
            <input type="number" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>
        <div className="bg-background rounded-lg p-6 text-center mt-4">
          <div className="text-3xl font-bold text-primary">{Math.round(calories)} kcal</div>
          <div className="text-sm text-muted mt-2">{exercises[exerciseIdx].name} {minutes}分の消費カロリー</div>
        </div>
      </div>
      <ToolFAQSection
        toolName="消費カロリー計算"
        howTo={[
          "運動の種類（10種類から）を選択",
          "体重（kg）・運動時間（分）を入力",
          "消費カロリーが自動計算",
          "ダイエット・健康管理の参考に",
        ]}
        faqs={[
          {
            question: "1kg痩せるのに必要な運動量は？",
            answer: "脂肪1kg=約7,200kcal消費が必要。ウォーキング（60kg人）なら50時間、ジョギングなら20時間、水泳なら15時間。1日30分の運動を3ヶ月続けるペース、食事管理（300kcal/日減）と併用で月1kg減量が健康的な目標です。",
          },
          {
            question: "続けやすい運動は？",
            answer: "ウォーキングが最強。始める気軽さ・継続しやすさ・怪我リスクの低さで、90%以上の人が半年継続可能。1日30分・週5日で十分、スマホアプリ（歩数計）で記録＆モチベ維持。ジョギング・筋トレは挫折率高い、まず歩く習慣から始めるのが成功の秘訣。",
          },
          {
            question: "運動と食事どっちが重要？",
            answer: "ダイエットは食事7割・運動3割。運動だけで月1kg減量には毎日1時間の運動が必要（非現実的）、食事制限300kcal/日＋運動200kcal/日の組合せが現実的。タンパク質摂取量（体重×1.5〜2g）を重視、筋肉量維持が基礎代謝UP＋リバウンド防止の鍵です。",
          },
          {
            question: "運動記録アプリは？",
            answer: "Apple Health・Google Fit（OS標準、無料）、Nike Run Club（ランニング）、Strava（ランニング・サイクリング・ソーシャル機能）、MyFitnessPal（カロリー計算）。スマートウォッチ（Apple Watch・Garmin）連携で自動記録、モチベーション持続＆記録分析が上達の近道です。",
          },
        ]}
      />
      <AffiliateSection slug="calorie-burn" category="日常ツール" />
      <RelatedTools currentSlug="calorie-burn" category="日常ツール" />
    </div>
  );
}
