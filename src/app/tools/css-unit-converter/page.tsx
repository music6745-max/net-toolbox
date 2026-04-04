"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Unit = "px" | "rem" | "em" | "pt" | "%";

function toPx(value: number, unit: Unit, basePx: number, parentPx: number): number {
  switch (unit) {
    case "px": return value;
    case "rem": return value * basePx;
    case "em": return value * parentPx;
    case "pt": return value * (96 / 72);
    case "%": return (value / 100) * parentPx;
    default: return value;
  }
}

function fromPx(px: number, unit: Unit, basePx: number, parentPx: number): number {
  switch (unit) {
    case "px": return px;
    case "rem": return px / basePx;
    case "em": return px / parentPx;
    case "pt": return px * (72 / 96);
    case "%": return (px / parentPx) * 100;
    default: return px;
  }
}

const UNITS: Unit[] = ["px", "rem", "em", "pt", "%"];

const UNIT_DESC: Record<Unit, string> = {
  px: "ピクセル（絶対単位）",
  rem: "ルート要素の font-size 基準",
  em: "親要素の font-size 基準",
  pt: "ポイント（1pt = 1/72インチ）",
  "%": "親要素のサイズに対する割合",
};

export default function CssUnitConverterPage() {
  const [inputValue, setInputValue] = useState("16");
  const [inputUnit, setInputUnit] = useState<Unit>("px");
  const [basePx, setBasePx] = useState(16);
  const [parentPx, setParentPx] = useState(16);

  const numericInput = parseFloat(inputValue) || 0;
  const pxValue = toPx(numericInput, inputUnit, basePx, parentPx);

  const round = (n: number) => Math.round(n * 10000) / 10000;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>CSS単位変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">CSS単位変換ツール</h1>
      <p className="text-muted mb-8">
        CSSの単位（px、rem、em、pt、%）を相互変換します。基準フォントサイズや親要素サイズを設定して正確に変換できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">基準フォントサイズ（rem用）</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={basePx}
                onChange={(e) => setBasePx(parseFloat(e.target.value) || 16)}
                className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
                min={1}
              />
              <span className="text-sm text-muted">px</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">親要素サイズ（em・%用）</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={parentPx}
                onChange={(e) => setParentPx(parseFloat(e.target.value) || 16)}
                className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
                min={1}
              />
              <span className="text-sm text-muted">px</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 border border-card-border rounded-lg px-4 py-3 text-lg font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
            placeholder="0"
          />
          <select
            value={inputUnit}
            onChange={(e) => setInputUnit(e.target.value as Unit)}
            className="border border-card-border rounded-lg px-3 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
          >
            {UNITS.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          {UNITS.map((unit) => {
            const converted = round(fromPx(pxValue, unit, basePx, parentPx));
            const isActive = unit === inputUnit;
            return (
              <div
                key={unit}
                className={`flex items-center justify-between rounded-lg p-4 border ${
                  isActive
                    ? "border-primary bg-primary/5"
                    : "border-card-border bg-background"
                }`}
              >
                <div>
                  <span className={`text-sm font-mono font-bold ${isActive ? "text-primary" : ""}`}>
                    {unit}
                  </span>
                  <span className="text-xs text-muted ml-3">{UNIT_DESC[unit]}</span>
                </div>
                <span className="text-base font-mono font-semibold">
                  {isNaN(converted) ? "-" : converted}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">CSS単位変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 変換したい値を入力フィールドに入力します。</p>
          <p>2. 右のセレクトボックスで入力単位（px、rem、em、pt、%）を選択します。</p>
          <p>3. 全単位への変換結果がリアルタイムで表示されます。</p>
          <p>rem変換には「基準フォントサイズ」、em・%変換には「親要素サイズ」を設定してください（デフォルトは16px）。</p>
        </div>
      </section>


      <AffiliateSection slug="css-unit-converter" category="開発ツール" />
      <RelatedTools currentSlug="css-unit-converter" category="開発ツール" />
    </div>
  );
}
