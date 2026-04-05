"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function minifyJs(js: string): string {
  let result = js;
  result = result.replace(/\/\*[\s\S]*?\*\//g, "");
  result = result.replace(/\/\/.*$/gm, "");
  result = result.replace(/\n\s*/g, "\n");
  result = result.replace(/\s*([=+\-*/<>!&|?:,;{}()\[\]])\s*/g, "$1");
  result = result.replace(/\n+/g, ";");
  result = result.replace(/;+/g, ";");
  result = result.replace(/^;|;$/g, "");
  result = result.replace(/;}/g, "}");
  return result.trim();
}

export default function JsMinifierPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [stats, setStats] = useState<{ before: number; after: number } | null>(null);

  const minify = () => {
    const result = minifyJs(input);
    setOutput(result);
    setStats({ before: new Blob([input]).size, after: new Blob([result]).size });
  };

  const copy = () => { navigator.clipboard.writeText(output); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>JavaScript圧縮</span></nav>
      <h1 className="text-2xl font-bold mb-2">JavaScript圧縮ツール</h1>
      <p className="text-muted mb-8">JavaScriptコードを圧縮（minify）してファイルサイズを削減します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">JavaScript入力</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-sm" placeholder="function greet(name) {
  console.log('Hello ' + name);
}" />
        </div>
        <button onClick={minify} className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition">圧縮する</button>
        {stats && (
          <div className="flex gap-4 text-sm">
            <span>元サイズ: {stats.before} bytes</span>
            <span>圧縮後: {stats.after} bytes</span>
            <span className="text-green-600 font-medium">削減: {Math.round((1 - stats.after / stats.before) * 100)}%</span>
          </div>
        )}
        {output && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium">圧縮結果</label>
              <button onClick={copy} className="text-xs bg-card-bg border border-card-border rounded px-2 py-1 hover:opacity-80">コピー</button>
            </div>
            <textarea readOnly value={output} rows={4} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-sm" />
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>JavaScriptコードを貼り付けて「圧縮する」をクリックすると、コメント・空白を除去して圧縮されます。</p><p>※簡易圧縮のため、本番環境ではTerser等の専用ツールの使用を推奨します。</p></div></section>
      <AffiliateSection slug="js-minifier" category="開発ツール" />
      <RelatedTools currentSlug="js-minifier" category="開発ツール" />
    </div>
  );
}
