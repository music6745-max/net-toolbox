"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

function minifyCss(css: string): string {
  let result = css;
  result = result.replace(/\/\*[\s\S]*?\*\//g, "");
  result = result.replace(/\s+/g, " ");
  result = result.replace(/\s*([{}:;,>~+])\s*/g, "$1");
  result = result.replace(/;}/g, "}");
  result = result.trim();
  return result;
}

const sampleCss = `/* Main styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.header {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
}

.header .nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

/* Button styles */
.button {
  background-color: #2563eb;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
}

.button:hover {
  opacity: 0.9;
}`;

export default function Page() {
  const [input, setInput] = useState(sampleCss);
  const [copied, setCopied] = useState(false);

  const minified = minifyCss(input);
  const originalSize = new Blob([input]).size;
  const minifiedSize = new Blob([minified]).size;
  const savings = originalSize > 0 ? Math.round((1 - minifiedSize / originalSize) * 100) : 0;

  const copy = async () => {
    await navigator.clipboard.writeText(minified);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>CSS圧縮</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">CSS圧縮</h1>
      <p className="text-muted mb-8">CSSコードを圧縮（ミニファイ）してファイルサイズを削減。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <label className="text-sm font-medium mb-2 block">CSS入力</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="CSSコードを貼り付けてください..."
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            rows={10}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3 text-center">
            <div className="text-xs text-muted mb-1">元のサイズ</div>
            <div className="text-lg font-bold">{originalSize.toLocaleString()} B</div>
          </div>
          <div className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3 text-center">
            <div className="text-xs text-muted mb-1">圧縮後</div>
            <div className="text-lg font-bold">{minifiedSize.toLocaleString()} B</div>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-center">
            <div className="text-xs text-muted mb-1">削減率</div>
            <div className="text-lg font-bold text-primary">{savings}%</div>
          </div>
        </div>

        <div className="relative">
          <label className="text-sm font-medium mb-2 block">圧縮結果</label>
          <pre className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3 text-sm font-mono overflow-x-auto whitespace-pre-wrap break-all min-h-[60px]">{minified}</pre>
          <button onClick={copy} className="absolute top-0 right-0 text-xs text-primary bg-card-bg border border-card-border rounded px-2 py-1">
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>CSSコードをテキストエリアに貼り付けると、自動的に圧縮されます。</p>
          <p>コメント、余分な空白、改行を除去し、ファイルサイズを削減します。</p>
          <p>圧縮結果をコピーして本番環境のCSSファイルにご利用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="css-minifier" category="開発ツール" />


      <RelatedTools currentSlug="css-minifier" category="開発ツール" />
    </div>
  );
}
