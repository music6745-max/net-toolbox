"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const natoMap: Record<string, string> = {
  A: "Alpha", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo",
  F: "Foxtrot", G: "Golf", H: "Hotel", I: "India", J: "Juliet",
  K: "Kilo", L: "Lima", M: "Mike", N: "November", O: "Oscar",
  P: "Papa", Q: "Quebec", R: "Romeo", S: "Sierra", T: "Tango",
  U: "Uniform", V: "Victor", W: "Whiskey", X: "X-ray", Y: "Yankee",
  Z: "Zulu",
  "0": "Zero", "1": "One", "2": "Two", "3": "Three", "4": "Four",
  "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Nine",
};

export default function Page() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const convert = (text: string): { char: string; nato: string }[] => {
    return text.split("").map((ch) => {
      const upper = ch.toUpperCase();
      return {
        char: ch,
        nato: natoMap[upper] || (ch === " " ? "(space)" : ch),
      };
    });
  };

  const result = convert(input);
  const outputText = result
    .filter((r) => r.nato !== r.char || r.char === " ")
    .map((r) => (r.char === " " ? "" : `${r.char.toUpperCase()} - ${r.nato}`))
    .filter(Boolean)
    .join("\n");

  const copy = async () => {
    await navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>NATOフォネティックコード</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">NATOフォネティックコード変換</h1>
      <p className="text-muted mb-8">
        テキストをNATOフォネティックアルファベットに変換。電話での伝達に便利です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">テキストを入力</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hello World"
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        {input && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">変換結果</span>
              <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <div className="bg-background rounded-lg p-4 space-y-1">
              {result.map((r, i) =>
                r.char === " " ? (
                  <div key={i} className="h-3" />
                ) : (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="font-mono font-bold w-6 text-center text-primary">
                      {r.char.toUpperCase()}
                    </span>
                    <span>{r.nato}</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        <div>
          <span className="text-sm font-medium block mb-2">一覧表</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 text-sm">
            {Object.entries(natoMap).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2 bg-background rounded px-2 py-1">
                <span className="font-mono font-bold w-5 text-primary">{key}</span>
                <span className="text-muted">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">NATOフォネティックコードの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストを入力すると、各文字がNATOフォネティックアルファベットに変換されます。</p>
          <p>電話やラジオなど音声での文字伝達時に、聞き間違いを防ぐために使用します。</p>
          <p>数字にも対応しています（0=Zero, 1=One...）。</p>
        </div>
      </section>

      <AffiliateSection slug="nato-alphabet" category="テキスト" />


      <RelatedTools currentSlug="nato-alphabet" category="テキスト" />
    </div>
  );
}
