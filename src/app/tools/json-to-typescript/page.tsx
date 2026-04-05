"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

function jsonToTs(json: unknown, name: string = "Root", indent: number = 0): string {
  const pad = "  ".repeat(indent);
  if (json === null) return "null";
  if (typeof json === "string") return "string";
  if (typeof json === "number") return "number";
  if (typeof json === "boolean") return "boolean";
  if (Array.isArray(json)) {
    if (json.length === 0) return "unknown[]";
    const itemType = jsonToTs(json[0], name + "Item", indent);
    if (itemType.includes("\n") || itemType.includes("{")) {
      return itemType + "[]";
    }
    return itemType + "[]";
  }
  if (typeof json === "object") {
    const entries = Object.entries(json as Record<string, unknown>);
    if (entries.length === 0) return "Record<string, unknown>";
    const fields = entries.map(([key, val]) => {
      const type = jsonToTs(val, key.charAt(0).toUpperCase() + key.slice(1), indent + 1);
      return `${pad}  ${key}: ${type};`;
    });
    return `{\n${fields.join("\n")}\n${pad}}`;
  }
  return "unknown";
}

export default function JsonToTypescriptPage() {
  const [input, setInput] = useState('{\n  "name": "太郎",\n  "age": 25,\n  "active": true,\n  "tags": ["dev", "js"]\n}');
  const [typeName, setTypeName] = useState("MyType");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const convert = () => {
    try {
      const parsed = JSON.parse(input);
      const result = `interface ${typeName} ${jsonToTs(parsed, typeName)}`;
      setOutput(result);
      setError("");
    } catch {
      setError("JSONの形式が不正です");
      setOutput("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>JSON→TypeScript変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">JSON→TypeScript変換ツール</h1>
      <p className="text-muted mb-8">JSONデータからTypeScriptの型定義を自動生成。APIレスポンスの型付けに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">型名</label>
          <input type="text" value={typeName} onChange={(e) => setTypeName(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">JSON入力</label>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={8} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y" />
        </div>
        <button onClick={convert} className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90">変換する</button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {output && (
          <div>
            <label className="block text-sm font-medium mb-1">TypeScript型定義</label>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap">{output}</pre>
            <button onClick={() => navigator.clipboard.writeText(output)} className="mt-2 text-sm text-primary hover:underline">コピー</button>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">JSON→TypeScript変換の使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>JSONデータを入力し「変換する」をクリックすると、TypeScriptのinterface定義が生成されます。</p><p>APIレスポンスの型付けやコード生成に活用できます。</p></div></section>
      <AffiliateSection slug="json-to-typescript" category="開発ツール" />
      <RelatedTools currentSlug="json-to-typescript" category="開発ツール" />
    </div>
  );
}
