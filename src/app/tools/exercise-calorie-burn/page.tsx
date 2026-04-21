"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [weight, setWeight] = useState("60");
  const [exercise, setExercise] = useState("walking");
  const [minutes, setMinutes] = useState("30");

  const w = parseFloat(weight) || 0;
  const m = parseFloat(minutes) || 0;
  const mets: Record<string, { name: string; met: number }> = {
    walking: { name: "ウォーキング(通常)", met: 3.5 },
    jogging: { name: "ジョギング", met: 7.0 },
    running: { name: "ランニング(速め)", met: 10.0 },
    cycling: { name: "サイクリング", met: 6.0 },
    swimming: { name: "水泳(ゆっくり)", met: 6.0 },
    yoga: { name: "ヨガ", met: 3.0 },
    muscle: { name: "筋トレ(中強度)", met: 5.0 },
    tennis: { name: "テニス", met: 7.0 },
    dance: { name: "ダンス", met: 5.5 },
    stairs: { name: "階段昇降", met: 8.0 },
    cleaning: { name: "掃除", met: 3.5 },
    cooking: { name: "料理", met: 2.0 },
  };

  const ex = mets[exercise] || mets.walking;
  const calories = ex.met * w * (m / 60) * 1.05;
  const riceEquiv = calories / 252; // 1杯252kcal

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>運動消費カロリー</span></nav>
      <h1 className="text-2xl font-bold mb-2">運動消費カロリー計算ツール</h1>
      <p className="text-muted mb-8">体重・運動の種類・時間から消費カロリーを計算。ダイエット管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">体重(kg)</label><input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">運動</label>
            <select value={exercise} onChange={e => setExercise(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
              {Object.entries(mets).map(([k, v]) => <option key={k} value={k}>{v.name}</option>)}
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">時間(分)</label><input type="number" value={minutes} onChange={e => setMinutes(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">消費カロリー</div><div className="text-2xl font-bold text-primary">{Math.round(calories)} kcal</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ご飯換算</div><div className="text-xl font-bold">約{riceEquiv.toFixed(1)}杯分</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="運動消費カロリー計算"
        howTo={[
          "体重（kg）を入力",
          "運動の種類を選択（ウォーキング〜筋トレ12種類）",
          "運動時間（分）を入力",
          "消費カロリー・ご飯換算量が自動計算",
        ]}
        faqs={[
          {
            question: "METsとは？",
            answer: "Metabolic Equivalent、安静時を1.0とした運動強度の指標。3.5METsは安静時の3.5倍のエネルギー消費。計算式：消費カロリー(kcal)= 1.05 × METs × 体重(kg) × 時間(h)。厚労省・運動生理学で広く使われる標準指標、運動メニューの選択・強度設定の基準となります。",
          },
          {
            question: "1kg減量に必要な消費カロリーは？",
            answer: "脂肪1kg = 約7,200kcal。月1kg減なら日あたり240kcalマイナス（ウォーキング30分または食事制限）。月2kg減なら日480kcalマイナス。急激な減量（月5kg以上）は筋肉量低下＋リバウンドリスク、月1〜2kgのペースが健康的な減量速度です。",
          },
          {
            question: "運動の消費カロリー目安は？",
            answer: "体重60kg・30分運動：ウォーキング110kcal、ジョギング220kcal、ランニング315kcal、サイクリング190kcal、水泳190kcal、ヨガ95kcal、筋トレ160kcal、テニス220kcal。ラン・水泳等の高強度運動が最効率、日常運動（ウォーキング・階段）でも継続が重要です。",
          },
          {
            question: "運動だけで痩せられる？",
            answer: "運動のみは非効率。食事7割・運動3割が減量の定説、運動だけで月1kg減量には月30〜40時間の運動が必要（非現実的）。食事制限（300kcal/日）＋運動（200kcal/日）の組合せが王道、筋トレで基礎代謝UP＋有酸素運動で脂肪燃焼の両輪アプローチが効果的です。",
          },
        ]}
      />
      <AffiliateSection slug="exercise-calorie-burn" category="日常ツール" />
      <RelatedTools currentSlug="exercise-calorie-burn" category="日常ツール" />
    </div>
  );
}
