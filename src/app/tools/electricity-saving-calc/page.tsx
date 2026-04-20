"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [current, setCurrent] = useState("12000");
  const [target, setTarget] = useState("10");

  const c = parseFloat(current) || 0;
  const t = parseFloat(target) || 0;
  const saving = c * t / 100;
  const newBill = c - saving;
  const yearlySaving = saving * 12;
  const fiveYearSaving = yearlySaving * 5;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>電気代節約シミュレーション</span></nav>
      <h1 className="text-2xl font-bold mb-2">電気代節約シミュレーション</h1>
      <p className="text-muted mb-8">現在の電気代と節約率から、月・年・5年で節約できる金額を計算。電力会社の乗り換え検討に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">現在の月の電気代(円)</label><input type="number" value={current} onChange={e => setCurrent(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">節約率(%)</label>
          <select value={target} onChange={e => setTarget(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="5">5%(小さな工夫)</option>
            <option value="10">10%(電力会社乗り換え)</option>
            <option value="15">15%(LED+節電意識)</option>
            <option value="20">20%(太陽光発電導入)</option>
            <option value="30">30%(蓄電池併用)</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月の節約額</div><div className="text-lg font-bold">¥{Math.round(saving).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">節約後の月額</div><div className="text-lg font-bold">¥{Math.round(newBill).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間節約額</div><div className="text-xl font-bold text-primary">¥{Math.round(yearlySaving).toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">5年間</div><div className="text-lg font-bold">¥{Math.round(fiveYearSaving).toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="電気代節約シミュレーション"
        howTo={[
          "現在の月の電気代（円）を入力する",
          "目標の節約率（%）を選ぶ（5%〜30%から）",
          "月・年・5年の節約額が自動計算される",
          "対策別の削減効果を比較検討して、実行する施策を選ぶ",
        ]}
        faqs={[
          {
            question: "電力会社乗り換えの節約効果は？",
            answer: "大手電力からネット系新電力（Looopでんき・エネチェンジ・楽天でんき等）への乗り換えで、10〜15%削減が標準的。例：月1.2万円の電気代なら年1.4〜2万円節約。解約手数料なし・手続きはネット完結で10分、即時切替可能。オール電化プラン・時間帯別プランの場合は自分の使い方に合う会社選びが重要です。",
          },
          {
            question: "太陽光発電＋蓄電池の効果は？",
            answer: "太陽光発電5kWh設置で月3〜5千円の電気代削減、蓄電池併用なら月1万円以上削減も。初期投資200〜400万円、補助金50〜100万円活用可、15〜20年で投資回収。ZEH住宅なら補助金＋固定資産税優遇、新築時の導入が最もコスパ良い。オーナーは節電＋売電収入で年30万円以上の恩恵も。",
          },
          {
            question: "節電意識で削減できる範囲は？",
            answer: "①エアコン設定温度を1℃変更（夏28℃・冬20℃）で10%削減②LED化で照明代の80%削減③待機電力削減（家電を完全OFF）で5〜10%削減④冷蔵庫温度「中」設定で20%削減⑤古い家電の更新で30〜50%削減。小さな習慣の積み重ねで年3〜5万円の節約は現実的、長期的効果は10年で30〜50万円に達します。",
          },
          {
            question: "オール電化とガス併用どっちがお得？",
            answer: "戸建て：オール電化が有利（太陽光・エコキュート併用で月1〜3万円の節約）。マンション：ガス併用も選択肢（IHvs ガスコンロの火力差・調理面）。光熱費年間：ガス併用15〜20万円、オール電化＋太陽光：10〜15万円、オール電化のみ：15〜18万円。物件特性に応じて最適化を検討しましょう。",
          },
        ]}
      />
      <AffiliateSection slug="electricity-saving-calc" category="日常ツール" />
      <RelatedTools currentSlug="electricity-saving-calc" category="日常ツール" />
    </div>
  );
}
