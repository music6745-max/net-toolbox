"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [persons, setPersons] = useState("1");
  const [dining, setDining] = useState("none");
  const [quality, setQuality] = useState("normal");

  const baseMap: Record<string, number> = { "1": 35000, "2": 30000, "3": 28000, "4": 26000, "5": 24000 };
  const diningMap: Record<string, number> = { none: 1.0, weekly: 1.15, frequent: 1.35 };
  const qualityMap: Record<string, number> = { saving: 0.8, normal: 1.0, premium: 1.25 };

  const personCount = persons === "5" ? 5 : parseInt(persons) || 1;
  const baseCost = baseMap[persons] || 35000;
  const monthly = Math.round(baseCost * personCount * diningMap[dining] * qualityMap[quality]);
  const daily = Math.round(monthly / 30);
  const yearly = monthly * 12;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>食費計算ツール</span></nav>
      <h1 className="text-2xl font-bold mb-2">食費計算ツール</h1>
      <p className="text-muted mb-8">世帯人数・外食頻度・こだわり度から毎月の食費目安を計算します。家計の見直しにお役立てください。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">世帯人数</label>
          <select value={persons} onChange={e => setPersons(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="1">1人</option>
            <option value="2">2人</option>
            <option value="3">3人</option>
            <option value="4">4人</option>
            <option value="5">5人以上</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">外食頻度</label>
          <select value={dining} onChange={e => setDining(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="none">ほぼなし</option>
            <option value="weekly">週1〜2回</option>
            <option value="frequent">週3回以上</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">食費こだわり</label>
          <select value={quality} onChange={e => setQuality(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="saving">節約重視</option>
            <option value="normal">普通</option>
            <option value="premium">こだわり派</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月額目安</div><div className="text-lg font-bold text-primary">{monthly.toLocaleString()}円</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1日あたり</div><div className="text-lg font-bold">{daily.toLocaleString()}円</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間合計</div><div className="text-lg font-bold">{yearly.toLocaleString()}円</div></div>
        </div>
        {monthly > 50000 && (
          <div className="bg-primary/10 rounded-lg p-4 mt-2">
            <p className="text-sm font-medium mb-1">節約アドバイス</p>
            <ul className="text-sm text-muted space-y-1">
              <li>・まとめ買い＆作り置きで外食を減らすと効果的です</li>
              <li>・旬の食材を活用すると食材費を抑えられます</li>
              <li>・スーパーのタイムセールやポイント活用もおすすめです</li>
            </ul>
          </div>
        )}
        <p className="text-xs text-muted mt-2">※ 概算値です。地域や生活スタイルにより実際の金額は異なります。</p>
      </div>
      <AffiliateSection slug="grocery-budget-calculator" category="日常ツール" />
      <RelatedTools currentSlug="grocery-budget-calculator" category="日常ツール" />
    </div>
  );
}
