"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function ButtonGeneratorPage() {
  const [text, setText] = useState("\u30DC\u30BF\u30F3");
  const [bgColor, setBgColor] = useState("#3b82f6");
  const [textColor, setTextColor] = useState("#ffffff");
  const [radius, setRadius] = useState(8);
  const [paddingX, setPaddingX] = useState(24);
  const [paddingY, setPaddingY] = useState(12);
  const [fontSize, setFontSize] = useState(16);
  const [shadow, setShadow] = useState(4);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderColor, setBorderColor] = useState("#000000");
  const [copied, setCopied] = useState(false);

  const style: React.CSSProperties = {
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: radius + "px",
    padding: paddingY + "px " + paddingX + "px",
    fontSize: fontSize + "px",
    boxShadow: shadow > 0 ? "0 " + shadow + "px " + (shadow * 2) + "px rgba(0,0,0,0.2)" : "none",
    border: borderWidth > 0 ? borderWidth + "px solid " + borderColor : "none",
    cursor: "pointer",
    fontWeight: "bold",
    display: "inline-block",
  };

  const cssCode = [
    "background-color: " + bgColor + ";",
    "color: " + textColor + ";",
    "border-radius: " + radius + "px;",
    "padding: " + paddingY + "px " + paddingX + "px;",
    "font-size: " + fontSize + "px;",
    "font-weight: bold;",
    shadow > 0 ? "box-shadow: 0 " + shadow + "px " + (shadow * 2) + "px rgba(0, 0, 0, 0.2);" : "",
    borderWidth > 0 ? "border: " + borderWidth + "px solid " + borderColor + ";" : "border: none;",
    "cursor: pointer;",
  ].filter(Boolean).join("\n");

  const copy = () => {
    navigator.clipboard.writeText(cssCode).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"CSS\u30DC\u30BF\u30F3\u751F\u6210"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"CSS\u30DC\u30BF\u30F3\u751F\u6210"}</h1>
      <p className="text-muted mb-8">{"\u8272\u3001\u5F62\u3001\u5F71\u306A\u3069\u3092\u8ABF\u6574\u3057\u3066CSS\u30DC\u30BF\u30F3\u306E\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
        <div className="flex justify-center py-8 bg-base rounded-lg">
          <button style={style}>{text}</button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium mb-1 text-muted">{"\u30DC\u30BF\u30F3\u30C6\u30AD\u30B9\u30C8"}</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-full p-2 border border-card-border rounded-lg bg-base text-sm" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1 text-muted">{"\u80CC\u666F\u8272"}</label>
              <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1 text-muted">{"\u6587\u5B57\u8272"}</label>
              <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-muted">{"\u89D2\u4E38: " + radius + "px"}</label>
            <input type="range" min={0} max={50} value={radius} onChange={(e) => setRadius(+e.target.value)} className="w-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1 text-muted">{"\u5DE6\u53F3\u4F59\u767D: " + paddingX + "px"}</label>
              <input type="range" min={4} max={60} value={paddingX} onChange={(e) => setPaddingX(+e.target.value)} className="w-full" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1 text-muted">{"\u4E0A\u4E0B\u4F59\u767D: " + paddingY + "px"}</label>
              <input type="range" min={2} max={30} value={paddingY} onChange={(e) => setPaddingY(+e.target.value)} className="w-full" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-muted">{"\u6587\u5B57\u30B5\u30A4\u30BA: " + fontSize + "px"}</label>
            <input type="range" min={10} max={32} value={fontSize} onChange={(e) => setFontSize(+e.target.value)} className="w-full" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-muted">{"\u5F71: " + shadow + "px"}</label>
            <input type="range" min={0} max={20} value={shadow} onChange={(e) => setShadow(+e.target.value)} className="w-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1 text-muted">{"\u30DC\u30FC\u30C0\u30FC\u5E45: " + borderWidth + "px"}</label>
              <input type="range" min={0} max={5} value={borderWidth} onChange={(e) => setBorderWidth(+e.target.value)} className="w-full" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1 text-muted">{"\u30DC\u30FC\u30C0\u30FC\u8272"}</label>
              <input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">CSS</span>
            <button onClick={copy} className="text-xs text-primary hover:underline">{copied ? "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F" : "\u30B3\u30D4\u30FC"}</button>
          </div>
          <pre className="p-3 border border-card-border rounded-lg bg-base text-sm font-mono whitespace-pre-wrap">{cssCode}</pre>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"\u30B9\u30E9\u30A4\u30C0\u30FC\u3084\u30AB\u30E9\u30FC\u30D4\u30C3\u30AB\u30FC\u3067\u30DC\u30BF\u30F3\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u8ABF\u6574\u3057\u3001\u751F\u6210\u3055\u308C\u305FCSS\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3057\u3066\u4F7F\u3048\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="button-generator" category="\u30C7\u30B6\u30A4\u30F3" />
      <RelatedTools currentSlug="button-generator" category="\u30C7\u30B6\u30A4\u30F3" />
    </div>
  );
}
