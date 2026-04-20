"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [buy, setBuy] = useState("1000000");
  const [sell, setSell] = useState("1300000");
  const [years, setYears] = useState("3");

  const b = parseFloat(buy) || 0;
  const s = parseFloat(sell) || 0;
  const y = parseFloat(years) || 1;
  const profit = s - b;
  const returnRate = b > 0 ? (profit / b * 100) : 0;
  const annualReturn = b > 0 ? ((Math.pow(s / b, 1 / y) - 1) * 100) : 0;
  const tax = profit > 0 ? profit * 0.20315 : 0;
  const afterTax = profit - tax;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>投資リターン計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">投資リターン計算ツール</h1>
      <p className="text-muted mb-8">購入額と売却額からリターン率・年率・税引後利益を計算。※投資助言ではありません。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">購入額(円)</label><input type="number" value={buy} onChange={e => setBuy(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">売却額(円)</label><input type="number" value={sell} onChange={e => setSell(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">保有年数</label><input type="number" step="0.1" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">損益</div><div className={`text-lg font-bold ${profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>¥{Math.round(profit).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">トータルリターン</div><div className="text-lg font-bold text-primary">{returnRate.toFixed(1)}%</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年率リターン</div><div className="text-lg font-bold">{annualReturn.toFixed(2)}%</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">税引後利益</div><div className="text-sm font-bold">¥{Math.round(afterTax).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted">※ 税率20.315%で計算。NISA口座なら非課税。</p>
      </div>
      <ToolFAQSection
        toolName="投資リターン計算"
        howTo={[
          "購入額（円）を入力する",
          "売却額（円）を入力する",
          "保有年数を入力する",
          "損益・トータルリターン・年率リターン・税引後利益が自動計算される",
        ]}
        faqs={[
          {
            question: "年率リターンの計算式は？",
            answer: "(売却額/購入額)^(1/保有年数) - 1 で計算（幾何平均）。例：100万円→130万円・3年なら、(130/100)^(1/3)-1＝9.14%。トータルリターン30%は年率リターン9.14%に相当、複利ベースの年率。投資信託の運用報告書でも同じ式で計算されます。",
          },
          {
            question: "株式投資の平均リターンは？",
            answer: "S&P500（米国株）：年平均10〜11%（1970〜2024年）、全世界株：年平均8〜9%、日経平均：年平均5〜7%。配当込みリターンなら+2〜3%加算、新NISA口座で運用すれば非課税で最大化。ただし過去実績は将来を保証しないため、長期分散投資＋下落耐性が重要です。",
          },
          {
            question: "NISA口座の税金メリットは？",
            answer: "新NISA口座内の売却益・配当は全額非課税（通常20.315%課税）。1000万円の利益なら、通常課税で203万円の税金、NISA口座なら0円。30年複利運用で比較すると、NISA組の資産は通常課税組の1.3〜1.5倍に。年360万円・生涯1800万円の枠をフル活用が資産形成の鉄則です。",
          },
          {
            question: "投資リターンを最大化する方法は？",
            answer: "①新NISA・iDeCo満額活用（非課税効果）②低コスト投資信託選定（信託報酬0.1%以下）③長期保有（複利効果最大化）④ドルコスト平均法（高値掴み回避）⑤再投資（配当・分配金で複利加速）⑥税引き後の最終利益で評価。短期売買より長期分散が圧倒的に有利な理由です。",
          },
        ]}
      />
      <AffiliateSection slug="investment-return-calc" category="日常ツール" />
      <RelatedTools currentSlug="investment-return-calc" category="日常ツール" />
    </div>
  );
}
