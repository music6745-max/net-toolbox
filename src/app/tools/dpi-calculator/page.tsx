"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const commonDisplays = [
  { name: "HD (720p)", w: 1280, h: 720, size: 15.6, ppi: 94 },
  { name: "Full HD (1080p)", w: 1920, h: 1080, size: 15.6, ppi: 141 },
  { name: "QHD (1440p)", w: 2560, h: 1440, size: 27, ppi: 109 },
  { name: "4K UHD", w: 3840, h: 2160, size: 27, ppi: 163 },
  { name: "5K", w: 5120, h: 2880, size: 27, ppi: 218 },
  { name: "8K", w: 7680, h: 4320, size: 65, ppi: 136 },
  { name: "iPhone 15 Pro", w: 1179, h: 2556, size: 6.1, ppi: 460 },
  { name: "iPad Pro 12.9\"", w: 2048, h: 2732, size: 12.9, ppi: 264 },
  { name: "MacBook Pro 14\"", w: 3024, h: 1964, size: 14.2, ppi: 254 },
];

export default function Page() {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);
  const [diagonal, setDiagonal] = useState(15.6);

  const diagonalPx = Math.sqrt(width * width + height * height);
  const ppi = diagonal > 0 ? Math.round(diagonalPx / diagonal) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>DPI計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">DPI計算</h1>
      <p className="text-muted mb-8">解像度・画面サイズからDPI(PPI)を計算。ディスプレイの精細さを確認。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-1 block">横幅 (px)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">高さ (px)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">対角線 (インチ)</label>
            <input
              type="number"
              step="0.1"
              value={diagonal}
              onChange={(e) => setDiagonal(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-6">
          <div className="text-4xl font-bold text-primary">{ppi} PPI</div>
          <div className="text-sm text-muted mt-2">ピクセル密度 (Pixels Per Inch)</div>
        </div>

        <div className="text-sm text-muted mb-2">
          対角線ピクセル数: {Math.round(diagonalPx).toLocaleString()} px
        </div>

        <h3 className="text-sm font-bold mt-6 mb-3">主要ディスプレイとの比較</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-2 pr-4">ディスプレイ</th>
                <th className="text-left py-2 pr-4">解像度</th>
                <th className="text-left py-2 pr-4">サイズ</th>
                <th className="text-left py-2">PPI</th>
              </tr>
            </thead>
            <tbody>
              {commonDisplays.map((d) => (
                <tr key={d.name} className="border-b border-card-border/50">
                  <td className="py-2 pr-4">{d.name}</td>
                  <td className="py-2 pr-4 font-mono text-xs">{d.w}x{d.h}</td>
                  <td className="py-2 pr-4">{d.size}&quot;</td>
                  <td className="py-2 font-mono">{d.ppi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>解像度（横幅x高さ）と画面の対角線サイズ（インチ）を入力してください。</p>
          <p>PPI（ピクセル密度）が自動計算され、主要ディスプレイとの比較も確認できます。</p>
        </div>
      </section>

      <AffiliateSection slug="dpi-calculator" category="デザイン" />


      <RelatedTools currentSlug="dpi-calculator" category="デザイン" />
    </div>
  );
}
