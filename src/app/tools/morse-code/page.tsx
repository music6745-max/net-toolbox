"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="モールス信号変換"
        howTo={[
          "変換モード（テキスト→モールス or モールス→テキスト）を選択",
          "テキスト or モールス信号を入力",
          "リアルタイムで変換結果を表示",
          "モールス信号は文字間スペース、単語間「/」で区切る",
        ]}
        faqs={[
          {
            question: "モールス信号の歴史は？",
            answer: "1836年サミュエル・モールス考案、1840年に電信で実用化。第一次世界大戦・第二次世界大戦で軍事通信の主流、船舶の遭難信号（SOS：...−−−...）として国際標準化。現在はGPS・衛星通信に置換されたが、アマチュア無線・非常通信で今も使用、緊急時の「覚えていて損しない知識」です。",
          },
          {
            question: "SOSはなぜ...−−−...？",
            answer: "打電しやすく・聞き取りやすいシンプルな信号として国際協定で採用（1908年）。S（...）・O（---）・S（...）は明確な区別、遭難信号として標準化。「Save Our Souls」「Save Our Ship」は後付けの解釈、本来は「救助信号として識別しやすい」純粋な技術的理由で選定された記号です。",
          },
          {
            question: "覚えるコツは？",
            answer: "①よく使う文字から覚える（E=.、T=-、S=...等）②リズムで覚える（トン・ツー・トントン等）③アプリ（Morse Trainer・Ham Radio Prep）で練習④自分の名前をモールス変換して反復。1日15分練習で1ヶ月で全アルファベット習得可能、アマチュア無線資格取得にも直結する知識です。",
          },
          {
            question: "実用的な使い道は？",
            answer: "①アマチュア無線通信（CQ呼出等）②緊急時の光信号（懐中電灯でSOS）③軍用訓練④スマホ通知音のカスタマイズ⑤エンタメ（映画・ゲームの演出）。実用性は限定的だが、知っていると非常時の自己救済に役立つ、サバイバル知識として教える学校も増加中です。",
          },
        ]}
      />
      <AffiliateSection slug="morse-code" category="テキスト" />

      <RelatedTools currentSlug="morse-code" category="テキスト" />
    </div>
  );
}