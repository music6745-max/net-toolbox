"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

const VALS: [number, string][] = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];

function toRoman(n: number): string {
  if (n < 1 || n > 3999) return "1〜3999の範囲で入力してください";
  let r = ""; for (const [v, s] of VALS) { while (n >= v) { r += s; n -= v; } } return r;
}

function fromRoman(s: string): number {
  const map: Record<string, number> = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  let r = 0; for (let i = 0; i < s.length; i++) { const c = map[s[i]]; const n = map[s[i+1]]; r += (n && n > c) ? -c : c; } return r;
}

export default function Page() {
  const [num, setNum] = useState("");
  const [roman, setRoman] = useState("");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ローマ数字変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">ローマ数字変換ツール</h1>
      <p className="text-muted mb-8">アラビア数字とローマ数字を相互に変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">アラビア数字 → ローマ数字</label>
          <input type="number" value={num} onChange={e => setNum(e.target.value)} placeholder="1〜3999" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          {num && <p className="mt-2 text-lg font-bold">{toRoman(parseInt(num))}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">ローマ数字 → アラビア数字</label>
          <input type="text" value={roman} onChange={e => setRoman(e.target.value.toUpperCase())} placeholder="MMXXVI" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          {roman && <p className="mt-2 text-lg font-bold">{fromRoman(roman)}</p>}
        </div>
      </div>
      <ToolFAQSection
        toolName="ローマ数字変換"
        howTo={[
          "アラビア数字（1〜3999）を入力してローマ数字に変換",
          "ローマ数字（I・V・X・L・C・D・M）を入力してアラビア数字に変換",
          "歴史書・クラシック音楽・映画シリーズ（映画○・Superbowl○）での活用",
          "文書デザイン・目次ページ番号等にも使用",
        ]}
        faqs={[
          {
            question: "ローマ数字の基本ルールは？",
            answer: "基本記号：I=1、V=5、X=10、L=50、C=100、D=500、M=1000。同じ記号は最大3回（例：III=3・VIII=8）、4・9は減算法（IV=4・IX=9）、5の倍数で中間値（V=5・L=50・D=500）を使う。3999までが表現範囲、それ以上は上線付き（特殊記法）が必要です。",
          },
          {
            question: "MMXXVIは何年？",
            answer: "2026年。M（1000）×2＝2000、XX（20）、VI（6）で2026。西暦表記はローマ時代から使われる伝統、映画のエンドロール（©MMXXVI）・学校の創立年プレート・時計の文字盤等で今も広く使用されます。",

          },
          {
            question: "ゼロはローマ数字でどう表す？",
            answer: "表現できない。ローマ数字にはゼロの概念がなく、「何もない」は nulla（ラテン語）と表記。負の数も表現できず、これが中世ヨーロッパで計算が困難だった理由。アラビア数字（ゼロ＋十進法）の導入で商業・科学が飛躍的に発展した歴史があります。",
          },
          {
            question: "どんな場面で使われる？",
            answer: "①映画シリーズ名（SuperBowl LVIII・映画Ⅷ等）②本の目次・章番号③時計の文字盤（I〜XIIが多い）④エンドロールの著作権年（©MMXXVI）⑤歴史書・年表⑥王の名前（ルイXIV世・ヘンリー VIII 世）⑦オリンピック大会番号（XXXIII）。伝統・権威を演出する記法として現在も多用されています。",
          },
        ]}
      />
      <AffiliateSection slug="roman-numeral" category="日常ツール" />

      <RelatedTools currentSlug="roman-numeral" category="日常ツール" />
    </div>
  );
}