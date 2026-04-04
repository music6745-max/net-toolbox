"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [a, setA] = useState("1");
  const [b, setB] = useState("-5");
  const [c, setC] = useState("6");

  const aNum = parseFloat(a) || 0;
  const bNum = parseFloat(b) || 0;
  const cNum = parseFloat(c) || 0;

  const canSolve = aNum !== 0;
  const discriminant = bNum * bNum - 4 * aNum * cNum;
  const vertexX = -bNum / (2 * aNum);
  const vertexY = aNum * vertexX * vertexX + bNum * vertexX + cNum;

  const formatNum = (n: number): string => {
    if (Number.isInteger(n)) return String(n);
    return n.toFixed(6).replace(/\.?0+$/, "");
  };

  type Solution =
    | { type: "real2"; x1: number; x2: number; discriminant: number }
    | { type: "real1"; x1: number; discriminant: number }
    | { type: "complex"; realPart: number; imagPart: number; discriminant: number };

  const getSolution = (): Solution | null => {
    if (!canSolve) return null;
    if (discriminant > 0) {
      const x1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      return { type: "real2", x1, x2, discriminant };
    } else if (discriminant === 0) {
      const x1 = -bNum / (2 * aNum);
      return { type: "real1", x1, discriminant };
    } else {
      const realPart = -bNum / (2 * aNum);
      const imagPart = Math.sqrt(-discriminant) / (2 * aNum);
      return { type: "complex", realPart, imagPart, discriminant };
    }
  };

  const solution = getSolution();

  const inputClass =
    "w-20 border border-card-border rounded-lg px-3 py-2.5 text-sm text-center font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>二次方程式の解</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">二次方程式の解ツール</h1>
      <p className="text-muted mb-8">
        ax² + bx + c = 0 の係数を入力して解を求めます。判別式・頂点座標も表示。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">係数を入力（ax² + bx + c = 0）</label>
          <div className="flex items-center gap-2 flex-wrap">
            <input type="number" value={a} onChange={(e) => setA(e.target.value)} className={inputClass} />
            <span className="text-sm">x² +</span>
            <input type="number" value={b} onChange={(e) => setB(e.target.value)} className={inputClass} />
            <span className="text-sm">x +</span>
            <input type="number" value={c} onChange={(e) => setC(e.target.value)} className={inputClass} />
            <span className="text-sm">= 0</span>
          </div>
        </div>

        {!canSolve && (
          <p className="text-red-500 text-sm">a は 0 以外の値を入力してください。</p>
        )}

        {solution && (
          <div className="space-y-4">
            <div>
              <span className="text-sm font-medium block mb-2">解法の手順</span>
              <div className="bg-background rounded-lg p-4 text-sm space-y-2 font-mono">
                <p>方程式: {aNum}x² + ({bNum})x + ({cNum}) = 0</p>
                <p>判別式: D = b² - 4ac = ({bNum})² - 4({aNum})({cNum}) = {formatNum(discriminant)}</p>
                <p>公式: x = (-b ± sqrt(D)) / 2a</p>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium block mb-2">判別式</span>
              <div className="bg-background rounded-lg p-4 text-sm">
                <p className="font-mono">D = {formatNum(discriminant)}</p>
                <p className="text-muted mt-1">
                  {discriminant > 0
                    ? "D > 0: 異なる2つの実数解"
                    : discriminant === 0
                    ? "D = 0: 重解（1つの実数解）"
                    : "D < 0: 2つの複素数解"}
                </p>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium block mb-2">解</span>
              <div className="bg-background rounded-lg p-4 text-sm font-mono">
                {solution.type === "real2" && (
                  <>
                    <p>x₁ = {formatNum(solution.x1)}</p>
                    <p>x₂ = {formatNum(solution.x2)}</p>
                  </>
                )}
                {solution.type === "real1" && <p>x = {formatNum(solution.x1)} （重解）</p>}
                {solution.type === "complex" && (
                  <>
                    <p>x₁ = {formatNum(solution.realPart)} + {formatNum(solution.imagPart)}i</p>
                    <p>x₂ = {formatNum(solution.realPart)} - {formatNum(solution.imagPart)}i</p>
                  </>
                )}
              </div>
            </div>

            <div>
              <span className="text-sm font-medium block mb-2">頂点座標</span>
              <div className="bg-background rounded-lg p-4 text-sm font-mono">
                <p>頂点: ({formatNum(vertexX)}, {formatNum(vertexY)})</p>
                <p className="text-muted mt-1">軸: x = {formatNum(vertexX)}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">二次方程式ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>a, b, c の値を入力すると、二次方程式 ax²+bx+c=0 の解が自動計算されます。</p>
          <p>判別式により、実数解・重解・複素数解を判定し、解法の手順も表示します。</p>
          <p>放物線の頂点座標も合わせて表示します。</p>
        </div>
      </section>

      <AffiliateSection slug="quadratic-equation" category="日常ツール" />


      <RelatedTools currentSlug="quadratic-equation" category="日常ツール" />
    </div>
  );
}
