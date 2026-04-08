"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [plan, setPlan] = useState("1g");
  const [housing, setHousing] = useState("house");
  const [family, setFamily] = useState("2");
  const [carrier, setCarrier] = useState("none");

  const basePrices: Record<string, { house: number; apt: number; label: string }> = {
    "1g": { house: 5200, apt: 4000, label: "標準プラン（下り最大1Gbps）" },
    "2g": { house: 5700, apt: 4500, label: "高速プラン（下り最大2Gbps）" },
    "10g": { house: 6800, apt: 5800, label: "超高速プラン（下り最大10Gbps）" },
  };
  const discountPerLine: Record<string, number> = { none: 0, docomo: 1100, au: 1100, softbank: 1100, rakuten: 0 };
  const carrierLabel: Record<string, string> = { none: "割引なし", docomo: "ドコモ光セット割", au: "auスマートバリュー", softbank: "おうち割 光セット", rakuten: "楽天モバイル同時利用" };

  const base = housing === "house" ? basePrices[plan].house : basePrices[plan].apt;
  const fam = Math.max(1, Math.min(5, parseInt(family) || 1));
  const discount = discountPerLine[carrier] * fam;
  const monthly = Math.max(0, base - discount);
  const yearly = monthly * 12;
  const threeYear = monthly * 36;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>光回線料金シミュレーター</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">光回線料金シミュレーター</h1>
      <p className="text-muted mb-8">通信速度プラン・住居タイプ・家族人数・スマホキャリア割引から月額料金を試算します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">通信速度プラン</label>
            <select value={plan} onChange={e => setPlan(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="1g">標準（1Gbps）</option>
              <option value="2g">高速（2Gbps）</option>
              <option value="10g">超高速（10Gbps）</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">住居タイプ</label>
            <select value={housing} onChange={e => setHousing(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="house">戸建て</option>
              <option value="apt">マンション</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">家族人数（同じキャリアの回線数）</label>
            <input type="number" min="1" max="5" value={family} onChange={e => setFamily(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">スマホキャリア割引</label>
            <select value={carrier} onChange={e => setCarrier(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="none">割引なし</option>
              <option value="docomo">ドコモ</option>
              <option value="au">au</option>
              <option value="softbank">ソフトバンク</option>
              <option value="rakuten">楽天モバイル</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">月額（割引後）</div>
            <div className="text-xl font-bold text-primary">¥{monthly.toLocaleString()}</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">年間コスト</div>
            <div className="text-xl font-bold">¥{yearly.toLocaleString()}</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-xs text-muted mb-1">3年総額</div>
            <div className="text-xl font-bold">¥{threeYear.toLocaleString()}</div>
          </div>
        </div>

        <div className="mt-4 text-xs text-muted">
          基本料金 ¥{base.toLocaleString()} − セット割 ¥{discount.toLocaleString()}（{carrierLabel[carrier]} × {fam}回線）
        </div>
      </div>

      <section className="mt-8">
        <Link href="/guide/hikari-fiber-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">光回線おすすめ5選を徹底比較</div>
          <p className="text-xs text-muted">NURO光・auひかり・ドコモ光・ソフトバンク光・楽天ひかりを料金／速度／キャンペーンで比較するガイドを見る →</p>
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>速度プラン・住居タイプ・家族人数・スマホキャリア割引を入力すると、月額・年間・3年総額の概算を表示します。料金は業界の平均相場に基づく試算です。</p>
        </div>
      </section>

      <AffiliateSection slug="fiber-fee-simulator" category="日常ツール" />
      <RelatedTools currentSlug="fiber-fee-simulator" category="日常ツール" />
    </div>
  );
}
