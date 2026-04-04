"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

function calcTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: diff };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds, total: diff };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownPage() {
  const [inputValue, setInputValue] = useState("");
  const [label, setLabel] = useState("");
  const [target, setTarget] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [error, setError] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    setError("");
    if (!inputValue) {
      setError("日時を入力してください");
      return;
    }
    const d = new Date(inputValue);
    if (isNaN(d.getTime())) {
      setError("有効な日時を入力してください");
      return;
    }
    if (d.getTime() <= Date.now()) {
      setError("未来の日時を入力してください");
      return;
    }
    setTarget(d);
    setTimeLeft(calcTimeLeft(d));
  };

  const reset = () => {
    setTarget(null);
    setTimeLeft(null);
    setInputValue("");
    setLabel("");
    setError("");
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!target) return;
    intervalRef.current = setInterval(() => {
      const tl = calcTimeLeft(target);
      setTimeLeft(tl);
      if (tl.total <= 0) {
        clearInterval(intervalRef.current!);
      }
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [target]);

  const finished = timeLeft !== null && timeLeft.total <= 0;

  // Default datetime value: tomorrow same time
  const defaultDatetime = () => {
    const d = new Date(Date.now() + 24 * 60 * 60 * 1000);
    d.setSeconds(0, 0);
    return d.toISOString().slice(0, 16);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>カウントダウンタイマー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">カウントダウンタイマー</h1>
      <p className="text-muted mb-8">
        目標の日時を入力すると、残り時間をリアルタイムで表示します。締め切りやイベントの管理に活用してください。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">目標日時</label>
            <input
              type="datetime-local"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              min={new Date().toISOString().slice(0, 16)}
              placeholder={defaultDatetime()}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">ラベル（任意）</label>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="例: プロジェクト締め切り"
              maxLength={50}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <div className="flex gap-3 mt-5">
          <button
            onClick={start}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            スタート
          </button>
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors"
          >
            リセット
          </button>
        </div>

        {timeLeft !== null && !finished && (
          <div className="mt-8">
            {label && (
              <p className="text-center text-sm font-medium text-primary mb-3">{label}</p>
            )}
            <div className="grid grid-cols-4 gap-3 text-center">
              {[
                { value: timeLeft.days, unit: "日" },
                { value: timeLeft.hours, unit: "時間" },
                { value: timeLeft.minutes, unit: "分" },
                { value: timeLeft.seconds, unit: "秒" },
              ].map(({ value, unit }) => (
                <div key={unit} className="bg-background rounded-xl p-4">
                  <p className="text-4xl font-bold font-mono text-primary">{pad(value)}</p>
                  <p className="text-xs text-muted mt-1">{unit}</p>
                </div>
              ))}
            </div>
            {target && (
              <p className="text-center text-xs text-muted mt-4">
                目標: {target.toLocaleString("ja-JP")}
              </p>
            )}
          </div>
        )}

        {finished && (
          <div className="mt-8 text-center bg-background rounded-xl p-6">
            <p className="text-3xl font-bold text-primary mb-2">🎉 時間になりました！</p>
            {label && <p className="text-muted text-sm">{label}</p>}
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 「目標日時」に残り時間を数えたい日時を入力します。</p>
          <p>2. 任意でラベル（イベント名など）を入力します。</p>
          <p>3. 「スタート」ボタンを押すと、残り日数・時間・分・秒がリアルタイムで更新されます。</p>
          <p>4. 目標日時を過ぎると「時間になりました！」と表示されます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
