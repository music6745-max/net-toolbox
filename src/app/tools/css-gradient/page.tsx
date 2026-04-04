"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface ColorStop {
  color: string;
  position: number;
}

export default function CssGradientPage() {
  const [type, setType] = useState<"linear" | "radial">("linear");
  const [angle, setAngle] = useState(90);
  const [radialShape, setRadialShape] = useState<"ellipse" | "circle">("ellipse");
  const [stops, setStops] = useState<ColorStop[]>([
    { color: "#6366f1", position: 0 },
    { color: "#ec4899", position: 100 },
  ]);
  const [copied, setCopied] = useState(false);

  const updateStop = (index: number, field: keyof ColorStop, value: string | number) => {
    setStops((prev) =>
      prev.map((s, i) => (i === index ? { ...s, [field]: value } : s))
    );
  };

  const addStop = () => {
    if (stops.length >= 6) return;
    const midPos = stops.length > 1
      ? Math.round((stops[stops.length - 2].position + stops[stops.length - 1].position) / 2)
      : 50;
    setStops((prev) => [
      ...prev.slice(0, -1),
      { color: "#a855f7", position: midPos },
      prev[prev.length - 1],
    ]);
  };

  const removeStop = (index: number) => {
    if (stops.length <= 2) return;
    setStops((prev) => prev.filter((_, i) => i !== index));
  };

  const sortedStops = [...stops].sort((a, b) => a.position - b.position);

  const gradientValue =
    type === "linear"
      ? `linear-gradient(${angle}deg, ${sortedStops.map((s) => `${s.color} ${s.position}%`).join(", ")})`
      : `radial-gradient(${radialShape} at center, ${sortedStops.map((s) => `${s.color} ${s.position}%`).join(", ")})`;

  const cssCode = `background: ${gradientValue};`;

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
        <span>CSSグラデーション生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">CSSグラデーション生成ツール</h1>
      <p className="text-muted mb-8">
        linear-gradient・radial-gradientのCSSを簡単に生成します。カラーピッカーで色を設定してリアルタイムプレビュー。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        {/* Preview */}
        <div
          className="w-full h-40 rounded-xl mb-6 border border-card-border"
          style={{ background: gradientValue }}
        />

        {/* Type */}
        <div className="flex gap-2 mb-5">
          {(["linear", "radial"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                type === t
                  ? "bg-primary text-white"
                  : "border border-card-border hover:bg-card-bg"
              }`}
            >
              {t === "linear" ? "リニア (linear)" : "ラジアル (radial)"}
            </button>
          ))}
        </div>

        {/* Options */}
        {type === "linear" && (
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">角度: {angle}deg</label>
            <input
              type="range"
              min={0}
              max={360}
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full"
            />
          </div>
        )}
        {type === "radial" && (
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">形状</label>
            <div className="flex gap-2">
              {(["ellipse", "circle"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setRadialShape(s)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    radialShape === s
                      ? "bg-primary text-white"
                      : "border border-card-border hover:bg-card-bg"
                  }`}
                >
                  {s === "ellipse" ? "楕円 (ellipse)" : "円 (circle)"}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Color stops */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">カラーストップ</label>
            <button
              onClick={addStop}
              disabled={stops.length >= 6}
              className="text-sm text-primary hover:text-primary-hover disabled:opacity-40 font-medium"
            >
              + 追加
            </button>
          </div>
          <div className="space-y-3">
            {stops.map((stop, i) => (
              <div key={i} className="flex items-center gap-3">
                <input
                  type="color"
                  value={stop.color}
                  onChange={(e) => updateStop(i, "color", e.target.value)}
                  className="w-10 h-10 rounded-lg border border-card-border cursor-pointer p-0.5 bg-background"
                />
                <span className="text-sm font-mono w-20">{stop.color}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={stop.position}
                  onChange={(e) => updateStop(i, "position", Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-sm text-muted w-10 text-right">{stop.position}%</span>
                <button
                  onClick={() => removeStop(i)}
                  disabled={stops.length <= 2}
                  className="text-red-400 hover:text-red-600 disabled:opacity-30 text-lg leading-none"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Output */}
        <div className="mt-6">
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
        <h2 className="text-lg font-bold mb-3">CSSグラデーション生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. グラデーションの種類（リニア・ラジアル）を選択します。</p>
          <p>2. リニアの場合は角度、ラジアルの場合は形状を設定します。</p>
          <p>3. カラーピッカーで色を選び、スライダーで位置を調整します。</p>
          <p>4. 「追加」ボタンでカラーストップを最大6つまで増やせます。</p>
          <p>5. 「コピー」ボタンでCSSコードをクリップボードにコピーできます。</p>
        </div>
      </section>


      <AffiliateSection slug="css-gradient" category="デザイン" />
      <RelatedTools currentSlug="css-gradient" category="デザイン" />
    </div>
  );
}
