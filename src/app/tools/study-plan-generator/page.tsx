"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="学習計画ジェネレーター"
        howTo={[
          "試験日を入力（年月日）",
          "1日の勉強時間（h）を入力",
          "科目を1行1つで入力",
          "残り日数・総学習時間・科目別配分が自動計算",
        ]}
        faqs={[
          {
            question: "試験3ヶ月前の学習計画は？",
            answer: "3ヶ月（90日）×2時間＝180時間。5科目なら各36時間、1日当たり1科目24分。基礎期（1ヶ月）：教科書・基礎問題→応用期（1.5ヶ月）：過去問・応用問題→仕上げ期（0.5ヶ月）：総復習・弱点強化の段階計画が効果的。模試受験で進捗確認、計画修正が合格への鍵です。",
          },
          {
            question: "集中力持続の時間は？",
            answer: "ポモドーロ・テクニック（25分＋5分休憩）が基本、1〜2時間で長い休憩。1日2時間の場合、25分×4セット＋10分休憩×1回＝約2時間。長時間（4〜6時間）の勉強は50分×4セット＋15分休憩等の区切りで、脳疲労を回避しながら効率最大化できます。",
          },
          {
            question: "科目別の時間配分は？",
            answer: "苦手科目に多めの配分（標準の1.5〜2倍）、得意科目は維持程度。配点比重で調整（国公立二次は英数中心、共テは5科目均等）。模試結果から弱点分析→強化科目決定、机上時間の半分を苦手克服に投下が合格ラインへの最短ルートです。",
          },
          {
            question: "おすすめ学習ツールは？",
            answer: "スタディサプリ（月2178円・全教科動画）、Z会（通信教育・添削付き）、Anki（暗記カードアプリ・無料）、Notion（ノート・タスク管理）、YouTube大学（無料動画）、過去問道場（無料過去問）。有料ツールと無料ツール組合せで月5千円以内で質の高い学習環境構築可能です。",
          },
        ]}
      />
      <AffiliateSection slug="study-plan-generator" category="日常ツール" />
      <RelatedTools currentSlug="study-plan-generator" category="日常ツール" />
    </div>
  );
}
