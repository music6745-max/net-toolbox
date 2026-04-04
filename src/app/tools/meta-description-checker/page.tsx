"use client";
import { useState } from "react";
import Link from "next/link";

const MIN = 120;
const MAX = 160;

export default function MetaDescriptionCheckerPage() {
  const [title, setTitle] = useState("ページタイトルのサンプル");
  const [url, setUrl] = useState("https://example.com/page");
  const [desc, setDesc] = useState("メタディスクリプションのサンプルテキストです。ここに説明文を入力するとGoogle検索結果でどのように表示されるか確認できます。");

  const len = desc.length;
  const status = len < MIN ? "short" : len > MAX ? "over" : "good";
  const statusColor = { good: "text-green-600", short: "text-yellow-600", over: "text-red-500" }[status];
  const statusLabel = { good: "推奨範囲内です", short: "短すぎる可能性があります（推奨: 120〜160字）", over: "長すぎる可能性があります（推奨: 120〜160字）" }[status];

  const displayDesc = len > MAX ? desc.slice(0, MAX) + "…" : desc;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>メタディスクリプションチェッカー</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">メタディスクリプションチェッカー</h1>
      <p className="text-muted mb-8">メタディスクリプションの文字数をチェックし、Google検索結果でのプレビューを確認します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">ページタイトル（プレビュー用）</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">URL（プレビュー用）</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">メタディスクリプション</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={4}
            placeholder="メタディスクリプションを入力..."
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="bg-background rounded-lg px-4 py-3 text-center min-w-[90px]">
            <div className={`text-2xl font-bold ${statusColor}`}>{len}</div>
            <div className="text-xs text-muted mt-1">文字数</div>
          </div>
          <div className={`text-sm font-medium ${statusColor}`}>{statusLabel}</div>
        </div>

        <div>
          <div className="text-xs text-muted mb-2 flex justify-between">
            <span>0</span>
            <span>120</span>
            <span className="text-primary font-medium">推奨上限 160字</span>
          </div>
          <div className="h-2 bg-background rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${status === "over" ? "bg-red-500" : status === "short" ? "bg-yellow-400" : "bg-green-500"}`}
              style={{ width: `${Math.min((len / MAX) * 100, 100)}%` }}
            />
          </div>
        </div>

        <div>
          <div className="text-xs text-muted mb-3">Google検索結果プレビュー</div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 font-sans">
            <div className="text-xs text-gray-500 truncate">{url}</div>
            <div className="text-[#1a0dab] text-lg font-medium leading-snug mt-0.5 hover:underline cursor-pointer">{title || "（タイトルなし）"}</div>
            <div className="text-sm text-gray-600 mt-1 leading-snug line-clamp-3">{displayDesc || "（説明文なし）"}</div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>メタディスクリプションを入力すると、文字数とGoogleプレビューが表示されます。</p>
          <p>推奨文字数は120〜160文字です。短すぎると情報が不足し、長すぎると検索結果で省略されます。</p>
          <p>主要キーワードを自然に含め、ユーザーがクリックしたくなる説明文を心がけましょう。</p>
        </div>
      </section>
    </div>
  );
}
