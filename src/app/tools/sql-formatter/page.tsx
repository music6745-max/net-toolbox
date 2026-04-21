"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="SQL整形"
        howTo={[
          "SQLクエリを入力欄に貼り付け",
          "「整形する」ボタンで自動フォーマット",
          "SELECT・FROM・WHERE等で自動改行＆インデント",
          "コピーボタンで整形後のSQLをクリップボードに",
        ]}
        faqs={[
          {
            question: "SQL整形はなぜ重要？",
            answer: "可読性向上・バグ発見・コードレビュー効率化。1行SQLは読みづらくバグの温床、整形で論理構造が明確に。SELECT句・FROM句・WHERE句ごとに改行＋インデントで複雑なJOINも理解しやすく、チーム開発では必須の技術作法です。",
          },
          {
            question: "SQL上達のコツは？",
            answer: "①基本4文（SELECT・INSERT・UPDATE・DELETE）の徹底②JOIN（INNER・LEFT・RIGHT・OUTER）の理解③サブクエリ・WITH句活用④インデックス・実行計画（EXPLAIN）の理解⑤ストアドプロシージャ・ビュー等の応用。SQL Fiddleで実践練習、実務でパフォーマンスチューニングを担当すると急上達します。",
          },
          {
            question: "データベースの種類は？",
            answer: "MySQL（WordPress・小規模Web）、PostgreSQL（高機能・複雑な処理）、SQL Server（Microsoft系）、Oracle（エンタープライズ）、SQLite（アプリ組込み・軽量）。クラウドでは AWS RDS・Google Cloud SQL・Azure SQL が主流、スタートアップは PostgreSQL・MySQL が一般的です。",
          },
          {
            question: "NoSQLとの使い分けは？",
            answer: "SQL（RDB）：構造化データ・トランザクション必須（金融・EC）。NoSQL（MongoDB・DynamoDB）：大量データ・柔軟なスキーマ（SNS・ログ）。モダンアプリは両方併用、SQL＋Redis（キャッシュ）＋Elasticsearch（全文検索）の複合構成が定番、要件で選択します。",
          },
        ]}
      />
      <AffiliateSection slug="sql-formatter" category="開発ツール" />
      <RelatedTools currentSlug="sql-formatter" category="開発ツール" />
    </div>
  );
}
