"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>用紙サイズ一覧</span></nav>
      <h1 className="text-2xl font-bold mb-2">用紙サイズ一覧ツール</h1>
      <p className="text-muted mb-8">A判・B判・はがき等の用紙サイズをmm/inch/pxで一覧表示。印刷に便利。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-card-border"><th className="py-2 px-3 text-left">規格</th><th className="py-2 px-3 text-left">mm</th><th className="py-2 px-3 text-left">inch</th></tr></thead>
            <tbody>
              {[["A0","841×1189"],["A1","594×841"],["A2","420×594"],["A3","297×420"],["A4","210×297"],["A5","148×210"],["A6","105×148"],["B0","1030×1456"],["B1","728×1030"],["B2","515×728"],["B3","364×515"],["B4","257×364"],["B5","182×257"],["B6","128×182"],["はがき","100×148"],["名刺","55×91"]].map(([n,s],i) => {
                const [w,h] = s.split("×").map(Number);
                return <tr key={i} className="border-b border-card-border hover:bg-background"><td className="py-2 px-3 font-medium">{n}</td><td className="py-2 px-3">{s} mm</td><td className="py-2 px-3">{(w/25.4).toFixed(1)}×{(h/25.4).toFixed(1)}</td></tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>A判・B判・はがき等の用紙サイズをmm/inch/pxで一覧表示。印刷に便利。</p></div></section>
      <RelatedTools currentSlug="paper-size" category="日常ツール" />
    </div>
  );
}