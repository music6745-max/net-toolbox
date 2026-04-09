"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [subs, setSubs] = useState([
    { name: "Netflix", cost: 1490 },
    { name: "Spotify", cost: 980 },
    { name: "Amazon Prime", cost: 600 },
    { name: "YouTube Premium", cost: 1280 },
    { name: "Apple iCloud", cost: 400 },
  ]);

  const total = subs.reduce((s, sub) => s + sub.cost, 0);
  const yearly = total * 12;

  const updateSub = (i: number, field: "name" | "cost", value: string) => {
    const next = [...subs];
    if (field === "cost") next[i] = { ...next[i], cost: parseInt(value) || 0 };
    else next[i] = { ...next[i], name: value };
    setSubs(next);
  };
  const addSub = () => setSubs([...subs, { name: "", cost: 0 }]);
  const removeSub = (i: number) => setSubs(subs.filter((_, idx) => idx !== i));

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>サブスク合計計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">サブスク月額合計計算ツール</h1>
      <p className="text-muted mb-8">契約中のサブスクリプションサービスの月額・年間合計を可視化。不要なサブスクの見直しに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3">
        {subs.map((sub, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input type="text" value={sub.name} onChange={e => updateSub(i, "name", e.target.value)} placeholder="サービス名" className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm" />
            <input type="number" value={sub.cost} onChange={e => updateSub(i, "cost", e.target.value)} className="w-24 border border-card-border rounded-lg px-3 py-2 text-sm text-right" />
            <span className="text-xs text-muted">円/月</span>
            <button onClick={() => removeSub(i)} className="text-red-500 text-xs px-2">×</button>
          </div>
        ))}
        <button onClick={addSub} className="text-sm text-primary hover:underline">+ サービスを追加</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-card-border">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月額合計</div><div className="text-2xl font-bold text-primary">¥{total.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間合計</div><div className="text-xl font-bold">¥{yearly.toLocaleString()}</div></div>
        </div>
      </div>
      <AffiliateSection slug="subscription-cost-calc" category="日常ツール" />
      <RelatedTools currentSlug="subscription-cost-calc" category="日常ツール" />
    </div>
  );
}
