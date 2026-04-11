"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const categories = [
    { name: "貴重品", items: ["パスポート", "航空券/予約確認書", "財布・現金", "クレジットカード", "スマホ・充電器", "モバイルバッテリー", "保険証"] },
    { name: "衣類", items: ["下着(日数分+1)", "靴下", "Tシャツ/トップス", "パンツ/ボトムス", "パジャマ", "上着/ジャケット", "水着(必要時)"] },
    { name: "洗面用具", items: ["歯ブラシ・歯磨き粉", "シャンプー・リンス", "洗顔料", "タオル", "髭剃り", "コンタクト用品", "常備薬"] },
    { name: "便利グッズ", items: ["折りたたみ傘", "エコバッグ", "ジップロック", "アイマスク・耳栓", "変換プラグ(海外)", "ガイドブック", "筆記用具"] },
  ];
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (item: string) => setChecked(prev => ({ ...prev, [item]: !prev[item] }));
  const totalItems = categories.reduce((s, c) => s + c.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>旅行持ち物チェックリスト</span></nav>
      <h1 className="text-2xl font-bold mb-2">旅行持ち物チェックリスト</h1>
      <p className="text-muted mb-8">旅行前の持ち物チェックに。カテゴリ別で忘れ物を防止。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-bold">進捗: {checkedCount}/{totalItems}</span>
          <button onClick={() => setChecked({})} className="text-xs text-red-500">リセット</button>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-6"><div className="bg-primary h-3 rounded-full transition-all" style={{width: `${totalItems > 0 ? checkedCount / totalItems * 100 : 0}%`}} /></div>
        {categories.map(cat => (
          <div key={cat.name} className="mb-4">
            <h3 className="text-sm font-bold mb-2">{cat.name}</h3>
            <div className="space-y-1">
              {cat.items.map(item => (
                <label key={item} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-primary/5 rounded px-2 py-1">
                  <input type="checkbox" checked={!!checked[item]} onChange={() => toggle(item)} className="rounded" />
                  <span className={checked[item] ? "line-through text-muted" : ""}>{item}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <AffiliateSection slug="packing-checklist" category="日常ツール" />
      <RelatedTools currentSlug="packing-checklist" category="日常ツール" />
    </div>
  );
}
