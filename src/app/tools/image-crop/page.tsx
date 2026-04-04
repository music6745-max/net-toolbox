"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function ImageCropPage() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState({ w: 0, h: 0 });
  const [cropX, setCropX] = useState(0);
  const [cropY, setCropY] = useState(0);
  const [cropW, setCropW] = useState(200);
  const [cropH, setCropH] = useState(200);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target?.result as string;
      setImageSrc(src);
      const img = new Image();
      img.onload = () => {
        imgRef.current = img;
        setImageSize({ w: img.naturalWidth, h: img.naturalHeight });
        setCropX(0);
        setCropY(0);
        setCropW(Math.min(200, img.naturalWidth));
        setCropH(Math.min(200, img.naturalHeight));
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  };

  const drawPreview = useCallback(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;
    const cw = Math.max(1, Math.min(cropW, imageSize.w - cropX));
    const ch = Math.max(1, Math.min(cropH, imageSize.h - cropY));
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, cropX, cropY, cw, ch, 0, 0, cw, ch);
  }, [cropX, cropY, cropW, cropH, imageSize]);

  useEffect(() => {
    if (imageSrc) drawPreview();
  }, [imageSrc, drawPreview]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "cropped-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>画像切り抜き</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">画像切り抜きツール</h1>
      <p className="text-muted mb-8">
        ブラウザ内で画像を切り抜き（トリミング）してダウンロードできます。画像はサーバーに送信されません。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">画像を選択</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="text-sm"
          />
        </div>

        {imageSrc && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs text-muted mb-1">X座標</label>
                <input
                  type="number"
                  value={cropX}
                  onChange={(e) => setCropX(Math.max(0, Number(e.target.value)))}
                  min={0}
                  max={imageSize.w}
                  className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">Y座標</label>
                <input
                  type="number"
                  value={cropY}
                  onChange={(e) => setCropY(Math.max(0, Number(e.target.value)))}
                  min={0}
                  max={imageSize.h}
                  className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">幅</label>
                <input
                  type="number"
                  value={cropW}
                  onChange={(e) => setCropW(Math.max(1, Number(e.target.value)))}
                  min={1}
                  max={imageSize.w}
                  className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1">高さ</label>
                <input
                  type="number"
                  value={cropH}
                  onChange={(e) => setCropH(Math.max(1, Number(e.target.value)))}
                  min={1}
                  max={imageSize.h}
                  className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>

            <p className="text-xs text-muted">
              元画像: {imageSize.w} x {imageSize.h}px
            </p>

            <div>
              <label className="block text-sm font-medium mb-2">プレビュー</label>
              <div className="border border-card-border rounded-lg p-2 bg-background overflow-auto max-h-80">
                <canvas ref={canvasRef} />
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              ダウンロード
            </button>
          </>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">画像切り抜きツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>画像ファイルを選択し、切り抜きたい範囲のX座標・Y座標・幅・高さを指定してください。</p>
          <p>プレビューで確認後、「ダウンロード」ボタンでPNG形式で保存できます。すべてブラウザ内で処理されます。</p>
        </div>
      </section>

      <AffiliateSection slug="image-crop" category="画像・メディア" />
      <RelatedTools currentSlug="image-crop" category="画像・メディア" />
    </div>
  );
}
