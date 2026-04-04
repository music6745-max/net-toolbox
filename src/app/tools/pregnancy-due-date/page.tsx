"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [lmp, setLmp] = useState("");
  const calc = () => { if(!lmp) return null; const d = new Date(lmp); d.setDate(d.getDate()+280); return d; };
  const due = calc();
  const weeksCalc = () => { if(!lmp) return null; const d = new Date(lmp); const now = new Date(); const diff = Math.floor((now.getTime()-d.getTime())/(1000*60*60*24)); return { weeks: Math.floor(diff/7), days: diff%7, trimester: diff<84?1:diff<196?2:3 }; };
  const weeks = weeksCalc();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>出産予定日計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">出産予定日計算ツール</h1>
      <p className="text-muted mb-8">最終月経日から出産予定日を計算。妊娠週数・月数も表示。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">最終月経開始日</label><input type="date" value={lmp} onChange={e=>setLmp(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          {due && <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">出産予定日</div><div className="text-xl font-bold text-primary">{due.toLocaleDateString("ja-JP")}</div></div>
            {weeks && <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">現在の妊娠週数</div><div className="text-xl font-bold">{weeks.weeks}週{weeks.days}日</div><div className="text-xs text-muted mt-1">第{weeks.trimester}三半期</div></div>}
          </div>}
          <p className="text-xs text-muted">※ネーゲレの概算法（最終月経日+280日）による計算です。正確な予定日は産婦人科にてご確認ください。</p>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>最終月経日から出産予定日を計算。妊娠週数・月数も表示。</p></div></section>
      <AffiliateSection slug="pregnancy-due-date" category="日常ツール" />

      <RelatedTools currentSlug="pregnancy-due-date" category="日常ツール" />
    </div>
  );
}