"use client";

import { useState } from "react";
import Link from "next/link";

export default function TwitterPreviewPage() {
  const [cardType, setCardType] = useState<"summary" | "summary_large_image">("summary_large_image");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [site, setSite] = useState("");
  const [imageError, setImageError] = useState(false);

  const hasContent = title || description || imageUrl;

  const handleImageUrlChange = (val: string) => {
    setImageUrl(val);
    setImageError(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>Twitter Cardプレビュー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Twitter Cardプレビューツール</h1>
      <p className="text-muted mb-8">
        Twitter Card（X Card）のメタ情報を入力して、X/Twitterでシェアされた際の表示プレビューを確認します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">カードタイプ</label>
          <div className="flex gap-3">
            <button
              onClick={() => setCardType("summary_large_image")}
              className={`flex-1 border rounded-lg py-2.5 text-sm font-medium transition-colors ${cardType === "summary_large_image" ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary text-muted"}`}
            >
              summary_large_image
            </button>
            <button
              onClick={() => setCardType("summary")}
              className={`flex-1 border rounded-lg py-2.5 text-sm font-medium transition-colors ${cardType === "summary" ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary text-muted"}`}
            >
              summary
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">twitter:title（タイトル）</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="カードのタイトルを入力"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          <p className="text-xs text-muted mt-1">{title.length} / 70文字（推奨）</p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">twitter:description（説明）</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="カードの説明文を入力"
            rows={3}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          />
          <p className="text-xs text-muted mt-1">{description.length} / 200文字（推奨）</p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">twitter:image（画像URL）</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => handleImageUrlChange(e.target.value)}
            placeholder="https://example.com/image.png"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">twitter:site（@アカウント）</label>
          <input
            type="text"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            placeholder="@yoursite（任意）"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
      </div>

      {hasContent && (
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-base font-bold mb-3">X / Twitter プレビュー</h2>

            {cardType === "summary_large_image" ? (
              <div className="border border-gray-200 rounded-2xl overflow-hidden max-w-[500px] bg-white">
                {imageUrl && !imageError ? (
                  <img
                    src={imageUrl}
                    alt="Card画像"
                    className="w-full object-cover"
                    style={{ aspectRatio: "2/1" }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm" style={{ aspectRatio: "2/1" }}>
                    {imageUrl && imageError ? "画像を読み込めません" : "画像なし（1200×600px推奨）"}
                  </div>
                )}
                <div className="p-3">
                  <p className="text-[15px] font-bold text-gray-900 line-clamp-1">{title || "タイトルが入ります"}</p>
                  {description && <p className="text-[13px] text-gray-500 mt-0.5 line-clamp-2">{description}</p>}
                  {site && <p className="text-[13px] text-gray-400 mt-1">{site}</p>}
                </div>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-2xl overflow-hidden max-w-[500px] bg-white flex">
                {imageUrl && !imageError ? (
                  <img
                    src={imageUrl}
                    alt="Card画像"
                    className="w-24 h-24 object-cover flex-shrink-0"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-400 text-xs text-center px-1">
                    {imageUrl && imageError ? "エラー" : "画像なし\n120×120px"}
                  </div>
                )}
                <div className="p-3 flex-1 min-w-0">
                  <p className="text-[15px] font-bold text-gray-900 line-clamp-1">{title || "タイトルが入ります"}</p>
                  {description && <p className="text-[13px] text-gray-500 mt-0.5 line-clamp-2">{description}</p>}
                  {site && <p className="text-[13px] text-gray-400 mt-1">{site}</p>}
                </div>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-base font-bold mb-3">生成されるメタタグ</h2>
            <div className="bg-card-bg border border-card-border rounded-xl p-4">
              <pre className="text-xs font-mono text-muted whitespace-pre-wrap break-all leading-relaxed">
{`<!-- Twitter Card -->
<meta name="twitter:card" content="${cardType}" />
${title ? `<meta name="twitter:title" content="${title}" />` : ""}
${description ? `<meta name="twitter:description" content="${description}" />` : ""}
${imageUrl ? `<meta name="twitter:image" content="${imageUrl}" />` : ""}
${site ? `<meta name="twitter:site" content="${site}" />` : ""}`}
              </pre>
              <button
                onClick={() => {
                  const tags = [
                    "<!-- Twitter Card -->",
                    `<meta name="twitter:card" content="${cardType}" />`,
                    title ? `<meta name="twitter:title" content="${title}" />` : "",
                    description ? `<meta name="twitter:description" content="${description}" />` : "",
                    imageUrl ? `<meta name="twitter:image" content="${imageUrl}" />` : "",
                    site ? `<meta name="twitter:site" content="${site}" />` : "",
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
          <p>1. カードタイプを選択します。summary_large_imageは大きな画像、summaryは小さな正方形画像が表示されます。</p>
          <p>2. タイトル・説明文・画像URLを入力すると、リアルタイムでプレビューが表示されます。</p>
          <p>3. summary_large_imageの推奨画像サイズは1200×600px（2:1比率）です。</p>
          <p>4. 生成されたメタタグをHTMLの&lt;head&gt;内に貼り付けてご利用ください。</p>
        </div>
      </section>
    </div>
  );
}
