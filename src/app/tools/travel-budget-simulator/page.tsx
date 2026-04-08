"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const RANK: { key: string; label: string; perNight: number }[] = [
  { key: "budget", label: "エコノミー（ビジホ・ゲストハウス）", perNight: 6000 },
  { key: "standard", label: "スタンダード（シティホテル）", perNight: 12000 },
  { key: "premium", label: "アッパー（4つ星）", perNight: 22000 },
  { key: "luxury", label: "ラグジュアリー（5つ星）", perNight: 40000 },
];

export default function Page() {
  const [people, setPeople] = useState("2");
  const [nights, setNights] = useState("3");
  const [rankKey, setRankKey] = useState("standard");
  const [transport, setTransport] = useState("30000");
  const [foodPerDay, setFoodPerDay] = useState("5000");
  const [activity, setActivity] = useState("10000");

  const p = parseInt(people) || 0;
  const n = parseInt(nights) || 0;
  const rank = RANK.find(r => r.key === rankKey) || RANK[1];
  const roomCount = Math.ceil(p / 2);
  const lodging = rank.perNight * n * roomCount;
  const trans = (parseFloat(transport) || 0) * p;
  const food = (parseFloat(foodPerDay) || 0) * (n + 1) * p;
  const act = (parseFloat(activity) || 0) * p;
  const total = lodging + trans + food + act;
  const perPerson = p > 0 ? total / p : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>旅行予算シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">旅行予算シミュレーター</h1>
      <p className="text-muted mb-8">人数・日数・宿泊ランク・交通費から旅行の総予算を試算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">人数</label><input type="number" value={people} onChange={e => setPeople(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">宿泊日数（泊）</label><input type="number" value={nights} onChange={e => setNights(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div className="sm:col-span-2"><label className="block text-sm font-medium mb-2">宿泊ランク</label>
            <select value={rankKey} onChange={e => setRankKey(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-card-bg">
              {RANK.map(r => <option key={r.key} value={r.key}>{r.label}（¥{r.perNight.toLocaleString()}/泊）</option>)}
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">交通費（1人・往復）</label><input type="number" value={transport} onChange={e => setTransport(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">食費（1人・1日）</label><input type="number" value={foodPerDay} onChange={e => setFoodPerDay(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div className="sm:col-span-2"><label className="block text-sm font-medium mb-2">アクティビティ・観光費（1人合計）</label><input type="number" value={activity} onChange={e => setActivity(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="bg-background rounded-lg p-3 text-center"><div className="text-xs text-muted mb-1">宿泊費</div><div className="text-sm font-bold">¥{lodging.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-3 text-center"><div className="text-xs text-muted mb-1">交通費</div><div className="text-sm font-bold">¥{trans.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-3 text-center"><div className="text-xs text-muted mb-1">食費</div><div className="text-sm font-bold">¥{food.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-3 text-center"><div className="text-xs text-muted mb-1">観光費</div><div className="text-sm font-bold">¥{act.toLocaleString()}</div></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">総予算</div><div className="text-2xl font-bold text-primary">¥{Math.round(total).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1人あたり</div><div className="text-2xl font-bold">¥{Math.round(perPerson).toLocaleString()}</div></div>
        </div>
      </div>
      <section className="mt-8 bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-lg font-bold mb-3">旅行プラン選びの参考に</h2>
        <p className="text-sm text-muted mb-4">国内・海外の旅行予約サイトやお得なプラン比較はこちら。</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/travel-booking-comparison" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90">旅行予約サイト比較</Link>
          <Link href="/guide/travel-app-comparison" className="inline-flex items-center px-4 py-2 border border-card-border rounded-lg text-sm font-medium hover:bg-background">旅行アプリ比較</Link>
        </div>
      </section>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>人数・宿泊日数・宿泊ランクを選び、交通費や食費などを入力すると総予算と1人あたり金額を自動計算します。2名1室を前提に部屋数を算出します。</p></div></section>
      <AffiliateSection slug="travel-budget-simulator" category="日常ツール" />
      <RelatedTools currentSlug="travel-budget-simulator" category="日常ツール" />
    </div>
  );
}
