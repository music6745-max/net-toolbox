"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const levels = [
  { db: 0, name: "無音", example: "真空", color: "#22c55e" },
  { db: 20, name: "ささやき", example: "木の葉の音", color: "#22c55e" },
  { db: 30, name: "静か", example: "深夜の郊外", color: "#22c55e" },
  { db: 40, name: "図書館", example: "静かなオフィス", color: "#84cc16" },
  { db: 50, name: "静かな会話", example: "エアコン室外機", color: "#84cc16" },
  { db: 60, name: "普通の会話", example: "テレビ・掃除機", color: "#eab308" },
  { db: 70, name: "やや騒がしい", example: "幹線道路沿い", color: "#f59e0b" },
  { db: 80, name: "騒がしい", example: "地下鉄車内・パチンコ店", color: "#ef4444" },
  { db: 90, name: "非常にうるさい", example: "カラオケ・工場", color: "#ef4444" },
  { db: 100, name: "聴覚に影響", example: "電車通過時", color: "#dc2626" },
  { db: 110, name: "苦痛", example: "ライブ会場前列", color: "#dc2626" },
  { db: 120, name: "聴覚障害リスク", example: "ジェット機近く", color: "#991b1b" },
];

export default function Page() {
  const [input, setInput] = useState("60");
  const db = parseInt(input) || 0;
  const closest = levels.reduce((prev, curr) => Math.abs(curr.db - db) < Math.abs(prev.db - db) ? curr : prev);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>騒音レベル一覧</span></nav>
      <h1 className="text-2xl font-bold mb-2">騒音レベル(dB)早見表</h1>
      <p className="text-muted mb-8">デシベル(dB)値から騒音レベルと身近な例を確認。防音対策の参考に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">デシベル値(dB)</label><input type="number" value={input} onChange={e => setInput(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="rounded-lg p-4 text-center" style={{backgroundColor: closest.color + '20'}}><div className="text-xs text-muted mb-1">{db}dB ≒</div><div className="text-xl font-bold" style={{color: closest.color}}>{closest.name}</div><div className="text-sm text-muted mt-1">{closest.example}</div></div>
        <div className="mt-4 space-y-1">
          {levels.map(l => (
            <div key={l.db} className={`flex items-center gap-3 rounded-lg p-2 text-xs ${db >= l.db && db < (l.db + 10) ? 'bg-primary/10 font-bold' : ''}`}>
              <span className="w-10 text-right font-mono">{l.db}dB</span>
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: l.color}} />
              <span>{l.name}</span>
              <span className="text-muted ml-auto">{l.example}</span>
            </div>
          ))}
        </div>
      </div>
      <AffiliateSection slug="noise-level-guide" category="日常ツール" />
      <RelatedTools currentSlug="noise-level-guide" category="日常ツール" />
    </div>
  );
}
