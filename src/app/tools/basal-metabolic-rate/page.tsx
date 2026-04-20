"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("60");
  const [height, setHeight] = useState("170");
  const [age, setAge] = useState("30");
  const [activity, setActivity] = useState("1.55");

  const w = parseFloat(weight) || 0;
  const h = parseFloat(height) || 0;
  const a = parseFloat(age) || 0;
  // Harris-Benedict
  const bmr = gender === "male"
    ? 13.397 * w + 4.799 * h - 5.677 * a + 88.362
    : 9.247 * w + 3.098 * h - 4.330 * a + 447.593;
  const tdee = bmr * parseFloat(activity);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>基礎代謝計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">基礎代謝量(BMR)・消費カロリー計算</h1>
      <p className="text-muted mb-8">Harris-Benedict式で基礎代謝量と1日の消費カロリーを算出。ダイエット・増量の目安に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">性別</label>
          <select value={gender} onChange={e => setGender(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="male">男性</option>
            <option value="female">女性</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">体重(kg)</label><input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">身長(cm)</label><input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">年齢</label><input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">活動レベル</label>
          <select value={activity} onChange={e => setActivity(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="1.2">低い(ほぼ座りっぱなし)</option>
            <option value="1.375">やや低い(週1-3回軽い運動)</option>
            <option value="1.55">普通(週3-5回運動)</option>
            <option value="1.725">高い(週6-7回激しい運動)</option>
            <option value="1.9">非常に高い(肉体労働/アスリート)</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">基礎代謝(BMR)</div><div className="text-xl font-bold">{Math.round(bmr)} kcal/日</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">消費カロリー(TDEE)</div><div className="text-xl font-bold text-primary">{Math.round(tdee)} kcal/日</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="基礎代謝量(BMR)・消費カロリー計算"
        howTo={[
          "性別・体重・身長・年齢を入力",
          "活動レベルを選択（デスクワークは1.2、週3-5回運動は1.55等）",
          "基礎代謝（BMR）と1日の総消費カロリー（TDEE）が自動計算される",
          "ダイエット時は摂取カロリー<TDEE、増量時は摂取>TDEEに設定",
        ]}
        faqs={[
          {
            question: "Harris-Benedict式と国立健康・栄養研究所式どちらが正確？",
            answer: "日本人にはNIH式（国立健康・栄養研究所式）がより適合的と言われますが、Harris-Benedict式も国際標準で広く使われます。実測値との誤差は±10%程度、ダイエット・増量の参考値として十分な精度です。",
          },
          {
            question: "基礎代謝(BMR)と消費カロリー(TDEE)の違いは？",
            answer: "BMRは「何もしない状態（寝ている）」で消費する最低カロリー、TDEEはBMR×活動係数で「実際の1日の消費カロリー」。ダイエットはTDEE基準で計画、BMR以下に摂取カロリーを下げると代謝低下リスク。",
          },
          {
            question: "1kg減量に必要なカロリーは？",
            answer: "体脂肪1kg=約7200kcal。月1kg減量なら日240kcal減、月2kg減量なら日480kcal減。TDEE2000kcalの人なら、1600〜1760kcal摂取＋有酸素運動で月1〜2kg減量が健康的ペース（体重の3%以内）です。",
          },
          {
            question: "活動レベルの判定基準は？",
            answer: "1.2：デスクワーク中心・運動ほぼなし。1.375：週1-3回の軽い運動（ウォーキング等）。1.55：週3-5回の普通の運動（ジョギング・筋トレ等）。1.725：週6-7回の激しい運動。1.9：肉体労働・アスリート級。過大評価しがちなので1段階控えめに設定推奨です。",
          },
        ]}
      />
      <AffiliateSection slug="basal-metabolic-rate" category="日常ツール" />
      <RelatedTools currentSlug="basal-metabolic-rate" category="日常ツール" />
    </div>
  );
}
