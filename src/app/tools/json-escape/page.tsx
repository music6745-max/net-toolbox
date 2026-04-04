"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

function escapeJson(str: string): string {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t")
    .replace(/\f/g, "\\f")
    .replace(/\b/g, "\\b")
    .replace(/[\u0000-\u001f]/g, (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"));
}

function unescapeJson(str: string): string {
  try {
    return JSON.parse(`"${str}"`);
  } catch {
    // fallback manual unescape
    return str
      .replace(/\\n/g, "\n")
      .replace(/\\r/g, "\r")
      .replace(/\\t/g, "\t")
      .replace(/\\f/g, "\f")
      .replace(/\\b/g, "\b")
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, "\\")
      .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  }
}

export default function Page() {
  const [mode, setMode] = useState<"escape" | "unescape">("escape");
  const [input, setInput] = useState('Hello "World"\nNew line\tTab');
  const [copied, setCopied] = useState(false);

  const output = mode === "escape" ? escapeJson(input) : unescapeJson(input);

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
        <span>JSONエスケープ</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">JSONエスケープ</h1>
      <p className="text-muted mb-8">JSON文字列のエスケープ・アンエスケープ。特殊文字の処理に。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setMode("escape")}
            className={`px-4 py-2 text-sm rounded-lg border transition-colors ${mode === "escape" ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary/30"}`}
          >
            エスケープ
          </button>
          <button
            onClick={() => setMode("unescape")}
            className={`px-4 py-2 text-sm rounded-lg border transition-colors ${mode === "unescape" ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary/30"}`}
          >
            アンエスケープ
          </button>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium mb-2 block">入力</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "escape" ? "エスケープする文字列を入力..." : "アンエスケープする文字列を入力..."}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            rows={6}
          />
        </div>

        <div className="relative">
          <label className="text-sm font-medium mb-2 block">出力</label>
          <pre className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3 text-sm font-mono overflow-x-auto whitespace-pre-wrap min-h-[80px]">{output}</pre>
          <button onClick={copy} className="absolute top-0 right-0 text-xs text-primary bg-card-bg border border-card-border rounded px-2 py-1">
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>「エスケープ」モードでは、ダブルクォート、バックスラッシュ、改行、タブなどをエスケープします。</p>
          <p>「アンエスケープ」モードでは、エスケープされた文字列を元に戻します。</p>
          <p>JSONデータの生成・解析時にご活用ください。</p>
        </div>
      </section>

      <RelatedTools currentSlug="json-escape" category="開発ツール" />
    </div>
  );
}
