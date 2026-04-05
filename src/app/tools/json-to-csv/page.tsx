"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function JsonToCsvPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const convert = () => {
    setError("");
    try {
      const data = JSON.parse(input);
      const arr = Array.isArray(data) ? data : [data];
      if (arr.length === 0) { setOutput(""); return; }
      const headers = [...new Set(arr.flatMap(obj => Object.keys(obj)))];
      const escape = (v: unknown) => {
        const s = v === null || v === undefined ? "" : String(v);
        return s.includes(",") || s.includes("\"") || s.includes("\n") ? "\"" + s.replace(/"/g, "\"\"") + "\"" : s;
      };
      const lines = [headers.join(",")];
      arr.forEach(obj => {
        lines.push(headers.map(h => escape(obj[h])).join(","));
      });
      setOutput(lines.join("\n"));
    } catch {
      setError("JSONの解析に失敗しました。正しいJSON形式か確認してください。");
    }
  };

  const copy = () => { navigator.clipboard.writeText(output); };
  const download = () => {
    const blob = new Blob([output], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "data.csv";
    a.click();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>JSON→CSV変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">JSON→CSV変換ツール</h1>
      <p className="text-muted mb-8">JSON配列をCSV形式に変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">JSON入力</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-sm" placeholder='[{"name": "太郎", "age": 30}, {"name": "花子", "age": 25}]' />
        </div>
        <button onClick={convert} className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition">変換する</button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {output && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium">CSV出力</label>
              <div className="flex gap-2">
                <button onClick={copy} className="text-xs bg-card-bg border border-card-border rounded px-2 py-1 hover:opacity-80">コピー</button>
                <button onClick={download} className="text-xs bg-card-bg border border-card-border rounded px-2 py-1 hover:opacity-80">ダウンロード</button>
              </div>
            </div>
            <textarea readOnly value={output} rows={8} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent font-mono text-sm" />
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>JSON配列を貼り付けて「変換する」をクリックすると、CSVに変換されます。結果はコピーまたはダウンロードできます。</p></div></section>
      <AffiliateSection slug="json-to-csv" category="開発ツール" />
      <RelatedTools currentSlug="json-to-csv" category="開発ツール" />
    </div>
  );
}
