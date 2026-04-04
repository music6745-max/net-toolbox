"use client";

import { useState } from "react";
import Link from "next/link";

function textToBinary(text: string): string {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(text);
  return Array.from(bytes)
    .map((b) => b.toString(2).padStart(8, "0"))
    .join(" ");
}

function binaryToText(binary: string): string {
  const clean = binary.trim().replace(/\s+/g, " ");
  const parts = clean.split(" ");
  if (parts.some((p) => !/^[01]{8}$/.test(p))) {
    throw new Error("無効なバイナリ文字列です（8ビット区切りで入力してください）");
  }
  const bytes = new Uint8Array(parts.map((p) => parseInt(p, 2)));
  return new TextDecoder().decode(bytes);
}

export default function TextBinaryPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const convert = () => {
    setError("");
    setOutput("");
    if (!input.trim()) return;
    try {
      if (mode === "encode") {
        setOutput(textToBinary(input));
      } else {
        setOutput(binaryToText(input));
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "変換に失敗しました");
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
        <span>テキスト⇔バイナリ変換ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">テキスト⇔バイナリ変換ツール</h1>
      <p className="text-muted mb-8">
        テキストを2進数（バイナリ）に変換したり、バイナリからテキストに戻します。UTF-8のバイト列を使用します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex gap-4 mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="mode"
              checked={mode === "encode"}
              onChange={() => setMode("encode")}
              className="accent-primary"
            />
            <span className="text-sm font-medium">テキスト → バイナリ</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="mode"
              checked={mode === "decode"}
              onChange={() => setMode("decode")}
              className="accent-primary"
            />
            <span className="text-sm font-medium">バイナリ → テキスト</span>
          </label>
        </div>

        <label className="block text-sm font-medium mb-2">
          {mode === "encode" ? "入力テキスト" : "バイナリ（8ビット区切り・スペース区切り）"}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            mode === "encode"
              ? "変換したいテキストを入力..."
              : "01100001 01100010 01100011 ..."
          }
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={5}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          onClick={convert}
          className="mt-4 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          変換する
        </button>

        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">変換結果</span>
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
        <h2 className="text-lg font-bold mb-3">テキスト⇔バイナリ変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>「テキスト → バイナリ」モードでは入力したテキストを8ビットのバイナリに変換します。</p>
          <p>「バイナリ → テキスト」モードでは8ビットのバイナリをスペースで区切って入力するとテキストに変換します。</p>
          <p>日本語などマルチバイト文字はUTF-8でエンコードされるため、複数バイトに分かれて表示されます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
