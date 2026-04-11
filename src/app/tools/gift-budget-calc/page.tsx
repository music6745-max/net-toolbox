"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [occasion, setOccasion] = useState("birthday");
  const [relationship, setRelationship] = useState("friend");

  const budgets: Record<string, Record<string, { min: number; max: number; suggest: string }>> = {
    birthday: {
      friend: { min: 2000, max: 5000, suggest: "お菓子・雑貨・コスメ" },
      partner: { min: 5000, max: 30000, suggest: "アクセサリー・ディナー・体験ギフト" },
      parent: { min: 5000, max: 20000, suggest: "カタログギフト・旅行券・健康グッズ" },
      colleague: { min: 1000, max: 3000, suggest: "お菓子・コーヒー・文房具" },
      child: { min: 3000, max: 10000, suggest: "おもちゃ・本・図書カード" },
    },
    wedding: {
      friend: { min: 30000, max: 30000, suggest: "ご祝儀3万円が基本" },
      partner: { min: 0, max: 0, suggest: "自分の結婚式" },
      parent: { min: 50000, max: 100000, suggest: "ご祝儀5〜10万円" },
      colleague: { min: 30000, max: 30000, suggest: "ご祝儀3万円" },
      child: { min: 30000, max: 50000, suggest: "ご祝儀3〜5万円" },
    },
    christmas: {
      friend: { min: 1000, max: 3000, suggest: "お菓子・雑貨" },
      partner: { min: 5000, max: 20000, suggest: "アクセサリー・服・体験" },
      parent: { min: 3000, max: 10000, suggest: "グルメ・健康グッズ" },
      colleague: { min: 500, max: 1500, suggest: "お菓子・ドリンク" },
      child: { min: 3000, max: 10000, suggest: "おもちゃ・ゲーム" },
    },
  };

  const b = budgets[occasion]?.[relationship] || { min: 0, max: 0, suggest: "" };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>プレゼント予算</span></nav>
      <h1 className="text-2xl font-bold mb-2">プレゼント予算の目安ツール</h1>
      <p className="text-muted mb-8">シーン・相手別にプレゼントの予算相場とおすすめカテゴリを表示。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">シーン</label>
          <select value={occasion} onChange={e => setOccasion(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="birthday">誕生日</option>
            <option value="wedding">結婚祝い</option>
            <option value="christmas">クリスマス</option>
          </select>
        </div>
        <div><label className="block text-sm font-medium mb-2">相手</label>
          <select value={relationship} onChange={e => setRelationship(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="friend">友人</option>
            <option value="partner">恋人・配偶者</option>
            <option value="parent">親・親戚</option>
            <option value="colleague">同僚・上司</option>
            <option value="child">子ども</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">予算の目安</div><div className="text-xl font-bold text-primary">¥{b.min.toLocaleString()}〜¥{b.max.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">おすすめ</div><div className="text-sm font-bold">{b.suggest}</div></div>
        </div>
      </div>
      <AffiliateSection slug="gift-budget-calc" category="日常ツール" />
      <RelatedTools currentSlug="gift-budget-calc" category="日常ツール" />
    </div>
  );
}
