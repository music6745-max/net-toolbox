"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const MORSE: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.",
  H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.",
  O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-",
  V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--", " ": "/",
};
const REVERSE: Record<string, string> = {};
for (const [k, v] of Object.entries(MORSE)) REVERSE[v] = k;

export default function Page() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"toMorse" | "fromMorse">("toMorse");

  const convert = () => {
    if (mode === "toMorse") {
      return input.toUpperCase().split("").map(c => MORSE[c] || c).join(" ");
    }
    return input.split(" ").map(c => c === "/" ? " " : (REVERSE[c] || c)).join("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span><span>モールス信号変換</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">モールス信号変換ツール</h1>
      <p className="text-muted mb-8">テキストをモールス信号に変換、またはモールス信号をテキストに復元します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex gap-4 mb-4">
          <button onClick={() => setMode("toMorse")} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "toMorse" ? "bg-primary text-white" : "bg-background text-muted"}`}>テキスト → モールス</button>
          <button onClick={() => setMode("fromMorse")} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "fromMorse" ? "bg-primary text-white" : "bg-background text-muted"}`}>モールス → テキスト</button>
        </div>
        <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={mode === "toMorse" ? "テキストを入力..." : "モールス信号を入力（スペース区切り）..."} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" rows={3} />
        {input && <div className="mt-4 p-4 bg-background rounded-lg"><p className="text-sm font-mono break-all">{convert()}</p></div>}
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>1. 変換モードを選択します（テキスト→モールス or モールス→テキスト）</p>
          <p>2. テキストまたはモールス信号を入力すると、リアルタイムで変換されます。</p>
          <p>3. モールス信号の各文字はスペースで区切り、単語は「/」で区切ります。</p>
        </div>
      </section>
      <RelatedTools currentSlug="morse-code" category="テキスト" />
    </div>
  );
}