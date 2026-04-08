"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

// 地域別の都市ガス相場（基本料金 + 単価円/m³）。実際の料金は会社・契約により異なります。
const regions: Record<string, { label: string; base: number; unit: number }> = {
  tokyo: { label: "東京ガスエリア（関東）", base: 759, unit: 145 },
  osaka: { label: "大阪ガスエリア（関西）", base: 745, unit: 165 },
  toho: { label: "東邦ガスエリア（中部）", base: 770, unit: 175 },
  saibu: { label: "西部ガスエリア（九州）", base: 1000, unit: 195 },
  hokkaido: { label: "北海道ガスエリア", base: 1180, unit: 220 },
  other: { label: "その他地域（全国平均）", base: 850, unit: 180 },
};

export default function Page() {
  const [region, setRegion] = useState("tokyo");
  const [usage, setUsage] = useState("30");
  const [newPlanDiscount, setNewPlanDiscount] = useState("5");

  const r = regions[region];
  const u = Math.max(0, parseFloat(usage) || 0);
  const monthly = Math.round(r.base + r.unit * u);
  const yearly = monthly * 12;
  const disc = Math.max(0, Math.min(30, parseFloat(newPlanDiscount) || 0));
  const newMonthly = Math.round(monthly * (1 - disc / 100));
  const yearlySavings = (monthly - newMonthly) * 12;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>都市ガス料金シミュレーター</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">都市ガス料金シミュレーター</h1>
      <p className="text-muted mb-8">地域と月間使用量から都市ガスの月額・年間料金を試算します。新ガス会社への切替時の節約額も計算できます。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">地域</label>
            <select value={region} onChange={e => setRegion(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              {Object.entries(regions).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">月間使用量（m³）</label>
            <input type="number" min="0" value={usage} onChange={e => setUsage(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <p className="text-xs text-muted mt-1">目安: 一人暮らし10m³／二人20m³／4人家族30〜40m³</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">新ガス会社の割引率（%）</label>
            <input type="number" min="0" max="30" value={newPlanDiscount} onChange={e => setNewPlanDiscount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">現在の月額</div>
            <div className="text-xl font-bold">¥{monthly.toLocaleString()}</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">切替後月額</div>
            <div className="text-xl font-bold text-primary">¥{newMonthly.toLocaleString()}</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">年間節約額</div>
            <div className="text-xl font-bold">¥{yearlySavings.toLocaleString()}</div>
          </div>
        </div>
        <div className="mt-4 text-xs text-muted">
          現在の年間ガス代: ¥{yearly.toLocaleString()}（基本料金 ¥{r.base.toLocaleString()} + 単価 ¥{r.unit}/m³ × {u}m³）
        </div>
      </div>

      <section className="mt-8">
        <Link href="/guide/gas-company-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">おすすめガス会社5選を比較</div>
          <p className="text-xs text-muted">レモンガス・東京ガス・大阪ガス・東邦ガス・ニチガスの料金とキャンペーンを徹底比較 →</p>
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>地域・月間使用量・想定割引率を入力すると、現在のガス代と切替後の月額・年間節約額を試算します。料金は地域の平均相場に基づく概算値です。</p>
        </div>
      </section>

      <AffiliateSection slug="gas-fee-simulator" category="日常ツール" />
      <RelatedTools currentSlug="gas-fee-simulator" category="日常ツール" />
    </div>
  );
}
