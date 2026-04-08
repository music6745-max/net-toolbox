"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [carType, setCarType] = useState("compact");
  const [mileage, setMileage] = useState("8000");
  const [fuelEfficiency, setFuelEfficiency] = useState("18");
  const [fuelPrice, setFuelPrice] = useState("170");
  const [insurance, setInsurance] = useState("60000");
  const [parking, setParking] = useState("12000");

  const carTax: Record<string, { tax: number; shaken: number; label: string }> = {
    kei: { tax: 10800, shaken: 40000, label: "軽自動車" },
    compact: { tax: 30500, shaken: 55000, label: "コンパクトカー（〜1500cc）" },
    mid: { tax: 43500, shaken: 65000, label: "普通車（〜2000cc）" },
    large: { tax: 57000, shaken: 75000, label: "大型車（〜2500cc）" },
    premium: { tax: 75500, shaken: 90000, label: "高級車（〜3500cc）" },
  };

  const c = carTax[carType];
  const m = parseFloat(mileage) || 0;
  const fe = parseFloat(fuelEfficiency) || 1;
  const fp = parseFloat(fuelPrice) || 0;
  const fuel = Math.round((m / fe) * fp);
  const ins = parseInt(insurance) || 0;
  const park = (parseInt(parking) || 0) * 12;
  const shakenYearly = Math.round(c.shaken / 2); // 車検は2年に1回
  const total = c.tax + shakenYearly + ins + fuel + park;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>自動車年間維持費計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">自動車年間維持費計算</h1>
      <p className="text-muted mb-8">自動車税・任意保険・車検・燃料費・駐車場代から年間維持費の合計を試算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">車種</label>
            <select value={carType} onChange={e => setCarType(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30">
              {Object.entries(carTax).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-2">年間走行距離（km）</label><input type="number" value={mileage} onChange={e => setMileage(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">燃費（km/L）</label><input type="number" value={fuelEfficiency} onChange={e => setFuelEfficiency(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">ガソリン単価（円/L）</label><input type="number" value={fuelPrice} onChange={e => setFuelPrice(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">任意保険（年額・円）</label><input type="number" value={insurance} onChange={e => setInsurance(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div className="sm:col-span-2"><label className="block text-sm font-medium mb-2">月極駐車場代（円/月）</label><input type="number" value={parking} onChange={e => setParking(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間維持費</div><div className="text-2xl font-bold text-primary">¥{total.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月額換算</div><div className="text-2xl font-bold">¥{Math.round(total / 12).toLocaleString()}</div></div>
        </div>
        <div className="mt-6 border-t border-card-border pt-4">
          <h3 className="text-sm font-bold mb-3">内訳</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted">自動車税</span><span>¥{c.tax.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted">車検費用（年換算）</span><span>¥{shakenYearly.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted">任意保険</span><span>¥{ins.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted">ガソリン代</span><span>¥{fuel.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted">駐車場代（年間）</span><span>¥{park.toLocaleString()}</span></div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/car-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車保険比較ガイド</span>
            <p className="text-xs text-muted mt-1">任意保険を安くするコツ</p>
          </Link>
          <Link href="/guide/car-purchase-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車購入比較ガイド</span>
            <p className="text-xs text-muted mt-1">新車・中古車・リースの選び方</p>
          </Link>
        </div>
      </section>

      <AffiliateSection slug="car-expense-yearly-calculator" category="日常ツール" />
      <RelatedTools currentSlug="car-expense-yearly-calculator" category="日常ツール" />
    </div>
  );
}
