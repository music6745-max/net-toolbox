"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const JP_READING_SPEED = 500; // chars per minute
const EN_READING_SPEED = 200; // words per minute
const SPEAKING_SPEED_JP = 300; // chars per minute
const SPEAKING_SPEED_EN = 130; // words per minute

function analyzeText(text: string) {
  if (!text.trim()) return null;

  const charCount = text.length;
  const charCountNoSpace = text.replace(/\s/g, "").length;

  // Word count (English words)
  const words = text.trim().split(/\s+/).filter((w) => w.length > 0);
  const wordCount = words.length;

  // Detect if text is predominantly Japanese
  const jpChars = (text.match(/[\u3000-\u9FFF\uF900-\uFAFF]/g) || []).length;
  const isJapanese = jpChars > charCountNoSpace * 0.3;

  let readingMins: number;
  let speakingMins: number;

  if (isJapanese) {
    readingMins = charCountNoSpace / JP_READING_SPEED;
    speakingMins = charCountNoSpace / SPEAKING_SPEED_JP;
  } else {
    readingMins = wordCount / EN_READING_SPEED;
    speakingMins = wordCount / SPEAKING_SPEED_EN;
  }

  const formatTime = (mins: number) => {
    if (mins < 1) return "1分未満";
    const m = Math.round(mins);
    if (m < 60) return `約${m}分`;
    const h = Math.floor(m / 60);
    const rem = m % 60;
    return rem > 0 ? `約${h}時間${rem}分` : `約${h}時間`;
  };

  return {
    charCount,
    charCountNoSpace,
    wordCount,
    readingTime: formatTime(readingMins),
    speakingTime: formatTime(speakingMins),
    isJapanese,
  };
}

export default function ReadingTimePage() {
  const [text, setText] = useState("");

  const result = useMemo(() => analyzeText(text), [text]);

  const stats = result
    ? [
        { label: "文字数（スペース含む）", value: result.charCount.toLocaleString() },
        { label: "文字数（スペース除く）", value: result.charCountNoSpace.toLocaleString() },
        { label: "単語数", value: result.wordCount.toLocaleString() },
        { label: "読了時間", value: result.readingTime },
        { label: "音読時間", value: result.speakingTime },
      ]
    : [];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>読了時間計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">読了時間計算ツール</h1>
      <p className="text-muted mb-8">
        テキストを貼り付けると読了時間・音読時間・文字数・単語数を自動で計算します。日本語・英語の両方に対応しています。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">テキストを入力・貼り付け</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="ここにテキストを貼り付けてください..."
          rows={8}
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y bg-background"
        />

        {result && (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-background rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-primary">{s.value}</div>
                <div className="text-xs text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {result && (
          <p className="mt-4 text-xs text-muted">
            ※ 読了速度の基準：
            {result.isJapanese
              ? `日本語 ${JP_READING_SPEED}文字/分`
              : `英語 ${EN_READING_SPEED}単語/分`}
            を使用しています。
          </p>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">読了時間計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアに文章を貼り付けるか入力すると、自動的に分析結果が表示されます。</p>
          <p>2. 日本語テキストは約500文字/分、英語テキストは約200単語/分の速度を基準に計算します。</p>
          <p>3. 音読時間はそれぞれ約300文字/分（日本語）、約130単語/分（英語）で計算しています。</p>
          <p>ブログ記事・プレゼン原稿・レポートの目安時間の確認にご活用ください。</p>
        </div>
      </section>
    </div>
  );
}
