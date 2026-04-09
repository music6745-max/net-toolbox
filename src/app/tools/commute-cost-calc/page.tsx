"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [oneWay, setOneWay] = useState("500");
  const [daysMonth, setDaysMonth] = useState("22");
  const [passMonth, setPassMonth] = useState("10000");

  const ow = parseFloat(oneWay) || 0;
  const dm = parseInt(daysMonth) || 0;
  const pm = parseFloat(passMonth) || 0;
  const withoutPass = ow * 2 * dm;
  const saving = withoutPass - pm;
  const yearlyWithout = withoutPass * 12;
  const yearlyPass = pm * 12;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>通勤費計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">通勤費・定期券お得度計算</h1>
      <p className="text-muted mb-8">片道運賃と出勤日数から通勤費を計算。定期券と切符購入を比較してお得な方を判定。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">片道運賃(円)</label><input type="number" value={oneWay} onChange={e => setOneWay(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">月の出勤日数</label><input type="number" value={daysMonth} onChange={e => setDaysMonth(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">定期代(月額)</label><input type="number" value={passMonth} onChange={e => setPassMonth(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">切符(月)</div><div className="text-sm font-bold">¥{withoutPass.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">定期(月)</div><div className="text-sm font-bold">¥{pm.toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月の節約額</div><div className="text-lg font-bold text-primary">¥{Math.round(saving).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">{saving > 0 ? '定期がお得' : '切符がお得'}</div><div className="text-sm font-bold">{saving > 0 ? '定期券推奨' : '切符推奨'}</div></div>
        </div>
      </div>
      <AffiliateSection slug="commute-cost-calc" category="日常ツール" />
      <RelatedTools currentSlug="commute-cost-calc" category="日常ツール" />
    </div>
  );
}
