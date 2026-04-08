"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

// 給与所得控除（令和2年以降簡易版）
function kyuyoKojo(income: number): number {
  if (income <= 1_625_000) return 550_000;
  if (income <= 1_800_000) return income * 0.4 - 100_000;
  if (income <= 3_600_000) return income * 0.3 + 80_000;
  if (income <= 6_600_000) return income * 0.2 + 440_000;
  if (income <= 8_500_000) return income * 0.1 + 1_100_000;
  return 1_950_000;
}

// 所得税率（速算）
function shotokuRate(taxable: number): number {
  if (taxable <= 1_950_000) return 0.05;
  if (taxable <= 3_300_000) return 0.10;
  if (taxable <= 6_950_000) return 0.20;
  if (taxable <= 9_000_000) return 0.23;
  if (taxable <= 18_000_000) return 0.33;
  if (taxable <= 40_000_000) return 0.40;
  return 0.45;
}

export default function Page() {
  const [income, setIncome] = useState("5000000");
  const [family, setFamily] = useState("single"); // single, married, married_child

  const inc = parseFloat(income) || 0;
  const kyuyo = kyuyoKojo(inc);
  const shotoku = inc - kyuyo;
  // 社会保険料 概算15%
  const shaho = inc * 0.15;
  // 配偶者控除等
  let kojo = 480_000 + shaho; // 基礎控除＋社保
  if (family === "married") kojo += 380_000;
  if (family === "married_child") kojo += 380_000 + 380_000;
  const taxable = Math.max(0, shotoku - kojo);
  const rate = shotokuRate(taxable);
  // 住民税所得割（概算10%、調整控除等は省略）
  const juminzei = Math.max(0, (shotoku - (kojo - 50_000)) * 0.10);
  // ふるさと納税限度額の目安：(住民税所得割 × 0.2) ÷ (0.9 - 所得税率×1.021) + 2000
  const limit = juminzei > 0 ? (juminzei * 0.2) / (0.9 - rate * 1.021) + 2000 : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ふるさと納税限度額シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">ふるさと納税限度額シミュレーター</h1>
      <p className="text-muted mb-8">年収・家族構成から、自己負担2,000円で済む寄付上限額の目安を試算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">年収（円）</label><input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div>
            <label className="block text-sm font-medium mb-2">家族構成</label>
            <select value={family} onChange={e => setFamily(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="single">独身または共働き</option>
              <option value="married">夫婦（配偶者控除あり）</option>
              <option value="married_child">夫婦＋子1人（高校生）</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">寄付上限額の目安</div><div className="text-xl font-bold text-primary">¥{Math.floor(limit / 1000) * 1000}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">課税所得（概算）</div><div className="text-xl font-bold">¥{Math.round(taxable).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">所得税率</div><div className="text-xl font-bold">{(rate * 100).toFixed(0)}%</div></div>
        </div>
        <div className="mt-4 text-xs text-muted">※社会保険料は年収の15%として概算。住宅ローン控除・医療費控除等は考慮していません。実際の限度額は税理士等にご確認ください。</div>
      </div>

      <section className="mt-8">
        <Link href="/guide/furusato-tax-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">ふるさと納税ポータルサイト比較ガイドを見る</div>
          <p className="text-xs text-muted">楽天・さとふる・ふるなび等の特徴と還元率を比較するガイドへ →</p>
        </Link>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>年収と家族構成を入力すると、ふるさと納税で実質負担2,000円となる寄付上限額の目安を算出します。寄付上限内であれば控除が受けられます。</p></div></section>

      <AffiliateSection slug="furusato-tax-simulator" category="日常ツール" />
      <RelatedTools currentSlug="furusato-tax-simulator" category="日常ツール" />
    </div>
  );
}
