"use client";
import { useState } from "react";
import Link from "next/link";

const PRESETS = [
  { name: "エアコン（冷房）", watts: 860 },
  { name: "エアコン（暖房）", watts: 1000 },
  { name: "冷蔵庫", watts: 40 },
  { name: "洗濯機", watts: 500 },
  { name: "電子レンジ", watts: 1400 },
  { name: "炊飯器", watts: 1450 },
  { name: "テレビ（32型）", watts: 68 },
  { name: "LED照明", watts: 8 },
  { name: "パソコン（ノート）", watts: 45 },
  { name: "パソコン（デスクトップ）", watts: 200 },
];

export default function ElectricityCalculatorPage() {
  const [watts, setWatts] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [daysPerMonth, setDaysPerMonth] = useState("30");
  const [pricePerKwh, setPricePerKwh] = useState("31");
  const [result, setResult] = useState<{
    kwhPerDay: number; kwhPerMonth: number; costPerDay: number; costPerMonth: number; costPerYear: number;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const w = parseFloat(watts);
    const h = parseFloat(hoursPerDay);
    const d = parseFloat(daysPerMonth);
    const p = parseFloat(pricePerKwh);
    if (!watts || isNaN(w) || w <= 0) { setError("有効な消費電力（W）を入力してください"); setResult(null); return; }
    if (!hoursPerDay || isNaN(h) || h <= 0 || h > 24) { setError("1日の使用時間は0〜24時間で入力してください"); setResult(null); return; }
    if (isNaN(d) || d <= 0 || d > 31) { setError("月の使用日数は1〜31日で入力してください"); setResult(null); return; }
    if (isNaN(p) || p <= 0) { setError("有効な電気料金単価を入力してください"); setResult(null); return; }
    setError("");
    const kwhPerDay = (w / 1000) * h;
    const kwhPerMonth = kwhPerDay * d;
    const costPerDay = kwhPerDay * p;
    const costPerMonth = kwhPerMonth * p;
    const costPerYear = costPerMonth * 12;
    setResult({ kwhPerDay, kwhPerMonth, costPerDay, costPerMonth, costPerYear });
  };

  const reset = () => { setWatts(""); setHoursPerDay(""); setDaysPerMonth("30"); setPricePerKwh("31"); setResult(null); setError(""); };

  const applyPreset = (w: number) => { setWatts(String(w)); setResult(null); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>電気料金計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">電気料金計算ツール</h1>
      <p className="text-muted mb-8">電化製品の消費電力・使用時間・電気料金単価から、1日・1ヶ月・年間の電気代を計算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">よく使う家電から選ぶ</p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.name}
                onClick={() => applyPreset(p.watts)}
                className="text-xs border border-card-border rounded-full px-3 py-1 hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 mt-4">
          <div>
            <label className="block text-sm font-medium mb-2">消費電力 (W)</label>
            <input type="number" value={watts} onChange={(e) => setWatts(e.target.value)} placeholder="例: 860" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">1日の使用時間 (時間)</label>
            <input type="number" value={hoursPerDay} onChange={(e) => setHoursPerDay(e.target.value)} placeholder="例: 8" min="0" max="24" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">1ヶ月の使用日数 (日)</label>
            <input type="number" value={daysPerMonth} onChange={(e) => setDaysPerMonth(e.target.value)} placeholder="30" min="1" max="31" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">電気料金単価 (円/kWh)</label>
            <input type="number" value={pricePerKwh} onChange={(e) => setPricePerKwh(e.target.value)} placeholder="31" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
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
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: "1日の消費電力量", value: `${result.kwhPerDay.toFixed(3)} kWh` },
              { label: "月間消費電力量", value: `${result.kwhPerMonth.toFixed(2)} kWh` },
              { label: "1日の電気代", value: `約 ${Math.round(result.costPerDay)} 円` },
              { label: "月間電気代", value: `約 ${Math.round(result.costPerMonth).toLocaleString()} 円`, highlight: true },
              { label: "年間電気代", value: `約 ${Math.round(result.costPerYear).toLocaleString()} 円` },
            ].map((item) => (
              <div key={item.label} className={`rounded-lg p-4 text-center ${item.highlight ? "bg-primary/10 border border-primary/30" : "bg-background"}`}>
                <div className={`text-xl font-bold ${item.highlight ? "text-primary" : "text-foreground"}`}>{item.value}</div>
                <div className="text-xs text-muted mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">電気料金計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. よく使う家電ボタンをクリックすると消費電力が自動入力されます。</p>
          <p>2. 消費電力（W）・1日の使用時間・使用日数・電気料金単価を入力して「計算する」をクリックします。</p>
          <p>3. 1日・月間・年間の電気代と消費電力量が表示されます。</p>
          <p>電気料金の単価はご契約の電力会社の明細を参照してください。全国平均の目安は約31円/kWhです（2024年時点）。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
