"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function optimizeSvg(svg: string): string {
  let result = svg;
  result = result.replace(/<!--[\s\S]*?-->/g, "");
  result = result.replace(/<metadata[\s\S]*?<\/metadata>/gi, "");
  result = result.replace(/\s(id|class|data-[a-z-]+)="[^"]*"/g, "");
  result = result.replace(/\s*\n\s*/g, "");
  result = result.replace(/\s{2,}/g, " ");
  result = result.replace(/ \/>/g, "/>");
  result = result.replace(/<\/?desc>/gi, "");
  result = result.replace(/<\/?title>/gi, "");
  result = result.replace(/<g>\s*<\/g>/g, "");
  result = result.replace(/\s+>/g, ">");
  return result.trim();
}

export default function SvgOptimizerPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [stats, setStats] = useState<{ before: number; after: number } | null>(null);

  const optimize = () => {
    const result = optimizeSvg(input);
    setOutput(result);
    setStats({ before: new Blob([input]).size, after: new Blob([result]).size });
  };

  const copy = () => { navigator.clipboard.writeText(output); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>SVG最適化</span></nav>
      <h1 className="text-2xl font-bold mb-2">SVG最適化ツール</h1>
      <p className="text-muted mb-8">SVGコードから不要な要素を除去してファイルサイズを削減します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">SVG入力</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-sm" placeholder='<svg xmlns="http://www.w3.org/2000/svg" ...>' />
        </div>
        <button onClick={optimize} className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition">最適化する</button>
        {stats && (
          <div className="flex gap-4 text-sm">
            <span>元サイズ: {stats.before} bytes</span>
            <span>最適化後: {stats.after} bytes</span>
            <span className="text-green-600 font-medium">削減: {stats.before > 0 ? Math.round((1 - stats.after / stats.before) * 100) : 0}%</span>
          </div>
        )}
        {output && (
          <>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium">最適化結果</label>
                <button onClick={copy} className="text-xs bg-card-bg border border-card-border rounded px-2 py-1 hover:opacity-80">コピー</button>
              </div>
              <textarea readOnly value={output} rows={4} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">プレビュー</label>
              <div className="border border-card-border rounded-lg p-4 flex justify-center" dangerouslySetInnerHTML={{ __html: output }} />
            </div>
          </>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>SVGコードを貼り付けて「最適化する」をクリックすると、コメント・メタデータ・空白を除去して軽量化されます。</p></div></section>
      <AffiliateSection slug="svg-optimizer" category="デザイン" />
      <RelatedTools currentSlug="svg-optimizer" category="デザイン" />
    </div>
  );
}
