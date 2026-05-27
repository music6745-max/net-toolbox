"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const brackets = [
  { upTo: 1_950_000, rate: 0.05, deduction: 0 },
  { upTo: 3_300_000, rate: 0.10, deduction: 97_500 },
  { upTo: 6_950_000, rate: 0.20, deduction: 427_500 },
  { upTo: 9_000_000, rate: 0.23, deduction: 636_000 },
  { upTo: 18_000_000, rate: 0.33, deduction: 1_536_000 },
  { upTo: 40_000_000, rate: 0.40, deduction: 2_796_000 },
  { upTo: Infinity, rate: 0.45, deduction: 4_796_000 },
];

function kyuyoKojo(income: number): number {
  if (income <= 1_625_000) return 550_000;
  if (income <= 1_800_000) return income * 0.4 - 100_000;
  if (income <= 3_600_000) return income * 0.3 + 80_000;
  if (income <= 6_600_000) return income * 0.2 + 440_000;
  if (income <= 8_500_000) return income * 0.1 + 1_100_000;
  return 1_950_000;
}

export default function Page() {
  const [income, setIncome] = useState("5000000");
  const [extraDeduction, setExtraDeduction] = useState("0");

  const inc = parseFloat(income) || 0;
  const kyuyo = kyuyoKojo(inc);
  const shaho = inc * 0.15;
  const basic = 480_000;
  const extra = parseFloat(extraDeduction) || 0;
  const taxable = Math.max(0, inc - kyuyo - shaho - basic - extra);

  const bracket = brackets.find(b => taxable <= b.upTo)!;
  const incomeTax = Math.max(0, taxable * bracket.rate - bracket.deduction);
  const reconstructionTax = incomeTax * 0.021; // 復興特別所得税
  const residentTax = taxable * 0.10 + 5000; // 住民税概算（所得割10%＋均等割）

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>所得税ブラケット計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">所得税ブラケット計算ツール</h1>
      <p className="text-muted mb-8">年収から課税所得・適用税率・所得税・住民税の概算を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">年収（円）</label><input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">追加の所得控除（生命保険・iDeCo等・円）</label><input type="number" value={extraDeduction} onChange={e => setExtraDeduction(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">課税所得</div><div className="text-lg font-bold">¥{Math.round(taxable).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">適用税率</div><div className="text-lg font-bold">{(bracket.rate * 100).toFixed(0)}%</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">所得税（復興税込）</div><div className="text-xl font-bold text-primary">¥{Math.round(incomeTax + reconstructionTax).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">住民税（概算）</div><div className="text-xl font-bold text-primary">¥{Math.round(residentTax).toLocaleString()}</div></div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-bold mb-2">所得税の累進ブラケット</h3>
          <div className="space-y-1 text-xs">
            {brackets.map((b, i) => (
              <div key={i} className={`flex justify-between px-3 py-2 rounded ${b === bracket ? "bg-primary/20 font-bold" : "bg-background"}`}>
                <span>{i === 0 ? "～" : `¥${brackets[i - 1].upTo.toLocaleString()}超 ～`} {b.upTo === Infinity ? "" : `¥${b.upTo.toLocaleString()}`}</span>
                <span>{(b.rate * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-xs text-muted">※社会保険料は年収の15%として概算。実際の控除は個別の状況により異なります。</div>
      </div>

      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link href="/guide/accounting-software-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">税務ソフト比較ガイドを見る</div>
          <p className="text-xs text-muted">確定申告に役立つソフトを比較 →</p>
        </Link>
        <Link href="/guide/tax-accountant-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">税理士比較ガイドを見る</div>
          <p className="text-xs text-muted">相談先や依頼範囲を比較 →</p>
        </Link>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>年収を入力すると、給与所得控除・社会保険料・基礎控除を差し引いた課税所得をもとに、適用される所得税率と税額の概算を表示します。</p></div></section>

      <AffiliateSection slug="tax-bracket-calculator" category="日常ツール" />
      <RelatedTools currentSlug="tax-bracket-calculator" category="日常ツール" />
    </div>
  );
}
