"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function FaviconGeneratorPage() {
  const [text, setText] = useState("A");
  const [bgColor, setBgColor] = useState("#4f46e5");
  const [textColor, setTextColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(32);
  const [size, setSize] = useState(64);
  const [shape, setShape] = useState<"square" | "circle">("square");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dataUrl, setDataUrl] = useState<string>("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = bgColor;

    if (shape === "circle") {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(0, 0, size, size);
    }

    // Text
    ctx.fillStyle = textColor;
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, size / 2, size / 2);

    setDataUrl(canvas.toDataURL("image/png"));
  }, [text, bgColor, textColor, fontSize, size, shape]);

  const downloadFavicon = (downloadSize: number) => {
    const canvas = document.createElement("canvas");
    canvas.width = downloadSize;
    canvas.height = downloadSize;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = bgColor;
    if (shape === "circle") {
      ctx.beginPath();
      ctx.arc(downloadSize / 2, downloadSize / 2, downloadSize / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(0, 0, downloadSize, downloadSize);
    }

    const scaledFontSize = Math.round((fontSize * downloadSize) / size);
    ctx.fillStyle = textColor;
    ctx.font = `bold ${scaledFontSize}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, downloadSize / 2, downloadSize / 2);

    const link = document.createElement("a");
    link.download = `favicon-${downloadSize}x${downloadSize}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const sizes = [16, 32, 48, 64, 128, 192, 512];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>ファビコン生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ファビコン生成ツール</h1>
      <p className="text-muted mb-8">
        テキストや絵文字を入力してファビコンを作成できます。色・サイズ・形状をカスタマイズして、PNGとしてダウンロード可能です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">テキスト / 絵文字</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={4}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">形状</label>
            <select
              value={shape}
              onChange={(e) => setShape(e.target.value as "square" | "circle")}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              <option value="square">四角</option>
              <option value="circle">丸</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">背景色</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-10 h-10 rounded border border-card-border cursor-pointer"
              />
              <input
                type="text"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">文字色</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-10 h-10 rounded border border-card-border cursor-pointer"
              />
              <input
                type="text"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">フォントサイズ ({fontSize}px)</label>
            <input
              type="range"
              min="8"
              max="56"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">プレビューサイズ</label>
            <select
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              <option value={32}>32 x 32</option>
              <option value={64}>64 x 64</option>
              <option value={128}>128 x 128</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="bg-background rounded-lg p-6">
            <canvas
              ref={canvasRef}
              className="border border-card-border"
              style={{ width: size > 64 ? 128 : size * 2, height: size > 64 ? 128 : size * 2, imageRendering: "pixelated" }}
            />
          </div>

          <div className="w-full">
            <div className="text-sm font-medium mb-2">ダウンロードサイズ</div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => downloadFavicon(s)}
                  className="px-3 py-2 text-xs border border-card-border rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  {s}x{s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ファビコン生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストや絵文字を入力し、背景色・文字色・形状をカスタマイズしてファビコンを作成できます。</p>
          <p>ダウンロードサイズボタンをクリックすると、指定サイズのPNG画像がダウンロードされます。</p>
          <p>Webサイトのブラウザタブアイコンやスマートフォンのホーム画面アイコンとしてご利用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="favicon-generator" category="デザイン" />
      <RelatedTools currentSlug="favicon-generator" category="デザイン" />
    </div>
  );
}
