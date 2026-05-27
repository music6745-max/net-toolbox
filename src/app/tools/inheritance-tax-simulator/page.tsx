"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

// 相続税の速算（取得金額別）
function inheritanceTax(amount: number): number {
  if (amount <= 0) return 0;
  if (amount <= 10_000_000) return amount * 0.10;
  if (amount <= 30_000_000) return amount * 0.15 - 500_000;
  if (amount <= 50_000_000) return amount * 0.20 - 2_000_000;
  if (amount <= 100_000_000) return amount * 0.30 - 7_000_000;
  if (amount <= 200_000_000) return amount * 0.40 - 17_000_000;
  if (amount <= 300_000_000) return amount * 0.45 - 27_000_000;
  if (amount <= 600_000_000) return amount * 0.50 - 42_000_000;
  return amount * 0.55 - 72_000_000;
}

export default function Page() {
  const [assets, setAssets] = useState("80000000");
  const [heirs, setHeirs] = useState("3");
  const [spouse, setSpouse] = useState(true);

  const a = parseFloat(assets) || 0;
  const h = Math.max(1, parseInt(heirs) || 1);

  const basicDeduction = 30_000_000 + 6_000_000 * h;
  const taxableTotal = Math.max(0, a - basicDeduction);

  // 法定相続分で按分（簡易：配偶者1/2、残りを子で等分。配偶者なしなら全員等分）
  let perTax = 0;
  if (taxableTotal > 0) {
    if (spouse && h >= 2) {
      const spousePart = taxableTotal * 0.5;
      const childCount = h - 1;
      const childPart = (taxableTotal * 0.5) / childCount;
      perTax = inheritanceTax(spousePart) + inheritanceTax(childPart) * childCount;
    } else {
      const part = taxableTotal / h;
      perTax = inheritanceTax(part) * h;
    }
  }

  // 配偶者の税額軽減（法定相続分まで非課税、概算で50%軽減として表示）
  const afterSpouseRelief = spouse ? perTax * 0.5 : perTax;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>相続税シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">相続税シミュレーター</h1>
      <p className="text-muted mb-8">資産総額と法定相続人数から、相続税の基礎控除額と概算税額を試算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">資産総額（円）</label><input type="number" value={assets} onChange={e => setAssets(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">法定相続人の総数</label><input type="number" value={heirs} onChange={e => setHeirs(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div className="flex items-center gap-2"><input type="checkbox" id="spouse" checked={spouse} onChange={e => setSpouse(e.target.checked)} /><label htmlFor="spouse" className="text-sm">配偶者を含む（税額軽減を適用）</label></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">基礎控除額</div><div className="text-lg font-bold">¥{basicDeduction.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">課税遺産総額</div><div className="text-lg font-bold">¥{Math.round(taxableTotal).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">相続税の総額（概算）</div><div className="text-xl font-bold text-primary">¥{Math.round(afterSpouseRelief).toLocaleString()}</div></div>
        </div>
        <div className="mt-4 text-xs text-muted">※配偶者の税額軽減は概算50%として算出。小規模宅地等の特例・各種控除は含まれません。正確な金額は税理士・税務署にご確認ください。</div>
      </div>

      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link href="/guide/legal-consultation-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">弁護士・法律相談サービス比較</div>
          <p className="text-xs text-muted">相続トラブルに強い専門家を探す →</p>
        </Link>
        <Link href="/guide/accounting-software-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">税務ソフト比較ガイドを見る</div>
          <p className="text-xs text-muted">相続税申告に役立つソフトを比較 →</p>
        </Link>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>資産総額と法定相続人数を入力すると、基礎控除（3,000万円＋600万円×人数）を差し引いた課税遺産総額と相続税の概算を算出します。</p></div></section>

      <AffiliateSection slug="inheritance-tax-simulator" category="日常ツール" />
      <RelatedTools currentSlug="inheritance-tax-simulator" category="日常ツール" />
    </div>
  );
}
