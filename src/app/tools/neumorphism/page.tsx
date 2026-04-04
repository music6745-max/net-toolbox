"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

function hexToRgb(hex: string) {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return { r: 224, g: 228, b: 233 };
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}

function adjustColor(hex: string, amount: number): string {
  const { r, g, b } = hexToRgb(hex);
  const clamp = (v: number) => Math.max(0, Math.min(255, v));
  return `rgb(${clamp(r + amount)}, ${clamp(g + amount)}, ${clamp(b + amount)})`;
}

type Shape = "flat" | "concave" | "convex" | "pressed";

export default function Page() {
  const [bgColor, setBgColor] = useState("#e0e4e9");
  const [size, setSize] = useState(200);
  const [radius, setRadius] = useState(30);
  const [distance, setDistance] = useState(10);
  const [intensity, setIntensity] = useState(30);
  const [blur, setBlur] = useState(20);
  const [shape, setShape] = useState<Shape>("flat");
  const [copied, setCopied] = useState(false);

  const lightShadow = adjustColor(bgColor, intensity);
  const darkShadow = adjustColor(bgColor, -intensity);

  const getBackground = () => {
    if (shape === "concave") return `linear-gradient(145deg, ${adjustColor(bgColor, -10)}, ${adjustColor(bgColor, 10)})`;
    if (shape === "convex") return `linear-gradient(145deg, ${adjustColor(bgColor, 10)}, ${adjustColor(bgColor, -10)})`;
    return bgColor;
  };

  const getShadow = () => {
    if (shape === "pressed") return `inset ${distance}px ${distance}px ${blur}px ${darkShadow}, inset -${distance}px -${distance}px ${blur}px ${lightShadow}`;
    return `${distance}px ${distance}px ${blur}px ${darkShadow}, -${distance}px -${distance}px ${blur}px ${lightShadow}`;
  };

  const cssCode = `.neumorphism {
  width: ${size}px;
  height: ${size}px;
  border-radius: ${radius}px;
  background: ${getBackground()};
  box-shadow: ${getShadow()};
}`;

  const copy = async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shapes: { key: Shape; label: string }[] = [
    { key: "flat", label: "フラット" },
    { key: "concave", label: "凹面" },
    { key: "convex", label: "凸面" },
    { key: "pressed", label: "押下" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ニューモーフィズムCSS</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ニューモーフィズムCSS</h1>
      <p className="text-muted mb-8">ニューモーフィズムデザインのCSSを生成。凹凸・影・色を調整。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex items-center justify-center p-8 rounded-lg mb-6" style={{ backgroundColor: bgColor, minHeight: 280 }}>
          <div
            style={{
              width: size,
              height: size,
              borderRadius: radius,
              background: getBackground(),
              boxShadow: getShadow(),
            }}
          />
        </div>

        <div className="flex gap-2 mb-6">
          {shapes.map((s) => (
            <button
              key={s.key}
              onClick={() => setShape(s.key)}
              className={`px-4 py-2 text-sm rounded-lg border transition-colors ${shape === s.key ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary/30"}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-1 block">背景色</label>
            <div className="flex items-center gap-2">
              <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-card-border" />
              <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">サイズ: {size}px</label>
            <input type="range" min={50} max={300} value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">角丸: {radius}px</label>
            <input type="range" min={0} max={150} value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">シャドウ距離: {distance}px</label>
            <input type="range" min={1} max={50} value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">強度: {intensity}</label>
            <input type="range" min={5} max={80} value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">ぼかし: {blur}px</label>
            <input type="range" min={0} max={60} value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full" />
          </div>
        </div>

        <div className="relative">
          <pre className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3 text-sm font-mono overflow-x-auto whitespace-pre-wrap">{cssCode}</pre>
          <button onClick={copy} className="absolute top-2 right-2 text-xs text-primary bg-card-bg border border-card-border rounded px-2 py-1">
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>フラット・凹面・凸面・押下の4つのバリエーションから選択します。</p>
          <p>背景色、サイズ、角丸、シャドウの距離・強度・ぼかしを調整してください。</p>
          <p>生成されたCSSコードをコピーしてご利用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="neumorphism" category="デザイン" />


      <RelatedTools currentSlug="neumorphism" category="デザイン" />
    </div>
  );
}
