"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [exam, setExam] = useState("2026-07-01");
  const [hoursDay, setHoursDay] = useState("2");
  const [subjects, setSubjects] = useState("英語\n数学\n国語\n理科\n社会");

  const today = new Date();
  const examDate = new Date(exam);
  const daysLeft = Math.max(0, Math.ceil((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
  const h = parseFloat(hoursDay) || 0;
  const totalHours = daysLeft * h;
  const subList = subjects.split("\n").map(s => s.trim()).filter(s => s);
  const hoursPerSubject = subList.length > 0 ? totalHours / subList.length : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>学習計画ジェネレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">学習計画ジェネレーター</h1>
      <p className="text-muted mb-8">試験日・1日の勉強時間・科目から残り時間と科目別配分を自動計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">試験日</label><input type="date" value={exam} onChange={e => setExam(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">1日の勉強時間(h)</label><input type="number" step="0.5" value={hoursDay} onChange={e => setHoursDay(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div><label className="block text-sm font-medium mb-2">科目(1行1科目)</label><textarea value={subjects} onChange={e => setSubjects(e.target.value)} rows={4} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm resize-y" /></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">残り日数</div><div className="text-xl font-bold text-primary">{daysLeft}日</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">総学習時間</div><div className="text-lg font-bold">{totalHours}時間</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">科目数</div><div className="text-lg font-bold">{subList.length}科目</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">1科目あたり</div><div className="text-lg font-bold">{Math.round(hoursPerSubject)}時間</div></div>
        </div>
        {subList.length > 0 && (
          <div className="mt-4 space-y-2">
            <h3 className="text-sm font-bold">科目別配分</h3>
            {subList.map(s => (
              <div key={s} className="flex justify-between bg-background rounded-lg p-3 text-sm">
                <span>{s}</span>
                <span className="font-bold">{Math.round(hoursPerSubject)}時間（1日{(hoursPerSubject / daysLeft * 60).toFixed(0)}分）</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <AffiliateSection slug="study-plan-generator" category="日常ツール" />
      <RelatedTools currentSlug="study-plan-generator" category="日常ツール" />
    </div>
  );
}
