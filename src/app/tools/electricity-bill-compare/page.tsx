"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [kwh, setKwh] = useState("300");
  const [ampere, setAmpere] = useState("30");

  const k = parseFloat(kwh) || 0;
  const a = parseInt(ampere) || 0;
  const basicCharge: Record<number, number> = { 10: 311, 15: 467, 20: 623, 30: 935, 40: 1247, 50: 1559, 60: 1870 };
  const base = basicCharge[a] || 935;

  // 従量料金(東京電力従量電灯B 2026年目安)
  let usage = 0;
  if (k <= 120) usage = k * 30;
  else if (k <= 300) usage = 120 * 30 + (k - 120) * 36.6;
  else usage = 120 * 30 + 180 * 36.6 + (k - 300) * 40.69;

  const fuelAdj = k * 3.5; // 燃料費調整(概算)
  const renewable = k * 3.49; // 再エネ賦課金
  const total = base + usage + fuelAdj + renewable;

  const loopdenki = total * 0.92; // Looopでんき概算(8%安)
  const saving = total - loopdenki;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>電気料金シミュレーション</span></nav>
      <h1 className="text-2xl font-bold mb-2">電気料金シミュレーション（東京電力比較）</h1>
      <p className="text-muted mb-8">月間使用量とアンペア数から電気代を概算。新電力との比較も。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">月間使用量(kWh)</label><input type="number" value={kwh} onChange={e => setKwh(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">契約アンペア</label>
            <select value={ampere} onChange={e => setAmpere(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
              {[10,15,20,30,40,50,60].map(v => <option key={v} value={v}>{v}A</option>)}
            </select>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-muted">基本料金({a}A)</span><span>¥{Math.round(base).toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted">従量料金</span><span>¥{Math.round(usage).toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted">燃料費調整(概算)</span><span>¥{Math.round(fuelAdj).toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted">再エネ賦課金</span><span>¥{Math.round(renewable).toLocaleString()}</span></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">東京電力(概算)</div><div className="text-lg font-bold">¥{Math.round(total).toLocaleString()}</div></div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">新電力(概算)</div><div className="text-lg font-bold text-green-600">¥{Math.round(loopdenki).toLocaleString()}</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月の節約額</div><div className="text-xl font-bold text-primary">¥{Math.round(saving).toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted">※ 2026年度の概算値です。実際の料金は電力会社・地域・時期で変動します。</p>
      </div>
      <ToolFAQSection
        toolName="電気料金シミュレーション"
        howTo={[
          "月間使用量（kWh）を入力（電気代請求書から）",
          "契約アンペア（10〜60A）を選択",
          "東京電力と新電力の料金比較、月の節約額表示",
          "乗換え判断の参考に",
        ]}
        faqs={[
          {
            question: "新電力への乗換えメリットは？",
            answer: "Looopでんき・楽天でんき・エネチェンジ等の新電力で10〜15%削減が標準。月1.5万円なら年2〜3万円節約、オンラインで5分で契約、停電リスクも同等（送配電は東京電力が継続）。2024年以降の電気代高騰時代に、新電力選びは家計改善の必須施策です。",
          },
          {
            question: "契約アンペアの見直しは？",
            answer: "30A→20Aに下げると基本料金年3,700円節約。ただし同時使用家電の容量不足でブレーカー落ちのリスク、エアコン＋電子レンジ＋IHで20A超過の可能性大。家族構成・使用家電で判断、単身30A・夫婦30〜40A・4人家族40〜50Aが標準、無理な減アンペアは避けるべきです。",
          },
          {
            question: "オール電化と都市ガスどっち？",
            answer: "オール電化：深夜電力で給湯・暖房、月光熱費1.5〜2.5万円。都市ガス併用：調理・給湯がガスで火力強い、月光熱費2〜3万円。太陽光発電併用でオール電化が最強、初期投資200〜300万円で10年で元取れる。新築時はオール電化＋太陽光＋蓄電池の三種の神器検討推奨です。",
          },
          {
            question: "節電のコツは？",
            answer: "①エアコン設定温度1℃変更で10%節約（夏28℃・冬20℃）②LED化（白熱電球の1/6）③待機電力カット（こまめなプラグ抜き）④冷蔵庫温度「中」（強より20%減）⑤古い家電買い替え（10年前機種より30〜50%省エネ）。全実践で月3,000〜5,000円の節約、年3.6〜6万円の効果。",
          },
        ]}
      />
      <AffiliateSection slug="electricity-bill-compare" category="日常ツール" />
      <RelatedTools currentSlug="electricity-bill-compare" category="日常ツール" />
    </div>
  );
}
