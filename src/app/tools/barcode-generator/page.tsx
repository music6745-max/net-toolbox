"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

// Code 128B encoding table
const CODE128B_START = 104;
const CODE128_STOP = 106;

const CODE128B_VALS: Record<number, number[]> = {
  32: [1,1,0,1,1,0,0,1,1,0,0],  // space
  33: [1,0,0,1,1,0,1,1,0,0,1],  // !
  34: [1,0,0,1,0,0,1,1,0,1,1],  // "
};

// Build a minimal Code 128B bar pattern generator
// Pattern: each character is represented as 11 modules (bars+spaces)
// Using the standard Code 128 bar widths
const C128_PATTERNS: number[][] = [
  [2,1,2,2,2,2],[2,2,2,1,2,2],[2,2,2,2,2,1],[1,2,1,2,2,3],[1,2,1,3,2,2],
  [1,3,1,2,2,2],[1,2,2,2,1,3],[1,2,2,3,1,2],[1,3,2,2,1,2],[2,2,1,2,1,3],
  [2,2,1,3,1,2],[2,3,1,2,1,2],[1,1,2,2,3,2],[1,2,2,1,3,2],[1,2,2,2,3,1],
  [1,1,3,2,2,2],[1,2,3,1,2,2],[1,2,3,2,2,1],[2,2,3,2,1,1],[2,2,1,1,3,2],
  [2,2,1,2,3,1],[2,1,3,2,1,2],[2,2,3,1,1,2],[3,1,2,1,3,1],[3,1,1,2,2,2],
  [3,2,1,1,2,2],[3,2,1,2,2,1],[3,1,2,2,1,2],[3,2,2,1,1,2],[3,2,2,2,1,1],
  [2,1,2,1,2,3],[2,1,2,3,2,1],[2,3,2,1,2,1],[1,1,1,3,2,3],[1,3,1,1,2,3],
  [1,3,1,3,2,1],[1,1,2,3,1,3],[1,3,2,1,1,3],[1,3,2,3,1,1],[2,1,1,3,1,3],
  [2,3,1,1,1,3],[2,3,1,3,1,1],[1,1,3,1,2,3],[1,1,3,3,2,1],[1,3,3,1,2,1],
  [1,1,2,1,3,3],[1,1,2,3,3,1],[1,3,2,1,3,1],[1,1,3,2,1,3],[1,1,3,3,1,2],  // 49
  [1,3,3,1,1,2],[1,3,3,2,1,1],[3,1,3,1,2,1],[2,1,1,1,3,3],[2,1,3,1,1,3],
  [2,1,3,1,3,1],[2,1,3,3,1,1],[2,3,1,1,3,1],[2,3,1,3,1,1],[3,1,1,1,2,3],  // 59
  [3,1,1,3,2,1],[3,3,1,1,2,1],[3,1,2,1,1,3],[3,1,2,3,1,1],[3,3,2,1,1,1],
  [3,1,4,1,1,1],[2,2,1,4,1,1],[4,3,1,1,1,1],[1,1,1,2,2,4],[1,1,1,4,2,2],
  [1,2,1,1,2,4],[1,2,1,4,2,1],[1,4,1,1,2,2],[1,4,1,2,2,1],[1,1,2,2,1,4],
  [1,1,2,4,1,2],[1,2,2,1,1,4],[1,2,2,4,1,1],[1,4,2,1,1,2],[1,4,2,2,1,1],
  [2,4,1,2,1,1],[2,2,1,1,1,4],[4,1,3,1,1,1],[2,4,1,1,1,2],[1,3,4,1,1,1],
  [1,1,1,2,4,2],[1,2,1,1,4,2],[1,2,1,2,4,1],[1,1,4,2,1,2],[1,2,4,1,1,2],
  [1,2,4,2,1,1],[4,1,1,2,1,2],[4,2,1,1,1,2],[4,2,1,2,1,1],[2,1,2,1,4,1],
  [2,1,4,1,2,1],[4,1,2,1,2,1],[1,1,1,1,4,3],[1,1,1,3,4,1],[1,3,1,1,4,1],
  [1,1,4,1,1,3],[1,1,4,3,1,1],[4,1,1,1,1,3],[4,1,1,3,1,1],[1,1,3,1,4,1],
  [1,1,4,1,3,1],[3,1,1,1,4,1],[4,1,1,1,3,1],[2,1,1,4,1,2],[2,1,1,2,1,4],
  [2,1,1,2,3,2],[2,3,3,1,1,1,2],
];

// START B = index 104, STOP = index 106
function encodeCode128B(text: string): number[] | null {
  const chars = text.split("").map((c) => c.charCodeAt(0));
  for (const c of chars) {
    if (c < 32 || c > 126) return null;
  }
  const values: number[] = [CODE128B_START];
  for (const c of chars) {
    values.push(c - 32);
  }
  let checksum = CODE128B_START;
  for (let i = 1; i < values.length; i++) {
    checksum += values[i] * i;
  }
  values.push(checksum % 103);
  values.push(CODE128_STOP);
  return values;
}

function buildBars(values: number[]): boolean[] {
  const bars: boolean[] = [];
  // quiet zone
  for (let i = 0; i < 10; i++) bars.push(false);
  let dark = true;
  for (const v of values) {
    const pattern = C128_PATTERNS[v];
    if (!pattern) continue;
    for (const width of pattern) {
      for (let w = 0; w < width; w++) bars.push(dark);
      dark = !dark;
    }
  }
  // termination bar (2 modules)
  bars.push(true); bars.push(true);
  for (let i = 0; i < 10; i++) bars.push(false);
  return bars;
}

export default function BarcodeGeneratorPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [input, setInput] = useState("Hello123");
  const [error, setError] = useState("");
  const [barWidth, setBarWidth] = useState(2);
  const [barHeight, setBarHeight] = useState(80);
  const [showText, setShowText] = useState(true);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const values = encodeCode128B(input);
    if (!values) {
      setError("半角英数字・記号（ASCII 32〜126）のみ対応しています");
      return;
    }
    setError("");
    const bars = buildBars(values);
    const w = bars.length * barWidth;
    const textH = showText ? 24 : 0;
    const h = barHeight + textH + 10;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#000000";
    bars.forEach((dark, i) => {
      if (dark) ctx.fillRect(i * barWidth, 5, barWidth, barHeight);
    });
    if (showText) {
      ctx.fillStyle = "#000000";
      ctx.font = `${Math.max(10, barWidth * 6)}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(input, w / 2, barHeight + 8);
    }
  }, [input, barWidth, barHeight, showText]);

  useEffect(() => { draw(); }, [draw]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "barcode.png";
    a.click();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>バーコード生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">バーコード生成ツール</h1>
      <p className="text-muted mb-8">
        テキストを入力してCode128バーコードを生成します。半角英数字・記号に対応しています。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">テキスト入力</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="例: Hello123"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">バー幅: {barWidth}px</label>
            <input
              type="range"
              min={1}
              max={4}
              value={barWidth}
              onChange={(e) => setBarWidth(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">バー高さ: {barHeight}px</label>
            <input
              type="range"
              min={40}
              max={160}
              value={barHeight}
              onChange={(e) => setBarHeight(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={showText}
            onChange={(e) => setShowText(e.target.checked)}
            className="accent-primary w-4 h-4"
          />
          バーコード下にテキストを表示
        </label>
      </div>

      {!error && input && (
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-4">
          <h2 className="text-sm font-semibold mb-4">プレビュー</h2>
          <div className="overflow-x-auto">
            <canvas ref={canvasRef} className="border border-card-border" />
          </div>
        </div>
      )}

      {!error && input && (
        <button
          onClick={download}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          PNGでダウンロード
        </button>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">バーコード生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキスト欄にバーコード化したいテキストを入力します（半角英数字・記号のみ）。</p>
          <p>バー幅とバー高さのスライダーでサイズを調整できます。</p>
          <p>「ダウンロード」ボタンでPNG画像として保存できます。</p>
          <p>Code128Bフォーマットで生成されます。生成はすべてブラウザ内で行われます。</p>
        </div>
      </section>
    </div>
  );
}
