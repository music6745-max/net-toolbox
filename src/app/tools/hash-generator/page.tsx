"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

async function hashText(text: string, algorithm: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function HashGeneratorPage() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<{ name: string; value: string }[]>([]);
  const [copied, setCopied] = useState("");

  const generate = async () => {
    if (!input) return;
    const results = await Promise.all([
      hashText(input, "SHA-1").then((v) => ({ name: "SHA-1", value: v })),
      hashText(input, "SHA-256").then((v) => ({ name: "SHA-256", value: v })),
      hashText(input, "SHA-384").then((v) => ({ name: "SHA-384", value: v })),
      hashText(input, "SHA-512").then((v) => ({ name: "SHA-512", value: v })),
    ]);
    setHashes(results);
  };

  const copy = async (value: string, name: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(name);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ハッシュ生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ハッシュ生成ツール</h1>
      <p className="text-muted mb-8">
        テキストからSHA-1、SHA-256、SHA-384、SHA-512のハッシュ値を生成します。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">入力テキスト</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ハッシュ化したいテキストを入力..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          rows={4}
        />
        <button onClick={generate}
          className="mt-4 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
          ハッシュを生成
        </button>

        {hashes.length > 0 && (
          <div className="mt-6 space-y-4">
            {hashes.map((h) => (
              <div key={h.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{h.name}</span>
                  <button onClick={() => copy(h.value, h.name)}
                    className="text-xs text-primary hover:text-primary-hover font-medium">
                    {copied === h.name ? "コピー済み" : "コピー"}
                  </button>
                </div>
                <div className="bg-background rounded-lg p-3 text-xs font-mono break-all">{h.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">ハッシュ生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストを入力し「ハッシュを生成」をクリックすると、各種ハッシュアルゴリズムによるハッシュ値が表示されます。</p>
          <p>SHA-1、SHA-256、SHA-384、SHA-512に対応しています。</p>
          <p>データの整合性チェックやセキュリティ用途にご活用ください。すべての処理はブラウザ内で完結します。</p>
        </div>
      </section>


      <AffiliateSection slug="hash-generator" category="セキュリティ" />
      <RelatedTools currentSlug="hash-generator" category="セキュリティ" />
    </div>
  );
}
