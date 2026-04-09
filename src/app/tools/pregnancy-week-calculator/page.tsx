"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [lastPeriod, setLastPeriod] = useState("2026-01-01");

  const calc = () => {
    const d = new Date(lastPeriod);
    if (isNaN(d.getTime())) return null;
    const due = new Date(d);
    due.setDate(due.getDate() + 280);
    const today = new Date();
    const diff = Math.floor((today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diff / 7);
    const days = diff % 7;
    return { due, weeks, days, totalDays: diff };
  };

  const result = calc();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>妊娠週数計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">妊娠週数・出産予定日計算</h1>
      <p className="text-muted mb-8">最終月経開始日から現在の妊娠週数と出産予定日を計算。※医療助言ではありません。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">最終月経開始日</label><input type="date" value={lastPeriod} onChange={e => setLastPeriod(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        {result && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">現在の週数</div><div className="text-xl font-bold text-primary">{result.weeks}週{result.days}日</div></div>
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">出産予定日</div><div className="text-lg font-bold">{result.due.toLocaleDateString('ja-JP')}</div></div>
          </div>
        )}
        <p className="text-xs text-muted mt-2">※ 参考値です。正確な診断は医師にご相談ください。</p>
      </div>
      <AffiliateSection slug="pregnancy-week-calculator" category="日常ツール" />
      <RelatedTools currentSlug="pregnancy-week-calculator" category="日常ツール" />
    </div>
  );
}
