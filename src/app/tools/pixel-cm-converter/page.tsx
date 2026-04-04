"use client";

import { useState } from "react";
import Link from "next/link";

const DPI_PRESETS = [72, 96, 150, 300];

function pxToCm(px: number, dpi: number) { return (px / dpi) * 2.54; }
function pxToMm(px: number, dpi: number) { return (px / dpi) * 25.4; }
function pxToInch(px: number, dpi: number) { return px / dpi; }
function cmToPx(cm: number, dpi: number) { return (cm / 2.54) * dpi; }
function mmToPx(mm: number, dpi: number) { return (mm / 25.4) * dpi; }
function inchToPx(inch: number, dpi: number) { return inch * dpi; }

type Direction = "px" | "cm" | "mm" | "inch";

export default function PixelCmConverterPage() {
  const [dpi, setDpi] = useState(96);
  const [customDpi, setCustomDpi] = useState("");
  const [value, setValue] = useState("1000");
  const [direction, setDirection] = useState<Direction>("px");

  const activeDpi = customDpi ? Number(customDpi) : dpi;
  const num = parseFloat(value) || 0;

  const results = (() => {
    if (direction === "px") {
      return {
        px: num,
        cm: pxToCm(num, activeDpi),
        mm: pxToMm(num, activeDpi),
        inch: pxToInch(num, activeDpi),
      };
    } else if (direction === "cm") {
      const px = cmToPx(num, activeDpi);
      return { px, cm: num, mm: num * 10, inch: num / 2.54 };
    } else if (direction === "mm") {
      const px = mmToPx(num, activeDpi);
      return { px, cm: num / 10, mm: num, inch: num / 25.4 };
    } else {
      const px = inchToPx(num, activeDpi);
      return { px, cm: num * 2.54, mm: num * 25.4, inch: num };
    }
  })();

  const fmt = (n: number, dec = 3) => n.toFixed(dec).replace(/\.?0+$/, "") || "0";

  const COMMON_SIZES = [
    { label: "A4横 (印刷 300dpi)", px: 3508, dpi: 300 },
    { label: "A4縦 (印刷 300dpi)", px: 2480, dpi: 300 },
    { label: "フルHD", px: 1920, dpi: 96 },
    { label: "4K", px: 3840, dpi: 96 },
    { label: "スマホ (iPhone 14)", px: 1179, dpi: 460 },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ピクセル⇔cm変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ピクセル⇔cm変換ツール</h1>
      <p className="text-muted mb-8">
        ピクセル・cm・mm・インチの単位を相互変換します。DPIを設定して印刷サイズも確認できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">DPI（解像度）</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {DPI_PRESETS.map((d) => (
              <button
                key={d}
                onClick={() => { setDpi(d); setCustomDpi(""); }}
                className={`px-4 py-1.5 rounded-lg text-sm border transition-colors ${
                  dpi === d && !customDpi
                    ? "bg-primary text-white border-primary"
                    : "border-card-border text-muted hover:border-primary"
                }`}
              >
                {d} dpi
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={customDpi}
              onChange={(e) => setCustomDpi(e.target.value)}
              placeholder="カスタムDPI..."
              min={1}
              className="w-40 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <span className="text-sm text-muted">dpi</span>
          </div>
          <p className="text-xs text-muted mt-1">現在: <strong>{activeDpi} dpi</strong>（スクリーン表示: 96dpi / 印刷標準: 300dpi）</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">変換元の単位</label>
          <div className="flex gap-2">
            {(["px", "cm", "mm", "inch"] as Direction[]).map((d) => (
              <button
                key={d}
                onClick={() => setDirection(d)}
                className={`px-4 py-1.5 rounded-lg text-sm border transition-colors ${
                  direction === d
                    ? "bg-primary text-white border-primary"
                    : "border-card-border text-muted hover:border-primary"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">値を入力 ({direction})</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { unit: "px", label: "ピクセル", value: fmt(results.px, 1) },
          { unit: "cm", label: "センチメートル", value: fmt(results.cm) },
          { unit: "mm", label: "ミリメートル", value: fmt(results.mm) },
          { unit: "inch", label: "インチ", value: fmt(results.inch) },
        ].map((r) => (
          <div key={r.unit} className={`bg-card-bg border rounded-xl p-4 ${direction === r.unit ? "border-primary" : "border-card-border"}`}>
            <p className="text-xs text-muted mb-1">{r.label}</p>
            <p className="text-xl font-bold font-mono">{r.value}</p>
            <p className="text-xs text-muted mt-0.5">{r.unit}</p>
          </div>
        ))}
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl p-5">
        <h2 className="text-sm font-semibold mb-3">よく使うサイズの目安</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border text-muted">
                <th className="text-left py-2 pr-4">用途</th>
                <th className="text-right pr-4">幅 (px)</th>
                <th className="text-right pr-4">DPI</th>
                <th className="text-right pr-4">cm</th>
                <th className="text-right">inch</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_SIZES.map((s) => (
                <tr key={s.label} className="border-b border-card-border last:border-0">
                  <td className="py-2 pr-4">{s.label}</td>
                  <td className="py-2 pr-4 text-right font-mono text-primary">{s.px.toLocaleString()}</td>
                  <td className="py-2 pr-4 text-right font-mono text-muted">{s.dpi}</td>
                  <td className="py-2 pr-4 text-right font-mono">{fmt(pxToCm(s.px, s.dpi))}</td>
                  <td className="py-2 text-right font-mono">{fmt(pxToInch(s.px, s.dpi))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ピクセル⇔cm変換ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>DPIを選択して、変換元の単位（px/cm/mm/inch）を選び、値を入力します。</p>
          <p>スクリーン表示には96dpi、印刷物には150〜300dpiが一般的です。</p>
          <p>72dpiは昔のMacスクリーン標準、300dpiは印刷物の高品質基準です。</p>
        </div>
      </section>
    </div>
  );
}
