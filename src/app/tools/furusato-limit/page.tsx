"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [income, setIncome] = useState("5000000");
  const [family, setFamily] = useState("single");

  const i = parseFloat(income) || 0;
  // Simplified calculation
  const factors: Record<string, number> = {
    single: 0.0234,
    married: 0.0211,
    married_child: 0.0192,
    married_2child: 0.0183,
  };
  const limit = i * factors[family];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ふるさと納税上限額</span></nav>
      <h1 className="text-2xl font-bold mb-2">ふるさと納税 上限額の目安計算</h1>
      <p className="text-muted mb-8">年収と家族構成から、自己負担2,000円で済むふるさと納税の上限額目安を計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">年収(円)</label><input type="number" value={income} onChange={e => setIncome(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">家族構成</label>
          <select value={family} onChange={e => setFamily(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="single">独身または共働き</option>
            <option value="married">夫婦(配偶者扶養)</option>
            <option value="married_child">夫婦+子1人(高校生)</option>
            <option value="married_2child">夫婦+子2人(高校生＋大学生)</option>
          </select>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center mt-4">
          <div className="text-xs text-muted mb-1">ふるさと納税上限額の目安</div>
          <div className="text-3xl font-bold text-primary">¥{Math.round(limit).toLocaleString()}</div>
        </div>
        <p className="text-xs text-muted mt-2">※ 概算です。住宅ローン控除・医療費控除など他の控除がある場合は変動します。正確な額は税理士にご確認ください。</p>
      </div>
      <AffiliateSection slug="furusato-limit" category="日常ツール" />
      <RelatedTools currentSlug="furusato-limit" category="日常ツール" />
    </div>
  );
}
