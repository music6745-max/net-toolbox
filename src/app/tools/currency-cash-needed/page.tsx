"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const COUNTRIES = [
  { key: "usa", name: "アメリカ", code: "USD", rate: 150, dailyJpy: 6000 },
  { key: "korea", name: "韓国", code: "KRW", rate: 0.11, dailyJpy: 4000 },
  { key: "taiwan", name: "台湾", code: "TWD", rate: 4.8, dailyJpy: 4500 },
  { key: "thailand", name: "タイ", code: "THB", rate: 4.3, dailyJpy: 3500 },
  { key: "vietnam", name: "ベトナム", code: "VND", rate: 0.0062, dailyJpy: 3000 },
  { key: "france", name: "フランス", code: "EUR", rate: 162, dailyJpy: 7000 },
  { key: "uk", name: "イギリス", code: "GBP", rate: 190, dailyJpy: 8000 },
  { key: "australia", name: "オーストラリア", code: "AUD", rate: 97, dailyJpy: 6500 },
  { key: "singapore", name: "シンガポール", code: "SGD", rate: 111, dailyJpy: 7500 },
  { key: "hongkong", name: "香港", code: "HKD", rate: 19.2, dailyJpy: 5500 },
];

const STYLES = [
  { key: "saving", label: "節約重視", factor: 0.6 },
  { key: "standard", label: "標準", factor: 1.0 },
  { key: "luxury", label: "贅沢", factor: 1.6 },
];

export default function Page() {
  const [country, setCountry] = useState("usa");
  const [days, setDays] = useState("5");
  const [style, setStyle] = useState("standard");
  const [cardRatio, setCardRatio] = useState("60");

  const c = COUNTRIES.find(x => x.key === country) || COUNTRIES[0];
  const s = STYLES.find(x => x.key === style) || STYLES[1];
  const d = parseInt(days) || 0;
  const cr = Math.max(0, Math.min(100, parseFloat(cardRatio) || 0)) / 100;
  const totalJpy = c.dailyJpy * s.factor * d;
  const cashJpy = totalJpy * (1 - cr);
  const cashLocal = cashJpy / c.rate;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>旅行用現金額計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">旅行用現金額計算ツール</h1>
      <p className="text-muted mb-8">渡航先・滞在日数・旅行スタイルから持参すべき現金額の目安を試算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">渡航先</label>
            <select value={country} onChange={e => setCountry(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-card-bg">
              {COUNTRIES.map(x => <option key={x.key} value={x.key}>{x.name}（{x.code}）</option>)}
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">滞在日数</label><input type="number" value={days} onChange={e => setDays(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">旅行スタイル</label>
            <select value={style} onChange={e => setStyle(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-card-bg">
              {STYLES.map(x => <option key={x.key} value={x.key}>{x.label}</option>)}
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">カード決済比率（%）</label><input type="number" value={cardRatio} onChange={e => setCardRatio(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">現地で必要な総額</div><div className="text-lg font-bold">¥{Math.round(totalJpy).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">必要現金（日本円）</div><div className="text-lg font-bold text-primary">¥{Math.round(cashJpy).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">現地通貨換算</div><div className="text-lg font-bold">{Math.round(cashLocal).toLocaleString()} {c.code}</div></div>
        </div>
      </div>
      <section className="mt-8 bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-lg font-bold mb-3">海外旅行の準備チェック</h2>
        <p className="text-sm text-muted mb-4">現金と同時に、保険や予約サイト選びも忘れずに。</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/travel-insurance-comparison" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90">海外旅行保険比較</Link>
          <Link href="/guide/travel-booking-comparison" className="inline-flex items-center px-4 py-2 border border-card-border rounded-lg text-sm font-medium hover:bg-background">旅行予約サイト比較</Link>
        </div>
      </section>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>渡航先・滞在日数・スタイル・カード決済比率を入力すると、持参すべき現金額を日本円と現地通貨で試算します。為替レートは概算値のため実際の両替レートとは異なります。</p></div></section>
      <AffiliateSection slug="currency-cash-needed" category="日常ツール" />
      <RelatedTools currentSlug="currency-cash-needed" category="日常ツール" />
    </div>
  );
}
