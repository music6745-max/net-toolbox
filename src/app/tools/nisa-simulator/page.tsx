"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [monthly, setMonthly] = useState("30000");
  const [years, setYears] = useState("20");
  const [rate, setRate] = useState("5");

  const m = parseFloat(monthly) || 0;
  const y = parseFloat(years) || 0;
  const r = parseFloat(rate) || 0;
  const months = y * 12;
  const monthlyRate = r / 100 / 12;
  // Future value of annuity
  const fv = monthlyRate > 0 ? m * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) : m * months;
  const totalInvested = m * months;
  const profit = fv - totalInvested;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>NISA積立シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">新NISA積立シミュレーター</h1>
      <p className="text-muted mb-8">毎月の積立額・期間・想定利回りから将来の資産額を試算。新NISAの枠内での資産形成プランに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">毎月の積立額(円)</label><input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">積立期間(年)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">想定年利(%)</label><input type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">元本合計</div><div className="text-lg font-bold">¥{Math.round(totalInvested).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">将来資産</div><div className="text-lg font-bold text-primary">¥{Math.round(fv).toLocaleString()}</div></div>
          <div className="bg-green-50 dark:bg-green-900/40 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">運用益</div><div className="text-lg font-bold text-green-600">¥{Math.round(profit).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 将来の運用成果を保証するものではありません。最終判断はご自身で行ってください。</p>
      </div>
      <ToolFAQSection
        toolName="新NISA積立シミュレーター"
        howTo={[
          "毎月の積立額（円）を入力する（積立枠月上限は10万円）",
          "積立期間（年）を入力する（長期ほど複利効果が大きい）",
          "想定年利（%）を入力する（全世界株式7%・S&P500 10%・債券3%が目安）",
          "元本合計・将来資産・運用益が自動計算される",
        ]}
        faqs={[
          {
            question: "新NISAの年間上限は？",
            answer: "積立投資枠：年120万円（月10万円）、成長投資枠：年240万円（合計年360万円）、生涯投資枠1800万円。売却すれば翌年以降に復活、非課税期間は無期限。満額活用で年7%運用すれば、5年で2000万円超の非課税資産を構築可能です。",
          },
          {
            question: "月3万円×30年で何円？",
            answer: "年利7%想定で約3,657万円（元本1,080万円＋運用益2,577万円）。月5万円なら6,100万円、月10万円なら1億2,200万円超。複利効果は長期ほど爆発的、20代から始める重要性を数値で実感できます。",
          },
          {
            question: "想定年利は何%が現実的？",
            answer: "全世界株式インデックス（eMAXIS Slim全世界）：過去30年平均7〜8%、S&P500インデックス：過去30年平均10〜11%、バランス型ファンド（株50％＋債券50%）：年4〜5%、定期預金：0.1〜1%。新NISAはインデックス積立（全世界・S&P500）が王道、年6〜8%想定が手堅いです。",
          },
          {
            question: "おすすめの証券会社は？",
            answer: "SBI証券（投信2,500本・クレカ積立5%還元・三井住友NL連携）、楽天証券（楽天経済圏・クレカ積立1%）、マネックス証券（マネックスカード積立1.1%）の3強。クレカ積立還元率で年数千〜数万円の追加リターン、新NISAはこの3社から選べば失敗しません。",
          },
        ]}
      />
      <AffiliateSection slug="nisa-simulator" category="日常ツール" />
      <RelatedTools currentSlug="nisa-simulator" category="日常ツール" />
    </div>
  );
}
