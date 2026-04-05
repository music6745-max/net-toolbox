"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function TwitterCardPreviewPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [url, setUrl] = useState("");
  const [cardType, setCardType] = useState("summary_large_image");

  const domain = url ? (() => { try { return new URL(url).hostname; } catch { return "example.com"; } })() : "example.com";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>Twitterカードプレビュー</span></nav>
      <h1 className="text-2xl font-bold mb-2">Twitterカードプレビュー</h1>
      <p className="text-muted mb-8">Twitterカードの表示をプレビューできます。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-1">カードタイプ</label>
          <select value={cardType} onChange={e => setCardType(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent">
            <option value="summary">summary</option>
            <option value="summary_large_image">summary_large_image</option>
          </select>
        </div>
        <div><label className="block text-sm font-medium mb-1">タイトル</label><input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="ページタイトル" /></div>
        <div><label className="block text-sm font-medium mb-1">説明文</label><textarea value={description} onChange={e => setDescription(e.target.value)} rows={2} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="ページの説明" /></div>
        <div><label className="block text-sm font-medium mb-1">画像URL</label><input type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="https://example.com/image.png" /></div>
        <div><label className="block text-sm font-medium mb-1">ページURL</label><input type="url" value={url} onChange={e => setUrl(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" placeholder="https://example.com" /></div>

        <div className="mt-6">
          <h3 className="text-sm font-medium mb-3">プレビュー</h3>
          <div className="border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden max-w-[500px] mx-auto">
            {cardType === "summary_large_image" && imageUrl && (
              <div className="aspect-[2/1] bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
            )}
            <div className={cardType === "summary" ? "flex" : ""}>
              {cardType === "summary" && imageUrl && (
                <div className="w-[125px] h-[125px] flex-shrink-0 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img src={imageUrl} alt="" className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </div>
              )}
              <div className="p-3 flex-1">
                <p className="text-xs text-gray-500">{domain}</p>
                <p className="font-medium text-sm mt-0.5 line-clamp-1">{title || "タイトル"}</p>
                <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{description || "説明文"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>タイトル、説明、画像URLを入力すると、Twitterカードのプレビューがリアルタイムで表示されます。</p></div></section>
      <AffiliateSection slug="twitter-card-preview" category="開発ツール" />
      <RelatedTools currentSlug="twitter-card-preview" category="開発ツール" />
    </div>
  );
}
