"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function EnvValidatorPage() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [valid, setValid] = useState<boolean | null>(null);

  const validate = () => {
    const lines = input.split("\n");
    const errors: string[] = [];
    const keys = new Map<string, number>();
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === "" || line.startsWith("#")) continue;
      if (!line.includes("=")) {
        errors.push((i + 1) + "\u884C\u76EE: KEY=VALUE \u306E\u5F62\u5F0F\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002");
        continue;
      }
      const eqIdx = line.indexOf("=");
      const key = line.substring(0, eqIdx).trim();
      const value = line.substring(eqIdx + 1).trim();
      if (key === "") {
        errors.push((i + 1) + "\u884C\u76EE: \u30AD\u30FC\u304C\u7A7A\u3067\u3059\u3002");
        continue;
      }
      if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) {
        errors.push((i + 1) + "\u884C\u76EE: \u30AD\u30FC\u300C" + key + "\u300D\u306B\u7121\u52B9\u306A\u6587\u5B57\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002");
      }
      if (keys.has(key)) {
        errors.push((i + 1) + "\u884C\u76EE: \u30AD\u30FC\u300C" + key + "\u300D\u304C" + keys.get(key) + "\u884C\u76EE\u3068\u91CD\u8907\u3057\u3066\u3044\u307E\u3059\u3002");
      }
      keys.set(key, i + 1);
      if (value === "") {
        errors.push((i + 1) + "\u884C\u76EE: \u30AD\u30FC\u300C" + key + "\u300D\u306E\u5024\u304C\u7A7A\u3067\u3059\u3002");
      }
      if (value.startsWith("\"") && !value.endsWith("\"")) {
        errors.push((i + 1) + "\u884C\u76EE: \u30AF\u30A9\u30FC\u30C8\u304C\u9589\u3058\u3089\u308C\u3066\u3044\u307E\u305B\u3093\u3002");
      }
    }
    setResults(errors);
    setValid(errors.length === 0);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">{"\u30C8\u30C3\u30D7"}</Link><span className="mx-2">/</span><span>{".env\u691C\u8A3C"}</span></nav>
      <h1 className="text-2xl font-bold mb-2">{".env\u691C\u8A3C"}</h1>
      <p className="text-muted mb-8">{".env\u30D5\u30A1\u30A4\u30EB\u306E\u5185\u5BB9\u3092\u691C\u8A3C\u3057\u307E\u3059\u3002\u91CD\u8907\u30AD\u30FC\u3001\u7A7A\u306E\u5024\u3001\u4E0D\u6B63\u306A\u5F62\u5F0F\u3092\u691C\u51FA\u3057\u307E\u3059\u3002"}</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={10} className="w-full p-3 border border-card-border rounded-lg bg-base text-sm font-mono" placeholder={"DATABASE_URL=postgres://localhost:5432/db\nAPI_KEY=your-api-key\nDEBUG=true"} />
        <button onClick={validate} className="mt-4 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90">{"\u691C\u8A3C\u3059\u308B"}</button>
        {valid !== null && (
          <div className="mt-4">
            {valid ? (
              <p className="text-green-500 font-medium">{"\u2705 \u3059\u3079\u3066\u306E\u30C1\u30A7\u30C3\u30AF\u306B\u5408\u683C\u3057\u307E\u3057\u305F\uFF01"}</p>
            ) : (
              <div className="space-y-1">
                {results.map((r, i) => <p key={i} className="text-red-500 text-sm">{r}</p>)}
              </div>
            )}
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">{"\u4F7F\u3044\u65B9"}</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>{".env\u30D5\u30A1\u30A4\u30EB\u306E\u5185\u5BB9\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u300C\u691C\u8A3C\u3059\u308B\u300D\u3092\u62BC\u3059\u3068\u3001\u30AD\u30FC\u306E\u91CD\u8907\u3001\u7A7A\u306E\u5024\u3001\u4E0D\u6B63\u306A\u30AD\u30FC\u540D\u306A\u3069\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\u3002"}</p></div></section>
      <AffiliateSection slug="env-validator" category="\u958B\u767A\u30C4\u30FC\u30EB" />
      <RelatedTools currentSlug="env-validator" category="\u958B\u767A\u30C4\u30FC\u30EB" />
    </div>
  );
}
