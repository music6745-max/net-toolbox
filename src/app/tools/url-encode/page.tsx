"use client";

import { useState } from "react";
import Link from "next/link";

export default function UrlEncodePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = () => {
    try {
      setOutput(encodeURIComponent(input));
      setError("");
    } catch {
      setError("エンコードに失敗しました");
    }
  };

  const decode = () => {
    try {
      setOutput(decodeURIComponent(input));
      setError("");
    } catch {
      setError("無効なURLエンコード文字列です");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>URLエンコード/デコード</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">URLエンコード/デコードツール</h1>
      <p className="text-muted mb-8">
        URLに含まれる日本語や特殊文字をエンコード・デコードします。パーセントエンコーディングに対応。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">入力テキスト</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="エンコード/デコードしたいURLやテキストを入力..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={4}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex gap-3 mt-4">
          <button onClick={encode} className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
            エンコード
          </button>
          <button onClick={decode} className="bg-foreground text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            デコード
          </button>
        </div>

        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">出力結果</span>
              <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto max-h-60 overflow-y-auto break-all whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">URLエンコード/デコードツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>URLに含まれる日本語や特殊文字（スペース、&amp;、=など）をパーセントエンコーディング形式に変換します。</p>
          <p>「エンコード」で変換、「デコード」で元の文字列に復元します。</p>
          <p>Web開発やAPIのパラメータ作成に便利です。</p>
        </div>
      </section>
    </div>
  );
}
