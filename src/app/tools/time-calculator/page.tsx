"use client";
import { useState } from "react";
import Link from "next/link";

type TimeEntry = { h: string; m: string; s: string; op: "+" | "-" };

function parseSeconds(h: string, m: string, s: string): number {
  return (parseInt(h, 10) || 0) * 3600 + (parseInt(m, 10) || 0) * 60 + (parseInt(s, 10) || 0);
}

function formatTime(totalSeconds: number): { sign: string; h: number; m: number; s: number; formatted: string } {
  const sign = totalSeconds < 0 ? "-" : "";
  const abs = Math.abs(totalSeconds);
  const h = Math.floor(abs / 3600);
  const m = Math.floor((abs % 3600) / 60);
  const s = abs % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return { sign, h, m, s, formatted: `${sign}${h}時間${pad(m)}分${pad(s)}秒` };
}

export default function TimeCalculatorPage() {
  const [entries, setEntries] = useState<TimeEntry[]>([
    { h: "", m: "", s: "", op: "+" },
    { h: "", m: "", s: "", op: "+" },
  ]);
  const [result, setResult] = useState<ReturnType<typeof formatTime> | null>(null);
  const [error, setError] = useState("");

  const updateEntry = (i: number, field: keyof TimeEntry, val: string) => {
    setEntries((prev) => prev.map((e, idx) => idx === i ? { ...e, [field]: val } : e));
    setResult(null);
  };

  const addRow = () => setEntries((prev) => [...prev, { h: "", m: "", s: "", op: "+" }]);

  const removeRow = (i: number) => setEntries((prev) => prev.filter((_, idx) => idx !== i));

  const calculate = () => {
    for (const e of entries) {
      const m = parseInt(e.m, 10);
      const s = parseInt(e.s, 10);
      if ((!isNaN(m) && (m < 0 || m > 59)) || (!isNaN(s) && (s < 0 || s > 59))) {
        setError("分・秒は0〜59の範囲で入力してください"); setResult(null); return;
      }
    }
    setError("");
    let total = 0;
    entries.forEach((e, i) => {
      const secs = parseSeconds(e.h, e.m, e.s);
      total += i === 0 ? secs : e.op === "+" ? secs : -secs;
    });
    setResult(formatTime(total));
  };

  const reset = () => { setEntries([{ h: "", m: "", s: "", op: "+" }, { h: "", m: "", s: "", op: "+" }]); setResult(null); setError(""); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>時間計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">時間計算ツール</h1>
      <p className="text-muted mb-8">複数の時間（時・分・秒）の足し算・引き算ができます。行を追加して複数まとめて計算も可能です。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-3 mb-4">
          {entries.map((e, i) => (
            <div key={i} className="flex items-center gap-2">
              {i > 0 ? (
                <select
                  value={e.op}
                  onChange={(ev) => updateEntry(i, "op", ev.target.value as "+" | "-")}
                  className="w-14 border border-card-border rounded-lg px-2 py-2.5 text-sm text-center focus:outline-none bg-card-bg"
                >
                  <option value="+">＋</option>
                  <option value="-">－</option>
                </select>
              ) : (
                <div className="w-14 text-center text-sm text-muted font-medium py-2.5">開始</div>
              )}
              <input type="number" min="0" value={e.h} onChange={(ev) => updateEntry(i, "h", ev.target.value)} placeholder="時" className="w-16 border border-card-border rounded-lg px-2 py-2.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <span className="text-muted text-sm">:</span>
              <input type="number" min="0" max="59" value={e.m} onChange={(ev) => updateEntry(i, "m", ev.target.value)} placeholder="分" className="w-16 border border-card-border rounded-lg px-2 py-2.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <span className="text-muted text-sm">:</span>
              <input type="number" min="0" max="59" value={e.s} onChange={(ev) => updateEntry(i, "s", ev.target.value)} placeholder="秒" className="w-16 border border-card-border rounded-lg px-2 py-2.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/30" />
              {entries.length > 2 && (
                <button onClick={() => removeRow(i)} className="text-muted hover:text-red-500 text-lg px-1 transition-colors">×</button>
              )}
            </div>
          ))}
        </div>

        <button onClick={addRow} className="text-sm text-primary hover:underline mb-6 block">＋ 行を追加</button>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button onClick={calculate} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
            計算する
          </button>
          <button onClick={reset} className="px-5 py-2.5 rounded-lg text-sm font-medium border border-card-border hover:bg-background transition-colors">
            リセット
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-background rounded-xl p-6 text-center">
            <p className="text-sm text-muted mb-2">計算結果</p>
            <p className={`text-3xl font-bold ${result.sign ? "text-red-500" : "text-primary"}`}>{result.formatted}</p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: "時間", value: `${result.sign}${result.h}` },
                { label: "分", value: `${result.sign}${result.m}` },
                { label: "秒", value: `${result.sign}${result.s}` },
              ].map((item) => (
                <div key={item.label} className="bg-card-bg border border-card-border rounded-lg p-3">
                  <div className="text-xl font-bold text-primary">{item.value}</div>
                  <div className="text-xs text-muted mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">時間計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 各行に時間・分・秒を入力します。2行目以降は「＋（足す）」か「－（引く）」を選択できます。</p>
          <p>2. 「＋ 行を追加」で3つ以上の時間をまとめて計算できます。</p>
          <p>3. 「計算する」をクリックすると合計時間が表示されます。</p>
          <p>作業時間の集計や、動画・音声の合計時間を計算したいときに便利です。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>
    </div>
  );
}
