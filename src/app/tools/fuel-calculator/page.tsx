"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function FuelCalculatorPage() {
  const [distance, setDistance] = useState("");
  const [fuelUsed, setFuelUsed] = useState("");
  const [gasolinePrice, setGasolinePrice] = useState("170");
  const [result, setResult] = useState<{
    kmPerL: number; lPer100km: number; costPer100km: number;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const d = parseFloat(distance);
    const f = parseFloat(fuelUsed);
    const p = parseFloat(gasolinePrice);
    if (!distance || isNaN(d) || d <= 0) { setError("有効な走行距離を入力してください"); setResult(null); return; }
    if (!fuelUsed || isNaN(f) || f <= 0) { setError("有効な給油量を入力してください"); setResult(null); return; }
    if (isNaN(p) || p <= 0) { setError("有効なガソリン価格を入力してください"); setResult(null); return; }
    setError("");
    const kmPerL = d / f;
    const lPer100km = (f / d) * 100;
    const costPer100km = lPer100km * p;
    setResult({ kmPerL, lPer100km, costPer100km });
  };

  const reset = () => { setDistance(""); setFuelUsed(""); setGasolinePrice("170"); setResult(null); setError(""); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>燃費計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">燃費計算ツール</h1>
      <p className="text-muted mb-8">走行距離と使用燃料を入力して、燃費（km/L）や100kmあたりの燃料消費・コストを計算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">走行距離 (km)</label>
            <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="例: 400" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">給油量 (L)</label>
            <input type="number" value={fuelUsed} onChange={(e) => setFuelUsed(e.target.value)} placeholder="例: 30" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">ガソリン価格 (円/L)</label>
            <input type="number" value={gasolinePrice} onChange={(e) => setGasolinePrice(e.target.value)} placeholder="170" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button onClick={calculate} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
            計算する
          </button>
          <button onClick={reset} className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors">
            リセット
          </button>
        </div>

        {result && (
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-background rounded-xl p-5 text-center col-span-1">
              <p className="text-xs text-muted mb-1">燃費</p>
              <p className="text-3xl font-bold text-primary">{result.kmPerL.toFixed(2)}</p>
              <p className="text-sm text-muted mt-1">km/L</p>
            </div>
            <div className="bg-background rounded-xl p-5 text-center col-span-1">
              <p className="text-xs text-muted mb-1">100kmあたり燃料</p>
              <p className="text-3xl font-bold text-foreground">{result.lPer100km.toFixed(2)}</p>
              <p className="text-sm text-muted mt-1">L/100km</p>
            </div>
            <div className="bg-background rounded-xl p-5 text-center col-span-1">
              <p className="text-xs text-muted mb-1">100kmあたりコスト</p>
              <p className="text-3xl font-bold text-foreground">{Math.round(result.costPer100km).toLocaleString()}</p>
              <p className="text-sm text-muted mt-1">円/100km</p>
            </div>

            {distance && fuelUsed && gasolinePrice && result && (
              <div className="col-span-3 bg-background rounded-lg p-4 text-sm">
                <p className="font-medium mb-2">ガソリン代の試算</p>
                <div className="grid grid-cols-2 gap-2 text-muted">
                  {[100, 200, 300, 500].map((km) => (
                    <p key={km}>{km}km走行: 約 <span className="font-semibold text-foreground">{Math.round((result.lPer100km / 100) * km * parseFloat(gasolinePrice)).toLocaleString()} 円</span></p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">燃費計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 満タン法で計測した走行距離（km）と給油量（L）を入力します。</p>
          <p>2. ガソリン価格（円/L）を入力すると、ガソリン代の試算も表示されます。</p>
          <p>3. 「計算する」をクリックすると燃費（km/L）と各種コストが表示されます。</p>
          <p>満タン法とは：前回満タンにしてから次の満タンまでの走行距離と給油量で計算する方法です。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="fuel-calculator" category="日常ツール" />
    </div>
  );
}
