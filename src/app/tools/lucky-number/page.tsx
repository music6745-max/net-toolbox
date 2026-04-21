"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("6");
  const [results, setResults] = useState<number[]>([]);

  const generate = () => {
    const mn = parseInt(min) || 1;
    const mx = parseInt(max) || 100;
    const c = Math.min(parseInt(count) || 1, mx - mn + 1);
    const nums = new Set<number>();
    while (nums.size < c) nums.add(Math.floor(Math.random() * (mx - mn + 1)) + mn);
    setResults([...nums].sort((a, b) => a - b));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ラッキーナンバー生成</span></nav>
      <h1 className="text-2xl font-bold mb-2">ラッキーナンバー・抽選番号生成</h1>
      <p className="text-muted mb-8">範囲と個数を指定して重複なしのランダム番号を生成。宝くじ・抽選・ビンゴに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium mb-2">最小値</label><input type="number" value={min} onChange={e => setMin(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">最大値</label><input type="number" value={max} onChange={e => setMax(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          <div><label className="block text-sm font-medium mb-2">個数</label><input type="number" value={count} onChange={e => setCount(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        </div>
        <button onClick={generate} className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm">番号を生成</button>
        {results.length > 0 && (
          <div className="bg-primary/10 rounded-lg p-6 text-center">
            <div className="text-xs text-muted mb-2">ラッキーナンバー</div>
            <div className="flex flex-wrap justify-center gap-3">
              {results.map(n => (
                <span key={n} className="bg-primary text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">{n}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <ToolFAQSection
        toolName="ラッキーナンバー生成"
        howTo={[
          "最小値・最大値・生成個数を入力",
          "「番号を生成」で重複なしのランダム番号出力",
          "ロト6・ロト7・ビンゴ・抽選の番号選びに活用",
          "複数回生成して比較・お気に入りを選択",
        ]}
        faqs={[
          {
            question: "ロト6・ロト7の番号選びは？",
            answer: "ロト6：1〜43から6個、ロト7：1〜37から7個。完全ランダム選択（クイックピック）と分析選択（過去データ・誕生日等）の2パターン、統計的には同じ当選確率。本ツールでランダム生成→実際の購入でも「選んだ気になる」心理的満足度UPに活用できます。",
          },
          {
            question: "当選確率は？",
            answer: "ロト6（1等）約610万分の1、ロト7（1等）約1029万分の1、ナンバーズ4（ストレート）1万分の1、ミニロト（1等）約17万分の1、サッカーくじtoto（BIG当選）約478万分の1。宝くじ全般の控除率46%、トータル期待値はマイナスなので、夢を買う感覚での購入が現実的な楽しみ方です。",
          },
          {
            question: "宝くじの税金は？",
            answer: "宝くじの当選金は「当せん金付証票法」で非課税（所得税・住民税ゼロ）。1億円当選も全額手取り、日本の宝くじ独自のメリット。ただし当選金を預金すれば利息は課税、株式投資すれば売却益は課税、運用段階で税金発生する点に注意。当選後の税理士相談も重要です。",
          },
          {
            question: "確率的に当選しやすい買い方は？",
            answer: "存在しない。完全ランダムのため、「過去に出た数字」「誕生日の数字」「連番」等の選び方も当選確率は変わらない。宝くじ売り場の「当選実績」は販売枚数が多い（母数大）だけで、個別の確率は同じ。むしろ娯楽費として予算を決め（月1,000〜3,000円以内）、ワクワク感を楽しむのが賢明な付き合い方です。",
          },
        ]}
      />
      <AffiliateSection slug="lucky-number" category="日常ツール" />
      <RelatedTools currentSlug="lucky-number" category="日常ツール" />
    </div>
  );
}
