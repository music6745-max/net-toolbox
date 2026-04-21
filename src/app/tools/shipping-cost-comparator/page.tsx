"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [size, setSize] = useState("60");
  const [weight, setWeight] = useState("2");

  const s = parseInt(size) || 0;
  const w = parseFloat(weight) || 0;

  // Approximate regular prices per size for major carriers
  const yamato: Record<number, number> = { 60: 1060, 80: 1280, 100: 1580, 120: 1810, 140: 2050, 160: 2310, 180: 3250, 200: 3840 };
  const sagawa: Record<number, number> = { 60: 990, 80: 1210, 100: 1410, 140: 1700, 160: 1920 };
  const japanPost: Record<number, number> = { 60: 810, 80: 1030, 100: 1280, 120: 1530, 140: 1780, 160: 2010, 170: 2340 };

  const findNearest = (r: Record<number, number>) => {
    const keys = Object.keys(r).map(Number).sort((a, b) => a - b);
    for (const k of keys) if (s <= k) return r[k];
    return r[keys[keys.length - 1]];
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>宅配便料金比較</span></nav>
      <h1 className="text-2xl font-bold mb-2">宅配便料金比較ツール</h1>
      <p className="text-muted mb-8">サイズ・重量からヤマト・佐川・ゆうパックの料金を比較(同一地域・関東圏目安)。最安の配送業者を選べます。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">サイズ(60/80/100/120/140/160/170/180/200)</label>
          <select value={size} onChange={e => setSize(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            {[60, 80, 100, 120, 140, 160, 170, 180, 200].map(sz => <option key={sz} value={sz}>{sz}サイズ</option>)}
          </select>
        </div>
        <div><label className="block text-sm font-medium mb-2">重量(kg)</label><input type="number" step="0.5" value={weight} onChange={e => setWeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ヤマト運輸</div><div className="text-lg font-bold">¥{findNearest(yamato).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">佐川急便</div><div className="text-lg font-bold">¥{findNearest(sagawa).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ゆうパック</div><div className="text-lg font-bold">¥{findNearest(japanPost).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 目安です。実際の料金は配送会社・地域・キャンペーンで変動します。</p>
      </div>
      <ToolFAQSection
        toolName="宅配便料金比較"
        howTo={[
          "荷物のサイズ（3辺合計：60〜200）を選択",
          "重量（kg）を入力",
          "ヤマト運輸・佐川急便・ゆうパックの料金が並んで表示",
          "最安の業者を選んで送料節約",
        ]}
        faqs={[
          {
            question: "サイズはどう測る？",
            answer: "縦・横・高さの3辺合計（cm）。60サイズ（3辺合計60cm以内）、80サイズ（80cm以内）、100サイズ、120サイズと段階的。1辺でも限界超えなら1つ上のサイズになる。重量も制限あり、60サイズ2kg・80サイズ5kg・100サイズ10kgが目安、サイズ＆重量両方チェックが必要です。",
          },
          {
            question: "メルカリ・ラクマの配送はどれが安い？",
            answer: "メルカリ：らくらくメルカリ便（ヤマト提携）・ゆうゆうメルカリ便（日本郵便提携）で大幅割引。60サイズ750円、80サイズ870円、100サイズ1070円。通常料金の半額程度で、出品者・購入者とも送料削減、匿名配送も可能、個人間取引の定番です。",
          },
          {
            question: "大型荷物（200サイズ超）は？",
            answer: "200サイズ超・重量30kg超は特別配送サービスが必要。ヤマト「らくらく家財宅急便」、佐川「家財便」等で家具・家電対応、設置サービス込み（+3000〜5000円）も選択可。大型家具引越しはクロネコヤマト・サカイ引越センターの単品配送プランがコスパ良いです。",
          },
          {
            question: "国際配送の料金は？",
            answer: "EMS（日本郵便）：アメリカまで1kg 3,900円、ヨーロッパ4,400円。DHL Express：1kg 6,000〜8,000円（早い）。FedEx：1kg 5,000〜7,000円。価格はEMS最安、スピードはDHL最速。文書・小型物はEMS、大型・急ぎはDHLが一般的な使い分けです。",
          },
        ]}
      />
      <AffiliateSection slug="shipping-cost-comparator" category="日常ツール" />
      <RelatedTools currentSlug="shipping-cost-comparator" category="日常ツール" />
    </div>
  );
}
