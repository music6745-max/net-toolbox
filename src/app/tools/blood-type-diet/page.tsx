"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="血液型ダイエット診断"
        howTo={[
          "A・B・O・ABから自分の血液型を選ぶ",
          "おすすめ食材・控えたい食材・運動・性格傾向が表示される",
          "エンタメ要素として参考にし、実際のダイエットはバランス重視",
          "科学的な減量は消費カロリー>摂取カロリーの原則が最強",
        ]}
        faqs={[
          {
            question: "血液型ダイエットに科学的根拠は？",
            answer: "科学的根拠なし。ピーター・ダダモ博士（米国）が1996年に提唱した理論ですが、その後の大規模研究では血液型と食事の相性に有意な関係は見つかっていません。楽しいエンタメとして試してみるのはOKですが、本格的なダイエットはカロリー収支・栄養バランスが本質です。",
          },
          {
            question: "血液型別の性格分類は当たる？",
            answer: "科学的には否定されている。日本で1970年代以降流行した「血液型性格診断」は、その後の大規模統計調査で否定されました。ただし文化として楽しむ分には問題なし、性格を固定化せず参考程度に受け止めるのが賢明です。",
          },
          {
            question: "科学的なダイエット方法は？",
            answer: "①消費カロリー>摂取カロリー（1日300〜500kcalマイナス）②PFCバランス（タンパク質15〜20%・脂質20〜30%・炭水化物50〜60%）③有酸素運動＋筋トレの組合せ④十分な睡眠（7〜8時間）⑤ストレス管理。血液型問わず、全人類に通用する原則があります。",
          },
          {
            question: "健康的な減量ペースは？",
            answer: "月1〜2kg、年10〜20kgが安全。1kg減量に約7200kcalのマイナスが必要、月1kg減なら1日240kcalマイナス（30分ウォーキング＋食事制限）。月5kg以上の急減量は筋肉量低下＋リバウンドリスク、スローペースが結局は早道です。",
          },
        ]}
      />
      <AffiliateSection slug="blood-type-diet" category="日常ツール" />
      <RelatedTools currentSlug="blood-type-diet" category="日常ツール" />
    </div>
  );
}
