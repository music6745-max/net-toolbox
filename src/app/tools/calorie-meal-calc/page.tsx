"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [items, setItems] = useState([
    { name: "ご飯(1杯)", cal: 252 },
    { name: "味噌汁", cal: 40 },
    { name: "焼き魚", cal: 200 },
    { name: "サラダ", cal: 30 },
  ]);
  const total = items.reduce((s, i) => s + i.cal, 0);
  const update = (idx: number, f: "name"|"cal", v: string) => {
    const n = [...items]; if(f==="cal") n[idx]={...n[idx],cal:parseInt(v)||0}; else n[idx]={...n[idx],name:v}; setItems(n);
  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>食事カロリー計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">食事カロリー合計計算ツール</h1>
      <p className="text-muted mb-8">食べたものとカロリーを入力して1食分の合計カロリーを計算。ダイエット管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3">
        {items.map((it,i) => (
          <div key={i} className="flex gap-2 items-center">
            <input type="text" value={it.name} onChange={e=>update(i,"name",e.target.value)} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm" />
            <input type="number" value={it.cal} onChange={e=>update(i,"cal",e.target.value)} className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm text-right" />
            <span className="text-xs text-muted">kcal</span>
            <button onClick={()=>setItems(items.filter((_,idx)=>idx!==i))} className="text-red-500 text-xs px-2">×</button>
          </div>
        ))}
        <button onClick={()=>setItems([...items,{name:"",cal:0}])} className="text-sm text-primary hover:underline">+ 食品を追加</button>
        <div className="bg-primary/10 rounded-lg p-4 text-center mt-4"><div className="text-xs text-muted mb-1">合計カロリー</div><div className="text-2xl font-bold text-primary">{total} kcal</div></div>
      </div>
      <ToolFAQSection
        toolName="食事カロリー計算"
        howTo={[
          "食品名とカロリー（kcal）を入力する",
          "「＋ 食品を追加」ボタンで項目を追加できる",
          "1食・1日・1週間分など合計カロリーを確認する",
          "食事記録アプリと組み合わせて、継続的なカロリー管理を行う",
        ]}
        faqs={[
          {
            question: "1日の目安カロリーは？",
            answer: "成人男性：1800〜2400kcal（座り仕事1800・普通の活動量2200・活動的2400）、成人女性：1400〜2000kcal（座り仕事1400・普通の活動量1700・活動的2000）。ダイエット時は基礎代謝以下にしない範囲で-500kcal／日、体重1kg減に7200kcalのマイナスが必要で月1〜2kg減が健康的なペースです。",
          },
          {
            question: "主要食品のカロリー一覧は？",
            answer: "ご飯1杯（150g）252kcal・食パン6枚切り1枚158kcal・鶏胸肉100g116kcal・卵1個80kcal・サラダチキン1枚120kcal・納豆1パック80kcal・バナナ1本86kcal・ゆで卵1個80kcal・サラダ油大さじ1 110kcal・ビール350ml 140kcal・焼酎グラス1杯150kcal。概算値として活用ください。",
          },
          {
            question: "カロリーだけで痩せますか？",
            answer: "カロリー収支は減量の最重要要素ですが、タンパク質・炭水化物・脂質のPFCバランス（P 15〜20%・F 20〜30%・C 50〜60%）も重要。同じ1500kcalでも高タンパク質（体重×1.5g以上）なら筋肉量維持＆基礎代謝キープ、過度な糖質制限は急な体重減の反面リバウンドしやすい特徴があります。",
          },
          {
            question: "外食時のカロリー計算は？",
            answer: "ファミレス・カフェ・ファストフードは公式サイトやメニュー表にカロリー記載があります。目安：牛丼並320g 635kcal・ラーメン1杯500〜700kcal・ハンバーガー250〜500kcal・パスタ1食600〜1000kcal。外食時は記載値を参照、自炊分と合算で1日の合計を管理しましょう。",
          },
        ]}
      />
      <AffiliateSection slug="calorie-meal-calc" category="日常ツール" />
      <RelatedTools currentSlug="calorie-meal-calc" category="日常ツール" />
    </div>
  );
}
