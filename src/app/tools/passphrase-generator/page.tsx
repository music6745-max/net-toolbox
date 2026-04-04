"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const WORDS = [
  "りんご","みかん","すいか","いちご","ぶどう","もも","なし","かき","うめ","さくら",
  "やま","かわ","うみ","そら","くも","かぜ","はな","もり","たに","しま",
  "いぬ","ねこ","とり","うさぎ","くま","さる","かえる","へび","きつね","たぬき",
  "あさ","ひる","よる","はる","なつ","あき","ふゆ","つき","ほし","たいよう",
  "きょう","あした","きのう","まち","むら","くに","いえ","みち","はし","かど",
  "あか","あお","しろ","くろ","みどり","きいろ","むらさき","ももいろ","ちゃいろ","はいいろ",
  "ひとつ","ふたつ","みっつ","よっつ","いつつ","むっつ","ななつ","やっつ","ここのつ","とお",
  "みず","ひ","つち","かぜ","でんき","ひかり","おと","いろ","かたち","においa",
  "あるく","はしる","とぶ","およぐ","うたう","わらう","ねむる","たべる","のむ","よむ",
  "おおきい","ちいさい","たかい","ひくい","はやい","おそい","つよい","よわい","あかるい","くらい",
  "くるま","でんしゃ","ひこうき","ふね","じてんしゃ","バス","タクシー","ロケット","いかだ","きしゃ",
  "ほん","てがみ","しんぶん","えいご","にほんご","がっこう","かいしゃ","びょういん","としょかん","こうえん",
];

const SEPARATORS = [
  { label: "ハイフン (-)", value: "-" },
  { label: "アンダースコア (_)", value: "_" },
  { label: "ドット (.)", value: "." },
  { label: "スペース ( )", value: " " },
  { label: "なし", value: "" },
];

function randomWord(): string {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function generatePassphrase(wordCount: number, sep: string, addNumber: boolean, capitalize: boolean): string {
  const words = Array.from({ length: wordCount }, () => {
    const w = randomWord();
    return capitalize ? w.charAt(0).toUpperCase() + w.slice(1) : w;
  });
  let phrase = words.join(sep);
  if (addNumber) {
    const n = Math.floor(Math.random() * 900) + 100;
    phrase = phrase + sep + n;
  }
  return phrase;
}

export default function PassphraseGeneratorPage() {
  const [wordCount, setWordCount] = useState(4);
  const [separator, setSeparator] = useState("-");
  const [addNumber, setAddNumber] = useState(true);
  const [capitalize, setCapitalize] = useState(false);
  const [count, setCount] = useState(5);
  const [phrases, setPhrases] = useState<string[]>([]);
  const [copied, setCopied] = useState("");

  const generate = useCallback(() => {
    const results = Array.from({ length: count }, () =>
      generatePassphrase(wordCount, separator, addNumber, capitalize)
    );
    setPhrases(results);
    setCopied("");
  }, [wordCount, separator, addNumber, capitalize, count]);

  const copy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  const entropy = Math.log2(Math.pow(WORDS.length, wordCount) * (addNumber ? 900 : 1));

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>パスフレーズ生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">パスフレーズ生成ツール</h1>
      <p className="text-muted mb-8">
        日本語の単語を組み合わせた覚えやすいパスフレーズを生成します。単語数や区切り文字をカスタマイズできます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">単語数: {wordCount}語</label>
          <input
            type="range"
            min={2}
            max={8}
            value={wordCount}
            onChange={(e) => setWordCount(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>2語</span><span>8語</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">区切り文字</label>
          <div className="flex flex-wrap gap-2">
            {SEPARATORS.map((s) => (
              <button
                key={s.value}
                onClick={() => setSeparator(s.value)}
                className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                  separator === s.value
                    ? "bg-primary text-white border-primary"
                    : "border-card-border text-muted hover:border-primary"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={addNumber}
              onChange={(e) => setAddNumber(e.target.checked)}
              className="accent-primary w-4 h-4"
            />
            末尾に数字を追加
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={capitalize}
              onChange={(e) => setCapitalize(e.target.checked)}
              className="accent-primary w-4 h-4"
            />
            先頭を大文字に（英字のみ）
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">生成数: {count}個</label>
          <input
            type="range"
            min={1}
            max={10}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full accent-primary"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={generate}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            パスフレーズを生成
          </button>
          <p className="text-xs text-muted">
            エントロピー: <strong className="text-primary">{entropy.toFixed(1)} bits</strong>
          </p>
        </div>
      </div>

      {phrases.length > 0 && (
        <div className="space-y-2">
          {phrases.map((phrase, i) => (
            <div
              key={i}
              className="bg-card-bg border border-card-border rounded-xl px-5 py-3 flex items-center justify-between gap-3"
            >
              <span className="font-mono text-sm break-all">{phrase}</span>
              <button
                onClick={() => copy(phrase, `p${i}`)}
                className="shrink-0 text-xs text-primary hover:text-primary-hover font-medium"
              >
                {copied === `p${i}` ? "✓コピー済" : "コピー"}
              </button>
            </div>
          ))}
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">パスフレーズ生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>単語数・区切り文字・オプションを設定して「パスフレーズを生成」をクリックします。</p>
          <p>パスフレーズはランダムな日本語単語の組み合わせです。ランダムパスワードより覚えやすく、十分なエントロピーを持ちます。</p>
          <p>コピーボタンで各パスフレーズをクリップボードにコピーできます。</p>
          <p>生成はすべてブラウザ内で行われ、外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="passphrase-generator" category="セキュリティ" />
      <RelatedTools currentSlug="passphrase-generator" category="セキュリティ" />
    </div>
  );
}
