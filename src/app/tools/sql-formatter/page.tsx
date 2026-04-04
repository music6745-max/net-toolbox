"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function formatSQL(sql: string, indent: number): string {
  const indentStr = " ".repeat(indent);
  const keywords = [
    "SELECT", "FROM", "WHERE", "JOIN", "LEFT JOIN", "RIGHT JOIN", "INNER JOIN",
    "OUTER JOIN", "FULL JOIN", "CROSS JOIN", "ON", "AND", "OR", "ORDER BY",
    "GROUP BY", "HAVING", "LIMIT", "OFFSET", "UNION", "UNION ALL", "INSERT INTO",
    "VALUES", "UPDATE", "SET", "DELETE FROM", "CREATE TABLE", "ALTER TABLE",
    "DROP TABLE", "INDEX", "DISTINCT", "AS",
  ];

  let result = sql.trim();

  // Normalize whitespace
  result = result.replace(/\s+/g, " ");

  // Add newlines before major keywords (case-insensitive)
  const topLevel = [
    "SELECT", "FROM", "WHERE", "ORDER BY", "GROUP BY", "HAVING", "LIMIT",
    "OFFSET", "UNION ALL", "UNION", "JOIN", "LEFT JOIN", "RIGHT JOIN",
    "INNER JOIN", "OUTER JOIN", "FULL JOIN", "CROSS JOIN", "INSERT INTO",
    "VALUES", "UPDATE", "SET", "DELETE FROM",
  ];

  topLevel.forEach((kw) => {
    const regex = new RegExp(`\\s*(${kw})\\s+`, "gi");
    result = result.replace(regex, `\n${kw} `);
  });

  // Indent AND / OR inside WHERE
  result = result.replace(/\s+(AND|OR)\s+/gi, (_, m) => `\n${indentStr}${m.toUpperCase()} `);

  // Uppercase keywords
  keywords.forEach((kw) => {
    const regex = new RegExp(`\\b${kw}\\b`, "gi");
    result = result.replace(regex, kw);
  });

  // Trim leading newline
  result = result.replace(/^\n/, "");

  return result;
}

export default function SqlFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indent, setIndent] = useState(4);
  const [copied, setCopied] = useState(false);

  const format = () => {
    if (!input.trim()) return;
    setOutput(formatSQL(input, indent));
  };

  const clear = () => {
    setInput("");
    setOutput("");
  };

  const copyOutput = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>SQLフォーマッター</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">SQLフォーマッターツール</h1>
      <p className="text-muted mb-8">
        SQLクエリを見やすく整形します。SELECT、FROM、WHERE、JOINなどのキーワードで自動改行・インデントします。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">SQL入力</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="SELECT id, name FROM users WHERE status = 'active' ORDER BY name;"
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none bg-background"
          rows={8}
        />

        <div className="flex flex-wrap items-center gap-3 mt-4">
          <button
            onClick={format}
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            整形する
          </button>
          <button
            onClick={clear}
            className="border border-card-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg transition-colors"
          >
            クリア
          </button>
          <label className="flex items-center gap-2 text-sm text-muted ml-auto">
            インデント:
            <select
              value={indent}
              onChange={(e) => setIndent(Number(e.target.value))}
              className="border border-card-border rounded px-2 py-1 text-sm bg-background"
            >
              <option value={2}>2スペース</option>
              <option value={4}>4スペース</option>
            </select>
          </label>
        </div>

        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">整形結果</span>
              <button
                onClick={copyOutput}
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto max-h-96 overflow-y-auto whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">SQLフォーマッターの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアにSQLクエリを入力またはペーストします。</p>
          <p>2. 「整形する」ボタンをクリックするとSQLが見やすく整形されます。</p>
          <p>3. インデント幅を2スペースまたは4スペースから選択できます。</p>
          <p>4. 結果は「コピー」ボタンでクリップボードにコピーできます。</p>
          <p>SELECT、FROM、WHERE、JOIN、ORDER BY、GROUP BYなどの主要キーワードで自動的に改行されます。</p>
        </div>
      </section>


      <AffiliateSection slug="sql-formatter" category="開発ツール" />
      <RelatedTools currentSlug="sql-formatter" category="開発ツール" />
    </div>
  );
}
