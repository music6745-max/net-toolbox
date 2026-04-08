"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [company, setCompany] = useState("20000");
  const [matching, setMatching] = useState("10000");
  const [years, setYears] = useState("30");
  const [yieldRate, setYieldRate] = useState("3");

  const c = parseFloat(company) || 0;
  const mc = parseFloat(matching) || 0;
  const total = c + mc;
  const y = parseInt(years) || 0;
  const r = (parseFloat(yieldRate) || 0) / 100 / 12;
  const n = y * 12;

  const fv = r > 0 ? total * ((Math.pow(1 + r, n) - 1) / r) * (1 + r) : total * n;
  const principal = total * n;
  const profit = fv - principal;

  // マッチング拠出分の節税（所得控除、概算20%として）
  const taxSaveYear = mc * 12 * 0.20;
  const taxSaveTotal = taxSaveYear * y;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>企業型DCシミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">企業型確定拠出年金（DC）シミュレーター</h1>
      <p className="text-muted mb-8">会社拠出額・マッチング拠出額・運用利回り・期間から将来資産と節税額を試算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">会社拠出額（月額・円）</label><input type="number" value={company} onChange={e => setCompany(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">マッチング拠出額（月額・円）</label><input type="number" value={matching} onChange={e => setMatching(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /><div className="text-xs text-muted mt-1">※会社拠出額を超えない範囲で設定してください</div></div>
          <div><label className="block text-sm font-medium mb-2">積立期間（年）</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">想定利回り（年率%）</label><input type="number" value={yieldRate} onChange={e => setYieldRate(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">運用後資産</div><div className="text-xl font-bold text-primary">¥{Math.round(fv).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">運用益</div><div className="text-xl font-bold text-primary">¥{Math.round(profit).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">積立元本</div><div className="text-lg font-bold">¥{Math.round(principal).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">マッチング分の累計節税額</div><div className="text-lg font-bold">¥{Math.round(taxSaveTotal).toLocaleString()}</div></div>
        </div>
        <div className="mt-4 text-xs text-muted">※マッチング拠出は全額所得控除。節税額は税率20%として概算。</div>
      </div>

      <section className="mt-8">
        <Link href="/guide/nisa-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">NISA比較ガイドを見る</div>
          <p className="text-xs text-muted">企業型DCと併用したいNISA口座を比較 →</p>
        </Link>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>会社の拠出額とマッチング拠出額を入力すると、複利運用後の将来資産とマッチング分の累計節税額を試算します。</p></div></section>

      <AffiliateSection slug="company-savings-simulator" category="日常ツール" />
      <RelatedTools currentSlug="company-savings-simulator" category="日常ツール" />
    </div>
  );
}
