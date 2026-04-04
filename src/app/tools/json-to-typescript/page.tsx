"use client";

import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

function inferType(value: unknown, name: string, interfaces: Map<string, string>): string {
  if (value === null) return "null";
  if (Array.isArray(value)) {
    if (value.length === 0) return "unknown[]";
    const types = new Set(value.map((item) => inferType(item, name + "Item", interfaces)));
    if (types.size === 1) return `${[...types][0]}[]`;
    return `(${[...types].join(" | ")})[]`;
  }
  if (typeof value === "object") {
    const interfaceName = name.charAt(0).toUpperCase() + name.slice(1);
    const entries = Object.entries(value as Record<string, unknown>);
    const fields = entries.map(([key, val]) => {
      const type = inferType(val, key, interfaces);
      return `  ${key}: ${type};`;
    });
    interfaces.set(interfaceName, `interface ${interfaceName} {\n${fields.join("\n")}\n}`);
    return interfaceName;
  }
  return typeof value;
}

function jsonToTs(json: string): string {
  try {
    const parsed = JSON.parse(json);
    const interfaces = new Map<string, string>();
    inferType(parsed, "Root", interfaces);
    if (interfaces.size === 0) {
      return `type Root = ${typeof parsed};`;
    }
    return [...interfaces.values()].reverse().join("\n\n");
  } catch (e) {
    return `// Error: ${(e as Error).message}`;
  }
}

const sampleJson = `{
  "id": 1,
  "name": "Taro",
  "email": "taro@example.com",
  "isActive": true,
  "address": {
    "city": "Tokyo",
    "zip": "100-0001"
  },
  "tags": ["developer", "designer"]
}`;

export default function Page() {
  const [input, setInput] = useState(sampleJson);
  const [copied, setCopied] = useState(false);

  const output = jsonToTs(input);

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>JSON→TypeScript型変換</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">JSON→TypeScript型変換</h1>
      <p className="text-muted mb-8">JSONデータからTypeScriptのインターフェース定義を自動生成。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <label className="text-sm font-medium mb-2 block">JSON入力</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="JSONデータを貼り付けてください..."
            className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            rows={10}
          />
        </div>

        <div className="relative">
          <label className="text-sm font-medium mb-2 block">TypeScript出力</label>
          <pre className="bg-black/5 dark:bg-white/5 rounded-lg px-4 py-3 text-sm font-mono overflow-x-auto whitespace-pre-wrap min-h-[120px]">{output}</pre>
          <button onClick={copy} className="absolute top-0 right-0 text-xs text-primary bg-card-bg border border-card-border rounded px-2 py-1">
            {copied ? "コピー済み" : "コピー"}
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>JSONデータをテキストエリアに貼り付けると、TypeScriptのinterface定義が自動生成されます。</p>
          <p>ネストされたオブジェクトや配列にも対応しています。生成されたコードをコピーしてご利用ください。</p>
        </div>
      </section>

      <AffiliateSection slug="json-to-typescript" category="開発ツール" />


      <RelatedTools currentSlug="json-to-typescript" category="開発ツール" />
    </div>
  );
}
