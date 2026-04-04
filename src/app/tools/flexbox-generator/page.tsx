"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function FlexboxGeneratorPage() {
  const [direction, setDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [flexWrap, setFlexWrap] = useState("nowrap");
  const [gap, setGap] = useState(10);
  const [itemCount, setItemCount] = useState(5);
  const [copied, setCopied] = useState(false);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction as React.CSSProperties["flexDirection"],
    justifyContent,
    alignItems,
    flexWrap: flexWrap as React.CSSProperties["flexWrap"],
    gap: `${gap}px`,
    minHeight: "200px",
    padding: "16px",
  };

  const cssCode = `.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
  gap: ${gap}px;
}`;

  const copyCSS = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const options = {
    direction: ["row", "row-reverse", "column", "column-reverse"],
    justify: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
    align: ["flex-start", "flex-end", "center", "stretch", "baseline"],
    wrap: ["nowrap", "wrap", "wrap-reverse"],
  };

  const selectRow = (label: string, value: string, opts: string[], onChange: (v: string) => void) => (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-card-border rounded-lg px-3 py-2 text-sm"
      >
        {opts.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );

  const colors = ["#3b82f6", "#ef4444", "#22c55e", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4", "#f97316"];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>Flexboxジェネレーター</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Flexboxジェネレーター</h1>
      <p className="text-muted mb-8">
        CSS Flexboxのプロパティをビジュアルに操作してレイアウトを確認。CSSコードを自動生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        {/* Controls */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {selectRow("flex-direction", direction, options.direction, setDirection)}
          {selectRow("justify-content", justifyContent, options.justify, setJustifyContent)}
          {selectRow("align-items", alignItems, options.align, setAlignItems)}
          {selectRow("flex-wrap", flexWrap, options.wrap, setFlexWrap)}
          <div>
            <label className="block text-sm font-medium mb-1">gap</label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={0}
                max={40}
                value={gap}
                onChange={(e) => setGap(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm w-12 text-right">{gap}px</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">アイテム数</label>
            <input
              type="number"
              value={itemCount}
              onChange={(e) => setItemCount(Math.max(1, Math.min(12, Number(e.target.value))))}
              min={1}
              max={12}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Preview */}
        <div>
          <p className="text-sm font-medium mb-2">プレビュー</p>
          <div
            className="border border-card-border rounded-lg bg-background"
            style={containerStyle}
          >
            {Array.from({ length: itemCount }, (_, i) => (
              <div
                key={i}
                className="rounded-lg text-white text-sm font-medium flex items-center justify-center"
                style={{
                  backgroundColor: colors[i % colors.length],
                  minWidth: "60px",
                  minHeight: "60px",
                  padding: "12px 16px",
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Output */}
        <div>
          <label className="block text-sm font-medium mb-2">CSS出力</label>
          <pre className="bg-background border border-card-border rounded-lg p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
            {cssCode}
          </pre>
          <button
            onClick={copyCSS}
            className="mt-2 bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {copied ? "コピーしました" : "CSSをコピー"}
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">Flexboxジェネレーターの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>各プロパティをドロップダウンやスライダーで変更すると、プレビューエリアにリアルタイムで反映されます。</p>
          <p>flex-direction、justify-content、align-items、flex-wrap、gapのプロパティを設定できます。</p>
          <p>生成されたCSSコードはコピーボタンでクリップボードにコピーし、プロジェクトに貼り付けてお使いください。</p>
        </div>
      </section>

      <AffiliateSection slug="flexbox-generator" category="デザイン" />
      <RelatedTools currentSlug="flexbox-generator" category="デザイン" />
    </div>
  );
}
