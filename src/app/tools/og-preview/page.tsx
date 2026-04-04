"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function OgPreviewPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const [imageError, setImageError] = useState(false);

  const hasContent = title || description || imageUrl;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>OGPプレビュー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">OGPプレビューツール</h1>
      <p className="text-muted mb-8">
        OGPのタイトル・説明・画像URLを入力して、FacebookやLINEでシェアされた際のプレビューを確認します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">og:title（タイトル）</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ページのタイトルを入力"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">og:description（説明）</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="ページの説明文を入力"
            rows={3}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">og:image（画像URL）</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => { setImageUrl(e.target.value); setImageError(false); }}
            placeholder="https://example.com/image.png"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">og:site_name（サイト名）</label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            placeholder="サイト名を入力（任意）"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
      </div>

      {hasContent && (
        <div className="mt-8 space-y-6">
          {/* Facebook preview */}
          <div>
            <h2 className="text-base font-bold mb-3">Facebook プレビュー</h2>
            <div className="border border-[#dddfe2] rounded-lg overflow-hidden max-w-[500px] bg-white">
              {imageUrl && !imageError ? (
                <img
                  src={imageUrl}
                  alt="OGP画像"
                  className="w-full object-cover"
                  style={{ aspectRatio: "1.91/1" }}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm" style={{ aspectRatio: "1.91/1" }}>
                  {imageUrl && imageError ? "画像を読み込めません" : "画像なし（1200×630px推奨）"}
                </div>
              )}
              <div className="bg-[#f2f3f4] px-3 py-2 border-t border-[#dddfe2]">
                {siteName && <p className="text-[#606770] text-xs uppercase tracking-wide mb-0.5">{siteName}</p>}
                <p className="text-[#1d2129] text-sm font-semibold leading-snug line-clamp-2">{title || "タイトルが入ります"}</p>
                {description && <p className="text-[#606770] text-xs mt-0.5 line-clamp-1">{description}</p>}
              </div>
            </div>
          </div>

          {/* LINE preview */}
          <div>
            <h2 className="text-base font-bold mb-3">LINE プレビュー</h2>
            <div className="inline-flex items-start gap-3 bg-white border border-gray-200 rounded-2xl p-3 max-w-[360px] shadow-sm">
              {imageUrl && !imageError ? (
                <img
                  src={imageUrl}
                  alt="OGP画像"
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-400 text-xs text-center px-1">
                  {imageUrl && imageError ? "エラー" : "画像なし"}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-900 line-clamp-2 leading-snug">{title || "タイトルが入ります"}</p>
                {description && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>}
                {siteName && <p className="text-xs text-green-500 mt-1">{siteName}</p>}
              </div>
            </div>
          </div>

          {/* Meta tag output */}
          <div>
            <h2 className="text-base font-bold mb-3">生成されるメタタグ</h2>
            <div className="bg-card-bg border border-card-border rounded-xl p-4">
              <pre className="text-xs font-mono text-muted whitespace-pre-wrap break-all leading-relaxed">
{`<!-- Open Graph -->
${title ? `<meta property="og:title" content="${title}" />` : ""}
${description ? `<meta property="og:description" content="${description}" />` : ""}
${imageUrl ? `<meta property="og:image" content="${imageUrl}" />` : ""}
${siteName ? `<meta property="og:site_name" content="${siteName}" />` : ""}
<meta property="og:type" content="website" />`}
              </pre>
              <button
                onClick={() => {
                  const tags = [
                    "<!-- Open Graph -->",
                    title ? `<meta property="og:title" content="${title}" />` : "",
                    description ? `<meta property="og:description" content="${description}" />` : "",
                    imageUrl ? `<meta property="og:image" content="${imageUrl}" />` : "",
                    siteName ? `<meta property="og:site_name" content="${siteName}" />` : "",
                    `<meta property="og:type" content="website" />`,
                  ].filter(Boolean).join("\n");
                  navigator.clipboard.writeText(tags);
                }}
                className="mt-3 text-sm text-primary hover:text-primary-hover font-medium"
              >
                コピー
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. OGPのタイトル・説明文・画像URLをそれぞれ入力します。</p>
          <p>2. FacebookとLINEでのシェアプレビューがリアルタイムで表示されます。</p>
          <p>3. 画像は1200×630px（比率1.91:1）が推奨サイズです。</p>
          <p>4. 生成されたメタタグをHTMLの&lt;head&gt;内に貼り付けてご利用ください。</p>
        </div>
      </section>


      <AffiliateSection slug="og-preview" category="開発ツール" />
      <RelatedTools currentSlug="og-preview" category="開発ツール" />
    </div>
  );
}
