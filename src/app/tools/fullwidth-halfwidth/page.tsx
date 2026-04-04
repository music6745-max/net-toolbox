"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const toHalf = (s: string) => s.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0)).replace(/　/g, " ");
const toFull = (s: string) => s.replace(/[A-Za-z0-9]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0xfee0)).replace(/ /g, "　");
const kataToHira = (s: string) => s.replace(/[\u30A1-\u30F6]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
const hiraToKata = (s: string) => s.replace(/[\u3041-\u3096]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));

export default function FullwidthHalfwidthPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const ops = [
    { label: "全角→半角（英数字）", fn: toHalf },
    { label: "半角→全角（英数字）", fn: toFull },
    { label: "カタカナ→ひらがな", fn: kataToHira },
    { label: "ひらがな→カタカナ", fn: hiraToKata },
  ];

  const copy = async () => { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>全角半角変換</span></nav>
      <h1 className="text-2xl font-bold mb-2">全角半角変換ツール</h1>
      <p className="text-muted mb-8">全角⇔半角の英数字変換、ひらがな⇔カタカナ変換ができます。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">入力テキスト</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="変換したいテキストを入力..." className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" rows={5} />
        <div className="flex flex-wrap gap-2 mt-4">
          {ops.map((op) => (
            <button key={op.label} onClick={() => setOutput(op.fn(input))} className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">{op.label}</button>
          ))}
        </div>
        {output && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">出力結果</span>
              <button onClick={copy} className="text-sm text-primary font-medium">{copied ? "コピー済み" : "コピー"}</button>
            </div>
            <pre className="bg-background rounded-lg p-4 text-sm overflow-x-auto max-h-60 overflow-y-auto whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">全角半角変換ツールの使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>テキストを入力し、変換ボタンをクリックするだけで全角⇔半角、ひらがな⇔カタカナの変換ができます。</p><p>データ入力の統一やテキスト整形にご活用ください。</p></div></section>


      <AffiliateSection slug="fullwidth-halfwidth" category="テキスト" />
      <RelatedTools currentSlug="fullwidth-halfwidth" category="テキスト" />
    </div>
  );
}
