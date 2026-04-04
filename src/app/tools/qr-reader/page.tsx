"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

type ImageInfo = {
  name: string;
  type: string;
  size: number;
  width: number;
  height: number;
  aspectRatio: string;
  megapixels: string;
  dataUrl: string;
};

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function aspectRatioStr(w: number, h: number): string {
  const g = gcd(w, h);
  return `${w / g} : ${h / g}`;
}

function formatBytes(b: number): string {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1024 / 1024).toFixed(2)} MB`;
}

function mimeLabel(type: string): string {
  const map: Record<string, string> = {
    "image/jpeg": "JPEG",
    "image/png": "PNG",
    "image/gif": "GIF",
    "image/webp": "WebP",
    "image/svg+xml": "SVG",
    "image/bmp": "BMP",
    "image/tiff": "TIFF",
    "image/avif": "AVIF",
    "image/heic": "HEIC",
    "image/heif": "HEIF",
  };
  return map[type] ?? type;
}

export default function ImageInfoPage() {
  const [info, setInfo] = useState<ImageInfo | null>(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const loadFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("画像ファイルを選択してください（PNG / JPEG / WebP / GIF など）");
      setInfo(null);
      return;
    }
    setError("");
    setInfo(null);

    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      const img = new Image();
      img.onload = () => {
        // Draw to canvas to get pixel-level info
        const canvas = canvasRef.current!;
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0);

        const mp = ((img.naturalWidth * img.naturalHeight) / 1_000_000).toFixed(2);
        setInfo({
          name: file.name,
          type: file.type || "不明",
          size: file.size,
          width: img.naturalWidth,
          height: img.naturalHeight,
          aspectRatio: aspectRatioStr(img.naturalWidth, img.naturalHeight),
          megapixels: mp,
          dataUrl,
        });
      };
      img.onerror = () => {
        setError("画像の読み込みに失敗しました");
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) loadFile(file);
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) loadFile(file);
  };

  const infoRows: { label: string; value: string }[] = info
    ? [
        { label: "ファイル名", value: info.name },
        { label: "形式", value: mimeLabel(info.type) },
        { label: "ファイルサイズ", value: formatBytes(info.size) },
        { label: "幅", value: `${info.width} px` },
        { label: "高さ", value: `${info.height} px` },
        { label: "解像度", value: `${info.width} × ${info.height} px` },
        { label: "縦横比", value: info.aspectRatio },
        { label: "メガピクセル", value: `${info.megapixels} MP` },
        {
          label: "向き",
          value:
            info.width > info.height
              ? "横向き (Landscape)"
              : info.width < info.height
              ? "縦向き (Portrait)"
              : "正方形 (Square)",
        },
      ]
    : [];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>画像情報確認</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">画像情報確認ツール</h1>
      <p className="text-muted mb-8">
        画像をアップロードするとファイルサイズ・解像度・形式・縦横比などの詳細情報を即座に表示します。すべての処理はブラウザ内で完結します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        {/* Drop zone */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onClick={() => document.getElementById("img-info-input")?.click()}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
            dragging
              ? "border-primary bg-primary/5"
              : "border-card-border hover:border-primary/50"
          }`}
        >
          <input
            id="img-info-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {info ? (
            <div className="space-y-2">
              <img
                src={info.dataUrl}
                alt={info.name}
                className="max-h-48 mx-auto rounded-lg object-contain"
              />
              <p className="text-xs text-primary">クリックして別の画像を選択</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-3xl">🔍</p>
              <p className="text-sm font-medium">クリックまたはドラッグ＆ドロップで画像を選択</p>
              <p className="text-xs text-muted">PNG / JPEG / WebP / GIF / BMP など</p>
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Info table */}
        {info && infoRows.length > 0 && (
          <div className="overflow-hidden rounded-xl border border-card-border">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-card-border">
                {infoRows.map((row) => (
                  <tr key={row.label} className="hover:bg-background transition-colors">
                    <td className="px-4 py-3 font-medium text-muted w-1/3">{row.label}</td>
                    <td className="px-4 py-3 font-mono font-semibold">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Megapixel comparison */}
        {info && (
          <div className="bg-background rounded-xl p-4 text-sm space-y-2">
            <p className="font-medium">参考：一般的な解像度との比較</p>
            <div className="space-y-1 text-muted">
              {[
                { name: "HD (1280×720)", mp: 0.92 },
                { name: "Full HD (1920×1080)", mp: 2.07 },
                { name: "4K UHD (3840×2160)", mp: 8.29 },
                { name: "12MP スマートフォン", mp: 12 },
                { name: "48MP スマートフォン", mp: 48 },
              ].map((ref) => {
                const pct = Math.min(100, (parseFloat(info.megapixels) / ref.mp) * 100);
                return (
                  <div key={ref.name}>
                    <div className="flex justify-between text-xs mb-0.5">
                      <span>{ref.name}</span>
                      <span>{ref.mp} MP</span>
                    </div>
                    <div className="h-1.5 bg-card-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted pt-1">あなたの画像: {info.megapixels} MP</p>
          </div>
        )}
      </div>

      {/* Hidden canvas for image analysis */}
      <canvas ref={canvasRef} className="hidden" />

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 画像をドラッグ＆ドロップするか、クリックしてファイルを選択します。</p>
          <p>2. ファイル名・形式・ファイルサイズ・幅・高さ・縦横比・メガピクセル数・向きが自動表示されます。</p>
          <p>3. 一般的な解像度との比較グラフで画像の大きさを視覚的に確認できます。</p>
          <p>すべての処理はブラウザ内で完結し、画像が外部サーバーに送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
