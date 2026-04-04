"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const CHARSETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  digits: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{}|;:,.<>?",
};

export default function RandomStringPage() {
  const [length, setLength] = useState(16);
  const [count, setCount] = useState(5);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useDigits, setUseDigits] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const generate = () => {
    let charset = "";
    if (useUppercase) charset += CHARSETS.uppercase;
    if (useLowercase) charset += CHARSETS.lowercase;
    if (useDigits) charset += CHARSETS.digits;
    if (useSymbols) charset += CHARSETS.symbols;

    if (!charset) {
      setError("少なくとも1つの文字種を選択してください");
      return;
    }
    setError("");

    const generated: string[] = [];
    for (let i = 0; i < count; i++) {
      let str = "";
      const arr = new Uint32Array(length);
      crypto.getRandomValues(arr);
      for (let j = 0; j < length; j++) {
        str += charset[arr[j] % charset.length];
      }
      generated.push(str);
    }
    setResults(generated);
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(results.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyOne = async (s: string) => {
    await navigator.clipboard.writeText(s);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ランダム文字列生成ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ランダム文字列生成ツール</h1>
      <p className="text-muted mb-8">
        指定した長さ・文字種でランダムな文字列を生成します。パスワードやAPIトークンの仮値などに活用できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex flex-wrap gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">文字数</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Math.min(256, Math.max(1, Number(e.target.value))))}
              min={1}
              max={256}
              className="border border-card-border rounded-lg px-3 py-2 text-sm w-24 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">生成数</label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(Math.min(50, Math.max(1, Number(e.target.value))))}
              min={1}
              max={50}
              className="border border-card-border rounded-lg px-3 py-2 text-sm w-24 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">使用する文字種</label>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "大文字 (A-Z)", state: useUppercase, set: setUseUppercase },
              { label: "小文字 (a-z)", state: useLowercase, set: setUseLowercase },
              { label: "数字 (0-9)", state: useDigits, set: setUseDigits },
              { label: "記号 (!@#...)", state: useSymbols, set: setUseSymbols },
            ].map(({ label, state, set }) => (
              <label key={label} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={state}
                  onChange={(e) => set(e.target.checked)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={generate}
          className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          生成する
        </button>

        {results.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">生成結果</span>
              <button onClick={copyAll} className="text-sm text-primary hover:text-primary-hover font-medium">
                {copied ? "コピー済み" : "すべてコピー"}
              </button>
            </div>
            <div className="space-y-2">
              {results.map((r, i) => (
                <div key={i} className="flex items-center justify-between bg-background rounded-lg px-4 py-2">
                  <span className="font-mono text-sm break-all">{r}</span>
                  <button
                    onClick={() => copyOne(r)}
                    className="ml-3 text-xs text-primary hover:text-primary-hover shrink-0"
                  >
                    コピー
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ランダム文字列生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>文字数・生成数・文字種を設定して「生成する」ボタンを押します。</p>
          <p>暗号的に安全な乱数（Web Crypto API）を使用しているため、推測されにくい文字列を生成できます。</p>
          <p>記号を含めることでよりセキュアなパスワードになりますが、サービスによっては使えない記号もあります。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="random-string" category="開発ツール" />
      <RelatedTools currentSlug="random-string" category="開発ツール" />
    </div>
  );
}
