"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [principal, setPrincipal] = useState("1000000");
  const [rate1, setRate1] = useState("0.1");
  const [rate2, setRate2] = useState("0.5");
  const [years, setYears] = useState("10");

  const p = parseFloat(principal) || 0;
  const r1 = parseFloat(rate1) / 100;
  const r2 = parseFloat(rate2) / 100;
  const y = parseFloat(years) || 0;
  const amount1 = p * Math.pow(1 + r1, y);
  const amount2 = p * Math.pow(1 + r2, y);
  const diff = amount2 - amount1;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>金利差シミュレーション</span></nav>
      <h1 className="text-2xl font-bold mb-2">金利差シミュレーション</h1>
      <p className="text-muted mb-8">2つの金利で預けた場合の差額を計算。銀行選びの参考に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">元本(円)</label><input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">金利A(%)</label><input type="number" step="0.01" value={rate1} onChange={e => setRate1(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">金利B(%)</label><input type="number" step="0.01" value={rate2} onChange={e => setRate2(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">期間(年)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">金利A({rate1}%)</div><div className="text-lg font-bold">¥{Math.round(amount1).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">金利B({rate2}%)</div><div className="text-lg font-bold">¥{Math.round(amount2).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">差額</div><div className="text-xl font-bold text-primary">¥{Math.round(diff).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="金利差シミュレーション"
        howTo={[
          "元本（円）を入力する",
          "金利A（%）と金利B（%）を入力する（比較したい2つの銀行の金利）",
          "運用期間（年）を入力する",
          "両方の金利での複利運用後の金額と差額が自動計算される",
        ]}
        faqs={[
          {
            question: "主要銀行の金利比較は？",
            answer: "メガバンク普通預金：0.001%（ほぼゼロ）、ネット銀行普通：0.1〜0.3%（あおぞら銀行BANK支店等）、定期預金：0.5〜1.0%（SBI新生銀行スタートアップ定期等）、新興ネット銀行：0.3〜0.5%（住信SBI・楽天銀行）。100万円を10年預けても、メガバンク100円、高金利銀行10万円と1000倍の差が出ます。",
          },
          {
            question: "複利の力はどれくらい？",
            answer: "複利は「利息に利息がつく」仕組み。年利5%・100万円・30年間なら、単利なら250万円だが複利なら432万円、差額は182万円。新NISA（年7%想定）で月3万円を30年なら3,657万円（元本1,080万円）、年齢が若いほど複利メリット最大化、時間こそ最強の資産です。",
          },
          {
            question: "金利0.1%と1%で何が違う？",
            answer: "元本100万円を20年運用した場合、0.1%なら102万円（+2万円）、1%なら122万円（+22万円）、差額20万円。金利差10倍は運用結果も10倍以上の差。定期預金でも徹底比較で年数万円の差額を作れる、新NISA（年7〜10%）なら元本の2〜7倍に成長可能です。",
          },
          {
            question: "預金と投資どっちが有利？",
            answer: "短期（〜3年）は預金（元本保証）、長期（10年以上）は投資（リターン期待）。100万円を30年運用するなら、預金（年1%）135万円 vs 新NISA（年7%）761万円。生活防衛資金6ヶ月分は預金、残りは新NISA・iDeCoで長期分散投資が最適解です。",
          },
        ]}
      />
      <AffiliateSection slug="interest-rate-comparison" category="日常ツール" />
      <RelatedTools currentSlug="interest-rate-comparison" category="日常ツール" />
    </div>
  );
}
