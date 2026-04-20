"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("65");
  const [age, setAge] = useState("30");
  const [gender, setGender] = useState("male");
  const h = parseFloat(height)/100 || 1.7;
  const w = parseFloat(weight) || 65;
  const bmi = w / (h * h);
  const bf = gender === "male" ? 1.2 * bmi + 0.23 * (parseInt(age)||30) - 16.2 : 1.2 * bmi + 0.23 * (parseInt(age)||30) - 5.4;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>体脂肪率計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">体脂肪率計算ツール</h1>
      <p className="text-muted mb-8">身長・体重・年齢・性別からBMI法で体脂肪率を推定。健康管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-2">身長(cm)</label><input type="number" value={height} onChange={e=>setHeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">体重(kg)</label><input type="number" value={weight} onChange={e=>setWeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">年齢</label><input type="number" value={age} onChange={e=>setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">性別</label><select value={gender} onChange={e=>setGender(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"><option value="male">男性</option><option value="female">女性</option></select></div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">BMI</div><div className="text-xl font-bold">{bmi.toFixed(1)}</div></div>
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">推定体脂肪率</div><div className="text-xl font-bold text-primary">{bf.toFixed(1)}%</div></div>
          </div>
          <p className="text-xs text-muted mt-2">※BMI法による推定値です。正確な測定には体組成計をご使用ください。</p>
        </div>
      </div>
      <ToolFAQSection
        toolName="体脂肪率計算"
        howTo={[
          "身長・体重・年齢・性別を入力する",
          "BMI法の計算式で推定体脂肪率が算出される",
          "性別別の基準値と比較して健康状態を確認する",
          "正確な測定には体組成計（家庭用1〜3万円）の使用を推奨",
        ]}
        faqs={[
          {
            question: "体脂肪率の健康基準値は？",
            answer: "男性：痩せ10〜15%・標準15〜20%・軽肥満20〜25%・肥満25%以上。女性：痩せ20〜25%・標準25〜30%・軽肥満30〜35%・肥満35%以上。アスリートはさらに低い（男性5〜12%・女性12〜20%）。健康維持の目安は男性15〜20%・女性25〜30%が理想ゾーンです。",
          },
          {
            question: "BMI法と体組成計どっちが正確？",
            answer: "体組成計の方が圧倒的に正確。BMI法は身長・体重・年齢から統計的推定だが、筋肉量を考慮できない（筋肉質の人は過大評価される）。体組成計は生体インピーダンス法で電気抵抗を測定し精度高い、ただし水分量の影響があり入浴後・運動後は変動。毎朝同じ条件で測定が精度アップのコツです。",
          },
          {
            question: "体脂肪を減らすベストな方法は？",
            answer: "①カロリー赤字（消費>摂取）を1日300〜500kcal維持②有酸素運動（週3回×30〜60分のジョギング・ウォーキング）③筋トレ（週2回で基礎代謝UP）④高タンパク質食（体重×1.5〜2g/日）⑤糖質・脂質の過剰摂取避ける。月0.5〜1kgの体脂肪減が健康的、急激な減量はリバウンド・筋肉減リスクです。",
          },
          {
            question: "男女で体脂肪率の基準が違うのはなぜ？",
            answer: "女性は妊娠・授乳に備え、男性より体脂肪を多く蓄える生理的特性があります。女性ホルモン（エストロゲン）の影響で皮下脂肪が多く、男性は内臓脂肪（腹部）が多い傾向。同じBMI値でも体脂肪率は女性が5〜10%高いため、BMI法の計算式も性別で調整されています。",
          },
        ]}
      />
      <AffiliateSection slug="body-fat" category="日常ツール" />

      <RelatedTools currentSlug="body-fat" category="日常ツール" />
    </div>
  );
}