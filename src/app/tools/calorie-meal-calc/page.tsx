"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [items, setItems] = useState([
    { name: "ご飯(1杯)", cal: 252 },
    { name: "味噌汁", cal: 40 },
    { name: "焼き魚", cal: 200 },
    { name: "サラダ", cal: 30 },
  ]);
  const total = items.reduce((s, i) => s + i.cal, 0);
  const update = (idx: number, f: "name"|"cal", v: string) => {
    const n = [...items]; if(f==="cal") n[idx]={...n[idx],cal:parseInt(v)||0}; else n[idx]={...n[idx],name:v}; setItems(n);
  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>食事カロリー計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">食事カロリー合計計算ツール</h1>
      <p className="text-muted mb-8">食べたものとカロリーを入力して1食分の合計カロリーを計算。ダイエット管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3">
        {items.map((it,i) => (
          <div key={i} className="flex gap-2 items-center">
            <input type="text" value={it.name} onChange={e=>update(i,"name",e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm" />
            <input type="number" value={it.cal} onChange={e=>update(i,"cal",e.target.value)} className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm text-right" />
            <span className="text-xs text-muted">kcal</span>
            <button onClick={()=>setItems(items.filter((_,idx)=>idx!==i))} className="text-red-500 text-xs px-2">×</button>
          </div>
        ))}
        <button onClick={()=>setItems([...items,{name:"",cal:0}])} className="text-sm text-primary hover:underline">+ 食品を追加</button>
        <div className="bg-primary/10 rounded-lg p-4 text-center mt-4"><div className="text-xs text-muted mb-1">合計カロリー</div><div className="text-2xl font-bold text-primary">{total} kcal</div></div>
      </div>
      <AffiliateSection slug="calorie-meal-calc" category="日常ツール" />
      <RelatedTools currentSlug="calorie-meal-calc" category="日常ツール" />
    </div>
  );
}
