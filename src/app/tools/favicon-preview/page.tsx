"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

const BG_PRESETS = [
  { label: "青", color: "#2563eb" },
  { label: "緑", color: "#16a34a" },
  { label: "赤", color: "#dc2626" },
  { label: "紫", color: "#7c3aed" },
  { label: "オレンジ", color: "#ea580c" },
  { label: "黒", color: "#111827" },
  { label: "白", color: "#ffffff" },
  { label: "灰色", color: "#6b7280" },
];

const TEXT_PRESETS = [
  { label: "白", color: "#ffffff" },
  { label: "黒", color: "#111827" },
  { label: "黄色", color: "#fbbf24" },
];

export default function FaviconPreviewPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState("F");
  const [bgColor, setBgColor] = useState("#2563eb");
  const [textColor, setTextColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(28);
  const [rounded, setRounded] = useState(true);
  const [dataUrl, setDataUrl] = useState("");

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const size = 64;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, size, size);

    if (rounded) {
      const r = size * 0.2;
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.lineTo(size - r, 0);
      ctx.quadraticCurveTo(size, 0, size, r);
      ctx.lineTo(size, size - r);
      ctx.quadraticCurveTo(size, size, size - r, size);
      ctx.lineTo(r, size);
      ctx.quadraticCurveTo(0, size, 0, size - r);
      ctx.lineTo(0, r);
      ctx.quadraticCurveTo(0, 0, r, 0);
      ctx.closePath();
      ctx.fillStyle = bgColor;
      ctx.fill();
    } else {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);
    }

    const displayText = text.slice(0, 2);
    ctx.fillStyle = textColor;
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(displayText, size / 2, size / 2 + 1);

    setDataUrl(canvas.toDataURL("image/png"));
  }, [text, bgColor, textColor, fontSize, rounded]);

  useEffect(() => {
    draw();
  }, [draw]);

  const download = () => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "favicon.png";
    a.click();
  };

  const tabBgs = ["#f8f9fa", "#1e1e2e", "#ffffff", "#0f172a"];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ファビコンプレビュー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ファビコンプレビューツール</h1>
      <p className="text-muted mb-8">
        テキストや絵文字を入力してファビコンのデザインを確認できます。ブラウザタブでの見え方もプレビューできます。
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">テキスト（最大2文字・絵文字可）</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={2}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">背景色</label>
            <div className="flex items-center gap-2 flex-wrap">
              {BG_PRESETS.map((p) => (
                <button
                  key={p.color}
                  onClick={() => setBgColor(p.color)}
                  title={p.label}
                  className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 ${bgColor === p.color ? "border-primary scale-110" : "border-card-border"}`}
                  style={{ backgroundColor: p.color }}
                />
              ))}
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-7 h-7 rounded cursor-pointer"
                title="カスタム"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">文字色</label>
            <div className="flex items-center gap-2">
              {TEXT_PRESETS.map((p) => (
                <button
                  key={p.color}
                  onClick={() => setTextColor(p.color)}
                  title={p.label}
                  className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 ${textColor === p.color ? "border-primary scale-110" : "border-card-border"}`}
                  style={{ backgroundColor: p.color }}
                />
              ))}
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-7 h-7 rounded cursor-pointer"
                title="カスタム"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">フォントサイズ: {fontSize}px</label>
            <input
              type="range"
              min={12}
              max={50}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={rounded}
              onChange={(e) => setRounded(e.target.checked)}
              className="accent-primary w-4 h-4"
            />
            角丸にする
          </label>
        </div>

        <div className="space-y-4">
          <div className="bg-card-bg border border-card-border rounded-xl p-6">
            <h2 className="text-sm font-semibold mb-4">プレビュー（64×64px）</h2>
            <div className="flex items-center gap-4">
              <canvas
                ref={canvasRef}
                className="border border-card-border"
                style={{ width: 64, height: 64, imageRendering: "pixelated" }}
              />
              <div>
                <p className="text-xs text-muted mb-1">実寸サイズ (16×16相当)</p>
                {dataUrl && (
                  <img
                    src={dataUrl}
                    alt="favicon preview small"
                    width={16}
                    height={16}
                    style={{ imageRendering: "pixelated" }}
                    className="border border-card-border"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h2 className="text-sm font-semibold mb-3">ブラウザタブ風プレビュー</h2>
            <div className="space-y-2">
              {tabBgs.map((bg) => (
                <div
                  key={bg}
                  className="flex items-center gap-2 rounded-t-lg px-3 py-1.5 max-w-xs"
                  style={{ backgroundColor: bg, border: "1px solid rgba(128,128,128,0.3)" }}
                >
                  {dataUrl && (
                    <img
                      src={dataUrl}
                      alt="tab favicon"
                      width={16}
                      height={16}
                      style={{ imageRendering: "pixelated" }}
                    />
                  )}
                  <span
                    className="text-xs truncate"
                    style={{ color: bg === "#ffffff" || bg === "#f8f9fa" ? "#333" : "#ddd" }}
                  >
                    サイトタイトル
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={download}
            className="w-full bg-primary text-white py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            PNG (64×64px) をダウンロード
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ファビコンプレビューツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキスト欄にサイトのイニシャルや絵文字（最大2文字）を入力します。</p>
          <p>背景色・文字色・フォントサイズを設定してデザインをカスタマイズします。</p>
          <p>ブラウザタブ風プレビューで、明るい/暗いテーマでの見え方を確認できます。</p>
          <p>「ダウンロード」ボタンで64×64pxのPNGファイルを保存できます。</p>
        </div>
      </section>
    </div>
  );
}
