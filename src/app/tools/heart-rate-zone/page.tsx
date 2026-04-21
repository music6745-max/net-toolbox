"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [age, setAge] = useState("30");
  const [resting, setResting] = useState("60");

  const a = parseInt(age) || 0;
  const r = parseInt(resting) || 0;
  const max = 220 - a;
  const reserve = max - r;
  const zones = [
    { name: "Zone1 ウォームアップ", low: 0.5, high: 0.6 },
    { name: "Zone2 脂肪燃焼", low: 0.6, high: 0.7 },
    { name: "Zone3 有酸素", low: 0.7, high: 0.8 },
    { name: "Zone4 無酸素", low: 0.8, high: 0.9 },
    { name: "Zone5 最大", low: 0.9, high: 1.0 },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>心拍ゾーン計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">心拍ゾーン計算ツール</h1>
      <p className="text-muted mb-8">年齢と安静時心拍からカルボーネン法でトレーニング心拍ゾーンを算出。ダイエット・持久力向上に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">年齢</label><input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">安静時心拍数（bpm）</label><input type="number" value={resting} onChange={e => setResting(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="mt-6 text-sm text-muted">最大心拍数: <span className="font-bold text-foreground">{max} bpm</span></div>
        <div className="mt-4 space-y-2">
          {zones.map(z => {
            const lo = Math.round(reserve * z.low + r);
            const hi = Math.round(reserve * z.high + r);
            return <div key={z.name} className="flex justify-between bg-background rounded-lg p-3 text-sm"><span>{z.name}</span><span className="font-bold">{lo}〜{hi} bpm</span></div>;
          })}
        </div>
      </div>
      <ToolFAQSection
        toolName="心拍ゾーン計算"
        howTo={[
          "年齢を入力（最大心拍数＝220-年齢で計算）",
          "安静時心拍数（平均60bpm）を入力",
          "5つのトレーニングゾーン（脂肪燃焼・有酸素・無酸素等）が計算される",
          "運動目的に応じて適切なゾーンで心拍計付きランニングウォッチでトレーニング",
        ]}
        faqs={[
          {
            question: "各ゾーンの効果は？",
            answer: "Zone1：ウォームアップ・クールダウン、Zone2：脂肪燃焼最大（60〜70%最大心拍）、Zone3：有酸素能力UP、Zone4：無酸素閾値向上、Zone5：最大心肺機能。ダイエット目的ならZone2、持久力向上ならZone3〜4、スピード・パワー向上ならZone4〜5が効果的です。",
          },
          {
            question: "カルボーネン法とは？",
            answer: "目標心拍数 = 安静時心拍 + （最大心拍 - 安静時心拍）× 運動強度%。単純な最大心拍×%より個人差（フィットネスレベル・年齢）を反映できる精緻な計算方法。安静時心拍45bpm（アスリート）と70bpm（運動不足）では、同じZone2でも目標心拍数が10〜15bpm違います。",
          },
          {
            question: "心拍計は必要？",
            answer: "効果的なトレーニングには必須。スマートウォッチ（Apple Watch・Garmin・Fitbit）が光学式センサーで計測、胸ベルト型（Polar・Garmin）はより精度高い。1〜5万円の投資で、トレーニング効率と怪我予防が劇的に改善、ランニング・ジム通いする人には最優先アイテムです。",
          },
          {
            question: "安静時心拍数の計測方法は？",
            answer: "朝起きてすぐ、布団の中で1分間計測が正確。スマートウォッチの睡眠計測で最低値を確認。健康成人は60〜80bpm、アスリートは40〜60bpm、運動不足・ストレスで80bpm超も。加齢で徐々に上がるが、有酸素運動習慣で下げられる、健康指標として重要です。",
          },
        ]}
      />
      <AffiliateSection slug="heart-rate-zone" category="日常ツール" />
      <RelatedTools currentSlug="heart-rate-zone" category="日常ツール" />
    </div>
  );
}
