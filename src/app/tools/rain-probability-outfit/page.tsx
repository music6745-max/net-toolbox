"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [temp, setTemp] = useState("22");
  const [rain, setRain] = useState("30");

  const t = parseFloat(temp) || 0;
  const r = parseFloat(rain) || 0;

  const outfit = (() => {
    if (t >= 30) return { top: "半袖Tシャツ", bottom: "ショートパンツ/スカート", extra: "日焼け止め・帽子", icon: "☀️" };
    if (t >= 25) return { top: "半袖シャツ", bottom: "チノパン/スカート", extra: "薄手の羽織り(冷房対策)", icon: "🌤️" };
    if (t >= 20) return { top: "長袖カットソー", bottom: "デニム/チノパン", extra: "薄手のカーディガン", icon: "🌥️" };
    if (t >= 15) return { top: "ニット/スウェット", bottom: "パンツ", extra: "ジャケット/ライトアウター", icon: "🍂" };
    if (t >= 10) return { top: "厚手ニット", bottom: "暖かいパンツ", extra: "コート", icon: "🧥" };
    if (t >= 5) return { top: "ヒートテック+厚手ニット", bottom: "裏起毛パンツ", extra: "ダウンジャケット+マフラー", icon: "❄️" };
    return { top: "防寒インナー+セーター", bottom: "裏起毛パンツ", extra: "ダウン+手袋+マフラー+帽子", icon: "🥶" };
  })();

  const rainAdvice = r >= 70 ? "傘必須。レインブーツ推奨。" : r >= 40 ? "折りたたみ傘を持っていきましょう。" : r >= 20 ? "念のため折りたたみ傘を。" : "傘は不要でしょう。";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>服装提案</span></nav>
      <h1 className="text-2xl font-bold mb-2">気温・降水確率から今日の服装を提案</h1>
      <p className="text-muted mb-8">気温と降水確率を入力すると適切な服装を提案。毎朝の服選びに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">気温(℃)</label><input type="number" value={temp} onChange={e => setTemp(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">降水確率(%)</label><input type="number" value={rain} onChange={e => setRain(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <div className="bg-primary/5 rounded-lg p-5 mt-4">
          <div className="text-2xl mb-3">{outfit.icon}</div>
          <div className="space-y-2 text-sm">
            <p><span className="font-bold">トップス:</span> {outfit.top}</p>
            <p><span className="font-bold">ボトムス:</span> {outfit.bottom}</p>
            <p><span className="font-bold">プラス:</span> {outfit.extra}</p>
            <p className="mt-3 text-primary font-bold">{rainAdvice}</p>
          </div>
        </div>
      </div>
      <ToolFAQSection
        toolName="服装提案"
        howTo={[
          "天気予報から気温（℃）を入力",
          "降水確率（%）を入力",
          "トップス・ボトムス・追加アイテムの提案が表示",
          "毎朝の服選びを時短、持ち歩き傘判断にも",
        ]}
        faqs={[
          {
            question: "気温と服装の目安は？",
            answer: "30℃以上：半袖Tシャツ、25〜30℃：半袖シャツ（冷房対策で薄手羽織り）、20〜25℃：長袖カットソー＋薄手カーディガン、15〜20℃：ニット＋ジャケット、10〜15℃：厚手ニット＋コート、5〜10℃：ヒートテック＋ダウン、5℃未満：防寒完全装備。季節の変わり目は朝晩の温度差10℃以上もあるため注意が必要です。",
          },
          {
            question: "降水確率での傘判断は？",
            answer: "70%以上：傘必須＋レインブーツ推奨、40〜70%：折りたたみ傘携帯、20〜40%：念のため折りたたみ傘、20%未満：不要。通勤通学の1〜2時間なら30%以上で傘持参、ゴルフ・アウトドアは50%超で中止検討が目安。天気予報アプリ（Yahoo天気・ウェザーニュース）で時間別確率確認が鉄則です。",
          },
          {
            question: "春秋の服装選びは難しい？",
            answer: "難しい。春（3〜5月）・秋（10〜11月）は朝晩10℃・日中22℃等の温度差が大きく、重ね着が正解。レイヤード（Tシャツ＋シャツ＋薄手ジャケット）で脱ぎ着調整、カバンに羽織り1枚追加。クールビズ・ウォームビズ期の服装選びはこのツールで気温確認が便利です。",
          },
          {
            question: "ビジネスカジュアルの基準は？",
            answer: "男性：シャツ＋チノパン／スラックス＋革靴、ジャケット有無は場面次第。女性：ブラウス＋スカート／パンツ＋パンプス、カーディガン羽織り。Tシャツ・ジーンズ・スニーカーは避ける、夏でもクールビズで「ノージャケット・ノーネクタイ」が限度。取引先訪問時はスーツ携帯が安全です。",
          },
        ]}
      />
      <AffiliateSection slug="rain-probability-outfit" category="日常ツール" />
      <RelatedTools currentSlug="rain-probability-outfit" category="日常ツール" />
    </div>
  );
}
