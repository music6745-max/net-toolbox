"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Usage = "web" | "sns" | "email" | "blog";

const USAGE_CONFIG: Record<Usage, { label: string; maxWidth: number; targetKB: number }> = {
  web:   { label: "Webページ", maxWidth: 1200, targetKB: 200 },
  sns:   { label: "SNS投稿",   maxWidth: 1080, targetKB: 300 },
  email: { label: "メール添付", maxWidth: 800,  targetKB: 100 },
  blog:  { label: "ブログ記事", maxWidth: 1000, targetKB: 150 },
};

export default function Page() {
  const [originalSize, setOriginalSize] = useState("500");
  const [width, setWidth] = useState("1920");
  const [height, setHeight] = useState("1080");
  const [usage, setUsage] = useState<Usage>("web");

  const origKB = parseFloat(originalSize) || 0;
  const w = parseInt(width) || 0;
  const h = parseInt(height) || 0;

  const config = USAGE_CONFIG[usage];
  const needsResize = w > config.maxWidth;
  const scale = needsResize ? config.maxWidth / w : 1;
  const recommendedWidth = needsResize ? config.maxWidth : w;
  const recommendedHeight = needsResize ? Math.round(h * scale) : h;
  const targetKB = config.targetKB;
  const reductionRate = origKB > 0 ? Math.max(0, ((1 - targetKB / origKB) * 100)) : 0;
  const isAlreadyOptimal = origKB <= targetKB && !needsResize;

  const recommendedFormat = origKB > 300 ? "WebP または AVIF" : "WebP";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>画像軽量化チェッカー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">画像軽量化チェッカー</h1>
      <p className="text-muted mb-8">
        画像のサイズと用途から、最適な軽量化設定を診断します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">元のファイルサイズ (KB)</label>
          <input
            type="number"
            value={originalSize}
            onChange={(e) => setOriginalSize(e.target.value)}
            min={1}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">画像の幅 (px)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              min={1}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">画像の高さ (px)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              min={1}
              className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">用途</label>
          <select
            value={usage}
            onChange={(e) => setUsage(e.target.value as Usage)}
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="web">Webページ</option>
            <option value="sns">SNS投稿</option>
            <option value="email">メール添付</option>
            <option value="blog">ブログ記事</option>
          </select>
        </div>

        {isAlreadyOptimal ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
            <div className="text-lg font-bold text-green-600">最適化済み</div>
            <div className="text-sm text-muted mt-1">
              現在のサイズは「{config.label}」用途に対して十分軽量です。
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-xs text-muted mb-1">推奨ファイルサイズ</div>
                <div className="text-2xl font-bold text-primary">{targetKB} KB以下</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-xs text-muted mb-1">削減率</div>
                <div className="text-2xl font-bold text-primary">
                  {reductionRate > 0 ? `${reductionRate.toFixed(1)}%` : "---"}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-4 text-center">
                <div className="text-xs text-muted mb-1">推奨解像度</div>
                <div className="text-lg font-bold">
                  {recommendedWidth} x {recommendedHeight} px
                </div>
                {needsResize && (
                  <div className="text-xs text-muted mt-1">
                    幅を {w} → {recommendedWidth} px にリサイズ
                  </div>
                )}
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <div className="text-xs text-muted mb-1">おすすめ形式</div>
                <div className="text-lg font-bold">{recommendedFormat}</div>
                <div className="text-xs text-muted mt-1">JPEGより30〜50%軽量</div>
              </div>
            </div>
          </>
        )}

        <div className="bg-background rounded-lg p-4">
          <div className="text-sm font-medium mb-2">用途別の推奨基準</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(Object.entries(USAGE_CONFIG) as [Usage, typeof USAGE_CONFIG[Usage]][]).map(
              ([key, cfg]) => (
                <div
                  key={key}
                  className={`rounded-lg p-3 text-center text-xs ${
                    usage === key
                      ? "bg-primary/10 border border-primary/30"
                      : "bg-card-bg border border-card-border"
                  }`}
                >
                  <div className="font-medium">{cfg.label}</div>
                  <div className="text-muted mt-1">幅 {cfg.maxWidth}px</div>
                  <div className="text-muted">{cfg.targetKB}KB以下</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>元画像のファイルサイズ・解像度・用途を入力すると、最適な軽量化設定を診断します。</p>
          <p>WebPやAVIF形式に変換すると、JPEGに比べて30〜50%のファイルサイズ削減が期待できます。</p>
          <p>画像の幅が推奨値を超えている場合、リサイズによる軽量化も提案します。</p>
        </div>
      </section>

      <AffiliateSection slug="image-weight-reducer" category="Web開発ツール" />
      <RelatedTools currentSlug="image-weight-reducer" category="Web開発ツール" />
    </div>
  );
}
