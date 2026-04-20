"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [height, setHeight] = useState("170");

  const h = parseFloat(height) || 0;
  const h2 = (h / 100) * (h / 100);
  const minWeight = 18.5 * h2;
  const maxWeight = 25 * h2;
  const idealWeight = 22 * h2;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>理想体重計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">理想体重・標準体重計算</h1>
      <p className="text-muted mb-8">身長から理想体重(BMI22)と標準範囲(BMI18.5〜25)を計算。ダイエット目標設定に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">身長(cm)</label><input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">標準下限(BMI18.5)</div><div className="text-lg font-bold">{minWeight.toFixed(1)}kg</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">理想(BMI22)</div><div className="text-xl font-bold text-primary">{idealWeight.toFixed(1)}kg</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">標準上限(BMI25)</div><div className="text-lg font-bold">{maxWeight.toFixed(1)}kg</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="理想体重計算"
        howTo={[
          "身長(cm)を入力欄に入力する（デフォルト170cm）",
          "BMI18.5〜25の健康範囲と、BMI22の理想体重が自動計算される",
          "ダイエット目標・健康管理の基準として活用する",
          "定期的な体重測定と組み合わせて、健康範囲内をキープする",
        ]}
        faqs={[
          {
            question: "BMI22が理想体重とされる理由は？",
            answer: "日本肥満学会の研究によると、BMI22は統計的に最も病気になりにくい数値とされています。身長1.7m（170cm）の場合、理想体重は63.6kgとなります。高血圧・糖尿病・心疾患・がん等の生活習慣病リスクが最も低い体重帯がBMI22付近であることが、数十万人規模の追跡調査で判明しています。",
          },
          {
            question: "BMI18.5未満・25以上は何が問題？",
            answer: "BMI18.5未満は「低体重」で、筋力低下・骨粗鬆症・免疫力低下・生理不順のリスクが上がります。BMI25以上は「肥満」で、糖尿病リスクが約3倍、高血圧・脂質異常症リスクも2〜3倍上昇します。BMI30以上の「肥満2度以上」になると、早期死亡リスクが健康体重帯の1.5〜2倍まで上がります。",
          },
          {
            question: "BMIだけで健康状態を判断できますか？",
            answer: "BMIは簡易指標で、筋肉量や体脂肪率を考慮していません。筋肉質のアスリートはBMI高めでも健康、逆に痩せ型でも内臓脂肪型肥満（BMI正常・体脂肪率高い）は病気リスクあり。腹囲測定（男性85cm・女性90cm超で注意）・体組成計での体脂肪率チェック（男性20%以内・女性30%以内）と併用がおすすめです。",
          },
          {
            question: "目標体重までの減量ペースは？",
            answer: "健康的な減量は月1〜2kg、年10〜20kgが目安。1kg減量に7200kcalの消費が必要、月1kg減なら1日240kcalのマイナス（30分のウォーキング＋食事制限）が現実的。極端なダイエット（月5kg以上）は筋肉量低下・リバウンドのリスクが高く、持続可能なペースで進めることが重要です。",
          },
        ]}
      />
      <AffiliateSection slug="bmi-ideal-weight" category="日常ツール" />
      <RelatedTools currentSlug="bmi-ideal-weight" category="日常ツール" />
    </div>
  );
}
