"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

function hexToHsl(hex: string): [number, number, number] {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return [0, 70, 50];
  const r = parseInt(m[1], 16) / 255;
  const g = parseInt(m[2], 16) / 255;
  const b = parseInt(m[3], 16) / 255;
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
  if (s === 0) { const v = Math.round(l * 255); return "#" + [v, v, v].map(c => c.toString(16).padStart(2, "0")).join(""); }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = Math.round(hue2rgb(p, q, h/360 + 1/3) * 255);
  const g = Math.round(hue2rgb(p, q, h/360) * 255);
  const b = Math.round(hue2rgb(p, q, h/360 - 1/3) * 255);
  return "#" + [r, g, b].map(c => c.toString(16).padStart(2, "0")).join("");
}

function ColorSwatch({ color, label }: { color: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button onClick={copy} className="text-center group">
      <div className="w-full h-16 rounded-lg border border-card-border mb-1" style={{ backgroundColor: color }} />
      <div className="text-xs font-mono">{copied ? "Copied!" : color}</div>
      {label && <div className="text-xs text-muted">{label}</div>}
    </button>
  );
}

export default function Page() {
  const [baseColor, setBaseColor] = useState("#2563eb");

  const [h, s, l] = hexToHsl(baseColor);

  const schemes = [
    {
      name: "補色 (Complementary)",
      colors: [
        { hex: hslToHex(h, s, l), label: "ベース" },
        { hex: hslToHex(h + 180, s, l), label: "補色" },
      ],
    },
    {
      name: "類似色 (Analogous)",
      colors: [
        { hex: hslToHex(h - 30, s, l), label: "-30" },
        { hex: hslToHex(h, s, l), label: "ベース" },
        { hex: hslToHex(h + 30, s, l), label: "+30" },
      ],
    },
    {
      name: "トライアド (Triadic)",
      colors: [
        { hex: hslToHex(h, s, l), label: "ベース" },
        { hex: hslToHex(h + 120, s, l), label: "+120" },
        { hex: hslToHex(h + 240, s, l), label: "+240" },
      ],
    },
    {
      name: "スプリット補色 (Split-Complementary)",
      colors: [
        { hex: hslToHex(h, s, l), label: "ベース" },
        { hex: hslToHex(h + 150, s, l), label: "+150" },
        { hex: hslToHex(h + 210, s, l), label: "+210" },
      ],
    },
    {
      name: "テトラード (Tetradic)",
      colors: [
        { hex: hslToHex(h, s, l), label: "ベース" },
        { hex: hslToHex(h + 90, s, l), label: "+90" },
        { hex: hslToHex(h + 180, s, l), label: "+180" },
        { hex: hslToHex(h + 270, s, l), label: "+270" },
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>カラーホイール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">カラーホイール</h1>
      <p className="text-muted mb-8">色相環から補色・類似色・トライアドなどの配色パターンを生成。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">ベースカラー</label>
          <div className="flex items-center gap-3">
            <input type="color" value={baseColor} onChange={(e) => setBaseColor(e.target.value)} className="w-12 h-10 rounded cursor-pointer border border-card-border" />
            <input type="text" value={baseColor} onChange={(e) => setBaseColor(e.target.value)} className="w-40 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <div className="text-sm text-muted">H:{h} S:{s}% L:{l}%</div>
          </div>
        </div>

        <div className="space-y-6">
          {schemes.map((scheme) => (
            <div key={scheme.name}>
              <h3 className="text-sm font-bold mb-2">{scheme.name}</h3>
              <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${scheme.colors.length}, 1fr)` }}>
                {scheme.colors.map((c, i) => (
                  <ColorSwatch key={i} color={c.hex} label={c.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>ベースカラーをカラーピッカーまたはHEXコードで指定します。</p>
          <p>5つの配色パターンが自動生成されます。色をクリックするとHEXコードをコピーできます。</p>
        </div>
      </section>

      <AffiliateSection slug="color-wheel" category="デザイン" />


      <RelatedTools currentSlug="color-wheel" category="デザイン" />
    </div>
  );
}
