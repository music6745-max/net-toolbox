"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="旅行持ち物チェックリスト"
        howTo={[
          "カテゴリ（貴重品・衣類・洗面用具・便利グッズ）から必要な持ち物を確認",
          "チェックボックスでパッキング進捗を管理",
          "進捗バーで全体の達成率を確認",
          "旅行前日・当日の最終確認に活用",
        ]}
        faqs={[
          {
            question: "海外旅行の必需品は？",
            answer: "①パスポート（残存期間6ヶ月以上）②航空券・ホテル予約確認書③現金（目安1日1万円×日数）＋クレカ（JCB・Visa・Master）④海外Wi-Fior ローミング SIM⑤電源変換プラグ⑥海外旅行保険（クレカ付帯 or 別途加入）⑦常備薬＋処方箋⑧コピー（パスポート・保険証書）。忘れると致命的な項目です。",
          },
          {
            question: "海外旅行保険は必要？",
            answer: "絶対必要。医療費は米国で1日入院50〜100万円、手術なら数百〜千万円超。クレジットカード付帯保険（ゴールド以上）で基本カバー、補償不足なら別途加入（1週間2,000〜5,000円）。損保ジャパン・AIG・東京海上日動のオンライン契約で5分完結、旅行前日でも加入可能です。",
          },
          {
            question: "機内持込の制限は？",
            answer: "国際線：液体100ml以下・1L袋にまとめる、モバイルバッテリー160Wh以下、ライター1個のみ。国内線：液体1L以下、刃物類NG、電子タバコは機内持込のみ。航空会社により違いあり、出発前に公式サイト確認が安全。禁止品は持込失敗すると時間ロス大です。",
          },
          {
            question: "旅行費用を節約するコツは？",
            answer: "①航空券：Skyscanner・Googleフライトで比較、平日発→週末帰りで安い②ホテル：Booking.com・Agoda・楽天トラベルの比較③クレカ：JAL・ANAマイルで特典航空券④保険：クレカ付帯活用⑤現地通貨：空港両替は高い、海外ATM直引出しが得（手数料込みで最安）。海外旅行は年1〜3万円の節約可能です。",
          },
        ]}
      />
      <AffiliateSection slug="packing-checklist" category="日常ツール" />
      <RelatedTools currentSlug="packing-checklist" category="日常ツール" />
    </div>
  );
}
