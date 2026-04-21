"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("cup");

  const a = parseFloat(amount) || 0;
  const conversions: Record<string, { ml: number; label: string }> = {
    cup: { ml: 200, label: "カップ(200ml)" },
    tbsp: { ml: 15, label: "大さじ(15ml)" },
    tsp: { ml: 5, label: "小さじ(5ml)" },
    ml: { ml: 1, label: "ml" },
    cc: { ml: 1, label: "cc" },
    l: { ml: 1000, label: "リットル" },
    dl: { ml: 100, label: "デシリットル" },
    oz: { ml: 29.57, label: "オンス(fl oz)" },
    uscup: { ml: 236.59, label: "USカップ(236ml)" },
  };

  const fromMl = a * (conversions[from]?.ml || 1);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>料理の計量単位変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">料理の計量単位変換ツール</h1>
      <p className="text-muted mb-8">カップ・大さじ・小さじ・ml・オンスを相互変換。レシピの分量調整に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">量</label><input type="number" step="0.1" value={amount} onChange={e => setAmount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">単位</label>
            <select value={from} onChange={e => setFrom(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
              {Object.entries(conversions).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {Object.entries(conversions).filter(([k]) => k !== from).map(([k, v]) => (
            <div key={k} className="flex justify-between bg-background rounded-lg p-3 text-sm">
              <span>{v.label}</span>
              <span className="font-bold">{(fromMl / v.ml).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
      <ToolFAQSection
        toolName="料理の計量単位変換"
        howTo={[
          "量（数字）を入力",
          "元の単位（カップ・大さじ・小さじ・ml等）を選択",
          "全単位への換算結果が自動表示",
          "日本・海外のレシピ両方に対応",
        ]}
        faqs={[
          {
            question: "日本1カップと海外1カップの違いは？",
            answer: "日本：1カップ=200ml、米国：1カップ=約237ml（正確には236.59ml）、英国：1カップ=約284ml（メトリック250ml推奨）。20〜40%の差があるため、海外レシピは注意。本ツールの「USカップ」選択で正確な変換可能、失敗しない料理のための必須チェックです。",
          },
          {
            question: "オンス（fl oz）とは？",
            answer: "fluid ounce（液量オンス）、米国で液体を計量する単位。1 fl oz = 29.57ml。ビール缶（12 fl oz=355ml）、カクテルレシピ・ウイスキーショット（1.5 fl oz=44ml）等で頻出。ポンド（重量オンス・oz）とは別の単位、混同しないよう注意が必要です。",
          },
          {
            question: "重さ（g）と体積（ml）の違いは？",
            answer: "食材の密度で違う。水1ml=1g、牛乳1ml=約1.03g、油1ml=約0.92g、薄力粉1ml=約0.55g、砂糖1ml=約0.85g。レシピに「200g」と書かれていれば必ず秤（スケール）で計量、「200ml」なら計量カップで計量。両者の混在に注意、電子キッチンスケール併用が鉄則です。",
          },
          {
            question: "海外レシピ再現のコツは？",
            answer: "①必ず計量カップ・スケールで計量（目分量NG）②温度はC/F換算（F=C×1.8+32）③オーブン温度も正確に（180℃=350°F）④粉類は詰めすぎない（すくい取り）⑤液体は平らな場所で計量。正確な計量が失敗しない料理の基本、本ツールの換算＋厳密計量で海外レシピを完璧に再現できます。",
          },
        ]}
      />
      <AffiliateSection slug="recipe-unit-converter" category="日常ツール" />
      <RelatedTools currentSlug="recipe-unit-converter" category="日常ツール" />
    </div>
  );
}
