"use client";

import { useState } from "react";
import Link from "next/link";

export default function LineNumberPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [startNumber, setStartNumber] = useState(1);
  const [separator, setSeparator] = useState(": ");
  const [copied, setCopied] = useState(false);

  const addLineNumbers = () => {
    if (!input.trim()) {
      setOutput("");
      return;
    }
    const lines = input.split("\n");
    const numbered = lines.map((line, i) => `${i + startNumber}${separator}${line}`);
    setOutput(numbered.join("\n"));
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
        <span>行番号付与ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">行番号付与ツール</h1>
      <p className="text-muted mb-8">
        テキストの各行に行番号を付与します。開始番号や区切り文字を自由に設定できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex gap-4 mb-4 flex-wrap">
          <div>
            <label className="block text-sm font-medium mb-1">開始番号</label>
            <input
              type="number"
              value={startNumber}
              onChange={(e) => setStartNumber(Number(e.target.value))}
              min={0}
              className="border border-card-border rounded-lg px-3 py-2 text-sm w-24 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">区切り文字</label>
            <input
              type="text"
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              className="border border-card-border rounded-lg px-3 py-2 text-sm w-24 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        <label className="block text-sm font-medium mb-2">入力テキスト</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="行番号を付けたいテキストを入力..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={8}
        />

        <button
          onClick={addLineNumbers}
          className="mt-4 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          行番号を付与する
        </button>

        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">出力結果</span>
              <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto max-h-72 overflow-y-auto whitespace-pre-wrap break-all">
              {output}
            </pre>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">行番号付与ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストを入力欄に貼り付け、開始番号と区切り文字を設定してから「行番号を付与する」ボタンを押します。</p>
          <p>開始番号は行番号の最初の値を指定します。デフォルトは1です。</p>
          <p>区切り文字は行番号とテキストの間に挿入される文字列です。「: 」「. 」「\t」などを設定できます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
