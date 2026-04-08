"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Item = { key: string; label: string; base: number; hint?: string };

const ITEMS: Item[] = [
  { key: "desk", label: "デスク", base: 20000, hint: "昇降式なら3〜6万円" },
  { key: "chair", label: "チェア", base: 30000, hint: "長時間座るなら5万円以上推奨" },
  { key: "monitor", label: "モニター", base: 25000, hint: "27インチ4Kが人気" },
  { key: "keyboard", label: "キーボード・マウス", base: 10000 },
  { key: "webcam", label: "Webカメラ・マイク", base: 8000 },
  { key: "lighting", label: "照明（デスクライト）", base: 5000 },
  { key: "wifi", label: "高速Wi-Fi環境の整備", base: 15000, hint: "ルーター買い替えなど" },
  { key: "stationery", label: "文房具・収納", base: 5000 },
];

export default function Page() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() => Object.fromEntries(ITEMS.map((i) => [i.key, true])));
  const [quality, setQuality] = useState<"budget" | "standard" | "premium">("standard");
  const mult = quality === "budget" ? 0.6 : quality === "premium" ? 1.8 : 1;

  const total = ITEMS.filter((i) => enabled[i.key]).reduce((sum, i) => sum + i.base * mult, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>在宅勤務環境構築費用シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">在宅勤務環境構築費用シミュレーター</h1>
      <p className="text-muted mb-8">リモートワーク用の作業環境を整えるのに必要な費用を項目別に試算。予算計画に役立ちます。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">品質レベル</label>
          <div className="flex gap-2">
            {([
              { v: "budget", label: "節約" },
              { v: "standard", label: "標準" },
              { v: "premium", label: "こだわり" },
            ] as const).map((q) => (
              <button key={q.v} onClick={() => setQuality(q.v)} className={`px-4 py-2 rounded-lg text-sm font-medium border ${quality === q.v ? "bg-primary text-white border-primary" : "border-card-border hover:bg-background"}`}>{q.label}</button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {ITEMS.map((it) => (
            <label key={it.key} className="flex items-center gap-3 p-3 border border-card-border rounded-lg hover:bg-background cursor-pointer">
              <input type="checkbox" checked={!!enabled[it.key]} onChange={() => setEnabled((s) => ({ ...s, [it.key]: !s[it.key] }))} />
              <div className="flex-1">
                <div className="text-sm font-medium">{it.label}</div>
                {it.hint && <div className="text-xs text-muted">{it.hint}</div>}
              </div>
              <div className="text-sm font-bold">¥{Math.round(it.base * mult).toLocaleString()}</div>
            </label>
          ))}
        </div>

        <div className="mt-6 bg-primary/10 rounded-lg p-4 text-center">
          <div className="text-xs text-muted mb-1">合計費用</div>
          <div className="text-2xl font-bold text-primary">¥{Math.round(total).toLocaleString()}</div>
        </div>
      </div>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>必要な項目をチェックし、品質レベルを選ぶと費用の目安が表示されます。在宅勤務補助金の申請や、会社から支給される手当の範囲内で揃える計画に活用してください。</p></div></section>

      <section className="mt-10 mb-6">
        <Link href="/guide/remote-work-tools" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">リモートワークおすすめツールガイド</div>
          <p className="text-xs text-muted">在宅勤務の生産性を上げるツール紹介 →</p>
        </Link>
      </section>

      <AffiliateSection slug="work-from-home-setup-cost" category="日常ツール" />
      <RelatedTools currentSlug="work-from-home-setup-cost" category="日常ツール" />
    </div>
  );
}
