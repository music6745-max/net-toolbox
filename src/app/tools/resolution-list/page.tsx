"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Resolution = { name: string; w: number; h: number; ratio: string; category: string };

const resolutions: Resolution[] = [
  { name: "HD (720p)", w: 1280, h: 720, ratio: "16:9", category: "PC" },
  { name: "Full HD (1080p)", w: 1920, h: 1080, ratio: "16:9", category: "PC" },
  { name: "WUXGA", w: 1920, h: 1200, ratio: "16:10", category: "PC" },
  { name: "QHD (1440p)", w: 2560, h: 1440, ratio: "16:9", category: "PC" },
  { name: "WQXGA", w: 2560, h: 1600, ratio: "16:10", category: "PC" },
  { name: "4K UHD", w: 3840, h: 2160, ratio: "16:9", category: "PC" },
  { name: "5K", w: 5120, h: 2880, ratio: "16:9", category: "PC" },
  { name: "8K UHD", w: 7680, h: 4320, ratio: "16:9", category: "PC" },
  { name: "iPhone SE", w: 750, h: 1334, ratio: "16:9", category: "iPhone" },
  { name: "iPhone 14", w: 1170, h: 2532, ratio: "19.5:9", category: "iPhone" },
  { name: "iPhone 14 Pro", w: 1179, h: 2556, ratio: "19.5:9", category: "iPhone" },
  { name: "iPhone 14 Pro Max", w: 1290, h: 2796, ratio: "19.5:9", category: "iPhone" },
  { name: "iPhone 15 Pro", w: 1179, h: 2556, ratio: "19.5:9", category: "iPhone" },
  { name: "iPhone 15 Pro Max", w: 1290, h: 2796, ratio: "19.5:9", category: "iPhone" },
  { name: "iPad (10th gen)", w: 1640, h: 2360, ratio: "3:2", category: "iPad" },
  { name: "iPad Air (M2)", w: 1640, h: 2360, ratio: "3:2", category: "iPad" },
  { name: "iPad Pro 11\"", w: 2388, h: 1668, ratio: "4:3", category: "iPad" },
  { name: "iPad Pro 12.9\"", w: 2048, h: 2732, ratio: "4:3", category: "iPad" },
  { name: "Samsung Galaxy S24", w: 1080, h: 2340, ratio: "19.5:9", category: "Android" },
  { name: "Samsung Galaxy S24 Ultra", w: 1440, h: 3120, ratio: "19.5:9", category: "Android" },
  { name: "Google Pixel 8", w: 1080, h: 2400, ratio: "20:9", category: "Android" },
  { name: "Google Pixel 8 Pro", w: 1344, h: 2992, ratio: "20:9", category: "Android" },
];

const categories = ["PC", "iPhone", "iPad", "Android"];

export default function Page() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? resolutions : resolutions.filter((r) => r.category === filter);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>画面解像度一覧</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">画面解像度一覧</h1>
      <p className="text-muted mb-8">主要なディスプレイ・デバイスの画面解像度を一覧表示。レスポンシブ設計に。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${filter === "all" ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary/30"}`}
          >
            すべて
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${filter === cat ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary/30"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-2 pr-4">デバイス / 規格</th>
                <th className="text-left py-2 pr-4">解像度</th>
                <th className="text-left py-2 pr-4">アスペクト比</th>
                <th className="text-left py-2">カテゴリ</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr key={i} className="border-b border-card-border/50">
                  <td className="py-2 pr-4 font-medium">{r.name}</td>
                  <td className="py-2 pr-4 font-mono text-xs">{r.w} x {r.h}</td>
                  <td className="py-2 pr-4">{r.ratio}</td>
                  <td className="py-2">
                    <span className="text-xs bg-black/5 dark:bg-white/5 rounded px-2 py-0.5">{r.category}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-xs text-muted">合計 {filtered.length} 件</div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>カテゴリボタンで表示をフィルタリングできます。</p>
          <p>レスポンシブデザインやメディアクエリの設定時の参考にご利用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="resolution-list" category="デザイン" />


      <RelatedTools currentSlug="resolution-list" category="デザイン" />
    </div>
  );
}
