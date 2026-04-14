"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [work, setWork] = useState("8");
  const [phone, setPhone] = useState("3");
  const [tv, setTv] = useState("2");
  const [game, setGame] = useState("1");

  const w = parseFloat(work) || 0;
  const p = parseFloat(phone) || 0;
  const t = parseFloat(tv) || 0;
  const g = parseFloat(game) || 0;

  const totalDaily = w + p + t + g;
  const weeklyHours = Math.round(totalDaily * 7 * 10) / 10;
  const monthlyHours = Math.round(totalDaily * 30 * 10) / 10;
  const yearlyHours = Math.round(totalDaily * 365 * 10) / 10;
  const yearlyDays = Math.round(yearlyHours / 24 * 10) / 10;

  const levelColor = totalDaily < 8 ? "text-green-600" : totalDaily <= 12 ? "text-yellow-600" : "text-red-600";
  const levelBg = totalDaily < 8 ? "bg-green-50" : totalDaily <= 12 ? "bg-yellow-50" : "bg-red-50";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>スクリーンタイム計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">スクリーンタイム計算</h1>
      <p className="text-muted mb-8">1日の画面利用時間を入力して、週間・月間・年間の合計スクリーンタイムを把握しましょう。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">仕事のPC時間／日（時間）</label>
            <input type="number" value={work} onChange={e => setWork(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">スマホ時間／日（時間）</label>
            <input type="number" value={phone} onChange={e => setPhone(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">テレビ・動画／日（時間）</label>
            <input type="number" value={tv} onChange={e => setTv(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">ゲーム／日（時間）</label>
            <input type="number" value={game} onChange={e => setGame(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" />
          </div>
        </div>
        <div className={`${levelBg} rounded-lg p-4 text-center mt-4`}>
          <div className="text-xs text-muted mb-1">1日合計スクリーンタイム</div>
          <div className={`text-2xl font-bold ${levelColor}`}>{totalDaily}時間</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">週間</div><div className="text-lg font-bold">{weeklyHours}時間</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月間</div><div className="text-lg font-bold">{monthlyHours}時間</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間</div><div className="text-lg font-bold">{yearlyHours}時間</div></div>
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間（日数換算）</div><div className="text-lg font-bold text-primary">{yearlyDays}日</div></div>
        </div>
        {totalDaily > 10 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-2">
            <p className="text-sm text-red-700 font-medium">画面時間が長めです。目の休憩を意識しましょう。</p>
            <ul className="text-sm text-red-600 mt-1 space-y-1">
              <li>・20分ごとに20秒間、6m先を見る（20-20-6ルール）</li>
              <li>・1時間に1回は立ち上がってストレッチ</li>
              <li>・就寝1時間前はブルーライトを避ける</li>
            </ul>
          </div>
        )}
        <p className="text-xs text-muted mt-2">※ 概算値です。実際の利用時間はデバイスの記録機能でご確認ください。</p>
      </div>
      <AffiliateSection slug="screen-time-calculator" category="健康ツール" />
      <RelatedTools currentSlug="screen-time-calculator" category="健康ツール" />
    </div>
  );
}
