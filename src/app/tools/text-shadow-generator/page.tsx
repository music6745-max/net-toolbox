"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function TextShadowGeneratorPage() {
  const [text, setText] = useState("\u30B5\u30F3\u30D7\u30EB\u30C6\u30AD\u30B9\u30C8");
  const [offsetX, setOffsetX] = useState(2);
  const [offsetY, setOffsetY] = useState(2);
  const [blur, setBlur] = useState(4);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(0.5);
  const [textColor, setTextColor] = useState("#333333");
  const [fontSize, setFontSize] = useState(32);
  const [copied, setCopied] = useState(false);

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  };

  const shadowValue = offsetX + "px " + offsetY + "px " + blur + "px " + hexToRgba(color, opacity);
  const cssCode = "text-shadow: " + shadowValue + ";";

  const previewStyle: React.CSSProperties = {
    textShadow: shadowValue,
    color: textColor,
    fontSize: fontSize + "px",
    fontWeight: "bold",
  };

  const copy = () => {
    navigator.clipboard.writeText(cssCode).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  const PRESETS = [
    { label: "\u30BD\u30D5\u30C8", x: 1, y: 1, b: 3, c: "#000000", o: 0.3 },
    { label: "\u30CF\u30FC\u30C9", x: 3, y: 3, b: 0, c: "#000000", o: 0.5 },
    { label: "\u30CD\u30AA\u30F3", x: 0, y: 0, b: 10, c: "#00ff00", o: 1 },
    { label: "\u30A8\u30F3\u30DC\u30B9", x: 2, y: 2, b: 0, c: "#888888", o: 1 },
    { label: "\u30B0\u30ED\u30FC", x: 0, y: 0, b: 20, c: "#3b82f6", o: 0.8 },
    { label: "\u30EC\u30C8\u30ED", x: 3, y: 3, b: 0, c: "#ff6600", o: 0.8 },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"\u30C6\u30AD\u30B9\u30C8\u30B7\u30E3\u30C9\u30A6\u751F\u6210"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"\u30C6\u30AD\u30B9\u30C8\u30B7\u30E3\u30C9\u30A6\u751F\u6210"}</h1>
      <p className="text-muted mb-8">{"\u30B9\u30E9\u30A4\u30C0\u30FC\u3067\u8ABF\u6574\u3057\u3066CSS text-shadow\u306E\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div className="flex justify-center py-10 bg-base rounded-lg">
          <span style={previewStyle}>{text}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button key={p.label} onClick={() => { setOffsetX(p.x); setOffsetY(p.y); setBlur(p.b); setColor(p.c); setOpacity(p.o); }} className="px-3 py-1 text-xs border border-card-border rounded-full hover:bg-base">{p.label}</button>
          ))}
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium mb-1 text-muted">{"\u30C6\u30AD\u30B9\u30C8"}</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-full p-2 border border-card-border rounded-lg bg-base text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-muted">{"X\u30AA\u30D5\u30BB\u30C3\u30C8: " + offsetX + "px"}</label>
            <input type="range" min={-20} max={20} value={offsetX} onChange={(e) => setOffsetX(+e.target.value)} className="w-full" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-muted">{"Y\u30AA\u30D5\u30BB\u30C3\u30C8: " + offsetY + "px"}</label>
            <input type="range" min={-20} max={20} value={offsetY} onChange={(e) => setOffsetY(+e.target.value)} className="w-full" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-muted">{"\u30D6\u30E9\u30FC: " + blur + "px"}</label>
            <input type="range" min={0} max={30} value={blur} onChange={(e) => setBlur(+e.target.value)} className="w-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1 text-muted">{"\u5F71\u306E\u8272"}</label>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1 text-muted">{"\u6587\u5B57\u8272"}</label>
              <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-muted">{"\u900F\u660E\u5EA6: " + Math.round(opacity * 100) + "%"}</label>
            <input type="range" min={0} max={1} step={0.05} value={opacity} onChange={(e) => setOpacity(+e.target.value)} className="w-full" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-muted">{"\u6587\u5B57\u30B5\u30A4\u30BA: " + fontSize + "px"}</label>
            <input type="range" min={16} max={64} value={fontSize} onChange={(e) => setFontSize(+e.target.value)} className="w-full" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">CSS</span>
            <button onClick={copy} className="text-xs text-primary hover:underline">{copied ? "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F" : "\u30B3\u30D4\u30FC"}</button>
          </div>
          <pre className="p-3 border border-card-border rounded-lg bg-base text-sm font-mono">{cssCode}</pre>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u30D7\u30EA\u30BB\u30C3\u30C8\u3092\u9078\u3076\u304B\u30B9\u30E9\u30A4\u30C0\u30FC\u3067\u5F71\u306E\u4F4D\u7F6E\u30FB\u30D6\u30E9\u30FC\u30FB\u8272\u3092\u8ABF\u6574\u3057\u3001\u751F\u6210\u3055\u308C\u305FCSS\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3057\u3066\u4F7F\u3048\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="text-shadow-generator" category="\u30C7\u30B6\u30A4\u30F3" />
      <RelatedTools currentSlug="text-shadow-generator" category="\u30C7\u30B6\u30A4\u30F3" />
    </div>
  );
}
