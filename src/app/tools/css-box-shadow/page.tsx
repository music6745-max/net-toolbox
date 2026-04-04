"use client";

import { useState } from "react";
import Link from "next/link";

interface Shadow {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
  inset: boolean;
}

function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function shadowToCSS(s: Shadow): string {
  const color = hexToRgba(s.color, s.opacity);
  return `${s.inset ? "inset " : ""}${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${color}`;
}

const SLIDER_CONFIG = [
  { key: "x", label: "水平オフセット (X)", min: -100, max: 100, unit: "px", step: 1 },
  { key: "y", label: "垂直オフセット (Y)", min: -100, max: 100, unit: "px", step: 1 },
  { key: "blur", label: "ぼかし (Blur)", min: 0, max: 100, unit: "px", step: 1 },
  { key: "spread", label: "広がり (Spread)", min: -50, max: 50, unit: "px", step: 1 },
  { key: "opacity", label: "不透明度 (Opacity)", min: 0, max: 1, unit: "", step: 0.01 },
] as const;

export default function CssBoxShadowPage() {
  const [shadows, setShadows] = useState<Shadow[]>([
    { x: 4, y: 4, blur: 16, spread: 0, color: "#000000", opacity: 0.2, inset: false },
  ]);
  const [activeShadowIndex, setActiveShadowIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");

  const activeShadow = shadows[activeShadowIndex] ?? shadows[0];

  const updateActive = (field: keyof Shadow, value: number | string | boolean) => {
    setShadows((prev) =>
      prev.map((s, i) => (i === activeShadowIndex ? { ...s, [field]: value } : s))
    );
  };

  const addShadow = () => {
    if (shadows.length >= 4) return;
    setShadows((prev) => [...prev, { x: 0, y: 4, blur: 8, spread: 0, color: "#000000", opacity: 0.15, inset: false }]);
    setActiveShadowIndex(shadows.length);
  };

  const removeShadow = (index: number) => {
    if (shadows.length <= 1) return;
    setShadows((prev) => prev.filter((_, i) => i !== index));
    setActiveShadowIndex(Math.max(0, activeShadowIndex - 1));
  };

  const boxShadowValue = shadows.map(shadowToCSS).join(",\n  ");
  const cssCode = `box-shadow: ${shadows.map(shadowToCSS).join(",\n            ")};`;

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
        <span>CSSボックスシャドウ生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">CSSボックスシャドウ生成ツール</h1>
      <p className="text-muted mb-8">
        スライダーでbox-shadowを直感的に生成します。X・Y・ぼかし・広がり・色・不透明度・インセットをリアルタイムでプレビュー。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        {/* Preview */}
        <div
          className="w-full h-44 rounded-xl mb-6 flex items-center justify-center border border-card-border"
          style={{ background: bgColor }}
        >
          <div
            className="w-32 h-32 rounded-xl bg-white"
            style={{ boxShadow: boxShadowValue }}
          />
        </div>

        {/* Background color */}
        <div className="flex items-center gap-3 mb-5">
          <label className="text-sm font-medium shrink-0">背景色:</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-10 h-8 rounded border border-card-border cursor-pointer p-0.5 bg-background"
          />
          <span className="text-sm font-mono text-muted">{bgColor}</span>
        </div>

        {/* Shadow tabs */}
        <div className="flex items-center gap-2 mb-5 flex-wrap">
          {shadows.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveShadowIndex(i)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                i === activeShadowIndex
                  ? "bg-primary text-white"
                  : "border border-card-border hover:bg-card-bg"
              }`}
            >
              シャドウ {i + 1}
            </button>
          ))}
          <button
            onClick={addShadow}
            disabled={shadows.length >= 4}
            className="px-3 py-1.5 rounded-lg text-sm font-medium border border-card-border hover:bg-card-bg disabled:opacity-40 transition-colors"
          >
            + 追加
          </button>
          {shadows.length > 1 && (
            <button
              onClick={() => removeShadow(activeShadowIndex)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50 transition-colors"
            >
              削除
            </button>
          )}
        </div>

        {/* Sliders */}
        <div className="space-y-4 mb-5">
          {SLIDER_CONFIG.map(({ key, label, min, max, unit, step }) => (
            <div key={key}>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium">{label}</label>
                <span className="text-sm font-mono text-muted">
                  {activeShadow[key as keyof Shadow]}{unit}
                </span>
              </div>
              <input
                type="range"
                min={min}
                max={max}
                step={step ?? 1}
                value={Number(activeShadow[key as keyof Shadow])}
                onChange={(e) => updateActive(key as keyof Shadow, parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          ))}

          {/* Color */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium">色 (Color)</label>
            <input
              type="color"
              value={activeShadow.color}
              onChange={(e) => updateActive("color", e.target.value)}
              className="w-10 h-8 rounded border border-card-border cursor-pointer p-0.5 bg-background"
            />
            <span className="text-sm font-mono text-muted">{activeShadow.color}</span>
          </div>

          {/* Inset */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={activeShadow.inset}
              onChange={(e) => updateActive("inset", e.target.checked)}
              className="w-4 h-4 rounded"
            />
            <span className="text-sm font-medium">内側 (inset)</span>
          </label>
        </div>

        {/* CSS Output */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">生成されたCSS</span>
            <button
              onClick={copy}
              className="text-sm text-primary hover:text-primary-hover font-medium"
            >
              {copied ? "コピー済み" : "コピー"}
            </button>
          </div>
          <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
            {cssCode}
          </pre>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">CSSボックスシャドウ生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. スライダーを動かしてシャドウのX・Y・ぼかし・広がり・不透明度を調整します。</p>
          <p>2. カラーピッカーでシャドウの色を選択します。</p>
          <p>3. 「inset」チェックで内側シャドウに切り替えられます。</p>
          <p>4. 「+ 追加」で複数のシャドウを重ねることができます（最大4つ）。</p>
          <p>5. 「コピー」ボタンでCSSコードをクリップボードにコピーできます。</p>
        </div>
      </section>
    </div>
  );
}
