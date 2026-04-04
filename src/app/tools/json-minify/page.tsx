"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function JsonMinifyPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [sizeInfo, setSizeInfo] = useState<{
    before: number;
    after: number;
    saved: number;
    ratio: number;
  } | null>(null);

  const minify = () => {
    if (!input.trim()) {
      setError("JSONデータを入力してください");
      setOutput("");
      setSizeInfo(null);
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      const beforeBytes = new TextEncoder().encode(input).length;
      const afterBytes = new TextEncoder().encode(minified).length;
      const saved = beforeBytes - afterBytes;
      const ratio = Math.round((saved / beforeBytes) * 100);
      setOutput(minified);
      setError("");
      setSizeInfo({ before: beforeBytes, after: afterBytes, saved, ratio });
    } catch (e) {
      setError(`JSONの構文エラー: ${(e as Error).message}`);
      setOutput("");
      setSizeInfo(null);
    }
  };

  const validate = () => {
    if (!input.trim()) {
      setError("JSONデータを入力してください");
      return;
    }
    try {
      JSON.parse(input);
      setError("");
      setOutput("✓ 有効なJSONです");
      setSizeInfo(null);
    } catch (e) {
      setError(`JSONの構文エラー: ${(e as Error).message}`);
      setOutput("");
      setSizeInfo(null);
    }
  };

  const copyOutput = async () => {
    if (!output || output.startsWith("✓")) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    setInput("");
    setOutput("");
    setError("");
    setSizeInfo(null);
  };

  const formatBytes = (b: number) =>
    b < 1024 ? `${b} B` : `${(b / 1024).toFixed(2)} KB`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>JSON圧縮ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">JSON圧縮ツール</h1>
      <p className="text-muted mb-8">
        JSONデータを圧縮（ミニファイ）してサイズを削減します。構文バリデーション機能も備えています。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">JSON入力</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={'{\n  "name": "田中太郎",\n  "age": 30,\n  "city": "東京"\n}'}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={8}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={minify}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            圧縮する
          </button>
          <button
            onClick={validate}
            className="border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-background transition-colors"
          >
            バリデート
          </button>
          <button
            onClick={reset}
            className="border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {sizeInfo && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "圧縮前", value: formatBytes(sizeInfo.before) },
              { label: "圧縮後", value: formatBytes(sizeInfo.after) },
              { label: "削減量", value: formatBytes(sizeInfo.saved) },
              { label: "削減率", value: `${sizeInfo.ratio}%` },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-background rounded-lg p-3 border border-card-border text-center"
              >
                <p className="text-xs text-muted mb-1">{label}</p>
                <p className="font-semibold font-mono">{value}</p>
              </div>
            ))}
          </div>
        )}

        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">出力結果</span>
              {!output.startsWith("✓") && (
                <button
                  onClick={copyOutput}
                  className="text-sm text-primary hover:text-primary-hover font-medium"
                >
                  {copied ? "コピー済み" : "コピー"}
                </button>
              )}
            </div>
            <pre className="bg-background rounded-lg p-4 border border-card-border text-sm font-mono overflow-x-auto whitespace-pre-wrap break-all max-h-48 overflow-y-auto">
              {output}
            </pre>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">JSON圧縮ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアにJSONデータを入力またはペーストします。</p>
          <p>2. 「圧縮する」ボタンを押すと、不要なスペース・改行・インデントを除去して圧縮します。</p>
          <p>3. 圧縮前後のサイズと削減率が表示されます。</p>
          <p>4. 「バリデート」ボタンでJSONの構文チェックのみを行えます。</p>
          <p>5. 「コピー」ボタンで圧縮済みJSONをクリップボードにコピーできます。</p>
        </div>
      </section>


      <RelatedTools currentSlug="json-minify" category="開発ツール" />
    </div>
  );
}
