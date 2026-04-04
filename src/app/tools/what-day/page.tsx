"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];
const WEEKDAY_COLORS = ["text-red-500", "text-foreground", "text-foreground", "text-foreground", "text-foreground", "text-foreground", "text-blue-500"];

const PRESETS = [
  { label: "7日後", days: 7 },
  { label: "14日後", days: 14 },
  { label: "30日後", days: 30 },
  { label: "100日後", days: 100 },
  { label: "1年後 (365日)", days: 365 },
  { label: "7日前", days: -7 },
  { label: "30日前", days: -30 },
  { label: "100日前", days: -100 },
];

function addDays(base: Date, days: number): Date {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDate(d: Date): string {
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日（${WEEKDAYS[d.getDay()]}）`;
}

function formatDateISO(d: Date): string {
  return d.toISOString().split("T")[0];
}

export default function WhatDayPage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [baseDate, setBaseDate] = useState(formatDateISO(today));
  const [days, setDays] = useState(100);

  const base = new Date(baseDate + "T00:00:00");
  const result = addDays(base, days);
  const label = days >= 0 ? `${days}日後` : `${Math.abs(days)}日前`;

  // Generate a small calendar showing surrounding dates
  const surroundDays = Array.from({ length: 7 }, (_, i) => addDays(result, i - 3));

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>○日後計算</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">○日後計算ツール</h1>
      <p className="text-muted mb-8">指定した日付から何日後（または何日前）の日付を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">基準日</label>
            <input
              type="date"
              value={baseDate}
              onChange={(e) => setBaseDate(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              onClick={() => setBaseDate(formatDateISO(today))}
              className="mt-2 text-xs text-primary hover:underline"
            >
              今日に戻す
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">日数（マイナスで過去）</label>
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(+e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">プリセット</label>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => setDays(p.days)}
                className={`text-xs border px-3 py-1.5 rounded-lg transition-colors ${days === p.days ? "bg-primary text-white border-primary" : "border-card-border hover:bg-background"}`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-background rounded-xl p-6 text-center">
          <p className="text-sm text-muted mb-1">{baseDate} の {label}</p>
          <p className={`text-3xl font-bold ${WEEKDAY_COLORS[result.getDay()]}`}>
            {formatDate(result)}
          </p>
          <div className="mt-4 flex justify-center gap-1.5 flex-wrap">
            {surroundDays.map((d, i) => {
              const isResult = d.toDateString() === result.toDateString();
              return (
                <div
                  key={i}
                  className={`w-10 text-center py-1.5 rounded-lg text-xs ${isResult ? "bg-primary text-white font-bold" : "bg-card-bg border border-card-border"}`}
                >
                  <div className={isResult ? "" : WEEKDAY_COLORS[d.getDay()]}>{WEEKDAYS[d.getDay()]}</div>
                  <div className="font-medium">{d.getDate()}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[7, 30, 100, 365].map((n) => {
            const d = addDays(base, n);
            return (
              <div key={n} className="bg-background rounded-lg p-3 text-center">
                <div className="text-xs text-muted mb-1">{n}日後</div>
                <div className="text-sm font-semibold">{d.getMonth() + 1}/{d.getDate()}</div>
                <div className={`text-xs ${WEEKDAY_COLORS[d.getDay()]}`}>{WEEKDAYS[d.getDay()]}曜日</div>
              </div>
            );
          })}
        </div>
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>基準日（デフォルトは今日）と日数を入力すると、その日数後の日付と曜日が表示されます。</p>
          <p>日数にマイナスを入力すると過去の日付を計算できます。</p>
          <p>プリセットから「100日後」「30日前」などをすぐに選択できます。</p>
        </div>
      </section>


      <AffiliateSection slug="what-day" category="日常ツール" />
      <RelatedTools currentSlug="what-day" category="日常ツール" />
    </div>
  );
}
