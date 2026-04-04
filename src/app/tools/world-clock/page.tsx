"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type CityInfo = {
  name: string;
  nameEn: string;
  timezone: string;
  flag: string;
};

const CITIES: CityInfo[] = [
  { name: "東京", nameEn: "Tokyo", timezone: "Asia/Tokyo", flag: "🇯🇵" },
  { name: "ソウル", nameEn: "Seoul", timezone: "Asia/Seoul", flag: "🇰🇷" },
  { name: "上海", nameEn: "Shanghai", timezone: "Asia/Shanghai", flag: "🇨🇳" },
  { name: "シンガポール", nameEn: "Singapore", timezone: "Asia/Singapore", flag: "🇸🇬" },
  { name: "バンコク", nameEn: "Bangkok", timezone: "Asia/Bangkok", flag: "🇹🇭" },
  { name: "ドバイ", nameEn: "Dubai", timezone: "Asia/Dubai", flag: "🇦🇪" },
  { name: "モスクワ", nameEn: "Moscow", timezone: "Europe/Moscow", flag: "🇷🇺" },
  { name: "パリ", nameEn: "Paris", timezone: "Europe/Paris", flag: "🇫🇷" },
  { name: "ベルリン", nameEn: "Berlin", timezone: "Europe/Berlin", flag: "🇩🇪" },
  { name: "ロンドン", nameEn: "London", timezone: "Europe/London", flag: "🇬🇧" },
  { name: "ニューヨーク", nameEn: "New York", timezone: "America/New_York", flag: "🇺🇸" },
  { name: "シカゴ", nameEn: "Chicago", timezone: "America/Chicago", flag: "🇺🇸" },
  { name: "ロサンゼルス", nameEn: "Los Angeles", timezone: "America/Los_Angeles", flag: "🇺🇸" },
  { name: "サンパウロ", nameEn: "São Paulo", timezone: "America/Sao_Paulo", flag: "🇧🇷" },
  { name: "シドニー", nameEn: "Sydney", timezone: "Australia/Sydney", flag: "🇦🇺" },
  { name: "オークランド", nameEn: "Auckland", timezone: "Pacific/Auckland", flag: "🇳🇿" },
];

function formatTime(timezone: string, now: Date): { time: string; date: string; offset: string } {
  const timeFormatter = new Intl.DateTimeFormat("ja-JP", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });
  const offsetFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    timeZoneName: "shortOffset",
  });
  const offsetParts = offsetFormatter.formatToParts(now);
  const offsetStr = offsetParts.find((p) => p.type === "timeZoneName")?.value ?? "";
  return {
    time: timeFormatter.format(now),
    date: dateFormatter.format(now),
    offset: offsetStr,
  };
}

function isDaytime(timezone: string, now: Date): boolean {
  const hour = parseInt(
    new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "numeric",
      hour12: false,
    }).format(now)
  );
  return hour >= 6 && hour < 20;
}

export default function WorldClockPage() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>世界時計</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">世界時計ツール</h1>
      <p className="text-muted mb-8">
        世界主要都市の現在時刻をリアルタイムで表示します。1秒ごとに自動更新されます。
      </p>

      {now ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CITIES.map((city) => {
            const { time, date, offset } = formatTime(city.timezone, now);
            const daytime = isDaytime(city.timezone, now);
            return (
              <div
                key={city.timezone}
                className="bg-card-bg border border-card-border rounded-xl p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{city.flag}</span>
                    <div>
                      <p className="font-semibold text-sm">{city.name}</p>
                      <p className="text-xs text-muted">{city.nameEn}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      daytime
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-indigo-100 text-indigo-700"
                    }`}
                  >
                    {daytime ? "昼" : "夜"}
                  </span>
                </div>
                <p className="font-mono text-2xl font-bold text-primary">{time}</p>
                <p className="text-xs text-muted mt-1">{date}</p>
                <p className="text-xs text-muted">{offset}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-muted text-sm">読み込み中...</div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">世界時計ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. ページを開くと自動的に世界各地の現在時刻が表示されます。</p>
          <p>2. 時刻は1秒ごとに自動更新されます。</p>
          <p>3. 「昼」「夜」のバッジで現地が日中か夜間かを一目で確認できます。</p>
          <p>4. タイムゾーンオフセット（UTC+9など）も各カードに表示されます。</p>
          <p>5. すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="world-clock" category="日常ツール" />
    </div>
  );
}
