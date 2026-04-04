"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [transparency, setTransparency] = useState(0.25);
  const [blur, setBlur] = useState(10);
  const [borderOpacity, setBorderOpacity] = useState(0.2);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [copied, setCopied] = useState(false);

  const hexToRgb = (hex: string) => {
    const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (!m) return { r: 255, g: 255, b: 255 };
    return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
  };

  const { r, g, b } = hexToRgb(bgColor);

  const cssCode = `.glass {
  background: rgba(${r}, ${g}, ${b}, ${transparency});
  backdrop-filter: blur(${blur}px);
  -webkit-backdrop-filter: blur(${blur}px);
  border-radius: 16px;
  border: 1px solid rgba(${r}, ${g}, ${b}, ${borderOpacity});
}`;

  const copy = async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>グラスモーフィズムCSS</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">グラスモーフィズムCSS</h1>
      <p className="text-muted mb-8">すりガラス風デザインのCSSを生成。透明度・ぼかし・色を調整。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div
          className="w-full rounded-lg p-1 mb-6 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            minHeight: 250,
          }}
        >
          <div
            style={{
              background: `rgba(${r}, ${g}, ${b}, ${transparency})`,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              borderRadius: 16,
              border: `1px solid rgba(${r}, ${g}, ${b}, ${borderOpacity})`,
              padding: "40px 60px",
              color: "#fff",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Glass Effect
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-1 block">透明度: {transparency}</label>
            <input type="range" min={0} max={100} value={Math.round(transparency * 100)} onChange={(e) => setTransparency(Number(e.target.value) / 100)} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">ぼかし: {blur}px</label>
            <input type="range" min={0} max={20} value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">ボーダー透明度: {borderOpacity}</label>
            <input type="range" min={0} max={100} value={Math.round(borderOpacity * 100)} onChange={(e) => setBorderOpacity(Number(e.target.value) / 100)} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">ベースカラー</label>
            <div className="flex items-center gap-2">
              <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-card-border" />
              <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
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
          <p>透明度やぼかしのスライダーでグラスエフェクトを調整します。</p>
          <p>プレビューで確認後、CSSコードをコピーしてお使いください。</p>
        </div>
      </section>

      <AffiliateSection slug="glassmorphism" category="デザイン" />


      <RelatedTools currentSlug="glassmorphism" category="デザイン" />
    </div>
  );
}
