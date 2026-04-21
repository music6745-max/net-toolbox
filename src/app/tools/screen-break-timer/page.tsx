"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [workMin, setWorkMin] = useState(25);
  const [breakMin, setBreakMin] = useState(5);
  const [remaining, setRemaining] = useState(25 * 60);
  const [isWork, setIsWork] = useState(true);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout|null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining(prev => {
          if (prev <= 1) {
            setIsWork(w => !w);
            return isWork ? breakMin * 60 : workMin * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running, isWork, workMin, breakMin]);

  const min = Math.floor(remaining / 60);
  const sec = remaining % 60;
  const reset = () => { setRunning(false); setIsWork(true); setRemaining(workMin * 60); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>画面休憩タイマー</span></nav>
      <h1 className="text-2xl font-bold mb-2">画面休憩タイマー（20-20-20ルール対応）</h1>
      <p className="text-muted mb-8">PC作業中の眼精疲労を防ぐ休憩タイマー。作業時間と休憩時間をカスタマイズ可能。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">作業(分)</label><input type="number" value={workMin} onChange={e=>{setWorkMin(parseInt(e.target.value)||1); if(!running) setRemaining((parseInt(e.target.value)||1)*60);}} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">休憩(分)</label><input type="number" value={breakMin} onChange={e=>setBreakMin(parseInt(e.target.value)||1)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className={`rounded-lg p-8 text-center ${isWork ? 'bg-blue-50 dark:bg-blue-900/40' : 'bg-green-50 dark:bg-green-900/40'}`}>
          <div className="text-sm font-medium mb-2">{isWork ? '作業中' : '休憩中'}</div>
          <div className="text-5xl font-bold font-mono">{min.toString().padStart(2,'0')}:{sec.toString().padStart(2,'0')}</div>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={()=>setRunning(!running)} className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold">{running ? '一時停止' : 'スタート'}</button>
          <button onClick={reset} className="px-6 py-2 bg-card-bg border border-card-border rounded-lg text-sm">リセット</button>
        </div>
      </div>
      <ToolFAQSection
        toolName="画面休憩タイマー"
        howTo={[
          "作業時間（デフォルト25分）と休憩時間（5分）を設定",
          "スタートで作業タイマー開始",
          "時間経過後、自動で休憩モードに切替",
          "1日4〜8ポモドーロで生産性＋健康を両立",
        ]}
        faqs={[
          {
            question: "ポモドーロ・テクニックとは？",
            answer: "25分作業＋5分休憩を1セット、4セットごとに15〜30分の長い休憩。1980年代イタリアのフランチェスコ・シリロ考案、集中力持続＋疲労軽減の科学的手法。プログラマー・ライター・学生に人気、連続3時間作業より、25分×6セットの方が生産性30〜50%UP実証されています。",
          },
          {
            question: "20-20-20ルールとは？",
            answer: "20分ごとに20フィート（6m）先を20秒見る習慣。米国眼科学会推奨の眼精疲労予防法。PC作業の連続で起こるVDT症候群（眼の疲れ・肩こり・頭痛）を防ぐ、スマホ・ゲーム時代の必須習慣。本ツールで20分タイマー設定→意識的な遠方視で、目の健康を守れます。",
          },
          {
            question: "作業時間はどれくらいが最適？",
            answer: "集中力持続時間は個人差あるが、25〜50分が一般的な限界。25分（ポモドーロ）が最も標準、45分（学校の授業時間）や50分（長め）の選択も。タイマー管理で「区切り」を意識し、疲れる前に休憩するのが鍵、集中と休憩の切替で1日のパフォーマンス2倍向上可能です。",
          },
          {
            question: "おすすめの休憩方法は？",
            answer: "①立ち上がって軽いストレッチ（デスク体操）②遠方を見る（目のリフレッシュ）③水を飲む・トイレ④窓を開けて深呼吸⑤軽食（ナッツ・フルーツ）⑥スマホ・SNS避ける（新たな情報ストレス）。休憩中のスマホは眼と脳の疲労を悪化、アナログな休憩が最も効果的です。",
          },
        ]}
      />
      <AffiliateSection slug="screen-break-timer" category="日常ツール" />
      <RelatedTools currentSlug="screen-break-timer" category="日常ツール" />
    </div>
  );
}
