"use client";

import { useState } from "react";
import Link from "next/link";

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = () => {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
      setError("");
    } catch {
      setError("エンコードに失敗しました");
    }
  };

  const decode = () => {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
      setError("");
    } catch {
      setError("無効なBase64文字列です");
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
        <span>Base64エンコード/デコード</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Base64エンコード/デコードツール</h1>
      <p className="text-muted mb-8">
        テキストをBase64形式にエンコード、またはBase64文字列をデコードします。日本語にも対応しています。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">入力テキスト</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="エンコードまたはデコードしたいテキストを入力..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={5}
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
        <h2 className="text-lg font-bold mb-3">Base64エンコード/デコードツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストを入力し、「エンコード」でBase64形式に変換、「デコード」でBase64から元のテキストに復元します。</p>
          <p>日本語テキストにも対応しています。画像データのBase64変換にはご利用いただけません。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
