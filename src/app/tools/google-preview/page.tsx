"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;

function truncate(text: string, limit: number) {
  return text.length > limit ? text.slice(0, limit) + "…" : text;
}

function formatUrl(rawUrl: string) {
  try {
    const u = new URL(rawUrl.startsWith("http") ? rawUrl : "https://" + rawUrl);
    const parts = [u.hostname];
    const segments = u.pathname.split("/").filter(Boolean);
    return parts.concat(segments).join(" › ");
  } catch {
    return rawUrl;
  }
}

export default function GooglePreviewPage() {
  const [title, setTitle] = useState("ページタイトルのサンプル - サイト名");
  const [url, setUrl] = useState("https://example.com/sample-page");
  const [desc, setDesc] = useState("このページの内容を説明するメタディスクリプションです。ユーザーがクリックしたくなるような魅力的な説明文を入力してください。");
  const [mode, setMode] = useState<"desktop" | "mobile">("desktop");

  const displayTitle = truncate(title, TITLE_LIMIT);
  const displayDesc = truncate(desc, DESC_LIMIT);
  const displayUrl = formatUrl(url);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>Google検索結果プレビュー</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">Google検索結果プレビュー</h1>
      <p className="text-muted mb-8">タイトル・URL・説明文を入力してGoogle検索結果での表示を確認します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">
            ページタイトル
            <span className={`ml-2 text-xs ${title.length > TITLE_LIMIT ? "text-red-500" : "text-muted"}`}>{title.length}/{TITLE_LIMIT}</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/page"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            メタディスクリプション
            <span className={`ml-2 text-xs ${desc.length > DESC_LIMIT ? "text-red-500" : desc.length < 120 ? "text-yellow-600" : "text-green-600"}`}>{desc.length}/{DESC_LIMIT}</span>
          </label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={3}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
        </div>

        <div className="flex gap-2">
          <button onClick={() => setMode("desktop")} className={`px-4 py-1.5 text-sm rounded-lg border transition-colors ${mode === "desktop" ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary"}`}>
            デスクトップ
          </button>
          <button onClick={() => setMode("mobile")} className={`px-4 py-1.5 text-sm rounded-lg border transition-colors ${mode === "mobile" ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary"}`}>
            モバイル
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-[#f8f9fa] border-b border-gray-200 px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-300" />
              <div className="w-3 h-3 rounded-full bg-gray-300" />
              <div className="w-3 h-3 rounded-full bg-gray-300" />
            </div>
            <div className="flex-1 bg-white rounded border border-gray-200 px-3 py-1 text-xs text-gray-500 truncate">
              {url || "https://example.com"}
            </div>
          </div>

          <div className={`p-6 ${mode === "mobile" ? "max-w-sm mx-auto" : ""}`}>
            <div className="mb-2 flex items-center gap-1">
              <div className="w-5 h-5 bg-gray-200 rounded-full" />
              <div>
                <div className="text-xs text-gray-700 font-medium leading-none">{url.replace(/https?:\/\//, "").split("/")[0] || "example.com"}</div>
                <div className="text-xs text-gray-500 leading-none mt-0.5 truncate max-w-[300px]">{displayUrl}</div>
              </div>
            </div>
            <div className="text-[#1a0dab] text-xl font-normal leading-snug hover:underline cursor-pointer mb-1 line-clamp-2">
              {displayTitle || "（タイトルなし）"}
            </div>
            <div className="text-sm text-[#4d5156] leading-snug line-clamp-3">
              {displayDesc || "（説明文なし）"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-background rounded-lg p-3">
            <div className="text-xs text-muted mb-1">タイトル文字数</div>
            <div className={`font-bold ${title.length > TITLE_LIMIT ? "text-red-500" : "text-primary"}`}>{title.length} / {TITLE_LIMIT}</div>
          </div>
          <div className="bg-background rounded-lg p-3">
            <div className="text-xs text-muted mb-1">説明文文字数</div>
            <div className={`font-bold ${desc.length > DESC_LIMIT ? "text-red-500" : desc.length < 120 ? "text-yellow-600" : "text-green-600"}`}>{desc.length} / {DESC_LIMIT}</div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>タイトル・URL・メタディスクリプションを入力すると、Google検索結果でどのように表示されるかプレビューできます。</p>
          <p>デスクトップとモバイルの表示を切り替えて確認できます。</p>
          <p>タイトルは60文字以内、説明文は120〜160文字が推奨です。</p>
        </div>
      </section>


      <AffiliateSection slug="google-preview" category="開発ツール" />
      <RelatedTools currentSlug="google-preview" category="開発ツール" />
    </div>
  );
}
