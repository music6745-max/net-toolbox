"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type Phase = "work" | "break";

const WORK_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

function playTone(freq: number, duration: number) {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = freq;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch {
    // ignore
  }
}

export default function PomodoroTimerPage() {
  const [phase, setPhase] = useState<Phase>("work");
  const [remaining, setRemaining] = useState(WORK_SECONDS);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const endTimeRef = useRef<number | null>(null);

  const totalForPhase = phase === "work" ? WORK_SECONDS : BREAK_SECONDS;
  const progress = ((totalForPhase - remaining) / totalForPhase) * 100;

  const advance = useCallback(() => {
    if (phase === "work") {
      setSessions((s) => s + 1);
      setPhase("break");
      setRemaining(BREAK_SECONDS);
      playTone(660, 0.8);
    } else {
      setPhase("work");
      setRemaining(WORK_SECONDS);
      playTone(440, 0.8);
    }
    setRunning(false);
    endTimeRef.current = null;
  }, [phase]);

  const tick = useCallback(() => {
    if (endTimeRef.current === null) return;
    const left = Math.max(0, Math.ceil((endTimeRef.current - Date.now()) / 1000));
    setRemaining(left);
    if (left === 0) {
      advance();
    }
  }, [advance]);

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
    endTimeRef.current = Date.now() + remaining * 1000;
    setRunning(true);
  };

  const pause = () => setRunning(false);

  const reset = () => {
    setRunning(false);
    setPhase("work");
    setRemaining(WORK_SECONDS);
    setSessions(0);
    endTimeRef.current = null;
  };

  const skip = () => {
    setRunning(false);
    advance();
  };

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;

  const isWork = phase === "work";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ポモドーロタイマー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ポモドーロタイマー</h1>
      <p className="text-muted mb-8">
        25分作業・5分休憩のサイクルで集中力を高めるポモドーロ・テクニックのタイマーです。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        {/* Phase badge */}
        <div className="flex justify-center mb-6">
          <div className="flex rounded-lg overflow-hidden border border-card-border text-sm font-medium">
            <div className={`px-5 py-2 ${isWork ? "bg-primary text-white" : "text-muted"}`}>
              作業 (25分)
            </div>
            <div className={`px-5 py-2 ${!isWork ? "bg-green-500 text-white" : "text-muted"}`}>
              休憩 (5分)
            </div>
          </div>
        </div>

        {/* Timer display */}
        <div className="text-center mb-6">
          <div className={`text-7xl font-mono font-bold tabular-nums ${isWork ? "text-primary" : "text-green-600"}`}>
            {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-3 bg-background rounded-full mb-6 overflow-hidden border border-card-border">
          <div
            className={`h-full rounded-full transition-all duration-500 ${isWork ? "bg-primary" : "bg-green-500"}`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Session counter */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: Math.max(4, sessions + 1) }, (_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border-2 ${i < sessions ? "bg-primary border-primary" : "border-card-border"}`}
            />
          ))}
          <span className="text-sm text-muted ml-2 self-center">完了: {sessions} セッション</span>
        </div>

        {/* Controls */}
        <div className="flex gap-3 justify-center">
          {!running ? (
            <button
              onClick={start}
              className="bg-primary text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              スタート
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
            onClick={skip}
            className="px-6 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            スキップ
          </button>
          <button
            onClick={reset}
            className="px-6 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ポモドーロタイマーの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 「スタート」ボタンをクリックして25分の作業タイマーを開始します。</p>
          <p>2. 25分経過すると5分の休憩フェーズに自動的に切り替わります。</p>
          <p>3. 作業セッション完了数がカウンターに表示されます。</p>
          <p>4. 「スキップ」で現在のフェーズをスキップできます。</p>
          <p>ポモドーロ・テクニックは25分間集中して作業し、5分間休憩することで生産性を高める時間管理法です。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="pomodoro-timer" category="日常ツール" />
    </div>
  );
}
