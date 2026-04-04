"use client";

import { useState } from "react";
import Link from "next/link";

type NewlineType = "CRLF" | "LF" | "CR";

function detectNewline(text: string): string {
  const hasCRLF = /\r\n/.test(text);
  const hasCR = /\r(?!\n)/.test(text);
  const hasLF = /(?<!\r)\n/.test(text);

  const types: string[] = [];
  if (hasCRLF) types.push("CRLF (Windows)");
  if (hasLF) types.push("LF (Unix/Mac)");
  if (hasCR) types.push("CR (旧Mac)");

  if (types.length === 0) return "改行なし";
  return types.join(" + ");
}

export default function NewlineConverterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [target, setTarget] = useState<NewlineType>("LF");
  const [copied, setCopied] = useState(false);

  const detected = input ? detectNewline(input) : "—";

  const convert = () => {
    if (!input) {
      setOutput("");
      return;
    }
    // Normalize to LF first
    let result = input.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    if (target === "CRLF") {
      result = result.replace(/\n/g, "\r\n");
    } else if (target === "CR") {
      result = result.replace(/\n/g, "\r");
    }
    setOutput(result);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lineOptions: { value: NewlineType; label: string }[] = [
    { value: "CRLF", label: "CRLF (Windows / \\r\\n)" },
    { value: "LF", label: "LF (Unix・Mac / \\n)" },
    { value: "CR", label: "CR (旧Mac / \\r)" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>改行コード変換ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">改行コード変換ツール</h1>
      <p className="text-muted mb-8">
        テキストの改行コードを CRLF・LF・CR に変換します。現在の改行コードも自動で判定します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">入力テキスト</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="テキストを入力または貼り付け..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={7}
        />

        <div className="mt-3 inline-flex items-center gap-2 bg-background rounded-lg px-4 py-2 text-sm">
          <span className="text-muted">現在の改行コード:</span>
          <span className="font-semibold">{detected}</span>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">変換先の改行コード</label>
          <div className="flex flex-wrap gap-3">
            {lineOptions.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="newline"
                  value={opt.value}
                  checked={target === opt.value}
                  onChange={() => setTarget(opt.value)}
                  className="accent-primary"
                />
                <span className="text-sm">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={convert}
          className="mt-4 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          変換する
        </button>

        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">変換後テキスト</span>
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
        <h2 className="text-lg font-bold mb-3">改行コード変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストを入力すると現在の改行コードが自動判定されます。変換先を選んで「変換する」ボタンを押してください。</p>
          <p>CRLF（\r\n）はWindows、LF（\n）はLinux・最新macOS、CR（\r）は旧macOSで使われます。</p>
          <p>混在している場合はすべて選択した種類に統一されます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
