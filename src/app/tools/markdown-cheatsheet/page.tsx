"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

interface CheatItem {
  category: string;
  items: { syntax: string; desc: string; rendered: string }[];
}

const cheatsheet: CheatItem[] = [
  {
    category: "見出し",
    items: [
      { syntax: "# 見出し1", desc: "最大の見出し", rendered: "<h1 style='font-size:1.5em;font-weight:bold'>見出し1</h1>" },
      { syntax: "## 見出し2", desc: "2番目の見出し", rendered: "<h2 style='font-size:1.3em;font-weight:bold'>見出し2</h2>" },
      { syntax: "### 見出し3", desc: "3番目の見出し", rendered: "<h3 style='font-size:1.1em;font-weight:bold'>見出し3</h3>" },
    ],
  },
  {
    category: "強調",
    items: [
      { syntax: "*イタリック*", desc: "斜体", rendered: "<em>イタリック</em>" },
      { syntax: "**太字**", desc: "太字", rendered: "<strong>太字</strong>" },
      { syntax: "***太字イタリック***", desc: "太字+斜体", rendered: "<strong><em>太字イタリック</em></strong>" },
      { syntax: "~~取り消し線~~", desc: "取り消し線", rendered: "<del>取り消し線</del>" },
    ],
  },
  {
    category: "リスト",
    items: [
      { syntax: "- 項目1\n- 項目2\n- 項目3", desc: "箇条書きリスト", rendered: "<ul style='margin:0;padding-left:1.5em'><li>項目1</li><li>項目2</li><li>項目3</li></ul>" },
      { syntax: "1. 項目1\n2. 項目2\n3. 項目3", desc: "番号付きリスト", rendered: "<ol style='margin:0;padding-left:1.5em'><li>項目1</li><li>項目2</li><li>項目3</li></ol>" },
    ],
  },
  {
    category: "リンク・画像",
    items: [
      { syntax: "[リンクテキスト](https://example.com)", desc: "リンク", rendered: "<a href='#' style='color:#3b82f6;text-decoration:underline'>リンクテキスト</a>" },
      { syntax: "![代替テキスト](image.png)", desc: "画像", rendered: "<span style='color:#6b7280'>[画像: 代替テキスト]</span>" },
    ],
  },
  {
    category: "コード",
    items: [
      { syntax: "`インラインコード`", desc: "インラインコード", rendered: "<code style='background:#f1f5f9;padding:2px 6px;border-radius:3px;font-size:0.9em'>インラインコード</code>" },
      { syntax: "```\nコードブロック\n```", desc: "コードブロック", rendered: "<pre style='background:#f1f5f9;padding:8px;border-radius:4px;font-size:0.9em'><code>コードブロック</code></pre>" },
    ],
  },
  {
    category: "テーブル",
    items: [
      {
        syntax: "| 列1 | 列2 | 列3 |\n| --- | --- | --- |\n| A | B | C |",
        desc: "テーブル",
        rendered: "<table style='border-collapse:collapse;font-size:0.9em'><tr><th style='border:1px solid #ddd;padding:4px 8px'>列1</th><th style='border:1px solid #ddd;padding:4px 8px'>列2</th><th style='border:1px solid #ddd;padding:4px 8px'>列3</th></tr><tr><td style='border:1px solid #ddd;padding:4px 8px'>A</td><td style='border:1px solid #ddd;padding:4px 8px'>B</td><td style='border:1px solid #ddd;padding:4px 8px'>C</td></tr></table>",
      },
    ],
  },
  {
    category: "引用",
    items: [
      { syntax: "> 引用テキスト", desc: "引用ブロック", rendered: "<blockquote style='border-left:3px solid #d1d5db;padding-left:12px;color:#6b7280;margin:0'>引用テキスト</blockquote>" },
    ],
  },
  {
    category: "水平線",
    items: [
      { syntax: "---", desc: "水平線", rendered: "<hr style='border:none;border-top:1px solid #d1d5db;margin:4px 0' />" },
    ],
  },
  {
    category: "タスクリスト",
    items: [
      {
        syntax: "- [x] 完了タスク\n- [ ] 未完了タスク",
        desc: "チェックリスト",
        rendered: "<ul style='list-style:none;margin:0;padding:0'><li><input type='checkbox' checked disabled /> 完了タスク</li><li><input type='checkbox' disabled /> 未完了タスク</li></ul>",
      },
    ],
  },
];

export default function Page() {
  const [search, setSearch] = useState("");
  const [copiedIdx, setCopiedIdx] = useState<string | null>(null);

  const filtered = search
    ? cheatsheet
        .map((c) => ({
          ...c,
          items: c.items.filter(
            (item) =>
              item.syntax.toLowerCase().includes(search.toLowerCase()) ||
              item.desc.includes(search) ||
              c.category.includes(search)
          ),
        }))
        .filter((c) => c.items.length > 0)
    : cheatsheet;

  const copySyntax = async (syntax: string, key: string) => {
    await navigator.clipboard.writeText(syntax);
    setCopiedIdx(key);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>Markdownチートシート</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Markdownチートシート</h1>
      <p className="text-muted mb-8">
        Markdown記法の早見表。構文と表示結果を並べて確認できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="検索（見出し、太字、テーブル...）"
          className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />

        {filtered.length === 0 && (
          <p className="text-sm text-muted text-center py-4">該当する項目が見つかりません。</p>
        )}

        {filtered.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-sm font-bold mb-3 text-primary">{cat.category}</h3>
            <div className="space-y-3">
              {cat.items.map((item, i) => {
                const key = `${cat.category}-${i}`;
                return (
                  <div key={key} className="border border-card-border/50 rounded-lg overflow-hidden">
                    <div className="text-xs text-muted px-3 py-1.5 bg-background/50">{item.desc}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-card-border/50">
                      <div className="p-3 relative">
                        <div className="text-xs text-muted mb-1">Markdown</div>
                        <pre className="text-sm font-mono whitespace-pre-wrap">{item.syntax}</pre>
                        <button
                          onClick={() => copySyntax(item.syntax, key)}
                          className="absolute top-2 right-2 text-xs text-primary hover:text-primary-hover"
                        >
                          {copiedIdx === key ? "✓" : "コピー"}
                        </button>
                      </div>
                      <div className="p-3">
                        <div className="text-xs text-muted mb-1">表示結果</div>
                        <div
                          className="text-sm"
                          dangerouslySetInnerHTML={{ __html: item.rendered }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">Markdownチートシートの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>Markdown記法の構文と、それがどのように表示されるかを並べて確認できます。</p>
          <p>検索ボックスでカテゴリや記法を検索できます。</p>
          <p>各構文の「コピー」ボタンでクリップボードにコピーして、すぐに使用できます。</p>
        </div>
      </section>

      <AffiliateSection slug="markdown-cheatsheet" category="開発ツール" />


      <RelatedTools currentSlug="markdown-cheatsheet" category="開発ツール" />
    </div>
  );
}
