"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Base = 2 | 8 | 10 | 16;

const BASES: { label: string; value: Base; prefix: string }[] = [
  { label: "2進数 (Binary)", value: 2, prefix: "0b" },
  { label: "8進数 (Octal)", value: 8, prefix: "0o" },
  { label: "10進数 (Decimal)", value: 10, prefix: "" },
  { label: "16進数 (Hex)", value: 16, prefix: "0x" },
];

export default function BaseConverterPage() {
  const [inputBase, setInputBase] = useState<Base>(10);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const parsed = (() => {
    if (!input.trim()) return null;
    try {
      const n = parseInt(input.trim(), inputBase);
      if (isNaN(n)) return null;
      return n;
    } catch {
      return null;
    }
  })();

  const results = BASES.map((b) => ({
    ...b,
    result: parsed !== null ? parsed.toString(b.value).toUpperCase() : "",
  }));

  const handleInputChange = (val: string) => {
    setInput(val);
    setError("");
    if (val.trim()) {
      const n = parseInt(val.trim(), inputBase);
      if (isNaN(n)) {
        setError(`${inputBase}進数として無効な入力です`);
      }
    }
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>進数変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">進数変換ツール</h1>
      <p className="text-muted mb-8">
        2進数・8進数・10進数・16進数を相互に変換します。プログラミングやIT学習に便利です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">入力の基数</label>
            <select
              value={inputBase}
              onChange={(e) => {
                setInputBase(Number(e.target.value) as Base);
                setInput("");
                setError("");
              }}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              {BASES.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">値を入力</label>
            <input
              type="text"
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={`${inputBase}進数の値を入力...`}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="space-y-3">
          {results.map((r) => (
            <div
              key={r.value}
              className="flex items-center gap-3 bg-background rounded-lg p-4"
            >
              <div className="w-36 text-sm font-medium shrink-0">{r.label}</div>
              <div className="flex-1 font-mono text-sm break-all">
                {r.prefix && r.result && (
                  <span className="text-muted">{r.prefix}</span>
                )}
                {r.result || "-"}
              </div>
              {r.result && (
                <button
                  onClick={() => handleCopy(r.result)}
                  className="text-xs text-primary hover:underline shrink-0"
                >
                  コピー
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            setInput("");
            setError("");
          }}
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          クリア
        </button>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">進数変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>入力の基数を選択し、値を入力すると、すべての進数に自動変換されます。</p>
          <p>各結果の横にある「コピー」ボタンで、変換結果をクリップボードにコピーできます。</p>
        </div>
      </section>

      <AffiliateSection slug="base-converter" category="開発ツール" />
      <RelatedTools currentSlug="base-converter" category="開発ツール" />
    </div>
  );
}
