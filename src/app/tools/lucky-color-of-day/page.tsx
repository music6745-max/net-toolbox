"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const COLORS = [
  { name: "レッド", hex: "#E53935", meaning: "情熱・行動力。勝負ごとや新しい挑戦にツキあり。" },
  { name: "オレンジ", hex: "#FB8C00", meaning: "社交運アップ。人との出会いや会話が開運の鍵。" },
  { name: "イエロー", hex: "#FDD835", meaning: "金運・笑顔。小さな幸運が舞い込む日。" },
  { name: "グリーン", hex: "#43A047", meaning: "安定・健康。落ち着いて過ごすと運気が巡る。" },
  { name: "ターコイズ", hex: "#00ACC1", meaning: "コミュニケーション運。言葉選びを丁寧に。" },
  { name: "ブルー", hex: "#1E88E5", meaning: "集中力・仕事運。冷静な判断が吉。" },
  { name: "パープル", hex: "#8E24AA", meaning: "直感・芸術運。ひらめきを信じて行動を。" },
  { name: "ピンク", hex: "#EC407A", meaning: "恋愛運・優しさ。大切な人との時間を大事に。" },
  { name: "ホワイト", hex: "#ECEFF1", meaning: "浄化・リセット。片付けや新習慣のスタートに。" },
  { name: "ゴールド", hex: "#C9A227", meaning: "金運・成功運。自信を持って行動する日。" },
];

export default function Page() {
  const today = new Date().toISOString().slice(0, 10);
  const [birth, setBirth] = useState("1995-01-01");
  const [date, setDate] = useState(today);

  const result = useMemo(() => {
    if (!birth || !date) return null;
    const b = birth.replace(/-/g, "");
    const d = date.replace(/-/g, "");
    let sum = 0;
    for (const ch of b + d) sum += parseInt(ch, 10) || 0;
    return COLORS[sum % COLORS.length];
  }, [birth, date]);

  const shareText = result
    ? `私の今日（${date}）のラッキーカラーは「${result.name}」でした！ #ラッキーカラー診断 #ネットツールボックス`
    : "";
  const shareUrl = "https://net-toolbox.jp/tools/lucky-color-of-day";
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const lineHref = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>今日のラッキーカラー診断</span></nav>
      <h1 className="text-2xl font-bold mb-2">今日のラッキーカラー診断</h1>
      <p className="text-muted mb-8">生年月日と日付から、あなたの今日のラッキーカラーを診断します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">生年月日</label>
            <input type="date" value={birth} onChange={e => setBirth(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">診断したい日付</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        {result && (
          <div className="mt-6 rounded-lg p-6 text-center border border-card-border" style={{ background: result.hex + "22" }}>
            <div className="text-xs text-muted mb-1">今日のラッキーカラー</div>
            <div className="inline-block w-16 h-16 rounded-full shadow mb-3" style={{ background: result.hex }} />
            <div className="text-2xl font-bold mb-2">{result.name}</div>
            <p className="text-sm text-muted">{result.meaning}</p>
          </div>
        )}

        {result && (
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href={xHref} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:opacity-80">Xでシェア</a>
            <a href={lineHref} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:opacity-80">LINEで送る</a>
            <button onClick={() => { navigator.clipboard?.writeText(shareText + " " + shareUrl); }} className="px-4 py-2 rounded-lg border border-card-border text-sm font-medium hover:bg-background">結果をコピー</button>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>生年月日と診断したい日付を入力するだけで、10色の中から今日のあなたのラッキーカラーを判定します。結果はSNSでシェアできます。</p>
          <p>本ツールはエンタメ目的のため、結果の正確性を保証するものではありません。</p>
        </div>
      </section>

      <AffiliateSection slug="lucky-color-of-day" category="日常ツール" />
      <RelatedTools currentSlug="lucky-color-of-day" category="日常ツール" />
    </div>
  );
}
