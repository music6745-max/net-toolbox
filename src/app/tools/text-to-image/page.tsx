"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function TextToImagePage() {
  const [text, setText] = useState("サンプルテキスト");
  const [fontSize, setFontSize] = useState(48);
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [textColor, setTextColor] = useState("#333333");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [paddingX, setPaddingX] = useState(40);
  const [paddingY, setPaddingY] = useState(30);
  const [bold, setBold] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generate = useCallback(() => {
    if (!text.trim()) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const lines = text.split("\n");
    const fontWeight = bold ? "bold " : "";
    ctx.font = `${fontWeight}${fontSize}px ${fontFamily}`;
    const lineHeight = fontSize * 1.4;
    const maxWidth = Math.max(
      ...lines.map((line) => ctx.measureText(line).width)
    );

    canvas.width = maxWidth + paddingX * 2;
    canvas.height = lineHeight * lines.length + paddingY * 2;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontWeight}${fontSize}px ${fontFamily}`;
    ctx.fillStyle = textColor;
    ctx.textBaseline = "top";
    lines.forEach((line, i) => {
      ctx.fillText(line, paddingX, paddingY + i * lineHeight);
    });

    setPreviewUrl(canvas.toDataURL("image/png"));
  }, [text, fontSize, fontFamily, textColor, bgColor, paddingX, paddingY, bold]);

  const download = () => {
    if (!previewUrl) return;
    const a = document.createElement("a");
    a.href = previewUrl;
    a.download = "text-image.png";
    a.click();
  };

  const fonts = [
    { label: "ゴシック体", value: "sans-serif" },
    { label: "明朝体", value: "serif" },
    { label: "等幅", value: "monospace" },
    { label: "cursive", value: "cursive" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>テキスト画像生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">テキスト画像生成ツール</h1>
      <p className="text-muted mb-8">
        テキストを入力して画像化できます。フォント・文字サイズ・色・背景色を自由にカスタマイズしてPNG画像としてダウンロード。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">テキスト入力</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="画像にしたいテキストを入力..."
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={4}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">フォントサイズ</label>
            <input
              type="number"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              min={8}
              max={200}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">フォント</label>
            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm"
            >
              {fonts.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2 pt-5">
            <input
              type="checkbox"
              checked={bold}
              onChange={(e) => setBold(e.target.checked)}
              id="bold-check"
            />
            <label htmlFor="bold-check" className="text-sm font-medium">太字</label>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">文字色</label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">背景色</label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">左右余白</label>
            <input
              type="number"
              value={paddingX}
              onChange={(e) => setPaddingX(Number(e.target.value))}
              min={0}
              max={200}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">上下余白</label>
            <input
              type="number"
              value={paddingY}
              onChange={(e) => setPaddingY(Number(e.target.value))}
              min={0}
              max={200}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={generate}
            className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            画像を生成
          </button>
          {previewUrl && (
            <button
              onClick={download}
              className="border border-primary text-primary px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors"
            >
              PNGダウンロード
            </button>
          )}
        </div>

        <canvas ref={canvasRef} className="hidden" />

        {previewUrl && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">プレビュー</p>
            <div className="border border-card-border rounded-lg p-4 flex justify-center">
              <img src={previewUrl} alt="生成結果" className="max-w-full max-h-80" />
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">テキスト画像生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストを入力し、フォント・サイズ・色などを設定して「画像を生成」をクリックしてください。</p>
          <p>複数行にも対応しています。改行を入力するとそのまま画像に反映されます。</p>
          <p>生成された画像はPNG形式でダウンロードできます。SNS投稿用の文字画像やバナー素材の作成にご活用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="text-to-image" category="画像・メディア" />
      <RelatedTools currentSlug="text-to-image" category="画像・メディア" />
    </div>
  );
}
