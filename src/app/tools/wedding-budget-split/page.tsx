"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [total, setTotal] = useState("3500000");
  const [guests, setGuests] = useState("70");
  const [goshugiPerPerson, setGoshugiPerPerson] = useState("32000");
  const [parentHelp, setParentHelp] = useState("0");

  const t = parseFloat(total) || 0;
  const g = parseInt(guests) || 0;
  const gp = parseFloat(goshugiPerPerson) || 0;
  const ph = parseFloat(parentHelp) || 0;

  const goshugiTotal = g * gp;
  const selfPay = t - goshugiTotal - ph;
  const perPerson = selfPay / 2; // 2人で折半

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>結婚式自己負担計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">結婚式 自己負担額計算ツール</h1>
      <p className="text-muted mb-8">総費用・招待人数・ご祝儀・親援助から、新郎新婦の自己負担額を計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">総費用(円)</label><input type="number" value={total} onChange={e => setTotal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">招待人数</label><input type="number" value={guests} onChange={e => setGuests(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">ご祝儀平均(円/人)</label><input type="number" value={goshugiPerPerson} onChange={e => setGoshugiPerPerson(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">親からの援助額(円)</label><input type="number" value={parentHelp} onChange={e => setParentHelp(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ご祝儀見込</div><div className="text-sm font-bold">¥{Math.round(goshugiTotal).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">親援助</div><div className="text-sm font-bold">¥{Math.round(ph).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">自己負担合計</div><div className="text-lg font-bold text-primary">¥{Math.round(selfPay).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1人あたり</div><div className="text-sm font-bold">¥{Math.round(perPerson).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="結婚式自己負担額計算"
        howTo={[
          "結婚式の総費用（円）を入力",
          "招待人数を入力",
          "ご祝儀平均（友人3万・上司5万の平均で32000円）を入力",
          "親からの援助額を入力、自己負担合計・1人あたり額が計算される",
        ]}
        faqs={[
          {
            question: "結婚式の平均費用は？",
            answer: "挙式＋披露宴の平均費用は約330万円（ゼクシィ結婚トレンド調査）、招待人数約65名。都市部は350〜400万円、地方は250〜300万円が相場。スマ婚・少人数結婚式・1.5次会で100〜200万円に抑える選択肢も増加、新郎新婦の価値観で決めるのが主流です。",
          },
          {
            question: "ご祝儀の相場は？",
            answer: "友人：3万円が標準（2〜3万円）、上司：5万円、親族：5〜10万円、兄弟：5万円。全体平均は1人あたり3〜3.3万円、65人招待で200〜220万円のご祝儀収入が標準。差引き自己負担は平均100〜150万円、親援助で半減以下になる家庭も多いです。",
          },
          {
            question: "親援助の相場は？",
            answer: "新郎新婦それぞれの親が100〜200万円援助するケースが6割。合計200〜400万円の援助で、自己負担大幅軽減が実現。援助なしで自力結婚式の場合、共働き世帯なら2人で月10万円×12ヶ月＝120万円の貯金で対応、半年〜1年の計画的準備が必要です。",
          },
          {
            question: "節約のコツは？",
            answer: "①披露宴会場：ホテル高い・ゲストハウス＋レストランは半額③季節オフシーズン（1〜2月・梅雨・真冬）で30%引④衣装：ドレス1着のみで10〜20万円節約⑤手作り（招待状・席札・プチギフト）⑥ムービー・生花も外部手配。工夫次第で50〜100万円の節約可能です。",
          },
        ]}
      />
      <AffiliateSection slug="wedding-budget-split" category="日常ツール" />
      <RelatedTools currentSlug="wedding-budget-split" category="日常ツール" />
    </div>
  );
}
