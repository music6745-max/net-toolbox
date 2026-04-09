"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("6");
  const [results, setResults] = useState<number[]>([]);

  const generate = () => {
    const mn = parseInt(min) || 1;
    const mx = parseInt(max) || 100;
    const c = Math.min(parseInt(count) || 1, mx - mn + 1);
    const nums = new Set<number>();
    while (nums.size < c) nums.add(Math.floor(Math.random() * (mx - mn + 1)) + mn);
    setResults([...nums].sort((a, b) => a - b));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ラッキーナンバー生成</span></nav>
      <h1 className="text-2xl font-bold mb-2">ラッキーナンバー・抽選番号生成</h1>
      <p className="text-muted mb-8">範囲と個数を指定して重複なしのランダム番号を生成。宝くじ・抽選・ビンゴに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">最小値</label><input type="number" value={min} onChange={e => setMin(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">最大値</label><input type="number" value={max} onChange={e => setMax(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">個数</label><input type="number" value={count} onChange={e => setCount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <button onClick={generate} className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm">番号を生成</button>
        {results.length > 0 && (
          <div className="bg-primary/10 rounded-lg p-6 text-center">
            <div className="text-xs text-muted mb-2">ラッキーナンバー</div>
            <div className="flex flex-wrap justify-center gap-3">
              {results.map(n => (
                <span key={n} className="bg-primary text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">{n}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <AffiliateSection slug="lucky-number" category="日常ツール" />
      <RelatedTools currentSlug="lucky-number" category="日常ツール" />
    </div>
  );
}
