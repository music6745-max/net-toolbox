"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const calcScore = () => {
    if (!name1 || !name2) return 0;
    let hash = 0;
    const combined = name1 + name2;
    for (let i = 0; i < combined.length; i++) {
      hash = ((hash << 5) - hash) + combined.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash % 101);
  };
  const score = calcScore();
  const comment = score >= 90 ? "運命の相手かも！" : score >= 70 ? "相性抜群！" : score >= 50 ? "良い関係を築けそう" : score >= 30 ? "努力次第で伸びる" : "正反対だからこそ面白い";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>名前で相性診断</span></nav>
      <h1 className="text-2xl font-bold mb-2">名前で相性診断ツール</h1>
      <p className="text-muted mb-8">2人の名前から相性スコアを算出。※エンタメ目的です。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">あなたの名前</label><input type="text" value={name1} onChange={e => setName1(e.target.value)} placeholder="太郎" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">お相手の名前</label><input type="text" value={name2} onChange={e => setName2(e.target.value)} placeholder="花子" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        {name1 && name2 && (
          <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-lg p-6 text-center mt-4">
            <div className="text-xs text-muted mb-1">相性スコア</div>
            <div className="text-5xl font-bold text-pink-500">{score}%</div>
            <div className="text-sm mt-2 font-medium">{comment}</div>
          </div>
        )}
        <p className="text-xs text-muted mt-2">※ エンタメ目的のツールです。科学的根拠はありません。</p>
      </div>
      <AffiliateSection slug="love-compatibility" category="日常ツール" />
      <RelatedTools currentSlug="love-compatibility" category="日常ツール" />
    </div>
  );
}
