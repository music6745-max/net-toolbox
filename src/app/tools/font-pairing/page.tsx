"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const FONTS = [
  { name: "Noto Sans JP", family: "'Noto Sans JP', sans-serif", type: "ゴシック" },
  { name: "Noto Serif JP", family: "'Noto Serif JP', serif", type: "明朝" },
  { name: "M PLUS Rounded 1c", family: "'M PLUS Rounded 1c', sans-serif", type: "丸ゴシック" },
  { name: "Zen Kaku Gothic New", family: "'Zen Kaku Gothic New', sans-serif", type: "ゴシック" },
  { name: "Zen Old Mincho", family: "'Zen Old Mincho', serif", type: "明朝" },
  { name: "Kosugi Maru", family: "'Kosugi Maru', sans-serif", type: "丸ゴシック" },
  { name: "Sawarabi Gothic", family: "'Sawarabi Gothic', sans-serif", type: "ゴシック" },
  { name: "Sawarabi Mincho", family: "'Sawarabi Mincho', serif", type: "明朝" },
];

const PAIRINGS = [
  { heading: 0, body: 3, desc: "見出しにNoto Sans、本文にZen Kakuで安定感のある組み合わせ" },
  { heading: 1, body: 0, desc: "明朝の見出しとゴシックの本文で格式ある印象" },
  { heading: 4, body: 5, desc: "Old Minchoの見出しと丸ゴシックの本文で親しみやすさと品格" },
  { heading: 2, body: 6, desc: "丸ゴシックの見出しとSawarabiの本文でカジュアルな雰囲気" },
  { heading: 7, body: 3, desc: "明朝の見出しとゴシックの本文のクラシックな組み合わせ" },
];

export default function FontPairingPage() {
  const [headingIdx, setHeadingIdx] = useState(0);
  const [bodyIdx, setBodyIdx] = useState(3);
  const [sampleText, setSampleText] = useState("吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>フォント組み合わせ</span></nav>
      <h1 className="text-2xl font-bold mb-2">フォント組み合わせツール</h1>
      <p className="text-muted mb-8">見出しと本文のフォント組み合わせをプレビューできます。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">見出しフォント</label>
            <select value={headingIdx} onChange={e => setHeadingIdx(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent">
              {FONTS.map((f, i) => <option key={i} value={i}>{f.name} ({f.type})</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">本文フォント</label>
            <select value={bodyIdx} onChange={e => setBodyIdx(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent">
              {FONTS.map((f, i) => <option key={i} value={i}>{f.name} ({f.type})</option>)}
            </select>
          </div>
        </div>
        <div><label className="block text-sm font-medium mb-1">サンプルテキスト</label><input type="text" value={sampleText} onChange={e => setSampleText(e.target.value)} className="w-full border border-card-border rounded-lg px-3 py-2 bg-transparent" /></div>
        <div className="border border-card-border rounded-lg p-6 space-y-3">
          <h2 style={{ fontFamily: FONTS[headingIdx].family }} className="text-2xl font-bold">見出しテキスト</h2>
          <h3 style={{ fontFamily: FONTS[headingIdx].family }} className="text-lg font-semibold">サブ見出しテキスト</h3>
          <p style={{ fontFamily: FONTS[bodyIdx].family }} className="leading-relaxed">{sampleText}</p>
          <p style={{ fontFamily: FONTS[bodyIdx].family }} className="text-sm text-muted">ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789</p>
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-3">おすすめ組み合わせ</h3>
          <div className="space-y-2">
            {PAIRINGS.map((p, i) => (
              <button key={i} onClick={() => { setHeadingIdx(p.heading); setBodyIdx(p.body); }} className="w-full text-left border border-card-border rounded-lg p-3 hover:border-primary transition">
                <p className="text-sm font-medium">{FONTS[p.heading].name} + {FONTS[p.body].name}</p>
                <p className="text-xs text-muted mt-1">{p.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted leading-relaxed space-y-2"><p>見出し用と本文用のフォントを選択すると、プレビューが表示されます。おすすめの組み合わせも用意しています。</p></div></section>
      <AffiliateSection slug="font-pairing" category="デザイン" />
      <RelatedTools currentSlug="font-pairing" category="デザイン" />
    </div>
  );
}
