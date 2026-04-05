"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function SleepCalculatorPage() {
  const [mode, setMode] = useState<"bedtime" | "wakeup">("bedtime");
  const [time, setTime] = useState("23:00");
  const [results, setResults] = useState<string[]>([]);

  const calculate = () => {
    const [h, m] = time.split(":").map(Number);
    const base = new Date();
    base.setHours(h, m, 0, 0);
    const cycles = [3, 4, 5, 6];
    const fallAsleepMin = 14;
    const cycleMin = 90;
    const times: string[] = [];
    cycles.forEach(c => {
      const d = new Date(base.getTime());
      if (mode === "bedtime") {
        d.setMinutes(d.getMinutes() + fallAsleepMin + c * cycleMin);
      } else {
        d.setMinutes(d.getMinutes() - fallAsleepMin - c * cycleMin);
      }
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const sleepH = (c * cycleMin) / 60;
      times.push(hh + ":" + mm + " (" + sleepH + "時間)");
    });
    if (mode === "wakeup") times.reverse();
    setResults(times);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>睡眠時間計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">睡眠時間計算ツール</h1>
      <p className="text-muted mb-8">睡眠サイクル（90分周期）に基づいて、最適な起床・就寝時間を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setMode("bedtime")} className={"flex-1 py-2 rounded-lg font-medium transition " + (mode === "bedtime" ? "bg-primary text-white" : "bg-card-bg border border-card-border")}>就寝時間から計算</button>
          <button onClick={() => setMode("wakeup")} className={"flex-1 py-2 rounded-lg font-medium transition " + (mode === "wakeup" ? "bg-primary text-white" : "bg-card-bg border border-card-border")}>起床時間から計算</button>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{mode === "bedtime" ? "就寝時間" : "起床時間"}</label>
          <input type="time" value={time} onChange={e => setTime(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" />
        </div>
        <button onClick={calculate} className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition">計算する</button>
        {results.length > 0 && (
          <div className="mt-4 space-y-2">
            <h3 className="font-medium">{mode === "bedtime" ? "おすすめ起床時間" : "おすすめ就寝時間"}</h3>
            {results.map((r, i) => (
              <div key={i} className={"rounded-lg p-3 border " + (i === 2 ? "border-green-400 bg-green-50 dark:bg-green-900/20" : "border-card-border")}>
                <span className="text-lg font-bold">{r}</span>
                {i === 2 && <span className="ml-2 text-green-600 text-sm font-medium">推奨</span>}
              </div>
            ))}
            <p className="text-xs text-muted mt-2">※入眠までの時間を約14分として計算しています。</p>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>就寝時間または起床時間を入力すると、90分の睡眠サイクルに合わせた最適な時間を提案します。サイクルの切れ目に起きることで、すっきり目覚められます。</p></div></section>
      <AffiliateSection slug="sleep-calculator" category="日常ツール" />
      <RelatedTools currentSlug="sleep-calculator" category="日常ツール" />
    </div>
  );
}
