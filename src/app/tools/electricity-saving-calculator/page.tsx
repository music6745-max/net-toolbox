"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

interface Appliance {
  id: string;
  name: string;
  watt: number; // 消費電力 W
  defaultHours: number;
  saveTip: string;
  saveRate: number; // 何割削減できるか
}

const appliances: Appliance[] = [
  { id: "aircon", name: "エアコン", watt: 600, defaultHours: 8, saveTip: "設定温度を1度緩めると約10%節約", saveRate: 0.1 },
  { id: "fridge", name: "冷蔵庫", watt: 150, defaultHours: 24, saveTip: "詰め込みすぎを避け壁から離す", saveRate: 0.05 },
  { id: "tv", name: "テレビ", watt: 150, defaultHours: 5, saveTip: "明るさを下げて主電源オフ", saveRate: 0.15 },
  { id: "light", name: "照明", watt: 100, defaultHours: 6, saveTip: "LEDに交換で消費電力1/5", saveRate: 0.5 },
  { id: "pc", name: "PC", watt: 100, defaultHours: 6, saveTip: "スリープ活用で約30%節約", saveRate: 0.3 },
  { id: "washer", name: "洗濯機", watt: 500, defaultHours: 1, saveTip: "まとめ洗いと乾燥機の使用を控える", saveRate: 0.2 },
  { id: "microwave", name: "電子レンジ", watt: 1000, defaultHours: 0.3, saveTip: "短時間使用が基本", saveRate: 0.1 },
  { id: "waterheater", name: "電気ポット・温水器", watt: 1000, defaultHours: 1, saveTip: "保温機能を切る", saveRate: 0.3 },
];

export default function Page() {
  const [hours, setHours] = useState<Record<string, string>>(
    Object.fromEntries(appliances.map(a => [a.id, String(a.defaultHours)]))
  );
  const [unitPrice, setUnitPrice] = useState("31"); // 円/kWh

  const price = parseFloat(unitPrice) || 0;

  const rows = appliances.map(a => {
    const h = parseFloat(hours[a.id]) || 0;
    const dailyKwh = (a.watt * h) / 1000;
    const monthlyCost = dailyKwh * 30 * price;
    const monthlySaving = monthlyCost * a.saveRate;
    return { ...a, h, monthlyCost, monthlySaving };
  });

  const totalCost = rows.reduce((s, r) => s + r.monthlyCost, 0);
  const totalSaving = rows.reduce((s, r) => s + r.monthlySaving, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>電気代節約シミュレーター</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">電気代節約シミュレーター</h1>
      <p className="text-muted mb-8">家電別の1日の使用時間を入力すると、月々の電気代と節約できる金額を試算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">電気料金単価（円/kWh）</label>
          <input type="number" value={unitPrice} onChange={e => setUnitPrice(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>

        <div className="space-y-3">
          {rows.map(r => (
            <div key={r.id} className="border border-card-border rounded-lg p-3">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-semibold">{r.name}（{r.watt}W）</span>
                <span className="text-xs text-muted">節約Tip: {r.saveTip}</span>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-xs text-muted whitespace-nowrap">1日</label>
                <input type="number" value={hours[r.id]} onChange={e => setHours({ ...hours, [r.id]: e.target.value })} step="0.5" className="flex-1 border border-card-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <span className="text-xs text-muted whitespace-nowrap">時間</span>
                <span className="text-xs text-muted whitespace-nowrap w-32 text-right">月¥{Math.round(r.monthlyCost).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月間電気代</div><div className="text-lg font-bold">¥{Math.round(totalCost).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月間節約可能額</div><div className="text-xl font-bold text-primary">¥{Math.round(totalSaving).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間節約可能額</div><div className="text-xl font-bold text-primary">¥{Math.round(totalSaving * 12).toLocaleString()}</div></div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/guide/electricity-saving-tips" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary transition-colors">
            <div className="font-semibold mb-1">電気代節約の完全ガイド</div>
            <div className="text-xs text-muted">家電別の節約テクニック</div>
          </Link>
          <Link href="/guide/electric-company-comparison" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary transition-colors">
            <div className="font-semibold mb-1">電力会社比較</div>
            <div className="text-xs text-muted">乗り換えで年数万円の節約も</div>
          </Link>
        </div>
      </section>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>※ 標準的な家電消費電力に基づく概算です。機種・契約により変動します。</p></div></section>
      <AffiliateSection slug="electricity-saving-calculator" category="日常ツール" />
      <RelatedTools currentSlug="electricity-saving-calculator" category="日常ツール" />
    </div>
  );
}
