"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function MetaTagGeneratorPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [ogImage, setOgImage] = useState("");
  const [url, setUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const [twitterCard, setTwitterCard] = useState("summary_large_image");

  const meta = [
    title && '<meta charset="UTF-8">',
    title && '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    title && '<title>' + title + '</title>',
    description && '<meta name="description" content="' + description + '">',
    keywords && '<meta name="keywords" content="' + keywords + '">',
    title && '<meta property="og:title" content="' + title + '">',
    description && '<meta property="og:description" content="' + description + '">',
    url && '<meta property="og:url" content="' + url + '">',
    siteName && '<meta property="og:site_name" content="' + siteName + '">',
    ogImage && '<meta property="og:image" content="' + ogImage + '">',
    '<meta property="og:type" content="website">',
    '<meta name="twitter:card" content="' + twitterCard + '">',
    title && '<meta name="twitter:title" content="' + title + '">',
    description && '<meta name="twitter:description" content="' + description + '">',
    ogImage && '<meta name="twitter:image" content="' + ogImage + '">',
  ].filter(Boolean).join("\n");

  const copy = () => { navigator.clipboard.writeText(meta); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>メタタグ生成</span></nav>
      <h1 className="text-2xl font-bold mb-2">メタタグ生成ツール</h1>
      <p className="text-muted mb-8">SEO・OGP用のメタタグを簡単に生成します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-1">ページタイトル</label><input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="サイトのタイトル" /></div>
        <div><label className="block text-sm font-medium mb-1">説明文</label><textarea value={description} onChange={e => setDescription(e.target.value)} rows={2} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="ページの説明（120文字以内推奨）" /></div>
        <div><label className="block text-sm font-medium mb-1">キーワード（カンマ区切り）</label><input type="text" value={keywords} onChange={e => setKeywords(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="SEO, メタタグ, ツール" /></div>
        <div><label className="block text-sm font-medium mb-1">URL</label><input type="url" value={url} onChange={e => setUrl(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="https://example.com" /></div>
        <div><label className="block text-sm font-medium mb-1">サイト名</label><input type="text" value={siteName} onChange={e => setSiteName(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="サイト名" /></div>
        <div><label className="block text-sm font-medium mb-1">OG画像URL</label><input type="url" value={ogImage} onChange={e => setOgImage(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="https://example.com/og.png" /></div>
        <div><label className="block text-sm font-medium mb-1">Twitterカードタイプ</label>
          <select value={twitterCard} onChange={e => setTwitterCard(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent">
            <option value="summary">summary</option>
            <option value="summary_large_image">summary_large_image</option>
          </select>
        </div>
        {meta && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium">生成されたメタタグ</label>
              <button onClick={copy} className="text-xs bg-card-bg border border-card-border rounded px-2 py-1 hover:opacity-80">コピー</button>
            </div>
            <pre className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-xs overflow-x-auto whitespace-pre-wrap">{meta}</pre>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>各項目を入力すると、リアルタイムでメタタグが生成されます。コピーしてHTMLのhead内に貼り付けてください。</p></div></section>
      <AffiliateSection slug="meta-tag-generator" category="開発ツール" />
      <RelatedTools currentSlug="meta-tag-generator" category="開発ツール" />
    </div>
  );
}
