"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  let matches: { match: string; index: number; groups: string[] }[] = [];
  if (pattern && text) {
    try {
      const re = new RegExp(pattern, flags);
      let m;
      if (flags.includes("g")) {
        while ((m = re.exec(text)) !== null) {
          matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
          if (!m[0]) break;
        }
      } else {
        m = re.exec(text);
        if (m) matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
      }
      setError && error && setError("");
    } catch (e) {
      if (!error) setError((e as Error).message);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>正規表現テスト</span></nav>
      <h1 className="text-2xl font-bold mb-2">正規表現テストツール</h1>
      <p className="text-muted mb-8">正規表現パターンをリアルタイムでテストし、マッチ結果を確認できます。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex gap-3 items-end mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">正規表現パターン</label>
            <input value={pattern} onChange={(e) => { setPattern(e.target.value); setError(""); }}
              placeholder="[0-9]+" className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div className="w-24">
            <label className="block text-sm font-medium mb-1">フラグ</label>
            <input value={flags} onChange={(e) => setFlags(e.target.value)}
              className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <label className="block text-sm font-medium mb-1">テストテキスト</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="テストしたいテキストを入力..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" rows={5} />
        {matches.length > 0 && (
          <div className="mt-4">
            <div className="text-sm font-medium mb-2">{matches.length}件のマッチ</div>
            <div className="space-y-2">
              {matches.map((m, i) => (
                <div key={i} className="bg-background rounded-lg p-3 text-sm font-mono">
                  <span className="text-primary font-bold">{m.match}</span>
                  <span className="text-muted ml-2">(index: {m.index})</span>
                  {m.groups.length > 0 && <span className="text-muted ml-2">groups: [{m.groups.join(", ")}]</span>}
                </div>
              ))}
            </div>
          </div>
        )}
        {pattern && text && matches.length === 0 && !error && <p className="text-muted text-sm mt-4">マッチなし</p>}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">正規表現テストツールの使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>正規表現パターンとフラグを入力し、テストテキストに対するマッチ結果をリアルタイムで確認できます。</p><p>フラグには g（グローバル）、i（大文字小文字無視）、m（複数行）などが使えます。</p></div></section>


      <AffiliateSection slug="regex-tester" category="開発ツール" />
      <RelatedTools currentSlug="regex-tester" category="開発ツール" />
    </div>
  );
}
