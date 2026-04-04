"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [bgColor, setBgColor] = useState("#2563eb");
  const [textColor, setTextColor] = useState("#ffffff");
  const [paddingX, setPaddingX] = useState(24);
  const [paddingY, setPaddingY] = useState(12);
  const [borderRadius, setBorderRadius] = useState(8);
  const [fontSize, setFontSize] = useState(16);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderColor, setBorderColor] = useState("#000000");
  const [buttonText, setButtonText] = useState("ボタン");
  const [copied, setCopied] = useState(false);

  const cssCode = `.button {
  background-color: ${bgColor};
  color: ${textColor};
  padding: ${paddingY}px ${paddingX}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  border: ${borderWidth}px solid ${borderColor};
  cursor: pointer;
  font-weight: 500;
  transition: opacity 0.2s;
}

.button:hover {
  opacity: 0.85;
}`;

  const copy = async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ボタンCSS生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ボタンCSS生成</h1>
      <p className="text-muted mb-8">Webボタンのデザインをビジュアルにカスタマイズ。CSSコードを即生成。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="w-full rounded-lg border border-card-border p-8 mb-6 flex items-center justify-center bg-white dark:bg-gray-800">
          <button
            style={{
              backgroundColor: bgColor,
              color: textColor,
              padding: `${paddingY}px ${paddingX}px`,
              borderRadius: `${borderRadius}px`,
              fontSize: `${fontSize}px`,
              border: `${borderWidth}px solid ${borderColor}`,
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            {buttonText}
          </button>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium mb-1 block">ボタンテキスト</label>
          <input type="text" value={buttonText} onChange={(e) => setButtonText(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-1 block">背景色</label>
            <div className="flex items-center gap-2">
              <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-card-border" />
              <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">文字色</label>
            <div className="flex items-center gap-2">
              <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-card-border" />
              <input type="text" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">横パディング: {paddingX}px</label>
            <input type="range" min={0} max={60} value={paddingX} onChange={(e) => setPaddingX(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">縦パディング: {paddingY}px</label>
            <input type="range" min={0} max={40} value={paddingY} onChange={(e) => setPaddingY(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">角丸: {borderRadius}px</label>
            <input type="range" min={0} max={50} value={borderRadius} onChange={(e) => setBorderRadius(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">フォントサイズ: {fontSize}px</label>
            <input type="range" min={10} max={36} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">ボーダー幅: {borderWidth}px</label>
            <input type="range" min={0} max={10} value={borderWidth} onChange={(e) => setBorderWidth(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">ボーダー色</label>
            <div className="flex items-center gap-2">
              <input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-card-border" />
              <input type="text" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
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
          <p>各コントロールでボタンのスタイルをカスタマイズします。</p>
          <p>プレビューで確認後、生成されたCSSコードをコピーしてご利用ください。</p>
        </div>
      </section>

      <RelatedTools currentSlug="button-css-generator" category="デザイン" />
    </div>
  );
}
