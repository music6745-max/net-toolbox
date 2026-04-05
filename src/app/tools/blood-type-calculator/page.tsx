"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type BloodType = "A" | "B" | "O" | "AB";
type Alleles = [string, string];

const GENOTYPES: Record<BloodType, Alleles[]> = {
  A: [["A", "A"], ["A", "O"]],
  B: [["B", "B"], ["B", "O"]],
  O: [["O", "O"]],
  AB: [["A", "B"]],
};

function calcProbabilities(father: BloodType, mother: BloodType) {
  const counts: Record<string, number> = { A: 0, B: 0, O: 0, AB: 0 };
  let total = 0;
  for (const fg of GENOTYPES[father]) {
    for (const mg of GENOTYPES[mother]) {
      const fWeight = father === "A" || father === "B" ? 0.5 : 1;
      const mWeight = mother === "A" || mother === "B" ? 0.5 : 1;
      const w = fWeight * mWeight;
      for (const fa of fg) {
        for (const ma of mg) {
          const pair = [fa, ma].sort().join("");
          let bt: string;
          if (pair === "AA" || pair === "AO") bt = "A";
          else if (pair === "BB" || pair === "BO") bt = "B";
          else if (pair === "OO") bt = "O";
          else bt = "AB";
          counts[bt] += w;
          total += w;
        }
      }
    }
  }
  return Object.fromEntries(Object.entries(counts).map(([k, v]) => [k, Math.round((v / total) * 100)]));
}

export default function BloodTypeCalculatorPage() {
  const [father, setFather] = useState<BloodType>("A");
  const [mother, setMother] = useState<BloodType>("B");
  const [result, setResult] = useState<Record<string, number> | null>(null);

  const calculate = () => setResult(calcProbabilities(father, mother));

  const colors: Record<string, string> = { A: "bg-red-100 text-red-700", B: "bg-blue-100 text-blue-700", O: "bg-green-100 text-green-700", AB: "bg-purple-100 text-purple-700" };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>血液型予測</span></nav>
      <h1 className="text-2xl font-bold mb-2">血液型予測ツール</h1>
      <p className="text-muted mb-8">両親の血液型から、子供の血液型の確率を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">父親の血液型</label>
            <select value={father} onChange={e => setFather(e.target.value as BloodType)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent">
              {(["A","B","O","AB"] as const).map(t => <option key={t} value={t}>{t}型</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">母親の血液型</label>
            <select value={mother} onChange={e => setMother(e.target.value as BloodType)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent">
              {(["A","B","O","AB"] as const).map(t => <option key={t} value={t}>{t}型</option>)}
            </select>
          </div>
        </div>
        <button onClick={calculate} className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition">予測する</button>
        {result && (
          <div className="mt-4 grid grid-cols-4 gap-3">
            {["A","B","O","AB"].map(bt => (
              <div key={bt} className={"rounded-lg p-4 text-center " + colors[bt]}>
                <p className="text-2xl font-bold">{result[bt]}%</p>
                <p className="text-sm font-medium mt-1">{bt}型</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>父親と母親の血液型を選択して「予測する」をクリックすると、子供の血液型の確率が表示されます。</p><p>※ABO式血液型の遺伝法則に基づいた確率計算です。</p></div></section>
      <AffiliateSection slug="blood-type-calculator" category="日常ツール" />
      <RelatedTools currentSlug="blood-type-calculator" category="日常ツール" />
    </div>
  );
}
