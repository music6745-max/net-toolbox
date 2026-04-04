"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface CompressResult {
  originalSize: number;
  compressedSize: number;
  compressedUrl: string;
  fileName: string;
  width: number;
  height: number;
}

export default function ImageCompressorPage() {
  const [quality, setQuality] = useState(0.7);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [format, setFormat] = useState<string>("image/jpeg");
  const [result, setResult] = useState<CompressResult | null>(null);
  const [processing, setProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const compressImage = (file: File) => {
    setProcessing(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let w = img.width;
        let h = img.height;

        if (w > maxWidth) {
          h = Math.round((h * maxWidth) / w);
          w = maxWidth;
        }

        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(img, 0, 0, w, h);

        canvas.toBlob(
          (blob) => {
            if (!blob) return;
            const url = URL.createObjectURL(blob);
            setResult({
              originalSize: file.size,
              compressedSize: blob.size,
              compressedUrl: url,
              fileName: file.name.replace(/\.[^.]+$/, "") + getExtension(format),
              width: w,
              height: h,
            });
            setProcessing(false);
          },
          format,
          quality
        );
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const getExtension = (mime: string) => {
    if (mime === "image/jpeg") return ".jpg";
    if (mime === "image/png") return ".png";
    if (mime === "image/webp") return ".webp";
    return ".jpg";
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) compressImage(file);
  };

  const reduction = result
    ? Math.round((1 - result.compressedSize / result.originalSize) * 100)
    : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>画像圧縮</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">画像圧縮ツール</h1>
      <p className="text-muted mb-8">
        ブラウザ内で画像を圧縮・軽量化します。サーバーにアップロードせずローカルで処理するため、プライバシーも安心です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">画質 ({Math.round(quality * 100)}%)</label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={quality}
              onChange={(e) => setQuality(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">最大幅 (px)</label>
            <input
              type="number"
              value={maxWidth}
              onChange={(e) => setMaxWidth(parseInt(e.target.value) || 1920)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">出力形式</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              <option value="image/jpeg">JPEG</option>
              <option value="image/png">PNG</option>
              <option value="image/webp">WebP</option>
            </select>
          </div>
        </div>

        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-card-border rounded-lg p-10 text-center cursor-pointer hover:border-primary/50 transition-colors"
        >
          <div className="text-3xl mb-2">📁</div>
          <div className="text-sm text-muted">
            クリックして画像を選択
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {processing && (
          <div className="mt-4 text-center text-sm text-muted">処理中...</div>
        )}

        {result && !processing && (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-background rounded-lg p-4 text-center">
                <div className="text-sm font-bold">{formatSize(result.originalSize)}</div>
                <div className="text-xs text-muted mt-1">元のサイズ</div>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <div className="text-sm font-bold text-primary">{formatSize(result.compressedSize)}</div>
                <div className="text-xs text-muted mt-1">圧縮後</div>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <div className={`text-sm font-bold ${reduction > 0 ? "text-green-500" : "text-red-500"}`}>
                  {reduction > 0 ? `-${reduction}%` : `+${Math.abs(reduction)}%`}
                </div>
                <div className="text-xs text-muted mt-1">削減率</div>
              </div>
            </div>

            <div className="text-center text-xs text-muted">
              出力サイズ: {result.width} x {result.height} px
            </div>

            <a
              href={result.compressedUrl}
              download={result.fileName}
              className="block w-full text-center bg-primary text-white rounded-lg py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              圧縮画像をダウンロード
            </a>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">画像圧縮ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>画質・最大幅・出力形式を設定し、画像ファイルを選択すると自動で圧縮されます。</p>
          <p>すべての処理はブラウザ内で完結するため、画像がサーバーに送信されることはありません。</p>
          <p>Webサイトの表示速度改善やメール添付用の画像軽量化にご活用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="image-compressor" category="画像・メディア" />
      <RelatedTools currentSlug="image-compressor" category="画像・メディア" />
    </div>
  );
}
