"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getDefaultDatetime(): string {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 16);
}

export default function CountdownTimerPage() {
  const [targetDatetime, setTargetDatetime] = useState(getDefaultDatetime());
  const [label, setLabel] = useState("");
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calc = () => {
      const target = new Date(targetDatetime).getTime();
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
        return;
      }

      setIsExpired(false);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, [targetDatetime]);

  const units = [
    { label: "日", value: timeLeft?.days ?? 0 },
    { label: "時間", value: timeLeft?.hours ?? 0 },
    { label: "分", value: timeLeft?.minutes ?? 0 },
    { label: "秒", value: timeLeft?.seconds ?? 0 },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span>カウントダウンタイマー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">カウントダウンタイマー</h1>
      <p className="text-muted mb-8">
        目標の日時を設定すると、残り時間をリアルタイムで表示します。イベントや締め切りの管理にご活用ください。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">ラベル（任意）</label>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="例: プロジェクト締め切り"
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">目標日時</label>
            <input
              type="datetime-local"
              value={targetDatetime}
              onChange={(e) => setTargetDatetime(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        {label && (
          <div className="text-center text-lg font-medium mb-4">{label}</div>
        )}

        <div className="grid grid-cols-4 gap-3">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="bg-background rounded-lg p-4 text-center"
            >
              <div className={`text-3xl font-bold ${isExpired ? "text-muted" : "text-primary"}`}>
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="text-xs text-muted mt-1">{unit.label}</div>
            </div>
          ))}
        </div>

        {isExpired && (
          <div className="mt-4 text-center text-sm text-orange-500 font-medium">
            設定した日時を過ぎています
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">カウントダウンタイマーの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>目標日時を入力すると、リアルタイムで残り時間が表示されます。</p>
          <p>ラベルを設定して何のカウントダウンかを表示できます。</p>
          <p>イベントの準備や締め切り管理、記念日のカウントダウンにご活用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="countdown-timer" category="日常ツール" />
      <RelatedTools currentSlug="countdown-timer" category="日常ツール" />
    </div>
  );
}
