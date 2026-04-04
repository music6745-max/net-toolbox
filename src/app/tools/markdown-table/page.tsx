"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const DEFAULT_ROWS = 3;
const DEFAULT_COLS = 3;
const MAX_ROWS = 20;
const MAX_COLS = 10;

type Align = "left" | "center" | "right";

function generateMarkdown(
  headers: string[],
  rows: string[][],
  aligns: Align[]
): string {
  const colCount = headers.length;
  const colWidths = headers.map((h, i) => {
    const maxData = rows.reduce(
      (max, row) => Math.max(max, (row[i] ?? "").length),
      0
    );
    return Math.max(h.length, maxData, 3);
  });

  const pad = (s: string, w: number, align: Align) => {
    if (align === "center") return s.padStart(Math.ceil((w + s.length) / 2), " ").padEnd(w, " ");
    if (align === "right") return s.padStart(w, " ");
    return s.padEnd(w, " ");
  };

  const headerRow = "| " + headers.map((h, i) => pad(h, colWidths[i], aligns[i])).join(" | ") + " |";

  const separatorRow =
    "| " +
    aligns
      .map((a, i) => {
        const w = colWidths[i];
        if (a === "center") return ":" + "-".repeat(w - 2) + ":";
        if (a === "right") return "-".repeat(w - 1) + ":";
        return "-".repeat(w);
      })
      .join(" | ") +
    " |";

  const dataRows = rows.map(
    (row) =>
      "| " +
      Array.from({ length: colCount }, (_, i) => pad(row[i] ?? "", colWidths[i], aligns[i])).join(" | ") +
      " |"
  );

  return [headerRow, separatorRow, ...dataRows].join("\n");
}

export default function MarkdownTablePage() {
  const [cols, setCols] = useState(DEFAULT_COLS);
  const [rowCount, setRowCount] = useState(DEFAULT_ROWS);
  const [headers, setHeaders] = useState<string[]>(() =>
    Array.from({ length: DEFAULT_COLS }, (_, i) => `見出し${i + 1}`)
  );
  const [rows, setRows] = useState<string[][]>(() =>
    Array.from({ length: DEFAULT_ROWS }, () => Array(DEFAULT_COLS).fill(""))
  );
  const [aligns, setAligns] = useState<Align[]>(() => Array(DEFAULT_COLS).fill("left"));
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const resize = useCallback(
    (newCols: number, newRows: number) => {
      setHeaders((prev) =>
        Array.from({ length: newCols }, (_, i) => prev[i] ?? `見出し${i + 1}`)
      );
      setAligns((prev) =>
        Array.from({ length: newCols }, (_, i) => prev[i] ?? "left")
      );
      setRows((prev) =>
        Array.from({ length: newRows }, (_, r) =>
          Array.from({ length: newCols }, (_, c) => (prev[r] ?? [])[c] ?? "")
        )
      );
    },
    []
  );

  const handleColChange = (v: number) => {
    const n = Math.min(Math.max(1, v), MAX_COLS);
    setCols(n);
    resize(n, rowCount);
  };

  const handleRowChange = (v: number) => {
    const n = Math.min(Math.max(1, v), MAX_ROWS);
    setRowCount(n);
    resize(cols, n);
  };

  const updateHeader = (i: number, val: string) => {
    setHeaders((prev) => prev.map((h, idx) => (idx === i ? val : h)));
  };

  const updateCell = (r: number, c: number, val: string) => {
    setRows((prev) =>
      prev.map((row, ri) =>
        ri === r ? row.map((cell, ci) => (ci === c ? val : cell)) : row
      )
    );
  };

  const updateAlign = (i: number, val: Align) => {
    setAligns((prev) => prev.map((a, idx) => (idx === i ? val : a)));
  };

  const generate = () => {
    setResult(generateMarkdown(headers, rows, aligns));
  };

  const copy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const alignIcons: Record<Align, string> = { left: "左", center: "中", right: "右" };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>マークダウンテーブル生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">マークダウンテーブル生成ツール</h1>
      <p className="text-muted mb-8">
        行数・列数を指定してデータを入力するだけでMarkdown形式の表を生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div className="flex flex-wrap gap-6 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">列数</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleColChange(cols - 1)}
                disabled={cols <= 1}
                className="w-8 h-8 rounded-lg border border-card-border bg-background text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-30"
              >
                -
              </button>
              <span className="w-8 text-center font-mono font-bold">{cols}</span>
              <button
                onClick={() => handleColChange(cols + 1)}
                disabled={cols >= MAX_COLS}
                className="w-8 h-8 rounded-lg border border-card-border bg-background text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-30"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">行数（ヘッダー除く）</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleRowChange(rowCount - 1)}
                disabled={rowCount <= 1}
                className="w-8 h-8 rounded-lg border border-card-border bg-background text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-30"
              >
                -
              </button>
              <span className="w-8 text-center font-mono font-bold">{rowCount}</span>
              <button
                onClick={() => handleRowChange(rowCount + 1)}
                disabled={rowCount >= MAX_ROWS}
                className="w-8 h-8 rounded-lg border border-card-border bg-background text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-30"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="p-1">
                    <input
                      type="text"
                      value={h}
                      onChange={(e) => updateHeader(i, e.target.value)}
                      placeholder={`見出し${i + 1}`}
                      className="w-full border border-primary/50 rounded-lg px-3 py-2 text-sm font-medium bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-center"
                    />
                  </th>
                ))}
              </tr>
              <tr>
                {aligns.map((a, i) => (
                  <td key={i} className="p-1">
                    <div className="flex gap-1 justify-center">
                      {(["left", "center", "right"] as Align[]).map((al) => (
                        <button
                          key={al}
                          onClick={() => updateAlign(i, al)}
                          className={`flex-1 py-1 rounded text-xs font-medium transition-colors ${
                            a === al
                              ? "bg-primary text-white"
                              : "bg-background border border-card-border text-muted hover:text-primary"
                          }`}
                        >
                          {alignIcons[al]}
                        </button>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, r) => (
                <tr key={r}>
                  {Array.from({ length: cols }, (_, c) => (
                    <td key={c} className="p-1">
                      <input
                        type="text"
                        value={row[c] ?? ""}
                        onChange={(e) => updateCell(r, c, e.target.value)}
                        placeholder={`データ ${r + 1}-${c + 1}`}
                        className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={generate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          Markdownを生成
        </button>

        {result && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">生成されたMarkdown</span>
              <button
                onClick={copy}
                className="text-xs text-primary hover:text-primary-hover font-medium border border-card-border rounded px-3 py-1"
              >
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <textarea
              readOnly
              value={result}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono bg-background resize-none"
              rows={rowCount + 4}
            />
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>列数と行数を設定し、見出しとデータを入力して「Markdownを生成」をクリックします。</p>
          <p>各列のアライメント（左・中・右寄せ）を設定できます。</p>
          <p>生成されたMarkdownをGitHubのREADMEやQiitaの記事にそのまま貼り付けて使用できます。</p>
          <p>最大 {MAX_COLS} 列 × {MAX_ROWS} 行まで対応しています。</p>
        </div>
      </section>


      <AffiliateSection slug="markdown-table" category="開発ツール" />
      <RelatedTools currentSlug="markdown-table" category="開発ツール" />
    </div>
  );
}
