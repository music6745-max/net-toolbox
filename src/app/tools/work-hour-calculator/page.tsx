"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type WageMode = "hourly" | "monthly";

function timeToMinutes(t: string): number | null {
  if (!t || !/^\d{1,2}:\d{2}$/.test(t)) return null;
  const [h, m] = t.split(":").map(Number);
  if (h < 0 || h > 47 || m < 0 || m > 59) return null;
  return h * 60 + m;
}

export default function Page() {
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("20:30");
  const [breakMin, setBreakMin] = useState("60");
  const [wageMode, setWageMode] = useState<WageMode>("hourly");
  const [hourly, setHourly] = useState("1200");
  const [monthly, setMonthly] = useState("250000");
  const [monthlyHours, setMonthlyHours] = useState("160");
  const [isHoliday, setIsHoliday] = useState(false);
  const [error, setError] = useState("");

  const sMin = timeToMinutes(start);
  let eMin = timeToMinutes(end);
  const bMin = Number(breakMin) || 0;

  let calc: null | {
    totalHours: number;
    regularHours: number;
    overtimeHours: number;
    nightHours: number;
    base: number;
    overtimePay: number;
    nightPay: number;
    holidayPay: number;
    total: number;
    baseHourly: number;
  } = null;

  if (sMin !== null && eMin !== null) {
    if (eMin <= sMin) eMin += 24 * 60; // overnight
    const workMin = Math.max(0, eMin - sMin - bMin);
    const totalH = workMin / 60;
    const regularH = Math.min(8, totalH);
    const overtimeH = Math.max(0, totalH - 8);
    // Night work: 22:00–05:00
    const nightStart = 22 * 60;
    const nightEnd = 29 * 60; // 05:00 next day
    const nMin = Math.max(0, Math.min(eMin, nightEnd) - Math.max(sMin, nightStart));
    const nightH = nMin / 60;

    const baseHourly =
      wageMode === "hourly"
        ? Number(hourly) || 0
        : (Number(monthly) || 0) / Math.max(1, Number(monthlyHours) || 160);

    const base = baseHourly * regularH;
    const overtimePay = baseHourly * overtimeH * 1.25;
    const nightPay = baseHourly * nightH * 0.25; // additional 25%
    const holidayPay = isHoliday ? baseHourly * totalH * 0.35 : 0; // additional 35%
    const total = base + overtimePay + nightPay + holidayPay;

    calc = {
      totalHours: totalH,
      regularHours: regularH,
      overtimeHours: overtimeH,
      nightHours: nightH,
      base,
      overtimePay,
      nightPay,
      holidayPay,
      total,
      baseHourly,
    };
  }

  const validate = () => {
    if (sMin === null || eMin === null) {
      setError("時刻は HH:MM 形式で入力してください");
      return;
    }
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>労働時間・残業代計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">労働時間・残業代計算ツール</h1>
      <p className="text-muted mb-8">
        出退勤時間・休憩・賃金を入力するだけで労働時間と残業代（法定割増込み）を自動計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">出勤時刻</label>
            <input type="time" value={start} onChange={(e) => setStart(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">退勤時刻</label>
            <input type="time" value={end} onChange={(e) => setEnd(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">休憩 (分)</label>
            <input type="number" value={breakMin} onChange={(e) => setBreakMin(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">賃金体系</label>
          <div className="flex gap-2 mb-3">
            <button onClick={() => setWageMode("hourly")} className={`px-4 py-2 rounded-lg text-sm border ${wageMode === "hourly" ? "bg-primary text-white border-primary" : "border-card-border"}`}>時給</button>
            <button onClick={() => setWageMode("monthly")} className={`px-4 py-2 rounded-lg text-sm border ${wageMode === "monthly" ? "bg-primary text-white border-primary" : "border-card-border"}`}>月給</button>
          </div>
          {wageMode === "hourly" ? (
            <div>
              <label className="block text-sm font-medium mb-2">時給 (円)</label>
              <input type="number" value={hourly} onChange={(e) => setHourly(e.target.value)}
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">月給 (円)</label>
                <input type="number" value={monthly} onChange={(e) => setMonthly(e.target.value)}
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">月所定労働時間</label>
                <input type="number" value={monthlyHours} onChange={(e) => setMonthlyHours(e.target.value)}
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>
            </div>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm mb-4">
          <input type="checkbox" checked={isHoliday} onChange={(e) => setIsHoliday(e.target.checked)} />
          法定休日労働（割増35%加算）
        </label>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button onClick={validate} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">入力チェック</button>

        {calc && (
          <div className="mt-8 space-y-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-background rounded-lg p-4">
                <p className="text-xs text-muted">総労働時間</p>
                <p className="text-xl font-bold">{calc.totalHours.toFixed(2)}h</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <p className="text-xs text-muted">所定内</p>
                <p className="text-xl font-bold">{calc.regularHours.toFixed(2)}h</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <p className="text-xs text-muted">残業時間</p>
                <p className="text-xl font-bold text-orange-500">{calc.overtimeHours.toFixed(2)}h</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <p className="text-xs text-muted">深夜時間</p>
                <p className="text-xl font-bold text-purple-500">{calc.nightHours.toFixed(2)}h</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 text-sm space-y-1">
              <p>基本給（{calc.regularHours.toFixed(2)}h × {Math.round(calc.baseHourly)}円）: <span className="font-mono">{Math.round(calc.base).toLocaleString()}円</span></p>
              <p>残業手当（×1.25）: <span className="font-mono text-orange-500">{Math.round(calc.overtimePay).toLocaleString()}円</span></p>
              <p>深夜割増（+25%）: <span className="font-mono text-purple-500">{Math.round(calc.nightPay).toLocaleString()}円</span></p>
              {isHoliday && <p>休日割増（+35%）: <span className="font-mono text-red-500">{Math.round(calc.holidayPay).toLocaleString()}円</span></p>}
            </div>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
              <p className="text-xs text-muted">合計支給額（1日分）</p>
              <p className="text-3xl font-bold text-primary">{Math.round(calc.total).toLocaleString()}円</p>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10 bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <Link href="/guide/side-business-tools" className="block p-4 rounded-lg border border-card-border hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-medium">副業ツール特集</p>
            <p className="text-muted text-xs mt-1">本業の労働時間外で稼ぐ方法</p>
          </Link>
          <Link href="/guide/job-site-comparison" className="block p-4 rounded-lg border border-card-border hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-medium">転職サイト比較</p>
            <p className="text-muted text-xs mt-1">残業の少ない職場を探すなら</p>
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">計算ロジック</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1日8時間を超える労働は時間外（法定割増 25%）として計算します。</p>
          <p>22:00〜翌5:00は深夜労働扱いとし、+25% の割増を加算します。</p>
          <p>法定休日労働をオンにすると、その日の労働時間全体に +35% を加算します。</p>
          <p>月給制の場合は「月給 ÷ 月所定労働時間」で1時間あたりの単価を算出します。</p>
          <p>計算はブラウザ内で完結し、入力データは外部送信されません。</p>
        </div>
      </section>

      <AffiliateSection slug="work-hour-calculator" category="日常ツール" />
      <RelatedTools currentSlug="work-hour-calculator" category="日常ツール" />
    </div>
  );
}
