"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="靴サイズ変換（一覧表）"
        howTo={[
          "メンズ or レディースを選択",
          "日本サイズ（cm）と各国サイズの対応表を確認",
          "海外通販・旅行時の靴購入に活用",
          "ブランドごとにサイズ差あるため、レビュー併読推奨",
        ]}
        faqs={[
          {
            question: "メンズ・レディースの違いは？",
            answer: "同じ24cmでもメンズUS6・レディースUS7とサイズ表記が異なる。靴の幅・デザインも違うため、男女で区別。ユニセックス（スニーカー等）は男性基準の表記が多い、女性が履く場合は1サイズ小さめ推奨。ブランドにより表記差があるため、公式サイズ表確認が必須です。",
          },
          {
            question: "海外ブランドの実寸差は？",
            answer: "ナイキ：やや小さめ、アディダス：やや大きめ、ニューバランス：普通〜幅広、ヴァンズ：大きめ。同じUS9表記でも1cm程度の差あり、複数サイズ試着or購入レビュー確認が安全。海外通販は返品対応のあるAmazon・Zappos・ASOSが初回購入には向いています。",
          },
          {
            question: "足長と靴サイズの関係は？",
            answer: "日本：足長＝靴サイズ（cm）が基本、つま先に1cm余裕が理想。足長24.5cmなら靴サイズ25.5〜26cm推奨。海外サイズ（US/UK/EU）は足長とは直接対応しない数値のため、換算表必須。幅広（EEE）・狭幅（D）表記も存在、足形測定で正確なフィッティング可能です。",
          },
          {
            question: "子供靴のサイズは？",
            answer: "成長期の子供は3〜6ヶ月で1cm成長、頻繁な買い替え必要。日本では12cm〜22cmまで0.5cm刻み、米国はインファント（0〜4）・トドラー（4〜10）・プレスクール（10.5〜3）・グレード（1〜7）等複雑。日本サイズ直指定が分かりやすい、メルカリ等でリユース活用も経済的です。",
          },
        ]}
      />
      <AffiliateSection slug="shoe-size" category="日常ツール" />

      <RelatedTools currentSlug="shoe-size" category="日常ツール" />
    </div>
  );
}