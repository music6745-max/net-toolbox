"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type ReverseMode = "chars" | "words" | "lines";

const MODES: { key: ReverseMode; label: string; description: string }[] = [
  { key: "chars", label: "文字を反転", description: "文字の並びを逆順にします" },
  { key: "words", label: "単語を反転", description: "スペース区切りの単語順を逆にします" },
  { key: "lines", label: "行を反転", description: "行の並びを逆順にします" },
];

function reverseChars(text: string): string {
  return [...text].reverse().join("");
}

function reverseWords(text: string): string {
  return text
    .split("\n")
    .map((line) => line.split(/\s+/).reverse().join(" "))
    .join("\n");
}

function reverseLines(text: string): string {
  return text.split("\n").reverse().join("\n");
}

function applyReverse(text: string, mode: ReverseMode): string {
  switch (mode) {
    case "chars":
      return reverseChars(text);
    case "words":
      return reverseWords(text);
    case "lines":
      return reverseLines(text);
  }
}

export default function TextReversePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [activeMode, setActiveMode] = useState<ReverseMode | null>(null);
  const [copied, setCopied] = useState(false);

  const handleReverse = (mode: ReverseMode) => {
    setActiveMode(mode);
    setOutput(applyReverse(input, mode));
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSwap = () => {
    setInput(output);
    setOutput("");
    setActiveMode(null);
  };

  const charCount = [...input].length;
  const lineCount = input ? input.split("\n").length : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>テキスト反転</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">テキスト反転ツール</h1>
      <p className="text-muted mb-8">
        テキストを文字単位・単語単位・行単位で反転します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium">入力テキスト</label>
          <span className="text-xs text-muted">{charCount}文字 / {lineCount}行</span>
        </div>
        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setOutput("");
            setActiveMode(null);
          }}
          rows={6}
          placeholder="反転したいテキストを入力してください..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
        />

        <div className="flex flex-wrap gap-3 mt-4">
          {MODES.map((m) => (
            <button
              key={m.key}
              onClick={() => handleReverse(m.key)}
              disabled={!input}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                activeMode === m.key
                  ? "bg-primary text-white"
                  : "border border-card-border hover:bg-background"
              }`}
            >
              {m.label}
            </button>
          ))}
          <button
            onClick={() => {
              setInput("");
              setOutput("");
              setActiveMode(null);
            }}
            disabled={!input && !output}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            クリア
          </button>
        </div>

        {activeMode && (
          <p className="text-xs text-muted mt-2">
            {MODES.find((m) => m.key === activeMode)?.description}
          </p>
        )}
      </div>

      {output !== "" && (
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">変換結果</label>
            <div className="flex gap-3">
              <button
                onClick={handleSwap}
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                結果を入力に使う
              </button>
              <button
                onClick={handleCopy}
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
          </div>
          <pre className="bg-background rounded-lg px-4 py-3 text-sm font-mono whitespace-pre-wrap leading-relaxed min-h-[6rem]">
            {output}
          </pre>
          <p className="text-xs text-muted mt-2">{[...output].length}文字 / {output.split("\n").length}行</p>
        </div>
      )}

      {/* Quick examples */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mt-6">
        <h2 className="text-sm font-semibold mb-3">サンプルで試す</h2>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "日本語文字", text: "あいうえお" },
            { label: "英文", text: "Hello World" },
            { label: "複数行", text: "1行目\n2行目\n3行目" },
            { label: "単語リスト", text: "apple banana cherry" },
          ].map((ex) => (
            <button
              key={ex.label}
              onClick={() => {
                setInput(ex.text);
                setOutput("");
                setActiveMode(null);
              }}
              className="text-xs border border-card-border rounded px-3 py-1.5 hover:bg-background transition-colors"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">テキスト反転ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストボックスに反転したいテキストを入力します。</p>
          <p>2. 「文字を反転」— 文字列全体の文字順を逆にします（例: あいうえお → おえういあ）。</p>
          <p>3. 「単語を反転」— スペースで区切られた単語の順序を逆にします（例: apple banana → banana apple）。</p>
          <p>4. 「行を反転」— 複数行のテキストの行順を逆にします。</p>
          <p>5. 「結果を入力に使う」で変換結果をさらに加工できます。</p>
          <p>6. すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="text-reverse" category="テキスト" />
      <RelatedTools currentSlug="text-reverse" category="テキスト" />
    </div>
  );
}
