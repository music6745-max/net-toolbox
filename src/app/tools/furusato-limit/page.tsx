"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [income, setIncome] = useState("5000000");
  const [family, setFamily] = useState("single");

  const i = parseFloat(income) || 0;
  // Simplified calculation
  const factors: Record<string, number> = {
    single: 0.0234,
    married: 0.0211,
    married_child: 0.0192,
    married_2child: 0.0183,
  };
  const limit = i * factors[family];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ふるさと納税上限額</span></nav>
      <h1 className="text-2xl font-bold mb-2">ふるさと納税 上限額の目安計算</h1>
      <p className="text-muted mb-8">年収と家族構成から、自己負担2,000円で済むふるさと納税の上限額目安を計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">年収(円)</label><input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">家族構成</label>
          <select value={family} onChange={e => setFamily(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="single">独身または共働き</option>
            <option value="married">夫婦(配偶者扶養)</option>
            <option value="married_child">夫婦+子1人(高校生)</option>
            <option value="married_2child">夫婦+子2人(高校生＋大学生)</option>
          </select>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center mt-4">
          <div className="text-xs text-muted mb-1">ふるさと納税上限額の目安</div>
          <div className="text-3xl font-bold text-primary">¥{Math.round(limit).toLocaleString()}</div>
        </div>
        <p className="text-xs text-muted mt-2">※ 概算です。住宅ローン控除・医療費控除など他の控除がある場合は変動します。正確な額は税理士にご確認ください。</p>
      </div>
      <ToolFAQSection
        toolName="ふるさと納税上限額計算"
        howTo={[
          "年収（円）を入力する（会社員は源泉徴収票の「支払金額」）",
          "家族構成を選ぶ（独身・夫婦・子あり等）",
          "自己負担2,000円で済む寄付上限額の目安が計算される",
          "楽天ふるさと納税・さとふる等で上限の9割までを寄付が安全",
        ]}
        faqs={[
          {
            question: "ふるさと納税の仕組みは？",
            answer: "好きな自治体に寄付すると、寄付額-2,000円が所得税還付＋住民税減額で戻ってくる制度。実質負担2,000円で数万〜数十万円の返礼品（寄付額の3割）を受け取れる。年収500万円なら限度額77,000円→返礼品23,000円相当が実質2,000円で入手可能な超お得制度です。",
          },
          {
            question: "年収別の上限額目安は？",
            answer: "独身・年収400万：42,000円、600万：77,000円、800万：130,000円、1000万：176,000円、1500万：390,000円。夫婦（配偶者扶養）なら若干減額、共働き（配偶者収入あり）なら独身と同じ扱い。高所得者ほどメリット大、年収1000万円超は年20万円以上の実質節税効果になります。",
          },
          {
            question: "ワンストップ特例と確定申告どっち？",
            answer: "会社員＋寄付先5自治体以内なら「ワンストップ特例」（確定申告不要）が簡単。医療費控除・住宅ローン控除（初年度）・副業確定申告する人は確定申告でふるさと納税も同時処理。さとふる・楽天のアプリでワンストップ特例オンライン完結可能、郵送不要で時間節約できます。",
          },
          {
            question: "おすすめサイトは？",
            answer: "楽天ふるさと納税（SPU最大16倍でポイント還元最強）、さとふる（アプリ完結で初心者向け）、ふるなび（Amazonギフト還元）、ふるさとチョイス（返礼品数最多）。楽天経済圏ユーザーなら楽天、それ以外はさとふるがおすすめ。両方登録して自治体・返礼品で使い分けるのが王道です。",
          },
        ]}
      />
      <AffiliateSection slug="furusato-limit" category="日常ツール" />
      <RelatedTools currentSlug="furusato-limit" category="日常ツール" />
    </div>
  );
}
