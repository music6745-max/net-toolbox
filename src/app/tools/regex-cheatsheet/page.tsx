"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type RegexItem = {
  syntax: string;
  description: string;
  example: string;
  match: string;
};

type Category = {
  name: string;
  items: RegexItem[];
};

const CATEGORIES: Category[] = [
  {
    name: "基本",
    items: [
      { syntax: ".", description: "任意の1文字（改行を除く）", example: "a.c", match: "abc, aXc" },
      { syntax: "\\d", description: "数字（[0-9]と同じ）", example: "\\d+", match: "123, 42" },
      { syntax: "\\D", description: "数字以外", example: "\\D+", match: "abc, XYZ" },
      { syntax: "\\w", description: "単語文字（英数字・アンダースコア）", example: "\\w+", match: "hello, abc_123" },
      { syntax: "\\W", description: "単語文字以外", example: "\\W+", match: "!@#, スペース" },
      { syntax: "\\s", description: "空白文字（スペース・タブ・改行）", example: "\\s+", match: "スペース, タブ" },
      { syntax: "\\S", description: "空白文字以外", example: "\\S+", match: "hello, 123" },
      { syntax: "\\n", description: "改行", example: "line1\\nline2", match: "複数行" },
      { syntax: "\\t", description: "タブ", example: "col1\\tcol2", match: "タブ区切り" },
    ],
  },
  {
    name: "量指定子",
    items: [
      { syntax: "*", description: "0回以上の繰り返し（最長マッチ）", example: "ab*c", match: "ac, abc, abbc" },
      { syntax: "+", description: "1回以上の繰り返し（最長マッチ）", example: "ab+c", match: "abc, abbc" },
      { syntax: "?", description: "0回または1回", example: "ab?c", match: "ac, abc" },
      { syntax: "{n}", description: "ちょうどn回", example: "a{3}", match: "aaa" },
      { syntax: "{n,}", description: "n回以上", example: "a{2,}", match: "aa, aaa, aaaa" },
      { syntax: "{n,m}", description: "n回以上m回以下", example: "a{2,4}", match: "aa, aaa, aaaa" },
      { syntax: "*?", description: "0回以上（最短マッチ）", example: "a.*?b", match: "axb（最短）" },
      { syntax: "+?", description: "1回以上（最短マッチ）", example: "a.+?b", match: "axb（最短）" },
    ],
  },
  {
    name: "アンカー",
    items: [
      { syntax: "^", description: "文字列または行の先頭", example: "^Hello", match: "Hello world" },
      { syntax: "$", description: "文字列または行の末尾", example: "world$", match: "Hello world" },
      { syntax: "\\b", description: "単語境界", example: "\\bcat\\b", match: "cat（catfish不可）" },
      { syntax: "\\B", description: "単語境界以外", example: "\\Bcat\\B", match: "concatenate内のcat" },
      { syntax: "\\A", description: "文字列の先頭（行頭でない）", example: "\\AHello", match: "Hello（先頭のみ）" },
      { syntax: "\\Z", description: "文字列の末尾（行末でない）", example: "end\\Z", match: "end（末尾のみ）" },
    ],
  },
  {
    name: "グループ",
    items: [
      { syntax: "(abc)", description: "グループ化・キャプチャ", example: "(ab)+", match: "ab, abab" },
      { syntax: "(?:abc)", description: "非キャプチャグループ", example: "(?:ab)+", match: "ab, abab（キャプチャなし）" },
      { syntax: "(a|b)", description: "いずれかにマッチ（OR）", example: "cat|dog", match: "cat または dog" },
      { syntax: "(?P<name>)", description: "名前付きグループ", example: "(?P<year>\\d{4})", match: "2024（yearとして参照可）" },
      { syntax: "\\1", description: "後方参照（1番目のグループ）", example: "(.)\\1", match: "aa, bb（同じ文字の繰り返し）" },
    ],
  },
  {
    name: "文字クラス",
    items: [
      { syntax: "[abc]", description: "a・b・cのいずれか", example: "[aeiou]", match: "母音1文字" },
      { syntax: "[^abc]", description: "a・b・c以外", example: "[^0-9]", match: "数字以外" },
      { syntax: "[a-z]", description: "aからzの範囲", example: "[a-zA-Z]", match: "英字1文字" },
      { syntax: "[0-9]", description: "0から9の数字", example: "[0-9]{3}", match: "123, 456" },
      { syntax: "[a-zA-Z0-9]", description: "英数字", example: "[a-zA-Z0-9]+", match: "abc123" },
    ],
  },
  {
    name: "先読み・後読み",
    items: [
      { syntax: "(?=abc)", description: "肯定先読み（abcの前）", example: "foo(?=bar)", match: "foobar内のfoo" },
      { syntax: "(?!abc)", description: "否定先読み（abc以外の前）", example: "foo(?!bar)", match: "fooXXX内のfoo" },
      { syntax: "(?<=abc)", description: "肯定後読み（abcの後）", example: "(?<=foo)bar", match: "foobar内のbar" },
      { syntax: "(?<!abc)", description: "否定後読み（abc以外の後）", example: "(?<!foo)bar", match: "XXXbar内のbar" },
    ],
  },
  {
    name: "フラグ",
    items: [
      { syntax: "i", description: "大文字・小文字を区別しない", example: "/hello/i", match: "Hello, HELLO, hello" },
      { syntax: "g", description: "グローバル（全マッチを検索）", example: "/a/g", match: "全てのaにマッチ" },
      { syntax: "m", description: "複数行モード（^/$が各行に対応）", example: "/^foo/m", match: "各行の先頭のfoo" },
      { syntax: "s", description: ".が改行にもマッチ", example: "/a.b/s", match: "a\\nb にもマッチ" },
    ],
  },
];

export default function RegexCheatsheetPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("すべて");

  const categoryNames = ["すべて", ...CATEGORIES.map((c) => c.name)];

  const filtered = CATEGORIES.filter(
    (c) => activeCategory === "すべて" || c.name === activeCategory
  ).map((c) => ({
    ...c,
    items: c.items.filter((item) => {
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        item.syntax.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.example.toLowerCase().includes(q)
      );
    }),
  })).filter((c) => c.items.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>正規表現チートシート</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">正規表現チートシート</h1>
      <p className="text-muted mb-8">
        正規表現の構文を一覧で確認できます。カテゴリやキーワードで絞り込み検索が可能です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="構文・説明で検索..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />

        <div className="flex flex-wrap gap-2">
          {categoryNames.map((name) => (
            <button
              key={name}
              onClick={() => setActiveCategory(name)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeCategory === name
                  ? "bg-primary text-white"
                  : "bg-background text-muted hover:text-primary border border-card-border"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {filtered.map((cat) => (
          <div key={cat.name} className="bg-card-bg border border-card-border rounded-xl p-6">
            <h2 className="text-base font-bold mb-4">{cat.name}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="text-left py-2 pr-4 font-medium text-muted w-28">構文</th>
                    <th className="text-left py-2 pr-4 font-medium text-muted">説明</th>
                    <th className="text-left py-2 pr-4 font-medium text-muted w-32">例</th>
                    <th className="text-left py-2 font-medium text-muted">マッチ例</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.items.map((item) => (
                    <tr key={item.syntax} className="border-b border-card-border/50">
                      <td className="py-2.5 pr-4">
                        <code className="bg-background px-2 py-0.5 rounded text-xs font-mono font-bold text-primary">
                          {item.syntax}
                        </code>
                      </td>
                      <td className="py-2.5 pr-4 text-muted">{item.description}</td>
                      <td className="py-2.5 pr-4">
                        <code className="text-xs font-mono">{item.example}</code>
                      </td>
                      <td className="py-2.5 text-muted text-xs">{item.match}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted py-8">該当する構文が見つかりませんでした。</p>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>カテゴリボタンで絞り込み、検索ボックスで構文や説明を検索できます。</p>
          <p>正規表現は文字列のパターンマッチングに使われる強力な記法です。</p>
          <p>JavaScriptでは /パターン/フラグ の形式で使用します（例: /\\d+/g）。</p>
        </div>
      </section>


      <RelatedTools currentSlug="regex-cheatsheet" category="開発ツール" />
    </div>
  );
}
