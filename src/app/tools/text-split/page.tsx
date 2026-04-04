"use client";

import { useState } from "react";
import Link from "next/link";

const DELIMITER_OPTIONS = [
  { label: "カンマ（,）", value: "," },
  { label: "タブ（\\t）", value: "\t" },
  { label: "改行", value: "\n" },
  { label: "スペース", value: " " },
  { label: "カスタム", value: "custom" },
];

export default function TextSplitPage() {
  const [input, setInput] = useState("");
  const [delimiter, setDelimiter] = useState(",");
  const [customDelimiter, setCustomDelimiter] = useState("");
  const [trimItems, setTrimItems] = useState(true);
  const [removeEmpty, setRemoveEmpty] = useState(true);
  const [items, setItems] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const split = () => {
    const sep = delimiter === "custom" ? customDelimiter : delimiter;
    if (!sep) return;
    let result = input.split(sep);
    if (trimItems) result = result.map((s) => s.trim());
    if (removeEmpty) result = result.filter((s) => s !== "");
    setItems(result);
  };

  const reset = () => {
    setInput("");
    setItems([]);
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(items.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>テキスト分割ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">テキスト分割ツール</h1>
      <p className="text-muted mb-8">
        区切り文字を指定してテキストを分割し、リストとして表示します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">テキスト入力</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="例: りんご,みかん,ぶどう,もも"
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={5}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">区切り文字</label>
          <select
            value={delimiter}
            onChange={(e) => setDelimiter(e.target.value)}
            className="border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary w-full sm:w-auto"
          >
            {DELIMITER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {delimiter === "custom" && (
            <input
              type="text"
              value={customDelimiter}
              onChange={(e) => setCustomDelimiter(e.target.value)}
              placeholder="区切り文字を入力"
              className="mt-2 w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          )}
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={trimItems}
              onChange={(e) => setTrimItems(e.target.checked)}
              className="accent-primary"
            />
            前後のスペースを除去
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={removeEmpty}
              onChange={(e) => setRemoveEmpty(e.target.checked)}
              className="accent-primary"
            />
            空の要素を除去
          </label>
        </div>

        <div className="flex gap-3">
          <button
            onClick={split}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            分割する
          </button>
          <button
            onClick={reset}
            className="border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {items.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                分割結果（{items.length}件）
              </span>
              <button
                onClick={copyAll}
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                {copied ? "コピー済み" : "全てコピー"}
              </button>
            </div>
            <ol className="bg-background rounded-lg border border-card-border divide-y divide-card-border max-h-80 overflow-y-auto">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 px-4 py-2.5 text-sm">
                  <span className="text-muted min-w-[2rem] text-right">{i + 1}.</span>
                  <span className="font-mono break-all">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">テキスト分割ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアに分割したいテキストを入力します。</p>
          <p>2. 区切り文字（カンマ・タブ・改行・スペース・カスタム）を選択します。</p>
          <p>3. 「分割する」ボタンを押すと、区切り文字で分割されたリストが表示されます。</p>
          <p>4. 「全てコピー」ボタンで結果を改行区切りでコピーできます。</p>
        </div>
      </section>
    </div>
  );
}
