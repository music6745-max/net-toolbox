"use client";

import { useState } from "react";
import Link from "next/link";

function calcBedtimes(wakeHour: number, wakeMin: number) {
  const results: { cycles: number; bedtime: string; totalHours: string }[] = [];
  // 15 minutes to fall asleep
  const fallAsleepMin = 15;
  for (let cycles = 6; cycles >= 4; cycles--) {
    const totalMin = cycles * 90 + fallAsleepMin;
    let bedMin = wakeHour * 60 + wakeMin - totalMin;
    if (bedMin < 0) bedMin += 24 * 60;
    const h = Math.floor(bedMin / 60) % 24;
    const m = bedMin % 60;
    const hh = String(h).padStart(2, "0");
    const mm = String(m).padStart(2, "0");
    const sleepH = Math.floor((cycles * 90) / 60);
    const sleepM = (cycles * 90) % 60;
    const totalHours = sleepM === 0 ? `${sleepH}時間` : `${sleepH}時間${sleepM}分`;
    results.push({ cycles, bedtime: `${hh}:${mm}`, totalHours });
  }
  return results;
}

export default function SleepCalculatorPage() {
  const [wakeTime, setWakeTime] = useState("07:00");
  const [results, setResults] = useState<ReturnType<typeof calcBedtimes> | null>(null);

  const calculate = () => {
    const [h, m] = wakeTime.split(":").map(Number);
    if (isNaN(h) || isNaN(m)) return;
    setResults(calcBedtimes(h, m));
  };

  const cycleLabels: Record<number, string> = {
    6: "最適（6サイクル）",
    5: "推奨（5サイクル）",
    4: "最低限（4サイクル）",
  };

  const cycleBadge: Record<number, string> = {
    6: "bg-green-100 text-green-700",
    5: "bg-blue-100 text-blue-700",
    4: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>睡眠時間計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">睡眠時間計算ツール</h1>
      <p className="text-muted mb-8">
        起床時刻を入力すると、90分の睡眠サイクルに基づいた理想の就寝時刻を計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">起床時刻</label>
          <input
            type="time"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
            className="w-full sm:w-48 border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <button
          onClick={calculate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          就寝時刻を計算する
        </button>

        {results && (
          <div className="mt-8">
            <p className="text-sm text-muted mb-4">
              起床時刻 <span className="font-bold text-foreground">{wakeTime}</span> の場合、以下の時刻に就寝するのがおすすめです（寝つきまで約15分を考慮）。
            </p>
            <div className="space-y-3">
              {results.map((r) => (
                <div
                  key={r.cycles}
                  className="flex items-center justify-between bg-background rounded-lg border border-card-border px-5 py-4"
                >
                  <div>
                    <p className="text-2xl font-bold">{r.bedtime}</p>
                    <p className="text-xs text-muted mt-0.5">睡眠時間: {r.totalHours}</p>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${cycleBadge[r.cycles]}`}>
                    {cycleLabels[r.cycles]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">睡眠時間計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 翌朝の起床時刻を入力します。</p>
          <p>2. 「就寝時刻を計算する」をクリックすると、睡眠サイクルに合わせた就寝時刻が表示されます。</p>
          <p>人間の睡眠は約90分のサイクルを繰り返します。このサイクルの境目に起床すると、スッキリ目覚めやすくなります。</p>
          <p>6サイクル（9時間）が最適、5サイクル（7時間30分）が一般的に推奨される睡眠時間です。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
