"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const MAX_ROWS = 20;
const MAX_COLS = 10;

function buildTable(
  data: string[][],
  rows: number,
  cols: number,
  hasHeader: boolean,
  tableClass: string,
  thClass: string,
  tdClass: string,
  addBorder: boolean,
  addStriped: boolean,
): string {
  const borderAttr = addBorder ? ' border="1"' : "";
  const cls = [tableClass, addStriped ? "striped" : ""].filter(Boolean).join(" ");
  const tableAttr = cls ? ` class="${cls}"` : "";
  const lines: string[] = [`<table${tableAttr}${borderAttr}>`];

  if (hasHeader) {
    lines.push("  <thead>", "    <tr>");
    for (let c = 0; c < cols; c++) {
      const cell = data[0]?.[c] ?? "";
      const thAttr = thClass ? ` class="${thClass}"` : "";
      lines.push(`      <th${thAttr}>${cell}</th>`);
    }
    lines.push("    </tr>", "  </thead>", "  <tbody>");
    for (let r = 1; r < rows; r++) {
      lines.push("    <tr>");
      for (let c = 0; c < cols; c++) {
        const cell = data[r]?.[c] ?? "";
        const tdAttr = tdClass ? ` class="${tdClass}"` : "";
        lines.push(`      <td${tdAttr}>${cell}</td>`);
      }
      lines.push("    </tr>");
    }
    lines.push("  </tbody>");
  } else {
    lines.push("  <tbody>");
    for (let r = 0; r < rows; r++) {
      lines.push("    <tr>");
      for (let c = 0; c < cols; c++) {
        const cell = data[r]?.[c] ?? "";
        const tdAttr = tdClass ? ` class="${tdClass}"` : "";
        lines.push(`      <td${tdAttr}>${cell}</td>`);
      }
      lines.push("    </tr>");
    }
    lines.push("  </tbody>");
  }
  lines.push("</table>");
  return lines.join("\n");
}

export default function HtmlTablePage() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [hasHeader, setHasHeader] = useState(true);
  const [addBorder, setAddBorder] = useState(false);
  const [addStriped, setAddStriped] = useState(false);
  const [tableClass, setTableClass] = useState("");
  const [thClass, setThClass] = useState("");
  const [tdClass, setTdClass] = useState("");
  const [data, setData] = useState<string[][]>(() =>
    Array.from({ length: MAX_ROWS }, (_, r) =>
      Array.from({ length: MAX_COLS }, (_, c) => (r === 0 ? `見出し${c + 1}` : ""))
    )
  );
  const [copied, setCopied] = useState(false);

  const updateCell = useCallback((r: number, c: number, val: string) => {
    setData((prev) => {
      const next = prev.map((row) => [...row]);
      next[r][c] = val;
      return next;
    });
  }, []);

  const html = buildTable(data, rows, cols, hasHeader, tableClass, thClass, tdClass, addBorder, addStriped);

  const copy = async () => {
    await navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>HTMLテーブル生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">HTMLテーブル生成ツール</h1>
      <p className="text-muted mb-8">
        行数・列数を設定してセルにデータを入力するだけでHTMLテーブルコードを生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <h2 className="font-bold text-sm mb-4">テーブル設定</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-xs text-muted mb-1">行数（1〜{MAX_ROWS}）</label>
            <input
              type="number"
              min={1}
              max={MAX_ROWS}
              value={rows}
              onChange={(e) => setRows(Math.min(MAX_ROWS, Math.max(1, Number(e.target.value))))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-xs text-muted mb-1">列数（1〜{MAX_COLS}）</label>
            <input
              type="number"
              min={1}
              max={MAX_COLS}
              value={cols}
              onChange={(e) => setCols(Math.min(MAX_COLS, Math.max(1, Number(e.target.value))))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-xs text-muted mb-1">table クラス</label>
            <input
              type="text"
              value={tableClass}
              onChange={(e) => setTableClass(e.target.value)}
              placeholder="例: table table-sm"
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-xs text-muted mb-1">th クラス</label>
            <input
              type="text"
              value={thClass}
              onChange={(e) => setThClass(e.target.value)}
              placeholder="例: text-left"
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={hasHeader} onChange={(e) => setHasHeader(e.target.checked)} />
            1行目をヘッダー（&lt;thead&gt;）にする
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={addBorder} onChange={(e) => setAddBorder(e.target.checked)} />
            border=&quot;1&quot; を追加
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={addStriped} onChange={(e) => setAddStriped(e.target.checked)} />
            striped クラスを追加
          </label>
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-4 mb-6 overflow-x-auto">
        <h2 className="font-bold text-sm mb-3">セルデータ入力</h2>
        <table className="border-collapse w-full">
          <tbody>
            {Array.from({ length: rows }, (_, r) => (
              <tr key={r}>
                {r === 0 && hasHeader && (
                  <td className="text-xs text-muted pr-2 whitespace-nowrap">見出し行</td>
                )}
                {r !== 0 && hasHeader && (
                  <td className="text-xs text-muted pr-2 whitespace-nowrap">行 {r}</td>
                )}
                {!hasHeader && (
                  <td className="text-xs text-muted pr-2 whitespace-nowrap">行 {r + 1}</td>
                )}
                {Array.from({ length: cols }, (_, c) => (
                  <td key={c} className="p-1">
                    <input
                      type="text"
                      value={data[r]?.[c] ?? ""}
                      onChange={(e) => updateCell(r, c, e.target.value)}
                      className={`w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 min-w-[80px] ${
                        r === 0 && hasHeader
                          ? "border-primary/40 bg-primary/5 font-medium"
                          : "border-card-border"
                      }`}
                      placeholder={r === 0 && hasHeader ? `見出し${c + 1}` : `(${r + 1},${c + 1})`}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-sm">生成されたHTMLコード</h2>
          <button
            onClick={copy}
            className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
        <pre className="bg-background rounded-lg p-4 text-xs font-mono overflow-x-auto whitespace-pre-wrap">
          {html}
        </pre>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>行数・列数を設定し、各セルにデータを入力します。設定はリアルタイムでコードに反映されます。</p>
          <p>「1行目をヘッダーにする」をオンにすると、1行目が &lt;thead&gt; 内の &lt;th&gt; として出力されます。</p>
          <p>クラス名欄にBootstrapなどのCSSフレームワークのクラスを入力すると、属性に追加されます。</p>
          <p>「コピー」ボタンでHTMLをクリップボードにコピーし、エディタに貼り付けてご利用ください。</p>
        </div>
      </section>


      <AffiliateSection slug="html-table" category="開発ツール" />
      <RelatedTools currentSlug="html-table" category="開発ツール" />
    </div>
  );
}
