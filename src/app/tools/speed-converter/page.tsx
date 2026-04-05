"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const UNITS = [
  { key: "kmh", label: "km/h", toMs: (v: number) => v / 3.6, fromMs: (v: number) => v * 3.6 },
  { key: "mph", label: "mph", toMs: (v: number) => v * 0.44704, fromMs: (v: number) => v / 0.44704 },
  { key: "ms", label: "m/s", toMs: (v: number) => v, fromMs: (v: number) => v },
  { key: "knot", label: "\u30CE\u30C3\u30C8", toMs: (v: number) => v * 0.514444, fromMs: (v: number) => v / 0.514444 },
  { key: "fts", label: "ft/s", toMs: (v: number) => v * 0.3048, fromMs: (v: number) => v / 0.3048 },
  { key: "mach", label: "\u30DE\u30C3\u30CF", toMs: (v: number) => v * 343, fromMs: (v: number) => v / 343 },
];

export default function SpeedConverterPage() {
  const [value, setValue] = useState("100");
  const [fromUnit, setFromUnit] = useState("kmh");
  const [copied, setCopied] = useState("");

  const from = UNITS.find((u) => u.key === fromUnit)!;
  const ms = from.toMs(parseFloat(value) || 0);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => { setCopied(text); setTimeout(() => setCopied(""), 2000); });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"\u901F\u5EA6\u5909\u63DB"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"\u901F\u5EA6\u5909\u63DB"}</h1>
      <p className="text-muted mb-8">{"km/h\u3001mph\u3001m/s\u3001\u30CE\u30C3\u30C8\u306A\u3069\u306E\u901F\u5EA6\u5358\u4F4D\u3092\u76F8\u4E92\u5909\u63DB\u3057\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="flex gap-3">
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)} className="flex-1 p-2 border border-card-border rounded-lg bg-base text-sm" />
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="p-2 border border-card-border rounded-lg bg-base text-sm">
            {UNITS.map((u) => <option key={u.key} value={u.key}>{u.label}</option>)}
          </select>
        </div>
        <div className="space-y-2 mt-4">
          {UNITS.map((u) => {
            const converted = u.fromMs(ms);
            const display = converted < 0.01 ? converted.toExponential(4) : converted.toFixed(4);
            return (
              <div key={u.key} className={"flex items-center justify-between p-3 border border-card-border rounded-lg cursor-pointer hover:bg-base " + (u.key === fromUnit ? "bg-primary/10" : "")} onClick={() => copy(display)}>
                <span className="text-sm font-medium">{u.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm">{display}</span>
                  <span className="text-xs text-muted">{copied === display ? "\u30B3\u30D4\u30FC\u6E08" : ""}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u5024\u3068\u5358\u4F4D\u3092\u5165\u529B\u3059\u308B\u3068\u3001\u4ED6\u306E\u5358\u4F4D\u306B\u81EA\u52D5\u5909\u63DB\u3055\u308C\u307E\u3059\u3002\u7D50\u679C\u3092\u30AF\u30EA\u30C3\u30AF\u3067\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="speed-converter" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="speed-converter" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
    </div>
  );
}
