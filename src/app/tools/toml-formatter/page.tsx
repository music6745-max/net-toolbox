"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function TomlFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const format = () => {
    const lines = input.split("\n");
    const formatted: string[] = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed === "") {
        if (formatted.length > 0 && formatted[formatted.length - 1] !== "") {
          formatted.push("");
        }
        continue;
      }
      if (trimmed.startsWith("#")) {
        formatted.push(trimmed);
        continue;
      }
      if (trimmed.startsWith("[")) {
        if (formatted.length > 0 && formatted[formatted.length - 1] !== "") {
          formatted.push("");
        }
        formatted.push(trimmed);
        continue;
      }
      if (trimmed.includes("=")) {
        const eqIdx = trimmed.indexOf("=");
        const key = trimmed.substring(0, eqIdx).trim();
        const val = trimmed.substring(eqIdx + 1).trim();
        formatted.push(key + " = " + val);
      } else {
        formatted.push(trimmed);
      }
    }
    setOutput(formatted.join("\n"));
  };

  const validate = () => {
    const lines = input.split("\n");
    const errors: string[] = [];
    const keys = new Set<string>();
    let currentSection = "";
    for (let i = 0; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      if (trimmed === "" || trimmed.startsWith("#")) continue;
      if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
        currentSection = trimmed;
        continue;
      }
      if (trimmed.startsWith("[") && !trimmed.endsWith("]")) {
        errors.push((i + 1) + "\u884C\u76EE: \u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u62EC\u5F27\u304C\u9589\u3058\u3089\u308C\u3066\u3044\u307E\u305B\u3093\u3002");
        continue;
      }
      if (!trimmed.includes("=")) {
        errors.push((i + 1) + "\u884C\u76EE: key = value \u306E\u5F62\u5F0F\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002");
        continue;
      }
      const key = currentSection + "." + trimmed.substring(0, trimmed.indexOf("=")).trim();
      if (keys.has(key)) {
        errors.push((i + 1) + "\u884C\u76EE: \u30AD\u30FC\u300C" + key + "\u300D\u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059\u3002");
      }
      keys.add(key);
    }
    if (errors.length === 0) {
      setOutput("\u2705 \u30D0\u30EA\u30C7\u30FC\u30B7\u30E7\u30F3OK\uFF01\u554F\u984C\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002");
    } else {
      setOutput(errors.join("\n"));
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(output).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"TOML\u6574\u5F62"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"TOML\u6574\u5F62"}</h1>
      <p className="text-muted mb-8">{"TOML\u30C6\u30AD\u30B9\u30C8\u3092\u6574\u5F62\u30FB\u691C\u8A3C\u3057\u307E\u3059\u3002\u30AD\u30FC\u3068\u5024\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u7D71\u4E00\u3057\u3001\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6574\u3048\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={10} className="w-full p-3 border border-card-border rounded-lg bg-base text-sm font-mono" placeholder={"[package]\nname = \"my-app\"\nversion = \"0.1.0\"\n\n[dependencies]\nrequest = \"2.0\""} />
        <div className="flex gap-3 mt-4">
          <button onClick={format} className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90">{"\u6574\u5F62\u3059\u308B"}</button>
          <button onClick={validate} className="px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:opacity-90">{"\u691C\u8A3C\u3059\u308B"}</button>
        </div>
        {output && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{"\u7D50\u679C"}</span>
              <button onClick={copy} className="text-xs text-primary hover:underline">{copied ? "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F" : "\u30B3\u30D4\u30FC"}</button>
            </div>
            <pre className="w-full p-3 border border-card-border rounded-lg bg-base text-sm font-mono whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"TOML\u30C6\u30AD\u30B9\u30C8\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u300C\u6574\u5F62\u3059\u308B\u300D\u3067\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u7D71\u4E00\u3057\u307E\u3059\u3002\u300C\u691C\u8A3C\u3059\u308B\u300D\u3067\u30BB\u30AF\u30B7\u30E7\u30F3\u3084\u30AD\u30FC\u306E\u91CD\u8907\u3092\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="toml-formatter" category="\u958B\u767A\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="toml-formatter" category="\u958B\u767A\u30C4\u30FC\u30EB" />
    </div>
  );
}
