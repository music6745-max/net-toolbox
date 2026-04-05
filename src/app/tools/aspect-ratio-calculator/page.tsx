"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

const presets = [
  { label: "16:9", w: 16, h: 9 },
  { label: "4:3", w: 4, h: 3 },
  { label: "1:1", w: 1, h: 1 },
  { label: "21:9", w: 21, h: 9 },
  { label: "3:2", w: 3, h: 2 },
  { label: "9:16", w: 9, h: 16 },
];

export default function AspectRatioCalculatorPage() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [targetWidth, setTargetWidth] = useState("");
  const [targetHeight, setTargetHeight] = useState("");
  const [lockRatio, setLockRatio] = useState(true);

  const w = parseFloat(width);
  const h = parseFloat(height);
  const hasValid = w > 0 && h > 0;

  const g = hasValid ? gcd(w, h) : 0;
  const ratioW = hasValid ? w / g : 0;
  const ratioH = hasValid ? h / g : 0;
  const decimal = hasValid ? (w / h).toFixed(4) : "";

  const handleTargetWidthChange = (val: string) => {
    setTargetWidth(val);
    if (lockRatio && hasValid && parseFloat(val) > 0) {
      setTargetHeight(Math.round((parseFloat(val) / w) * h).toString());
    }
  };

  const handleTargetHeightChange = (val: string) => {
    setTargetHeight(val);
    if (lockRatio && hasValid && parseFloat(val) > 0) {
      setTargetWidth(Math.round((parseFloat(val) / h) * w).toString());
    }
  };

  const applyPreset = (pw: number, ph: number) => {
    if (width && parseFloat(width) > 0) {
      const newHeight = Math.round((parseFloat(width) * ph) / pw);
      setHeight(newHeight.toString());
    } else if (height && parseFloat(height) > 0) {
      const newWidth = Math.round((parseFloat(height) * pw) / ph);
      setWidth(newWidth.toString());
    } else {
      setWidth((pw * 100).toString());
      setHeight((ph * 100).toString());
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>アスペクト比計算機</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">アスペクト比計算機</h1>
      <p className="text-muted mb-8">
        幅と高さからアスペクト比を計算します。リサイズ時の寸法も自動計算できます。画像や動画のサイズ調整に便利です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-3">元のサイズ</label>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1">
            <label className="block text-xs text-muted mb-1">幅 (px)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="1920"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <span className="text-muted mt-5">x</span>
          <div className="flex-1">
            <label className="block text-xs text-muted mb-1">高さ (px)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="1080"
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-muted mb-2">プリセット</p>
          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p.label}
                onClick={() => applyPreset(p.w, p.h)}
                className="px-3 py-1.5 rounded-lg text-xs border border-card-border hover:bg-primary hover:text-white transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {hasValid && (
          <div className="bg-white border border-card-border rounded-lg p-4 mb-6">
            <h3 className="text-sm font-medium mb-3">計算結果</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted">アスペクト比:</span>
                <span className="ml-2 font-bold text-primary text-lg">{ratioW}:{ratioH}</span>
              </div>
              <div>
                <span className="text-muted">小数表記:</span>
                <span className="ml-2 font-mono">{decimal}</span>
              </div>
            </div>
            <div className="mt-3">
              <div
                className="bg-primary/20 border-2 border-primary/40 rounded"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  aspectRatio: `${w}/${h}`,
                  maxHeight: "150px",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {hasValid && (
        <div className="mt-6 bg-card-bg border border-card-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium">リサイズ計算</h3>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={lockRatio}
                onChange={(e) => setLockRatio(e.target.checked)}
                className="rounded"
              />
              比率を固定
            </label>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="block text-xs text-muted mb-1">新しい幅</label>
              <input
                type="number"
                value={targetWidth}
                onChange={(e) => handleTargetWidthChange(e.target.value)}
                placeholder="幅を入力"
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <span className="text-muted mt-5">x</span>
            <div className="flex-1">
              <label className="block text-xs text-muted mb-1">新しい高さ</label>
              <input
                type="number"
                value={targetHeight}
                onChange={(e) => handleTargetHeightChange(e.target.value)}
                placeholder="高さを入力"
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">アスペクト比計算機の使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 元の幅と高さをピクセル数で入力します（またはプリセットから選択）。</p>
          <p>2. アスペクト比が自動的に計算されます。</p>
          <p>3. リサイズ計算では、新しい幅または高さを入力すると、比率を保ったままもう一方が自動計算されます。</p>
          <p>
            入力したデータはブラウザ内で処理されるため、サーバーに送信されることはありません。安心してご利用ください。
          </p>
        </div>
      </section>

      <AffiliateSection slug="aspect-ratio-calculator" category="画像・メディア" />
      <RelatedTools currentSlug="aspect-ratio-calculator" category="画像・メディア" />
    </div>
  );
}
