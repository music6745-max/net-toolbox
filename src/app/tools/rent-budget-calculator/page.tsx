"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [income, setIncome] = useState("5000000");
  const [ratio, setRatio] = useState("25");

  const annual = parseFloat(income) || 0;
  // 年収から手取りをざっくり80%で試算
  const netAnnual = annual * 0.8;
  const monthlyNet = netAnnual / 12;
  const r = (parseFloat(ratio) || 0) / 100;
  const recommended = monthlyNet * r;
  const safe = monthlyNet * 0.25;
  const upper = monthlyNet * 0.33;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>家賃適正額計算ツール</span></nav>
      <h1 className="text-2xl font-bold mb-2">家賃適正額計算ツール</h1>
      <p className="text-muted mb-8">年収から無理のない家賃の目安を計算します。手取りの25%が安全圏、33%が上限の目安です。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">年収（額面・円）</label><input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">家賃比率（手取りの%）</label><input type="number" value={ratio} onChange={e => setRatio(e.target.value)} step="1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">推奨家賃（入力比率）</div><div className="text-xl font-bold text-primary">¥{Math.round(recommended).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">安全圏（25%）</div><div className="text-xl font-bold">¥{Math.round(safe).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">上限目安（33%）</div><div className="text-xl font-bold">¥{Math.round(upper).toLocaleString()}</div></div>
        </div>
        <div className="mt-4 text-xs text-muted">手取り月収の試算：¥{Math.round(monthlyNet).toLocaleString()}（年収の約80%で計算）</div>
      </div>

      <section className="mt-8">
        <Link href="/guide/housing-loan-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">賃貸から持ち家に切り替えるなら住宅ローン比較</div>
          <p className="text-xs text-muted">主要住宅ローンの金利・総返済額を比較するガイドを見る →</p>
        </Link>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>年収を入力すると手取り月収（額面の約80%）から家賃の目安を計算します。一般的に手取りの25%以内が安全圏、33%が上限とされています。</p></div></section>

      <AffiliateSection slug="rent-budget-calculator" category="日常ツール" />
      <RelatedTools currentSlug="rent-budget-calculator" category="日常ツール" />
    </div>
  );
}
