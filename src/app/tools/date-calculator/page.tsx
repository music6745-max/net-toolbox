"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function DateCalculatorPage() {
  const today = new Date().toISOString().split("T")[0];
  const [date1, setDate1] = useState(today);
  const [date2, setDate2] = useState(today);
  const [addDays, setAddDays] = useState(0);

  const diffMs = new Date(date2).getTime() - new Date(date1).getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(Math.abs(diffDays) / 7);
  const diffMonths = Math.round(Math.abs(diffDays) / 30.44);
  const diffYears = (Math.abs(diffDays) / 365.25).toFixed(1);

  const addedDate = new Date(new Date(date1).getTime() + addDays * 24 * 60 * 60 * 1000);
  const addedDateStr = addedDate.toLocaleDateString("ja-JP", {
    year: "numeric", month: "long", day: "numeric", weekday: "long",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>日数計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">日数計算ツール</h1>
      <p className="text-muted mb-8">
        2つの日付の間の日数を計算したり、指定した日付から何日後・何日前の日付を求められます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <h2 className="text-base font-semibold mb-4">日付間の日数を計算</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted mb-1">開始日</label>
            <input type="date" value={date1} onChange={(e) => setDate1(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">終了日</label>
            <input type="date" value={date2} onChange={(e) => setDate2(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {[
            { label: "日数", value: `${Math.abs(diffDays)}日` },
            { label: "週数", value: `${diffWeeks}週${Math.abs(diffDays) % 7}日` },
            { label: "約月数", value: `${diffMonths}ヶ月` },
            { label: "約年数", value: `${diffYears}年` },
          ].map((item) => (
            <div key={item.label} className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{item.value}</div>
              <div className="text-xs text-muted mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-base font-semibold mb-4">日付に日数を加算・減算</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted mb-1">基準日</label>
            <input type="date" value={date1} onChange={(e) => setDate1(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">加算日数（負の値で減算）</label>
            <input type="number" value={addDays} onChange={(e) => setAddDays(Number(e.target.value))}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>
        <div className="mt-4 bg-background rounded-lg p-4 text-center">
          <div className="text-lg font-bold text-primary">{addedDateStr}</div>
          <div className="text-xs text-muted mt-1">計算結果</div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">日数計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>2つの日付を選択すると、その間の日数・週数・月数・年数を自動計算します。</p>
          <p>また、基準日から指定した日数を加算・減算して、結果の日付を求めることもできます。</p>
          <p>納期計算や記念日の計算などにご活用ください。</p>
        </div>
      </section>


      <AffiliateSection slug="date-calculator" category="日常ツール" />
      <RelatedTools currentSlug="date-calculator" category="日常ツール" />
    </div>
  );
}
