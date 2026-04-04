"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Stats = {
  total: number;
  noSpace: number;
  kanji: number;
  hiragana: number;
  katakana: number;
  alpha: number;
  digit: number;
  space: number;
  symbol: number;
  lines: number;
  sentences: number;
};

function analyzeText(text: string): Stats {
  let kanji = 0, hiragana = 0, katakana = 0, alpha = 0, digit = 0, space = 0, symbol = 0;
  for (const ch of text) {
    const cp = ch.codePointAt(0) ?? 0;
    if (
      (cp >= 0x4e00 && cp <= 0x9fff) ||
      (cp >= 0x3400 && cp <= 0x4dbf) ||
      (cp >= 0x20000 && cp <= 0x2a6df)
    ) kanji++;
    else if (cp >= 0x3041 && cp <= 0x3096) hiragana++;
    else if ((cp >= 0x30a1 && cp <= 0x30fa) || (cp >= 0xff66 && cp <= 0xff9f)) katakana++;
    else if ((cp >= 0x0041 && cp <= 0x005a) || (cp >= 0x0061 && cp <= 0x007a) ||
             (cp >= 0xff21 && cp <= 0xff3a) || (cp >= 0xff41 && cp <= 0xff5a)) alpha++;
    else if ((cp >= 0x0030 && cp <= 0x0039) || (cp >= 0xff10 && cp <= 0xff19)) digit++;
    else if (ch === " " || ch === "\t" || ch === "　" || ch === "\n" || ch === "\r") space++;
    else symbol++;
  }
  const total = text.length;
  const noSpace = kanji + hiragana + katakana + alpha + digit + symbol;
  const lines = text === "" ? 0 : text.split("\n").length;
  const sentences = text === "" ? 0 : (text.match(/[。！？.!?]+/g) ?? []).length;
  return { total, noSpace, kanji, hiragana, katakana, alpha, digit, space, symbol, lines, sentences };
}

export default function WordCounterJPPage() {
  const [text, setText] = useState("");
  const stats = useMemo(() => analyzeText(text), [text]);

  const barData = [
    { label: "漢字", count: stats.kanji, color: "bg-blue-500" },
    { label: "ひらがな", count: stats.hiragana, color: "bg-green-500" },
    { label: "カタカナ", count: stats.katakana, color: "bg-yellow-500" },
    { label: "英字", count: stats.alpha, color: "bg-purple-500" },
    { label: "数字", count: stats.digit, color: "bg-orange-500" },
    { label: "記号", count: stats.symbol, color: "bg-gray-400" },
    { label: "空白", count: stats.space, color: "bg-gray-200" },
  ];

  const nonZeroBars = barData.filter(b => b.count > 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>日本語文字種カウンター</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">日本語文字種カウンター</h1>
      <p className="text-muted mb-8">
        テキストを漢字・ひらがな・カタカナ・英数字ごとに分類してカウントします。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <label className="block text-sm font-medium mb-2">テキストを入力</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="カウントしたい日本語テキストを貼り付けてください..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={8}
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-muted">{stats.total.toLocaleString()}文字</span>
          <button
            onClick={() => setText("")}
            className="text-xs text-muted hover:text-primary transition-colors"
          >
            クリア
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {[
          { label: "総文字数", value: stats.total, sub: "（スペース含む）" },
          { label: "文字数", value: stats.noSpace, sub: "（スペース除く）" },
          { label: "行数", value: stats.lines, sub: "" },
          { label: "文数", value: stats.sentences, sub: "（句点・感嘆符等）" },
          { label: "漢字", value: stats.kanji, sub: "" },
          { label: "ひらがな", value: stats.hiragana, sub: "" },
          { label: "カタカナ", value: stats.katakana, sub: "" },
          { label: "英字", value: stats.alpha, sub: "" },
          { label: "数字", value: stats.digit, sub: "" },
        ].map((item) => (
          <div key={item.label} className="bg-card-bg border border-card-border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-primary">{item.value.toLocaleString()}</div>
            <div className="text-sm font-medium mt-1">{item.label}</div>
            {item.sub && <div className="text-xs text-muted mt-0.5">{item.sub}</div>}
          </div>
        ))}
      </div>

      {stats.total > 0 && (
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="font-bold text-sm mb-4">文字種の内訳</h2>
          <div className="flex h-6 rounded-full overflow-hidden mb-4">
            {nonZeroBars.map((b) => (
              <div
                key={b.label}
                className={`${b.color} transition-all`}
                style={{ width: `${(b.count / stats.total) * 100}%` }}
                title={`${b.label}: ${b.count}`}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {barData.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm">
                <span className={`inline-block w-3 h-3 rounded-sm shrink-0 ${b.color}`}></span>
                <span className="text-muted">{b.label}</span>
                <span className="font-medium ml-auto">{b.count.toLocaleString()}</span>
                <span className="text-xs text-muted">
                  ({stats.total > 0 ? ((b.count / stats.total) * 100).toFixed(1) : "0"}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストエリアに文章を貼り付けると、自動的に文字種ごとの内訳が表示されます。</p>
          <p>漢字・ひらがな・カタカナ・英字・数字・記号・空白の7種類に分類してカウントします。</p>
          <p>半角カタカナも全角カタカナと同じカタカナとしてカウントされます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="word-counter-jp" category="テキスト" />
      <RelatedTools currentSlug="word-counter-jp" category="テキスト" />
    </div>
  );
}
