"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [sys, setSys] = useState("120");
  const [dia, setDia] = useState("80");
  const s = parseInt(sys)||0;
  const d2 = parseInt(dia)||0;
  const getLevel = () => { if(s<120&&d2<80) return {l:"正常血圧",c:"text-green-600"}; if(s<130&&d2<80) return {l:"正常高値",c:"text-yellow-600"}; if(s<140||d2<90) return {l:"高値血圧",c:"text-orange-600"}; if(s<160||d2<100) return {l:"I度高血圧",c:"text-red-500"}; if(s<180||d2<110) return {l:"II度高血圧",c:"text-red-600"}; return {l:"III度高血圧",c:"text-red-700"}; };
  const level = getLevel();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>血圧判定</span></nav>
      <h1 className="text-2xl font-bold mb-2">血圧判定ツール</h1>
      <p className="text-muted mb-8">収縮期・拡張期の血圧値から血圧レベルを判定。WHO基準に基づく分類。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-2">収縮期血圧 (上)</label><input type="number" value={sys} onChange={e=>setSys(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">拡張期血圧 (下)</label><input type="number" value={dia} onChange={e=>setDia(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          </div>
          <div className="bg-background rounded-lg p-6 text-center">
            <div className="text-sm text-muted mb-2">判定結果</div>
            <div className={`text-2xl font-bold ${level.c}`}>{level.l}</div>
            <div className="text-lg mt-2">{sys}/{dia} mmHg</div>
          </div>
          <p className="text-xs text-muted">※日本高血圧学会の基準に基づく分類です。医療上の判断は医師にご相談ください。</p>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>収縮期・拡張期の血圧値から血圧レベルを判定。WHO基準に基づく分類。</p></div></section>
      <RelatedTools currentSlug="blood-pressure" category="日常ツール" />
    </div>
  );
}