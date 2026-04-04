"use client";
import { useState } from "react";
import Link from "next/link";

const escapeHtml = (s: string) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
const unescapeHtml = (s: string) => s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#039;/g,"'");

export default function HtmlEscapePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const copy = async () => { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>HTMLエスケープ</span></nav>
      <h1 className="text-2xl font-bold mb-2">HTMLエスケープ/アンエスケープツール</h1>
      <p className="text-muted mb-8">HTMLの特殊文字（&lt; &gt; &amp; &quot;）をエスケープ・アンエスケープします。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">入力テキスト</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="<div>Hello</div>" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" rows={5} />
        <div className="flex gap-3 mt-4">
          <button onClick={() => setOutput(escapeHtml(input))} className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">エスケープ</button>
          <button onClick={() => setOutput(unescapeHtml(input))} className="bg-foreground text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">アンエスケープ</button>
        </div>
        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">出力結果</span><button onClick={copy} className="text-sm text-primary font-medium">{copied ? "コピー済み" : "コピー"}</button></div>
            <pre className="bg-background rounded-lg p-4 text-sm font-mono overflow-x-auto max-h-60 overflow-y-auto whitespace-pre-wrap break-all">{output}</pre>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">HTMLエスケープツールの使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>HTMLコードを入力し、「エスケープ」で特殊文字を安全な文字参照に変換します。</p><p>「アンエスケープ」で文字参照を元の文字に戻します。XSS対策やブログ記事の作成に便利です。</p></div></section>
    </div>
  );
}
