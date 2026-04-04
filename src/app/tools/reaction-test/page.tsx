"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

type Phase = "idle" | "waiting" | "ready" | "clicked" | "toosoon";

const MAX_ATTEMPTS = 5;

export default function ReactionTestPage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [lastTime, setLastTime] = useState<number | null>(null);
  const [times, setTimes] = useState<number[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startRef = useRef<number>(0);

  const startWaiting = useCallback(() => {
    setPhase("waiting");
    setLastTime(null);
    const delay = 1500 + Math.random() * 3500;
    timerRef.current = setTimeout(() => {
      setPhase("ready");
      startRef.current = Date.now();
    }, delay);
  }, []);

  const handleClick = () => {
    if (phase === "idle" || phase === "clicked" || phase === "toosoon") {
      if (times.length < MAX_ATTEMPTS) {
        startWaiting();
      }
      return;
    }

    if (phase === "waiting") {
      if (timerRef.current) clearTimeout(timerRef.current);
      setPhase("toosoon");
      return;
    }

    if (phase === "ready") {
      const elapsed = Date.now() - startRef.current;
      setLastTime(elapsed);
      const newTimes = [...times, elapsed];
      setTimes(newTimes);
      setPhase("clicked");
    }
  };

  const reset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setPhase("idle");
    setTimes([]);
    setLastTime(null);
  };

  const avg = times.length > 0 ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : null;
  const best = times.length > 0 ? Math.min(...times) : null;
  const worst = times.length > 0 ? Math.max(...times) : null;
  const finished = times.length >= MAX_ATTEMPTS;

  const getBgColor = () => {
    switch (phase) {
      case "idle":
      case "clicked":
        return "bg-card-bg";
      case "waiting":
        return "bg-red-500";
      case "ready":
        return "bg-green-500";
      case "toosoon":
        return "bg-orange-400";
    }
  };

  const getMessage = () => {
    if (finished && phase !== "waiting" && phase !== "ready") {
      return "テスト終了！結果をご確認ください。";
    }
    switch (phase) {
      case "idle":
        return "クリックしてテスト開始";
      case "waiting":
        return "待ってください...";
      case "ready":
        return "今すぐクリック！";
      case "clicked":
        return times.length < MAX_ATTEMPTS ? "クリックして次へ" : "テスト終了！";
      case "toosoon":
        return "早すぎました！クリックして再試行";
    }
  };

  const getTextColor = () => {
    if (phase === "ready" || phase === "waiting" || phase === "toosoon") return "text-white";
    return "";
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>反応速度テスト</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">反応速度テストツール</h1>
      <p className="text-muted mb-8">
        画面が緑色に変わったらすぐにクリック！5回の反応時間を計測します。
      </p>

      {/* メインエリア */}
      <div
        onClick={!finished || phase === "waiting" || phase === "ready" ? handleClick : undefined}
        className={`${getBgColor()} border border-card-border rounded-xl p-10 text-center cursor-pointer select-none transition-colors duration-100 min-h-48 flex flex-col items-center justify-center gap-3`}
      >
        <p className={`text-xl font-bold ${getTextColor()}`}>{getMessage()}</p>
        {phase === "clicked" && lastTime !== null && (
          <p className={`text-4xl font-bold text-primary`}>{lastTime} ms</p>
        )}
        {phase !== "idle" && phase !== "waiting" && phase !== "ready" && (
          <p className="text-sm text-muted">
            {times.length} / {MAX_ATTEMPTS} 回完了
          </p>
        )}
      </div>

      {/* 結果 */}
      {times.length > 0 && (
        <div className="mt-6 bg-card-bg border border-card-border rounded-xl p-5">
          <h2 className="font-semibold mb-4">記録</h2>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-background rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-primary">{avg} ms</div>
              <div className="text-xs text-muted mt-1">平均</div>
            </div>
            <div className="bg-background rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-green-500">{best} ms</div>
              <div className="text-xs text-muted mt-1">最速</div>
            </div>
            <div className="bg-background rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-red-500">{worst} ms</div>
              <div className="text-xs text-muted mt-1">最遅</div>
            </div>
          </div>
          <div className="space-y-1">
            {times.map((t, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="text-muted w-8">{i + 1}回目</span>
                <div className="flex-1 bg-background rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full"
                    style={{ width: `${Math.min(100, (t / 800) * 100)}%` }}
                  />
                </div>
                <span className="font-mono w-16 text-right">{t} ms</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {(finished || times.length > 0) && (
        <div className="mt-4 text-center">
          <button
            onClick={reset}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            リセット
          </button>
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">反応速度テストの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. クリックしてテストを開始します。画面が赤になり、待機状態になります。</p>
          <p>2. 画面が緑色に変わったら、できるだけ素早くクリックします。</p>
          <p>3. 赤い間にクリックすると「早すぎ」となります。やり直してください。</p>
          <p>4. 5回計測後、平均・最速・最遅が表示されます。</p>
          <p>一般的な反応速度の目安: 150〜200ms=良好、200〜300ms=普通、300ms以上=改善の余地あり。</p>
        </div>
      </section>
    </div>
  );
}
