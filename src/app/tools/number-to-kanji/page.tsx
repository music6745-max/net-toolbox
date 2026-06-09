"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const DIGITS_NORMAL = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const DIGITS_DAIJI = ["", "壱", "弐", "参", "四", "伍", "六", "七", "八", "九"];
const UNITS = ["", "十", "百", "千"];
const LARGE_UNITS = ["", "万", "億", "兆", "京"];

function numberToKanji(num: bigint, daiji: boolean): string {
  if (num === BigInt(0)) return daiji ? "零" : "〇";
  const digits = daiji ? DIGITS_DAIJI : DIGITS_NORMAL;
  const ten = daiji ? "拾" : "十";
  const hundred = daiji ? "百" : "百";
  const thousand = daiji ? "千" : "千";
  const unitChars = ["", ten, hundred, thousand];

  let result = "";
  const isNeg = num < BigInt(0);
  if (isNeg) num = -num;

  const groups: number[] = [];
  while (num > BigInt(0)) {
    groups.push(Number(num % BigInt(10000)));
    num /= BigInt(10000);
  }

  for (let g = groups.length - 1; g >= 0; g--) {
    const n = groups[g];
    if (n === 0) continue;
    let groupStr = "";
    const d3 = Math.floor(n / 1000);
    const d2 = Math.floor((n % 1000) / 100);
    const d1 = Math.floor((n % 100) / 10);
    const d0 = n % 10;
    const ds = [d0, d1, d2, d3];
    for (let i = 3; i >= 0; i--) {
      if (ds[i] === 0) continue;
      if (ds[i] === 1 && i > 0 && !daiji) {
        groupStr += unitChars[i];
      } else {
        groupStr += digits[ds[i]] + unitChars[i];
      }
    }
    result += groupStr + LARGE_UNITS[g];
  }
  return (isNeg ? "マイナス" : "") + result;
}

const KANJI_MAP_NORMAL: Record<string, number> = {
  "〇": 0, "零": 0, "一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9,
  "十": 10, "百": 100, "千": 1000, "万": 10000, "億": 10 ** 8, "兆": 10 ** 12,
};
const KANJI_MAP_DAIJI: Record<string, number> = {
  "壱": 1, "弐": 2, "参": 3, "伍": 5, "拾": 10,
};

function kanjiToNumber(text: string): string {
  const allMap = { ...KANJI_MAP_NORMAL, ...KANJI_MAP_DAIJI };
  const cleaned = text.replace(/[,，、\s]/g, "").replace(/マイナス|-/g, "-");
  const isNeg = cleaned.startsWith("-");
  const s = isNeg ? cleaned.slice(1) : cleaned;

  try {
    let total = 0;
    let current = 0;
    let sub = 0;

    for (const ch of s) {
      const v = allMap[ch];
      if (v === undefined) throw new Error("unknown");
      if (v >= 10000) {
        current = (current + sub) * v;
        sub = 0;
        total += current;
        current = 0;
      } else if (v >= 10) {
        if (sub === 0) sub = 1;
        current += sub * v;
        sub = 0;
      } else {
        sub = v;
      }
    }
    total += current + sub;
    return (isNeg ? "-" : "") + total.toString();
  } catch {
    return "変換できませんでした";
  }
}

const EXAMPLES = [1, 10, 100, 1000, 10000, 100000, 1000000, 100000000, 10 ** 12];

export default function NumberToKanjiPage() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"toKanji" | "toNumber">("toKanji");
  const [daiji, setDaiji] = useState(false);
  const [copied, setCopied] = useState(false);

  const output = (() => {
    if (!input.trim()) return "";
    if (mode === "toKanji") {
      try {
        const cleaned = input.replace(/[,，\s]/g, "");
        const n = BigInt(cleaned);
        if (n > BigInt("9999999999999999") || n < BigInt("-9999999999999999")) return "数値が大きすぎます（京未満まで対応）";
        return numberToKanji(n, daiji);
      } catch {
        return "有効な整数を入力してください";
      }
    } else {
      return kanjiToNumber(input.trim());
    }
  })();

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>数字⇔漢数字変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">数字⇔漢数字変換ツール</h1>
      <p className="text-muted mb-8">
        アラビア数字と漢数字を相互変換します。通常表記（一二三）と大字（壱弐参）に対応。
      </p>

      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setMode("toKanji")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "toKanji" ? "bg-primary text-white" : "bg-card-bg border border-card-border text-muted hover:text-primary"
          }`}
        >
          数字 → 漢数字
        </button>
        <button
          onClick={() => setMode("toNumber")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "toNumber" ? "bg-primary text-white" : "bg-card-bg border border-card-border text-muted hover:text-primary"
          }`}
        >
          漢数字 → 数字
        </button>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <label className="block text-sm font-medium mb-2">
          {mode === "toKanji" ? "アラビア数字を入力" : "漢数字を入力"}
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "toKanji" ? "例: 12345" : "例: 一万二千三百四十五"}
          className="w-full border border-card-border rounded-lg px-4 py-3 text-lg font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />

        {mode === "toKanji" && (
          <label className="flex items-center gap-2 mt-3 cursor-pointer text-sm">
            <input
              type="checkbox"
              checked={daiji}
              onChange={(e) => setDaiji(e.target.checked)}
              className="rounded accent-primary"
            />
            大字（壱弐参・拾・伍）で出力
          </label>
        )}

        {output && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">変換結果</span>
              <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <div className="bg-background rounded-lg px-4 py-3 text-2xl font-bold text-primary">
              {output}
            </div>
          </div>
        )}
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="font-bold text-sm mb-4">変換例</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {EXAMPLES.map((n) => (
            <button
              key={n}
              onClick={() => { setMode("toKanji"); setInput(n.toLocaleString("en")); }}
              className="flex items-center justify-between bg-background rounded-lg px-4 py-2.5 text-sm hover:border-primary border border-transparent transition-colors"
            >
              <span className="font-mono">{n.toLocaleString("ja-JP")}</span>
              <span className="text-muted">→</span>
              <span className="font-bold">{numberToKanji(BigInt(n), false)}</span>
            </button>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>「数字 → 漢数字」モードでアラビア数字（0〜9,999兆）を入力すると漢数字に変換されます。</p>
          <p>「大字（壱弐参）で出力」にチェックを入れると、法的文書などで使われる大字で出力されます。</p>
          <p>「漢数字 → 数字」モードでは一・十・百・千・万・億・兆などを含む漢数字をアラビア数字に変換します。</p>
          <p>変換例ボタンをクリックするとその数値を入力欄に自動入力できます。</p>
        </div>
      </section>


      <AffiliateSection slug="number-to-kanji" category="日常ツール" />
      <RelatedTools currentSlug="number-to-kanji" category="日常ツール" />
    </div>
  );
}
