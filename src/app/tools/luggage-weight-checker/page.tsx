"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const AIRLINES = [
  { key: "ana_intl", name: "ANA 国際線エコノミー", checked: 23, carry: 10, feePerKg: 3000 },
  { key: "jal_intl", name: "JAL 国際線エコノミー", checked: 23, carry: 10, feePerKg: 3000 },
  { key: "ana_dom", name: "ANA 国内線", checked: 20, carry: 10, feePerKg: 1000 },
  { key: "jal_dom", name: "JAL 国内線", checked: 20, carry: 10, feePerKg: 1000 },
  { key: "peach", name: "Peach", checked: 20, carry: 7, feePerKg: 1500 },
  { key: "jetstar", name: "ジェットスター", checked: 20, carry: 7, feePerKg: 1800 },
  { key: "springjp", name: "春秋航空日本", checked: 15, carry: 7, feePerKg: 2000 },
];

export default function Page() {
  const [airline, setAirline] = useState("ana_intl");
  const [checkedW, setCheckedW] = useState("25");
  const [carryW, setCarryW] = useState("8");

  const a = AIRLINES.find(x => x.key === airline) || AIRLINES[0];
  const cw = parseFloat(checkedW) || 0;
  const hw = parseFloat(carryW) || 0;
  const overChecked = Math.max(0, cw - a.checked);
  const overCarry = Math.max(0, hw - a.carry);
  const fee = Math.ceil(overChecked) * a.feePerKg;
  const carryOK = overCarry === 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>荷物重量計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">荷物重量計算ツール</h1>
      <p className="text-muted mb-8">航空会社別の荷物制限を基準に、預け入れ・機内持込の超過料金を予測します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">航空会社・路線</label>
            <select value={airline} onChange={e => setAirline(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-card-bg">
              {AIRLINES.map(x => <option key={x.key} value={x.key}>{x.name}（預入{x.checked}kg/持込{x.carry}kg）</option>)}
            </select>
          </div>
          <div><label className="block text-sm font-medium mb-2">預け入れ荷物の重量（kg）</label><input type="number" value={checkedW} onChange={e => setCheckedW(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">機内持込荷物の重量（kg）</label><input type="number" value={carryW} onChange={e => setCarryW(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">預入の超過</div><div className="text-xl font-bold">{overChecked.toFixed(1)} kg</div></div>
          <div className={`rounded-lg p-4 text-center ${carryOK ? "bg-background" : "bg-red-500/10"}`}><div className="text-xs text-muted mb-1">持込の超過</div><div className={`text-xl font-bold ${carryOK ? "" : "text-red-500"}`}>{overCarry.toFixed(1)} kg</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">追加料金の目安</div><div className="text-xl font-bold text-primary">¥{fee.toLocaleString()}</div></div>
        </div>
        {!carryOK && <p className="mt-4 text-sm text-red-500">※機内持込超過は多くの場合預け入れ扱いとなり、別途料金が発生します。</p>}
      </div>
      <section className="mt-8 bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-lg font-bold mb-3">海外旅行前のチェック</h2>
        <p className="text-sm text-muted mb-4">荷物と一緒に、保険や予約サイトの準備も忘れずに。</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/overseas-travel-guide" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90">海外旅行ガイド</Link>
        </div>
      </section>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>航空会社・路線を選び、預け入れ荷物と機内持込荷物の重量を入力すると、超過分と追加料金の目安を表示します。制限値は2024年時点の標準運賃クラスを参考にしています。</p></div></section>
      <AffiliateSection slug="luggage-weight-checker" category="日常ツール" />
      <RelatedTools currentSlug="luggage-weight-checker" category="日常ツール" />
    </div>
  );
}
