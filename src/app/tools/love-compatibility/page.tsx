"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="名前で相性診断"
        howTo={[
          "あなたの名前を入力",
          "お相手の名前を入力",
          "相性スコア（0〜100%）＋コメントが表示",
          "飲み会・合コン・ドキドキの前の話題作りに",
        ]}
        faqs={[
          {
            question: "このツールの計算方法は？",
            answer: "2人の名前の文字コードからハッシュ値を算出、それを0〜100に正規化した数値。同じ2人なら常に同じ結果、エンタメ要素として楽しむのが目的。科学的根拠はなし、恋愛成就の参考にはなりませんが、雑談ネタ・アイスブレイクには効果的です。",
          },
          {
            question: "婚活アプリのマッチングは違うの？",
            answer: "全く違う。婚活アプリ（ペアーズ・Tinder・Omiai・マリッシュ等）はAI＋価値観診断＋趣味マッチング＋相性アルゴリズムで科学的に相性計算、登録者数千万人の中からベストマッチを提示。本気の婚活は名前診断ではなく、真面目なマッチングアプリ活用が現実的です。",
          },
          {
            question: "恋愛成就のコツは？",
            answer: "①自分磨き（外見・内面・経済力）②清潔感＋笑顔③共通の趣味・興味で距離を縮める④相手の話を丁寧に聞く⑤小さなサプライズ（誕生日・記念日）⑥LINEは長文・即レス避ける⑦自信を持って誘う。恋愛本・Youtuber学習も効果的、マッチングアプリで練習するのも有効です。",
          },
          {
            question: "結婚相談所の料金相場は？",
            answer: "入会金10〜20万円・月会費1〜2万円・成婚料20〜30万円で、成婚まで計50〜80万円。オーネット・パートナーエージェント・ツヴァイ等大手が定番、30〜40代の成婚率は20〜30%。マッチングアプリ（月2千〜5千円）と比べ高額だが、真剣交際・結婚志向の相手に絞られる特徴があります。",
          },
        ]}
      />
      <AffiliateSection slug="love-compatibility" category="日常ツール" />
      <RelatedTools currentSlug="love-compatibility" category="日常ツール" />
    </div>
  );
}
