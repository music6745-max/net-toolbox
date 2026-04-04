"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

function hexToRgb(hex: string): [number, number, number] | null {
  const match = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!match) return null;
  return [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)];
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((c) => Math.round(c).toString(16).padStart(2, "0")).join("");
}

export default function Page() {
  const [color1, setColor1] = useState("#ff0000");
  const [color2, setColor2] = useState("#0000ff");
  const [ratio, setRatio] = useState(50);
  const [copied, setCopied] = useState(false);

  const rgb1 = hexToRgb(color1) || [255, 0, 0];
  const rgb2 = hexToRgb(color2) || [0, 0, 255];
  const t = ratio / 100;
  const mixed: [number, number, number] = [
    Math.round(rgb1[0] * (1 - t) + rgb2[0] * t),
    Math.round(rgb1[1] * (1 - t) + rgb2[1] * t),
    Math.round(rgb1[2] * (1 - t) + rgb2[2] * t),
  ];
  const mixedHex = rgbToHex(mixed[0], mixed[1], mixed[2]);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>色混合ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">色混合ツール</h1>
      <p className="text-muted mb-8">2つの色を混合して中間色を生成。混合比率も調整可能。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-2 block">色1</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="w-12 h-10 rounded cursor-pointer border border-card-border"
              />
              <input
                type="text"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">色2</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="w-12 h-10 rounded cursor-pointer border border-card-border"
              />
              <input
                type="text"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">混合比率: {ratio}%</label>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted">色1</span>
            <input
              type="range"
              min={0}
              max={100}
              value={ratio}
              onChange={(e) => setRatio(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-xs text-muted">色2</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-lg border border-card-border" style={{ backgroundColor: color1 }} />
          <span className="text-muted text-lg">+</span>
          <div className="w-16 h-16 rounded-lg border border-card-border" style={{ backgroundColor: color2 }} />
          <span className="text-muted text-lg">=</span>
          <div className="w-16 h-16 rounded-lg border border-card-border" style={{ backgroundColor: mixedHex }} />
        </div>

        <div
          className="w-full h-24 rounded-lg border border-card-border mb-4"
          style={{ backgroundColor: mixedHex }}
        />

        <div className="space-y-2">
          <div className="flex items-center justify-between bg-black/5 dark:bg-white/5 rounded-lg px-4 py-2">
            <span className="text-sm font-mono">HEX: {mixedHex}</span>
            <button onClick={() => copy(mixedHex)} className="text-xs text-primary">
              {copied ? "コピー済み" : "コピー"}
            </button>
          </div>
          <div className="flex items-center justify-between bg-black/5 dark:bg-white/5 rounded-lg px-4 py-2">
            <span className="text-sm font-mono">RGB: rgb({mixed[0]}, {mixed[1]}, {mixed[2]})</span>
            <button onClick={() => copy(`rgb(${mixed[0]}, ${mixed[1]}, ${mixed[2]})`)} className="text-xs text-primary">
              コピー
            </button>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>2つの色をカラーピッカーまたはHEXコードで指定します。</p>
          <p>スライダーで混合比率を調整すると、リアルタイムで混合結果が表示されます。</p>
          <p>結果のHEXやRGB値はコピーボタンでクリップボードにコピーできます。</p>
        </div>
      </section>

      <AffiliateSection slug="color-mix" category="デザイン" />


      <RelatedTools currentSlug="color-mix" category="デザイン" />
    </div>
  );
}
