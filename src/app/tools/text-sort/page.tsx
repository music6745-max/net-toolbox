"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type SortOrder = "asc" | "desc";

export default function TextSortPage() {
  const [input, setInput] = useState("");
  const [order, setOrder] = useState<SortOrder>("asc");
  const [caseInsensitive, setCaseInsensitive] = useState(false);
  const [numericSort, setNumericSort] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [output, setOutput] = useState("");
  const [lineCount, setLineCount] = useState<number | null>(null);

  const sort = () => {
    const lines = input.split("\n");
    let sorted = [...lines];

    sorted.sort((a, b) => {
      const ca = caseInsensitive ? a.toLowerCase() : a;
      const cb = caseInsensitive ? b.toLowerCase() : b;
      if (numericSort) {
        const na = parseFloat(ca);
        const nb = parseFloat(cb);
        if (!isNaN(na) && !isNaN(nb)) {
          return order === "asc" ? na - nb : nb - na;
        }
      }
      if (order === "asc") {
        return ca < cb ? -1 : ca > cb ? 1 : 0;
      } else {
        return ca > cb ? -1 : ca < cb ? 1 : 0;
      }
    });

    if (reverse) {
      sorted = sorted.reverse();
    }

    setOutput(sorted.join("\n"));
    setLineCount(sorted.length);
  };

  const copyToClipboard = () => {
    if (output) navigator.clipboard.writeText(output);
  };

  const reset = () => {
    setInput("");
    setOutput("");
    setLineCount(null);
    setOrder("asc");
    setCaseInsensitive(false);
    setNumericSort(false);
    setReverse(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>テキスト行ソート</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">テキスト行ソートツール</h1>
      <p className="text-muted mb-8">
        複数行のテキストを各行ごとに並べ替えます。昇順・降順・数値ソートなどに対応。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">テキストを入力（1行に1項目）</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={"例:\nバナナ\nりんご\nぶどう\nみかん"}
            rows={8}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
          />
        </div>

        <div className="mb-6 space-y-3">
          <div>
            <label className="block text-sm font-medium mb-2">並び順</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="order"
                  checked={order === "asc"}
                  onChange={() => setOrder("asc")}
                  className="accent-primary"
                />
                昇順（A→Z）
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="order"
                  checked={order === "desc"}
                  onChange={() => setOrder("desc")}
                  className="accent-primary"
                />
                降順（Z→A）
              </label>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={caseInsensitive}
                onChange={(e) => setCaseInsensitive(e.target.checked)}
                className="accent-primary w-4 h-4"
              />
              大文字小文字を区別しない
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={numericSort}
                onChange={(e) => setNumericSort(e.target.checked)}
                className="accent-primary w-4 h-4"
              />
              数値として並べ替え
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={reverse}
                onChange={(e) => setReverse(e.target.checked)}
                className="accent-primary w-4 h-4"
              />
              並べ替え後に逆順にする
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={sort}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            disabled={!input.trim()}
          >
            ソートする
          </button>
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {output && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">
                結果
                {lineCount !== null && (
                  <span className="ml-2 text-xs text-muted font-normal">{lineCount} 行</span>
                )}
              </label>
              <button
                onClick={copyToClipboard}
                className="text-xs text-primary hover:text-primary-hover transition-colors"
              >
                コピー
              </button>
            </div>
            <textarea
              value={output}
              readOnly
              rows={8}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono bg-background focus:outline-none resize-y"
            />
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">テキスト行ソートツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアに並べ替えたいテキストを1行ずつ入力します。</p>
          <p>2. 並び順（昇順・降順）を選択します。</p>
          <p>3. 必要に応じてオプションを設定します。「大文字小文字を区別しない」でaとAを同等に扱い、「数値として並べ替え」で10が2より後ろに来るよう正しく並べます。</p>
          <p>4. 「ソートする」ボタンをクリックすると結果が表示されます。「コピー」ボタンで結果をクリップボードにコピーできます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="text-sort" category="テキスト" />
    </div>
  );
}
