"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

function hexToHsl(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return null;
  let r = parseInt(m[1], 16) / 255;
  let g = parseInt(m[2], 16) / 255;
  let b = parseInt(m[3], 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, Math.round(l * 100)];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360;
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

interface Palette {
  name: string;
  colors: string[];
}

function generatePalettes(hex: string): Palette[] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [];
  const [h, s, l] = hsl;
  return [
    {
      name: "補色 (Complementary)",
      colors: [hex, hslToHex(h + 180, s, l)],
    },
    {
      name: "類似色 (Analogous)",
      colors: [
        hslToHex(h - 30, s, l),
        hex,
        hslToHex(h + 30, s, l),
      ],
    },
    {
      name: "三角配色 (Triadic)",
      colors: [hex, hslToHex(h + 120, s, l), hslToHex(h + 240, s, l)],
    },
    {
      name: "スプリット補色 (Split-Complementary)",
      colors: [hex, hslToHex(h + 150, s, l), hslToHex(h + 210, s, l)],
    },
    {
      name: "四角配色 (Square)",
      colors: [
        hex,
        hslToHex(h + 90, s, l),
        hslToHex(h + 180, s, l),
        hslToHex(h + 270, s, l),
      ],
    },
  ];
}

export default function ColorPalettePage() {
  const [baseColor, setBaseColor] = useState("#2563eb");
  const [copied, setCopied] = useState("");

  const palettes = generatePalettes(baseColor);

  const copy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>カラーパレット生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">カラーパレット生成ツール</h1>
      <p className="text-muted mb-8">
        ベースカラーを選択すると、補色・類似色・三角配色などの配色パレットを自動生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <label className="block text-sm font-medium mb-3">ベースカラーを選択</label>
        <div className="flex items-center gap-4">
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="w-16 h-12 rounded cursor-pointer border border-card-border"
          />
          <input
            type="text"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="border border-card-border rounded-lg px-4 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary w-40"
          />
          <div
            className="flex-1 h-12 rounded-lg border border-card-border"
            style={{ backgroundColor: baseColor }}
          />
        </div>
      </div>

      <div className="space-y-5">
        {palettes.map((palette) => (
          <div key={palette.name} className="bg-card-bg border border-card-border rounded-xl p-5">
            <h2 className="text-sm font-semibold mb-3">{palette.name}</h2>
            <div className="flex gap-3 flex-wrap">
              {palette.colors.map((hex, ci) => {
                const key = `${palette.name}-${ci}`;
                const hexUpper = hex.toUpperCase();
                return (
                  <div key={ci} className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-16 h-16 rounded-lg border border-card-border cursor-pointer hover:scale-105 transition-transform"
                      style={{ backgroundColor: hex }}
                      onClick={() => copy(hexUpper, key)}
                      title="クリックでコピー"
                    />
                    <span className="text-xs font-mono text-muted">{hexUpper}</span>
                    <button
                      onClick={() => copy(hexUpper, key)}
                      className="text-xs text-primary"
                    >
                      {copied === key ? "✓コピー済" : "コピー"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">カラーパレット生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>カラーピッカーまたはHEXコードを入力してベースカラーを選択します。</p>
          <p>選択した色に基づいて、5種類の配色パレットが自動生成されます。</p>
          <p>各色をクリック、またはコピーボタンでHEXコードをクリップボードにコピーできます。</p>
          <p>Webデザインやグラフィックデザインの配色選びにご活用ください。</p>
        </div>
      </section>


      <RelatedTools currentSlug="color-palette" category="デザイン" />
    </div>
  );
}
