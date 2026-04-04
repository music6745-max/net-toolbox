"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const UNITS = ["B", "KB", "MB", "GB", "TB", "PB"] as const;
type Unit = typeof UNITS[number];

function convert(value: number, from: Unit, to: Unit, binary: boolean) {
  const base = binary ? 1024 : 1000;
  const fromIdx = UNITS.indexOf(from);
  const toIdx = UNITS.indexOf(to);
  const bytes = value * Math.pow(base, fromIdx);
  return bytes / Math.pow(base, toIdx);
}

function fmt(n: number) {
  if (!isFinite(n)) return "—";
  if (n === 0) return "0";
  if (Math.abs(n) >= 1e15) return n.toExponential(4);
  const s = n.toPrecision(7);
  const f = parseFloat(s);
  return f.toLocaleString("ja-JP", { maximumSignificantDigits: 7 });
}

export default function DataSizeConverterPage() {
  const [value, setValue] = useState("1");
  const [unit, setUnit] = useState<Unit>("GB");
  const [binary, setBinary] = useState(true);

  const num = parseFloat(value) || 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>データ容量変換</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">データ容量変換ツール</h1>
      <p className="text-muted mb-8">B・KB・MB・GB・TB・PBを相互変換します。2進数（1024）と10進数（1000）の両モードに対応。</p>

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
              onChange={(e) => setUnit(e.target.value as Unit)}
              className="border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {UNITS.map((u) => <option key={u}>{u}</option>)}
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setBinary(true)}
            className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${binary ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary"}`}
          >
            2進数 (1024)
          </button>
          <button
            onClick={() => setBinary(false)}
            className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${!binary ? "bg-primary text-white border-primary" : "border-card-border hover:border-primary"}`}
          >
            10進数 (1000)
          </button>
        </div>

        <div className="divide-y divide-card-border">
          {UNITS.map((u) => (
            <div key={u} className="flex items-center justify-between py-3">
              <span className="text-sm font-medium w-12">{u}</span>
              <span className={`text-sm font-mono ${u === unit ? "text-primary font-bold" : "text-muted"}`}>
                {fmt(convert(num, unit, u, binary))} {u}
              </span>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>変換したい値と単位を入力すると、すべての単位での値が一覧表示されます。</p>
          <p>2進数モード（1KB = 1024B）はコンピュータの実際のメモリ計算に、10進数モード（1KB = 1000B）はストレージメーカーの表記に使われます。</p>
        </div>
      </section>


      <AffiliateSection slug="data-size-converter" category="開発ツール" />
      <RelatedTools currentSlug="data-size-converter" category="開発ツール" />
    </div>
  );
}
