"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export default function AspectRatioPage() {
  // Tab 1: width/height → ratio
  const [width1, setWidth1] = useState("");
  const [height1, setHeight1] = useState("");
  const [ratio, setRatio] = useState("");
  const [ratioError, setRatioError] = useState("");

  // Tab 2: ratio + one dimension → other dimension
  const [ratioW, setRatioW] = useState("");
  const [ratioH, setRatioH] = useState("");
  const [knownDim, setKnownDim] = useState("width");
  const [knownVal, setKnownVal] = useState("");
  const [calcResult, setCalcResult] = useState("");
  const [calcError, setCalcError] = useState("");

  const [tab, setTab] = useState<"calc" | "find">("calc");

  const calcRatio = () => {
    const w = Number(width1);
    const h = Number(height1);
    if (!width1 || !height1 || isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setRatioError("有効な幅と高さを入力してください（正の数）");
      setRatio("");
      return;
    }
    setRatioError("");
    const d = gcd(Math.round(w), Math.round(h));
    const rw = Math.round(w) / d;
    const rh = Math.round(h) / d;
    const decimal = (w / h).toFixed(4);
    setRatio(`${rw} : ${rh}（小数: ${decimal}）`);
  };

  const findDimension = () => {
    const rw = Number(ratioW);
    const rh = Number(ratioH);
    const val = Number(knownVal);
    if (!ratioW || !ratioH || isNaN(rw) || isNaN(rh) || rw <= 0 || rh <= 0) {
      setCalcError("有効なアスペクト比を入力してください");
      setCalcResult("");
      return;
    }
    if (!knownVal || isNaN(val) || val <= 0) {
      setCalcError("有効な寸法を入力してください（正の数）");
      setCalcResult("");
      return;
    }
    setCalcError("");
    if (knownDim === "width") {
      const h = (val * rh) / rw;
      setCalcResult(`高さ = ${h % 1 === 0 ? h : h.toFixed(2)} px`);
    } else {
      const w = (val * rw) / rh;
      setCalcResult(`幅 = ${w % 1 === 0 ? w : w.toFixed(2)} px`);
    }
  };

  const tabClass = (t: string) =>
    `px-5 py-2 text-sm font-medium rounded-t-lg border border-b-0 transition-colors ${
      tab === t
        ? "bg-card-bg border-card-border text-foreground"
        : "bg-background border-transparent text-muted hover:text-foreground"
    }`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>アスペクト比計算</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">アスペクト比計算ツール</h1>
      <p className="text-muted mb-8">
        幅と高さからアスペクト比を計算、またはアスペクト比と一辺から残りの寸法を求めます。
      </p>

      <div className="flex gap-1 mb-0">
        <button className={tabClass("calc")} onClick={() => setTab("calc")}>
          比率を計算
        </button>
        <button className={tabClass("find")} onClick={() => setTab("find")}>
          寸法を計算
        </button>
      </div>

      <div className="bg-card-bg border border-card-border rounded-b-xl rounded-tr-xl p-6">
        {tab === "calc" && (
          <>
            <h2 className="text-base font-semibold mb-4">幅・高さ → アスペクト比</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">幅 (px)</label>
                <input
                  type="number"
                  value={width1}
                  onChange={(e) => setWidth1(e.target.value)}
                  placeholder="例: 1920"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">高さ (px)</label>
                <input
                  type="number"
                  value={height1}
                  onChange={(e) => setHeight1(e.target.value)}
                  placeholder="例: 1080"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>
            {ratioError && <p className="text-red-500 text-sm mb-3">{ratioError}</p>}
            <button
              onClick={calcRatio}
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              計算する
            </button>
            {ratio && (
              <div className="mt-5 bg-background rounded-lg p-4">
                <p className="text-sm text-muted mb-1">アスペクト比</p>
                <p className="text-xl font-bold text-primary font-mono">{ratio}</p>
              </div>
            )}
          </>
        )}

        {tab === "find" && (
          <>
            <h2 className="text-base font-semibold mb-4">アスペクト比 + 一辺 → 残りの寸法</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">比率 (幅)</label>
                <input
                  type="number"
                  value={ratioW}
                  onChange={(e) => setRatioW(e.target.value)}
                  placeholder="例: 16"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">比率 (高さ)</label>
                <input
                  type="number"
                  value={ratioH}
                  onChange={(e) => setRatioH(e.target.value)}
                  placeholder="例: 9"
                  className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">わかっている寸法</label>
              <div className="flex gap-4 mb-3">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="knownDim"
                    value="width"
                    checked={knownDim === "width"}
                    onChange={() => setKnownDim("width")}
                    className="accent-primary"
                  />
                  幅がわかっている
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="knownDim"
                    value="height"
                    checked={knownDim === "height"}
                    onChange={() => setKnownDim("height")}
                    className="accent-primary"
                  />
                  高さがわかっている
                </label>
              </div>
              <input
                type="number"
                value={knownVal}
                onChange={(e) => setKnownVal(e.target.value)}
                placeholder={knownDim === "width" ? "幅を入力 (px)" : "高さを入力 (px)"}
                className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            {calcError && <p className="text-red-500 text-sm mb-3">{calcError}</p>}
            <button
              onClick={findDimension}
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              計算する
            </button>
            {calcResult && (
              <div className="mt-5 bg-background rounded-lg p-4">
                <p className="text-sm text-muted mb-1">計算結果</p>
                <p className="text-xl font-bold text-primary font-mono">{calcResult}</p>
              </div>
            )}
          </>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">アスペクト比計算ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>「比率を計算」タブ: 幅と高さを入力すると、最も簡単な形のアスペクト比（例: 16:9）を計算します。</p>
          <p>「寸法を計算」タブ: アスペクト比と一辺の長さを入力すると、もう一辺の長さを計算します。</p>
          <p>動画・画像のリサイズや、レスポンシブデザインの寸法計算に活用できます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="aspect-ratio" category="デザイン" />
      <RelatedTools currentSlug="aspect-ratio" category="デザイン" />
    </div>
  );
}
