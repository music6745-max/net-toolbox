"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

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
      <AffiliateSection slug="rain-probability-outfit" category="日常ツール" />
      <RelatedTools currentSlug="rain-probability-outfit" category="日常ツール" />
    </div>
  );
}
