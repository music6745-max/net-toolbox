"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Combo = {
  name: string;
  fiberHouse: number;
  fiberApt: number;
  carrier: string;
  mobileBase: number;
  setDiscountPerLine: number;
};

const combos: Combo[] = [
  { name: "ドコモ光 × ドコモ", fiberHouse: 5720, fiberApt: 4400, carrier: "ドコモ", mobileBase: 7315, setDiscountPerLine: 1100 },
  { name: "auひかり × au", fiberHouse: 5610, fiberApt: 4180, carrier: "au", mobileBase: 7238, setDiscountPerLine: 1100 },
  { name: "ソフトバンク光 × ソフトバンク", fiberHouse: 5720, fiberApt: 4180, carrier: "ソフトバンク", mobileBase: 7238, setDiscountPerLine: 1100 },
  { name: "楽天ひかり × 楽天モバイル", fiberHouse: 5280, fiberApt: 4180, carrier: "楽天", mobileBase: 3278, setDiscountPerLine: 0 },
  { name: "NURO光 × ソフトバンク", fiberHouse: 5200, fiberApt: 2090, carrier: "ソフトバンク", mobileBase: 7238, setDiscountPerLine: 1100 },
];

export default function Page() {
  const [housing, setHousing] = useState<"house" | "apt">("house");
  const [lines, setLines] = useState("2");

  const n = Math.max(1, Math.min(10, parseInt(lines) || 1));

  const results = combos
    .map((c) => {
      const fiber = housing === "house" ? c.fiberHouse : c.fiberApt;
      const mobileTotal = c.mobileBase * n;
      const discount = c.setDiscountPerLine * n;
      const total = fiber + mobileTotal - discount;
      return { ...c, fiber, mobileTotal, discount, total };
    })
    .sort((a, b) => a.total - b.total);
  const cheapest = results[0];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>光回線×スマホセット割シミュレーター</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">光回線×スマホセット割シミュレーター</h1>
      <p className="text-muted mb-8">光回線とスマホをセットで契約した場合の月額・年間トータル通信費を比較します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">住居タイプ</label>
            <select value={housing} onChange={e => setHousing(e.target.value as "house" | "apt")} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="house">戸建て</option>
              <option value="apt">マンション</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">同一キャリアのスマホ回線数</label>
            <input type="number" min="1" max="10" value={lines} onChange={e => setLines(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {results.map((r) => (
            <div key={r.name} className={`rounded-lg p-3 text-sm ${r.name === cheapest.name ? "bg-primary/10 border border-primary/30" : "bg-background"}`}>
              <div className="flex items-center justify-between">
                <span className="font-medium">{r.name}</span>
                <span className={`font-bold ${r.name === cheapest.name ? "text-primary" : ""}`}>¥{r.total.toLocaleString()}/月</span>
              </div>
              <div className="text-xs text-muted mt-1">
                光回線 ¥{r.fiber.toLocaleString()} + スマホ ¥{r.mobileTotal.toLocaleString()}（{n}回線） − セット割 ¥{r.discount.toLocaleString()} ／ 年間 ¥{(r.total * 12).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-muted">
          最安: {cheapest.name}（年間 ¥{(cheapest.total * 12).toLocaleString()}）
        </div>
      </div>

      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link href="/guide/hikari-fiber-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">光回線おすすめ5選を比較</div>
          <p className="text-xs text-muted">NURO・au・ドコモ・SB・楽天を徹底比較 →</p>
        </Link>
        <Link href="/guide/sim-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">格安SIM比較ガイド</div>
          <p className="text-xs text-muted">スマホ単体で更に通信費節約 →</p>
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>住居タイプとスマホ回線数を入力すると、主要な光回線×キャリアの組合せ別に月額トータル通信費を試算・ランキング表示します。料金は2026年春の公式料金に基づく概算です。</p>
        </div>
      </section>

      <AffiliateSection slug="broadband-comparison-tool" category="日常ツール" />
      <RelatedTools currentSlug="broadband-comparison-tool" category="日常ツール" />
    </div>
  );
}
