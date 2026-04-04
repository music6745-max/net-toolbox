"use client";
import { useState } from "react";
import Link from "next/link";

function csvToJson(csv: string): string {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return "[]";
  const headers = lines[0].split(",").map((h) => h.trim());
  const result = lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => { obj[h] = values[i] || ""; });
    return obj;
  });
  return JSON.stringify(result, null, 2);
}

function jsonToCsv(json: string): string {
  const arr = JSON.parse(json);
  if (!Array.isArray(arr) || arr.length === 0) return "";
  const headers = Object.keys(arr[0]);
  const rows = arr.map((obj: Record<string, string>) => headers.map((h) => obj[h] ?? "").join(","));
  return [headers.join(","), ...rows].join("\n");
}

export default function CsvJsonPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const copy = async () => { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const toJson = () => { try { setOutput(csvToJson(input)); setError(""); } catch { setError("CSVの形式が正しくありません"); } };
  const toCsv = () => { try { setOutput(jsonToCsv(input)); setError(""); } catch { setError("JSONの形式が正しくありません"); } };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>CSV⇔JSON変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">CSV⇔JSON変換ツール</h1>
      <p className="text-muted mb-8">CSVデータをJSON形式に、またはJSONデータをCSV形式に変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">入力データ</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="name,age,city&#10;太郎,25,東京&#10;花子,30,大阪" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" rows={6} />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex gap-3 mt-4">
          <button onClick={toJson} className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover">CSV → JSON</button>
          <button onClick={toCsv} className="bg-foreground text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90">JSON → CSV</button>
        </div>
        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">出力結果</span><button onClick={copy} className="text-sm text-primary font-medium">{copied ? "コピー済み" : "コピー"}</button></div>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto max-h-60 overflow-y-auto whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">CSV⇔JSON変換ツールの使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>CSVデータを入力して「CSV → JSON」をクリックするとJSON形式に変換されます。</p><p>逆にJSONデータを入力して「JSON → CSV」でCSV形式に変換できます。</p></div></section>
    </div>
  );
}
