"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Result {
  cropW: number;
  cropH: number;
  letterW: number;
  letterH: number;
  padTop: number;
  padLeft: number;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function calculate(origW: number, origH: number, targetRatioW: number, targetRatioH: number): Result | null {
  if (!origW || !origH || !targetRatioW || !targetRatioH) return null;
  const targetRatio = targetRatioW / targetRatioH;
  const origRatio = origW / origH;

  // Crop: fill target ratio, cut off excess
  let cropW: number, cropH: number;
  if (origRatio > targetRatio) {
    cropH = origH;
    cropW = Math.round(origH * targetRatio);
  } else {
    cropW = origW;
    cropH = Math.round(origW / targetRatio);
  }

  // Letterbox: fit within original, add padding
  let letterW: number, letterH: number;
  if (origRatio > targetRatio) {
    letterW = Math.round(origH * targetRatio);
    letterH = origH;
  } else {
    letterH = Math.round(origW / targetRatio);
    letterW = origW;
  }

  const padTop = Math.round((origH - letterH) / 2);
  const padLeft = Math.round((origW - letterW) / 2);

  return { cropW, cropH, letterW, letterH, padTop, padLeft };
}

const PRESETS = [
  { label: "16:9 (HD動画)", w: 16, h: 9 },
  { label: "4:3 (旧TV)", w: 4, h: 3 },
  { label: "1:1 (正方形)", w: 1, h: 1 },
  { label: "9:16 (縦動画)", w: 9, h: 16 },
  { label: "3:2 (写真)", w: 3, h: 2 },
  { label: "21:9 (ウルトラワイド)", w: 21, h: 9 },
];

export default function AspectResizerPage() {
  const [origW, setOrigW] = useState("");
  const [origH, setOrigH] = useState("");
  const [ratioW, setRatioW] = useState("16");
  const [ratioH, setRatioH] = useState("9");

  const result = useMemo(
    () => calculate(Number(origW), Number(origH), Number(ratioW), Number(ratioH)),
    [origW, origH, ratioW, ratioH]
  );

  const currentRatio = useMemo(() => {
    const w = Number(origW);
    const h = Number(origH);
    if (!w || !h) return null;
    const d = gcd(w, h);
    return `${w / d}:${h / d}`;
  }, [origW, origH]);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted flex items-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <span className="text-primary">アスペクト比リサイズ計算</span>
        </nav>

        <h1 className="text-2xl font-bold text-primary mb-2">アスペクト比リサイズ計算</h1>
        <p className="text-muted mb-8">元画像のサイズと目標のアスペクト比を入力して、クロップ・レターボックスの寸法を計算します。</p>

        {/* Input Card */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">元の幅 (px)</label>
                <input
                  type="number"
                  value={origW}
                  onChange={(e) => setOrigW(e.target.value)}
                  placeholder="例：1920"
                  min={1}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">元の高さ (px)</label>
                <input
                  type="number"
                  value={origH}
                  onChange={(e) => setOrigH(e.target.value)}
                  placeholder="例：1080"
                  min={1}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {currentRatio && (
              <p className="text-sm text-muted">現在のアスペクト比: <span className="text-primary font-medium">{currentRatio}</span></p>
            )}

            <div>
              <label className="block text-sm font-medium text-primary mb-2">目標アスペクト比 プリセット</label>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => { setRatioW(String(p.w)); setRatioH(String(p.h)); }}
                    className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                      ratioW === String(p.w) && ratioH === String(p.h)
                        ? "bg-primary text-white border-primary"
                        : "bg-background border-card-border text-muted hover:border-primary hover:text-primary"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">目標比率 幅</label>
                <input
                  type="number"
                  value={ratioW}
                  onChange={(e) => setRatioW(e.target.value)}
                  min={1}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">目標比率 高さ</label>
                <input
                  type="number"
                  value={ratioH}
                  onChange={(e) => setRatioH(e.target.value)}
                  min={1}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-primary mb-4">計算結果</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background border border-card-border rounded-xl p-4">
                <h3 className="text-sm font-semibold text-primary mb-3">クロップ（切り抜き）</h3>
                <p className="text-2xl font-bold text-primary">{result.cropW} × {result.cropH}</p>
                <p className="text-xs text-muted mt-1">はみ出た部分を切り取ります</p>
              </div>
              <div className="bg-background border border-card-border rounded-xl p-4">
                <h3 className="text-sm font-semibold text-primary mb-3">レターボックス（余白追加）</h3>
                <p className="text-2xl font-bold text-primary">{result.letterW} × {result.letterH}</p>
                <p className="text-xs text-muted mt-1">余白を追加してフィットさせます</p>
              </div>
            </div>
            {(result.padTop > 0 || result.padLeft > 0) && (
              <div className="mt-4 px-4 py-3 bg-background border border-card-border rounded-xl">
                <p className="text-sm text-muted">
                  レターボックスのパディング：
                  {result.padTop > 0 && <span className="text-primary ml-2">上下 各{result.padTop}px</span>}
                  {result.padLeft > 0 && <span className="text-primary ml-2">左右 各{result.padLeft}px</span>}
                </p>
              </div>
            )}
          </div>
        )}

        {/* 使い方 */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">使い方</h2>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>元の画像の幅と高さをピクセルで入力します</li>
            <li>目標のアスペクト比をプリセットから選択するか手動で入力します</li>
            <li>クロップとレターボックスの2種類の結果が自動計算されます</li>
          </ol>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <p><span className="text-primary font-medium">クロップ</span>：目標比率に合わせて画像を切り抜きます（一部が失われます）</p>
            <p><span className="text-primary font-medium">レターボックス</span>：画像全体を表示し、余白（黒帯など）を追加します</p>
          </div>
        </div>
      </div>
    </div>
  );
}
