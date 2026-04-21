"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [price, setPrice] = useState("3000000");
  const [down, setDown] = useState("500000");
  const [rate, setRate] = useState("2.5");
  const [years, setYears] = useState("5");

  const p = Math.max(0, (parseFloat(price) || 0) - (parseFloat(down) || 0));
  const r = (parseFloat(rate) || 0) / 100 / 12;
  const n = (parseInt(years) || 0) * 12;
  const monthly = n > 0 ? (r > 0 ? (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : p / n) : 0;
  const total = monthly * n;
  const interest = total - p;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>自動車ローンシミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">自動車ローンシミュレーター</h1>
      <p className="text-muted mb-8">車両価格・頭金・金利・返済期間から月々の返済額と総返済額を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">車両価格（円）</label><input type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">頭金（円）</label><input type="number" value={down} onChange={e => setDown(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">年利（%）</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">返済期間（年）</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月々の返済額</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">総返済額</div><div className="text-xl font-bold">¥{Math.round(total).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">利息合計</div><div className="text-xl font-bold">¥{Math.round(interest).toLocaleString()}</div></div>
        </div>
        <div className="mt-4 text-xs text-muted">借入元本 ¥{p.toLocaleString()}（車両価格 − 頭金）・元利均等返済方式で計算</div>
      </div>

      <section className="mt-8">
        <Link href="/guide/car-loan-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">自動車ローンおすすめ5選を比較</div>
          <p className="text-xs text-muted">銀行ローン／ディーラーローンを金利・総返済額で徹底比較するガイドを見る →</p>
        </Link>
      </section>

      <ToolFAQSection
        toolName="自動車ローンシミュレーター"
        howTo={[
          "車両価格（円）を入力",
          "頭金（円）を入力",
          "年利（銀行1〜3%・ディーラー3〜7%）と返済期間（年）を入力",
          "月々の返済額・総返済額・利息合計が自動計算",
        ]}
        faqs={[
          {
            question: "銀行ローンとディーラーローンどっち？",
            answer: "銀行ローン：金利1〜3%で圧倒的に安い、審査通れば第一選択。ディーラーローン：金利3〜7%で高いが、審査甘い＋手続き楽＋車検整備費用込みプランも。300万円×5年で銀行ローン（2%）総返済額315万円 vs ディーラー（5%）340万円、差額25万円。頭金用意して銀行ローン利用が鉄則です。",
          },
          {
            question: "自動車ローンの相場は？",
            answer: "銀行：メガバンク2〜3%、地方銀行2〜4%、ネット銀行1〜2%。ディーラー：トヨタ・日産・ホンダ等3〜5%。信販系（ジャックス・オリコ）：3〜7%。ローン金利は信用情報・勤続年数・年収で変動、年収の30%以内の返済計画＋頭金20%以上で有利な金利獲得できます。",
          },
          {
            question: "残価設定ローン（残価据置型）は？",
            answer: "3〜5年後の残価を据置く、月々の返済額を抑える方式。300万円車の残価50%なら返済対象150万円で月額安い（月3万→月1.5万）。ただし残価買取・乗換・返却の3択選択時に条件制約あり、買取なら差額支払、乗換なら残価分値引き効果薄い。3〜5年で車乗換え派には有利、長期保有派は通常ローン推奨です。",
          },
          {
            question: "新車と中古車どっちがお得？",
            answer: "コスパ重視は3〜5年落ち中古（新車価格の50〜70%）。新車200万円 vs 3年落ち中古120万円で差額80万円、それを新NISAで運用すれば30年で600万円の差。新車の保証・最新装備vs中古のコスパ、用途・予算で判断、中古＋定期的な乗換えが家計優等生のパターンです。",
          },
        ]}
      />

      <AffiliateSection slug="car-loan-simulator" category="日常ツール" />
      <RelatedTools currentSlug="car-loan-simulator" category="日常ツール" />
    </div>
  );
}
