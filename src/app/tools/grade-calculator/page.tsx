"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [scores, setScores] = useState([{ name: "テスト1", score: "85", max: "100" }]);
  const addScore = () => setScores([...scores, { name: `テスト${scores.length+1}`, score: "", max: "100" }]);
  const updateScore = (i: number, k: string, v: string) => { const s = [...scores]; (s[i] as any)[k] = v; setScores(s); };
  const removeScore = (i: number) => setScores(scores.filter((_,j) => j !== i));
  const vals = scores.map(s => parseFloat(s.score)||0);
  const maxs = scores.map(s => parseFloat(s.max)||100);
  const avg = vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0;
  const totalScore = vals.reduce((a,b)=>a+b,0);
  const totalMax = maxs.reduce((a,b)=>a+b,0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>成績計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">成績計算ツール</h1>
      <p className="text-muted mb-8">テストの点数と配点から平均点・合計点・偏差値を計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-3">
          {scores.map((s,i) => (
            <div key={i} className="flex gap-2 items-center">
              <input value={s.name} onChange={e=>updateScore(i,"name",e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="number" value={s.score} onChange={e=>updateScore(i,"score",e.target.value)} placeholder="点数" className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <span className="text-muted">/</span>
              <input type="number" value={s.max} onChange={e=>updateScore(i,"max",e.target.value)} className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <button onClick={()=>removeScore(i)} className="text-red-500 text-sm px-2">✕</button>
            </div>
          ))}
          <button onClick={addScore} className="text-sm text-primary hover:underline">+ 科目を追加</button>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">平均点</div><div className="text-xl font-bold">{avg.toFixed(1)}</div></div>
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">合計点</div><div className="text-xl font-bold">{totalScore}/{totalMax}</div></div>
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">得点率</div><div className="text-xl font-bold text-primary">{totalMax>0?(totalScore/totalMax*100).toFixed(1):0}%</div></div>
          </div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>テストの点数と配点から平均点・合計点・偏差値を計算。</p></div></section>
      <AffiliateSection slug="grade-calculator" category="日常ツール" />

      <RelatedTools currentSlug="grade-calculator" category="日常ツール" />
    </div>
  );
}