"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [bloodType, setBloodType] = useState("A");

  const data: Record<string, { good: string[]; avoid: string[]; exercise: string; personality: string }> = {
    A: { good: ["野菜中心", "豆腐・大豆製品", "魚", "そば", "ベリー類"], avoid: ["肉の食べ過ぎ", "乳製品", "小麦(多量)"], exercise: "ヨガ・ウォーキング", personality: "几帳面・思いやり" },
    B: { good: ["乳製品", "卵", "緑黄色野菜", "ラム肉", "バナナ"], avoid: ["鶏肉", "トウモロコシ", "そば"], exercise: "テニス・ハイキング", personality: "マイペース・好奇心" },
    O: { good: ["赤身肉", "魚", "ほうれん草", "ブロッコリー", "海藻"], avoid: ["小麦", "乳製品(多量)", "キャベツ"], exercise: "ランニング・格闘技", personality: "リーダーシップ・大胆" },
    AB: { good: ["豆腐", "魚", "乳製品(適量)", "フルーツ", "玄米"], avoid: ["赤身肉(多量)", "カフェイン", "アルコール"], exercise: "太極拳・サイクリング", personality: "合理的・二面性" },
  };
  const d = data[bloodType];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>血液型ダイエット</span></nav>
      <h1 className="text-2xl font-bold mb-2">血液型ダイエット診断ツール</h1>
      <p className="text-muted mb-8">血液型から合うとされる食事・運動・性格傾向を表示。※エンタメ目的です。科学的根拠はありません。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">血液型</label>
          <div className="flex gap-3">
            {["A", "B", "O", "AB"].map(t => (
              <button key={t} onClick={() => setBloodType(t)} className={`px-6 py-3 rounded-lg font-bold text-sm border ${bloodType === t ? 'bg-primary text-white border-primary' : 'bg-card-bg border-card-border'}`}>{t}型</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4"><div className="text-xs font-bold text-green-700 dark:text-green-300 mb-2">おすすめ食材</div>{d.good.map(g => <div key={g} className="text-sm">✓ {g}</div>)}</div>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4"><div className="text-xs font-bold text-red-700 dark:text-red-300 mb-2">控えめにしたい食材</div>{d.avoid.map(a => <div key={a} className="text-sm">✗ {a}</div>)}</div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4"><div className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">おすすめ運動</div><div className="text-sm">{d.exercise}</div></div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4"><div className="text-xs font-bold text-purple-700 dark:text-purple-300 mb-2">性格傾向</div><div className="text-sm">{d.personality}</div></div>
        </div>
        <p className="text-xs text-muted mt-2">※ エンタメ目的です。血液型ダイエットには科学的根拠はありません。</p>
      </div>
      <AffiliateSection slug="blood-type-diet" category="日常ツール" />
      <RelatedTools currentSlug="blood-type-diet" category="日常ツール" />
    </div>
  );
}
