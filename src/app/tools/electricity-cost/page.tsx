"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const APPLIANCES = [
  { name: "エアコン", watts: 500 },
  { name: "冷蔵庫", watts: 150 },
  { name: "テレビ", watts: 100 },
  { name: "洗濯機", watts: 400 },
  { name: "電子レンジ", watts: 1000 },
  { name: "ドライヤー", watts: 1200 },
  { name: "照明（LED）", watts: 10 },
  { name: "パソコン", watts: 100 },
  { name: "掃除機", watts: 850 },
  { name: "炊飯器", watts: 700 },
];

export default function ElectricityCostPage() {
  const [watts, setWatts] = useState("");
  const [hours, setHours] = useState("1");
  const [days, setDays] = useState("30");
  const [rate, setRate] = useState("31");

  const w = Number(watts) || 0;
  const h = Number(hours) || 0;
  const d = Number(days) || 0;
  const r = Number(rate) || 0;

  const kwhPerDay = (w * h) / 1000;
  const kwhPerMonth = kwhPerDay * d;
  const costPerDay = Math.round(kwhPerDay * r);
  const costPerMonth = Math.round(kwhPerMonth * r);
  const costPerYear = Math.round(kwhPerMonth * 12 * r);

  const fmt = (n: number) => n.toLocaleString();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>電気料金計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">電気料金計算ツール</h1>
      <p className="text-muted mb-8">家電の消費電力から電気料金を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">家電プリセット</label>
          <div className="flex flex-wrap gap-2">
            {APPLIANCES.map(a => (
              <button key={a.name} onClick={() => setWatts(String(a.watts))} className="text-xs border border-card-border rounded-full px-3 py-1 hover:border-primary transition">{a.name} ({a.watts}W)</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-1">消費電力（W）</label><input type="number" value={watts} onChange={e => setWatts(e.target.value)} placeholder="例: 500" className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
          <div><label className="block text-sm font-medium mb-1">1日の使用時間</label><input type="number" value={hours} onChange={e => setHours(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
          <div><label className="block text-sm font-medium mb-1">使用日数（月）</label><input type="number" value={days} onChange={e => setDays(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
          <div><label className="block text-sm font-medium mb-1">電力単価（円/kWh）</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
        </div>
        {w > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
              <p className="text-xs text-muted">1日あたり</p>
              <p className="text-xl font-bold">{fmt(costPerDay)}円</p>
              <p className="text-xs text-muted">{kwhPerDay.toFixed(2)} kWh</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
              <p className="text-xs text-muted">1ヶ月あたり</p>
              <p className="text-xl font-bold">{fmt(costPerMonth)}円</p>
              <p className="text-xs text-muted">{kwhPerMonth.toFixed(1)} kWh</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 text-center">
              <p className="text-xs text-muted">1年あたり</p>
              <p className="text-xl font-bold">{fmt(costPerYear)}円</p>
            </div>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>家電の消費電力・使用時間・日数を入力すると、電気料金の目安が計算されます。プリセットから家電を選ぶこともできます。</p><p>※電力単価は全国平均の目安です。契約プランにより異なります。</p></div></section>
      <AffiliateSection slug="electricity-cost" category="日常ツール" />
      <RelatedTools currentSlug="electricity-cost" category="日常ツール" />
    </div>
  );
}
