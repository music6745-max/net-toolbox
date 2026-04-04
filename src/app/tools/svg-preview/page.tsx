"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const defaultSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <rect x="10" y="10" width="180" height="180" rx="20" fill="#2563eb" />
  <circle cx="100" cy="100" r="60" fill="#ffffff" opacity="0.3" />
  <text x="100" y="110" text-anchor="middle" fill="white" font-size="24" font-weight="bold">SVG</text>
</svg>`;

export default function Page() {
  const [input, setInput] = useState(defaultSvg);

  const dimensions = useMemo(() => {
    const wMatch = input.match(/width=["'](\d+)/);
    const hMatch = input.match(/height=["'](\d+)/);
    const vbMatch = input.match(/viewBox=["']([^"']+)/);
    const w = wMatch ? wMatch[1] : null;
    const h = hMatch ? hMatch[1] : null;
    const vb = vbMatch ? vbMatch[1] : null;
    return { width: w, height: h, viewBox: vb };
  }, [input]);

  const isSvg = input.trim().startsWith("<svg");

  const sanitizedSvg = useMemo(() => {
    let svg = input;
    svg = svg.replace(/<script[\s\S]*?<\/script>/gi, "");
    svg = svg.replace(/on\w+\s*=\s*"[^"]*"/gi, "");
    svg = svg.replace(/on\w+\s*=\s*'[^']*'/gi, "");
    return svg;
  }, [input]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>SVGプレビュー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">SVGプレビュー</h1>
      <p className="text-muted mb-8">SVGコードを貼り付けてリアルタイムでプレビュー表示。サイズ確認にも。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <label className="text-sm font-medium mb-2 block">SVGコード</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="SVGコードを貼り付けてください..."
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            rows={10}
          />
        </div>

        {isSvg && (
          <>
            <div className="mb-4">
              <label className="text-sm font-medium mb-2 block">プレビュー</label>
              <div
                className="border border-card-border rounded-lg p-4 bg-white dark:bg-gray-800 flex items-center justify-center min-h-[200px]"
                style={{
                  backgroundImage: "repeating-conic-gradient(#f0f0f0 0% 25%, white 0% 50%)",
                  backgroundSize: "16px 16px",
                }}
                dangerouslySetInnerHTML={{ __html: sanitizedSvg }}
              />
            </div>

            <div className="flex gap-4 text-sm text-muted">
              {dimensions.width && <span>幅: {dimensions.width}px</span>}
              {dimensions.height && <span>高さ: {dimensions.height}px</span>}
              {dimensions.viewBox && <span>viewBox: {dimensions.viewBox}</span>}
            </div>
          </>
        )}

        {!isSvg && input.trim() && (
          <p className="text-sm text-red-500 mt-2">有効なSVGコードを入力してください（&lt;svg で始まる必要があります）。</p>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストエリアにSVGコードを貼り付けると、リアルタイムでプレビューが表示されます。</p>
          <p>幅、高さ、viewBoxなどのサイズ情報も自動で検出・表示します。</p>
        </div>
      </section>

      <AffiliateSection slug="svg-preview" category="デザイン" />


      <RelatedTools currentSlug="svg-preview" category="デザイン" />
    </div>
  );
}
