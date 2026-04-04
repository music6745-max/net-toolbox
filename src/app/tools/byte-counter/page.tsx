"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

interface ByteStats {
  utf8: number;
  utf16le: number;
  utf16be: number;
  shiftJisApprox: number;
  charCount: number;
  asciiCount: number;
  twoByteCount: number;
  threeByteCount: number;
  fourByteCount: number;
  lineCount: number;
  wordCount: number;
}

function analyzeText(text: string): ByteStats {
  let utf8 = 0;
  let asciiCount = 0;
  let twoByteCount = 0;
  let threeByteCount = 0;
  let fourByteCount = 0;
  let shiftJisApprox = 0;

  const codePoints = [...text];
  for (const ch of codePoints) {
    const cp = ch.codePointAt(0) ?? 0;
    if (cp <= 0x7f) {
      utf8 += 1;
      asciiCount++;
      shiftJisApprox += 1;
    } else if (cp <= 0x7ff) {
      utf8 += 2;
      twoByteCount++;
      shiftJisApprox += 2;
    } else if (cp <= 0xffff) {
      utf8 += 3;
      threeByteCount++;
      // Hiragana, Katakana, CJK => Shift-JIS 2 bytes; others approximate 2
      shiftJisApprox += 2;
    } else {
      utf8 += 4;
      fourByteCount++;
      shiftJisApprox += 4;
    }
  }

  // UTF-16 uses 2 bytes per BMP char, 4 bytes for surrogate pairs (cp > 0xFFFF)
  const utf16le = text.length * 2; // JS string length counts surrogate pairs as 2 units already

  return {
    utf8,
    utf16le,
    utf16be: utf16le,
    shiftJisApprox,
    charCount: codePoints.length,
    asciiCount,
    twoByteCount,
    threeByteCount,
    fourByteCount,
    lineCount: text === "" ? 0 : text.split("\n").length,
    wordCount: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,
  };
}

function StatRow({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-card-border last:border-0">
      <span className="text-sm text-muted">{label}</span>
      <span className="text-sm font-mono font-semibold">
        {value}
        {sub && <span className="text-xs text-muted font-normal ml-1">{sub}</span>}
      </span>
    </div>
  );
}

export default function ByteCounterPage() {
  const [text, setText] = useState("");
  const stats = analyzeText(text);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }, []);

  const clear = () => setText("");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>バイト数計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">バイト数計算ツール</h1>
      <p className="text-muted mb-8">
        テキストを入力すると、UTF-8・UTF-16・Shift-JISなど各エンコーディングのバイト数をリアルタイムに計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium">テキストを入力</label>
          <button
            onClick={clear}
            className="text-xs text-muted hover:text-primary transition-colors"
          >
            クリア
          </button>
        </div>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="ここにテキストを入力またはペーストしてください..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none bg-background"
          rows={8}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-card-bg border border-card-border rounded-xl p-5">
          <h2 className="text-sm font-bold mb-3 text-primary">エンコード別バイト数</h2>
          <StatRow label="UTF-8" value={stats.utf8.toLocaleString()} sub="バイト" />
          <StatRow label="UTF-16 LE" value={stats.utf16le.toLocaleString()} sub="バイト" />
          <StatRow label="UTF-16 BE" value={stats.utf16be.toLocaleString()} sub="バイト" />
          <StatRow label="Shift-JIS（概算）" value={stats.shiftJisApprox.toLocaleString()} sub="バイト" />
        </div>

        <div className="bg-card-bg border border-card-border rounded-xl p-5">
          <h2 className="text-sm font-bold mb-3 text-primary">文字の内訳</h2>
          <StatRow label="総文字数" value={stats.charCount.toLocaleString()} sub="文字" />
          <StatRow label="ASCII文字（1バイト）" value={stats.asciiCount.toLocaleString()} sub="文字" />
          <StatRow label="2バイト文字" value={stats.twoByteCount.toLocaleString()} sub="文字" />
          <StatRow label="3バイト文字（漢字等）" value={stats.threeByteCount.toLocaleString()} sub="文字" />
          <StatRow label="4バイト文字（絵文字等）" value={stats.fourByteCount.toLocaleString()} sub="文字" />
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-5">
        <h2 className="text-sm font-bold mb-3 text-primary">その他の統計</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: "行数", value: stats.lineCount, unit: "行" },
            { label: "単語数（スペース区切り）", value: stats.wordCount, unit: "語" },
            { label: "UTF-8 KB", value: (stats.utf8 / 1024).toFixed(2), unit: "KB" },
          ].map((item) => (
            <div key={item.label} className="bg-background rounded-lg p-3 text-center">
              <div className="text-2xl font-bold font-mono">{typeof item.value === "number" ? item.value.toLocaleString() : item.value}</div>
              <div className="text-xs text-muted mt-1">{item.unit}</div>
              <div className="text-xs text-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">バイト数計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストエリアにテキストを入力またはペーストすると、リアルタイムでバイト数が計算されます。</p>
          <p>
            <strong>UTF-8</strong>：ASCII文字は1バイト、ひらがな・カタカナ・漢字は3バイト、絵文字は4バイトです。WebやLinuxでの標準エンコードです。
          </p>
          <p>
            <strong>UTF-16</strong>：Windowsやプログラミング言語内部でよく使われます。BMP文字は2バイト、絵文字等は4バイトです。
          </p>
          <p>
            <strong>Shift-JIS（概算）</strong>：日本語のWindowsファイルや古いシステムで使われます。ASCII 1バイト、日本語文字は2バイトの概算です。
          </p>
        </div>
      </section>


      <RelatedTools currentSlug="byte-counter" category="開発ツール" />
    </div>
  );
}
