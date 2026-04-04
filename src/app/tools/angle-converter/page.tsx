"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type AngleUnit = "deg" | "rad" | "grad" | "turn";

const UNITS: { key: AngleUnit; label: string; short: string }[] = [
  { key: "deg", label: "度 (Degrees)", short: "°" },
  { key: "rad", label: "ラジアン (Radians)", short: "rad" },
  { key: "grad", label: "グラジアン (Gradians)", short: "grad" },
  { key: "turn", label: "回転 (Turns)", short: "turn" },
];

// All to degrees
const TO_DEG: Record<AngleUnit, number> = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 0.9,
  turn: 360,
};

function convert(value: number, from: AngleUnit, to: AngleUnit) {
  return (value * TO_DEG[from]) / TO_DEG[to];
}

function fmt(n: number) {
  if (!isFinite(n)) return "—";
  return parseFloat(n.toPrecision(8)).toLocaleString("ja-JP", { maximumSignificantDigits: 8 });
}

export default function AngleConverterPage() {
  const [value, setValue] = useState("180");
  const [unit, setUnit] = useState<AngleUnit>("deg");

  const num = parseFloat(value) || 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>角度変換</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">角度変換ツール</h1>
      <p className="text-muted mb-8">度・ラジアン・グラジアン・回転数を相互変換します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">値</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">単位</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as AngleUnit)}
              className="border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {UNITS.map((u) => <option key={u.key} value={u.key}>{u.short}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {UNITS.map(({ key, label, short }) => (
            <div key={key} className={`rounded-lg p-4 ${key === unit ? "bg-primary/10 border border-primary/30" : "bg-background"}`}>
              <div className={`text-xl font-bold ${key === unit ? "text-primary" : ""}`}>
                {fmt(convert(num, unit, key))} <span className="text-sm font-normal">{short}</span>
              </div>
              <div className="text-xs text-muted mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-lg p-4 text-xs text-muted space-y-1">
          <p>1回転 = 360° = 2π rad ≈ {(2 * Math.PI).toFixed(6)} rad = 400 grad</p>
          <p>π rad = 180° | π/2 rad = 90°</p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>変換したい角度の値と単位を選ぶと、すべての単位に自動変換されます。</p>
          <p>ラジアンは数学・物理でよく使われる角度単位で、1周 = 2π ラジアンです。</p>
          <p>グラジアン（グレード）は1周を400等分した単位で、測量などで使われます。</p>
        </div>
      </section>


      <AffiliateSection slug="angle-converter" category="日常ツール" />
      <RelatedTools currentSlug="angle-converter" category="日常ツール" />
    </div>
  );
}
