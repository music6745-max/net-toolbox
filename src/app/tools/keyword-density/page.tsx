"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

function calcDensity(text: string, keyword: string) {
  if (!text.trim() || !keyword.trim()) return { count: 0, density: 0, wordCount: 0 };
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;
  const kw = keyword.trim().toLowerCase();
  // For Japanese text (no spaces), count occurrences as substring
  const isJapanese = /[\u3040-\u30ff\u4e00-\u9fff]/.test(kw);
  let count = 0;
  if (isJapanese) {
    const lower = text.toLowerCase();
    let pos = 0;
    while ((pos = lower.indexOf(kw, pos)) !== -1) { count++; pos += kw.length; }
    const charCount = text.replace(/\s+/g, "").length;
    return { count, density: charCount > 0 ? (kw.length * count / charCount) * 100 : 0, wordCount: charCount };
  }
  count = words.filter((w) => w.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === kw).length;
  return { count, density: wordCount > 0 ? (count / wordCount) * 100 : 0, wordCount };
}

export default function KeywordDensityPage() {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");

  const result = useMemo(() => calcDensity(text, keyword), [text, keyword]);
  const densityColor = result.density > 5 ? "text-red-500" : result.density >= 1 ? "text-green-600" : "text-muted";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>キーワード密度計算</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">キーワード密度計算ツール</h1>
      <p className="text-muted mb-8">テキスト内のキーワード出現率と回数を計算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">テキスト</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={8}
            placeholder="分析するテキストを貼り付けてください..."
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
          <div className="text-xs text-muted mt-1 text-right">{text.length.toLocaleString()} 文字</div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">キーワード</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="調べたいキーワードを入力..."
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-background rounded-lg p-4 text-center">
            <div className={`text-2xl font-bold ${densityColor}`}>{result.density.toFixed(2)}%</div>
            <div className="text-xs text-muted mt-1">キーワード密度</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{result.count}</div>
            <div className="text-xs text-muted mt-1">出現回数</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{result.wordCount.toLocaleString()}</div>
            <div className="text-xs text-muted mt-1">総語数 / 文字数</div>
          </div>
        </div>

        {keyword && text && (
          <div className={`text-sm rounded-lg p-3 ${result.density > 5 ? "bg-red-50 text-red-600 border border-red-200" : result.density >= 1 ? "bg-green-50 text-green-700 border border-green-200" : "bg-yellow-50 text-yellow-700 border border-yellow-200"}`}>
            {result.density > 5
              ? "キーワード密度が高すぎます。スパムと判定されるリスクがあります（推奨: 1〜3%）。"
              : result.density >= 1
              ? "キーワード密度は適切な範囲内です。"
              : "キーワードの出現頻度が低い可能性があります。"}
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストを貼り付け、調べたいキーワードを入力すると密度と出現回数が表示されます。</p>
          <p>キーワード密度は1〜3%程度が一般的に推奨されます。5%を超えるとスパムと判定されるリスクがあります。</p>
          <p>日本語テキストには文字数ベースの計算を、英語テキストには単語数ベースの計算を適用します。</p>
        </div>
      </section>


      <RelatedTools currentSlug="keyword-density" category="開発ツール" />
    </div>
  );
}
