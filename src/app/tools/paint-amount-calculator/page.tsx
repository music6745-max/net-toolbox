"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [width, setWidth] = useState("4");
  const [height, setHeight] = useState("2.4");
  const [coats, setCoats] = useState("2");
  const [coverage, setCoverage] = useState("8"); // m2/L

  const w = parseFloat(width) || 0;
  const h = parseFloat(height) || 0;
  const c = parseInt(coats) || 1;
  const cov = parseFloat(coverage) || 1;
  const area = w * h;
  const liters = (area * c) / cov;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>塗料必要量計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">塗料必要量計算ツール（DIY）</h1>
      <p className="text-muted mb-8">壁の幅・高さ・塗り回数から必要な塗料量(L)を計算。DIY・リフォーム前のお買い物計画に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">幅(m)</label><input type="number" step="0.1" value={width} onChange={e => setWidth(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">高さ(m)</label><input type="number" step="0.1" value={height} onChange={e => setHeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">塗り回数</label><input type="number" value={coats} onChange={e => setCoats(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">塗料の塗布面積(m²/L)</label><input type="number" value={coverage} onChange={e => setCoverage(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">塗装面積</div><div className="text-xl font-bold">{area.toFixed(2)} m²</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">必要な塗料</div><div className="text-xl font-bold text-primary">{liters.toFixed(2)} L</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="塗料必要量計算"
        howTo={[
          "塗装面の幅（m）と高さ（m）を入力する",
          "塗り回数を入力する（通常2回・耐久性重視なら3回）",
          "塗料の塗布面積（m²/L）を入力する（缶に記載、水性塗料は8m²/L程度）",
          "必要な塗料量（L）が自動計算される、余裕を見て1割多めに購入推奨",
        ]}
        faqs={[
          {
            question: "塗料の塗り回数は何回が良い？",
            answer: "下塗り→中塗り→上塗りの3回塗りが基本（外壁・屋根）、室内なら下塗り＋上塗りの2回でOK。1回塗りではムラ・塗膜厚不足で耐久性大幅低下、プロの仕上がりには3回塗り推奨。エマルションペイント（水性）は2回、油性塗料・錆止め塗料は3回がスタンダードです。",
          },
          {
            question: "塗料の種類による塗布面積の違いは？",
            answer: "水性エマルションペイント：7〜10m²/L、油性ペイント：8〜12m²/L、シリコン塗料：6〜8m²/L、フッ素塗料：4〜6m²/L（高耐久）。凹凸の多い外壁は塗布面積が小さくなる（実質-20〜30%）、平滑な室内壁は仕様通り塗れます。",
          },
          {
            question: "DIY塗装の費用相場は？",
            answer: "室内壁（10㎡）塗り替え：塗料3L（5,000〜10,000円）＋ローラー・マスキングテープ（3,000円）＝計8,000〜13,000円。プロ施工なら3〜5万円、DIYで2〜4万円節約可能。外壁塗装は足場設置必要でDIY困難、プロ（100〜150万円）に依頼推奨です。",
          },
          {
            question: "塗装に必要な道具は？",
            answer: "①ローラー（大面積）・ハケ（細部）②マスキングテープ（養生）③養生シート（床・家具保護）④トレー（塗料注ぎ込み）⑤脚立（高所）⑥下地処理用（サンドペーパー・パテ）⑦ペイントうすめ液（油性塗料の場合）。ホームセンターで全部揃えて5,000〜10,000円、再利用可能なので長期的にはお得です。",
          },
        ]}
      />
      <AffiliateSection slug="paint-amount-calculator" category="日常ツール" />
      <RelatedTools currentSlug="paint-amount-calculator" category="日常ツール" />
    </div>
  );
}
