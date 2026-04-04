"use client";

import { useState } from "react";
import Link from "next/link";

function formatCSS(css: string, indentSize: number): string {
  const indentStr = " ".repeat(indentSize);
  let result = "";
  let depth = 0;
  // Tokenize by { } ;
  const tokens = css.replace(/\/\*[\s\S]*?\*\//g, (m) => m).split(/([\{\};])/);

  for (let token of tokens) {
    token = token.trim();
    if (!token) continue;

    if (token === "{") {
      result = result.trimEnd() + " {\n";
      depth++;
    } else if (token === "}") {
      depth = Math.max(0, depth - 1);
      result += indentStr.repeat(depth) + "}\n\n";
    } else if (token === ";") {
      result = result.trimEnd() + ";\n";
    } else {
      // Could be selector or property:value
      const lines = token.split("\n").map((l) => l.trim()).filter(Boolean);
      for (const line of lines) {
        if (line) {
          result += indentStr.repeat(depth) + line;
          // If this looks like a declaration without semicolon already handled
          if (!line.endsWith("{") && !line.endsWith("}")) {
            result += "\n";
          }
        }
      }
    }
  }

  return result.trim();
}

function minifyCSS(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*{\s*/g, "{")
    .replace(/\s*}\s*/g, "}")
    .replace(/\s*;\s*/g, ";")
    .replace(/\s*:\s*/g, ":")
    .replace(/\s*,\s*/g, ",")
    .trim();
}

export default function CssFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indent, setIndent] = useState(2);
  const [copied, setCopied] = useState(false);

  const format = () => {
    if (!input.trim()) return;
    setOutput(formatCSS(input, indent));
  };

  const minify = () => {
    if (!input.trim()) return;
    setOutput(minifyCSS(input));
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
        <span>CSSフォーマッター</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">CSSフォーマッターツール</h1>
      <p className="text-muted mb-8">
        CSSコードを見やすく整形します。適切なインデントと改行を自動で追加します。圧縮（ミニファイ）にも対応。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">CSS入力</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder=".container{display:flex;align-items:center;}.title{font-size:24px;color:#333;}"
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none bg-background"
          rows={8}
        />

        <div className="flex flex-wrap items-center gap-3 mt-4">
          <button
            onClick={format}
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            整形（フォーマット）
          </button>
          <button
            onClick={minify}
            className="bg-foreground text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            圧縮（ミニファイ）
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
        <h2 className="text-lg font-bold mb-3">CSSフォーマッターの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアにCSSコードを入力またはペーストします。</p>
          <p>2. 「整形」ボタンで見やすくフォーマット、「圧縮」ボタンで1行に圧縮します。</p>
          <p>3. インデント幅は2スペース・4スペースから選択できます。</p>
          <p>4. 結果は「コピー」ボタンでクリップボードにコピーできます。</p>
          <p>すべての処理はブラウザ内で完結するため、CSSの内容がサーバーに送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
