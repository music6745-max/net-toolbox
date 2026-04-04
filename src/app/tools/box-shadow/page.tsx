"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface Shadow {
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
  inset: boolean;
}

const defaultShadow: Shadow = {
  offsetX: 4,
  offsetY: 4,
  blur: 10,
  spread: 0,
  color: "#000000",
  opacity: 25,
  inset: false,
};

function shadowToCSS(s: Shadow) {
  const r = parseInt(s.color.slice(1, 3), 16);
  const g = parseInt(s.color.slice(3, 5), 16);
  const b = parseInt(s.color.slice(5, 7), 16);
  const a = s.opacity / 100;
  const insetStr = s.inset ? "inset " : "";
  return `${insetStr}${s.offsetX}px ${s.offsetY}px ${s.blur}px ${s.spread}px rgba(${r}, ${g}, ${b}, ${a})`;
}

export default function BoxShadowPage() {
  const [shadows, setShadows] = useState<Shadow[]>([{ ...defaultShadow }]);
  const [copied, setCopied] = useState(false);
  const [boxColor, setBoxColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#f0f0f0");
  const [borderRadius, setBorderRadius] = useState(8);

  const cssValue = shadows.map(shadowToCSS).join(",\n    ");
  const fullCSS = `box-shadow: ${cssValue};`;

  const update = (index: number, key: keyof Shadow, value: number | string | boolean) => {
    setShadows((prev) => prev.map((s, i) => (i === index ? { ...s, [key]: value } : s)));
  };

  const addShadow = () => setShadows((prev) => [...prev, { ...defaultShadow }]);
  const removeShadow = (index: number) => {
    if (shadows.length <= 1) return;
    setShadows((prev) => prev.filter((_, i) => i !== index));
  };

  const copyCSS = () => {
    navigator.clipboard.writeText(fullCSS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sliderRow = (label: string, value: number, min: number, max: number, onChange: (v: number) => void) => (
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted w-16 shrink-0">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1"
      />
      <span className="text-xs w-10 text-right">{value}px</span>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>box-shadow生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">box-shadow生成ツール</h1>
      <p className="text-muted mb-8">
        CSSのbox-shadowをスライダーで視覚的に調整し、リアルタイムでプレビュー。複数シャドウにも対応。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        {/* Preview */}
        <div
          className="rounded-lg p-16 flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <div
            className="w-48 h-48 flex items-center justify-center text-sm text-muted"
            style={{
              backgroundColor: boxColor,
              borderRadius: `${borderRadius}px`,
              boxShadow: shadows.map(shadowToCSS).join(", "),
            }}
          >
            プレビュー
          </div>
        </div>

        {/* Global settings */}
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-xs font-medium mb-1">ボックス色</label>
            <input type="color" value={boxColor} onChange={(e) => setBoxColor(e.target.value)} className="w-10 h-8 rounded cursor-pointer" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">背景色</label>
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-10 h-8 rounded cursor-pointer" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">角丸</label>
            <input
              type="number"
              value={borderRadius}
              onChange={(e) => setBorderRadius(Number(e.target.value))}
              min={0}
              max={100}
              className="w-20 border border-card-border rounded px-2 py-1 text-sm"
            />
          </div>
        </div>

        {/* Shadow controls */}
        {shadows.map((s, i) => (
          <div key={i} className="border border-card-border rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">シャドウ {i + 1}</span>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1 text-xs">
                  <input type="checkbox" checked={s.inset} onChange={(e) => update(i, "inset", e.target.checked)} />
                  inset
                </label>
                {shadows.length > 1 && (
                  <button onClick={() => removeShadow(i)} className="text-xs text-red-500 hover:underline">削除</button>
                )}
              </div>
            </div>
            {sliderRow("X", s.offsetX, -50, 50, (v) => update(i, "offsetX", v))}
            {sliderRow("Y", s.offsetY, -50, 50, (v) => update(i, "offsetY", v))}
            {sliderRow("ぼかし", s.blur, 0, 100, (v) => update(i, "blur", v))}
            {sliderRow("拡大", s.spread, -50, 50, (v) => update(i, "spread", v))}
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted w-16 shrink-0">色</span>
              <input type="color" value={s.color} onChange={(e) => update(i, "color", e.target.value)} className="w-8 h-8 rounded cursor-pointer" />
              <span className="text-xs text-muted w-16 shrink-0">不透明度</span>
              <input type="range" min={0} max={100} value={s.opacity} onChange={(e) => update(i, "opacity", Number(e.target.value))} className="flex-1" />
              <span className="text-xs w-10 text-right">{s.opacity}%</span>
            </div>
          </div>
        ))}

        <button
          onClick={addShadow}
          className="text-sm text-primary hover:underline"
        >
          + シャドウを追加
        </button>

        {/* Output */}
        <div>
          <label className="block text-sm font-medium mb-2">CSS出力</label>
          <pre className="bg-background border border-card-border rounded-lg p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
            {fullCSS}
          </pre>
          <button
            onClick={copyCSS}
            className="mt-2 bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {copied ? "コピーしました" : "CSSをコピー"}
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">box-shadow生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>スライダーでX/Y方向のオフセット、ぼかし、拡大量を調整してください。リアルタイムでプレビューに反映されます。</p>
          <p>複数のシャドウを重ねることで、より立体感のある表現が可能です。「シャドウを追加」で重ね掛けできます。</p>
          <p>生成されたCSS コードはコピーボタンでクリップボードにコピーし、そのままスタイルシートに貼り付けられます。</p>
        </div>
      </section>

      <AffiliateSection slug="box-shadow" category="デザイン" />
      <RelatedTools currentSlug="box-shadow" category="デザイン" />
    </div>
  );
}
