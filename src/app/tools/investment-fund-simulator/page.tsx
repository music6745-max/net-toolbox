"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [monthly, setMonthly] = useState("30000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("20");

  const m = parseFloat(monthly) || 0;
  const r = (parseFloat(rate) || 0) / 100 / 12;
  const n = (parseInt(years) || 0) * 12;

  // FV of annuity
  const futureValue = r > 0 ? m * ((Math.pow(1 + r, n) - 1) / r) : m * n;
  const principal = m * n;
  const interest = futureValue - principal;

  // 5年刻みのテーブル
  const yearStep = Math.max(1, Math.floor((parseInt(years) || 1) / 10));
  const rows: { y: number; principal: number; total: number }[] = [];
  for (let y = yearStep; y <= (parseInt(years) || 0); y += yearStep) {
    const nn = y * 12;
    const fv = r > 0 ? m * ((Math.pow(1 + r, nn) - 1) / r) : m * nn;
    rows.push({ y, principal: m * nn, total: fv });
  }

  const maxTotal = Math.max(...rows.map(r => r.total), 1);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>積立投資シミュレーター</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">積立投資シミュレーター</h1>
      <p className="text-muted mb-8">毎月の積立額・想定利回り・積立期間から複利運用後の将来資産を試算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">毎月の積立額（円）</label>
            <input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">想定利回り（年率%）</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">積立期間（年）</label>
            <input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">元本</div><div className="text-lg font-bold">¥{Math.round(principal).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">運用益</div><div className="text-lg font-bold">¥{Math.round(interest).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">将来資産</div><div className="text-xl font-bold text-primary">¥{Math.round(futureValue).toLocaleString()}</div></div>
        </div>

        {rows.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-bold mb-3">資産推移グラフ</h3>
            <div className="space-y-2">
              {rows.map(row => (
                <div key={row.y}>
                  <div className="flex justify-between text-xs text-muted mb-1">
                    <span>{row.y}年後</span>
                    <span>¥{Math.round(row.total).toLocaleString()}</span>
                  </div>
                  <div className="relative h-5 bg-background rounded overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-primary/30" style={{ width: `${(row.principal / maxTotal) * 100}%` }} />
                    <div className="absolute inset-y-0 left-0 bg-primary" style={{ width: `${(row.total / maxTotal) * 100}%`, opacity: 0.6 }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-muted mt-2">薄い色: 元本 / 濃い色: 運用後資産</div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary transition-colors">
            <div className="font-semibold mb-1">NISA口座比較</div>
            <div className="text-xs text-muted">主要証券会社のNISAを徹底比較</div>
          </Link>
          <Link href="/guide/investment-app-comparison" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary transition-colors">
            <div className="font-semibold mb-1">投資アプリ比較</div>
            <div className="text-xs text-muted">初心者向け投資アプリの選び方</div>
          </Link>
        </div>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>※ 月複利での試算です。実際の運用成果は市場により変動します。</p></div></section>
      <AffiliateSection slug="investment-fund-simulator" category="日常ツール" />
      <RelatedTools currentSlug="investment-fund-simulator" category="日常ツール" />
    </div>
  );
}
