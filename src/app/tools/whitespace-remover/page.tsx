"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Options = {
  trimLines: boolean;
  collapseSpaces: boolean;
  removeBlankLines: boolean;
  collapseBlankLines: boolean;
  removeLeadingBlank: boolean;
  removeTrailingBlank: boolean;
  normalizeNewlines: boolean;
  removeAllNewlines: boolean;
  removeFullwidthSpaces: boolean;
};

function processText(text: string, opts: Options): string {
  let lines = text.split("\n");

  if (opts.normalizeNewlines) {
    // already split, no-op needed (handled by split)
  }

  if (opts.trimLines) {
    lines = lines.map((l) => l.trim());
  }

  if (opts.collapseSpaces) {
    lines = lines.map((l) => l.replace(/[ \t]+/g, " ").trim());
  }

  if (opts.removeFullwidthSpaces) {
    lines = lines.map((l) => l.replace(/　/g, " "));
  }

  if (opts.removeBlankLines) {
    lines = lines.filter((l) => l.trim() !== "");
  } else if (opts.collapseBlankLines) {
    const result: string[] = [];
    let prevBlank = false;
    for (const l of lines) {
      const isBlank = l.trim() === "";
      if (isBlank && prevBlank) continue;
      result.push(l);
      prevBlank = isBlank;
    }
    lines = result;
  }

  if (opts.removeLeadingBlank) {
    while (lines.length > 0 && lines[0].trim() === "") lines.shift();
  }
  if (opts.removeTrailingBlank) {
    while (lines.length > 0 && lines[lines.length - 1].trim() === "") lines.pop();
  }

  let result = lines.join("\n");

  if (opts.removeAllNewlines) {
    result = result.replace(/\n+/g, " ").trim();
  }

  return result;
}

const OPTIONS_CONFIG: { key: keyof Options; label: string; description: string }[] = [
  { key: "trimLines", label: "行頭・行末の空白を削除", description: "各行の先頭と末尾にある半角スペース・タブを削除します" },
  { key: "collapseSpaces", label: "連続する空白を1つに", description: "半角スペースやタブが連続している場合、1つのスペースにまとめます" },
  { key: "removeFullwidthSpaces", label: "全角スペースを半角に変換", description: "　（全角スペース）を半角スペースに変換します" },
  { key: "removeBlankLines", label: "空行をすべて削除", description: "空白のみの行または完全に空の行をすべて削除します" },
  { key: "collapseBlankLines", label: "連続する空行を1行に", description: "複数の空行が連続している場合、1行の空行にまとめます" },
  { key: "removeLeadingBlank", label: "先頭の空行を削除", description: "テキスト全体の先頭にある空行を削除します" },
  { key: "removeTrailingBlank", label: "末尾の空行を削除", description: "テキスト全体の末尾にある空行を削除します" },
  { key: "removeAllNewlines", label: "改行をすべて削除（1行にする）", description: "すべての改行を削除してテキストを1行にまとめます" },
];

export default function WhitespaceRemoverPage() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [opts, setOpts] = useState<Options>({
    trimLines: true,
    collapseSpaces: false,
    removeBlankLines: false,
    collapseBlankLines: true,
    removeLeadingBlank: true,
    removeTrailingBlank: true,
    normalizeNewlines: false,
    removeAllNewlines: false,
    removeFullwidthSpaces: false,
  });

  const output = useMemo(() => processText(input, opts), [input, opts]);

  const toggle = (key: keyof Options) => {
    setOpts((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      // mutual exclusions
      if (key === "removeBlankLines" && next.removeBlankLines) next.collapseBlankLines = false;
      if (key === "collapseBlankLines" && next.collapseBlankLines) next.removeBlankLines = false;
      if (key === "removeAllNewlines" && next.removeAllNewlines) {
        next.removeBlankLines = false;
        next.collapseBlankLines = false;
      }
      return next;
    });
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputLines = input.split("\n").length;
  const outputLines = output.split("\n").length;
  const removedChars = input.length - output.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>空白除去ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">空白除去ツール</h1>
      <p className="text-muted mb-8">
        テキストの余分な空白・改行・空行をオプションに従って一括クリーンアップします。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-4 mb-6">
        <p className="text-sm font-medium mb-3">クリーンアップオプション</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {OPTIONS_CONFIG.map(({ key, label, description }) => (
            <label key={key} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={opts[key]}
                onChange={() => toggle(key)}
                className="mt-0.5 rounded accent-primary"
              />
              <div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{label}</span>
                <p className="text-xs text-muted mt-0.5">{description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-card-bg border border-card-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">入力テキスト</label>
            <span className="text-xs text-muted">{input.length}文字 / {inputLines}行</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="クリーンアップしたいテキストを貼り付けてください..."
            className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={12}
          />
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">出力結果</label>
            <span className="text-xs text-muted">{output.length}文字 / {outputLines}行</span>
          </div>
          <pre className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono bg-background min-h-[12rem] overflow-auto whitespace-pre-wrap break-all">
            {output || <span className="text-muted">（出力なし）</span>}
          </pre>
        </div>
      </div>

      {input.length > 0 && (
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-muted">
            {removedChars >= 0 ? `${removedChars}文字削減` : `${Math.abs(removedChars)}文字増加`}
          </span>
          <button
            onClick={copy}
            disabled={!output}
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-50"
          >
            {copied ? "コピー済み" : "結果をコピー"}
          </button>
        </div>
      )}

      <section className="mt-6">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>左側にテキストを入力し、右側のオプションを選択すると自動的にクリーンアップ結果が表示されます。</p>
          <p>「空行をすべて削除」と「連続する空行を1行に」は同時に選択できません。</p>
          <p>「改行をすべて削除」を選ぶとテキスト全体が1行になります。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
