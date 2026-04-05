"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

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
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">消費カロリー計算の使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>運動の種類を選び、体重と運動時間を入力すると消費カロリーが計算されます。</p><p>METsに基づいた計算で、実際の消費カロリーの目安を確認できます。</p></div></section>
      <AffiliateSection slug="calorie-burn" category="日常ツール" />
      <RelatedTools currentSlug="calorie-burn" category="日常ツール" />
    </div>
  );
}
