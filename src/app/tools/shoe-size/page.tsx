"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const MENS = [
  { jp: 24.5, us: 6.5, uk: 6, eu: 39 }, { jp: 25, us: 7, uk: 6.5, eu: 40 },
  { jp: 25.5, us: 7.5, uk: 7, eu: 40.5 }, { jp: 26, us: 8, uk: 7.5, eu: 41 },
  { jp: 26.5, us: 8.5, uk: 8, eu: 42 }, { jp: 27, us: 9, uk: 8.5, eu: 43 },
  { jp: 27.5, us: 9.5, uk: 9, eu: 43.5 }, { jp: 28, us: 10, uk: 9.5, eu: 44 },
  { jp: 28.5, us: 10.5, uk: 10, eu: 44.5 }, { jp: 29, us: 11, uk: 10.5, eu: 45 },
  { jp: 29.5, us: 11.5, uk: 11, eu: 46 }, { jp: 30, us: 12, uk: 11.5, eu: 46.5 },
];

const WOMENS = [
  { jp: 22, us: 5, uk: 2.5, eu: 35 }, { jp: 22.5, us: 5.5, uk: 3, eu: 35.5 },
  { jp: 23, us: 6, uk: 3.5, eu: 36 }, { jp: 23.5, us: 6.5, uk: 4, eu: 37 },
  { jp: 24, us: 7, uk: 4.5, eu: 37.5 }, { jp: 24.5, us: 7.5, uk: 5, eu: 38 },
  { jp: 25, us: 8, uk: 5.5, eu: 39 }, { jp: 25.5, us: 8.5, uk: 6, eu: 39.5 },
  { jp: 26, us: 9, uk: 6.5, eu: 40 }, { jp: 26.5, us: 9.5, uk: 7, eu: 41 },
];

export default function Page() {
  const [gender, setGender] = useState<"mens" | "womens">("mens");
  const data = gender === "mens" ? MENS : WOMENS;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>靴サイズ変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">靴サイズ変換ツール</h1>
      <p className="text-muted mb-8">日本・US・UK・EUの靴サイズを一覧で比較できます。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex gap-4 mb-6">
          <button onClick={() => setGender("mens")} className={`px-4 py-2 rounded-lg text-sm font-medium ${gender === "mens" ? "bg-primary text-white" : "bg-background text-muted"}`}>メンズ</button>
          <button onClick={() => setGender("womens")} className={`px-4 py-2 rounded-lg text-sm font-medium ${gender === "womens" ? "bg-primary text-white" : "bg-background text-muted"}`}>レディース</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-card-border"><th className="py-2 px-3 text-left">日本(cm)</th><th className="py-2 px-3 text-left">US</th><th className="py-2 px-3 text-left">UK</th><th className="py-2 px-3 text-left">EU</th></tr></thead>
            <tbody>{data.map((r, i) => <tr key={i} className="border-b border-card-border hover:bg-background"><td className="py-2 px-3 font-medium">{r.jp}</td><td className="py-2 px-3">{r.us}</td><td className="py-2 px-3">{r.uk}</td><td className="py-2 px-3">{r.eu}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>メンズ・レディースを切り替えて、各国の靴サイズを比較できます。</p></div></section>
      <RelatedTools currentSlug="shoe-size" category="日常ツール" />
    </div>
  );
}