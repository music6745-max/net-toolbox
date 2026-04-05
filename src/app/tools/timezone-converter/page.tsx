"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const ZONES = [
  { city: "東京", tz: "Asia/Tokyo", flag: "🇯🇵" },
  { city: "ニューヨーク", tz: "America/New_York", flag: "🇺🇸" },
  { city: "ロンドン", tz: "Europe/London", flag: "🇬🇧" },
  { city: "パリ", tz: "Europe/Paris", flag: "🇫🇷" },
  { city: "シドニー", tz: "Australia/Sydney", flag: "🇦🇺" },
  { city: "ドバイ", tz: "Asia/Dubai", flag: "🇦🇪" },
  { city: "シンガポール", tz: "Asia/Singapore", flag: "🇸🇬" },
  { city: "ソウル", tz: "Asia/Seoul", flag: "🇰🇷" },
  { city: "北京", tz: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "ムンバイ", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "ロサンゼルス", tz: "America/Los_Angeles", flag: "🇺🇸" },
  { city: "サンパウロ", tz: "America/Sao_Paulo", flag: "🇧🇷" },
];

export default function TimezoneConverterPage() {
  const [fromZone, setFromZone] = useState("Asia/Tokyo");
  const [toZone, setToZone] = useState("America/New_York");
  const [dateStr, setDateStr] = useState(new Date().toISOString().slice(0, 10));
  const [timeStr, setTimeStr] = useState("12:00");
  const [result, setResult] = useState<string | null>(null);
  const [diff, setDiff] = useState<string | null>(null);

  const convert = () => {
    const [y, mo, d] = dateStr.split("-").map(Number);
    const [h, mi] = timeStr.split(":").map(Number);
    const fromDate = new Date(Date.UTC(y, mo - 1, d, h, mi));
    const fromOffset = getOffsetMinutes(fromZone, fromDate);
    const toOffset = getOffsetMinutes(toZone, fromDate);
    const utcTime = fromDate.getTime() - fromOffset * 60000;
    const toTime = new Date(utcTime + toOffset * 60000);
    const fmt = new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "UTC" });
    setResult(fmt.format(toTime));
    const diffH = (toOffset - fromOffset) / 60;
    setDiff((diffH >= 0 ? "+" : "") + diffH + "時間");
  };

  function getOffsetMinutes(tz: string, date: Date): number {
    const str = date.toLocaleString("en-US", { timeZone: tz });
    const local = new Date(str);
    const utcStr = date.toLocaleString("en-US", { timeZone: "UTC" });
    const utc = new Date(utcStr);
    return (local.getTime() - utc.getTime()) / 60000;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>タイムゾーン変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">タイムゾーン変換ツール</h1>
      <p className="text-muted mb-8">都市間の時差を計算し、日時を変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">変換元の都市</label>
            <select value={fromZone} onChange={e => setFromZone(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent">
              {ZONES.map(z => <option key={z.tz} value={z.tz}>{z.flag} {z.city}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">変換先の都市</label>
            <select value={toZone} onChange={e => setToZone(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent">
              {ZONES.map(z => <option key={z.tz} value={z.tz}>{z.flag} {z.city}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-1">日付</label><input type="date" value={dateStr} onChange={e => setDateStr(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
          <div><label className="block text-sm font-medium mb-1">時間</label><input type="time" value={timeStr} onChange={e => setTimeStr(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
        </div>
        <button onClick={convert} className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition">変換する</button>
        {result && (
          <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
            <p className="text-sm text-muted">変換結果</p>
            <p className="text-2xl font-bold mt-1">{result}</p>
            <p className="text-sm text-muted mt-2">時差: {diff}</p>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>変換元と変換先の都市を選び、日時を入力して変換できます。サマータイムにも対応しています。</p></div></section>
      <AffiliateSection slug="timezone-converter" category="日常ツール" />
      <RelatedTools currentSlug="timezone-converter" category="日常ツール" />
    </div>
  );
}
