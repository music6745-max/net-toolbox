"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [speed, setSpeed] = useState("100");

  const s = parseFloat(speed) || 0;
  const uses = [
    { name: "Web閲覧・メール", min: 1, icon: "🌐" },
    { name: "SNS (画像中心)", min: 3, icon: "📱" },
    { name: "YouTube (HD 1080p)", min: 5, icon: "📺" },
    { name: "YouTube (4K)", min: 25, icon: "📺" },
    { name: "Netflix (HD)", min: 5, icon: "🎬" },
    { name: "Netflix (4K UHD)", min: 25, icon: "🎬" },
    { name: "Zoom 会議", min: 3, icon: "💻" },
    { name: "Zoom 画面共有", min: 8, icon: "💻" },
    { name: "オンラインゲーム", min: 30, icon: "🎮" },
    { name: "大容量ファイルDL", min: 50, icon: "📥" },
    { name: "4K動画配信", min: 50, icon: "📡" },
    { name: "クラウドバックアップ", min: 10, icon: "☁️" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>回線速度チェック</span></nav>
      <h1 className="text-2xl font-bold mb-2">WiFi回線速度で何ができるかチェック</h1>
      <p className="text-muted mb-8">現在の回線速度(Mbps)を入力すると、各用途で快適に使えるかを判定します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">あなたの回線速度(Mbps)</label><input type="number" value={speed} onChange={e => setSpeed(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="mt-4 space-y-2">
          {uses.map(u => (
            <div key={u.name} className="flex items-center justify-between bg-background rounded-lg p-3 text-sm">
              <span>{u.icon} {u.name} (推奨{u.min}Mbps)</span>
              <span className={`font-bold ${s >= u.min ? 'text-green-500' : 'text-red-500'}`}>{s >= u.min ? '快適' : '遅い可能性'}</span>
            </div>
          ))}
        </div>
      </div>
      <AffiliateSection slug="wifi-speed-guide" category="日常ツール" />
      <RelatedTools currentSlug="wifi-speed-guide" category="日常ツール" />
    </div>
  );
}
