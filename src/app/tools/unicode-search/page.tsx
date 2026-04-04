"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

interface UnicodeChar {
  char: string;
  cp: number;
  name: string;
}

const UNICODE_DB: UnicodeChar[] = [
  // Arrows
  { char: "←", cp: 0x2190, name: "LEFTWARDS ARROW" },
  { char: "→", cp: 0x2192, name: "RIGHTWARDS ARROW" },
  { char: "↑", cp: 0x2191, name: "UPWARDS ARROW" },
  { char: "↓", cp: 0x2193, name: "DOWNWARDS ARROW" },
  { char: "↔", cp: 0x2194, name: "LEFT RIGHT ARROW" },
  { char: "↕", cp: 0x2195, name: "UP DOWN ARROW" },
  { char: "⇐", cp: 0x21d0, name: "LEFTWARDS DOUBLE ARROW" },
  { char: "⇒", cp: 0x21d2, name: "RIGHTWARDS DOUBLE ARROW" },
  { char: "⇔", cp: 0x21d4, name: "LEFT RIGHT DOUBLE ARROW" },
  { char: "⇑", cp: 0x21d1, name: "UPWARDS DOUBLE ARROW" },
  { char: "⇓", cp: 0x21d3, name: "DOWNWARDS DOUBLE ARROW" },
  { char: "↗", cp: 0x2197, name: "NORTH EAST ARROW" },
  { char: "↘", cp: 0x2198, name: "SOUTH EAST ARROW" },
  { char: "↙", cp: 0x2199, name: "SOUTH WEST ARROW" },
  { char: "↖", cp: 0x2196, name: "NORTH WEST ARROW" },
  // Math
  { char: "±", cp: 0x00b1, name: "PLUS-MINUS SIGN" },
  { char: "×", cp: 0x00d7, name: "MULTIPLICATION SIGN" },
  { char: "÷", cp: 0x00f7, name: "DIVISION SIGN" },
  { char: "≠", cp: 0x2260, name: "NOT EQUAL TO" },
  { char: "≤", cp: 0x2264, name: "LESS-THAN OR EQUAL TO" },
  { char: "≥", cp: 0x2265, name: "GREATER-THAN OR EQUAL TO" },
  { char: "≈", cp: 0x2248, name: "ALMOST EQUAL TO" },
  { char: "∞", cp: 0x221e, name: "INFINITY" },
  { char: "√", cp: 0x221a, name: "SQUARE ROOT" },
  { char: "∑", cp: 0x2211, name: "N-ARY SUMMATION" },
  { char: "∏", cp: 0x220f, name: "N-ARY PRODUCT" },
  { char: "∫", cp: 0x222b, name: "INTEGRAL" },
  { char: "π", cp: 0x03c0, name: "GREEK SMALL LETTER PI" },
  { char: "°", cp: 0x00b0, name: "DEGREE SIGN" },
  { char: "²", cp: 0x00b2, name: "SUPERSCRIPT TWO" },
  { char: "³", cp: 0x00b3, name: "SUPERSCRIPT THREE" },
  { char: "½", cp: 0x00bd, name: "VULGAR FRACTION ONE HALF" },
  { char: "¼", cp: 0x00bc, name: "VULGAR FRACTION ONE QUARTER" },
  { char: "¾", cp: 0x00be, name: "VULGAR FRACTION THREE QUARTERS" },
  // Symbols
  { char: "©", cp: 0x00a9, name: "COPYRIGHT SIGN" },
  { char: "®", cp: 0x00ae, name: "REGISTERED SIGN" },
  { char: "™", cp: 0x2122, name: "TRADE MARK SIGN" },
  { char: "§", cp: 0x00a7, name: "SECTION SIGN" },
  { char: "¶", cp: 0x00b6, name: "PILCROW SIGN" },
  { char: "†", cp: 0x2020, name: "DAGGER" },
  { char: "‡", cp: 0x2021, name: "DOUBLE DAGGER" },
  { char: "•", cp: 0x2022, name: "BULLET" },
  { char: "…", cp: 0x2026, name: "HORIZONTAL ELLIPSIS" },
  { char: "′", cp: 0x2032, name: "PRIME" },
  { char: "″", cp: 0x2033, name: "DOUBLE PRIME" },
  { char: "‰", cp: 0x2030, name: "PER MILLE SIGN" },
  { char: "№", cp: 0x2116, name: "NUMERO SIGN" },
  { char: "℃", cp: 0x2103, name: "DEGREE CELSIUS" },
  { char: "℉", cp: 0x2109, name: "DEGREE FAHRENHEIT" },
  // Currency
  { char: "€", cp: 0x20ac, name: "EURO SIGN" },
  { char: "£", cp: 0x00a3, name: "POUND SIGN" },
  { char: "¥", cp: 0x00a5, name: "YEN SIGN" },
  { char: "¢", cp: 0x00a2, name: "CENT SIGN" },
  { char: "₩", cp: 0x20a9, name: "WON SIGN" },
  { char: "₿", cp: 0x20bf, name: "BITCOIN SIGN" },
  // Shapes
  { char: "■", cp: 0x25a0, name: "BLACK SQUARE" },
  { char: "□", cp: 0x25a1, name: "WHITE SQUARE" },
  { char: "▲", cp: 0x25b2, name: "BLACK UP-POINTING TRIANGLE" },
  { char: "△", cp: 0x25b3, name: "WHITE UP-POINTING TRIANGLE" },
  { char: "▼", cp: 0x25bc, name: "BLACK DOWN-POINTING TRIANGLE" },
  { char: "●", cp: 0x25cf, name: "BLACK CIRCLE" },
  { char: "○", cp: 0x25cb, name: "WHITE CIRCLE" },
  { char: "◆", cp: 0x25c6, name: "BLACK DIAMOND" },
  { char: "◇", cp: 0x25c7, name: "WHITE DIAMOND" },
  { char: "★", cp: 0x2605, name: "BLACK STAR" },
  { char: "☆", cp: 0x2606, name: "WHITE STAR" },
  { char: "♠", cp: 0x2660, name: "BLACK SPADE SUIT" },
  { char: "♥", cp: 0x2665, name: "BLACK HEART SUIT" },
  { char: "♦", cp: 0x2666, name: "BLACK DIAMOND SUIT" },
  { char: "♣", cp: 0x2663, name: "BLACK CLUB SUIT" },
  // Punctuation / Typography
  { char: "\u201c", cp: 0x201c, name: "LEFT DOUBLE QUOTATION MARK" },
  { char: "\u201d", cp: 0x201d, name: "RIGHT DOUBLE QUOTATION MARK" },
  { char: "\u2018", cp: 0x2018, name: "LEFT SINGLE QUOTATION MARK" },
  { char: "\u2019", cp: 0x2019, name: "RIGHT SINGLE QUOTATION MARK" },
  { char: "«", cp: 0x00ab, name: "LEFT-POINTING DOUBLE ANGLE QUOTATION MARK" },
  { char: "»", cp: 0x00bb, name: "RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK" },
  { char: "–", cp: 0x2013, name: "EN DASH" },
  { char: "—", cp: 0x2014, name: "EM DASH" },
  // Check / Cross
  { char: "✓", cp: 0x2713, name: "CHECK MARK" },
  { char: "✔", cp: 0x2714, name: "HEAVY CHECK MARK" },
  { char: "✗", cp: 0x2717, name: "BALLOT X" },
  { char: "✘", cp: 0x2718, name: "HEAVY BALLOT X" },
  { char: "✕", cp: 0x2715, name: "MULTIPLICATION X" },
  // Misc symbols
  { char: "☀", cp: 0x2600, name: "BLACK SUN WITH RAYS" },
  { char: "☁", cp: 0x2601, name: "CLOUD" },
  { char: "☂", cp: 0x2602, name: "UMBRELLA" },
  { char: "☃", cp: 0x2603, name: "SNOWMAN" },
  { char: "☎", cp: 0x260e, name: "BLACK TELEPHONE" },
  { char: "✉", cp: 0x2709, name: "ENVELOPE" },
  { char: "✂", cp: 0x2702, name: "BLACK SCISSORS" },
  { char: "✏", cp: 0x270f, name: "PENCIL" },
  { char: "♪", cp: 0x266a, name: "EIGHTH NOTE" },
  { char: "♫", cp: 0x266b, name: "BEAMED EIGHTH NOTES" },
];

export default function UnicodeSearchPage() {
  const [query, setQuery] = useState("");
  const [copiedChar, setCopiedChar] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toUpperCase();
    if (!q) return UNICODE_DB;
    return UNICODE_DB.filter(
      (item) =>
        item.name.includes(q) ||
        item.char === query.trim() ||
        ("U+" + item.cp.toString(16).toUpperCase().padStart(4, "0")).includes(q) ||
        item.cp.toString().includes(q)
    );
  }, [query]);

  const copy = async (char: string) => {
    await navigator.clipboard.writeText(char);
    setCopiedChar(char);
    setTimeout(() => setCopiedChar(null), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>Unicode文字検索ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Unicode文字検索ツール</h1>
      <p className="text-muted mb-8">
        Unicode文字を名前やコードポイントで検索してコピーできます。記号・矢印・数学記号など100種類以上収録。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">検索</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="文字名・コードポイント・文字を入力（例: ARROW, U+2192, →）"
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        <p className="text-xs text-muted mt-1">{results.length} 件</p>

        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-96 overflow-y-auto">
          {results.map((item) => (
            <button
              key={item.cp}
              onClick={() => copy(item.char)}
              title={`${item.name}\n${"U+" + item.cp.toString(16).toUpperCase().padStart(4, "0")}`}
              className="flex flex-col items-center bg-background hover:bg-primary/10 border border-card-border rounded-lg p-2 transition-colors group"
            >
              <span className="text-2xl mb-1">{item.char}</span>
              <span className="text-xs text-muted font-mono leading-tight">
                U+{item.cp.toString(16).toUpperCase().padStart(4, "0")}
              </span>
              <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-0.5">
                {copiedChar === item.char ? "済" : "コピー"}
              </span>
            </button>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">Unicode文字検索ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>検索欄に文字名（英語）、コードポイント（U+2192 など）、または文字自体を入力して絞り込みます。</p>
          <p>文字をクリックするとクリップボードにコピーされます。</p>
          <p>空欄のままにするとすべての収録文字が表示されます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="unicode-search" category="開発ツール" />
    </div>
  );
}
