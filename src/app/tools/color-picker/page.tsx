"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0").toUpperCase()).join("");
}

function hexToHsl(hex: string): [number, number, number] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;
  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

const PRESETS = [
  "#FF5733", "#FF8C00", "#FFD700", "#28A745", "#17A2B8",
  "#007BFF", "#6F42C1", "#E83E8C", "#FFFFFF", "#6C757D",
  "#343A40", "#000000", "#F8F9FA", "#FFC107", "#DC3545",
];

export default function ColorPickerPage() {
  const [h, setH] = useState(210);
  const [s, setS] = useState(70);
  const [l, setL] = useState(50);
  const [hexInput, setHexInput] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const [r, g, b] = hslToRgb(h, s, l);
  const hex = rgbToHex(r, g, b);

  const copy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const applyHex = useCallback(() => {
    const val = hexInput.startsWith("#") ? hexInput : "#" + hexInput;
    const hsl = hexToHsl(val);
    if (hsl) {
      setH(hsl[0]);
      setS(hsl[1]);
      setL(hsl[2]);
      setHexInput("");
    }
  }, [hexInput]);

  const applyPreset = (presetHex: string) => {
    const hsl = hexToHsl(presetHex);
    if (hsl) { setH(hsl[0]); setS(hsl[1]); setL(hsl[2]); }
  };

  const textColor = l > 55 ? "#1a1a1a" : "#ffffff";
  const hslStr = `hsl(${h}, ${s}%, ${l}%)`;
  const rgbStr = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>カラーピッカー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">カラーピッカーツール</h1>
      <p className="text-muted mb-8">
        HSLスライダーで色を直感的に選択し、HEX・RGB・HSLでコピーできます。
      </p>

      <div
        className="w-full h-36 rounded-xl mb-6 flex items-center justify-center transition-colors duration-150"
        style={{ backgroundColor: hex }}
      >
        <span className="text-2xl font-bold font-mono" style={{ color: textColor }}>{hex}</span>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <div className="space-y-5">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <label className="font-medium">色相 (H)</label>
              <span className="font-mono text-muted">{h}°</span>
            </div>
            <div className="relative">
              <div
                className="w-full h-3 rounded-full mb-1"
                style={{
                  background: "linear-gradient(to right, hsl(0,70%,50%), hsl(30,70%,50%), hsl(60,70%,50%), hsl(90,70%,50%), hsl(120,70%,50%), hsl(150,70%,50%), hsl(180,70%,50%), hsl(210,70%,50%), hsl(240,70%,50%), hsl(270,70%,50%), hsl(300,70%,50%), hsl(330,70%,50%), hsl(360,70%,50%))"
                }}
              />
              <input
                type="range" min={0} max={360} value={h}
                onChange={(e) => setH(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <label className="font-medium">彩度 (S)</label>
              <span className="font-mono text-muted">{s}%</span>
            </div>
            <div
              className="w-full h-3 rounded-full mb-1"
              style={{ background: `linear-gradient(to right, hsl(${h},0%,${l}%), hsl(${h},100%,${l}%))` }}
            />
            <input
              type="range" min={0} max={100} value={s}
              onChange={(e) => setS(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <label className="font-medium">明度 (L)</label>
              <span className="font-mono text-muted">{l}%</span>
            </div>
            <div
              className="w-full h-3 rounded-full mb-1"
              style={{ background: `linear-gradient(to right, #000, hsl(${h},${s}%,50%), #fff)` }}
            />
            <input
              type="range" min={0} max={100} value={l}
              onChange={(e) => setL(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-6">
        {[
          { label: "HEX", value: hex },
          { label: "RGB", value: rgbStr },
          { label: "HSL", value: hslStr },
        ].map((item) => (
          <div key={item.label} className="bg-card-bg border border-card-border rounded-xl px-4 py-3 flex items-center justify-between">
            <div>
              <span className="text-xs text-muted font-medium uppercase tracking-wide mr-3">{item.label}</span>
              <span className="font-mono text-sm">{item.value}</span>
            </div>
            <button
              onClick={() => copy(item.value, item.label)}
              className="bg-primary text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-primary-hover transition-colors"
            >
              {copied === item.label ? "コピー済み" : "コピー"}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-4 mb-6">
        <label className="block text-sm font-medium mb-2">HEXコードから設定</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={hexInput}
            onChange={(e) => setHexInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && applyHex()}
            placeholder="#FF5733"
            className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            onClick={applyHex}
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            適用
          </button>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-4">
        <p className="text-sm font-medium mb-3">プリセットカラー</p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((color) => (
            <button
              key={color}
              onClick={() => applyPreset(color)}
              className="w-8 h-8 rounded-lg border-2 transition-transform hover:scale-110"
              style={{ backgroundColor: color, borderColor: hex === color ? "#000" : "transparent" }}
              title={color}
            />
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>H（色相）・S（彩度）・L（明度）の3つのスライダーを動かして色を選びます。</p>
          <p>HEX・RGB・HSL各形式の「コピー」ボタンでクリップボードにコピーできます。</p>
          <p>HEXコードを直接入力して「適用」ボタンを押すと、そのコードの色に切り替わります。</p>
          <p>プリセットカラーをクリックするとその色をすぐに選択できます。</p>
        </div>
      </section>
    </div>
  );
}
