"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Mode = "focus" | "short" | "long";

export default function Page() {
  const [focusMin, setFocusMin] = useState(25);
  const [shortMin, setShortMin] = useState(5);
  const [longMin, setLongMin] = useState(15);
  const [mode, setMode] = useState<Mode>("focus");
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [completedFocus, setCompletedFocus] = useState(0);
  const [totalFocusSec, setTotalFocusSec] = useState(0);
  const [cycleInSet, setCycleInSet] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const durationFor = useCallback(
    (m: Mode) => (m === "focus" ? focusMin : m === "short" ? shortMin : longMin) * 60,
    [focusMin, shortMin, longMin]
  );

  useEffect(() => {
    if (!running) return;
    timerRef.current = setInterval(() => {
      setSecondsLeft((p) => {
        if (p <= 1) {
          return 0;
        }
        return p - 1;
      });
      if (mode === "focus") setTotalFocusSec((t) => t + 1);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [running, mode]);

  // Transition on completion
  useEffect(() => {
    if (secondsLeft !== 0 || !running) return;
    if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "granted") {
      new Notification("タイマー完了", {
        body: mode === "focus" ? "お疲れさま！休憩しましょう。" : "休憩終了！次のセッションへ。",
      });
    }
    if (mode === "focus") {
      setCompletedFocus((c) => c + 1);
      const next = cycleInSet + 1;
      setCycleInSet(next);
      if (next >= 4) {
        setMode("long");
        setSecondsLeft(longMin * 60);
        setCycleInSet(0);
      } else {
        setMode("short");
        setSecondsLeft(shortMin * 60);
      }
    } else {
      setMode("focus");
      setSecondsLeft(focusMin * 60);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  const toggle = () => {
    if (!running && typeof window !== "undefined" && "Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
    setRunning((r) => !r);
  };

  const reset = () => {
    setRunning(false);
    setMode("focus");
    setSecondsLeft(focusMin * 60);
    setCycleInSet(0);
  };

  const resetStats = () => {
    setCompletedFocus(0);
    setTotalFocusSec(0);
  };

  const mm = Math.floor(secondsLeft / 60).toString().padStart(2, "0");
  const ss = (secondsLeft % 60).toString().padStart(2, "0");
  const totalMin = Math.floor(totalFocusSec / 60);

  const modeLabel = mode === "focus" ? "集中" : mode === "short" ? "短い休憩" : "長い休憩";
  const modeColor =
    mode === "focus" ? "text-red-500" : mode === "short" ? "text-green-500" : "text-blue-500";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>集中タイマー（ポモドーロ拡張版）</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">集中タイマー（ポモドーロ拡張版）</h1>
      <p className="text-muted mb-8">
        4セッションごとに長休憩を挟むポモドーロ拡張タイマー。累計集中時間の統計機能付き。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div className="text-center">
          <p className={`text-sm font-bold mb-2 ${modeColor}`}>{modeLabel}モード</p>
          <div className="text-7xl font-mono font-bold tracking-tight">
            {mm}:{ss}
          </div>
          <p className="text-xs text-muted mt-2">
            セット進行: {cycleInSet} / 4（4回目は長休憩）
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={toggle}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            {running ? "一時停止" : "スタート"}
          </button>
          <button
            onClick={reset}
            className="border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:border-primary transition-colors"
          >
            リセット
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div>
            <label className="block text-xs text-muted mb-1">集中（分）</label>
            <input
              type="number"
              min={1}
              value={focusMin}
              onChange={(e) => {
                const v = Math.max(1, parseInt(e.target.value) || 1);
                setFocusMin(v);
                if (mode === "focus" && !running) setSecondsLeft(v * 60);
              }}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-muted mb-1">短休憩（分）</label>
            <input
              type="number"
              min={1}
              value={shortMin}
              onChange={(e) => setShortMin(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-muted mb-1">長休憩（分）</label>
            <input
              type="number"
              min={1}
              value={longMin}
              onChange={(e) => setLongMin(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full border border-card-border rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="bg-background rounded-xl p-4 grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{completedFocus}</div>
            <div className="text-xs text-muted">完了セッション</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{totalMin}分</div>
            <div className="text-xs text-muted">累計集中時間</div>
          </div>
          <div className="col-span-2 text-center">
            <button
              onClick={resetStats}
              className="text-xs text-muted underline hover:text-primary"
            >
              統計をリセット
            </button>
          </div>
        </div>
      </div>

      <section className="mt-10 bg-card-bg border border-card-border rounded-xl p-5">
        <h2 className="text-base font-bold mb-2">リモートワークの作業効率を上げたい方へ</h2>
        <p className="text-sm text-muted mb-3">
          ポモドーロに加えて、良い環境・ツールを揃えると集中力は劇的に変わります。在宅勤務で使えるツールをまとめました。
        </p>
        <Link
          href="/guide/remote-work-tools"
          className="inline-block bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          リモートワーク快適化ガイドを見る →
        </Link>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-bold mb-3">ポモドーロ拡張の考え方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>25分集中→5分休憩を1セットとし、4セットごとに15分の長休憩を入れると脳の疲労が回復しやすくなります。</p>
          <p>集中時間・休憩時間は自由にカスタマイズ可能。タブがバックグラウンドでも通知でお知らせします。</p>
        </div>
      </section>

      <AffiliateSection slug="focus-timer-extended" category="日常ツール" />
      <RelatedTools currentSlug="focus-timer-extended" category="日常ツール" />
    </div>
  );
}
