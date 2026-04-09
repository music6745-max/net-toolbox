"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [target, setTarget] = useState("2027-01-01");

  const calc = () => {
    const t = new Date(target);
    if (isNaN(t.getTime())) return null;
    const now = new Date();
    const diff = t.getTime() - now.getTime();
    const abs = Math.abs(diff);
    const days = Math.floor(abs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((abs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    return { days, hours, weeks, months, past: diff < 0 };
  };
  const r = calc();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>日付カウントダウン</span></nav>
      <h1 className="text-2xl font-bold mb-2">日付カウントダウン・カウントアップ</h1>
      <p className="text-muted mb-8">指定した日付まであと何日か、または何日経過したかを計算。誕生日・イベント・記念日の管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">対象日付</label><input type="date" value={target} onChange={e => setTarget(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        {r && (
          <>
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <div className="text-xs text-muted mb-1">{r.past ? "経過" : "残り"}</div>
              <div className="text-3xl font-bold text-primary">{r.days}日 {r.hours}時間</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">週数</div><div className="text-lg font-bold">{r.weeks}週</div></div>
              <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月数</div><div className="text-lg font-bold">{r.months}ヶ月</div></div>
            </div>
          </>
        )}
      </div>
      <AffiliateSection slug="date-countdown" category="日常ツール" />
      <RelatedTools currentSlug="date-countdown" category="日常ツール" />
    </div>
  );
}
