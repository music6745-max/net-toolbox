"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function parseCSV(text: string): string[][] {
  const lines = text.split(/\r?\n/);
  return lines
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const cells: string[] = [];
      let current = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
          if (inQuotes && line[i + 1] === '"') {
            current += '"';
            i++;
          } else {
            inQuotes = !inQuotes;
          }
        } else if (ch === "," && !inQuotes) {
          cells.push(current);
          current = "";
        } else {
          current += ch;
        }
      }
      cells.push(current);
      return cells;
    });
}

export default function CsvViewerPage() {
  const [input, setInput] = useState("");
  const [hasHeader, setHasHeader] = useState(true);
  const [parsed, setParsed] = useState<string[][] | null>(null);
  const [error, setError] = useState("");
  const [sortCol, setSortCol] = useState<number | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const parse = () => {
    if (!input.trim()) {
      setError("CSVデータを入力してください");
      setParsed(null);
      return;
    }
    try {
      const rows = parseCSV(input);
      if (rows.length === 0) {
        setError("有効なデータがありません");
        setParsed(null);
        return;
      }
      setError("");
      setParsed(rows);
      setSortCol(null);
    } catch {
      setError("CSVの解析に失敗しました");
      setParsed(null);
    }
  };

  const headers = parsed && hasHeader ? parsed[0] : null;
  const dataRows = parsed ? (hasHeader ? parsed.slice(1) : parsed) : [];

  const sortedRows = useMemo(() => {
    if (sortCol === null) return dataRows;
    return [...dataRows].sort((a, b) => {
      const av = a[sortCol] ?? "";
      const bv = b[sortCol] ?? "";
      const an = parseFloat(av);
      const bn = parseFloat(bv);
      if (!isNaN(an) && !isNaN(bn)) return sortAsc ? an - bn : bn - an;
      return sortAsc ? av.localeCompare(bv, "ja") : bv.localeCompare(av, "ja");
    });
  }, [dataRows, sortCol, sortAsc]);

  const handleSort = (col: number) => {
    if (sortCol === col) {
      setSortAsc(!sortAsc);
    } else {
      setSortCol(col);
      setSortAsc(true);
    }
  };

  const colCount = parsed ? Math.max(...parsed.map((r) => r.length)) : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>CSVビューアーツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">CSVビューアーツール</h1>
      <p className="text-muted mb-8">
        CSVデータを表形式で表示します。列のヘッダーをクリックすると並び替えができます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">CSVデータ入力</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={"名前,年齢,都市\n山田太郎,30,東京\n鈴木花子,25,大阪"}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={6}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={hasHeader}
              onChange={(e) => setHasHeader(e.target.checked)}
              className="accent-primary"
            />
            1行目をヘッダーとして扱う
          </label>
          <button
            onClick={parse}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            表示する
          </button>
          <button
            onClick={() => { setInput(""); setParsed(null); setError(""); }}
            className="border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>
      </div>

      {parsed && (
        <div className="mt-6">
          <p className="text-sm text-muted mb-3">
            {sortedRows.length}行 × {colCount}列
            {hasHeader && " （ヘッダー除く）"}
          </p>
          <div className="overflow-x-auto rounded-xl border border-card-border">
            <table className="min-w-full text-sm">
              {headers && (
                <thead className="bg-card-bg">
                  <tr>
                    {headers.map((h, i) => (
                      <th
                        key={i}
                        onClick={() => handleSort(i)}
                        className="px-4 py-3 text-left font-semibold border-b border-card-border cursor-pointer select-none hover:bg-background transition-colors whitespace-nowrap"
                      >
                        {h}
                        {sortCol === i && (
                          <span className="ml-1 text-primary">{sortAsc ? "▲" : "▼"}</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {sortedRows.map((row, ri) => (
                  <tr
                    key={ri}
                    className={ri % 2 === 0 ? "bg-background" : "bg-card-bg"}
                  >
                    {Array.from({ length: colCount }).map((_, ci) => (
                      <td
                        key={ci}
                        className="px-4 py-2.5 border-b border-card-border font-mono break-all"
                      >
                        {row[ci] ?? ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">CSVビューアーツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアにCSVデータを貼り付けます。</p>
          <p>2. 「1行目をヘッダーとして扱う」にチェックを入れると、1行目が列名として表示されます。</p>
          <p>3. 「表示する」ボタンを押すと表形式で表示されます。</p>
          <p>4. ヘッダー行の列名をクリックすると、その列で昇順/降順に並び替えができます。</p>
          <p>※ クォート（&quot;）で囲まれたフィールドやカンマを含む値にも対応しています。</p>
        </div>
      </section>


      <AffiliateSection slug="csv-viewer" category="開発ツール" />
      <RelatedTools currentSlug="csv-viewer" category="開発ツール" />
    </div>
  );
}
