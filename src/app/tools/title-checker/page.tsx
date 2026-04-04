"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const RECOMMENDED_MAX = 60;
const PIXEL_LIMIT = 580; // approximate px limit Google uses
// rough approximation: average char ~7px for Google's font
function estimatePx(text: string) {
  return text.length * 7;
}

export default function TitleCheckerPage() {
  const [title, setTitle] = useState("ページタイトルのサンプルテキストをここに入力してください");
  const [url, setUrl] = useState("https://example.com/page");

  const len = title.length;
  const px = estimatePx(title);
  const overLen = len > RECOMMENDED_MAX;
  const overPx = px > PIXEL_LIMIT;
  const status = overLen || overPx ? "over" : len >= 30 ? "good" : "short";

  const statusColor = { good: "text-green-600", short: "text-yellow-600", over: "text-red-500" }[status];
  const statusLabel = { good: "適切な長さです", short: "短すぎる可能性があります", over: "長すぎる可能性があります" }[status];

  const displayTitle = overPx ? title.slice(0, Math.floor(PIXEL_LIMIT / 7)) + "…" : title;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>タイトルタグチェッカー</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">タイトルタグチェッカー</h1>
      <p className="text-muted mb-8">ページタイトルの長さをチェックし、Google検索結果でのプレビューを確認します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">ページタイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ページタイトルを入力..."
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">URL（プレビュー用）</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/page"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="bg-background rounded-lg px-4 py-3 text-center min-w-[90px]">
            <div className={`text-2xl font-bold ${statusColor}`}>{len}</div>
            <div className="text-xs text-muted mt-1">文字数</div>
          </div>
          <div className="bg-background rounded-lg px-4 py-3 text-center min-w-[90px]">
            <div className={`text-2xl font-bold ${statusColor}`}>~{px}px</div>
            <div className="text-xs text-muted mt-1">推定幅</div>
          </div>
          <div className={`text-sm font-medium ${statusColor}`}>{statusLabel}</div>
        </div>

        <div>
          <div className="text-xs text-muted mb-2 flex justify-between">
            <span>0</span><span className="text-primary font-medium">推奨上限 {RECOMMENDED_MAX}文字</span>
          </div>
          <div className="h-2 bg-background rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${overLen ? "bg-red-500" : status === "short" ? "bg-yellow-400" : "bg-green-500"}`}
              style={{ width: `${Math.min((len / RECOMMENDED_MAX) * 100, 100)}%` }}
            />
          </div>
        </div>

        <div>
          <div className="text-xs text-muted mb-3">Google検索結果プレビュー</div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 font-sans">
            <div className="text-xs text-gray-500 truncate">{url}</div>
            <div className="text-[#1a0dab] text-lg font-medium leading-snug mt-0.5 truncate hover:underline cursor-pointer">
              {displayTitle || "（タイトルなし）"}
            </div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>ページタイトルを入力すると、文字数・推定ピクセル幅・Googleプレビューが表示されます。</p>
          <p>Googleは約580px（半角60文字程度）を超えるタイトルは省略して表示します。</p>
          <p>タイトルは主要キーワードを含み、30〜60文字程度に収めることが推奨されています。</p>
        </div>
      </section>


      <AffiliateSection slug="title-checker" category="開発ツール" />
      <RelatedTools currentSlug="title-checker" category="開発ツール" />
    </div>
  );
}
