"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";

const escapeHtml = (s: string) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
const unescapeHtml = (s: string) => s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#039;/g,"'");

export default function HtmlEscapePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const copy = async () => { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>HTMLエスケープ</span></nav>
      <h1 className="text-2xl font-bold mb-2">HTMLエスケープ/アンエスケープツール</h1>
      <p className="text-muted mb-8">HTMLの特殊文字（&lt; &gt; &amp; &quot;）をエスケープ・アンエスケープします。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">入力テキスト</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="<div>Hello</div>" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" rows={5} />
        <div className="flex gap-3 mt-4">
          <button onClick={() => setOutput(escapeHtml(input))} className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">エスケープ</button>
          <button onClick={() => setOutput(unescapeHtml(input))} className="bg-foreground text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">アンエスケープ</button>
        </div>
        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">出力結果</span><button onClick={copy} className="text-sm text-primary font-medium">{copied ? "コピー済み" : "コピー"}</button></div>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto max-h-60 overflow-y-auto whitespace-pre-wrap break-all">{output}</pre>
          </div>
        )}
      </div>
      <ToolFAQSection
        toolName="HTMLエスケープ"
        howTo={[
          "テキストエリアにHTMLコードまたはエスケープ済み文字列を入力する",
          "「エスケープ」で特殊文字（＜・＞・&・\"・'）を安全な文字参照に変換する",
          "「アンエスケープ」で文字参照を元の文字に戻す",
          "出力結果を「コピー」ボタンでクリップボードにコピーして活用する",
        ]}
        faqs={[
          {
            question: "HTMLエスケープとは何ですか？",
            answer: "HTMLエスケープとは、HTML上で特別な意味を持つ文字（＜・＞・&等）を文字参照（&lt;・&gt;・&amp;等）に変換すること。これによりブラウザが記号をタグや属性の一部ではなく単なる文字として表示するようになります。XSS（クロスサイトスクリプティング）攻撃の防止、プログラムコードのブログ記事化等、Web開発に必須の処理です。",
          },
          {
            question: "どんな時にエスケープが必要？",
            answer: "①ユーザー入力をHTMLに表示する時（XSS対策として必須）②ブログ記事でHTMLコードを紹介する時③JSONやXMLの中にHTMLを入れる時④メールHTMLでコード引用する時。エスケープしないと、スクリプト実行・表示崩れ・セキュリティホールが発生します。",
          },
          {
            question: "主要な文字参照の一覧は？",
            answer: "&lt;（＜）・&gt;（＞）・&amp;（&）・&quot;（\"）・&#039;（'）が基本5文字。ほかに&nbsp;（半角スペース）・&copy;（©）・&reg;（®）・&trade;（™）・&yen;（¥）・&middot;（・）等。日本語テキストも文字参照（&#x3042;等）で表現可能ですが、UTF-8ならそのまま使用できます。",
          },
          {
            question: "React・Vue等のフレームワークでも必要？",
            answer: "React・Vue・Angular等のモダンフレームワークは自動エスケープ機能あり、`{text}`と書けば自動的にエスケープ（XSS防止）。ただし`dangerouslySetInnerHTML`（React）・`v-html`（Vue）を使う場合は手動エスケープ必須。ユーザー入力を HTML として解釈させる時は、DOMPurify 等のサニタイズライブラリ併用が安全です。",
          },
        ]}
      />


      <AffiliateSection slug="html-escape" category="開発ツール" />
      <RelatedTools currentSlug="html-escape" category="開発ツール" />
    </div>
  );
}
