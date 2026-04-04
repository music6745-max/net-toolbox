"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

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
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>px値を入力すると、pt・em・rem・%に自動変換されます。基準サイズを変更すると、em/rem/%の値も連動します。</p></div></section>
      <AffiliateSection slug="font-size-converter" category="デザイン" />

      <RelatedTools currentSlug="font-size-converter" category="デザイン" />
    </div>
  );
}