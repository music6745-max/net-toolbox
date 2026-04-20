"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [principal, setPrincipal] = useState("35000000");
  const [rate, setRate] = useState("0.8");
  const [years, setYears] = useState("35");

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) / 100 / 12;
  const n = (parseFloat(years) || 0) * 12;
  const monthly = r > 0 ? (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : p / n;
  const total = monthly * n;
  const interest = total - p;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>住宅ローン返済シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">住宅ローン返済シミュレーター</h1>
      <p className="text-muted mb-8">借入額・金利・返済期間から毎月の返済額・総返済額・利息を計算。元利均等返済方式。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">借入額(円)</label><input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">金利(年%)</label><input type="number" step="0.01" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">返済期間(年)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">毎月返済額</div><div className="text-xl font-bold text-primary">¥{Math.round(monthly).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">総返済額</div><div className="text-lg font-bold">¥{Math.round(total).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">利息合計</div><div className="text-lg font-bold">¥{Math.round(interest).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="住宅ローン返済シミュレーター"
        howTo={[
          "借入額（円）を入力する（3500万円＝35,000,000）",
          "金利（年%）を入力する（変動金利の相場0.3〜0.5%、固定金利1.0〜1.5%）",
          "返済期間（年）を入力する（最長35年が一般的）",
          "元利均等返済方式で毎月返済額・総返済額・利息合計が計算される",
        ]}
        faqs={[
          {
            question: "3500万円35年ローンの月返済額は？",
            answer: "金利0.5%（変動）：月9.1万円・総返済額3822万円・利息322万円。金利0.8%：月9.6万円・総返済額4018万円・利息518万円。金利1.3%（固定）：月10.4万円・総返済額4368万円・利息868万円。金利1%の差で総返済額が500万円以上変わるため、金利選択は超重要です。",
          },
          {
            question: "変動金利と固定金利どっちが良い？",
            answer: "低金利継続予想なら変動（現在0.3〜0.5%）、金利上昇不安なら固定（フラット35で1.3〜1.5%）。変動は5年ルール（5年毎の見直しで最大25%増）＆125%ルールあり、短期的には安全。返済期間10年以上なら固定も有力、ミックスプラン（変動＋固定の併用）も選択肢です。",
          },
          {
            question: "借入可能額の目安は？",
            answer: "年収の5〜7倍が借入上限の目安（金融機関基準）。年収500万円なら2500〜3500万円、年収1000万円なら5000〜7000万円が上限。返済負担率（年間返済額÷年収）は25〜35%以内が推奨、35%超は審査通りにくい。無理のないラインは返済負担率20〜25%以内です。",
          },
          {
            question: "繰り上げ返済のメリットは？",
            answer: "期間短縮型：総返済額を大幅削減（金利1%・返済期間20年短縮で数百万円節約）。返済額軽減型：毎月の負担減で家計にゆとり。低金利時代（金利0.5%）は繰り上げより資産運用（S&P500で年8%）の方が合計資産は増えますが、心理的安定と万が一の保険効果は繰り上げに軍配。",
          },
        ]}
      />
      <AffiliateSection slug="housing-loan-simulator" category="日常ツール" />
      <RelatedTools currentSlug="housing-loan-simulator" category="日常ツール" />
    </div>
  );
}
