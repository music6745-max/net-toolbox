"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type CaseType = "upper" | "lower" | "title" | "camel" | "snake" | "kebab";

const caseLabels: { key: CaseType; label: string; example: string }[] = [
  { key: "upper", label: "UPPERCASE", example: "HELLO WORLD" },
  { key: "lower", label: "lowercase", example: "hello world" },
  { key: "title", label: "Title Case", example: "Hello World" },
  { key: "camel", label: "camelCase", example: "helloWorld" },
  { key: "snake", label: "snake_case", example: "hello_world" },
  { key: "kebab", label: "kebab-case", example: "hello-world" },
];

function toWords(text: string): string[] {
  // split on spaces, underscores, hyphens, and camelCase boundaries
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[\s_\-]+/)
    .filter(Boolean);
}

function convert(text: string, type: CaseType): string {
  if (!text) return "";
  switch (type) {
    case "upper":
      return text.toUpperCase();
    case "lower":
      return text.toLowerCase();
    case "title":
      return toWords(text)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
    case "camel": {
      const words = toWords(text);
      return words
        .map((w, i) =>
          i === 0
            ? w.toLowerCase()
            : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        )
        .join("");
    }
    case "snake":
      return toWords(text).map((w) => w.toLowerCase()).join("_");
    case "kebab":
      return toWords(text).map((w) => w.toLowerCase()).join("-");
  }
}

export default function CaseConverterPage() {
  const [input, setInput] = useState("");
  const [copiedKey, setCopiedKey] = useState<CaseType | null>(null);

  const copy = async (key: CaseType) => {
    const result = convert(input, key);
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>大文字小文字変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">大文字小文字変換ツール</h1>
      <p className="text-muted mb-8">
        テキストをさまざまなケース形式に即時変換します。プログラミングや文書作成に役立ちます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <label className="block text-sm font-medium mb-2">変換するテキストを入力</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="例: hello world / helloWorld / hello-world"
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={4}
        />
      </div>

      <div className="grid gap-4">
        {caseLabels.map(({ key, label, example }) => {
          const result = convert(input, key);
          return (
            <div key={key} className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-sm font-semibold">{label}</span>
                  <span className="text-xs text-muted ml-2">（例: {example}）</span>
                </div>
                <button
                  onClick={() => copy(key)}
                  disabled={!result}
                  className="text-sm text-primary hover:text-primary-hover font-medium disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {copiedKey === key ? "コピー済み" : "コピー"}
                </button>
              </div>
              <div className="bg-background rounded-lg px-4 py-2.5 text-sm font-mono min-h-[2.5rem] break-all">
                {result || <span className="text-muted">（テキストを入力すると変換結果が表示されます）</span>}
              </div>
            </div>
          );
        })}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">大文字小文字変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストを入力すると、6種類のケース形式に即時変換されます。</p>
          <p>UPPERCASE: すべて大文字 / lowercase: すべて小文字 / Title Case: 各単語の先頭を大文字</p>
          <p>camelCase: 最初の単語は小文字、以降の単語の先頭を大文字（変数名などに使用）</p>
          <p>snake_case: 単語をアンダースコアで連結（Python変数名などに使用）</p>
          <p>kebab-case: 単語をハイフンで連結（CSSクラス名やURLなどに使用）</p>
          <p>各変換結果の右の「コピー」ボタンでクリップボードにコピーできます。</p>
        </div>
      </section>


      <RelatedTools currentSlug="case-converter" category="テキスト" />
    </div>
  );
}
