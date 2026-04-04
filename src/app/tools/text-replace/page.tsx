"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function TextReplacePage() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [replace, setReplace] = useState("");
  const [useRegex, setUseRegex] = useState(false);
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const doReplace = () => {
    try {
      if (useRegex) {
        const re = new RegExp(search, "g");
        const matches = text.match(re);
        setCount(matches ? matches.length : 0);
        setResult(text.replace(re, replace));
      } else {
        const cnt = text.split(search).length - 1;
        setCount(cnt);
        setResult(text.replaceAll(search, replace));
      }
    } catch {
      setResult("正規表現のエラーです");
      setCount(0);
    }
  };
  const copy = async () => { await navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>テキスト置換</span></nav>
      <h1 className="text-2xl font-bold mb-2">テキスト置換ツール</h1>
      <p className="text-muted mb-8">テキスト内の文字列を一括で検索・置換します。正規表現にも対応。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">テキスト</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="置換対象のテキストを入力..." className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" rows={6} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div><label className="block text-sm text-muted mb-1">検索文字列</label><input value={search} onChange={(e) => setSearch(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm text-muted mb-1">置換文字列</label><input value={replace} onChange={(e) => setReplace(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <label className="flex items-center gap-2 text-sm cursor-pointer"><input type="checkbox" checked={useRegex} onChange={(e) => setUseRegex(e.target.checked)} className="accent-primary w-4 h-4" />正規表現を使用</label>
          <button onClick={doReplace} className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover">置換実行</button>
        </div>
        {result && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium">{count}箇所を置換</span><button onClick={copy} className="text-sm text-primary font-medium">{copied ? "コピー済み" : "コピー"}</button></div>
            <pre className="bg-background rounded-lg p-4 text-sm overflow-x-auto max-h-60 overflow-y-auto whitespace-pre-wrap">{result}</pre>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">テキスト置換ツールの使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>テキストを入力し、検索文字列と置換文字列を指定して「置換実行」をクリックします。</p><p>正規表現を有効にすると、パターンマッチによる高度な置換も可能です。</p></div></section>


      <RelatedTools currentSlug="text-replace" category="テキスト" />
    </div>
  );
}
