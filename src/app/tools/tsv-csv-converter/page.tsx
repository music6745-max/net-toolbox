"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function tsvToCSV(tsv: string): string {
  return tsv
    .split(/\r?\n/)
    .map((line) => {
      return line
        .split("\t")
        .map((cell) => {
          if (cell.includes(",") || cell.includes('"') || cell.includes("\n")) {
            return `"${cell.replace(/"/g, '""')}"`;
          }
          return cell;
        })
        .join(",");
    })
    .join("\n");
}

function csvToTSV(csv: string): string {
  const lines = csv.split(/\r?\n/);
  return lines
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
      return cells.join("\t");
    })
    .join("\n");
}

export default function TsvCsvConverterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"tsv2csv" | "csv2tsv">("tsv2csv");
  const [copied, setCopied] = useState(false);

  const convert = () => {
    if (!input.trim()) return;
    setOutput(mode === "tsv2csv" ? tsvToCSV(input) : csvToTSV(input));
  };

  const copyOutput = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const swap = () => {
    setInput(output);
    setOutput("");
    setMode(mode === "tsv2csv" ? "csv2tsv" : "tsv2csv");
  };

  const reset = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>TSV⇔CSV変換ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">TSV⇔CSV変換ツール</h1>
      <p className="text-muted mb-8">
        TSV（タブ区切り）とCSV（カンマ区切り）を相互に変換します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">変換モード</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="tsv2csv"
                checked={mode === "tsv2csv"}
                onChange={() => { setMode("tsv2csv"); setOutput(""); }}
                className="accent-primary"
              />
              TSV → CSV
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="csv2tsv"
                checked={mode === "csv2tsv"}
                onChange={() => { setMode("csv2tsv"); setOutput(""); }}
                className="accent-primary"
              />
              CSV → TSV
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {mode === "tsv2csv" ? "TSV入力（タブ区切り）" : "CSV入力（カンマ区切り）"}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "tsv2csv"
                ? "名前\t年齢\t都市\n山田太郎\t30\t東京"
                : "名前,年齢,都市\n山田太郎,30,東京"
            }
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={6}
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={convert}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            変換する
          </button>
          <button
            onClick={swap}
            className="border border-card-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-background transition-colors"
          >
            結果を入力へ（逆変換）
          </button>
          <button
            onClick={reset}
            className="border border-card-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                {mode === "tsv2csv" ? "CSV出力（カンマ区切り）" : "TSV出力（タブ区切り）"}
              </span>
              <button
                onClick={copyOutput}
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <pre className="bg-background rounded-lg p-4 border border-card-border text-sm font-mono overflow-x-auto whitespace-pre max-h-72 overflow-y-auto">
              {output}
            </pre>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">TSV⇔CSV変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 変換モード（TSV→CSV または CSV→TSV）を選択します。</p>
          <p>2. テキストエリアにデータを貼り付けます。Excelやスプレッドシートからコピーしたデータはタブ区切り（TSV）です。</p>
          <p>3. 「変換する」ボタンを押すと変換結果が表示されます。</p>
          <p>4. 「コピー」ボタンで結果をコピーできます。「結果を入力へ」で逆方向の変換ができます。</p>
          <p>※ カンマを含むCSVフィールドは自動的にクォートで囲まれます。</p>
        </div>
      </section>


      <AffiliateSection slug="tsv-csv-converter" category="開発ツール" />
      <RelatedTools currentSlug="tsv-csv-converter" category="開発ツール" />
    </div>
  );
}
