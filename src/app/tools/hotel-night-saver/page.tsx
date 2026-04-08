"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [rate, setRate] = useState("15000");
  const [nights, setNights] = useState("3");
  const [stayDiscount, setStayDiscount] = useState("10");
  const [earlyDiscount, setEarlyDiscount] = useState("15");
  const [weekdayDiscount, setWeekdayDiscount] = useState("8");
  const [weekdayRatio, setWeekdayRatio] = useState("2");

  const r = parseFloat(rate) || 0;
  const n = parseInt(nights) || 0;
  const sd = parseFloat(stayDiscount) / 100 || 0;
  const ed = parseFloat(earlyDiscount) / 100 || 0;
  const wd = parseFloat(weekdayDiscount) / 100 || 0;
  const wNights = Math.min(parseInt(weekdayRatio) || 0, n);
  const holidayNights = n - wNights;

  const original = r * n;
  const stayRate = n >= 2 ? sd : 0;
  const perNightBase = r * (1 - ed) * (1 - stayRate);
  const weekdayCost = wNights * perNightBase * (1 - wd);
  const holidayCost = holidayNights * perNightBase;
  const discounted = weekdayCost + holidayCost;
  const saved = original - discounted;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ホテル料金節約計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">ホテル料金節約計算ツール</h1>
      <p className="text-muted mb-8">連泊割引・早期予約割引・平日割引を適用した宿泊料金を一発計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">1泊の定価（円）</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">宿泊日数（泊）</label><input type="number" value={nights} onChange={e => setNights(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">連泊割引（%・2泊以上で適用）</label><input type="number" value={stayDiscount} onChange={e => setStayDiscount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">早期予約割引（%）</label><input type="number" value={earlyDiscount} onChange={e => setEarlyDiscount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">平日割引（%）</label><input type="number" value={weekdayDiscount} onChange={e => setWeekdayDiscount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">うち平日の泊数</label><input type="number" value={weekdayRatio} onChange={e => setWeekdayRatio(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">定価合計</div><div className="text-xl font-bold">¥{Math.round(original).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">割引後合計</div><div className="text-xl font-bold text-primary">¥{Math.round(discounted).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">節約額</div><div className="text-xl font-bold">¥{Math.round(saved).toLocaleString()}</div></div>
        </div>
      </div>
      <section className="mt-8 bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-lg font-bold mb-3">宿泊先選びの参考に</h2>
        <p className="text-sm text-muted mb-4">旅館・ホテルのお得な選び方はこちらの比較記事もチェック。</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/ryokan-comparison" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90">旅館比較ガイド</Link>
        </div>
      </section>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>1泊の定価・泊数・各種割引率を入力すると、早期割引 → 連泊割引 → 平日割引の順で計算した割引後合計と節約額を表示します。</p></div></section>
      <AffiliateSection slug="hotel-night-saver" category="日常ツール" />
      <RelatedTools currentSlug="hotel-night-saver" category="日常ツール" />
    </div>
  );
}
