"use client";

import { useState } from "react";
import Link from "next/link";

function computeDiff(a: string, b: string) {
  const linesA = a.split("\n");
  const linesB = b.split("\n");
  const result: { type: "same" | "removed" | "added"; text: string }[] = [];
  const max = Math.max(linesA.length, linesB.length);

  for (let i = 0; i < max; i++) {
    const lineA = linesA[i];
    const lineB = linesB[i];
    if (lineA === lineB) {
      result.push({ type: "same", text: lineA ?? "" });
    } else {
      if (lineA !== undefined) result.push({ type: "removed", text: lineA });
      if (lineB !== undefined) result.push({ type: "added", text: lineB });
    }
  }
  return result;
}

export default function TextDiffPage() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [diff, setDiff] = useState<ReturnType<typeof computeDiff> | null>(null);

  const compare = () => setDiff(computeDiff(textA, textB));

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>テキスト差分比較</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">テキスト差分比較ツール</h1>
      <p className="text-muted mb-8">
        2つのテキストを比較して、差分をハイライト表示します。変更箇所を素早く見つけられます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">テキスト1（変更前）</label>
            <textarea value={textA} onChange={(e) => setTextA(e.target.value)}
              placeholder="変更前のテキスト..."
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" rows={8} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">テキスト2（変更後）</label>
            <textarea value={textB} onChange={(e) => setTextB(e.target.value)}
              placeholder="変更後のテキスト..."
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" rows={8} />
          </div>
        </div>

        <button onClick={compare}
          className="mt-4 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
          比較する
        </button>

        {diff && (
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">差分結果</h3>
            <div className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto max-h-96 overflow-y-auto">
              {diff.map((line, i) => (
                <div key={i} className={`px-2 py-0.5 ${
                  line.type === "removed" ? "bg-red-100 text-red-800" :
                  line.type === "added" ? "bg-green-100 text-green-800" : ""
                }`}>
                  <span className="select-none mr-2 text-muted">
                    {line.type === "removed" ? "-" : line.type === "added" ? "+" : " "}
                  </span>
                  {line.text || "\u00A0"}
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-2 text-xs text-muted">
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-100 rounded"></span> 削除</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-100 rounded"></span> 追加</span>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">テキスト差分比較ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>左右のテキストエリアにそれぞれ比較したいテキストを入力し、「比較する」をクリックします。</p>
          <p>削除された行は赤色、追加された行は緑色でハイライト表示されます。</p>
          <p>コードレビューや文書の変更確認に便利です。</p>
        </div>
      </section>
    </div>
  );
}
