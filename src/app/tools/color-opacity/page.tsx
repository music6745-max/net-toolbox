"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return null;
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

export default function Page() {
  const [color, setColor] = useState("#2563eb");
  const [opacity, setOpacity] = useState(50);
  const [copied, setCopied] = useState("");

  const rgb = hexToRgb(color) || [37, 99, 235];
  const alpha = opacity / 100;
  const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, "0");
  const rgbaStr = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
  const hexaStr = `${color}${alphaHex}`;

  const copy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>色の透明度変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">色の透明度変換</h1>
      <p className="text-muted mb-8">HEX・RGBカラーにアルファ値（透明度）を適用。rgba/hexa形式で出力。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">カラー</label>
          <div className="flex items-center gap-3">
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-12 h-10 rounded cursor-pointer border border-card-border" />
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="w-40 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">透明度: {opacity}%</label>
          <input type="range" min={0} max={100} value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" />
        </div>

        <div
          className="w-full h-32 rounded-lg border border-card-border mb-6"
          style={{
            backgroundImage: "repeating-conic-gradient(#ccc 0% 25%, white 0% 50%)",
            backgroundSize: "16px 16px",
          }}
        >
          <div
            className="w-full h-full rounded-lg"
            style={{ backgroundColor: rgbaStr }}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3">
            <div>
              <div className="text-xs text-muted mb-1">RGBA</div>
              <code className="text-sm font-mono">{rgbaStr}</code>
            </div>
            <button onClick={() => copy(rgbaStr, "rgba")} className="text-xs text-primary">
              {copied === "rgba" ? "コピー済み" : "コピー"}
            </button>
          </div>
          <div className="flex items-center justify-between bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3">
            <div>
              <div className="text-xs text-muted mb-1">8桁HEX</div>
              <code className="text-sm font-mono">{hexaStr}</code>
            </div>
            <button onClick={() => copy(hexaStr, "hexa")} className="text-xs text-primary">
              {copied === "hexa" ? "コピー済み" : "コピー"}
            </button>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>カラーピッカーまたはHEXコードで色を選択し、スライダーで透明度を調整します。</p>
          <p>rgba形式と8桁HEX形式の値がリアルタイムで生成されます。コピーボタンで取得できます。</p>
        </div>
      </section>

      <RelatedTools currentSlug="color-opacity" category="デザイン" />
    </div>
  );
}
