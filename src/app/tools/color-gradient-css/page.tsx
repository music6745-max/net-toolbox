"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function ColorGradientCSSPage() {
  const [color1, setColor1] = useState("#667eea");
  const [color2, setColor2] = useState("#764ba2");
  const [direction, setDirection] = useState("to right");
  const [copied, setCopied] = useState(false);

  const directions = [
    { label: "→", value: "to right" },
    { label: "←", value: "to left" },
    { label: "↓", value: "to bottom" },
    { label: "↑", value: "to top" },
    { label: "↘", value: "to bottom right" },
    { label: "↗", value: "to top right" },
  ];

  const css = `background: linear-gradient(${direction}, ${color1}, ${color2});`;

  const copy = () => {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>CSSグラデーション生成</span></nav>
      <h1 className="text-2xl font-bold mb-2">CSSグラデーション生成ツール</h1>
      <p className="text-muted mb-8">方向・色を選んでCSSグラデーションコードを生成。プレビュー付き。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="h-32 rounded-xl border border-card-border" style={{ background: `linear-gradient(${direction}, ${color1}, ${color2})` }} />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">色1</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-10 h-10 rounded cursor-pointer" />
              <input type="text" value={color1} onChange={(e) => setColor1(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">色2</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-10 h-10 rounded cursor-pointer" />
              <input type="text" value={color2} onChange={(e) => setColor2(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono" />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">方向</label>
          <div className="flex gap-2 flex-wrap">
            {directions.map((d) => (
              <button key={d.value} onClick={() => setDirection(d.value)} className={`px-4 py-2 rounded-lg text-sm ${direction === d.value ? "bg-primary text-white" : "bg-background border border-card-border"}`}>{d.label}</button>
            ))}
          </div>
        </div>
        <div className="bg-background rounded-lg p-4">
          <code className="text-sm font-mono break-all">{css}</code>
        </div>
        <button onClick={copy} className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90">{copied ? "コピーしました!" : "CSSをコピー"}</button>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">CSSグラデーション生成の使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>2色と方向を選ぶと、CSSのlinear-gradientコードがリアルタイムで生成されます。</p><p>プレビューで確認しながら調整し、コピーボタンでCSSを取得できます。</p></div></section>
      <AffiliateSection slug="color-gradient-css" category="デザイン" />
      <RelatedTools currentSlug="color-gradient-css" category="デザイン" />
    </div>
  );
}
