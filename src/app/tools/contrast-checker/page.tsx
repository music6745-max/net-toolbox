"use client";

import { useState } from "react";
import Link from "next/link";

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return null;
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

function relativeLuminance(r: number, g: number, b: number): number {
  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function contrastRatio(hex1: string, hex2: string): number | null {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  if (!rgb1 || !rgb2) return null;
  const l1 = relativeLuminance(...rgb1);
  const l2 = relativeLuminance(...rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

interface Result {
  ratio: number;
  normalAA: boolean;
  normalAAA: boolean;
  largeAA: boolean;
  largeAAA: boolean;
  uiAA: boolean;
}

function evaluate(ratio: number): Result {
  return {
    ratio,
    normalAA: ratio >= 4.5,
    normalAAA: ratio >= 7,
    largeAA: ratio >= 3,
    largeAAA: ratio >= 4.5,
    uiAA: ratio >= 3,
  };
}

function Badge({ pass }: { pass: boolean }) {
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${
        pass ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
      }`}
    >
      {pass ? "合格" : "不合格"}
    </span>
  );
}

export default function ContrastCheckerPage() {
  const [fg, setFg] = useState("#ffffff");
  const [bg, setBg] = useState("#2563eb");

  const ratio = contrastRatio(fg, bg);
  const result = ratio !== null ? evaluate(ratio) : null;

  const ratingLabel = () => {
    if (!result) return "";
    if (result.normalAAA) return "優秀 (AAA)";
    if (result.normalAA) return "良好 (AA)";
    if (result.largeAA) return "大文字のみ合格";
    return "不十分";
  };

  const ratingColor = () => {
    if (!result) return "text-muted";
    if (result.normalAAA) return "text-green-600";
    if (result.normalAA) return "text-blue-600";
    if (result.largeAA) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>コントラスト比チェック</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">コントラスト比チェックツール</h1>
      <p className="text-muted mb-8">
        前景色と背景色のコントラスト比を計算し、WCAGアクセシビリティ基準の合否を確認します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-3">前景色（テキスト色）</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={fg}
                onChange={(e) => setFg(e.target.value)}
                className="w-14 h-10 rounded cursor-pointer border border-card-border"
              />
              <input
                type="text"
                value={fg}
                onChange={(e) => setFg(e.target.value)}
                className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-3">背景色</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={bg}
                onChange={(e) => setBg(e.target.value)}
                className="w-14 h-10 rounded cursor-pointer border border-card-border"
              />
              <input
                type="text"
                value={bg}
                onChange={(e) => setBg(e.target.value)}
                className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        </div>
      </div>

      {result && (
        <>
          <div
            className="rounded-xl p-8 mb-6 flex flex-col items-center justify-center gap-4 border border-card-border"
            style={{ backgroundColor: bg }}
          >
            <p style={{ color: fg, fontSize: 24, fontWeight: 700, margin: 0 }}>
              大きな見出しテキスト (24px Bold)
            </p>
            <p style={{ color: fg, fontSize: 16, margin: 0 }}>
              通常のテキスト。このコントラスト比が読みやすさの基準になります。
            </p>
            <p style={{ color: fg, fontSize: 12, margin: 0 }}>
              小さいテキスト (12px) — このサイズだとより高いコントラストが必要です。
            </p>
          </div>

          <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-sm text-muted">コントラスト比</p>
                <p className="text-4xl font-bold font-mono mt-1">{result.ratio.toFixed(2)}<span className="text-base text-muted font-normal">:1</span></p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted">評価</p>
                <p className={`text-xl font-bold mt-1 ${ratingColor()}`}>{ratingLabel()}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2 text-sm font-medium text-muted border-b border-card-border pb-2">
                <span>項目</span>
                <span className="text-center">AA（最低基準）</span>
                <span className="text-center">AAA（推奨）</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-sm items-center">
                <span>通常テキスト</span>
                <div className="text-center"><Badge pass={result.normalAA} /></div>
                <div className="text-center"><Badge pass={result.normalAAA} /></div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm items-center">
                <span>大きいテキスト <span className="text-muted text-xs">（18px以上 / 14px Bold）</span></span>
                <div className="text-center"><Badge pass={result.largeAA} /></div>
                <div className="text-center"><Badge pass={result.largeAAA} /></div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm items-center">
                <span>UIコンポーネント</span>
                <div className="text-center"><Badge pass={result.uiAA} /></div>
                <div className="text-center"><span className="text-xs text-muted">基準なし</span></div>
              </div>
            </div>

            <div className="mt-5 p-3 bg-background rounded-lg text-xs text-muted space-y-1">
              <p>AA（通常テキスト）: 4.5:1 以上 / AAA: 7:1 以上</p>
              <p>AA（大きいテキスト）: 3:1 以上 / AAA: 4.5:1 以上</p>
              <p>UIコンポーネント（ボタン枠線等）: 3:1 以上</p>
            </div>
          </div>
        </>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">コントラスト比チェックツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>カラーピッカーまたはHEXコードで前景色（テキストの色）と背景色を設定します。</p>
          <p>WCAGのAA・AAAレベルに対して、通常テキスト・大きいテキスト・UIの合否が表示されます。</p>
          <p>コントラスト比が4.5:1以上でAA合格、7:1以上でAAA合格となります（通常テキスト）。</p>
          <p>Webアクセシビリティ対応や読みやすいデザイン制作にお役立てください。</p>
        </div>
      </section>
    </div>
  );
}
