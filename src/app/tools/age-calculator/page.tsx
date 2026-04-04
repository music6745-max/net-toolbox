"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function calcAge(birth: string) {
  const b = new Date(birth);
  const now = new Date();
  let age = now.getFullYear() - b.getFullYear();
  const m = now.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
  const totalDays = Math.floor((now.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
  const totalMonths = age * 12 + (m < 0 ? 12 + m : m);
  const nextBday = new Date(now.getFullYear(), b.getMonth(), b.getDate());
  if (nextBday <= now) nextBday.setFullYear(nextBday.getFullYear() + 1);
  const daysUntilBday = Math.ceil((nextBday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return { age, totalDays, totalMonths, daysUntilBday };
}

export default function AgeCalculatorPage() {
  const [birth, setBirth] = useState("2000-01-01");
  const info = calcAge(birth);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>年齢計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">年齢計算ツール</h1>
      <p className="text-muted mb-8">生年月日から現在の年齢、生まれてからの日数、次の誕生日までの日数を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">生年月日</label>
        <input type="date" value={birth} onChange={(e) => setBirth(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {[
            { label: "年齢", value: `${info.age}歳` },
            { label: "生まれてからの日数", value: `${info.totalDays.toLocaleString()}日` },
            { label: "生まれてからの月数", value: `${info.totalMonths}ヶ月` },
            { label: "次の誕生日まで", value: `${info.daysUntilBday}日` },
          ].map((s) => (
            <div key={s.label} className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">年齢計算ツールの使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>生年月日を入力すると、現在の年齢と関連情報が自動で表示されます。</p><p>書類記入時の年齢確認や、記念日の計算にご活用ください。</p></div></section>


      <AffiliateSection slug="age-calculator" category="日常ツール" />
      <RelatedTools currentSlug="age-calculator" category="日常ツール" />
    </div>
  );
}
