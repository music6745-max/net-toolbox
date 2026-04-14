"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Direction = "px-to-cm" | "cm-to-px";

const DPI_OPTIONS = [
  { value: 72, label: "72 (Web標準)" },
  { value: 96, label: "96 (Windows)" },
  { value: 150, label: "150" },
  { value: 300, label: "300 (印刷)" },
  { value: 600, label: "600" },
];

export default function Page() {
  const [direction, setDirection] = useState<Direction>("px-to-cm");
  const [value, setValue] = useState("100");
  const [dpi, setDpi] = useState(96);

  const num = parseFloat(value) || 0;

  const result =
    direction === "px-to-cm"
      ? (num / dpi) * 2.54
      : (num * dpi) / 2.54;

  const resultLabel = direction === "px-to-cm" ? "cm" : "px";
  const inputLabel = direction === "px-to-cm" ? "px" : "cm";

  const a4WidthPx = Math.round((21.0 * dpi) / 2.54);
  const a4HeightPx = Math.round((29.7 * dpi) / 2.54);

  const fmt = (n: number) => {
    if (!isFinite(n)) return "---";
    return parseFloat(n.toFixed(4)).toLocaleString("ja-JP");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ピクセル⇔cm変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ピクセル⇔cm変換ツール</h1>
      <p className="text-muted mb-8">
        ピクセルとcmを相互変換します。DPI（解像度）を選んで印刷サイズの確認にも使えます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">変換方向</label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value as Direction)}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="px-to-cm">ピクセル → cm</option>
            <option value="cm-to-px">cm → ピクセル</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            値 ({inputLabel})
          </label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            min={0}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">解像度（DPI）</label>
          <select
            value={dpi}
            onChange={(e) => setDpi(Number(e.target.value))}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {DPI_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-primary/10 rounded-lg p-4 text-center">
          <div className="text-xs text-muted mb-1">変換結果</div>
          <div className="text-3xl font-bold text-primary">
            {fmt(result)} <span className="text-base font-normal">{resultLabel}</span>
          </div>
          <div className="text-sm text-muted mt-2">
            {fmt(num)} {inputLabel} = {fmt(result)} {resultLabel}（{dpi} DPI）
          </div>
        </div>

        <div className="bg-background rounded-lg p-4">
          <div className="text-sm font-medium mb-2">参考：A4サイズ（210mm x 297mm）</div>
          <div className="text-sm text-muted">
            {dpi} DPI の場合：
            <span className="font-mono font-bold text-primary ml-1">
              {a4WidthPx.toLocaleString()} px x {a4HeightPx.toLocaleString()} px
            </span>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>変換方向を選び、値とDPI（解像度）を設定すると自動で変換結果が表示されます。</p>
          <p>Web用画像は72〜96 DPI、印刷用は300 DPI以上が一般的です。</p>
          <p>A4サイズの参考値も表示されるので、印刷物のデザイン時にご活用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="pixel-cm-converter" category="変換ツール" />
      <RelatedTools currentSlug="pixel-cm-converter" category="変換ツール" />
    </div>
  );
}
