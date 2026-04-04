"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const ZONES = [
  { label: "日本 (JST)", tz: "Asia/Tokyo" },
  { label: "UTC", tz: "UTC" },
  { label: "米国東部 (EST/EDT)", tz: "America/New_York" },
  { label: "米国西部 (PST/PDT)", tz: "America/Los_Angeles" },
  { label: "英国 (GMT/BST)", tz: "Europe/London" },
  { label: "中央ヨーロッパ (CET)", tz: "Europe/Paris" },
  { label: "中国 (CST)", tz: "Asia/Shanghai" },
  { label: "韓国 (KST)", tz: "Asia/Seoul" },
  { label: "インド (IST)", tz: "Asia/Kolkata" },
  { label: "オーストラリア東部 (AEST)", tz: "Australia/Sydney" },
  { label: "シンガポール (SGT)", tz: "Asia/Singapore" },
  { label: "ハワイ (HST)", tz: "Pacific/Honolulu" },
];

export default function Page() {
  const now = new Date();
  const [dateStr, setDateStr] = useState(now.toISOString().slice(0, 16));
  const [fromTz, setFromTz] = useState("Asia/Tokyo");

  const fmt = (tz: string) => {
    try {
      const d = new Date(dateStr);
      // Convert from source timezone
      const srcOffset = new Date(d.toLocaleString("en-US", { timeZone: fromTz })).getTime();
      const utc = d.getTime() - (srcOffset - d.getTime());
      const target = new Date(utc);
      return target.toLocaleString("ja-JP", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false });
    } catch { return "-"; }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>タイムゾーン変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">タイムゾーン変換ツール</h1>
      <p className="text-muted mb-8">世界各地のタイムゾーン間で時刻を変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">基準タイムゾーン</label>
            <select value={fromTz} onChange={e => setFromTz(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              {ZONES.map(z => <option key={z.tz} value={z.tz}>{z.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">日時</label>
            <input type="datetime-local" value={dateStr} onChange={e => setDateStr(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>
        <div className="space-y-2">
          {ZONES.map(z => (
            <div key={z.tz} className={`flex justify-between items-center p-3 rounded-lg ${z.tz === fromTz ? "bg-primary/10 font-bold" : "bg-background"}`}>
              <span className="text-sm">{z.label}</span>
              <span className="text-sm font-mono">{fmt(z.tz)}</span>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>基準タイムゾーンと日時を設定すると、世界各地の時刻が一覧表示されます。</p></div></section>
      <RelatedTools currentSlug="timezone-converter" category="日常ツール" />
    </div>
  );
}