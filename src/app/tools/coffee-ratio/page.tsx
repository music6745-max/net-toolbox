"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [water, setWater] = useState("300");
  const [ratio, setRatio] = useState("16");

  const w = parseFloat(water) || 0;
  const r = parseFloat(ratio) || 1;
  const beans = w / r;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>コーヒー抽出計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">コーヒー抽出比率計算ツール</h1>
      <p className="text-muted mb-8">お湯の量と抽出比率(1:○)からコーヒー豆の必要量を計算。プロ品質の一杯を毎朝に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">お湯の量(g/ml)</label><input type="number" value={water} onChange={e => setWater(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">抽出比率 (1:○)</label>
          <select value={ratio} onChange={e => setRatio(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="14">1:14 濃いめ</option>
            <option value="15">1:15 やや濃いめ</option>
            <option value="16">1:16 標準</option>
            <option value="17">1:17 やや薄め</option>
            <option value="18">1:18 薄め</option>
          </select>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center mt-4">
          <div className="text-xs text-muted mb-1">必要なコーヒー豆</div>
          <div className="text-3xl font-bold text-primary">{beans.toFixed(1)} g</div>
        </div>
      </div>
      <ToolFAQSection
        toolName="コーヒー抽出比率計算"
        howTo={[
          "お湯の量（g or ml）を入力する（300mlでマグカップ1杯分）",
          "抽出比率を選ぶ（1:16が標準、1:14が濃いめ、1:18が薄め）",
          "必要なコーヒー豆の量（g）が自動計算される",
          "ドリップスケール（0.1g単位）で豆の量を計量するのがプロ品質の秘訣",
        ]}
        faqs={[
          {
            question: "1:16の意味は？",
            answer: "コーヒー豆1gに対してお湯16gの比率です。マグカップ1杯（300ml）なら豆18.8g、コーヒーポット1L（1000g）なら豆62.5g。1:16は米国スペシャルティコーヒー協会（SCA）の黄金比、バランスの良い標準的な味。1:14（豆多め）は濃厚ボディ、1:18（湯多め）はすっきり飲みやすい味に仕上がります。",
          },
          {
            question: "豆の挽き具合による違いは？",
            answer: "ペーパードリップ：中細挽き（グラニュー糖程度）・抽出時間3〜4分。フレンチプレス：粗挽き（粗塩程度）・4分浸漬。エスプレッソ：極細挽き（小麦粉程度）・25〜30秒で抽出。挽き具合が細かいほど苦味・濃厚、粗いほど酸味・軽やかな味わいに。豆挽きは抽出直前が香り最高です。",
          },
          {
            question: "お湯の温度は何度が良い？",
            answer: "90〜96℃が理想。92〜94℃が最もバランス良く、浅煎り（酸味強め）は96℃・深煎り（苦味強め）は88〜90℃がおすすめ。沸騰後（100℃）30秒〜1分待つと90〜95℃になります。温度計がなくても、ケトル注ぎ口からの蒸気で湯温の目安が分かるようになります。",
          },
          {
            question: "おすすめの豆の保存方法は？",
            answer: "豆は酸化・湿気を避けて保存。①焙煎後2週間以内に消費②真空容器（密封・光遮断）③冷凍保存で3ヶ月可（使用時は室温に戻す）④粉の状態は香り飛び早いので挽いたら即消費。豆は1〜2週間分ずつ購入、新鮮な豆の味わいを楽しむのがホームカフェのコツです。",
          },
        ]}
      />
      <AffiliateSection slug="coffee-ratio" category="日常ツール" />
      <RelatedTools currentSlug="coffee-ratio" category="日常ツール" />
    </div>
  );
}
