"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function HtmlStripPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [collapseWhitespace, setCollapseWhitespace] = useState(true);
  const [copied, setCopied] = useState(false);

  const stripHtml = () => {
    if (!input.trim()) {
      setOutput("");
      return;
    }
    let result = input
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<[^>]+>/g, " ");

    if (collapseWhitespace) {
      result = result.replace(/\s+/g, " ").trim();
    } else {
      result = result.replace(/[ \t]+/g, " ").trim();
    }

    result = result
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, " ");

    setOutput(result);
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
        <span>HTMLタグ除去ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">HTMLタグ除去ツール</h1>
      <p className="text-muted mb-8">
        HTMLタグをすべて除去してプレーンテキストを抽出します。style・scriptタグの内容も除去します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            id="collapse"
            checked={collapseWhitespace}
            onChange={(e) => setCollapseWhitespace(e.target.checked)}
            className="w-4 h-4 accent-primary"
          />
          <label htmlFor="collapse" className="text-sm">空白・改行をまとめる</label>
        </div>

        <label className="block text-sm font-medium mb-2">入力HTML</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="HTMLを貼り付けてください..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={8}
        />

        <button
          onClick={stripHtml}
          className="mt-4 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          タグを除去する
        </button>

        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">抽出されたテキスト</span>
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
        <h2 className="text-lg font-bold mb-3">HTMLタグ除去ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>HTMLコードを入力欄に貼り付けて「タグを除去する」ボタンを押すと、すべてのHTMLタグが除去されたプレーンテキストが表示されます。</p>
          <p>「空白・改行をまとめる」をオンにすると、連続する空白や改行を1つにまとめます。</p>
          <p>&amp;amp;、&amp;lt; などのHTMLエンティティも自動的にデコードされます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="html-strip" category="テキスト" />
      <RelatedTools currentSlug="html-strip" category="テキスト" />
    </div>
  );
}
