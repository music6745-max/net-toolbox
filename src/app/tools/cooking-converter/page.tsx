"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const UNITS = [
  { name: "小さじ (5ml)", ml: 5 },
  { name: "大さじ (15ml)", ml: 15 },
  { name: "カップ (200ml)", ml: 200 },
  { name: "ml", ml: 1 },
  { name: "L", ml: 1000 },
  { name: "cc", ml: 1 },
];

export default function Page() {
  const [val, setVal] = useState("1");
  const [unit, setUnit] = useState(1); // 大さじ index

  const v = parseFloat(val) || 0;
  const mlVal = v * UNITS[unit].ml;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>料理計量変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">料理計量変換ツール</h1>
      <p className="text-muted mb-8">大さじ・小さじ・カップ・ml・gの計量単位を相互変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">量</label>
            <input type="number" value={val} onChange={e => setVal(e.target.value)} step="0.1" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">単位</label>
            <select value={unit} onChange={e => setUnit(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              {UNITS.map((u, i) => <option key={i} value={i}>{u.name}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {UNITS.map((u, i) => (
            <div key={i} className={`p-3 rounded-lg text-center ${i === unit ? "bg-primary/10 ring-1 ring-primary/30" : "bg-background"}`}>
              <div className="text-xs text-muted mb-1">{u.name}</div>
              <div className="text-lg font-bold">{(mlVal / u.ml).toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-background rounded-lg">
          <p className="text-sm font-medium mb-2">水の場合の重さ: <span className="font-bold">{mlVal.toFixed(1)}g</span></p>
          <p className="text-xs text-muted">※ 水の場合 1ml ≒ 1g です。他の食材は密度によって異なります。</p>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>量と単位を入力すると、各単位での値が一覧表示されます。</p></div></section>
      <RelatedTools currentSlug="cooking-converter" category="日常ツール" />
    </div>
  );
}