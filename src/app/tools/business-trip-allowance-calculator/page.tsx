"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [position, setPosition] = useState("staff");
  const [destination, setDestination] = useState("domestic");
  const [days, setDays] = useState("3");
  const [nights, setNights] = useState("2");

  const allowanceTable: Record<string, Record<string, { day: number; night: number }>> = {
    domestic: {
      staff: { day: 2500, night: 9000 },
      manager: { day: 3500, night: 12000 },
      executive: { day: 5000, night: 15000 },
    },
    overseas: {
      staff: { day: 5000, night: 18000 },
      manager: { day: 7000, night: 25000 },
      executive: { day: 10000, night: 35000 },
    },
  };

  const d = parseInt(days) || 0;
  const n = parseInt(nights) || 0;
  const cfg = allowanceTable[destination][position];
  const dailyAllowance = cfg.day * d;
  const nightAllowance = cfg.night * n;
  const total = dailyAllowance + nightAllowance;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>出張旅費・日当計算</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">出張旅費・日当計算ツール</h1>
      <p className="text-muted mb-8">出張日数・宿泊数・役職・国内外を入力して、日当と宿泊費の概算を自動計算します。旅費規程の整備や経費精算に。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">出張先</label>
            <div className="flex gap-2">
              <button onClick={() => setDestination("domestic")} className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${destination === "domestic" ? "bg-primary text-white" : "bg-background border border-card-border"}`}>国内</button>
              <button onClick={() => setDestination("overseas")} className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${destination === "overseas" ? "bg-primary text-white" : "bg-background border border-card-border"}`}>海外</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">役職</label>
            <select value={position} onChange={e => setPosition(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="staff">一般社員</option>
              <option value="manager">課長・部長クラス</option>
              <option value="executive">役員</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">出張日数（日）</label>
            <input type="number" value={days} onChange={e => setDays(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">宿泊数（泊）</label>
            <input type="number" value={nights} onChange={e => setNights(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">日当合計</div>
            <div className="text-xl font-bold">¥{dailyAllowance.toLocaleString()}</div>
            <div className="text-xs text-muted">¥{cfg.day.toLocaleString()}/日 × {d}日</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">宿泊費合計</div>
            <div className="text-xl font-bold">¥{nightAllowance.toLocaleString()}</div>
            <div className="text-xs text-muted">¥{cfg.night.toLocaleString()}/泊 × {n}泊</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">旅費総額</div>
            <div className="text-xl font-bold text-primary">¥{total.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>役職・出張先（国内/海外）・日数・宿泊数を入力すると、一般的な旅費規程モデルに基づく日当と宿泊費の合計を計算します。</p>
          <p>※ 表示される金額は社内旅費規程の参考値です。各社の実際の旅費規程に応じて調整してください。日当は所得税の課税対象外となるケースが多く、節税面でもメリットがあります。</p>
        </div>
      </section>

      <section className="mt-10 mb-10">
        <Link href="/guide/shared-office-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">シェアオフィス比較ガイド</div>
          <p className="text-xs text-muted">出張先での作業拠点に最適なコワーキングを比較 →</p>
        </Link>
      </section>

      <AffiliateSection slug="business-trip-allowance-calculator" category="日常ツール" />
      <RelatedTools currentSlug="business-trip-allowance-calculator" category="日常ツール" />
    </div>
  );
}
