"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function VerticalTextPage() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"css" | "char">("css");
  const [copied, setCopied] = useState(false);

  const charByChar = input
    .split("")
    .join("\n");

  const copyResult = async () => {
    const text = mode === "char" ? charByChar : input;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>縦書き変換ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">縦書き変換ツール</h1>
      <p className="text-muted mb-8">
        テキストを縦書き表示に変換します。CSSモードはブラウザの縦書きレンダリングを使用します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">テキスト入力</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="縦書きにしたいテキストを入力してください"
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">表示モード</label>
          <div className="flex gap-3">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="css"
                checked={mode === "css"}
                onChange={() => setMode("css")}
                className="accent-primary"
              />
              CSSモード（縦書きレイアウト）
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="char"
                checked={mode === "char"}
                onChange={() => setMode("char")}
                className="accent-primary"
              />
              1文字ずつ改行
            </label>
          </div>
        </div>

        {input && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">縦書きプレビュー</span>
              <button
                onClick={copyResult}
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>

            {mode === "css" ? (
              <div className="bg-background rounded-lg p-6 border border-card-border min-h-32 flex justify-end overflow-x-auto">
                <div
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    lineHeight: "2",
                    fontSize: "1.1rem",
                    maxHeight: "300px",
                    overflowY: "auto",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {input}
                </div>
              </div>
            ) : (
              <div className="bg-background rounded-lg p-4 border border-card-border">
                <pre className="text-sm font-mono text-center leading-relaxed whitespace-pre">
                  {charByChar}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">縦書き変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアに縦書きにしたいテキストを入力します。</p>
          <p>2. 「CSSモード」はブラウザの縦書き機能を使って自然な縦書きレイアウトで表示します。</p>
          <p>3. 「1文字ずつ改行」モードは各文字を改行で区切ったテキストを生成します。コピーして利用できます。</p>
          <p>「コピー」ボタンでクリップボードにコピーできます。</p>
        </div>
      </section>


      <RelatedTools currentSlug="vertical-text" category="テキスト" />
    </div>
  );
}
