"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

function mdToHtml(md: string): string {
  let html = md
    .replace(/^### (.+)$/gm, "<h3 class='text-lg font-bold mt-4 mb-2'>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2 class='text-xl font-bold mt-5 mb-2'>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1 class='text-2xl font-bold mt-6 mb-3'>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code class='bg-gray-100 px-1 rounded text-sm'>$1</code>")
    .replace(/^\- (.+)$/gm, "<li class='ml-4'>$1</li>")
    .replace(/^\d+\. (.+)$/gm, "<li class='ml-4 list-decimal'>$1</li>")
    .replace(/\[(.+?)\]\((.+?)\)/g, "<a href='$2' class='text-primary underline'>$1</a>")
    .replace(/^---$/gm, "<hr class='my-4 border-card-border'>")
    .replace(/\n\n/g, "</p><p class='mb-3'>")
    .replace(/\n/g, "<br>");
  return `<p class='mb-3'>${html}</p>`;
}

export default function MarkdownPreviewPage() {
  const [input, setInput] = useState("# こんにちは\n\nこれは**マークダウン**のプレビューです。\n\n## 機能\n\n- **太字**対応\n- *斜体*対応\n- `コード`対応\n- [リンク](https://example.com)\n\n---\n\n### リスト\n\n1. 項目1\n2. 項目2\n3. 項目3");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>マークダウンプレビュー</span></nav>
      <h1 className="text-2xl font-bold mb-2">マークダウンプレビューツール</h1>
      <p className="text-muted mb-8">マークダウン記法のテキストをリアルタイムでHTMLプレビュー表示します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">マークダウン入力</label>
            <textarea value={input} onChange={(e) => setInput(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" rows={16} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">プレビュー</label>
            <div className="border border-card-border rounded-lg px-4 py-3 text-sm leading-relaxed min-h-[400px] overflow-auto"
              dangerouslySetInnerHTML={{ __html: mdToHtml(input) }} />
          </div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">マークダウンプレビューツールの使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>左側にマークダウン記法でテキストを入力すると、右側にリアルタイムでHTMLプレビューが表示されます。</p><p>見出し(#)、太字(**)、斜体(*)、コード(`)、リスト(-)、リンク([](url))に対応しています。</p></div></section>


      <RelatedTools currentSlug="markdown-preview" category="開発ツール" />
    </div>
  );
}
