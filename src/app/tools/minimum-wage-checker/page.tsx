"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [pref, setPref] = useState("東京");

  const wages: Record<string, number> = {
    "北海道": 960, "青森": 898, "岩手": 893, "宮城": 923, "秋田": 897,
    "山形": 900, "福島": 900, "茨城": 953, "栃木": 954, "群馬": 935,
    "埼玉": 1078, "千葉": 1076, "東京": 1163, "神奈川": 1162, "新潟": 931,
    "富山": 948, "石川": 933, "福井": 931, "山梨": 938, "長野": 948,
    "岐阜": 950, "静岡": 984, "愛知": 1077, "三重": 973, "滋賀": 967,
    "京都": 1008, "大阪": 1114, "兵庫": 1001, "奈良": 936, "和歌山": 929,
    "鳥取": 900, "島根": 904, "岡山": 933, "広島": 970, "山口": 928,
    "徳島": 896, "香川": 918, "愛媛": 897, "高知": 897, "福岡": 941,
    "佐賀": 900, "長崎": 898, "熊本": 898, "大分": 899, "宮崎": 897,
    "鹿児島": 897, "沖縄": 896,
  };
  const wage = wages[pref] || 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>最低賃金チェック</span></nav>
      <h1 className="text-2xl font-bold mb-2">都道府県別 最低賃金チェッカー</h1>
      <p className="text-muted mb-8">全国の最低賃金を都道府県別に確認。アルバイト・パートの時給の適正チェックに。※2024年10月改定反映</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">都道府県</label>
          <select value={pref} onChange={e => setPref(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            {Object.keys(wages).map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center mt-4">
          <div className="text-xs text-muted mb-1">{pref}の最低賃金</div>
          <div className="text-3xl font-bold text-primary">¥{wage}/時</div>
        </div>
        <p className="text-xs text-muted mt-2">※ 2024年10月改定ベース。最新情報は厚生労働省発表をご確認ください。</p>
      </div>
      <AffiliateSection slug="minimum-wage-checker" category="日常ツール" />
      <RelatedTools currentSlug="minimum-wage-checker" category="日常ツール" />
    </div>
  );
}
