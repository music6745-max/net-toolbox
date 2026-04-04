"use client";

import { useState } from "react";
import Link from "next/link";

export default function CharacterCountPage() {
  const [text, setText] = useState("");

  const charCount = text.length;
  const charNoSpaces = text.replace(/\s/g, "").length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lineCount = text ? text.split("\n").length : 0;
  const byteCount = new TextEncoder().encode(text).length;
  const paragraphCount = text.trim()
    ? text.split(/\n\s*\n/).filter((p) => p.trim()).length
    : 0;

  const stats = [
    { label: "文字数", value: charCount },
    { label: "文字数（空白除く）", value: charNoSpaces },
    { label: "単語数", value: wordCount },
    { label: "行数", value: lineCount },
    { label: "段落数", value: paragraphCount },
    { label: "バイト数（UTF-8）", value: byteCount },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>文字数カウント</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">文字数カウントツール</h1>
      <p className="text-muted mb-8">
        テキストを入力するとリアルタイムで文字数・単語数・行数をカウントします。レポートやSNS投稿の文字数チェックに便利です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">テキスト入力</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="ここにテキストを入力してください..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={8}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-background rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold text-primary">
                {stat.value.toLocaleString()}
              </div>
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setText("")}
          className="mt-4 text-sm text-muted hover:text-foreground transition-colors"
        >
          クリア
        </button>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">文字数カウントツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストエリアに文章を入力またはペーストすると、自動的に以下の情報がカウントされます。</p>
          <p>文字数、空白を除いた文字数、単語数、行数、段落数、バイト数（UTF-8）をリアルタイムで表示します。</p>
          <p>Twitter（X）の文字数制限チェックや、レポートの文字数確認にご活用ください。</p>
        </div>
      </section>
    </div>
  );
}
