"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

interface Stage {
  id: number;
  name: string;
  minutes: number;
}

type TimerState = "idle" | "running" | "paused" | "finished";

const DEFAULT_STAGES: Stage[] = [
  { id: 1, name: "自己紹介・アイスブレイク", minutes: 5 },
  { id: 2, name: "メインインタビュー", minutes: 20 },
  { id: 3, name: "質疑応答", minutes: 5 },
];

export default function InterviewTimerPage() {
  const [stages, setStages] = useState<Stage[]>(DEFAULT_STAGES);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [remaining, setRemaining] = useState(DEFAULT_STAGES[0].minutes * 60);
  const [timerState, setTimerState] = useState<TimerState>("idle");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const nextId = useRef(4);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (timerState === "idle" && stages[currentStageIndex]) {
      setRemaining(stages[currentStageIndex].minutes * 60);
    }
  }, [stages, currentStageIndex, timerState]);

  useEffect(() => {
    if (timerState === "running") {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            // Auto-advance or finish
            setCurrentStageIndex((ci) => {
              if (ci + 1 < stages.length) {
                const next = ci + 1;
                setRemaining(stages[next].minutes * 60);
                return next;
              } else {
                setTimerState("finished");
                return ci;
              }
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clear();
    }
    return clear;
  }, [timerState, stages, clear]);

  const start = () => {
    if (timerState === "idle") {
      setCurrentStageIndex(0);
      setRemaining(stages[0].minutes * 60);
    }
    setTimerState("running");
  };
  const pause = () => setTimerState("paused");
  const resume = () => setTimerState("running");
  const reset = () => {
    clear();
    setTimerState("idle");
    setCurrentStageIndex(0);
    setRemaining(stages[0].minutes * 60);
  };
  const nextStage = () => {
    if (currentStageIndex + 1 < stages.length) {
      const next = currentStageIndex + 1;
      setCurrentStageIndex(next);
      setRemaining(stages[next].minutes * 60);
    } else {
      setTimerState("finished");
    }
  };

  const addStage = () => {
    setStages((prev) => [...prev, { id: nextId.current++, name: "ステージ名", minutes: 5 }]);
  };

  const removeStage = (id: number) => {
    if (stages.length <= 1) return;
    setStages((prev) => prev.filter((s) => s.id !== id));
  };

  const updateStage = (id: number, field: keyof Stage, value: string | number) => {
    setStages((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const currentStage = stages[currentStageIndex];
  const totalMinutes = stages.reduce((sum, s) => sum + s.minutes, 0);
  const completedMinutes = stages.slice(0, currentStageIndex).reduce((sum, s) => sum + s.minutes, 0);
  const overallProgress = timerState === "idle" ? 0 :
    (completedMinutes * 60 + (currentStage ? currentStage.minutes * 60 - remaining : 0)) / (totalMinutes * 60);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const timeStr = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const stageProgress = currentStage ? remaining / (currentStage.minutes * 60) : 0;
  const isLast = remaining <= 60 && timerState !== "idle";
  const isWarn = remaining <= currentStage?.minutes * 30 && remaining > 60 && timerState !== "idle";

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted flex items-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <span className="text-primary">面接タイマーツール</span>
        </nav>

        <h1 className="text-2xl font-bold text-primary mb-2">面接タイマーツール</h1>
        <p className="text-muted mb-8">面接の各フェーズごとに時間を管理します。</p>

        {/* Stage Settings */}
        {timerState === "idle" && (
          <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
            <h2 className="text-lg font-semibold text-primary mb-4">ステージ設定</h2>
            <div className="space-y-3">
              {stages.map((stage, i) => (
                <div key={stage.id} className="flex items-center gap-3">
                  <span className="text-xs text-muted w-5 text-center shrink-0">{i + 1}</span>
                  <input
                    type="text"
                    value={stage.name}
                    onChange={(e) => updateStage(stage.id, "name", e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-background border border-card-border text-primary focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                  <input
                    type="number"
                    value={stage.minutes}
                    onChange={(e) => updateStage(stage.id, "minutes", Math.max(1, Number(e.target.value)))}
                    min={1}
                    max={60}
                    className="w-16 px-2 py-2 rounded-lg bg-background border border-card-border text-primary focus:outline-none focus:border-primary transition-colors text-sm text-center"
                  />
                  <span className="text-xs text-muted shrink-0">分</span>
                  <button
                    onClick={() => removeStage(stage.id)}
                    disabled={stages.length <= 1}
                    className="text-muted hover:text-red-500 transition-colors disabled:opacity-30 text-lg shrink-0"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={addStage}
                className="text-sm px-4 py-2 bg-background border border-card-border text-muted hover:text-primary hover:border-primary rounded-lg transition-colors"
              >
                + ステージを追加
              </button>
              <span className="text-sm text-muted">合計: <span className="text-primary font-bold">{totalMinutes}分</span></span>
            </div>
          </div>
        )}

        {/* Timer Display */}
        <div className={`border border-card-border rounded-xl p-6 mb-6 transition-colors duration-500 ${
          timerState === "finished" ? "bg-green-600" :
          isLast ? "bg-red-600" :
          isWarn ? "bg-yellow-500" : "bg-card-bg"
        }`}>
          {currentStage && timerState !== "idle" && (
            <div className="text-center mb-2">
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                timerState === "finished" || isLast || isWarn ? "bg-white/20 text-white" : "bg-background text-muted"
              }`}>
                {timerState === "finished" ? "面接終了" : `ステージ ${currentStageIndex + 1}/${stages.length}：${currentStage.name}`}
              </span>
            </div>
          )}
          <div className={`text-7xl font-bold font-mono text-center my-4 ${
            timerState === "finished" || isLast || isWarn ? "text-white" : "text-primary"
          }`}>
            {timerState === "finished" ? "00:00" : timeStr}
          </div>
          {timerState === "finished" && (
            <p className="text-center text-white font-bold text-lg">全ステージ完了！</p>
          )}

          {/* Stage progress bar */}
          {timerState !== "idle" && timerState !== "finished" && (
            <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/70 rounded-full transition-all duration-1000"
                style={{ width: `${stageProgress * 100}%` }}
              />
            </div>
          )}

          {/* Overall progress */}
          {timerState !== "idle" && (
            <div className="mt-3">
              <div className={`text-xs mb-1 ${timerState === "finished" || isLast || isWarn ? "text-white/70" : "text-muted"}`}>
                全体進捗
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white/50 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(overallProgress * 100, 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
          <div className="flex flex-wrap justify-center gap-3">
            {timerState === "idle" && (
              <button onClick={start} className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-colors">
                スタート
              </button>
            )}
            {timerState === "running" && (
              <>
                <button onClick={pause} className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl transition-colors">
                  一時停止
                </button>
                <button onClick={nextStage} disabled={currentStageIndex >= stages.length - 1} className="px-6 py-3 bg-background border border-card-border text-muted hover:text-primary hover:border-primary font-bold rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                  次のステージ →
                </button>
              </>
            )}
            {timerState === "paused" && (
              <>
                <button onClick={resume} className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-colors">
                  再開
                </button>
                <button onClick={nextStage} disabled={currentStageIndex >= stages.length - 1} className="px-6 py-3 bg-background border border-card-border text-muted hover:text-primary hover:border-primary font-bold rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                  次のステージ →
                </button>
              </>
            )}
            {(timerState !== "idle") && (
              <button onClick={reset} className="px-6 py-3 bg-background border border-card-border text-muted hover:text-primary hover:border-primary font-bold rounded-xl transition-colors">
                リセット
              </button>
            )}
          </div>
        </div>

        {/* Stage List */}
        {timerState !== "idle" && (
          <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
            <h2 className="text-sm font-semibold text-primary mb-3">ステージ一覧</h2>
            <div className="space-y-2">
              {stages.map((stage, i) => (
                <div
                  key={stage.id}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg border transition-colors ${
                    i === currentStageIndex && timerState !== "finished"
                      ? "bg-primary/10 border-primary"
                      : i < currentStageIndex
                      ? "bg-background border-card-border opacity-50"
                      : "bg-background border-card-border"
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    i < currentStageIndex ? "bg-green-500 text-white" :
                    i === currentStageIndex && timerState !== "finished" ? "bg-primary text-white" :
                    "bg-card-border text-muted"
                  }`}>
                    {i < currentStageIndex ? "✓" : i + 1}
                  </span>
                  <span className="flex-1 text-sm text-primary">{stage.name}</span>
                  <span className="text-xs text-muted shrink-0">{stage.minutes}分</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 使い方 */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">使い方</h2>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>ステージ名と時間を設定します（デフォルト：自己紹介5分・メイン20分・質疑応答5分）</li>
            <li>ステージの追加・削除も自由にできます</li>
            <li>「スタート」ボタンで最初のステージから開始します</li>
            <li>ステージが終わると自動で次のステージに進みます</li>
            <li>「次のステージ」ボタンで手動で進めることもできます</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
