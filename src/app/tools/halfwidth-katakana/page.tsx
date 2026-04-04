"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const FULL_TO_HALF: Record<string, string> = {
  ア: "ｱ", イ: "ｲ", ウ: "ｳ", エ: "ｴ", オ: "ｵ",
  カ: "ｶ", キ: "ｷ", ク: "ｸ", ケ: "ｹ", コ: "ｺ",
  サ: "ｻ", シ: "ｼ", ス: "ｽ", セ: "ｾ", ソ: "ｿ",
  タ: "ﾀ", チ: "ﾁ", ツ: "ﾂ", テ: "ﾃ", ト: "ﾄ",
  ナ: "ﾅ", ニ: "ﾆ", ヌ: "ﾇ", ネ: "ﾈ", ノ: "ﾉ",
  ハ: "ﾊ", ヒ: "ﾋ", フ: "ﾌ", ヘ: "ﾍ", ホ: "ﾎ",
  マ: "ﾏ", ミ: "ﾐ", ム: "ﾑ", メ: "ﾒ", モ: "ﾓ",
  ヤ: "ﾔ", ユ: "ﾕ", ヨ: "ﾖ",
  ラ: "ﾗ", リ: "ﾘ", ル: "ﾙ", レ: "ﾚ", ロ: "ﾛ",
  ワ: "ﾜ", ヲ: "ｦ", ン: "ﾝ",
  ァ: "ｧ", ィ: "ｨ", ゥ: "ｩ", ェ: "ｪ", ォ: "ｫ",
  ッ: "ｯ", ャ: "ｬ", ュ: "ｭ", ョ: "ｮ",
  ガ: "ｶﾞ", ギ: "ｷﾞ", グ: "ｸﾞ", ゲ: "ｹﾞ", ゴ: "ｺﾞ",
  ザ: "ｻﾞ", ジ: "ｼﾞ", ズ: "ｽﾞ", ゼ: "ｾﾞ", ゾ: "ｿﾞ",
  ダ: "ﾀﾞ", ヂ: "ﾁﾞ", ヅ: "ﾂﾞ", デ: "ﾃﾞ", ド: "ﾄﾞ",
  バ: "ﾊﾞ", ビ: "ﾋﾞ", ブ: "ﾌﾞ", ベ: "ﾍﾞ", ボ: "ﾎﾞ",
  パ: "ﾊﾟ", ピ: "ﾋﾟ", プ: "ﾌﾟ", ペ: "ﾍﾟ", ポ: "ﾎﾟ",
  ヴ: "ｳﾞ",
  "ー": "ｰ", "、": "､", "。": "｡", "「": "｢", "」": "｣", "・": "･",
};

const HALF_TO_FULL: Record<string, string> = {};
const DAKUTEN_MAP: Record<string, string> = {
  ｶ: "ガ", ｷ: "ギ", ｸ: "グ", ｹ: "ゲ", ｺ: "ゴ",
  ｻ: "ザ", ｼ: "ジ", ｽ: "ズ", ｾ: "ゼ", ｿ: "ゾ",
  ﾀ: "ダ", ﾁ: "ヂ", ﾂ: "ヅ", ﾃ: "デ", ﾄ: "ド",
  ﾊ: "バ", ﾋ: "ビ", ﾌ: "ブ", ﾍ: "ベ", ﾎ: "ボ",
  ｳ: "ヴ",
};
const HANDAKUTEN_MAP: Record<string, string> = {
  ﾊ: "パ", ﾋ: "ピ", ﾌ: "プ", ﾍ: "ペ", ﾎ: "ポ",
};

for (const [full, half] of Object.entries(FULL_TO_HALF)) {
  if (!half.includes("ﾞ") && !half.includes("ﾟ")) {
    HALF_TO_FULL[half] = full;
  }
}

function toHalf(text: string): string {
  return text
    .split("")
    .map((c) => FULL_TO_HALF[c] ?? c)
    .join("");
}

function toFull(text: string): string {
  const chars = text.split("");
  const result: string[] = [];
  for (let i = 0; i < chars.length; i++) {
    const cur = chars[i];
    const next = chars[i + 1];
    if (next === "ﾞ" && DAKUTEN_MAP[cur]) {
      result.push(DAKUTEN_MAP[cur]);
      i++;
    } else if (next === "ﾟ" && HANDAKUTEN_MAP[cur]) {
      result.push(HANDAKUTEN_MAP[cur]);
      i++;
    } else {
      result.push(HALF_TO_FULL[cur] ?? cur);
    }
  }
  return result.join("");
}

export default function HalfwidthKatakanaPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const convertToHalf = () => setOutput(toHalf(input));
  const convertToFull = () => setOutput(toFull(input));

  const copyOutput = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const swap = () => {
    setInput(output);
    setOutput("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>半角カタカナ変換ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">半角カタカナ変換ツール</h1>
      <p className="text-muted mb-8">
        全角カタカナと半角カタカナを相互に変換します。濁点・半濁点にも対応しています。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">入力テキスト</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="変換したいカタカナを入力してください（例: アイウエオ / ｱｲｳｴｵ）"
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={4}
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={convertToHalf}
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            全角→半角に変換
          </button>
          <button
            onClick={convertToFull}
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            半角→全角に変換
          </button>
          <button
            onClick={swap}
            className="border border-card-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-background transition-colors"
          >
            結果を入力欄へ
          </button>
        </div>

        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">変換結果</span>
              <button
                onClick={copyOutput}
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                {copied ? "コピー済み" : "コピー"}
              </button>
            </div>
            <div className="bg-background rounded-lg p-4 border border-card-border min-h-16">
              <p className="text-sm font-mono whitespace-pre-wrap break-all">{output}</p>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">半角カタカナ変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアに変換したいカタカナを入力します。</p>
          <p>2. 「全角→半角」ボタンで全角カタカナを半角カタカナに変換します。</p>
          <p>3. 「半角→全角」ボタンで半角カタカナを全角カタカナに変換します。</p>
          <p>4. 「結果を入力欄へ」ボタンで変換結果を入力欄にコピーして続けて変換できます。</p>
          <p>※ 濁点（ﾞ）・半濁点（ﾟ）を含む半角カタカナも正しく全角に変換されます。</p>
        </div>
      </section>


      <AffiliateSection slug="halfwidth-katakana" category="テキスト" />
      <RelatedTools currentSlug="halfwidth-katakana" category="テキスト" />
    </div>
  );
}
