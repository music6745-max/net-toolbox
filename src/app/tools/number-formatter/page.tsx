"use client";

import { useState } from "react";
import Link from "next/link";

type FormatResult = {
  label: string;
  value: string;
};

function toJapanese(n: number): string {
  if (!isFinite(n)) return "非数";
  const abs = Math.abs(n);
  const sign = n < 0 ? "-" : "";

  if (abs === 0) return "0";

  const cho = Math.floor(abs / 1_000_000_000_000);
  const oku = Math.floor((abs % 1_000_000_000_000) / 100_000_000);
  const man = Math.floor((abs % 100_000_000) / 10_000);
  const rest = Math.floor(abs % 10_000);

  let result = sign;
  if (cho > 0) result += `${cho}兆`;
  if (oku > 0) result += `${oku}億`;
  if (man > 0) result += `${man}万`;
  if (rest > 0 || result === sign) result += rest;

  return result;
}

function formatNumber(input: string): FormatResult[] {
  const clean = input.replace(/,/g, "").trim();
  const num = parseFloat(clean);
  if (isNaN(num)) return [];

  const results: FormatResult[] = [];

  // Comma separated
  results.push({
    label: "カンマ区切り",
    value: new Intl.NumberFormat("ja-JP").format(num),
  });

  // Japanese (万/億)
  results.push({
    label: "日本語（万・億）",
    value: toJapanese(num),
  });

  // Currency ¥
  results.push({
    label: "通貨（円）",
    value: new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(num),
  });

  // Currency USD
  results.push({
    label: "通貨（ドル）",
    value: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num),
  });

  // Percentage
  results.push({
    label: "パーセント",
    value: new Intl.NumberFormat("ja-JP", { style: "percent", minimumFractionDigits: 2 }).format(num / 100),
  });

  // Scientific notation
  results.push({
    label: "指数表記",
    value: num.toExponential(),
  });

  // Fixed 2 decimal places
  results.push({
    label: "小数点2桁固定",
    value: num.toFixed(2),
  });

  // Integer only
  results.push({
    label: "整数部分のみ",
    value: Math.trunc(num).toLocaleString("ja-JP"),
  });

  return results;
}

export default function NumberFormatterPage() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<FormatResult[]>([]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const handleFormat = () => {
    if (!input.trim()) {
      setError("数値を入力してください");
      setResults([]);
      return;
    }
    const res = formatNumber(input);
    if (res.length === 0) {
      setError("有効な数値を入力してください（例: 1234567）");
      setResults([]);
      return;
    }
    setError("");
    setResults(res);
  };

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 2000);
  };

  const EXAMPLES = ["1234567", "100000000", "3.14159", "-98765", "0.0025"];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>数字フォーマット</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">数字フォーマットツール</h1>
      <p className="text-muted mb-8">
        数値を入力すると、カンマ区切り・日本語（万・億）・通貨・パーセント・指数表記などに一括変換します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <label className="block text-sm font-medium mb-2">数値を入力</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleFormat()}
          placeholder="例: 1234567"
          className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              onClick={() => setInput(ex)}
              className="text-xs text-primary hover:text-primary-hover border border-card-border rounded px-2 py-1"
            >
              {ex}
            </button>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          onClick={handleFormat}
          className="mt-4 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          変換する
        </button>
      </div>

      {results.length > 0 && (
        <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
          <div className="divide-y divide-card-border">
            {results.map((r) => (
              <div key={r.label} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-xs text-muted mb-0.5">{r.label}</p>
                  <p className="font-mono font-semibold text-base">{r.value}</p>
                </div>
                <button
                  onClick={() => handleCopy(r.value)}
                  className="text-sm text-primary hover:text-primary-hover font-medium ml-4 shrink-0"
                >
                  {copied === r.value ? "コピー済み" : "コピー"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">数字フォーマットツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストボックスに数値を入力するか、サンプルボタンをクリックして数値を選びます。</p>
          <p>2. 「変換する」ボタンを押すと、8種類のフォーマットに一括変換されます。</p>
          <p>3. 各フォーマットの右にある「コピー」ボタンで結果をクリップボードにコピーできます。</p>
          <p>4. 負の数・小数も対応しています。</p>
          <p>5. すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
