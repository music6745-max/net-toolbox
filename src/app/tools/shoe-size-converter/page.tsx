"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [jp, setJp] = useState("26");
  const [gender, setGender] = useState("male");

  const cm = parseFloat(jp) || 0;
  // Approximate conversion
  const us = gender === "male" ? cm - 18 : cm - 16.5;
  const eu = gender === "male" ? cm + 6 : cm + 6;
  const uk = gender === "male" ? cm - 18.5 : cm - 17;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>靴サイズ変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">靴サイズ変換ツール（JP/US/EU/UK）</h1>
      <p className="text-muted mb-8">日本サイズから米国・欧州・英国の靴サイズに即変換。海外通販・旅行のお買い物に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">性別</label>
          <select value={gender} onChange={e => setGender(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="male">男性</option>
            <option value="female">女性</option>
          </select>
        </div>
        <div><label className="block text-sm font-medium mb-2">日本サイズ(cm)</label><input type="number" step="0.5" value={jp} onChange={e => setJp(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">US</div><div className="text-xl font-bold">{us.toFixed(1)}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">EU</div><div className="text-xl font-bold">{eu.toFixed(1)}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">UK</div><div className="text-xl font-bold">{uk.toFixed(1)}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="靴サイズ変換"
        howTo={[
          "性別を選択する（男性・女性で変換式が異なる）",
          "日本サイズ（cm）を入力する",
          "US・EU・UKのサイズが自動計算される",
          "海外通販・旅行時の靴購入に活用する",
        ]}
        faqs={[
          {
            question: "日本と海外サイズの対応表は？",
            answer: "男性：26cm→US 8.0・EU 42・UK 7.5。27cm→US 9.0・EU 43・UK 8.5。女性：23cm→US 6.5・EU 36.5・UK 6.0。24cm→US 7.5・EU 37.5・UK 7.0。ブランドによって1〜1.5サイズの誤差があるため、購入前にブランド公式のサイズ表で確認必須です。",
          },
          {
            question: "サイズは靴の形状で変わりますか？",
            answer: "変わります。同じサイズでもナイキ・アディダス・ニューバランス・バンズで足長・足幅が異なり、1サイズ上下で調整が必要な場合あり。特にナイキはやや細め、ニューバランスは幅広め。スポーツシューズは運動時の動きでワンサイズ大きめ選ぶのが一般的です。",
          },
          {
            question: "海外通販で失敗しないコツは？",
            answer: "①公式サイトのサイズガイドを必ず確認（ブランドごとに異なる）②レビューで「普段◯cmだが、このモデルは△cmがジャスト」等のコメントを参考に③返品可能なショップ（Amazon・Zappos等）を選ぶ④新品で初回購入時はワンサイズ多めに注文、家で試し履きが安全策です。",
          },
          {
            question: "足長と靴サイズの関係は？",
            answer: "日本は足長（cm）＝靴サイズ（cm）が基本。実際の足長よりも5〜10mm大きい靴を選ぶのが快適性のコツ（つま先に1cmの余裕）。幅広の方はEE・EEEサイズ、甲高の方はワイズ表示のあるブランド（ミズノ・アシックス・ヨネックス等の日本ブランド）がおすすめです。",
          },
        ]}
      />
      <AffiliateSection slug="shoe-size-converter" category="日常ツール" />
      <RelatedTools currentSlug="shoe-size-converter" category="日常ツール" />
    </div>
  );
}
