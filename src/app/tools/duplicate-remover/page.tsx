"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function DuplicateRemoverPage() {
  const [input, setInput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [trimWhitespace, setTrimWhitespace] = useState(false);
  const [output, setOutput] = useState("");
  const [stats, setStats] = useState<{
    original: number;
    unique: number;
    removed: number;
  } | null>(null);

  const removeDuplicates = () => {
    const lines = input.split("\n");
    const seen = new Set<string>();
    const uniqueLines: string[] = [];

    for (const line of lines) {
      const processedLine = trimWhitespace ? line.trim() : line;
      const key = caseSensitive ? processedLine : processedLine.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        uniqueLines.push(processedLine);
      }
    }

    setOutput(uniqueLines.join("\n"));
    setStats({
      original: lines.length,
      unique: uniqueLines.length,
      removed: lines.length - uniqueLines.length,
    });
  };

  const copyToClipboard = () => {
    if (output) navigator.clipboard.writeText(output);
  };

  const reset = () => {
    setInput("");
    setOutput("");
    setStats(null);
    setCaseSensitive(true);
    setTrimWhitespace(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>重複行削除</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">重複行削除ツール</h1>
      <p className="text-muted mb-8">
        テキストの重複している行を削除して、一意の行だけを残します。削除された行数も表示します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">テキストを入力</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={"例:\nりんご\nバナナ\nりんご\nぶどう\nバナナ"}
            rows={8}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
          />
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
              className="accent-primary w-4 h-4"
            />
            大文字小文字を区別する
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input
              type="checkbox"
              checked={trimWhitespace}
              onChange={(e) => setTrimWhitespace(e.target.checked)}
              className="accent-primary w-4 h-4"
            />
            前後の空白を除去してから比較
          </label>
        </div>

        <div className="flex gap-3">
          <button
            onClick={removeDuplicates}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            disabled={!input.trim()}
          >
            重複を削除
          </button>
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {stats && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="bg-background rounded-lg p-3 text-center">
              <p className="text-xs text-muted mb-1">元の行数</p>
              <p className="text-xl font-bold">{stats.original}</p>
            </div>
            <div className="bg-background rounded-lg p-3 text-center">
              <p className="text-xs text-muted mb-1">一意の行数</p>
              <p className="text-xl font-bold text-primary">{stats.unique}</p>
            </div>
            <div className="bg-background rounded-lg p-3 text-center">
              <p className="text-xs text-muted mb-1">削除された行数</p>
              <p className="text-xl font-bold text-red-500">{stats.removed}</p>
            </div>
          </div>
        )}

        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">結果</label>
              <button
                onClick={copyToClipboard}
                className="text-xs text-primary hover:text-primary-hover transition-colors"
              >
                コピー
              </button>
            </div>
            <textarea
              value={output}
              readOnly
              rows={8}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono bg-background focus:outline-none resize-y"
            />
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">重複行削除ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアに処理したいテキストを入力します（1行ずつ）。</p>
          <p>2. 「大文字小文字を区別する」をオフにすると、&quot;Apple&quot; と &quot;apple&quot; を同じ行として扱い重複を削除します。</p>
          <p>3. 「前後の空白を除去してから比較」をオンにすると、スペースやタブの違いを無視して重複を判定します。</p>
          <p>4. 「重複を削除」ボタンをクリックすると、重複のない行だけが結果に表示されます。削除した行数も確認できます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="duplicate-remover" category="テキスト" />
      <RelatedTools currentSlug="duplicate-remover" category="テキスト" />
    </div>
  );
}
