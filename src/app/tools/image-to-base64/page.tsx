"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function ImageToBase64Page() {
  const [base64, setBase64] = useState("");
  const [preview, setPreview] = useState("");
  const [fileInfo, setFileInfo] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileInfo(file.name + " (" + (file.size / 1024).toFixed(1) + " KB)");
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setBase64(result);
      setPreview(result);
    };
    reader.readAsDataURL(file);
  };

  const copy = () => { navigator.clipboard.writeText(base64); };
  const copyTag = () => { navigator.clipboard.writeText('<img src="' + base64 + '" alt="" />'); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>画像→Base64変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">画像→Base64変換ツール</h1>
      <p className="text-muted mb-8">画像ファイルをBase64エンコードされた文字列に変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div
          className="border-2 border-dashed border-card-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition"
          onClick={() => fileRef.current?.click()}
        >
          <p className="text-muted">クリックして画像を選択</p>
          <p className="text-xs text-muted mt-1">PNG, JPG, GIF, SVG, WebP対応</p>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
        </div>
        {fileInfo && <p className="text-sm text-muted">{fileInfo}</p>}
        {preview && (
          <div className="flex justify-center">
            <img src={preview} alt="プレビュー" className="max-h-48 rounded-lg border border-card-border" />
          </div>
        )}
        {base64 && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium">Base64文字列</label>
              <div className="flex gap-2">
                <button onClick={copy} className="text-xs bg-card-bg border border-card-border rounded px-2 py-1 hover:opacity-80">コピー</button>
                <button onClick={copyTag} className="text-xs bg-card-bg border border-card-border rounded px-2 py-1 hover:opacity-80">imgタグコピー</button>
              </div>
            </div>
            <textarea readOnly value={base64} rows={4} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-xs break-all" />
            <p className="text-xs text-muted mt-1">文字数: {base64.length.toLocaleString()}</p>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>画像ファイルを選択すると、Base64形式に変換されます。結果はそのままCSSやHTMLに埋め込めます。</p></div></section>
      <AffiliateSection slug="image-to-base64" category="開発ツール" />
      <RelatedTools currentSlug="image-to-base64" category="開発ツール" />
    </div>
  );
}
