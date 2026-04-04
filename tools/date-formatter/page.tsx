"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const WEEKDAYS_JP = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
const WEEKDAYS_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getRelative(date: Date): string {
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "今日";
  if (diffDays === 1) return "明日";
  if (diffDays === -1) return "昨日";
  if (diffDays > 0) return `${diffDays}日後`;
  return `${Math.abs(diffDays)}日前`;
}

interface FormatRow {
  label: string;
  value: string;
}

function formatDate(dateStr: string): FormatRow[] | null {
  if (!dateStr) return null;
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return null;

  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const wJp = WEEKDAYS_JP[d.getDay()];
  const wEn = WEEKDAYS_EN[d.getDay()];
  const mEn = MONTHS_EN[d.getMonth()];

  const pad = (n: number) => String(n).padStart(2, "0");

  return [
    { label: "ISO 8601", value: `${y}-${pad(m)}-${pad(day)}` },
    { label: "日本語形式", value: `${y}年${m}月${day}日（${wJp}）` },
    { label: "US形式", value: `${mEn} ${day}, ${y} (${wEn})` },
    { label: "スラッシュ区切り", value: `${y}/${pad(m)}/${pad(day)}` },
    { label: "ドット区切り", value: `${pad(day)}.${pad(m)}.${y}` },
    { label: "Unixタイムスタンプ（秒）", value: String(Math.floor(d.getTime() / 1000)) },
    { label: "Unixタイムスタンプ（ミリ秒）", value: String(d.getTime()) },
    { label: "RFC 2822", value: d.toUTCString() },
    { label: "相対表示", value: getRelative(d) },
    { label: "週番号", value: `第${getWeekNumber(d)}週` },
  ];
}

function getWeekNumber(d: Date): number {
  const start = new Date(d.getFullYear(), 0, 1);
  return Math.ceil(((d.getTime() - start.getTime()) / 86400000 + start.getDay() + 1) / 7);
}

export default function DateFormatterPage() {
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const [dateStr, setDateStr] = useState(todayStr);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const rows = useMemo(() => formatDate(dateStr), [dateStr]);

  const copyValue = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted flex items-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <span className="text-primary">日付フォーマットツール</span>
        </nav>

        <h1 className="text-2xl font-bold text-primary mb-2">日付フォーマットツール</h1>
        <p className="text-muted mb-8">日付を入力して、様々な形式で一覧表示します。</p>

        {/* Input Card */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <label className="block text-sm font-medium text-primary mb-1">日付を選択</label>
          <input
            type="date"
            value={dateStr}
            onChange={(e) => setDateStr(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-background border border-card-border text-primary focus:outline-none focus:border-primary transition-colors"
          />
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setDateStr(todayStr)}
              className="text-sm px-3 py-1.5 bg-background border border-card-border text-muted hover:text-primary hover:border-primary rounded-lg transition-colors"
            >
              今日
            </button>
            <button
              onClick={() => {
                const d = new Date();
                d.setDate(d.getDate() + 1);
                setDateStr(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`);
              }}
              className="text-sm px-3 py-1.5 bg-background border border-card-border text-muted hover:text-primary hover:border-primary rounded-lg transition-colors"
            >
              明日
            </button>
          </div>
        </div>

        {/* Results */}
        {rows && (
          <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-primary mb-4">変換結果</h2>
            <div className="space-y-2">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-3 px-3 py-2.5 bg-background border border-card-border rounded-lg"
                >
                  <span className="text-xs text-muted w-44 shrink-0">{row.label}</span>
                  <span className="flex-1 font-mono text-sm text-primary break-all">{row.value}</span>
                  <button
                    onClick={() => copyValue(row.label, row.value)}
                    className="shrink-0 text-xs px-3 py-1 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors"
                  >
                    {copiedLabel === row.label ? "✓" : "コピー"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 使い方 */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">使い方</h2>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>日付入力欄をクリックして日付を選択します</li>
            <li>「今日」「明日」ボタンで素早く設定できます</li>
            <li>各形式の右のコピーボタンでクリップボードにコピーします</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
