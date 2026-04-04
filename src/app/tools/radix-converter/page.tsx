"use client";
import { useState } from "react";
import Link from "next/link";

export default function RadixConverterPage() {
  const [input, setInput] = useState("255");
  const [base, setBase] = useState(10);

  let decimal = 0;
  let error = "";
  try { decimal = parseInt(input, base); if (isNaN(decimal)) error = "無効な値です"; } catch { error = "変換エラー"; }

  const conversions = error ? [] : [
    { label: "2進数", value: decimal.toString(2) },
    { label: "8進数", value: decimal.toString(8) },
    { label: "10進数", value: decimal.toString(10) },
    { label: "16進数", value: decimal.toString(16).toUpperCase() },
  ];

  const [copied, setCopied] = useState("");
  const copy = async (v: string, l: string) => { await navigator.clipboard.writeText(v); setCopied(l); setTimeout(() => setCopied(""), 2000); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>進数変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">進数変換ツール</h1>
      <p className="text-muted mb-8">2進数・8進数・10進数・16進数を相互変換します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">入力値</label>
            <input value={input} onChange={(e) => setInput(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">入力の基数</label>
            <select value={base} onChange={(e) => setBase(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value={2}>2進数</option><option value={8}>8進数</option><option value={10}>10進数</option><option value={16}>16進数</option>
            </select>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        {conversions.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {conversions.map((c) => (
              <div key={c.label} className="bg-background rounded-lg p-4 text-center cursor-pointer hover:ring-2 hover:ring-primary/30" onClick={() => copy(c.value, c.label)}>
                <div className="text-lg font-bold text-primary font-mono break-all">{c.value}</div>
                <div className="text-xs text-muted mt-1">{c.label} {copied === c.label && "✓"}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">進数変換ツールの使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>値を入力し、その値の基数を選択すると、2進数・8進数・10進数・16進数に自動変換されます。</p><p>プログラミングやネットワーク設定での進数変換にご活用ください。各値をクリックでコピーできます。</p></div></section>
    </div>
  );
}
