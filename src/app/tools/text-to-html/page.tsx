"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const convertToHtml = (text: string): string => {
    if (!text) return "";
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Convert URLs to links
    html = html.replace(
      /(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Convert email addresses to mailto links
    html = html.replace(
      /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
      '<a href="mailto:$1">$1</a>'
    );

    // Double newlines to paragraphs
    const paragraphs = html.split(/\n\n+/);
    if (paragraphs.length > 1) {
      html = paragraphs.map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("\n");
    } else {
      html = html.replace(/\n/g, "<br>");
    }

    return html;
  };

  const output = convertToHtml(input);

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
        <span>テキスト→HTML変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">テキスト→HTML変換ツール</h1>
      <p className="text-muted mb-8">
        プレーンテキストをHTMLに変換。改行をbrタグ、空行で段落をpタグに。URLやメールを自動リンク化。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">入力テキスト</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={"こんにちは。\n\nこれはサンプルテキストです。\nhttps://example.com を参照してください。\ninfo@example.com にお問い合わせください。"}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={6}
          />
        </div>

        {output && (
          <>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">HTML出力</span>
                <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
                  {copied ? "コピー済み" : "コピー"}
                </button>
              </div>
              <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto break-all whitespace-pre-wrap max-h-60 overflow-y-auto">
                {output}
              </pre>
            </div>

            <div>
              <span className="text-sm font-medium block mb-2">プレビュー</span>
              <div
                className="bg-white text-black rounded-lg p-4 text-sm leading-relaxed border border-card-border"
                dangerouslySetInnerHTML={{ __html: output }}
              />
            </div>
          </>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">テキスト→HTML変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストを入力すると、リアルタイムでHTMLに変換されます。</p>
          <p>改行は&lt;br&gt;タグに、空行で区切られた段落は&lt;p&gt;タグに変換されます。</p>
          <p>URLはリンクに、メールアドレスはmailtoリンクに自動変換されます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>

      <RelatedTools currentSlug="text-to-html" category="開発ツール" />
    </div>
  );
}
