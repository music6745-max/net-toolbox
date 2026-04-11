"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [subject, setSubject] = useState("英語");
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState<{subject:string;minutes:number}[]>([]);
  const intervalRef = useRef<NodeJS.Timeout|null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setElapsed(p => p + 1), 1000);
    } else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const stop = () => {
    setRunning(false);
    if (elapsed > 0) setLogs(prev => [...prev, { subject, minutes: Math.round(elapsed / 60) }]);
    setElapsed(0);
  };

  const totalMinutes = logs.reduce((s, l) => s + l.minutes, 0);
  const min = Math.floor(elapsed / 60);
  const sec = elapsed % 60;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>勉強タイマー</span></nav>
      <h1 className="text-2xl font-bold mb-2">勉強時間記録タイマー</h1>
      <p className="text-muted mb-8">科目別に勉強時間を計測・記録。1日の合計学習時間を管理。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">科目</label><input type="text" value={subject} onChange={e => setSubject(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="bg-background rounded-lg p-8 text-center">
          <div className="text-4xl font-bold font-mono">{min.toString().padStart(2,'0')}:{sec.toString().padStart(2,'0')}</div>
        </div>
        <div className="flex gap-3 justify-center">
          {!running ? (
            <button onClick={() => setRunning(true)} className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold">スタート</button>
          ) : (
            <button onClick={stop} className="px-6 py-2 bg-red-500 text-white rounded-lg text-sm font-bold">ストップ＆記録</button>
          )}
          <button onClick={() => { setLogs([]); setElapsed(0); setRunning(false); }} className="px-6 py-2 bg-card-bg border border-card-border rounded-lg text-sm">リセット</button>
        </div>
        {logs.length > 0 && (
          <div className="mt-4 border-t border-card-border pt-4">
            <h3 className="text-sm font-bold mb-2">記録</h3>
            {logs.map((l, i) => <div key={i} className="flex justify-between text-sm"><span>{l.subject}</span><span>{l.minutes}分</span></div>)}
            <div className="flex justify-between text-sm font-bold mt-2 pt-2 border-t border-card-border"><span>合計</span><span>{totalMinutes}分</span></div>
          </div>
        )}
      </div>
      <AffiliateSection slug="study-timer" category="日常ツール" />
      <RelatedTools currentSlug="study-timer" category="日常ツール" />
    </div>
  );
}
