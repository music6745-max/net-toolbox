"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [income, setIncome] = useState("5000000");
  const [deductions, setDeductions] = useState("480000");

  const i = parseFloat(income) || 0;
  const d = parseFloat(deductions) || 0;
  const taxable = Math.max(0, i - d - 480000); // 基礎控除48万
  // 簡易所得税率
  let tax = 0;
  if (taxable <= 1950000) tax = taxable * 0.05;
  else if (taxable <= 3300000) tax = taxable * 0.1 - 97500;
  else if (taxable <= 6950000) tax = taxable * 0.2 - 427500;
  else if (taxable <= 9000000) tax = taxable * 0.23 - 636000;
  else if (taxable <= 18000000) tax = taxable * 0.33 - 1536000;
  else if (taxable <= 40000000) tax = taxable * 0.4 - 2796000;
  else tax = taxable * 0.45 - 4796000;
  const residentTax = taxable * 0.1;
  const totalTax = tax + residentTax;
  const effectiveRate = i > 0 ? (totalTax / i * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>所得税・住民税概算</span></nav>
      <h1 className="text-2xl font-bold mb-2">所得税・住民税 概算計算ツール</h1>
      <p className="text-muted mb-8">年収と控除額から所得税・住民税の概算を計算。確定申告前の目安に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">年収(円)</label><input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">控除合計(社保・配偶者等)(円)</label><input type="number" value={deductions} onChange={e => setDeductions(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">課税所得</div><div className="text-sm font-bold">¥{Math.round(taxable).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">所得税(概算)</div><div className="text-sm font-bold">¥{Math.round(tax).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">住民税(概算)</div><div className="text-sm font-bold">¥{Math.round(residentTax).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">実効税率</div><div className="text-xl font-bold text-primary">{effectiveRate.toFixed(1)}%</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 概算です。給与所得控除・復興特別所得税等は簡略化しています。正確な計算は税理士にご相談ください。</p>
      </div>
      <ToolFAQSection
        toolName="所得税・住民税概算計算"
        howTo={[
          "年収（円）を入力する（総支給額・額面年収）",
          "控除合計（社会保険料・生命保険料等）を入力",
          "課税所得・所得税・住民税・実効税率が自動計算",
          "確定申告前の目安として活用、節税プランの検討に",
        ]}
        faqs={[
          {
            question: "年収別の税負担は？",
            answer: "年収400万：所得税9万＋住民税20万＝計29万（実効7%）。年収600万：所得税20万＋住民税30万＝計50万（8%）。年収800万：所得税50万＋住民税45万＝計95万（12%）。年収1000万：所得税94万＋住民税60万＝計154万（15%）。累進課税で年収1200万超から実効税率20%超となります。",
          },
          {
            question: "控除を増やして節税するには？",
            answer: "①iDeCo（年最大27.6万円）②生命保険料控除（年12万円）③ふるさと納税（年収別上限）④医療費控除（年10万円超）⑤特定支出控除⑥副業の経費計上。年収600万円なら合計年20〜30万円の控除追加で、年5〜10万円の節税効果が現実的です。",
          },
          {
            question: "住民税の計算方法は？",
            answer: "住民税=所得割（課税所得×10%）＋均等割（5,000円前後）。所得税と違って累進課税ではなく一律10%、高所得者には負担感小さい。住民税は前年所得に基づくため退職・転職時は要注意、退職金課税や退職翌年の住民税負担で混乱するケース多発しています。",
          },
          {
            question: "副業の確定申告は？",
            answer: "会社員の副業収入が年20万円超で確定申告必要。雑所得扱いなら基礎控除48万円適用後に所得税＋住民税。事業所得なら青色申告65万円控除＋必要経費も計上可、税金負担大幅軽減。freee会計・マネーフォワードで簡単に申告書作成可能、税理士ドットコムの無料相談も活用できます。",
          },
        ]}
      />
      <AffiliateSection slug="tax-withholding-checker" category="日常ツール" />
      <RelatedTools currentSlug="tax-withholding-checker" category="日常ツール" />
    </div>
  );
}
