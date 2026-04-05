"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function ReadingTimePage() {
  const [text, setText] = useState("");
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const jpMinutes = charsNoSpace / 500;
  const enMinutes = words / 200;
  const minutes = Math.max(jpMinutes, enMinutes);
  const readMin = Math.ceil(minutes);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>読了時間計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">読了時間計算ツール</h1>
      <p className="text-muted mb-8">文章を貼り付けると、読み終わるまでの時間を推定します。ブログ記事やプレゼン原稿の時間管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">テキストを入力</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={8} placeholder="文章を貼り付けてください..." className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {[
            { label: "読了時間", value: text ? `約${readMin}分` : "—" },
            { label: "文字数", value: chars.toLocaleString() },
            { label: "文字数(空白除く)", value: charsNoSpace.toLocaleString() },
            { label: "単語数", value: words.toLocaleString() },
          ].map((s) => (
            <div key={s.label} className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">読了時間計算の使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>テキストエリアに文章を貼り付けると、日本語は約500文字/分、英語は約200語/分の速度で読了時間を計算します。</p><p>ブログ記事の冒頭に「この記事は約○分で読めます」と表示する際の参考にお使いください。</p></div></section>
      <AffiliateSection slug="reading-time" category="テキスト" />
      <RelatedTools currentSlug="reading-time" category="テキスト" />
    </div>
  );
}
