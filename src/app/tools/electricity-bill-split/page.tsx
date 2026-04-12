"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [total, setTotal] = useState("15000");
  const [people, setPeople] = useState("3");
  const [rooms, setRooms] = useState([
    { name: "部屋A", sqm: 8 },
    { name: "部屋B", sqm: 6 },
    { name: "部屋C", sqm: 5 },
  ]);

  const t = parseFloat(total) || 0;
  const totalSqm = rooms.reduce((s, r) => s + r.sqm, 0);
  const commonRatio = 0.4;
  const roomRatio = 0.6;
  const commonPerPerson = (t * commonRatio) / rooms.length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>光熱費按分計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">シェアハウス光熱費按分計算</h1>
      <p className="text-muted mb-8">光熱費を部屋の広さで按分計算。シェアハウス・ルームシェアの公平な負担額に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">光熱費合計(円)</label><input type="number" value={total} onChange={e => setTotal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="space-y-2">
          {rooms.map((r, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input type="text" value={r.name} onChange={e => { const n = [...rooms]; n[i] = {...n[i], name: e.target.value}; setRooms(n); }} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm" />
              <input type="number" value={r.sqm} onChange={e => { const n = [...rooms]; n[i] = {...n[i], sqm: parseFloat(e.target.value)||0}; setRooms(n); }} className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm text-right" />
              <span className="text-xs text-muted">畳</span>
            </div>
          ))}
          <button onClick={() => setRooms([...rooms, {name: `部屋${String.fromCharCode(65+rooms.length)}`, sqm: 6}])} className="text-sm text-primary hover:underline">+ 部屋を追加</button>
        </div>
        <div className="mt-4 space-y-2">
          {rooms.map(r => {
            const roomShare = totalSqm > 0 ? (t * roomRatio) * (r.sqm / totalSqm) : 0;
            const total = commonPerPerson + roomShare;
            return (
              <div key={r.name} className="flex justify-between bg-background rounded-lg p-3 text-sm">
                <span>{r.name} ({r.sqm}畳)</span>
                <span className="font-bold">¥{Math.round(total).toLocaleString()}</span>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted">※ 共用部分40% + 部屋面積比60%で按分</p>
      </div>
      <AffiliateSection slug="electricity-bill-split" category="日常ツール" />
      <RelatedTools currentSlug="electricity-bill-split" category="日常ツール" />
    </div>
  );
}
