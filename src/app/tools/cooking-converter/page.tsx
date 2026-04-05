"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const UNITS = [
  { key: "ml", label: "ml", toMl: 1 },
  { key: "l", label: "L", toMl: 1000 },
  { key: "tsp", label: "\u5C0F\u3055\u3058 (tsp)", toMl: 5 },
  { key: "tbsp", label: "\u5927\u3055\u3058 (tbsp)", toMl: 15 },
  { key: "cup_jp", label: "\u30AB\u30C3\u30D7\uFF08\u65E5\u672C\uFF09", toMl: 200 },
  { key: "cup_us", label: "\u30AB\u30C3\u30D7\uFF08US\uFF09", toMl: 236.588 },
  { key: "fl_oz", label: "fl oz", toMl: 29.5735 },
  { key: "cc", label: "cc", toMl: 1 },
  { key: "go", label: "\u5408", toMl: 180 },
];

const WEIGHT_UNITS = [
  { key: "g", label: "g", toG: 1 },
  { key: "kg", label: "kg", toG: 1000 },
  { key: "oz", label: "oz", toG: 28.3495 },
  { key: "lb", label: "lb", toG: 453.592 },
];

export default function CookingConverterPage() {
  const [mode, setMode] = useState<"volume" | "weight">("volume");
  const [value, setValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("cup_jp");
  const [copied, setCopied] = useState("");

  const units = mode === "volume" ? UNITS : WEIGHT_UNITS;
  const from = units.find((u) => u.key === fromUnit);
  const baseValue = (parseFloat(value) || 0) * (from ? (mode === "volume" ? (from as typeof UNITS[0]).toMl : (from as typeof WEIGHT_UNITS[0]).toG) : 1);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => { setCopied(text); setTimeout(() => setCopied(""), 2000); });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"\u6599\u7406\u5358\u4F4D\u5909\u63DB"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"\u6599\u7406\u5358\u4F4D\u5909\u63DB"}</h1>
      <p className="text-muted mb-8">{"\u5927\u3055\u3058\u30FB\u5C0F\u3055\u3058\u30FB\u30AB\u30C3\u30D7\u30FBml\u30FBg\u306A\u3069\u306E\u6599\u7406\u5358\u4F4D\u3092\u76F8\u4E92\u5909\u63DB\u3057\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="flex gap-3">
          <button onClick={() => { setMode("volume"); setFromUnit("cup_jp"); }} className={"px-4 py-2 rounded-lg text-sm font-medium " + (mode === "volume" ? "bg-primary text-white" : "bg-base border border-card-border")}>{"\u4F53\u7A4D"}</button>
          <button onClick={() => { setMode("weight"); setFromUnit("g"); }} className={"px-4 py-2 rounded-lg text-sm font-medium " + (mode === "weight" ? "bg-primary text-white" : "bg-base border border-card-border")}>{"\u91CD\u3055"}</button>
        </div>
        <div className="flex gap-3">
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)} className="flex-1 p-2 border border-card-border rounded-lg bg-base text-sm" />
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="p-2 border border-card-border rounded-lg bg-base text-sm">
            {units.map((u) => <option key={u.key} value={u.key}>{u.label}</option>)}
          </select>
        </div>
        <div className="space-y-2 mt-4">
          {units.map((u) => {
            const factor = mode === "volume" ? (u as typeof UNITS[0]).toMl : (u as typeof WEIGHT_UNITS[0]).toG;
            const converted = baseValue / factor;
            const display = converted < 0.01 && converted > 0 ? converted.toExponential(2) : converted.toFixed(3);
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
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u4F53\u7A4D\u307E\u305F\u306F\u91CD\u3055\u3092\u9078\u3073\u3001\u5024\u3068\u5358\u4F4D\u3092\u5165\u529B\u3059\u308B\u3068\u4ED6\u306E\u5358\u4F4D\u306B\u81EA\u52D5\u5909\u63DB\u3055\u308C\u307E\u3059\u3002\u65E5\u672C\u306E\u30AB\u30C3\u30D7\u3068US\u30AB\u30C3\u30D7\u306E\u4E21\u65B9\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="cooking-converter" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="cooking-converter" category="\u65E5\u5E38\u30C4\u30FC\u30EB" />
    </div>
  );
}
