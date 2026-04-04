"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

function similarity(a: string, b: string): number {
  if (a === b) return 100;
  if (a.length === 0 && b.length === 0) return 100;
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 100;
  const dist = levenshtein(a, b);
  return Math.round(((maxLen - dist) / maxLen) * 100);
}

export default function TextSimilarityPage() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    setResult(similarity(textA, textB));
  };

  const getColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>テキスト類似度計算ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">テキスト類似度計算ツール</h1>
      <p className="text-muted mb-8">
        2つのテキストを比較し、どれくらい似ているかをパーセントで表示します。編集距離（レーベンシュタイン距離）を使用します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-2">テキスト A</label>
            <textarea
              value={textA}
              onChange={(e) => setTextA(e.target.value)}
              placeholder="比較するテキスト1を入力..."
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
              rows={8}
            />
            <p className="text-xs text-muted mt-1">{textA.length} 文字</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">テキスト B</label>
            <textarea
              value={textB}
              onChange={(e) => setTextB(e.target.value)}
              placeholder="比較するテキスト2を入力..."
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
              rows={8}
            />
            <p className="text-xs text-muted mt-1">{textB.length} 文字</p>
          </div>
        </div>

        <button
          onClick={calculate}
          className="mt-4 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          類似度を計算する
        </button>

        {result !== null && (
          <div className="mt-6 bg-background rounded-xl p-6 text-center">
            <p className="text-sm text-muted mb-2">類似度</p>
            <p className={`text-5xl font-bold ${getColor(result)}`}>{result}%</p>
            <div className="mt-4 w-full bg-card-border rounded-full h-3 overflow-hidden">
              <div
                className="h-3 rounded-full bg-primary transition-all"
                style={{ width: `${result}%` }}
              />
            </div>
            <p className="text-sm text-muted mt-3">
              {result === 100
                ? "2つのテキストは完全に一致しています"
                : result >= 80
                ? "非常に似ています"
                : result >= 50
                ? "ある程度似ています"
                : "あまり似ていません"}
            </p>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">テキスト類似度計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>比較したい2つのテキストをそれぞれの入力欄に入力し、「類似度を計算する」ボタンを押します。</p>
          <p>類似度はレーベンシュタイン距離（編集距離）を使って計算します。文字の追加・削除・置換の最小回数から割合を求めます。</p>
          <p>100%は完全一致、0%は全く異なるテキストを意味します。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="text-similarity" category="テキスト" />
      <RelatedTools currentSlug="text-similarity" category="テキスト" />
    </div>
  );
}
