"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface CharInfo {
  char: string;
  codePoint: number;
  hexCP: string;
  utf8Hex: string;
  decimal: number;
  htmlEntity: string;
}

function getUtf8Hex(char: string): string {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(char);
  return Array.from(bytes)
    .map((b) => b.toString(16).toUpperCase().padStart(2, "0"))
    .join(" ");
}

function analyzeChars(text: string): CharInfo[] {
  const chars: CharInfo[] = [];
  for (const char of text) {
    const cp = char.codePointAt(0) ?? 0;
    chars.push({
      char,
      codePoint: cp,
      hexCP: "U+" + cp.toString(16).toUpperCase().padStart(4, "0"),
      utf8Hex: getUtf8Hex(char),
      decimal: cp,
      htmlEntity: `&#${cp};`,
    });
  }
  return chars;
}

export default function CharCodePage() {
  const [input, setInput] = useState("");

  const charInfos = input ? analyzeChars(input) : [];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>文字コード確認ツール</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">文字コード確認ツール</h1>
      <p className="text-muted mb-8">
        文字を入力すると、Unicodeコードポイント・UTF-8の16進数・10進数・HTMLエンティティをリアルタイムで表示します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">文字を入力</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="確認したい文字を入力（例: A あ 😀）"
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        <p className="text-xs text-muted mt-1">{[...input].length} 文字</p>

        {charInfos.length > 0 && (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border text-left">
                  <th className="pb-2 pr-4 font-medium">文字</th>
                  <th className="pb-2 pr-4 font-medium">Unicodeコードポイント</th>
                  <th className="pb-2 pr-4 font-medium">10進数</th>
                  <th className="pb-2 pr-4 font-medium">UTF-8 (Hex)</th>
                  <th className="pb-2 font-medium">HTMLエンティティ</th>
                </tr>
              </thead>
              <tbody>
                {charInfos.map((info, i) => (
                  <tr key={i} className="border-b border-card-border/50 last:border-0">
                    <td className="py-2 pr-4">
                      <span className="text-2xl">{info.char === " " ? "␣" : info.char}</span>
                    </td>
                    <td className="py-2 pr-4 font-mono">{info.hexCP}</td>
                    <td className="py-2 pr-4 font-mono">{info.decimal}</td>
                    <td className="py-2 pr-4 font-mono">{info.utf8Hex}</td>
                    <td className="py-2 font-mono">{info.htmlEntity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">文字コード確認ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>確認したい文字を入力欄に入力すると、リアルタイムで各文字のコード情報が表示されます。</p>
          <p>Unicodeコードポイントは U+XXXX 形式で表示されます（例: A → U+0041）。</p>
          <p>UTF-8は実際にファイルに保存される際のバイト列を16進数で表示します。</p>
          <p>絵文字や漢字なども対応しています。すべての処理はブラウザ内で完結します。</p>
        </div>
      </section>


      <AffiliateSection slug="char-code" category="開発ツール" />
      <RelatedTools currentSlug="char-code" category="開発ツール" />
    </div>
  );
}
