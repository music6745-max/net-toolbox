"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

const levels = [
  { db: 0, name: "無音", example: "真空", color: "#22c55e" },
  { db: 20, name: "ささやき", example: "木の葉の音", color: "#22c55e" },
  { db: 30, name: "静か", example: "深夜の郊外", color: "#22c55e" },
  { db: 40, name: "図書館", example: "静かなオフィス", color: "#84cc16" },
  { db: 50, name: "静かな会話", example: "エアコン室外機", color: "#84cc16" },
  { db: 60, name: "普通の会話", example: "テレビ・掃除機", color: "#eab308" },
  { db: 70, name: "やや騒がしい", example: "幹線道路沿い", color: "#f59e0b" },
  { db: 80, name: "騒がしい", example: "地下鉄車内・パチンコ店", color: "#ef4444" },
  { db: 90, name: "非常にうるさい", example: "カラオケ・工場", color: "#ef4444" },
  { db: 100, name: "聴覚に影響", example: "電車通過時", color: "#dc2626" },
  { db: 110, name: "苦痛", example: "ライブ会場前列", color: "#dc2626" },
  { db: 120, name: "聴覚障害リスク", example: "ジェット機近く", color: "#991b1b" },
];

export default function Page() {
  const [input, setInput] = useState("60");
  const db = parseInt(input) || 0;
  const closest = levels.reduce((prev, curr) => Math.abs(curr.db - db) < Math.abs(prev.db - db) ? curr : prev);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>騒音レベル一覧</span></nav>
      <h1 className="text-2xl font-bold mb-2">騒音レベル(dB)早見表</h1>
      <p className="text-muted mb-8">デシベル(dB)値から騒音レベルと身近な例を確認。防音対策の参考に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">デシベル値(dB)</label><input type="number" value={input} onChange={e => setInput(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="rounded-lg p-4 text-center" style={{backgroundColor: closest.color + '20'}}><div className="text-xs text-muted mb-1">{db}dB ≒</div><div className="text-xl font-bold" style={{color: closest.color}}>{closest.name}</div><div className="text-sm text-muted mt-1">{closest.example}</div></div>
        <div className="mt-4 space-y-1">
          {levels.map(l => (
            <div key={l.db} className={`flex items-center gap-3 rounded-lg p-2 text-xs ${db >= l.db && db < (l.db + 10) ? 'bg-primary/10 font-bold' : ''}`}>
              <span className="w-10 text-right font-mono">{l.db}dB</span>
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: l.color}} />
              <span>{l.name}</span>
              <span className="text-muted ml-auto">{l.example}</span>
            </div>
          ))}
        </div>
      </div>
      <ToolFAQSection
        toolName="騒音レベル早見表"
        howTo={[
          "デシベル値（dB）を入力",
          "騒音レベルと身近な例が表示",
          "騒音トラブル・引越し物件選び・防音対策の参考に",
          "スマホの騒音計アプリで実測値と比較",
        ]}
        faqs={[
          {
            question: "日常の騒音目安は？",
            answer: "図書館40dB、普通の会話60dB、掃除機70dB、地下鉄車内80dB、カラオケ90dB、ジェット機近く120dB。60dB以下が「静か」、70dB超は「うるさい」と感じる境界。長時間（8時間）85dB以上の騒音環境は聴覚障害リスク上昇、100dB超は1時間未満でも危険です。",
          },
          {
            question: "マンション騒音問題の基準は？",
            answer: "環境基準：住宅地昼間55dB・夜間45dB以下が推奨。マンションで上下左右の生活音が45〜60dB相当、子供の走り回る音・掃除機・楽器が苦情対象。管理規約の確認＋防音マット・防音カーテン・防音工事で対策、ひどい場合は管理会社経由の注意喚起が現実的です。",
          },
          {
            question: "防音対策の方法は？",
            answer: "①防音カーテン（2〜5千円で10dB減）②防音マット・カーペット（床振動対策）③吸音パネル（壁面・カラオケ室）④二重窓（サッシ工事10〜50万円で10〜20dB減）⑤防音ドア。プロの防音工事は100〜500万円、賃貸なら剥がせる防音グッズが現実的な選択肢です。",
          },
          {
            question: "静かな住環境選びのコツは？",
            answer: "①幹線道路・線路・高速道路から100m以上離れた物件②工場・商業施設の近く避ける③最上階or低層階角部屋（上階・左右の生活音少ない）④内見で時間帯を変えて2回訪問（朝夜で違う）⑤周辺騒音レベル測定（スマホアプリ）。50dB以下を基準に物件選びするのがおすすめです。",
          },
        ]}
      />
      <AffiliateSection slug="noise-level-guide" category="日常ツール" />
      <RelatedTools currentSlug="noise-level-guide" category="日常ツール" />
    </div>
  );
}
