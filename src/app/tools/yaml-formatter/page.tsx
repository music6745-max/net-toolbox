"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function YamlFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const format = () => {
    setError("");
    try {
      const lines = input.split("\n");
      const formatted: string[] = [];
      let prevIndent = 0;
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed === "" || trimmed.startsWith("#")) {
          formatted.push(trimmed);
          continue;
        }
        const match = line.match(/^(\s*)/);
        const currentIndent = match ? Math.floor(match[1].length / 2) * 2 : 0;
        if (trimmed.startsWith("- ")) {
          formatted.push(" ".repeat(currentIndent) + trimmed);
        } else if (trimmed.includes(":")) {
          const colonIdx = trimmed.indexOf(":");
          const key = trimmed.substring(0, colonIdx).trim();
          const val = trimmed.substring(colonIdx + 1).trim();
          if (val) {
            formatted.push(" ".repeat(currentIndent) + key + ": " + val);
          } else {
            formatted.push(" ".repeat(currentIndent) + key + ":");
          }
        } else {
          formatted.push(" ".repeat(currentIndent) + trimmed);
        }
        prevIndent = currentIndent;
      }
      setOutput(formatted.join("\n"));
    } catch {
      setError("YAML\u306E\u89E3\u6790\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u5F62\u5F0F\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
    }
  };

  const validate = () => {
    setError("");
    const lines = input.split("\n");
    const errors: string[] = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (trimmed === "" || trimmed.startsWith("#")) continue;
      if (trimmed.includes("\t")) {
        errors.push((i + 1) + "\u884C\u76EE: \u30BF\u30D6\u6587\u5B57\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002\u30B9\u30DA\u30FC\u30B9\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      }
      if (!trimmed.startsWith("- ") && !trimmed.startsWith("#") && !trimmed.includes(":") && !trimmed.startsWith("---")) {
        errors.push((i + 1) + "\u884C\u76EE: \u30AD\u30FC: \u5024\u306E\u5F62\u5F0F\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002");
      }
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
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{"YAML\u6574\u5F62"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{"YAML\u6574\u5F62"}</h1>
      <p className="text-muted mb-8">{"YAML\u30C6\u30AD\u30B9\u30C8\u3092\u6574\u5F62\u30FB\u691C\u8A3C\u3057\u307E\u3059\u3002\u30A4\u30F3\u30C7\u30F3\u30C8\u306E\u7D71\u4E00\u3084\u57FA\u672C\u7684\u306A\u69CB\u6587\u30C1\u30A7\u30C3\u30AF\u304C\u53EF\u80FD\u3067\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={10} className="w-full p-3 border border-card-border rounded-lg bg-base text-sm font-mono" placeholder={"name: example\nversion: 1.0\nfeatures:\n  - fast\n  - simple"} />
        <div className="flex gap-3 mt-4">
          <button onClick={format} className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90">{"\u6574\u5F62\u3059\u308B"}</button>
          <button onClick={validate} className="px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:opacity-90">{"\u691C\u8A3C\u3059\u308B"}</button>
        </div>
        {error && <p className="mt-3 text-red-500 text-sm">{error}</p>}
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
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{"YAML\u30C6\u30AD\u30B9\u30C8\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u300C\u6574\u5F62\u3059\u308B\u300D\u30DC\u30BF\u30F3\u3067\u30A4\u30F3\u30C7\u30F3\u30C8\u3092\u7D71\u4E00\u3057\u307E\u3059\u3002\u300C\u691C\u8A3C\u3059\u308B\u300D\u3067\u30BF\u30D6\u6587\u5B57\u3084\u4E0D\u6B63\u306A\u5F62\u5F0F\u3092\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="yaml-formatter" category="\u958B\u767A\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="yaml-formatter" category="\u958B\u767A\u30C4\u30FC\u30EB" />
    </div>
  );
}
