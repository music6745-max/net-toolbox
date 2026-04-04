"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

function playBeep() {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.frequency.value = 880;
    oscillator.type = "sine";
    gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.0);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 1.0);
  } catch {
    // AudioContext not available
  }
}

export default function TimerPage() {
  const [inputMin, setInputMin] = useState("5");
  const [inputSec, setInputSec] = useState("0");
  const [remaining, setRemaining] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const endTimeRef = useRef<number | null>(null);

  const totalSeconds = remaining ?? (Number(inputMin) * 60 + Number(inputSec));

  const tick = useCallback(() => {
    if (endTimeRef.current === null) return;
    const left = Math.max(0, Math.ceil((endTimeRef.current - Date.now()) / 1000));
    setRemaining(left);
    if (left === 0) {
      setRunning(false);
      setFinished(true);
      playBeep();
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(tick, 250);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, tick]);

  const start = () => {
    const total = Number(inputMin) * 60 + Number(inputSec);
    if (total <= 0) return;
    const left = remaining ?? total;
    if (left <= 0) return;
    endTimeRef.current = Date.now() + left * 1000;
    setFinished(false);
    setRunning(true);
  };

  const pause = () => setRunning(false);

  const reset = () => {
    setRunning(false);
    setFinished(false);
    setRemaining(null);
    endTimeRef.current = null;
  };

  const display = remaining !== null ? remaining : (Number(inputMin) * 60 + Number(inputSec));
  const mins = Math.floor(display / 60);
  const secs = display % 60;
  const total = Number(inputMin) * 60 + Number(inputSec);
  const progress = total > 0 ? Math.max(0, Math.min(100, ((total - (remaining ?? total)) / total) * 100)) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>タイマー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">タイマーツール</h1>
      <p className="text-muted mb-8">分・秒を設定してカウントダウンするタイマーです。終了時に音でお知らせします。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        {/* Time input */}
        <div className="flex items-center gap-3 mb-6">
          <div>
            <label className="block text-xs text-muted mb-1">分</label>
            <input
              type="number"
              value={inputMin}
              onChange={(e) => { setInputMin(e.target.value); reset(); }}
              min="0"
              max="99"
              disabled={running}
              className="w-20 border border-card-border rounded-lg px-3 py-2.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary disabled:opacity-50"
            />
          </div>
          <span className="text-2xl font-bold mt-4">:</span>
          <div>
            <label className="block text-xs text-muted mb-1">秒</label>
            <input
              type="number"
              value={inputSec}
              onChange={(e) => { setInputSec(e.target.value); reset(); }}
              min="0"
              max="59"
              disabled={running}
              className="w-20 border border-card-border rounded-lg px-3 py-2.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary disabled:opacity-50"
            />
          </div>
        </div>

        {/* Display */}
        <div className="text-center mb-6">
          <div className={`text-7xl font-mono font-bold tabular-nums transition-colors ${finished ? "text-red-500" : ""}`}>
            {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
          </div>
          {finished && <p className="text-red-500 font-semibold mt-2 animate-pulse">時間になりました！</p>}
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-background rounded-full mb-6 overflow-hidden border border-card-border">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex gap-3 justify-center">
          {!running ? (
            <button
              onClick={start}
              disabled={totalSeconds <= 0}
              className="bg-primary text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-40"
            >
              {remaining !== null && remaining < total ? "再開" : "スタート"}
            </button>
          ) : (
            <button
              onClick={pause}
              className="bg-yellow-500 text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-yellow-600 transition-colors"
            >
              一時停止
            </button>
          )}
          <button
            onClick={reset}
            className="px-6 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">タイマーツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 分と秒を入力します。</p>
          <p>2. 「スタート」ボタンをクリックするとカウントダウンが始まります。</p>
          <p>3. 「一時停止」で一時停止、「再開」で続きから再開できます。</p>
          <p>4. カウントダウンが0になると音でお知らせします。</p>
          <p>5. 「リセット」ボタンで最初の時間に戻ります。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
