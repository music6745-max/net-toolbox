"use client";

import { useState } from "react";
import Link from "next/link";

function generateMetaTags(
  title: string,
  description: string,
  keywords: string,
  url: string,
  image: string,
  siteName: string,
  twitterCard: string
): string {
  const lines: string[] = [];

  lines.push("<!-- 基本メタタグ -->");
  if (title) lines.push(`<title>${title}</title>`);
  if (description) lines.push(`<meta name="description" content="${description}">`);
  if (keywords) lines.push(`<meta name="keywords" content="${keywords}">`);
  lines.push(`<meta name="robots" content="index, follow">`);
  lines.push(`<meta name="viewport" content="width=device-width, initial-scale=1.0">`);
  lines.push(`<meta charset="UTF-8">`);

  if (title || description || url || image || siteName) {
    lines.push("");
    lines.push("<!-- OGP (Open Graph Protocol) -->");
    if (title) lines.push(`<meta property="og:title" content="${title}">`);
    if (description) lines.push(`<meta property="og:description" content="${description}">`);
    if (url) lines.push(`<meta property="og:url" content="${url}">`);
    if (image) lines.push(`<meta property="og:image" content="${image}">`);
    if (siteName) lines.push(`<meta property="og:site_name" content="${siteName}">`);
    lines.push(`<meta property="og:type" content="website">`);
    lines.push(`<meta property="og:locale" content="ja_JP">`);
  }

  if (title || description || image) {
    lines.push("");
    lines.push("<!-- Twitter Card -->");
    lines.push(`<meta name="twitter:card" content="${twitterCard}">`);
    if (title) lines.push(`<meta name="twitter:title" content="${title}">`);
    if (description) lines.push(`<meta name="twitter:description" content="${description}">`);
    if (image) lines.push(`<meta name="twitter:image" content="${image}">`);
  }

  return lines.join("\n");
}

export default function MetaTagGeneratorPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [siteName, setSiteName] = useState("");
  const [twitterCard, setTwitterCard] = useState("summary_large_image");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setResult(generateMetaTags(title, description, keywords, url, image, siteName, twitterCard));
  };

  const copy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const titleLength = title.length;
  const descLength = description.length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>メタタグ生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">メタタグ生成ツール</h1>
      <p className="text-muted mb-8">
        タイトル・説明・キーワードを入力してSEO用のメタタグとOGPタグを生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">
            タイトル
            <span className={`ml-2 text-xs font-normal ${titleLength > 60 ? "text-red-500" : "text-muted"}`}>
              {titleLength}/60文字（推奨）
            </span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ページのタイトル"
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            説明文 (description)
            <span className={`ml-2 text-xs font-normal ${descLength > 160 ? "text-red-500" : "text-muted"}`}>
              {descLength}/160文字（推奨）
            </span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="ページの説明文（検索結果に表示される）"
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">キーワード（カンマ区切り）</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="キーワード1, キーワード2, キーワード3"
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">ページURL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/page"
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">OGP画像URL</label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/ogp.png"
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">サイト名</label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              placeholder="My Website"
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Twitter Card タイプ</label>
            <select
              value={twitterCard}
              onChange={(e) => setTwitterCard(e.target.value)}
              className="w-full border border-card-border rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
            >
              <option value="summary_large_image">summary_large_image（大画像）</option>
              <option value="summary">summary（小画像）</option>
              <option value="app">app</option>
              <option value="player">player</option>
            </select>
          </div>
        </div>

        <button
          onClick={generate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          メタタグを生成
        </button>

        {result && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">生成されたメタタグ</span>
              <button
                onClick={copy}
                className="text-xs text-primary hover:text-primary-hover font-medium border border-card-border rounded px-3 py-1"
              >
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <textarea
              readOnly
              value={result}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-xs font-mono bg-background resize-none"
              rows={18}
            />
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>各フィールドに情報を入力し「メタタグを生成」をクリックするとHTMLコードが生成されます。</p>
          <p>タイトルは60文字以内、説明文は160文字以内が検索結果に表示されやすい目安です。</p>
          <p>生成したタグをHTMLファイルの&lt;head&gt;内にコピーして使用してください。</p>
          <p>OGP画像は1200×630px（横長）が推奨サイズです。</p>
        </div>
      </section>
    </div>
  );
}
