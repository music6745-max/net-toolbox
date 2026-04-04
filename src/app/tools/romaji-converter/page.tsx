"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const hiraganaMap: Record<string, string> = {
  "きゃ": "kya", "きゅ": "kyu", "きょ": "kyo",
  "しゃ": "sha", "しゅ": "shu", "しょ": "sho",
  "ちゃ": "cha", "ちゅ": "chu", "ちょ": "cho",
  "にゃ": "nya", "にゅ": "nyu", "にょ": "nyo",
  "ひゃ": "hya", "ひゅ": "hyu", "ひょ": "hyo",
  "みゃ": "mya", "みゅ": "myu", "みょ": "myo",
  "りゃ": "rya", "りゅ": "ryu", "りょ": "ryo",
  "ぎゃ": "gya", "ぎゅ": "gyu", "ぎょ": "gyo",
  "じゃ": "ja", "じゅ": "ju", "じょ": "jo",
  "びゃ": "bya", "びゅ": "byu", "びょ": "byo",
  "ぴゃ": "pya", "ぴゅ": "pyu", "ぴょ": "pyo",
  "ゐ": "wi", "ゑ": "we",
  "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o",
  "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko",
  "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so",
  "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to",
  "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no",
  "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho",
  "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo",
  "や": "ya", "ゆ": "yu", "よ": "yo",
  "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro",
  "わ": "wa", "を": "wo", "ん": "n",
  "が": "ga", "ぎ": "gi", "ぐ": "gu", "げ": "ge", "ご": "go",
  "ざ": "za", "じ": "ji", "ず": "zu", "ぜ": "ze", "ぞ": "zo",
  "だ": "da", "ぢ": "di", "づ": "du", "で": "de", "ど": "do",
  "ば": "ba", "び": "bi", "ぶ": "bu", "べ": "be", "ぼ": "bo",
  "ぱ": "pa", "ぴ": "pi", "ぷ": "pu", "ぺ": "pe", "ぽ": "po",
  "ぁ": "a", "ぃ": "i", "ぅ": "u", "ぇ": "e", "ぉ": "o",
  "ゃ": "ya", "ゅ": "yu", "ょ": "yo",
  "ー": "-",
};

function katakanaToHiragana(str: string): string {
  return str.replace(/[\u30A0-\u30FF]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60)
  );
}

function toRomaji(text: string): string {
  const hira = katakanaToHiragana(text);
  let result = "";
  let i = 0;
  while (i < hira.length) {
    // Handle っ (double consonant)
    if (hira[i] === "っ" || hira[i] === "ッ") {
      // Look ahead to get the next consonant
      const nextTwo = hira.substring(i + 1, i + 3);
      const nextOne = hira.substring(i + 1, i + 2);
      const nextRomaji = hiraganaMap[nextTwo] || hiraganaMap[nextOne];
      if (nextRomaji) {
        result += nextRomaji[0] === "c" ? "t" : nextRomaji[0];
      }
      i++;
      continue;
    }
    // Handle ん before vowels or ya/yu/yo
    if (hira[i] === "ん" && i + 1 < hira.length) {
      const next = hira[i + 1];
      if ("あいうえおやゆよ".includes(next)) {
        result += "n'";
        i++;
        continue;
      }
    }
    // Try two-char combo first
    if (i + 1 < hira.length) {
      const two = hira.substring(i, i + 2);
      if (hiraganaMap[two]) {
        result += hiraganaMap[two];
        i += 2;
        continue;
      }
    }
    // Single char
    if (hiraganaMap[hira[i]]) {
      result += hiraganaMap[hira[i]];
      i++;
    } else {
      result += hira[i];
      i++;
    }
  }
  return result;
}

export default function Page() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const output = toRomaji(input);

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ローマ字変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ローマ字変換ツール</h1>
      <p className="text-muted mb-8">
        ひらがな・カタカナをヘボン式ローマ字に変換します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">ひらがな・カタカナを入力</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="こんにちは、せかい"
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={4}
          />
        </div>

        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">ローマ字</span>
              <button onClick={copy} className="text-sm text-primary hover:text-primary-hover font-medium">
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto break-all whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        )}

        <div>
          <span className="text-sm font-medium block mb-2">ヘボン式ローマ字一覧</span>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1 text-xs">
            {["あa", "いi", "うu", "えe", "おo",
              "かka", "きki", "くku", "けke", "こko",
              "さsa", "しshi", "すsu", "せse", "そso",
              "たta", "ちchi", "つtsu", "てte", "とto",
              "なna", "にni", "ぬnu", "ねne", "のno",
              "はha", "ひhi", "ふfu", "へhe", "ほho",
              "まma", "みmi", "むmu", "めme", "もmo",
              "やya", "", "ゆyu", "", "よyo",
              "らra", "りri", "るru", "れre", "ろro",
              "わwa", "", "", "", "をwo",
            ].map((item, i) => {
              if (!item) return <div key={i} />;
              const kana = item[0];
              const roma = item.slice(1);
              return (
                <div key={i} className="bg-background rounded px-1 py-0.5 text-center">
                  <div className="font-bold">{kana}</div>
                  <div className="text-muted">{roma}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ローマ字変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>ひらがなまたはカタカナを入力すると、ヘボン式ローマ字に変換されます。</p>
          <p>濁音（が行等）、半濁音（ぱ行）、拗音（しゃ等）、促音（っ）に対応しています。</p>
          <p>パスポートや公的書類でのローマ字表記確認にご利用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="romaji-converter" category="テキスト" />


      <RelatedTools currentSlug="romaji-converter" category="テキスト" />
    </div>
  );
}
