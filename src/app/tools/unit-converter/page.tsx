"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const categories = {
  "長さ": { units: ["mm", "cm", "m", "km", "in", "ft", "yd", "mi"], base: [1, 10, 1000, 1e6, 25.4, 304.8, 914.4, 1.609e6] },
  "重さ": { units: ["mg", "g", "kg", "t", "oz", "lb"], base: [1, 1000, 1e6, 1e9, 28349.5, 453592] },
  "温度": { units: ["°C", "°F", "K"], base: [] as number[] },
};

function convert(value: number, fromIdx: number, toIdx: number, cat: string) {
  if (cat === "温度") {
    let celsius = value;
    if (fromIdx === 1) celsius = (value - 32) * 5 / 9;
    if (fromIdx === 2) celsius = value - 273.15;
    if (toIdx === 0) return celsius;
    if (toIdx === 1) return celsius * 9 / 5 + 32;
    return celsius + 273.15;
  }
  const c = categories[cat as keyof typeof categories];
  return (value * c.base[fromIdx]) / c.base[toIdx];
}

export default function UnitConverterPage() {
  const [cat, setCat] = useState("長さ");
  const [value, setValue] = useState(1);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(2);
  const c = categories[cat as keyof typeof categories];
  const result = convert(value, from, to, cat);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>単位変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">単位変換ツール</h1>
      <p className="text-muted mb-8">長さ・重さ・温度の単位を相互変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex gap-2 mb-6">
          {Object.keys(categories).map((k) => (
            <button key={k} onClick={() => { setCat(k); setFrom(0); setTo(2); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${cat === k ? "bg-primary text-white" : "bg-background text-muted hover:text-foreground"}`}>{k}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm text-muted mb-1">値</label>
            <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">変換元</label>
            <select value={from} onChange={(e) => setFrom(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              {c.units.map((u, i) => <option key={u} value={i}>{u}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">変換先</label>
            <select value={to} onChange={(e) => setTo(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              {c.units.map((u, i) => <option key={u} value={i}>{u}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-6 bg-background rounded-lg p-6 text-center">
          <div className="text-sm text-muted">{value} {c.units[from]} =</div>
          <div className="text-3xl font-bold text-primary mt-1">{Number.isFinite(result) ? parseFloat(result.toPrecision(10)) : "---"} {c.units[to]}</div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">単位変換ツールの使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>カテゴリ（長さ・重さ・温度）を選び、値と変換元・変換先の単位を指定するだけで自動変換されます。</p><p>日常の計算や、海外の単位換算にご活用ください。</p></div></section>


      <RelatedTools currentSlug="unit-converter" category="日常ツール" />
    </div>
  );
}
