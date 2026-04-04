"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const DAYS_JA = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
const DAYS_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAY_COLOR = [
  "text-red-500",
  "text-foreground",
  "text-foreground",
  "text-foreground",
  "text-foreground",
  "text-foreground",
  "text-blue-500",
];

function toJapaneseEra(date: Date): string {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const ymd = y * 10000 + m * 100 + d;
  if (ymd >= 20190501) return `令和${y - 2018}年${m}月${d}日`;
  if (ymd >= 19890108) return `平成${y - 1988}年${m}月${d}日`;
  if (ymd >= 19260125) return `昭和${y - 1925}年${m}月${d}日`;
  return "";
}

export default function WeekdayCalculatorPage() {
  const today = new Date().toISOString().slice(0, 10);
  const [dateStr, setDateStr] = useState(today);

  const date = new Date(dateStr + "T00:00:00");
  const isValid = dateStr.length === 10 && !isNaN(date.getTime());
  const dayIndex = isValid ? date.getDay() : -1;
  const eraStr = isValid ? toJapaneseEra(date) : "";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>曜日計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">曜日計算ツール</h1>
      <p className="text-muted mb-8">日付を入力すると、その日の曜日を即座に表示します。過去・未来の日付にも対応しています。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">日付を入力</label>
        <input
          type="date"
          value={dateStr}
          onChange={(e) => setDateStr(e.target.value)}
          className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />

        {isValid && (
          <div className="mt-8">
            <div className="text-center py-6 bg-background rounded-xl">
              <p className="text-sm text-muted mb-1">{dateStr.replace(/-/g, "/")} の曜日</p>
              <p className={`text-5xl font-bold mt-2 ${DAY_COLOR[dayIndex]}`}>{DAYS_JA[dayIndex]}</p>
              <p className="text-sm text-muted mt-3">{DAYS_EN[dayIndex]}</p>
              {eraStr && <p className="text-xs text-muted mt-2">{eraStr}</p>}
            </div>

            <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs">
              {DAYS_JA.map((day, i) => (
                <div
                  key={day}
                  className={`py-2 rounded-lg font-medium ${
                    i === dayIndex
                      ? "bg-primary text-white"
                      : "bg-background text-muted"
                  }`}
                >
                  {day.slice(0, 1)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">曜日計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>日付欄に調べたい日付を入力すると、その日の曜日が自動で表示されます。</p>
          <p>カレンダーアイコンをクリックして日付を選択することもできます。</p>
          <p>過去の日付はもちろん、未来の日付の曜日も調べることができます。</p>
          <p>曜日の確認は日曜（赤）・土曜（青）で色分けして表示されます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="weekday-calculator" category="日常ツール" />
      <RelatedTools currentSlug="weekday-calculator" category="日常ツール" />
    </div>
  );
}
