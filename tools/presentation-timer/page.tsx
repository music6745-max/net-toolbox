"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

type TimerState = "idle" | "running" | "paused" | "finished";

export default function PresentationTimerPage() {
  const [totalMinutes, setTotalMinutes] = useState(5);
  const [warnMinutes, setWarnMinutes] = useState(2);
  const [remaining, setRemaining] = useState(totalMinutes * 60);
  const [state, setState] = useState<TimerState>("idle");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (state === "idle") {
      setRemaining(totalMinutes * 60);
    }
  }, [totalMinutes, state]);

  useEffect(() => {
    if (state === "running") {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            setState("finished");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clear();
    }
    return clear;
  }, [state, clear]);

  const start = () => {
    if (state === "idle") {
      setRemaining(totalMinutes * 60);
    }
    setState("running");
  };
  const pause = () => setState("paused");
  const resume = () => setState("running");
  const reset = () => {
    clear();
    setState("idle");
    setRemaining(totalMinutes * 60);
  };

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const timeStr = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const progress = state === "idle" ? 1 : remaining / (totalMinutes * 60);

  const isRed = remaining <= 60 && state !== "idle";
  const isYellow = remaining <= warnMinutes * 60 && remaining > 60 && state !== "idle";
  const isFinished = state === "finished";

  const bgColor = isFinished || isRed ? "bg-red-600" : isYellow ? "bg-yellow-500" : "bg-card-bg";
  const textColor = isFinished || isRed || isYellow ? "text-white" : "text-primary";

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted flex items-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <span className="text-primary">プレゼンタイマーツール</span>
        </nav>

        <h1 className="text-2xl font-bold text-primary mb-2">プレゼンタイマーツール</h1>
        <p className="text-muted mb-8">プレゼンテーション用のカウントダウンタイマーです。</p>

        {/* Timer Display */}
        <div className={`${bgColor} border border-card-border rounded-xl p-8 mb-6 text-center transition-colors duration-500`}>
          <div className={`text-8xl font-bold font-mono ${textColor} tracking-wider mb-4`}>
            {timeStr}
          </div>
          {isFinished && (
            <p className="text-white text-xl font-bold animate-pulse">時間終了！</p>
          )}
          {isRed && !isFinished && (
            <p className="text-white text-lg font-semibold animate-pulse">残り1分を切りました！</p>
          )}
          {isYellow && (
            <p className="text-white text-lg font-semibold">まもなく時間です</p>
          )}

          {/* Progress bar */}
          <div className="mt-6 h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/70 rounded-full transition-all duration-1000"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <div className="flex justify-center gap-3 mb-6">
            {state === "idle" && (
              <button onClick={start} className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-colors text-lg">
                スタート
              </button>
            )}
            {state === "running" && (
              <button onClick={pause} className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl transition-colors text-lg">
                一時停止
              </button>
            )}
            {state === "paused" && (
              <button onClick={resume} className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-colors text-lg">
                再開
              </button>
            )}
            {state === "finished" && (
              <button onClick={reset} className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-colors text-lg">
                リセット
              </button>
            )}
            {(state === "running" || state === "paused") && (
              <button onClick={reset} className="px-6 py-3 bg-background border border-card-border text-muted hover:text-primary hover:border-primary font-bold rounded-xl transition-colors text-lg">
                リセット
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                合計時間: <span className="font-bold">{totalMinutes}分</span>
              </label>
              <input
                type="range"
                min={1}
                max={60}
                value={totalMinutes}
                onChange={(e) => { setTotalMinutes(Number(e.target.value)); if (state !== "idle") reset(); }}
                disabled={state === "running" || state === "paused"}
                className="w-full accent-primary disabled:opacity-40"
              />
              <div className="flex justify-between text-xs text-muted mt-1"><span>1分</span><span>60分</span></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                警告表示: 残り <span className="font-bold">{warnMinutes}分</span> から黄色に
              </label>
              <input
                type="range"
                min={1}
                max={Math.max(totalMinutes - 1, 1)}
                value={warnMinutes}
                onChange={(e) => setWarnMinutes(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted mt-1"><span>1分</span><span>{Math.max(totalMinutes - 1, 1)}分</span></div>
            </div>
          </div>
        </div>

        {/* 使い方 */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">使い方</h2>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>合計時間と警告表示のタイミングをスライダーで設定します</li>
            <li>「スタート」ボタンでカウントダウンを開始します</li>
            <li>残り時間が警告時間になると黄色に変わります</li>
            <li>残り1分を切ると赤色に変わります</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
