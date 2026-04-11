"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

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
      <AffiliateSection slug="exercise-calorie-burn" category="日常ツール" />
      <RelatedTools currentSlug="exercise-calorie-burn" category="日常ツール" />
    </div>
  );
}
