"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [blurVal, setBlurVal] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);
  const [invert, setInvert] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [saturate, setSaturate] = useState(100);
  const [sepia, setSepia] = useState(0);
  const [copied, setCopied] = useState(false);

  const parts: string[] = [];
  if (blurVal !== 0) parts.push(`blur(${blurVal}px)`);
  if (brightness !== 100) parts.push(`brightness(${brightness}%)`);
  if (contrast !== 100) parts.push(`contrast(${contrast}%)`);
  if (grayscale !== 0) parts.push(`grayscale(${grayscale}%)`);
  if (hueRotate !== 0) parts.push(`hue-rotate(${hueRotate}deg)`);
  if (invert !== 0) parts.push(`invert(${invert}%)`);
  if (opacity !== 100) parts.push(`opacity(${opacity}%)`);
  if (saturate !== 100) parts.push(`saturate(${saturate}%)`);
  if (sepia !== 0) parts.push(`sepia(${sepia}%)`);

  const filterValue = parts.length > 0 ? parts.join(" ") : "none";
  const cssCode = `filter: ${filterValue};`;

  const copy = async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    setBlurVal(0); setBrightness(100); setContrast(100); setGrayscale(0);
    setHueRotate(0); setInvert(0); setOpacity(100); setSaturate(100); setSepia(0);
  };

  const sliders = [
    { label: "ぼかし (blur)", value: blurVal, set: setBlurVal, min: 0, max: 20, unit: "px" },
    { label: "明るさ (brightness)", value: brightness, set: setBrightness, min: 0, max: 200, unit: "%" },
    { label: "コントラスト (contrast)", value: contrast, set: setContrast, min: 0, max: 200, unit: "%" },
    { label: "グレースケール (grayscale)", value: grayscale, set: setGrayscale, min: 0, max: 100, unit: "%" },
    { label: "色相回転 (hue-rotate)", value: hueRotate, set: setHueRotate, min: 0, max: 360, unit: "deg" },
    { label: "反転 (invert)", value: invert, set: setInvert, min: 0, max: 100, unit: "%" },
    { label: "透明度 (opacity)", value: opacity, set: setOpacity, min: 0, max: 100, unit: "%" },
    { label: "彩度 (saturate)", value: saturate, set: setSaturate, min: 0, max: 200, unit: "%" },
    { label: "セピア (sepia)", value: sepia, set: setSepia, min: 0, max: 100, unit: "%" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>CSSフィルター生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">CSSフィルター生成</h1>
      <p className="text-muted mb-8">blur・brightness・contrast等のCSSフィルターをプレビュー付きで設定。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="w-full rounded-lg border border-card-border p-4 mb-6 flex items-center justify-center bg-white dark:bg-gray-800">
          <div
            style={{
              width: 200,
              height: 150,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              borderRadius: 12,
              filter: filterValue,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            Preview
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <button onClick={reset} className="text-xs text-primary border border-primary/30 rounded px-3 py-1 hover:bg-primary/5">
            リセット
          </button>
        </div>

        <div className="space-y-4 mb-6">
          {sliders.map((s) => (
            <div key={s.label}>
              <label className="text-sm font-medium mb-1 block">{s.label}: {s.value}{s.unit}</label>
              <input type="range" min={s.min} max={s.max} value={s.value} onChange={(e) => s.set(Number(e.target.value))} className="w-full" />
            </div>
          ))}
        </div>

        <div className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3 flex items-center justify-between">
          <code className="text-sm font-mono">{cssCode}</code>
          <button onClick={copy} className="text-xs text-primary ml-4 whitespace-nowrap">
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>各スライダーでフィルターの値を調整し、プレビューで効果を確認します。</p>
          <p>生成されたCSSコードをコピーしてご利用ください。リセットボタンで初期値に戻せます。</p>
        </div>
      </section>

      <AffiliateSection slug="css-filter-generator" category="デザイン" />


      <RelatedTools currentSlug="css-filter-generator" category="デザイン" />
    </div>
  );
}
