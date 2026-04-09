"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [total, setTotal] = useState("3500000");
  const [guests, setGuests] = useState("70");
  const [goshugiPerPerson, setGoshugiPerPerson] = useState("32000");
  const [parentHelp, setParentHelp] = useState("0");

  const t = parseFloat(total) || 0;
  const g = parseInt(guests) || 0;
  const gp = parseFloat(goshugiPerPerson) || 0;
  const ph = parseFloat(parentHelp) || 0;

  const goshugiTotal = g * gp;
  const selfPay = t - goshugiTotal - ph;
  const perPerson = selfPay / 2; // 2人で折半

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>結婚式自己負担計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">結婚式 自己負担額計算ツール</h1>
      <p className="text-muted mb-8">総費用・招待人数・ご祝儀・親援助から、新郎新婦の自己負担額を計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">総費用(円)</label><input type="number" value={total} onChange={e => setTotal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">招待人数</label><input type="number" value={guests} onChange={e => setGuests(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">ご祝儀平均(円/人)</label><input type="number" value={goshugiPerPerson} onChange={e => setGoshugiPerPerson(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">親からの援助額(円)</label><input type="number" value={parentHelp} onChange={e => setParentHelp(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">ご祝儀見込</div><div className="text-sm font-bold">¥{Math.round(goshugiTotal).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">親援助</div><div className="text-sm font-bold">¥{Math.round(ph).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">自己負担合計</div><div className="text-lg font-bold text-primary">¥{Math.round(selfPay).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1人あたり</div><div className="text-sm font-bold">¥{Math.round(perPerson).toLocaleString()}</div></div>
        </div>
      </div>
      <AffiliateSection slug="wedding-budget-split" category="日常ツール" />
      <RelatedTools currentSlug="wedding-budget-split" category="日常ツール" />
    </div>
  );
}
