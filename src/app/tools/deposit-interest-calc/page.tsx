"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [principal, setPrincipal] = useState("1000000");
  const [rate, setRate] = useState("0.2");
  const [years, setYears] = useState("10");
  const [compound, setCompound] = useState("monthly");

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) / 100;
  const y = parseFloat(years) || 0;
  const n = compound === "monthly" ? 12 : compound === "daily" ? 365 : 1;
  const amount = p * Math.pow(1 + r / n, n * y);
  const interest = amount - p;
  const afterTax = interest * 0.79685; // 20.315% 税引後
  const finalAmount = p + afterTax;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>定期預金複利計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">定期預金・複利計算ツール</h1>
      <p className="text-muted mb-8">元本・金利・期間から定期預金の満期額を計算。税引後の手取り額も表示。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">元本(円)</label><input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">年利(%)</label><input type="number" step="0.01" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">期間(年)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">複利計算頻度</label>
          <select value={compound} onChange={e => setCompound(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="yearly">年1回</option>
            <option value="monthly">月1回</option>
            <option value="daily">毎日</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">税引前利息</div><div className="text-lg font-bold">¥{Math.round(interest).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">税引後満期額</div><div className="text-xl font-bold text-primary">¥{Math.round(finalAmount).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 税率は20.315%で計算。マル優等の非課税制度は考慮していません。</p>
      </div>
      <ToolFAQSection
        toolName="定期預金・複利計算"
        howTo={[
          "元本（預入額・円）を入力",
          "年利（%）を入力（普通預金0.001%・定期1%前後）",
          "期間（年）・複利頻度を選択",
          "税引後の満期額が自動計算",
        ]}
        faqs={[
          {
            question: "主要銀行の定期預金金利は？",
            answer: "2026年時点：メガバンク（三菱UFJ・みずほ・三井住友）年0.002〜0.02%、ネット銀行（あおぞら銀行 BANK支店・住信SBI・楽天）年0.2〜0.5%、一部キャンペーンで1%超（スタートアップ定期・楽天定期預金特別金利）。金利差100倍以上、ネット銀行一択が合理的です。",
          },
          {
            question: "複利と単利の違いは？",
            answer: "単利：元本のみに利息計算、毎年同額の利息。複利：利息を元本に組入れて計算、時間とともに元本が増加。100万円×年1%×30年なら、単利130万円・複利135万円。年利5%なら単利250万円・複利432万円と差が急拡大、長期運用ほど複利の恩恵が大きいです。",
          },
          {
            question: "預金と投資どっちが良い？",
            answer: "短期（〜3年）の使途決まった資金は預金、長期（10年以上）は投資が鉄則。100万円を20年運用で、預金（年0.5%）110万円 vs 新NISA（年7%）386万円、差額276万円。ただし生活防衛資金6ヶ月分は投資せず預金、残りを投資に回す配分が王道戦略です。",
          },
          {
            question: "定期預金の税金は？",
            answer: "利息に20.315%課税（所得税15.315%＋住民税5%）源泉徴収。100万円×年1%×1年の利息1万円に2031円の税金、手取り7,969円。新NISA口座なら非課税だが定期預金はNISA対象外、マル優（高齢者・障害者の非課税枠350万円）のみ例外的に非課税となります。",
          },
        ]}
      />
      <AffiliateSection slug="deposit-interest-calc" category="日常ツール" />
      <RelatedTools currentSlug="deposit-interest-calc" category="日常ツール" />
    </div>
  );
}
