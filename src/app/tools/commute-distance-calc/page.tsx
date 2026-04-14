"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [distance, setDistance] = useState("15");
  const [method, setMethod] = useState("train");
  const [days, setDays] = useState("22");

  const d = parseFloat(distance) || 0;
  const dayCount = parseInt(days) || 0;

  let monthlyCost = 0;
  let oneWayMinutes = 0;

  switch (method) {
    case "train":
      monthlyCost = Math.round(d * 20 * 2 * dayCount);
      oneWayMinutes = Math.round(d * 3);
      break;
    case "gas":
      monthlyCost = Math.round((d * 2 * dayCount) / 12 * 170);
      oneWayMinutes = Math.round(d * 2.5);
      break;
    case "ev":
      monthlyCost = Math.round((d * 2 * dayCount) * 3 / 1000 * 30);
      oneWayMinutes = Math.round(d * 2.5);
      break;
    case "bicycle":
      monthlyCost = 0;
      oneWayMinutes = Math.round(d * 4);
      break;
  }

  const yearlyCost = monthlyCost * 12;
  const yearlyCommuteHours = Math.round(oneWayMinutes * 2 * dayCount * 12 / 60);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>通勤距離・交通費計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">通勤距離・交通費計算</h1>
      <p className="text-muted mb-8">片道距離と通勤手段から月額・年間の交通費と通勤時間を概算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">片道距離（km）</label>
            <input type="number" value={distance} onChange={e => setDistance(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">出勤日数／月</label>
            <input type="number" value={days} onChange={e => setDays(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">通勤手段</label>
          <select value={method} onChange={e => setMethod(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="train">電車</option>
            <option value="gas">車（ガソリン）</option>
            <option value="ev">車（EV）</option>
            <option value="bicycle">自転車</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月額交通費</div><div className="text-lg font-bold text-primary">{monthlyCost.toLocaleString()}円</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間交通費</div><div className="text-lg font-bold">{yearlyCost.toLocaleString()}円</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">片道通勤時間</div><div className="text-lg font-bold">約{oneWayMinutes}分</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間通勤時間</div><div className="text-lg font-bold">約{yearlyCommuteHours}時間</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ 概算値です。実際の運賃・燃費・走行条件により金額は異なります。</p>
      </div>
      <AffiliateSection slug="commute-distance-calc" category="日常ツール" />
      <RelatedTools currentSlug="commute-distance-calc" category="日常ツール" />
    </div>
  );
}
