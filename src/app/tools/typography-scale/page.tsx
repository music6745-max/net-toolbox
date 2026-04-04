"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const SCALE_PRESETS = [
  { label: "Minor Second (1.067)", value: 1.067 },
  { label: "Major Second (1.125)", value: 1.125 },
  { label: "Minor Third (1.2)", value: 1.2 },
  { label: "Major Third (1.25)", value: 1.25 },
  { label: "Perfect Fourth (1.333)", value: 1.333 },
  { label: "Augmented Fourth (1.414)", value: 1.414 },
  { label: "Perfect Fifth (1.5)", value: 1.5 },
  { label: "Golden Ratio (1.618)", value: 1.618 },
];

const LEVEL_NAMES = [
  "xs (scale -2)",
  "sm (scale -1)",
  "base (scale 0)",
  "lg (scale 1)",
  "xl (scale 2)",
  "2xl (scale 3)",
  "3xl (scale 4)",
  "4xl (scale 5)",
  "5xl (scale 6)",
];

export default function TypographyScalePage() {
  const [baseSize, setBaseSize] = useState(16);
  const [ratio, setRatio] = useState(1.25);
  const [copied, setCopied] = useState(false);

  const levels = LEVEL_NAMES.map((name, i) => {
    const power = i - 2; // -2 to 6
    const size = baseSize * Math.pow(ratio, power);
    return { name, size: Math.round(size * 100) / 100 };
  });

  const cssText = levels
    .map((l) => `/* ${l.name} */ font-size: ${l.size}px; /* ${(l.size / 16).toFixed(4)}rem */`)
    .join("\n");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>タイポグラフィスケール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">タイポグラフィスケール生成</h1>
      <p className="text-muted mb-8">
        ベースフォントサイズと比率を指定して、調和の取れたタイポグラフィスケールを自動生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">ベースサイズ (px)</label>
            <input
              type="number"
              value={baseSize}
              onChange={(e) => setBaseSize(Math.max(1, Number(e.target.value)))}
              min={1}
              max={100}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">比率プリセット</label>
            <select
              value={ratio}
              onChange={(e) => setRatio(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              {SCALE_PRESETS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          {levels.map((level) => (
            <div
              key={level.name}
              className="flex items-center gap-4 bg-background rounded-lg p-3"
            >
              <div className="w-32 text-xs text-muted shrink-0">{level.name}</div>
              <div className="w-20 text-sm font-mono shrink-0">{level.size}px</div>
              <div className="w-24 text-xs text-muted shrink-0">
                {(level.size / 16).toFixed(3)}rem
              </div>
              <div
                className="truncate"
                style={{ fontSize: `${Math.min(level.size, 48)}px`, lineHeight: 1.2 }}
              >
                Aa あいう
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {copied ? "コピーしました!" : "CSSをコピー"}
        </button>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">タイポグラフィスケールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>ベースフォントサイズ（通常16px）と比率を選択すると、スケールが自動生成されます。</p>
          <p>Major Third（1.25）やPerfect Fourth（1.333）が一般的に使われる比率です。CSSとしてコピーできます。</p>
        </div>
      </section>

      <AffiliateSection slug="typography-scale" category="デザイン" />
      <RelatedTools currentSlug="typography-scale" category="デザイン" />
    </div>
  );
}
