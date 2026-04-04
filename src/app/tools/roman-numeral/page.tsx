"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

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
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>数字を入力するとリアルタイムで変換されます。1〜3999の範囲に対応しています。</p></div></section>
      <AffiliateSection slug="roman-numeral" category="日常ツール" />

      <RelatedTools currentSlug="roman-numeral" category="日常ツール" />
    </div>
  );
}