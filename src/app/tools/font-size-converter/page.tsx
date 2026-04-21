"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [px, setPx] = useState("16");
  const [base, setBase] = useState("16");
  const b = parseFloat(base) || 16;
  const p = parseFloat(px) || 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>フォントサイズ変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">フォントサイズ変換ツール</h1>
      <p className="text-muted mb-8">px・pt・em・rem・%のフォントサイズを相互変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">基準サイズ (root font-size)</label>
          <input type="number" value={base} onChange={e => setBase(e.target.value)} className="w-32 border border-card-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /> <span className="text-sm text-muted ml-1">px</span>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">変換する値 (px)</label>
          <input type="number" value={px} onChange={e => setPx(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">px</div><div className="text-lg font-bold">{p}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">pt</div><div className="text-lg font-bold">{(p * 0.75).toFixed(2)}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">em / rem</div><div className="text-lg font-bold">{(p / b).toFixed(4)}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">%</div><div className="text-lg font-bold">{((p / b) * 100).toFixed(2)}</div></div>
        </div>
        <div className="mt-6 p-4 bg-background rounded-lg">
          <p className="text-sm text-muted mb-2">プレビュー:</p>
          <p style={{ fontSize: p + "px" }}>あいうえお ABC 123</p>
        </div>
      </div>
      <ToolFAQSection
        toolName="フォントサイズ変換"
        howTo={[
          "基準サイズ（root font-size）を入力（通常16px）",
          "変換したいpx値を入力",
          "pt・em・rem・%の値が自動計算される",
          "プレビューで実際の表示サイズを確認",
        ]}
        faqs={[
          {
            question: "px・em・rem・%の違いは？",
            answer: "px：絶対単位（固定サイズ）、em：親要素のfont-size基準（相対）、rem：rootのfont-size基準（相対）、%：親要素の%。モダンCSSではrem推奨、ユーザーのブラウザ設定で拡大縮小が反映され、アクセシビリティが高い。pxはレガシー、em はコンポーネント単位での相対サイズに活用。",
          },
          {
            question: "適切な本文フォントサイズは？",
            answer: "ウェブ本文：14〜16px（デスクトップ）、16〜18px（モバイル）が標準。見出しh1：28〜36px、h2：24〜28px、h3：20〜24px。小さすぎる12px以下はアクセシビリティNG、大きすぎる20px以上は本文には不適切。ユーザビリティ重視で16pxが黄金サイズです。",
          },
          {
            question: "ptとpxの違いは？",
            answer: "pt（ポイント）：印刷物単位（1pt = 1/72インチ）、px（ピクセル）：画面単位。1pt ≒ 1.333px（96dpi環境）。印刷物はpt、ウェブはpxが原則。Microsoft Wordのフォントサイズはptなので混乱しやすい、ウェブ制作ではpxやrem統一が推奨です。",
          },
          {
            question: "レスポンシブ対応のコツは？",
            answer: "clamp()関数活用：`font-size: clamp(16px, 2vw, 24px)` でモバイル16px・デスクトップ最大24pxの流動的サイズを実現。メディアクエリと組合せ、rem基準でルートサイズ調整も効果的。TailwindCSS・CSS Modules等のフレームワークで標準化するのが実務的です。",
          },
        ]}
      />
      <AffiliateSection slug="font-size-converter" category="デザイン" />

      <RelatedTools currentSlug="font-size-converter" category="デザイン" />
    </div>
  );
}