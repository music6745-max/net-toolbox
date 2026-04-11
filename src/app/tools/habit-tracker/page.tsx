"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const days = ["月", "火", "水", "木", "金", "土", "日"];

export default function Page() {
  const [habits, setHabits] = useState([
    { name: "運動30分", checks: [false, false, false, false, false, false, false] },
    { name: "読書20分", checks: [false, false, false, false, false, false, false] },
    { name: "水2L飲む", checks: [false, false, false, false, false, false, false] },
    { name: "早寝(23時)", checks: [false, false, false, false, false, false, false] },
  ]);

  const toggle = (hi: number, di: number) => {
    const next = [...habits];
    next[hi] = { ...next[hi], checks: [...next[hi].checks] };
    next[hi].checks[di] = !next[hi].checks[di];
    setHabits(next);
  };

  const addHabit = () => setHabits([...habits, { name: "", checks: [false, false, false, false, false, false, false] }]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>習慣トラッカー</span></nav>
      <h1 className="text-2xl font-bold mb-2">週間習慣トラッカー</h1>
      <p className="text-muted mb-8">習慣を毎日チェックして継続を可視化。達成率も自動計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left py-2 px-2 min-w-[120px]">習慣</th>
                {days.map(d => <th key={d} className="py-2 px-2 text-center w-10">{d}</th>)}
                <th className="py-2 px-2 text-center">達成率</th>
              </tr>
            </thead>
            <tbody>
              {habits.map((h, hi) => {
                const done = h.checks.filter(Boolean).length;
                const pct = Math.round(done / 7 * 100);
                return (
                  <tr key={hi} className="border-t border-card-border/50">
                    <td className="py-2 px-2"><input type="text" value={h.name} onChange={e => { const n = [...habits]; n[hi] = { ...n[hi], name: e.target.value }; setHabits(n); }} className="w-full bg-transparent text-sm border-none outline-none" /></td>
                    {h.checks.map((c, di) => (
                      <td key={di} className="py-2 px-2 text-center">
                        <button onClick={() => toggle(hi, di)} className={`w-7 h-7 rounded ${c ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700'} text-xs font-bold`}>{c ? '✓' : ''}</button>
                      </td>
                    ))}
                    <td className="py-2 px-2 text-center font-bold" style={{color: pct >= 70 ? '#22c55e' : pct >= 40 ? '#f59e0b' : '#ef4444'}}>{pct}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button onClick={addHabit} className="mt-3 text-sm text-primary hover:underline">+ 習慣を追加</button>
      </div>
      <AffiliateSection slug="habit-tracker" category="日常ツール" />
      <RelatedTools currentSlug="habit-tracker" category="日常ツール" />
    </div>
  );
}
