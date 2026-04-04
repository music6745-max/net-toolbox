"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

export default function Page() {
  const [origWidth, setOrigWidth] = useState("1920");
  const [origHeight, setOrigHeight] = useState("1080");
  const [targetWidth, setTargetWidth] = useState("");
  const [targetHeight, setTargetHeight] = useState("");
  const [lockMode, setLockMode] = useState<"width" | "height">("width");

  const ow = parseFloat(origWidth) || 0;
  const oh = parseFloat(origHeight) || 0;

  const ratio = ow > 0 && oh > 0 ? ow / oh : 0;
  const g = ow > 0 && oh > 0 ? gcd(ow, oh) : 1;
  const ratioLabel = ow > 0 && oh > 0 ? `${ow / g}:${oh / g}` : "-";

  const calcResult = () => {
    if (ratio === 0) return { w: 0, h: 0, scale: 0 };
    if (lockMode === "width") {
      const tw = parseFloat(targetWidth) || 0;
      if (tw <= 0) return { w: 0, h: 0, scale: 0 };
      const th = Math.round(tw / ratio);
      const scale = (tw / ow) * 100;
      return { w: tw, h: th, scale };
    } else {
      const th = parseFloat(targetHeight) || 0;
      if (th <= 0) return { w: 0, h: 0, scale: 0 };
      const tw = Math.round(th * ratio);
      const scale = (th / oh) * 100;
      return { w: tw, h: th, scale };
    }
  };

  const result = calcResult();

  const inputClass =
    "w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>画像リサイズ計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">画像リサイズ計算ツール</h1>
      <p className="text-muted mb-8">
        アスペクト比を維持したまま、幅または高さを指定してリサイズ後のサイズを計算します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">元のサイズ</label>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="block text-xs text-muted mb-1">幅 (px)</label>
              <input type="number" value={origWidth} onChange={(e) => setOrigWidth(e.target.value)} placeholder="1920" className={inputClass} />
            </div>
            <span className="text-muted mt-4">x</span>
            <div className="flex-1">
              <label className="block text-xs text-muted mb-1">高さ (px)</label>
              <input type="number" value={origHeight} onChange={(e) => setOrigHeight(e.target.value)} placeholder="1080" className={inputClass} />
            </div>
          </div>
          {ratio > 0 && (
            <p className="text-sm text-muted mt-2">アスペクト比: {ratioLabel}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">リサイズ後のサイズ</label>
          <div className="flex gap-3 mb-3">
            <button
              onClick={() => setLockMode("width")}
              className={`px-4 py-1.5 rounded-lg text-sm ${lockMode === "width" ? "bg-primary text-white" : "bg-background"}`}
            >
              幅を指定
            </button>
            <button
              onClick={() => setLockMode("height")}
              className={`px-4 py-1.5 rounded-lg text-sm ${lockMode === "height" ? "bg-primary text-white" : "bg-background"}`}
            >
              高さを指定
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="block text-xs text-muted mb-1">幅 (px)</label>
              <input
                type="number"
                value={lockMode === "width" ? targetWidth : result.w > 0 ? String(result.w) : ""}
                onChange={(e) => setTargetWidth(e.target.value)}
                disabled={lockMode === "height"}
                placeholder="800"
                className={`${inputClass} ${lockMode === "height" ? "bg-gray-100 opacity-60" : ""}`}
              />
            </div>
            <span className="text-muted mt-4">x</span>
            <div className="flex-1">
              <label className="block text-xs text-muted mb-1">高さ (px)</label>
              <input
                type="number"
                value={lockMode === "height" ? targetHeight : result.h > 0 ? String(result.h) : ""}
                onChange={(e) => setTargetHeight(e.target.value)}
                disabled={lockMode === "width"}
                placeholder="450"
                className={`${inputClass} ${lockMode === "width" ? "bg-gray-100 opacity-60" : ""}`}
              />
            </div>
          </div>
        </div>

        {result.w > 0 && result.h > 0 && (
          <div className="bg-background rounded-lg p-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span>リサイズ後のサイズ</span>
              <span className="font-mono font-medium">{result.w} x {result.h} px</span>
            </div>
            <div className="flex justify-between">
              <span>スケール</span>
              <span className="font-mono font-medium">{result.scale.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span>アスペクト比</span>
              <span className="font-mono">{ratioLabel}</span>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">画像リサイズ計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>元画像の幅と高さを入力し、リサイズしたい幅または高さを指定します。</p>
          <p>アスペクト比を維持したまま、もう一方の値が自動計算されます。</p>
          <p>スケール（倍率）も合わせて表示されます。</p>
        </div>
      </section>

      <AffiliateSection slug="aspect-ratio-resizer" category="画像・メディア" />


      <RelatedTools currentSlug="aspect-ratio-resizer" category="画像・メディア" />
    </div>
  );
}
