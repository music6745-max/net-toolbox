"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

function formatXML(xml: string, indentSize: number): string {
  const indentStr = " ".repeat(indentSize);
  let formatted = "";
  let depth = 0;
  const tagRegex = /(<[^>]+>|[^<]+)/g;

  const parts = xml.match(tagRegex) || [];

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("</")) {
      // Closing tag
      depth = Math.max(0, depth - 1);
      formatted += indentStr.repeat(depth) + trimmed + "\n";
    } else if (
      trimmed.startsWith("<") &&
      !trimmed.startsWith("<?") &&
      !trimmed.startsWith("<!") &&
      !trimmed.endsWith("/>")
    ) {
      // Opening tag
      formatted += indentStr.repeat(depth) + trimmed + "\n";
      depth++;
    } else if (trimmed.startsWith("<")) {
      // Self-closing or declaration
      formatted += indentStr.repeat(depth) + trimmed + "\n";
    } else {
      // Text content
      formatted += indentStr.repeat(depth) + trimmed + "\n";
    }
  }

  return formatted.trim();
}

export default function XmlFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);
  const [copied, setCopied] = useState(false);

  const format = () => {
    if (!input.trim()) {
      setError("XMLを入力してください");
      setOutput("");
      return;
    }
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, "application/xml");
      const parseError = doc.querySelector("parsererror");
      if (parseError) {
        setError("XMLの構文エラー: " + parseError.textContent?.split("\n")[0]);
        setOutput("");
        return;
      }
      const serializer = new XMLSerializer();
      const raw = serializer.serializeToString(doc);
      setOutput(formatXML(raw, indent));
      setError("");
    } catch (e) {
      setError(`エラー: ${(e as Error).message}`);
      setOutput("");
    }
  };

  const clear = () => {
    setInput("");
    setOutput("");
    setError("");
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
        <span>XML整形</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">XML整形ツール</h1>
      <p className="text-muted mb-8">
        XMLデータを見やすくフォーマットします。インデントを付けて階層構造を分かりやすく表示します。構文エラーの検出も行います。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">XML入力</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='<?xml version="1.0"?><root><item id="1"><name>テスト</name></item></root>'
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none bg-background"
          rows={8}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

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
        <h2 className="text-lg font-bold mb-3">XML整形ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアにXMLデータを入力またはペーストします。</p>
          <p>2. 「整形する」ボタンをクリックするとXMLが見やすく整形されます。</p>
          <p>3. インデント幅を2スペースまたは4スペースから選択できます。</p>
          <p>4. 結果は「コピー」ボタンでクリップボードにコピーできます。</p>
          <p>XMLに構文エラーがある場合は、エラー内容が表示されます。すべての処理はブラウザ内で完結します。</p>
        </div>
      </section>


      <RelatedTools currentSlug="xml-formatter" category="開発ツール" />
    </div>
  );
}
