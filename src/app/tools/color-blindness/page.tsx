"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return null;
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + [r, g, b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");
}

// LMS simulation matrices
function simulateProtanopia(r: number, g: number, b: number) {
  return rgbToHex(
    0.152286 * r + 1.052583 * g - 0.204868 * b,
    0.114503 * r + 0.786281 * g + 0.099216 * b,
    -0.003882 * r - 0.048116 * g + 1.051998 * b
  );
}

function simulateDeuteranopia(r: number, g: number, b: number) {
  return rgbToHex(
    0.367322 * r + 0.860646 * g - 0.227968 * b,
    0.280085 * r + 0.672501 * g + 0.047413 * b,
    -0.011820 * r + 0.042940 * g + 0.968881 * b
  );
}

function simulateTritanopia(r: number, g: number, b: number) {
  return rgbToHex(
    1.255528 * r - 0.076749 * g - 0.178779 * b,
    -0.078411 * r + 0.930809 * g + 0.147602 * b,
    0.004733 * r + 0.691367 * g + 0.303900 * b
  );
}

const TYPES = [
  { key: "normal", label: "通常の見え方", desc: "色覚異常なし" },
  { key: "protanopia", label: "赤色覚異常（1型2色覚）", desc: "赤を感じる錐体細胞がない" },
  { key: "deuteranopia", label: "緑色覚異常（2型2色覚）", desc: "緑を感じる錐体細胞がない" },
  { key: "tritanopia", label: "青色覚異常（3型2色覚）", desc: "青を感じる錐体細胞がない" },
];

export default function ColorBlindnessPage() {
  const [hex, setHex] = useState("#3b82f6");
  const [inputVal, setInputVal] = useState("#3b82f6");

  const applyHex = (val: string) => {
    const clean = val.startsWith("#") ? val : "#" + val;
    const rgb = hexToRgb(clean);
    if (rgb) setHex(clean);
  };

  const rgb = hexToRgb(hex);

  const simulated: Record<string, string> = rgb
    ? {
        normal: hex,
        protanopia: simulateProtanopia(...rgb),
        deuteranopia: simulateDeuteranopia(...rgb),
        tritanopia: simulateTritanopia(...rgb),
      }
    : {};

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>色覚シミュレーション</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">色覚シミュレーションツール</h1>
      <p className="text-muted mb-8">カラーコードを入力して、異なる色覚特性の方にどのように見えるかをシミュレーションします。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">カラーコード（HEX）</label>
          <div className="flex gap-3 items-center">
            <input
              type="color"
              value={hex}
              onChange={(e) => { setHex(e.target.value); setInputVal(e.target.value); }}
              className="w-12 h-10 rounded cursor-pointer border border-card-border"
            />
            <input
              type="text"
              value={inputVal}
              onChange={(e) => { setInputVal(e.target.value); applyHex(e.target.value); }}
              className="flex-1 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="#3b82f6"
            />
          </div>
        </div>
        {rgb && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TYPES.map((t) => (
              <div key={t.key} className="bg-background rounded-lg p-4">
                <div className="w-full h-20 rounded-lg mb-3" style={{ backgroundColor: simulated[t.key] }} />
                <p className="text-sm font-medium">{t.label}</p>
                <p className="text-xs text-muted mt-0.5">{t.desc}</p>
                <p className="text-xs font-mono text-primary mt-1">{simulated[t.key]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>カラーピッカーまたはHEXコードを入力すると、各色覚タイプでの見え方をシミュレーションします。</p>
          <p>Webデザインやグラフィックデザインのアクセシビリティ確認にご活用ください。</p>
          <p>赤色覚異常（1型）・緑色覚異常（2型）は男性の約5%、青色覚異常（3型）は非常に稀です。</p>
        </div>
      </section>


      <AffiliateSection slug="color-blindness" category="デザイン" />
      <RelatedTools currentSlug="color-blindness" category="デザイン" />
    </div>
  );
}
