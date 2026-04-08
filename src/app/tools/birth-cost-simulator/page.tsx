"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [facility, setFacility] = useState("hospital");
  const [delivery, setDelivery] = useState("normal");
  const [days, setDays] = useState("6");
  const [room, setRoom] = useState("shared");
  const [region, setRegion] = useState("1.0");

  const facilityBase: Record<string, number> = { hospital: 500000, clinic: 470000, midwife: 440000 };
  const deliveryAdd: Record<string, number> = { normal: 0, csection: 150000, induced: 50000 };
  const roomPerDay: Record<string, number> = { shared: 0, semi: 8000, private: 18000 };
  const dailyBase = 15000;

  const d = parseInt(days) || 0;
  const rRate = parseFloat(region) || 1;
  const base = facilityBase[facility] * rRate;
  const extraDays = Math.max(0, d - 6);
  const roomExtra = roomPerDay[room] * d;
  const daysCost = dailyBase * extraDays;
  const total = Math.round(base + deliveryAdd[delivery] + roomExtra + daysCost);
  const lumpSum = 500000;
  const selfPay = Math.max(0, total - lumpSum);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>出産費用シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">出産費用シミュレーター</h1>
      <p className="text-muted mb-8">分娩方法・入院日数・部屋タイプから出産費用の総額と、出産育児一時金（50万円）を差し引いた自己負担額を試算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">施設</label>
            <select value={facility} onChange={e => setFacility(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="hospital">総合病院</option>
              <option value="clinic">産科クリニック</option>
              <option value="midwife">助産院</option>
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">分娩方法</label>
            <select value={delivery} onChange={e => setDelivery(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="normal">通常分娩</option>
              <option value="induced">促進分娩</option>
              <option value="csection">帝王切開</option>
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">入院日数</label><input type="number" value={days} onChange={e => setDays(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">部屋タイプ</label>
            <select value={room} onChange={e => setRoom(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="shared">大部屋（差額なし）</option>
              <option value="semi">準個室（+8,000円/日）</option>
              <option value="private">個室（+18,000円/日）</option>
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">地域</label>
            <select value={region} onChange={e => setRegion(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="1.2">東京都</option>
              <option value="1.1">大都市圏</option>
              <option value="1.0">全国平均</option>
              <option value="0.9">地方</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">総費用</div><div className="text-xl font-bold">¥{total.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">出産育児一時金</div><div className="text-xl font-bold">-¥{lumpSum.toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">自己負担額</div><div className="text-xl font-bold text-primary">¥{selfPay.toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-4">※ 帝王切開は健康保険適用のため高額療養費制度も利用可能。金額は目安です。</p>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">医療保険・生命保険比較</span>
            <p className="text-xs text-muted mt-1">出産・育児に備える保険選び</p>
          </Link>
        </div>
      </section>

      <AffiliateSection slug="birth-cost-simulator" category="日常ツール" />
      <RelatedTools currentSlug="birth-cost-simulator" category="日常ツール" />
    </div>
  );
}
