"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

function getQuality(dpi: number): {
  label: string;
  color: string;
  bgColor: string;
  description: string;
} {
  if (dpi < 72) {
    return {
      label: "低画質",
      color: "text-red-600",
      bgColor: "bg-red-500/10 border-red-500/30",
      description: "Web表示でも粗く見える場合があります",
    };
  }
  if (dpi < 150) {
    return {
      label: "標準（Web向け）",
      color: "text-yellow-600",
      bgColor: "bg-yellow-500/10 border-yellow-500/30",
      description: "Web・スクリーン表示に適しています",
    };
  }
  if (dpi < 300) {
    return {
      label: "高画質（印刷可）",
      color: "text-green-600",
      bgColor: "bg-green-500/10 border-green-500/30",
      description: "一般的な印刷物に使用できます",
    };
  }
  return {
    label: "印刷品質",
    color: "text-blue-600",
    bgColor: "bg-blue-500/10 border-blue-500/30",
    description: "高品質な印刷に最適です",
  };
}

export default function Page() {
  const [widthPx, setWidthPx] = useState("3000");
  const [heightPx, setHeightPx] = useState("2000");
  const [widthCm, setWidthCm] = useState("21");
  const [heightCm, setHeightCm] = useState("14.8");

  const wp = parseFloat(widthPx) || 0;
  const hp = parseFloat(heightPx) || 0;
  const wc = parseFloat(widthCm) || 0;
  const hc = parseFloat(heightCm) || 0;

  const dpiW = wc > 0 ? wp / (wc / 2.54) : 0;
  const dpiH = hc > 0 ? hp / (hc / 2.54) : 0;
  const dpi = Math.round(Math.min(dpiW, dpiH));
  const quality = getQuality(dpi);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>DPI計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">DPI計算ツール</h1>
      <p className="text-muted mb-8">
        画像のピクセル数と印刷サイズからDPIを計算し、印刷品質を判定します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">画像の幅 (px)</label>
            <input
              type="number"
              value={widthPx}
              onChange={(e) => setWidthPx(e.target.value)}
              min={1}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">画像の高さ (px)</label>
            <input
              type="number"
              value={heightPx}
              onChange={(e) => setHeightPx(e.target.value)}
              min={1}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">印刷サイズ幅 (cm)</label>
            <input
              type="number"
              value={widthCm}
              onChange={(e) => setWidthCm(e.target.value)}
              min={0.1}
              step={0.1}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">印刷サイズ高さ (cm)</label>
            <input
              type="number"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              min={0.1}
              step={0.1}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className={`rounded-lg p-6 text-center border ${quality.bgColor}`}>
          <div className="text-xs text-muted mb-1">計算DPI</div>
          <div className={`text-4xl font-bold ${quality.color}`}>
            {dpi > 0 ? dpi : "---"} <span className="text-base font-normal">DPI</span>
          </div>
          {dpi > 0 && (
            <>
              <div className={`text-lg font-bold mt-2 ${quality.color}`}>
                {quality.label}
              </div>
              <div className="text-sm text-muted mt-1">{quality.description}</div>
            </>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">水平DPI</div>
            <div className="text-xl font-bold">{dpiW > 0 ? Math.round(dpiW) : "---"}</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">垂直DPI</div>
            <div className="text-xl font-bold">{dpiH > 0 ? Math.round(dpiH) : "---"}</div>
          </div>
        </div>

        <div className="bg-background rounded-lg p-4">
          <div className="text-sm font-medium mb-3">推奨用途</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { min: 0, max: 71, label: "低画質", use: "サムネイル", color: "bg-red-500/10 border-red-500/30" },
              { min: 72, max: 149, label: "標準", use: "Web表示", color: "bg-yellow-500/10 border-yellow-500/30" },
              { min: 150, max: 299, label: "高画質", use: "印刷可", color: "bg-green-500/10 border-green-500/30" },
              { min: 300, max: Infinity, label: "印刷品質", use: "高品質印刷", color: "bg-blue-500/10 border-blue-500/30" },
            ].map((tier) => (
              <div
                key={tier.label}
                className={`rounded-lg p-3 text-center text-xs border ${
                  dpi >= tier.min && dpi <= tier.max
                    ? tier.color + " ring-2 ring-offset-1 ring-primary/30"
                    : "bg-card-bg border-card-border"
                }`}
              >
                <div className="font-medium">{tier.label}</div>
                <div className="text-muted mt-0.5">
                  {tier.max === Infinity ? `${tier.min}+` : `${tier.min}〜${tier.max}`} DPI
                </div>
                <div className="text-muted">{tier.use}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>画像のピクセル数と印刷したいサイズ（cm）を入力すると、DPIと画質判定が表示されます。</p>
          <p>DPIが300以上あれば高品質な印刷が可能です。72〜150はWeb・スクリーン表示向けです。</p>
          <p>水平と垂直のDPIが異なる場合、低い方の値が品質の基準となります。</p>
        </div>
      </section>

      <AffiliateSection slug="dpi-calculator" category="変換ツール" />
      <RelatedTools currentSlug="dpi-calculator" category="変換ツール" />
    </div>
  );
}
