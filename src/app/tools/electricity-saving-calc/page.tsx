"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [current, setCurrent] = useState("12000");
  const [target, setTarget] = useState("10");

  const c = parseFloat(current) || 0;
  const t = parseFloat(target) || 0;
  const saving = c * t / 100;
  const newBill = c - saving;
  const yearlySaving = saving * 12;
  const fiveYearSaving = yearlySaving * 5;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>電気代節約シミュレーション</span></nav>
      <h1 className="text-2xl font-bold mb-2">電気代節約シミュレーション</h1>
      <p className="text-muted mb-8">現在の電気代と節約率から、月・年・5年で節約できる金額を計算。電力会社の乗り換え検討に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">現在の月の電気代(円)</label><input type="number" value={current} onChange={e => setCurrent(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">節約率(%)</label>
          <select value={target} onChange={e => setTarget(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="5">5%(小さな工夫)</option>
            <option value="10">10%(電力会社乗り換え)</option>
            <option value="15">15%(LED+節電意識)</option>
            <option value="20">20%(太陽光発電導入)</option>
            <option value="30">30%(蓄電池併用)</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月の節約額</div><div className="text-lg font-bold">¥{Math.round(saving).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">節約後の月額</div><div className="text-lg font-bold">¥{Math.round(newBill).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間節約額</div><div className="text-xl font-bold text-primary">¥{Math.round(yearlySaving).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">5年間</div><div className="text-lg font-bold">¥{Math.round(fiveYearSaving).toLocaleString()}</div></div>
        </div>
      </div>
      <AffiliateSection slug="electricity-saving-calc" category="日常ツール" />
      <RelatedTools currentSlug="electricity-saving-calc" category="日常ツール" />
    </div>
  );
}
