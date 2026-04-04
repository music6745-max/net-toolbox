"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export default function ImageBase64Page() {
  const [dataUrl, setDataUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [mimeType, setMimeType] = useState("");
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedImg, setCopiedImg] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    setFileName(file.name);
    setOriginalSize(file.size);
    setMimeType(file.type);
    const reader = new FileReader();
    reader.onload = (e) => {
      setDataUrl(e.target?.result as string ?? "");
    };
    reader.readAsDataURL(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleFile(file);
  };

  const base64Only = dataUrl ? dataUrl.split(",")[1] ?? "" : "";
  const base64Size = base64Only ? Math.ceil(base64Only.length * 0.75) : 0;
  const sizeIncrease = originalSize ? (((dataUrl.length - originalSize) / originalSize) * 100).toFixed(1) : "0";

  const imgTag = dataUrl ? `<img src="${dataUrl}" alt="${fileName}" />` : "";

  const copyDataUrl = async () => {
    await navigator.clipboard.writeText(dataUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const copyImgTag = async () => {
    await navigator.clipboard.writeText(imgTag);
    setCopiedImg(true);
    setTimeout(() => setCopiedImg(false), 2000);
  };

  const reset = () => {
    setDataUrl("");
    setFileName("");
    setOriginalSize(0);
    setMimeType("");
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>画像Base64変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">画像Base64変換ツール</h1>
      <p className="text-muted mb-8">
        画像ファイルをBase64データURLに変換します。変換はすべてブラウザ上で行われ、サーバーへのアップロードはありません。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileRef.current?.click()}
          className="border-2 border-dashed border-card-border rounded-xl p-10 text-center cursor-pointer hover:border-primary transition-colors"
        >
          <p className="text-sm text-muted">ここに画像をドラッグ&ドロップ、またはクリックして選択</p>
          <p className="text-xs text-muted mt-1">PNG・JPEG・GIF・WebP・SVG など</p>
          <input ref={fileRef} type="file" accept="image/*" onChange={onFileChange} className="hidden" />
        </div>

        {dataUrl && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-4">
                <p className="text-xs text-muted mb-1">ファイル名</p>
                <p className="text-sm font-medium break-all">{fileName}</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <p className="text-xs text-muted mb-1">MIMEタイプ</p>
                <p className="text-sm font-mono">{mimeType}</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <p className="text-xs text-muted mb-1">元のファイルサイズ</p>
                <p className="text-sm font-medium">{formatBytes(originalSize)}</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <p className="text-xs text-muted mb-1">Base64後のサイズ</p>
                <p className="text-sm font-medium">{formatBytes(dataUrl.length)} <span className="text-xs text-muted">（+{sizeIncrease}%）</span></p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <img src={dataUrl} alt={fileName} className="max-h-40 max-w-xs rounded-lg border border-card-border object-contain" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">データURL（data:image/...）</span>
                <button onClick={copyDataUrl} className="text-sm text-primary hover:text-primary-hover font-medium">
                  {copiedUrl ? "コピー済み" : "コピー"}
                </button>
              </div>
              <textarea
                readOnly
                value={dataUrl}
                rows={4}
                className="w-full border border-card-border rounded-lg px-3 py-2 text-xs font-mono bg-background resize-none focus:outline-none"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">HTMLタグ</span>
                <button onClick={copyImgTag} className="text-sm text-primary hover:text-primary-hover font-medium">
                  {copiedImg ? "コピー済み" : "コピー"}
                </button>
              </div>
              <textarea
                readOnly
                value={imgTag}
                rows={2}
                className="w-full border border-card-border rounded-lg px-3 py-2 text-xs font-mono bg-background resize-none focus:outline-none"
              />
            </div>

            <button onClick={reset}
              className="border border-card-border text-muted px-4 py-2 rounded-lg text-sm hover:border-primary hover:text-primary transition-colors">
              リセット
            </button>
          </>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 画像ファイルをドラッグ&ドロップ、またはクリックしてファイルを選択します。</p>
          <p>2. 自動的にBase64データURLに変換され、プレビューと各種情報が表示されます。</p>
          <p>3. データURLまたはHTMLタグをコピーして使用できます。</p>
          <p>Base64変換により元ファイルより約33%サイズが増加します。CSSの background-image や img src 属性に直接埋め込めます。</p>
        </div>
      </section>


      <AffiliateSection slug="image-base64" category="画像・メディア" />
      <RelatedTools currentSlug="image-base64" category="画像・メディア" />
    </div>
  );
}
