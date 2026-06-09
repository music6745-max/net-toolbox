"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const RATIOS = [
  {
    ratio: "16:9", decimal: "1.778", category: "横長・ワイド",
    uses: "フルHD動画、YouTube、TV、PC画面",
    resolutions: ["1280×720 (HD)", "1920×1080 (Full HD)", "2560×1440 (QHD)", "3840×2160 (4K UHD)"],
  },
  {
    ratio: "4:3", decimal: "1.333", category: "横長・標準",
    uses: "旧来のTV・モニター、プレゼン資料",
    resolutions: ["640×480 (VGA)", "800×600 (SVGA)", "1024×768 (XGA)", "1600×1200 (UXGA)"],
  },
  {
    ratio: "21:9", decimal: "2.333", category: "超横長・シネマスコープ",
    uses: "映画シネマスコープ、ウルトラワイドモニター",
    resolutions: ["2560×1080 (UWFHD)", "3440×1440 (UWQHD)", "5120×2160 (UW5K)"],
  },
  {
    ratio: "1:1", decimal: "1.000", category: "正方形",
    uses: "Instagramの正方形投稿、アイコン、サムネイル",
    resolutions: ["512×512", "1080×1080", "1440×1440", "2048×2048"],
  },
  {
    ratio: "9:16", decimal: "0.563", category: "縦長・ポートレート",
    uses: "スマートフォン縦画面、TikTok・Instagram Reels・YouTube Shorts",
    resolutions: ["720×1280 (HD縦)", "1080×1920 (Full HD縦)", "1440×2560 (QHD縦)"],
  },
  {
    ratio: "3:2", decimal: "1.500", category: "横長",
    uses: "一眼レフカメラ（35mmフィルム）、MacBook Proディスプレイ",
    resolutions: ["720×480", "1080×720", "2160×1440", "2880×1920"],
  },
  {
    ratio: "2:3", decimal: "0.667", category: "縦長",
    uses: "一眼レフカメラ縦向き、ポスター",
    resolutions: ["480×720", "720×1080", "1440×2160", "1920×2880"],
  },
  {
    ratio: "5:4", decimal: "1.250", category: "横長・スクエアに近い",
    uses: "旧来のモニター（SXGA）",
    resolutions: ["1280×1024 (SXGA)", "2560×2048"],
  },
  {
    ratio: "16:10", decimal: "1.600", category: "横長・ワイド",
    uses: "MacBook・一部のノートPC、旧ワイドモニター",
    resolutions: ["1280×800 (WXGA)", "1440×900 (WXGA+)", "1680×1050 (WSXGA+)", "1920×1200 (WUXGA)"],
  },
  {
    ratio: "4:5", decimal: "0.800", category: "縦長・ポートレート",
    uses: "Instagram縦向き投稿",
    resolutions: ["864×1080", "1080×1350", "2160×2700"],
  },
  {
    ratio: "2.39:1", decimal: "2.390", category: "超横長・アナモルフィック",
    uses: "映画アナモルフィックスコープ（シネマワイドスクリーン）",
    resolutions: ["2048×858 (2K DCI)", "4096×1716 (4K DCI)"],
  },
  {
    ratio: "1.85:1", decimal: "1.850", category: "横長・映画",
    uses: "映画フラットフォーマット（アメリカンビスタ）",
    resolutions: ["1998×1080 (2K)", "3996×2160 (4K)"],
  },
];

const formatPreviewPx = (value: number) => `${Math.round(value * 100) / 100}px`;

export default function AspectRatioListPage() {
  const [search, setSearch] = useState("");
  const [widthIn, setWidthIn] = useState(1920);
  const [heightIn, setHeightIn] = useState(1080);

  const filtered = RATIOS.filter((r) =>
    r.ratio.includes(search) || r.category.includes(search) || r.uses.includes(search)
  );

  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const g = gcd(widthIn, heightIn);
  const calcRatio = `${widthIn / g}:${heightIn / g}`;
  const calcDecimal = (widthIn / heightIn).toFixed(3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>アスペクト比一覧</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">アスペクト比一覧</h1>
      <p className="text-muted mb-8">よく使われるアスペクト比と対応する解像度の参照表です。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6 space-y-4">
        <h2 className="text-base font-bold">解像度からアスペクト比を計算</h2>
        <div className="flex items-center gap-3 flex-wrap">
          <input type="number" value={widthIn} onChange={(e) => setWidthIn(Math.max(1, +e.target.value))} className="w-28 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" min={1} />
          <span className="text-muted">×</span>
          <input type="number" value={heightIn} onChange={(e) => setHeightIn(Math.max(1, +e.target.value))} className="w-28 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" min={1} />
          <span className="text-muted">=</span>
          <div className="bg-background rounded-lg px-4 py-2 font-bold text-primary">{calcRatio}</div>
          <div className="text-sm text-muted">（{calcDecimal}）</div>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="比率・用途で検索（例：16:9、映画）"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((r) => (
          <div key={r.ratio} className="bg-card-bg border border-card-border rounded-xl p-5">
            <div className="flex items-start gap-4 flex-wrap">
              <div className="min-w-24">
                <div className="text-2xl font-bold text-primary">{r.ratio}</div>
                <div className="text-xs text-muted font-mono">{r.decimal}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium mb-1">{r.category}</div>
                <div className="text-xs text-muted mb-2">{r.uses}</div>
                <div className="flex flex-wrap gap-2">
                  {r.resolutions.map((res) => (
                    <span key={res} className="bg-background text-xs px-2 py-1 rounded font-mono">{res}</span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 w-16 flex items-center justify-center">
                <div
                  className="bg-primary/20 border-2 border-primary rounded"
                  style={{
                    width: formatPreviewPx(Math.min(56, 56 * parseFloat(r.decimal))),
                    height: formatPreviewPx(Math.min(36, 36 / parseFloat(r.decimal))),
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-center text-muted py-8">該当するアスペクト比が見つかりません</p>}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>一覧から主要なアスペクト比と代表的な解像度を確認できます。</p>
          <p>「解像度からアスペクト比を計算」では任意の幅・高さを入力して最小比率を求められます。</p>
          <p>動画制作・Web設計・印刷物のサイズ選定にご活用ください。</p>
        </div>
      </section>


      <AffiliateSection slug="aspect-ratio-list" category="デザイン" />
      <RelatedTools currentSlug="aspect-ratio-list" category="デザイン" />
    </div>
  );
}
