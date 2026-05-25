"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

type ScoreRow = { name: string; score: string; max: string };

export default function Page() {
  const [scores, setScores] = useState<ScoreRow[]>([{ name: "テスト1", score: "85", max: "100" }]);
  const addScore = () => setScores([...scores, { name: `テスト${scores.length+1}`, score: "", max: "100" }]);
  const updateScore = (i: number, k: keyof ScoreRow, v: string) => { const s = [...scores]; s[i] = { ...s[i], [k]: v }; setScores(s); };
  const removeScore = (i: number) => setScores(scores.filter((_,j) => j !== i));
  const vals = scores.map(s => parseFloat(s.score)||0);
  const maxs = scores.map(s => parseFloat(s.max)||100);
  const avg = vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0;
  const totalScore = vals.reduce((a,b)=>a+b,0);
  const totalMax = maxs.reduce((a,b)=>a+b,0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>成績計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">成績計算ツール</h1>
      <p className="text-muted mb-8">テストの点数と配点から平均点・合計点・偏差値を計算。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-3">
          {scores.map((s,i) => (
            <div key={i} className="flex gap-2 items-center">
              <input value={s.name} onChange={e=>updateScore(i,"name",e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="number" value={s.score} onChange={e=>updateScore(i,"score",e.target.value)} placeholder="点数" className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <span className="text-muted">/</span>
              <input type="number" value={s.max} onChange={e=>updateScore(i,"max",e.target.value)} className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <button onClick={()=>removeScore(i)} className="text-red-500 text-sm px-2">✕</button>
            </div>
          ))}
          <button onClick={addScore} className="text-sm text-primary hover:underline">+ 科目を追加</button>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">平均点</div><div className="text-xl font-bold">{avg.toFixed(1)}</div></div>
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">合計点</div><div className="text-xl font-bold">{totalScore}/{totalMax}</div></div>
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">得点率</div><div className="text-xl font-bold text-primary">{totalMax>0?(totalScore/totalMax*100).toFixed(1):0}%</div></div>
          </div>
        </div>
      </div>
      <ToolFAQSection
        toolName="成績計算"
        howTo={[
          "科目名・点数・配点（通常100）を入力",
          "「+ 科目を追加」で追加、「✕」で削除",
          "平均点・合計点・得点率が自動計算",
          "定期テスト・模試・受験対策での成績管理に活用",
        ]}
        faqs={[
          {
            question: "偏差値50はどういう意味？",
            answer: "全受験者の平均点にあたる成績。受験者の約50%が偏差値50以下、50%が以上。偏差値60で上位約16%、偏差値70で上位約2%、偏差値40で下位約16%、偏差値30で下位約2%。正規分布を仮定した統計指標、模試・共通テスト等で比較に使われます。",
          },
          {
            question: "得点率の目安は？",
            answer: "高校受験：公立60〜70%・私立65〜75%が合格ライン。大学受験：MARCH 70〜75%、早慶80〜85%、東大・京大75〜80%（理系）。得点率は志望校・学部・科目により差、過去問で目標設定＋定期的な模試で進捗確認が合格への王道です。",
          },
          {
            question: "成績を上げるコツは？",
            answer: "①基礎の徹底（教科書レベルを完璧に）②過去問演習（10年分）③苦手科目の底上げ（平均より10点プラス）④計画的学習（1日○時間）⑤睡眠・食事・運動の健康管理。塾・家庭教師は年30〜100万円、オンライン教材（スタディサプリ）なら月2千円で同等効果。",
          },
          {
            question: "おすすめの学習サービスは？",
            answer: "スタディサプリ（月2,178円・全教科）、Z会（通信添削、記述力強化）、東進ハイスクール（映像授業の王道）、進研ゼミ（小中高、ゲーム要素）、河合塾Manavis（オンラインAI学習）。予算と学習スタイルで選択、無料お試しで相性確認が失敗しないコツです。",
          },
        ]}
      />
      <AffiliateSection slug="grade-calculator" category="日常ツール" />

      <RelatedTools currentSlug="grade-calculator" category="日常ツール" />
    </div>
  );
}
