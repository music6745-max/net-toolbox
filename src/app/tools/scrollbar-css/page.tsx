"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [width, setWidth] = useState(8);
  const [trackColor, setTrackColor] = useState("#f1f1f1");
  const [thumbColor, setThumbColor] = useState("#888888");
  const [thumbRadius, setThumbRadius] = useState(4);
  const [copied, setCopied] = useState(false);

  const cssCode = `/* WebKit browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: ${width}px;
}

::-webkit-scrollbar-track {
  background: ${trackColor};
}

::-webkit-scrollbar-thumb {
  background: ${thumbColor};
  border-radius: ${thumbRadius}px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${thumbColor}cc;
}

/* Firefox */
* {
  scrollbar-width: ${width <= 6 ? "thin" : "auto"};
  scrollbar-color: ${thumbColor} ${trackColor};
}`;

  const copy = async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollbarStyle = `
    .custom-scroll::-webkit-scrollbar { width: ${width}px; }
    .custom-scroll::-webkit-scrollbar-track { background: ${trackColor}; }
    .custom-scroll::-webkit-scrollbar-thumb { background: ${thumbColor}; border-radius: ${thumbRadius}px; }
    .custom-scroll::-webkit-scrollbar-thumb:hover { background: ${thumbColor}cc; }
  `;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>スクロールバーCSS</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">スクロールバーCSS</h1>
      <p className="text-muted mb-8">カスタムスクロールバーのCSSを生成。幅・色・角丸を設定。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <style dangerouslySetInnerHTML={{ __html: scrollbarStyle }} />

        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">プレビュー</label>
          <div
            className="custom-scroll border border-card-border rounded-lg p-4 bg-white dark:bg-gray-800"
            style={{ height: 200, overflowY: "scroll" }}
          >
            {Array.from({ length: 30 }, (_, i) => (
              <p key={i} className="text-sm text-muted py-1">スクロールバーのプレビューテキスト {i + 1}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-1 block">幅: {width}px</label>
            <input type="range" min={2} max={20} value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">角丸: {thumbRadius}px</label>
            <input type="range" min={0} max={10} value={thumbRadius} onChange={(e) => setThumbRadius(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">トラック色</label>
            <div className="flex items-center gap-2">
              <input type="color" value={trackColor} onChange={(e) => setTrackColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-card-border" />
              <input type="text" value={trackColor} onChange={(e) => setTrackColor(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">つまみ色</label>
            <div className="flex items-center gap-2">
              <input type="color" value={thumbColor} onChange={(e) => setThumbColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-card-border" />
              <input type="text" value={thumbColor} onChange={(e) => setThumbColor(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </div>
        </div>

        <div className="relative">
          <pre className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3 text-sm font-mono overflow-x-auto whitespace-pre-wrap">{cssCode}</pre>
          <button onClick={copy} className="absolute top-2 right-2 text-xs text-primary bg-card-bg border border-card-border rounded px-2 py-1">
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>スクロールバーの幅、色、角丸を調整してプレビューで確認します。</p>
          <p>WebKit系ブラウザとFirefox対応のCSSコードを生成します。コピーしてお使いください。</p>
        </div>
      </section>

      <AffiliateSection slug="scrollbar-css" category="デザイン" />


      <RelatedTools currentSlug="scrollbar-css" category="デザイン" />
    </div>
  );
}
