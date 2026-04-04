"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function SvgToPngPage() {
  const [svgCode, setSvgCode] = useState("");
  const [scale, setScale] = useState(2);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [transparent, setTransparent] = useState(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      setSvgCode(text);
    };
    reader.readAsText(file);
  };

  const convert = useCallback(() => {
    if (!svgCode.trim()) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(svgCode, "image/svg+xml");
    const svgEl = doc.querySelector("svg");
    if (!svgEl) {
      alert("有効なSVGコードが見つかりません。");
      return;
    }

    let w = parseFloat(svgEl.getAttribute("width") || "300");
    let h = parseFloat(svgEl.getAttribute("height") || "150");
    const viewBox = svgEl.getAttribute("viewBox");
    if (viewBox) {
      const parts = viewBox.split(/[\s,]+/).map(Number);
      if (parts.length === 4) {
        w = parts[2];
        h = parts[3];
      }
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = w * scale;
    canvas.height = h * scale;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!transparent) {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const blob = new Blob([svgCode], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      setPreviewUrl(canvas.toDataURL("image/png"));
    };
    img.onerror = () => {
      alert("SVGの描画に失敗しました。コードを確認してください。");
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }, [svgCode, scale, bgColor, transparent]);

  const download = () => {
    if (!previewUrl) return;
    const a = document.createElement("a");
    a.href = previewUrl;
    a.download = "converted.png";
    a.click();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>SVG→PNG変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">SVG→PNG変換ツール</h1>
      <p className="text-muted mb-8">
        SVGコードまたはSVGファイルをアップロードしてPNG画像に変換できます。サイズ倍率や背景色も指定可能です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">SVGファイルをアップロード</label>
          <input
            type="file"
            accept=".svg"
            onChange={handleFileUpload}
            className="text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">またはSVGコードを入力</label>
          <textarea
            value={svgCode}
            onChange={(e) => setSvgCode(e.target.value)}
            placeholder='<svg xmlns="http://www.w3.org/2000/svg" ...>...</svg>'
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={6}
          />
        </div>

        <div className="flex flex-wrap gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-1">倍率</label>
            <select
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="border border-card-border rounded-lg px-3 py-2 text-sm"
            >
              <option value={1}>1x</option>
              <option value={2}>2x</option>
              <option value={3}>3x</option>
              <option value={4}>4x</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">透過背景</label>
            <input
              type="checkbox"
              checked={transparent}
              onChange={(e) => setTransparent(e.target.checked)}
            />
          </div>
          {!transparent && (
            <div>
              <label className="block text-sm font-medium mb-1">背景色</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-10 h-10 rounded cursor-pointer"
              />
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={convert}
            className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            変換する
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
            <div className="border border-card-border rounded-lg p-4 bg-[repeating-conic-gradient(#f0f0f0_0%_25%,#fff_0%_50%)] bg-[length:16px_16px]">
              <img src={previewUrl} alt="変換結果" className="max-w-full max-h-80 mx-auto" />
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">SVG→PNG変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>SVGファイルをアップロードするか、SVGコードを直接貼り付けてください。</p>
          <p>倍率を変更すると出力画像のサイズを拡大できます。背景を透過にするか色を付けるかも選択可能です。</p>
          <p>変換後のPNG画像はプレビュー表示され、ダウンロードボタンで保存できます。すべてブラウザ内で処理されるため、データがサーバーに送信されることはありません。</p>
        </div>
      </section>

      <AffiliateSection slug="svg-to-png" category="画像・メディア" />
      <RelatedTools currentSlug="svg-to-png" category="画像・メディア" />
    </div>
  );
}
