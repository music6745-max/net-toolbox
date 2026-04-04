"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    if (!input.trim()) {
      setError("JSONデータを入力してください");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError("");
    } catch (e) {
      setError(`JSONの構文エラー: ${(e as Error).message}`);
      setOutput("");
    }
  };

  const minifyJson = () => {
    if (!input.trim()) {
      setError("JSONデータを入力してください");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError(`JSONの構文エラー: ${(e as Error).message}`);
      setOutput("");
    }
  };

  const copyOutput = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>JSON整形</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">JSON整形ツール</h1>
      <p className="text-muted mb-8">
        JSONデータを見やすくフォーマット（整形）またはミニファイ（圧縮）します。構文エラーの検出も行います。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">JSON入力</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"key": "value", "items": [1, 2, 3]}'
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={8}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex flex-wrap items-center gap-3 mt-4">
          <button
            onClick={formatJson}
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            整形（フォーマット）
          </button>
          <button
            onClick={minifyJson}
            className="bg-foreground text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            圧縮（ミニファイ）
          </button>
          <label className="flex items-center gap-2 text-sm text-muted ml-auto">
            インデント:
            <select
              value={indent}
              onChange={(e) => setIndent(Number(e.target.value))}
              className="border border-card-border rounded px-2 py-1 text-sm"
            >
              <option value={2}>2スペース</option>
              <option value={4}>4スペース</option>
              <option value={1}>タブ</option>
            </select>
          </label>
        </div>

        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">出力結果</span>
              <button
                onClick={copyOutput}
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto max-h-96 overflow-y-auto">
              {output}
            </pre>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">JSON整形ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアにJSONデータを入力またはペーストします。</p>
          <p>2. 「整形」ボタンで見やすくフォーマット、「圧縮」ボタンで1行に圧縮します。</p>
          <p>3. インデント幅は2スペース・4スペースから選択できます。</p>
          <p>JSONに構文エラーがある場合は、エラー内容が表示されます。</p>
        </div>
      </section>


      <AffiliateSection slug="json-formatter" category="開発ツール" />
      <RelatedTools currentSlug="json-formatter" category="開発ツール" />
    </div>
  );
}
