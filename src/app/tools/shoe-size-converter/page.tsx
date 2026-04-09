"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [jp, setJp] = useState("26");
  const [gender, setGender] = useState("male");

  const cm = parseFloat(jp) || 0;
  // Approximate conversion
  const us = gender === "male" ? cm - 18 : cm - 16.5;
  const eu = gender === "male" ? cm + 6 : cm + 6;
  const uk = gender === "male" ? cm - 18.5 : cm - 17;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>靴サイズ変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">靴サイズ変換ツール（JP/US/EU/UK）</h1>
      <p className="text-muted mb-8">日本サイズから米国・欧州・英国の靴サイズに即変換。海外通販・旅行のお買い物に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">性別</label>
          <select value={gender} onChange={e => setGender(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="male">男性</option>
            <option value="female">女性</option>
          </select>
        </div>
        <div><label className="block text-sm font-medium mb-2">日本サイズ(cm)</label><input type="number" step="0.5" value={jp} onChange={e => setJp(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">US</div><div className="text-xl font-bold">{us.toFixed(1)}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">EU</div><div className="text-xl font-bold">{eu.toFixed(1)}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">UK</div><div className="text-xl font-bold">{uk.toFixed(1)}</div></div>
        </div>
      </div>
      <AffiliateSection slug="shoe-size-converter" category="日常ツール" />
      <RelatedTools currentSlug="shoe-size-converter" category="日常ツール" />
    </div>
  );
}
