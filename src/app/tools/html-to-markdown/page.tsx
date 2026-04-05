"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function htmlToMd(html: string): string {
  let md = html;
  md = md.replace(/<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi, (_, level, text) => "\n" + "#".repeat(Number(level)) + " " + text.trim() + "\n");
  md = md.replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**");
  md = md.replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**");
  md = md.replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*");
  md = md.replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*");
  md = md.replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`");
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)");
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>|<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/gi, (_, s1, a1, a2, s2) => "![" + (a1||a2||"") + "](" + (s1||s2) + ")");
  md = md.replace(/<br\s*\/?>/gi, "\n");
  md = md.replace(/<hr\s*\/?>/gi, "\n---\n");
  md = md.replace(/<p[^>]*>(.*?)<\/p>/gi, "\n$1\n");
  md = md.replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n");
  md = md.replace(/<\/?(?:ul|ol|div|span|section|article|header|footer|nav|main)[^>]*>/gi, "");
  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, "\n```\n$1\n```\n");
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, t) => t.trim().split("\n").map((l: string) => "> " + l).join("\n"));
  md = md.replace(/<[^>]+>/g, "");
  md = md.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");
  md = md.replace(/\n{3,}/g, "\n\n");
  return md.trim();
}

export default function HtmlToMarkdownPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convert = () => setOutput(htmlToMd(input));
  const copy = () => { navigator.clipboard.writeText(output); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>HTML→Markdown変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">HTML→Markdown変換ツール</h1>
      <p className="text-muted mb-8">HTMLコードをMarkdown形式に変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">HTML入力</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-sm" placeholder="<h1>タイトル</h1><p>本文</p>" />
        </div>
        <button onClick={convert} className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition">変換する</button>
        {output && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium">Markdown出力</label>
              <button onClick={copy} className="text-xs bg-card-bg border border-card-border rounded px-2 py-1 hover:opacity-80">コピー</button>
            </div>
            <textarea readOnly value={output} rows={8} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-sm" />
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>HTMLコードを貼り付けて変換ボタンを押すと、Markdown形式に変換されます。見出し、太字、リンク、リスト、コードなど主要な要素に対応しています。</p></div></section>
      <AffiliateSection slug="html-to-markdown" category="開発ツール" />
      <RelatedTools currentSlug="html-to-markdown" category="開発ツール" />
    </div>
  );
}
