"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

function toSlug(text: string, separator: string = "-"): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, separator)
    .replace(new RegExp(`${separator}+`, "g"), separator)
    .replace(new RegExp(`^${separator}|${separator}$`, "g"), "");
}

export default function SlugGeneratorPage() {
  const [input, setInput] = useState("");
  const [separator, setSeparator] = useState("-");
  const [copied, setCopied] = useState(false);

  const slug = useCallback(() => toSlug(input, separator), [input, separator])();

  const handleCopy = () => {
    if (!slug) return;
    navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const examples = [
    "Hello World",
    "My Blog Post Title",
    "2026年 4月 特集記事",
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted flex items-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <span className="text-primary">スラッグ生成ツール</span>
        </nav>

        <h1 className="text-2xl font-bold text-primary mb-2">スラッグ生成ツール</h1>
        <p className="text-muted mb-8">テキストからURL用のスラッグを生成します。</p>

        {/* Input Card */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-1">テキスト入力</label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="例：Hello World Blog Post"
                className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">区切り文字</label>
              <div className="flex gap-3">
                {[
                  { value: "-", label: "ハイフン ( - )" },
                  { value: "_", label: "アンダースコア ( _ )" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="separator"
                      value={opt.value}
                      checked={separator === opt.value}
                      onChange={() => setSeparator(opt.value)}
                      className="accent-primary"
                    />
                    <span className="text-primary text-sm">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-primary">生成されたスラッグ</label>
            <button
              onClick={handleCopy}
              disabled={!slug}
              className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white text-sm rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {copied ? "コピー済み！" : "コピーする"}
            </button>
          </div>
          <div className="px-3 py-3 rounded-lg bg-background border border-card-border text-primary font-mono text-sm min-h-[44px] break-all">
            {slug || <span className="text-muted">スラッグがここに表示されます</span>}
          </div>
        </div>

        {/* Examples */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <h2 className="text-sm font-medium text-primary mb-3">入力例</h2>
          <div className="space-y-2">
            {examples.map((ex) => (
              <button
                key={ex}
                onClick={() => setInput(ex)}
                className="block w-full text-left px-3 py-2 rounded-lg bg-background border border-card-border text-muted hover:text-primary hover:border-primary transition-colors text-sm"
              >
                {ex} → <span className="font-mono text-primary">{toSlug(ex, separator)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 使い方 */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">使い方</h2>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>テキストを入力します（日本語は変換されません）</li>
            <li>区切り文字を選択します（ハイフンまたはアンダースコア）</li>
            <li>リアルタイムでスラッグが生成されます</li>
            <li>「コピーする」ボタンでクリップボードにコピーします</li>
          </ol>
          <p className="text-muted text-sm mt-4">
            ※ スラッグとは、URLに使用できる形式の文字列です。英数字と区切り文字のみで構成されます。
          </p>
        </div>
      </div>
    </div>
  );
}
