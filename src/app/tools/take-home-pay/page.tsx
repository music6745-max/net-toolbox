"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [gross, setGross] = useState("300000");
  const [age, setAge] = useState("30");

  const g = parseFloat(gross) || 0;
  const a = parseFloat(age) || 0;
  // Simplified: health 10%, pension 9.15%, employment 0.6%, tax estimated
  const health = g * 0.0495;
  const pension = g * 0.0915;
  const employment = g * 0.006;
  const nurseCare = a >= 40 ? g * 0.009 : 0;
  const socialInsurance = health + pension + employment + nurseCare;
  const taxable = g - socialInsurance;
  const incomeTax = taxable * 0.05; // approximated
  const residentTax = taxable * 0.1;
  const total = socialInsurance + incomeTax + residentTax;
  const netPay = g - total;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>月給手取り計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">月給の手取り額計算ツール</h1>
      <p className="text-muted mb-8">額面月給から健康保険・厚生年金・雇用保険・所得税・住民税を差し引いた手取り額を概算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">額面月給(円)</label><input type="number" value={gross} onChange={e => setGross(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">年齢</label><input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-muted">健康保険(約4.95%)</span><span>-¥{Math.round(health).toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted">厚生年金(約9.15%)</span><span>-¥{Math.round(pension).toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted">雇用保険(0.6%)</span><span>-¥{Math.round(employment).toLocaleString()}</span></div>
          {a >= 40 && <div className="flex justify-between"><span className="text-muted">介護保険(約0.9%)</span><span>-¥{Math.round(nurseCare).toLocaleString()}</span></div>}
          <div className="flex justify-between"><span className="text-muted">所得税(概算)</span><span>-¥{Math.round(incomeTax).toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted">住民税(概算)</span><span>-¥{Math.round(residentTax).toLocaleString()}</span></div>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center mt-4">
          <div className="text-xs text-muted mb-1">月の手取り額(概算)</div>
          <div className="text-3xl font-bold text-primary">¥{Math.round(netPay).toLocaleString()}</div>
        </div>
        <p className="text-xs text-muted mt-2">※ 東京都の一般的な料率で計算した概算です。実際の給与明細とは異なる場合があります。</p>
      </div>
      <ToolFAQSection
        toolName="月給手取り計算"
        howTo={[
          "額面月給（円）を入力（基本給＋諸手当の合計）",
          "年齢を入力（40歳以上で介護保険加算）",
          "各種天引き項目（健康保険・厚生年金・雇用保険・税金）と手取りが表示",
          "就職・転職・昇給時の手取り予測に活用",
        ]}
        faqs={[
          {
            question: "額面と手取りの差は？",
            answer: "一般的に額面の75〜80%が手取り、額面30万円なら手取り23〜24万円。内訳：健康保険4.95%・厚生年金9.15%・雇用保険0.6%・所得税・住民税で計20〜25%差引。40歳以上は介護保険0.9%追加、年収高いほど所得税率上がり手取り率は下がる傾向です。",
          },
          {
            question: "年収別の手取り目安は？",
            answer: "年収300万：手取り238万（月20万）。年収500万：手取り385万（月32万）。年収700万：手取り532万（月44万）。年収1000万：手取り725万（月60万）。累進課税で高年収ほど手取り率低下、年収800万→1000万は手取り125万円増（63%）が現実的です。",
          },
          {
            question: "手取りを増やすには？",
            answer: "①iDeCo月2万円で年7.2万円節税（手取り約4万円増）②生命保険料控除年12万円で所得税3.6万円還付③ふるさと納税年7万円で2,000円負担の返礼品2万円④特定支出控除・副業経費計上⑤医療費控除。合計で年10〜20万円の手取り増が現実的、freee確定申告が便利です。",
          },
          {
            question: "社会保険料の負担割合は？",
            answer: "健康保険料・厚生年金保険料・雇用保険料は会社と折半（従業員と雇用主が半分ずつ負担）。会社側も同額負担のため、実質的な人件費は給与の1.5倍。フリーランス・自営業はすべて自己負担、国民健康保険＋国民年金で年30〜60万円、会社員より負担率は高いです。",
          },
        ]}
      />
      <AffiliateSection slug="take-home-pay" category="日常ツール" />
      <RelatedTools currentSlug="take-home-pay" category="日常ツール" />
    </div>
  );
}
