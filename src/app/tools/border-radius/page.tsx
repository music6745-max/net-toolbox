"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const PRESETS = [
  { label: "角なし", tl: 0, tr: 0, br: 0, bl: 0 },
  { label: "小", tl: 4, tr: 4, br: 4, bl: 4 },
  { label: "中", tl: 8, tr: 8, br: 8, bl: 8 },
  { label: "大", tl: 16, tr: 16, br: 16, bl: 16 },
  { label: "丸", tl: 50, tr: 50, br: 50, bl: 50 },
  { label: "チャット左", tl: 0, tr: 16, br: 16, bl: 16 },
  { label: "チャット右", tl: 16, tr: 0, br: 16, bl: 16 },
  { label: "カプセル", tl: 999, tr: 999, br: 999, bl: 999 },
];

type Corners = { tl: number; tr: number; br: number; bl: number };

export default function BorderRadiusPage() {
  const [corners, setCorners] = useState<Corners>({ tl: 16, tr: 16, br: 16, bl: 16 });
  const [linked, setLinked] = useState(true);
  const [bgColor, setBgColor] = useState("#3b82f6");
  const [copied, setCopied] = useState(false);

  const set = (key: keyof Corners, val: number) => {
    if (linked) {
      setCorners({ tl: val, tr: val, br: val, bl: val });
    } else {
      setCorners((prev) => ({ ...prev, [key]: val }));
    }
  };

  const css = corners.tl === corners.tr && corners.tr === corners.br && corners.br === corners.bl
    ? `border-radius: ${corners.tl}px;`
    : `border-radius: ${corners.tl}px ${corners.tr}px ${corners.br}px ${corners.bl}px;`;

  const copy = () => {
    navigator.clipboard.writeText(css).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  const SliderInput = ({ label, k }: { label: string; k: keyof Corners }) => (
    <div>
      <label className="block text-xs font-medium mb-1 text-muted">{label}: {corners[k]}px</label>
      <input
        type="range"
        value={corners[k]}
        onChange={(e) => set(k, +e.target.value)}
        min={0}
        max={100}
        className="w-full accent-primary"
      />
      <input
        type="number"
        value={corners[k]}
        onChange={(e) => set(k, Math.max(0, Math.min(100, +e.target.value)))}
        className="mt-1 w-full border border-card-border rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30"
        min={0}
        max={100}
      />
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>border-radius生成</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">border-radius生成ツール</h1>
      <p className="text-muted mb-8">4つの角を個別に設定して角丸CSSを視覚的に生成します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div className="flex items-center justify-center bg-background rounded-xl p-8">
          <div
            style={{
              width: "160px",
              height: "100px",
              backgroundColor: bgColor,
              borderRadius: `${corners.tl}px ${corners.tr}px ${corners.br}px ${corners.bl}px`,
              transition: "border-radius 0.1s",
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">プリセット</label>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button key={p.label} onClick={() => setCorners({ tl: p.tl, tr: p.tr, br: p.br, bl: p.bl })} className="text-xs border border-card-border hover:bg-background px-3 py-1.5 rounded-lg transition-colors">
                {p.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={linked} onChange={(e) => setLinked(e.target.checked)} className="accent-primary" />
            全角を連動させる
          </label>
          <div className="flex items-center gap-2 ml-auto">
            <label className="text-sm">プレビュー色</label>
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer border border-card-border" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <SliderInput label="左上" k="tl" />
          <SliderInput label="右上" k="tr" />
          <SliderInput label="左下" k="bl" />
          <SliderInput label="右下" k="br" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">生成されたCSS</label>
          <div className="bg-background rounded-lg px-4 py-3 text-sm font-mono">{css}</div>
        </div>
        <button onClick={copy} className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          {copied ? "コピーしました！" : "CSSをコピー"}
        </button>
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>スライダーまたは数値入力で各角の丸みを設定します。</p>
          <p>「全角を連動させる」にチェックを入れると、すべての角が同じ値になります。</p>
          <p>プリセットから一般的な角丸スタイルを素早く選ぶこともできます。</p>
        </div>
      </section>


      <AffiliateSection slug="border-radius" category="デザイン" />
      <RelatedTools currentSlug="border-radius" category="デザイン" />
    </div>
  );
}
