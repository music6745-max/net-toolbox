"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function randomHex(): string {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, Math.round(l * 100)];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

interface ColorCard {
  hex: string;
  locked: boolean;
}

function makeCard(hex: string): ColorCard {
  return { hex, locked: false };
}

export default function RandomColorPage() {
  const [cards, setCards] = useState<ColorCard[]>(() =>
    Array.from({ length: 6 }, () => makeCard(randomHex()))
  );
  const [copied, setCopied] = useState("");

  const generate = useCallback(() => {
    setCards((prev) =>
      prev.map((c) => (c.locked ? c : makeCard(randomHex())))
    );
  }, []);

  const toggleLock = (i: number) => {
    setCards((prev) =>
      prev.map((c, idx) => (idx === i ? { ...c, locked: !c.locked } : c))
    );
  };

  const copy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ランダムカラー生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ランダムカラー生成ツール</h1>
      <p className="text-muted mb-8">
        ランダムな色をHEX・RGB・HSL形式で生成します。鍵アイコンでお気に入りの色をロックできます。
      </p>

      <div className="flex gap-3 mb-6">
        <button
          onClick={generate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          新しい色を生成
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {cards.map((card, i) => {
          const [r, g, b] = hexToRgb(card.hex);
          const [h, s, l] = rgbToHsl(r, g, b);
          const rgbStr = `rgb(${r}, ${g}, ${b})`;
          const hslStr = `hsl(${h}, ${s}%, ${l}%)`;
          const bright = l > 55;
          const textColor = bright ? "#1a1a1a" : "#ffffff";
          const key = `card-${i}`;
          return (
            <div
              key={i}
              className="border border-card-border rounded-xl overflow-hidden"
            >
              <div
                className="h-28 w-full flex items-start justify-end p-2"
                style={{ backgroundColor: card.hex }}
              >
                <button
                  onClick={() => toggleLock(i)}
                  title={card.locked ? "ロック解除" : "ロック"}
                  style={{ color: textColor }}
                  className="text-lg leading-none opacity-80 hover:opacity-100"
                >
                  {card.locked ? "🔒" : "🔓"}
                </button>
              </div>
              <div className="bg-card-bg p-3 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold">{card.hex.toUpperCase()}</span>
                  <button
                    onClick={() => copy(card.hex.toUpperCase(), `${key}-hex`)}
                    className="text-xs text-primary"
                  >
                    {copied === `${key}-hex` ? "✓" : "コピー"}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">{rgbStr}</span>
                  <button
                    onClick={() => copy(rgbStr, `${key}-rgb`)}
                    className="text-xs text-primary"
                  >
                    {copied === `${key}-rgb` ? "✓" : "コピー"}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">{hslStr}</span>
                  <button
                    onClick={() => copy(hslStr, `${key}-hsl`)}
                    className="text-xs text-primary"
                  >
                    {copied === `${key}-hsl` ? "✓" : "コピー"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ランダムカラー生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>「新しい色を生成」ボタンをクリックすると、6色のランダムカラーが表示されます。</p>
          <p>鍵アイコン（🔓）をクリックするとその色をロックでき、次回生成時もその色が保持されます。</p>
          <p>各色のHEX・RGB・HSL値をコピーボタンでクリップボードにコピーできます。</p>
          <p>すべての処理はブラウザ内で完結するため、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="random-color" category="デザイン" />
      <RelatedTools currentSlug="random-color" category="デザイン" />
    </div>
  );
}
