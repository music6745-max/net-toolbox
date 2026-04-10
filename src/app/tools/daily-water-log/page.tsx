"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [goal, setGoal] = useState(2000);
  const [logs, setLogs] = useState<number[]>([]);
  const total = logs.reduce((s, l) => s + l, 0);
  const pct = goal > 0 ? Math.min(100, Math.round(total / goal * 100)) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>水分摂取記録</span></nav>
      <h1 className="text-2xl font-bold mb-2">水分摂取記録ツール</h1>
      <p className="text-muted mb-8">1日の水分摂取量を記録して目標達成を管理。健康管理・ダイエットに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">1日の目標(ml)</label><input type="number" value={goal} onChange={e => setGoal(parseInt(e.target.value)||0)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="flex flex-wrap gap-2">
          {[100, 200, 250, 350, 500].map(ml => (
            <button key={ml} onClick={() => setLogs([...logs, ml])} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg text-sm font-medium hover:bg-blue-100">+{ml}ml</button>
          ))}
        </div>
        <div className="bg-background rounded-lg p-4">
          <div className="flex justify-between text-sm mb-2"><span>進捗</span><span>{total}ml / {goal}ml ({pct}%)</span></div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4"><div className="bg-primary h-4 rounded-full transition-all" style={{width: `${pct}%`}} /></div>
        </div>
        {logs.length > 0 && (
          <div className="text-xs text-muted">記録: {logs.map((l, i) => `${l}ml`).join(' + ')} = {total}ml
            <button onClick={() => setLogs([])} className="ml-2 text-red-500">リセット</button>
          </div>
        )}
      </div>
      <AffiliateSection slug="daily-water-log" category="日常ツール" />
      <RelatedTools currentSlug="daily-water-log" category="日常ツール" />
    </div>
  );
}
