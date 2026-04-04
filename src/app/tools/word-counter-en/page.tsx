"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "is", "it", "as", "be", "was", "are",
  "were", "been", "has", "have", "had", "do", "does", "did", "will",
  "would", "could", "should", "may", "might", "can", "not", "no", "i",
  "you", "he", "she", "we", "they", "this", "that", "these", "those",
  "if", "so", "up", "out", "about", "into", "then", "than", "also",
]);

function analyzeEnglish(text: string) {
  if (!text.trim()) return null;

  // Words
  const wordMatches = text.match(/\b[a-zA-Z'-]+\b/g) || [];
  const wordCount = wordMatches.length;

  // Characters
  const charCount = text.length;
  const charCountNoSpace = text.replace(/\s/g, "").length;

  // Sentences: split on . ! ?
  const sentences = text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  const sentenceCount = sentences.length;

  // Paragraphs: split on double newlines
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
  const paragraphCount = paragraphs.length;

  // Average word length
  const totalLetters = wordMatches.reduce((sum, w) => sum + w.replace(/['-]/g, "").length, 0);
  const avgWordLength = wordCount > 0 ? (totalLetters / wordCount).toFixed(1) : "0";

  // Top 5 most frequent words (excluding stop words)
  const freq: Record<string, number> = {};
  for (const w of wordMatches) {
    const lower = w.toLowerCase();
    if (!STOP_WORDS.has(lower) && lower.length > 1) {
      freq[lower] = (freq[lower] || 0) + 1;
    }
  }
  const topWords = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return {
    wordCount,
    charCount,
    charCountNoSpace,
    sentenceCount,
    paragraphCount,
    avgWordLength,
    topWords,
  };
}

export default function WordCounterEnPage() {
  const [text, setText] = useState("");

  const result = useMemo(() => analyzeEnglish(text), [text]);

  const stats = result
    ? [
        { label: "単語数", value: result.wordCount.toLocaleString() },
        { label: "文字数（スペース含む）", value: result.charCount.toLocaleString() },
        { label: "文字数（スペース除く）", value: result.charCountNoSpace.toLocaleString() },
        { label: "文章数", value: result.sentenceCount.toLocaleString() },
        { label: "段落数", value: result.paragraphCount.toLocaleString() },
        { label: "平均単語長", value: `${result.avgWordLength}文字` },
      ]
    : [];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>英語ワードカウンター</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">英語ワードカウンターツール</h1>
      <p className="text-muted mb-8">
        英文を貼り付けると単語数・文字数・文章数・段落数・平均単語長・頻出単語Top5を自動で計測します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">英文を入力・貼り付け</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your English text here..."
          rows={8}
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y bg-background"
        />

        {result && (
          <>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-background rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-primary">{s.value}</div>
                  <div className="text-xs text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {result.topWords.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">頻出単語 Top 5（機能語除く）</h3>
                <div className="space-y-2">
                  {result.topWords.map(([word, count], i) => {
                    const maxCount = result.topWords[0][1];
                    const pct = Math.round((count / maxCount) * 100);
                    return (
                      <div key={word} className="flex items-center gap-3 text-sm">
                        <span className="w-4 text-muted text-right shrink-0">{i + 1}</span>
                        <span className="w-32 font-mono truncate">{word}</span>
                        <div className="flex-1 bg-background rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="w-12 text-right text-muted shrink-0">{count}回</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">英語ワードカウンターツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアに英文を貼り付けるか入力すると、自動的に分析結果が表示されます。</p>
          <p>2. 単語数・文字数・文章数・段落数・平均単語長が一覧で確認できます。</p>
          <p>3. 頻出単語Top5ではthe・a・isなどの機能語を除いた実質的なキーワードを表示します。</p>
          <p>すべての処理はブラウザ内で行われ、入力テキストは外部に送信されません。</p>
        </div>
      </section>


      <AffiliateSection slug="word-counter-en" category="テキスト" />
      <RelatedTools currentSlug="word-counter-en" category="テキスト" />
    </div>
  );
}
