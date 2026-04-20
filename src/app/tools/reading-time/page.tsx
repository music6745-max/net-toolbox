"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="読了時間計算"
        howTo={[
          "テキストエリアに文章を貼り付ける",
          "日本語500文字/分・英語200語/分で読了時間が自動計算される",
          "文字数・単語数も同時に確認できる",
          "ブログ記事冒頭の「約◯分で読めます」表示の参考にする",
        ]}
        faqs={[
          {
            question: "平均的な読速はどれくらい？",
            answer: "日本語：400〜600文字/分（成人）、英語：200〜250語/分。ゆっくり読む場合は300文字/分、速読トレーニング済みは1000文字/分以上。このツールは中間値（500文字/分・200語/分）で計算しているため、一般読者の平均的な読了時間の目安になります。",
          },
          {
            question: "ブログ記事の最適な文字数は？",
            answer: "SEO観点では1記事2000〜5000文字（読了時間4〜10分）が理想。1000文字以下は薄い記事としてGoogle評価低め、10000文字以上は離脱率上昇。2000文字（読了約4分）・3000文字（約6分）・5000文字（約10分）が読者の継続率と SEO 効果のバランスが良い長さです。",
          },
          {
            question: "プレゼン原稿の時間計算は？",
            answer: "プレゼン時の話速は300〜400文字/分（読書より遅い）。10分プレゼンなら原稿3000〜4000文字、20分なら6000〜8000文字が目安。スライド枚数は1分あたり0.5〜1枚（10分プレゼン＝5〜10枚）、原稿＋スライド＋質疑応答の時間配分を事前に計画しましょう。",
          },
          {
            question: "読了時間表示の効果は？",
            answer: "ブログ記事冒頭の「約◯分で読めます」表示は、①読者の離脱率を10〜15%低減②記事の信頼性向上③SEO観点でユーザー体験プラス評価。特にスマホ読者は「長い記事は後で」で離脱しやすいため、短時間（3〜5分）の記事は明記することで読了率UPします。",
          },
        ]}
      />
      <AffiliateSection slug="reading-time" category="テキスト" />
      <RelatedTools currentSlug="reading-time" category="テキスト" />
    </div>
  );
}
