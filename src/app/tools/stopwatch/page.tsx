"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function formatTime(ms: number): string {
  const totalMs = Math.floor(ms);
  const minutes = Math.floor(totalMs / 60000);
  const seconds = Math.floor((totalMs % 60000) / 1000);
  const centiseconds = Math.floor((totalMs % 1000) / 10);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(centiseconds).padStart(2, "0")}`;
}

export default function StopwatchPage() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<{ num: number; lap: number; total: number }[]>([]);
  const startRef = useRef<number | null>(null);
  const baseRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const tick = () => {
    if (startRef.current !== null) {
      setElapsed(baseRef.current + (Date.now() - startRef.current));
      rafRef.current = requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    if (running) {
      startRef.current = Date.now();
      rafRef.current = requestAnimationFrame(tick);
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (startRef.current !== null) {
        baseRef.current += Date.now() - startRef.current;
        startRef.current = null;
      }
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);

  const handleReset = () => {
    setRunning(false);
    setElapsed(0);
    setLaps([]);
    baseRef.current = 0;
    startRef.current = null;
  };

  const handleLap = () => {
    const total = elapsed;
    const prev = laps.length > 0 ? laps[laps.length - 1].total : 0;
    setLaps((prev_laps) => [
      ...prev_laps,
      { num: prev_laps.length + 1, lap: total - prev, total },
    ]);
  };

  const bestLap = laps.length > 1 ? Math.min(...laps.map((l) => l.lap)) : null;
  const worstLap = laps.length > 1 ? Math.max(...laps.map((l) => l.lap)) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ストップウォッチ</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ストップウォッチツール</h1>
      <p className="text-muted mb-8">ミリ秒単位で経過時間を計測します。ラップ機能付きです。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        {/* Display */}
        <div className="text-center mb-8">
          <div className="text-6xl font-mono font-bold tabular-nums">
            {formatTime(elapsed)}
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 justify-center mb-8">
          {!running ? (
            <button
              onClick={handleStart}
              className="bg-primary text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              {elapsed > 0 ? "再開" : "スタート"}
            </button>
          ) : (
            <button
              onClick={handleStop}
              className="bg-yellow-500 text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-yellow-600 transition-colors"
            >
              ストップ
            </button>
          )}
          <button
            onClick={handleLap}
            disabled={!running}
            className="px-6 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors disabled:opacity-40"
          >
            ラップ
          </button>
          <button
            onClick={handleReset}
            disabled={running}
            className="px-6 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors disabled:opacity-40"
          >
            リセット
          </button>
        </div>

        {/* Lap list */}
        {laps.length > 0 && (
          <div className="overflow-hidden rounded-lg border border-card-border text-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-background text-left">
                  <th className="px-4 py-2 font-medium text-muted">ラップ</th>
                  <th className="px-4 py-2 font-medium text-muted">ラップタイム</th>
                  <th className="px-4 py-2 font-medium text-muted">合計タイム</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border">
                {[...laps].reverse().map((lap) => (
                  <tr
                    key={lap.num}
                    className={
                      bestLap !== null && lap.lap === bestLap
                        ? "bg-green-50 text-green-700"
                        : worstLap !== null && lap.lap === worstLap
                        ? "bg-red-50 text-red-600"
                        : ""
                    }
                  >
                    <td className="px-4 py-2">
                      {lap.num}
                      {bestLap !== null && lap.lap === bestLap && (
                        <span className="ml-2 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">最速</span>
                      )}
                      {worstLap !== null && lap.lap === worstLap && (
                        <span className="ml-2 text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded">最遅</span>
                      )}
                    </td>
                    <td className="px-4 py-2 font-mono">{formatTime(lap.lap)}</td>
                    <td className="px-4 py-2 font-mono text-muted">{formatTime(lap.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ストップウォッチツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 「スタート」ボタンをクリックすると計測を開始します。</p>
          <p>2. 「ストップ」で一時停止、「再開」で続きから計測できます。</p>
          <p>3. 計測中に「ラップ」をクリックするとラップタイムを記録します。</p>
          <p>4. ラップが複数ある場合、最速ラップは緑、最遅ラップは赤で表示されます。</p>
          <p>5. 「リセット」で計測をリセットします。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="stopwatch" category="日常ツール" />
      <RelatedTools currentSlug="stopwatch" category="日常ツール" />
    </div>
  );
}
