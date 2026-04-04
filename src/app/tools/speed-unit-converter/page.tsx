"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type SpeedUnit = "km/h" | "mph" | "m/s" | "knots" | "ft/s";

const UNITS: { key: SpeedUnit; label: string }[] = [
  { key: "km/h", label: "キロメートル毎時 (km/h)" },
  { key: "mph", label: "マイル毎時 (mph)" },
  { key: "m/s", label: "メートル毎秒 (m/s)" },
  { key: "knots", label: "ノット (kt)" },
  { key: "ft/s", label: "フィート毎秒 (ft/s)" },
];

// All to m/s factors
const TO_MS: Record<SpeedUnit, number> = {
  "km/h": 1 / 3.6,
  "mph": 0.44704,
  "m/s": 1,
  "knots": 0.514444,
  "ft/s": 0.3048,
};

function convert(value: number, from: SpeedUnit, to: SpeedUnit) {
  return (value * TO_MS[from]) / TO_MS[to];
}

function fmt(n: number) {
  if (!isFinite(n)) return "—";
  if (n === 0) return "0";
  return parseFloat(n.toPrecision(7)).toLocaleString("ja-JP", { maximumSignificantDigits: 7 });
}

export default function SpeedUnitConverterPage() {
  const [value, setValue] = useState("100");
  const [unit, setUnit] = useState<SpeedUnit>("km/h");

  const num = parseFloat(value) || 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>速度単位変換</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">速度単位変換ツール</h1>
      <p className="text-muted mb-8">km/h・mph・m/s・ノット・ft/sを相互変換します。</p>

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
              onChange={(e) => setUnit(e.target.value as SpeedUnit)}
              className="border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {UNITS.map((u) => <option key={u.key} value={u.key}>{u.key}</option>)}
            </select>
          </div>
        </div>

        <div className="divide-y divide-card-border">
          {UNITS.map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between py-3">
              <div>
                <span className="text-sm font-medium">{key}</span>
                <span className="text-xs text-muted ml-2">{label}</span>
              </div>
              <span className={`text-sm font-mono ${key === unit ? "text-primary font-bold" : "text-muted"}`}>
                {fmt(convert(num, unit, key))}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-lg p-4 grid grid-cols-3 gap-3 text-center text-sm">
          <div><div className="font-bold text-primary">{fmt(convert(num, unit, "km/h"))}</div><div className="text-xs text-muted">km/h</div></div>
          <div><div className="font-bold text-primary">{fmt(convert(num, unit, "mph"))}</div><div className="text-xs text-muted">mph</div></div>
          <div><div className="font-bold text-primary">{fmt(convert(num, unit, "m/s"))}</div><div className="text-xs text-muted">m/s</div></div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>変換したい速度の値と単位を入力すると、すべての単位に自動変換されます。</p>
          <p>ノットは航海・航空で使われる速度単位で、1ノット = 1.852 km/hです。</p>
        </div>
      </section>


      <AffiliateSection slug="speed-unit-converter" category="日常ツール" />
      <RelatedTools currentSlug="speed-unit-converter" category="日常ツール" />
    </div>
  );
}
