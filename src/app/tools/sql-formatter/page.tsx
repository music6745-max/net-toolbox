"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function formatSql(sql: string): string {
  const keywords = ["SELECT", "FROM", "WHERE", "AND", "OR", "JOIN", "LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "OUTER JOIN", "ON", "GROUP BY", "ORDER BY", "HAVING", "LIMIT", "OFFSET", "INSERT INTO", "VALUES", "UPDATE", "SET", "DELETE FROM", "CREATE TABLE", "ALTER TABLE", "DROP TABLE", "UNION", "UNION ALL", "AS", "IN", "NOT", "NULL", "IS", "BETWEEN", "LIKE", "EXISTS", "CASE", "WHEN", "THEN", "ELSE", "END"];
  let result = sql.replace(/\s+/g, " ").trim();
  const mainKeywords = ["SELECT", "FROM", "WHERE", "GROUP BY", "ORDER BY", "HAVING", "LIMIT", "OFFSET", "JOIN", "LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "OUTER JOIN", "ON", "SET", "VALUES", "UNION", "UNION ALL"];
  mainKeywords.forEach((kw) => {
    const re = new RegExp("\\b" + kw + "\\b", "gi");
    result = result.replace(re, "\n" + kw);
  });
  const indentKeywords = ["AND", "OR"];
  indentKeywords.forEach((kw) => {
    const re = new RegExp("\\b" + kw + "\\b", "gi");
    result = result.replace(re, "\n  " + kw);
  });
  keywords.forEach((kw) => {
    const re = new RegExp("\\b" + kw.replace(/ /g, "\\s+") + "\\b", "gi");
    result = result.replace(re, kw);
  });
  return result.trim();
}

export default function SqlFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const format = () => setOutput(formatSql(input));
  const copy = () => { navigator.clipboard.writeText(output); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>SQL整形</span></nav>
      <h1 className="text-2xl font-bold mb-2">SQL整形ツール</h1>
      <p className="text-muted mb-8">SQLクエリを見やすくフォーマットします。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">SQL入力</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={6} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-sm" placeholder="SELECT id, name FROM users WHERE age > 20 AND active = true ORDER BY name" />
        </div>
        <button onClick={format} className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition">整形する</button>
        {output && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium">整形結果</label>
              <button onClick={copy} className="text-xs bg-card-bg border border-card-border rounded px-2 py-1 hover:opacity-80">コピー</button>
            </div>
            <pre className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-sm overflow-x-auto whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>SQLクエリを貼り付けて「整形する」をクリックすると、キーワードごとに改行・インデントされた見やすい形式に変換されます。</p></div></section>
      <AffiliateSection slug="sql-formatter" category="開発ツール" />
      <RelatedTools currentSlug="sql-formatter" category="開発ツール" />
    </div>
  );
}
