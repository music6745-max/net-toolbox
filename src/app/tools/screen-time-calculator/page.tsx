"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [phone, setPhone] = useState("4");
  const [pc, setPc] = useState("6");
  const [tv, setTv] = useState("2");
  const [sleep, setSleep] = useState("6");

  const result = useMemo(() => {
    const p = parseFloat(phone) || 0;
    const c = parseFloat(pc) || 0;
    const t = parseFloat(tv) || 0;
    const s = parseFloat(sleep) || 0;
    const total = p + c + t;

    let score = 100;
    score -= Math.max(0, total - 6) * 6;
    score -= Math.max(0, p - 3) * 4;
    score -= Math.max(0, 7 - s) * 5;
    score = Math.max(0, Math.min(100, Math.round(score)));

    let level = "健康的", color = "#16a34a", advice = "現在のバランスを維持しましょう。";
    if (score < 80) { level = "やや注意"; color = "#eab308"; advice = "休憩を挟み、目を休める時間を確保しましょう。"; }
    if (score < 60) { level = "注意"; color = "#f97316"; advice = "寝る1時間前はスクリーンを避け、姿勢にも気をつけて。"; }
    if (score < 40) { level = "要改善"; color = "#ef4444"; advice = "デジタルデトックスを。オンラインカウンセリングの利用も検討を。"; }

    return { total, score, level, color, advice };
  }, [phone, pc, tv, sleep]);

  const shareText = `私のスクリーンタイム健康度は${result.score}点（${result.level}）でした！ 合計${result.total}時間/日 #スクリーンタイム診断 #ネットツールボックス`;
  const shareUrl = "https://net-toolbox.jp/tools/screen-time-calculator";
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>スクリーンタイム健康度診断</span></nav>
      <h1 className="text-2xl font-bold mb-2">スクリーンタイム健康度診断</h1>
      <p className="text-muted mb-8">デバイス使用時間から健康影響度をスコア化します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-2">スマホ使用時間（h/日）</label><input type="number" value={phone} onChange={e => setPhone(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">PC使用時間（h/日）</label><input type="number" value={pc} onChange={e => setPc(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">TV視聴時間（h/日）</label><input type="number" value={tv} onChange={e => setTv(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
          <div><label className="block text-sm font-medium mb-2">睡眠時間（h/日）</label><input type="number" value={sleep} onChange={e => setSleep(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
        </div>

        <div className="mt-6 rounded-lg p-6 text-center" style={{ background: result.color + "1A", border: `1px solid ${result.color}` }}>
          <div className="text-xs text-muted mb-1">健康度スコア</div>
          <div className="text-5xl font-bold" style={{ color: result.color }}>{result.score}<span className="text-xl">/100</span></div>
          <div className="mt-2 text-lg font-semibold">{result.level}</div>
          <div className="text-sm text-muted mt-1">1日合計スクリーンタイム: {result.total}時間</div>
          <p className="text-sm mt-3">{result.advice}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href={xHref} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:opacity-80">Xで結果をシェア</a>
          <button onClick={() => { navigator.clipboard?.writeText(shareText + " " + shareUrl); }} className="px-4 py-2 rounded-lg border border-card-border text-sm font-medium hover:bg-background">結果をコピー</button>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/guide/online-counseling-comparison" className="block bg-card-bg border border-card-border rounded-xl p-5 hover:border-primary transition">
          <div className="text-sm text-primary font-semibold mb-1">関連ガイド</div>
          <div className="font-bold">オンラインカウンセリング比較</div>
          <div className="text-xs text-muted mt-1">スマホ疲れ・ストレスを感じたらプロに相談</div>
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>スマホ・PC・TVの使用時間と睡眠時間を入力すると、健康への影響度を100点満点でスコア化します。</p>
          <p>本ツールは簡易的な目安です。体調不良が続く場合は医療機関にご相談ください。</p>
        </div>
      </section>

      <AffiliateSection slug="screen-time-calculator" category="日常ツール" />
      <RelatedTools currentSlug="screen-time-calculator" category="日常ツール" />
    </div>
  );
}
