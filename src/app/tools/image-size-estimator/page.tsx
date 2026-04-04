"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const FORMAT_PRESETS = [
  { label: "JPEG (高品質)", depth: 24, ratio: 0.1 },
  { label: "JPEG (標準)", depth: 24, ratio: 0.2 },
  { label: "PNG (24bit)", depth: 24, ratio: 0.5 },
  { label: "PNG (8bit)", depth: 8, ratio: 0.6 },
  { label: "WebP", depth: 24, ratio: 0.08 },
];

function formatSize(bytes: number) {
  if (bytes >= 1048576) return (bytes / 1048576).toFixed(2) + " MB";
  if (bytes >= 1024) return (bytes / 1024).toFixed(1) + " KB";
  return bytes + " B";
}

export default function ImageSizeEstimatorPage() {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);
  const [depth, setDepth] = useState(24);
  const [ratio, setRatio] = useState(0.1);

  const rawBytes = (width * height * depth) / 8;
  const estimated = Math.round(rawBytes * ratio);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>画像容量見積もり</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">画像容量見積もりツール</h1>
      <p className="text-muted mb-8">画像の解像度・色深度・圧縮率からファイルサイズを推定します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">フォーマットプリセット</label>
          <div className="flex flex-wrap gap-2">
            {FORMAT_PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => { setDepth(p.depth); setRatio(p.ratio); }}
                className="px-3 py-1.5 text-sm rounded-lg border border-card-border hover:border-primary transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">幅 (px)</label>
            <input type="number" min={1} value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">高さ (px)</label>
            <input type="number" min={1} value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">色深度 (bpp)</label>
            <select value={depth} onChange={(e) => setDepth(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value={8}>8bit (256色)</option>
              <option value={16}>16bit</option>
              <option value={24}>24bit (フルカラー)</option>
              <option value={32}>32bit (アルファ付)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">圧縮率 (0〜1)</label>
            <input type="number" min={0.01} max={1} step={0.01} value={ratio} onChange={(e) => setRatio(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{formatSize(rawBytes)}</div>
            <div className="text-xs text-muted mt-1">非圧縮サイズ (RAW)</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{formatSize(estimated)}</div>
            <div className="text-xs text-muted mt-1">推定圧縮後サイズ</div>
          </div>
        </div>
        <p className="text-xs text-muted">{width.toLocaleString()} × {height.toLocaleString()} px &nbsp;|&nbsp; {(width * height).toLocaleString()} ピクセル</p>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>幅・高さ・色深度・圧縮率を入力すると推定ファイルサイズが表示されます。</p>
          <p>フォーマットプリセットを選ぶと代表的な設定が自動で入力されます。</p>
          <p>圧縮率はフォーマットや画像の内容によって大きく異なるため、あくまで目安としてご利用ください。</p>
        </div>
      </section>


      <RelatedTools currentSlug="image-size-estimator" category="画像・メディア" />
    </div>
  );
}
