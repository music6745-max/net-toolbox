"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="勉強時間記録タイマー"
        howTo={[
          "科目名を入力",
          "「スタート」で計測開始",
          "「ストップ＆記録」で時間を自動記録",
          "複数科目の合計時間を集計＆可視化",
        ]}
        faqs={[
          {
            question: "1日の勉強時間の目安は？",
            answer: "高校生：平日2〜4時間、休日6〜8時間が標準。大学受験生：平日4〜6時間、休日10〜12時間。資格試験：1〜3時間（継続重視）。社会人の学び直し：平日1時間、休日3時間。重要なのは質＋継続、6時間×30日より2時間×90日の方が記憶定着・理解度UPの傾向あります。",
          },
          {
            question: "科目別の時間配分は？",
            answer: "試験比重・苦手度で配分調整。大学受験（文系）：英語3割・国語3割・社会2割・数学2割。理系：数学3割・理科3割・英語3割・その他1割。資格試験は頻出分野重視（試験過去問分析）、弱点強化に時間多く投下、逆に得意分野は維持程度で効率最大化です。",
          },
          {
            question: "集中力を保つコツは？",
            answer: "①ポモドーロ・テクニック（25分＋5分休憩）②勉強場所を変える（カフェ・図書館）③スマホを別室or機内モード④音楽（クラシック・カフェBGM）⑤質の良い睡眠（7〜8時間）⑥軽い運動（朝散歩20分）。脳科学的に最適化された勉強法で、同じ時間で2倍の成果を出せます。",
          },
          {
            question: "学習記録アプリは？",
            answer: "Studyplus（勉強記録特化・無料）、Forest（集中力向上・300円）、Toggl Track（時間管理）、Notion（ノート＋時間管理）。本ツールは簡易版、本格運用はStudyplusがおすすめ、SNS機能で仲間と切磋琢磨＆モチベ維持、受験生の90%が使っている定番アプリです。",
          },
        ]}
      />
      <AffiliateSection slug="study-timer" category="日常ツール" />
      <RelatedTools currentSlug="study-timer" category="日常ツール" />
    </div>
  );
}
