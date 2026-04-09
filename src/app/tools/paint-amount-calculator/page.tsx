"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

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
      <AffiliateSection slug="paint-amount-calculator" category="日常ツール" />
      <RelatedTools currentSlug="paint-amount-calculator" category="日常ツール" />
    </div>
  );
}
