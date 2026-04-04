"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type OutputFormat = "image/png" | "image/jpeg" | "image/webp";

export default function ImageResizePage() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [originalDims, setOriginalDims] = useState<{ w: number; h: number } | null>(null);

  const [targetWidth, setTargetWidth] = useState("");
  const [targetHeight, setTargetHeight] = useState("");
  const [keepRatio, setKeepRatio] = useState(true);
  const [format, setFormat] = useState<OutputFormat>("image/png");
  const [quality, setQuality] = useState("90");

  const [resizedUrl, setResizedUrl] = useState<string | null>(null);
  const [resizedDims, setResizedDims] = useState<{ w: number; h: number } | null>(null);
  const [resizedSize, setResizedSize] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const loadFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("画像ファイルを選択してください");
      return;
    }
    setError("");
    setResizedUrl(null);
    setResizedDims(null);
    setResizedSize(null);
    setOriginalFile(file);

    const url = URL.createObjectURL(file);
    setOriginalUrl(url);

    const img = new Image();
    img.onload = () => {
      setOriginalDims({ w: img.naturalWidth, h: img.naturalHeight });
      setTargetWidth(String(img.naturalWidth));
      setTargetHeight(String(img.naturalHeight));
    };
    img.src = url;
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) loadFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) loadFile(file);
  };

  const handleWidthChange = (val: string) => {
    setTargetWidth(val);
    if (keepRatio && originalDims && val) {
      const w = parseInt(val, 10);
      if (!isNaN(w) && w > 0) {
        setTargetHeight(String(Math.round((w / originalDims.w) * originalDims.h)));
      }
    }
  };

  const handleHeightChange = (val: string) => {
    setTargetHeight(val);
    if (keepRatio && originalDims && val) {
      const h = parseInt(val, 10);
      if (!isNaN(h) && h > 0) {
        setTargetWidth(String(Math.round((h / originalDims.h) * originalDims.w)));
      }
    }
  };

  const resize = () => {
    setError("");
    if (!originalUrl || !originalDims) {
      setError("画像をアップロードしてください");
      return;
    }
    const w = parseInt(targetWidth, 10);
    const h = parseInt(targetHeight, 10);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setError("有効な幅と高さを入力してください");
      return;
    }
    if (w > 10000 || h > 10000) {
      setError("最大サイズは 10000 x 10000 px です");
      return;
    }
    setProcessing(true);

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d")!;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);

      const q = Math.min(1, Math.max(0.01, parseInt(quality, 10) / 100));
      canvas.toBlob(
        (blob) => {
          if (!blob) { setError("変換に失敗しました"); setProcessing(false); return; }
          const url = URL.createObjectURL(blob);
          if (resizedUrl) URL.revokeObjectURL(resizedUrl);
          setResizedUrl(url);
          setResizedDims({ w, h });
          setResizedSize(blob.size);
          setProcessing(false);
        },
        format,
        format === "image/png" ? undefined : q
      );
    };
    img.onerror = () => { setError("画像の読み込みに失敗しました"); setProcessing(false); };
    img.src = originalUrl;
  };

  const download = () => {
    if (!resizedUrl) return;
    const ext = format === "image/png" ? "png" : format === "image/webp" ? "webp" : "jpg";
    const a = document.createElement("a");
    a.href = resizedUrl;
    a.download = `resized_${targetWidth}x${targetHeight}.${ext}`;
    a.click();
  };

  const formatBytes = (b: number) => {
    if (b < 1024) return `${b} B`;
    if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
    return `${(b / 1024 / 1024).toFixed(2)} MB`;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>画像リサイズ</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">画像リサイズツール</h1>
      <p className="text-muted mb-8">
        画像をアップロードしてサイズを変更します。すべての処理はブラウザ内で完結し、画像が外部に送信されることはありません。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        {/* Drop zone */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-card-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
          onClick={() => document.getElementById("img-input")?.click()}
        >
          <input
            id="img-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {originalUrl ? (
            <div className="space-y-2">
              <img
                src={originalUrl}
                alt="元の画像"
                className="max-h-48 mx-auto rounded-lg object-contain"
              />
              {originalDims && (
                <p className="text-sm text-muted">
                  元のサイズ: {originalDims.w} × {originalDims.h} px
                  {originalFile && ` / ${formatBytes(originalFile.size)}`}
                </p>
              )}
              <p className="text-xs text-primary">クリックして別の画像を選択</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-3xl">🖼️</p>
              <p className="text-sm font-medium">クリックまたはドラッグ＆ドロップで画像を選択</p>
              <p className="text-xs text-muted">PNG / JPEG / WebP / GIF など</p>
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">幅 (px)</label>
              <input
                type="number"
                value={targetWidth}
                onChange={(e) => handleWidthChange(e.target.value)}
                min={1}
                max={10000}
                placeholder="幅"
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">高さ (px)</label>
              <input
                type="number"
                value={targetHeight}
                onChange={(e) => handleHeightChange(e.target.value)}
                min={1}
                max={10000}
                placeholder="高さ"
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={keepRatio}
              onChange={(e) => setKeepRatio(e.target.checked)}
              className="accent-primary"
            />
            アスペクト比を維持する
          </label>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">出力形式</label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value as OutputFormat)}
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              >
                <option value="image/png">PNG</option>
                <option value="image/jpeg">JPEG</option>
                <option value="image/webp">WebP</option>
              </select>
            </div>
            {format !== "image/png" && (
              <div>
                <label className="block text-sm font-medium mb-2">品質 ({quality}%)</label>
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  className="w-full accent-primary mt-2"
                />
              </div>
            )}
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex gap-3">
          <button
            onClick={resize}
            disabled={processing || !originalUrl}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-50"
          >
            {processing ? "処理中..." : "リサイズする"}
          </button>
        </div>

        {/* Result */}
        {resizedUrl && resizedDims && (
          <div className="space-y-4">
            <div className="border-t border-card-border pt-4">
              <p className="text-sm font-medium mb-3">変換結果</p>
              <img
                src={resizedUrl}
                alt="リサイズ後"
                className="max-h-48 mx-auto rounded-lg object-contain border border-card-border"
              />
              <p className="text-sm text-muted text-center mt-2">
                {resizedDims.w} × {resizedDims.h} px
                {resizedSize !== null && ` / ${formatBytes(resizedSize)}`}
              </p>
            </div>
            <button
              onClick={download}
              className="w-full bg-foreground text-background py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              ダウンロード
            </button>
          </div>
        )}
      </div>

      {/* Hidden canvas */}
      <canvas ref={canvasRef} className="hidden" />

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 画像をドラッグ＆ドロップするか、クリックしてファイルを選択します。</p>
          <p>2. 変換後の幅・高さを入力します。「アスペクト比を維持する」をオンにすると片方を変更すると自動調整されます。</p>
          <p>3. 出力形式（PNG / JPEG / WebP）と品質を選択します。</p>
          <p>4. 「リサイズする」ボタンを押し、プレビューを確認したら「ダウンロード」で保存します。</p>
          <p>すべての処理はブラウザ内で完結し、画像が外部サーバーに送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="image-resize" category="画像・メディア" />
    </div>
  );
}
