"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [blur, setBlur] = useState(4);
  const [color, setColor] = useState("#000000");
  const [previewText, setPreviewText] = useState("テキストシャドウ プレビュー");
  const [copied, setCopied] = useState(false);

  const cssValue = `text-shadow: ${x}px ${y}px ${blur}px ${color};`;

  const copy = async () => {
    await navigator.clipboard.writeText(cssValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>テキストシャドウ生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">テキストシャドウ生成</h1>
      <p className="text-muted mb-8">CSSのtext-shadowをビジュアルに設定。プレビュー付きでコードを生成。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="w-full rounded-lg border border-card-border p-8 mb-6 flex items-center justify-center bg-white dark:bg-gray-800">
          <span
            className="text-3xl font-bold"
            style={{ textShadow: `${x}px ${y}px ${blur}px ${color}` }}
          >
            {previewText}
          </span>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium mb-1 block">プレビューテキスト</label>
          <input
            type="text"
            value={previewText}
            onChange={(e) => setPreviewText(e.target.value)}
            className="w-full border border-card-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-1 block">X オフセット: {x}px</label>
            <input type="range" min={-50} max={50} value={x} onChange={(e) => setX(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Y オフセット: {y}px</label>
            <input type="range" min={-50} max={50} value={y} onChange={(e) => setY(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">ぼかし: {blur}px</label>
            <input type="range" min={0} max={50} value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">色</label>
            <div className="flex items-center gap-2">
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-card-border" />
              <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </div>
        </div>

        <div className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3 flex items-center justify-between">
          <code className="text-sm font-mono">{cssValue}</code>
          <button onClick={copy} className="text-xs text-primary ml-4 whitespace-nowrap">
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>スライダーでX/Yオフセット、ぼかし量、色を調整します。</p>
          <p>プレビューテキストを変更して確認後、CSSコードをコピーしてご利用ください。</p>
        </div>
      </section>

      <RelatedTools currentSlug="text-shadow-generator" category="デザイン" />
    </div>
  );
}
