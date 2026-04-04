"use client";

import { useState } from "react";
import Link from "next/link";

interface WordEntry {
  word: string;
  count: number;
  percent: number;
}

function analyzeFrequency(text: string, stopwords: boolean, caseSensitive: boolean): WordEntry[] {
  const STOPWORDS = new Set([
    "the","a","an","is","are","was","were","be","been","being","have","has","had",
    "do","does","did","will","would","could","should","may","might","shall","can",
    "to","of","in","for","on","with","at","by","from","as","it","its","this","that",
    "and","or","but","not","so","yet","nor","both","either","neither","whether",
    "i","you","he","she","we","they","me","him","her","us","them","my","your","his",
    "our","their","what","which","who","when","where","how","if","then","than","just",
  ]);

  const normalized = caseSensitive ? text : text.toLowerCase();
  const tokens = normalized.match(/[a-zA-Z\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]+/g);

  if (!tokens || tokens.length === 0) return [];

  const freq: Record<string, number> = {};
  for (const token of tokens) {
    if (stopwords && STOPWORDS.has(token.toLowerCase())) continue;
    freq[token] = (freq[token] || 0) + 1;
  }

  const total = Object.values(freq).reduce((a, b) => a + b, 0);
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .map(([word, count]) => ({
      word,
      count,
      percent: total > 0 ? (count / total) * 100 : 0,
    }));
}

export default function WordFrequencyPage() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<WordEntry[]>([]);
  const [stopwords, setStopwords] = useState(true);
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [topN, setTopN] = useState(20);
  const [analyzed, setAnalyzed] = useState(false);

  const analyze = () => {
    if (!input.trim()) return;
    const res = analyzeFrequency(input, stopwords, caseSensitive);
    setResults(res);
    setAnalyzed(true);
  };

  const reset = () => {
    setInput("");
    setResults([]);
    setAnalyzed(false);
  };

  const displayed = results.slice(0, topN);
  const maxCount = displayed[0]?.count ?? 1;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>単語頻度分析ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">単語頻度分析ツール</h1>
      <p className="text-muted mb-8">
        テキスト中の単語の出現頻度を集計し、ランキングと棒グラフで表示します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">テキスト入力</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="分析したいテキストを入力してください（日本語・英語対応）"
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={6}
          />
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={stopwords}
              onChange={(e) => setStopwords(e.target.checked)}
              className="accent-primary"
            />
            英語ストップワードを除外
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
              className="accent-primary"
            />
            大文字・小文字を区別する
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            表示件数:
            <select
              value={topN}
              onChange={(e) => setTopN(Number(e.target.value))}
              className="border border-card-border rounded px-2 py-1 text-sm"
            >
              <option value={10}>10件</option>
              <option value={20}>20件</option>
              <option value={50}>50件</option>
              <option value={100}>100件</option>
            </select>
          </label>
        </div>

        <div className="flex gap-3">
          <button
            onClick={analyze}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            分析する
          </button>
          <button
            onClick={reset}
            className="border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>
      </div>

      {analyzed && results.length === 0 && (
        <p className="mt-6 text-sm text-muted">単語が見つかりませんでした。</p>
      )}

      {displayed.length > 0 && (
        <div className="mt-8">
          <h2 className="text-base font-bold mb-1">
            頻出単語ランキング（全 {results.length} 種、上位 {displayed.length} 件）
          </h2>
          <p className="text-xs text-muted mb-4">
            総単語数: {results.reduce((s, r) => s + r.count, 0)}語
          </p>
          <div className="space-y-2">
            {displayed.map((entry, i) => (
              <div key={entry.word} className="flex items-center gap-3">
                <span className="text-xs text-muted w-6 text-right shrink-0">{i + 1}</span>
                <span className="text-sm font-mono w-32 shrink-0 truncate" title={entry.word}>
                  {entry.word}
                </span>
                <div className="flex-1 bg-card-bg rounded-full overflow-hidden h-5 border border-card-border">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-300"
                    style={{ width: `${(entry.count / maxCount) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-mono w-16 text-right shrink-0">
                  {entry.count}回
                </span>
                <span className="text-xs text-muted w-14 text-right shrink-0">
                  {entry.percent.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">単語頻度分析ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアに分析したいテキストを入力します。日本語・英語に対応しています。</p>
          <p>2. 「分析する」ボタンを押すと、単語の出現頻度をランキングと棒グラフで表示します。</p>
          <p>3. 「英語ストップワードを除外」をオンにすると、the・a・isなど頻出の機能語を除外します。</p>
          <p>4. 「大文字・小文字を区別する」をオンにすると、WordとwordをW別の単語として数えます。</p>
          <p>5. 「表示件数」で上位何件を表示するか選択できます。</p>
        </div>
      </section>
    </div>
  );
}
