"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="WiFi回線速度ガイド"
        howTo={[
          "fast.com・Speedtest.net等で現在の回線速度（Mbps）を測定",
          "測定値を入力すると、各用途での快適性が判定される",
          "Netflix 4K・オンラインゲーム等の推奨速度と比較",
          "遅い場合は光回線乗り換え・WiFiルーター交換を検討",
        ]}
        faqs={[
          {
            question: "光回線の平均速度は？",
            answer: "フレッツ光：300〜500Mbps（通常時）、NURO光：600〜900Mbps、auひかり：500〜700Mbps、ソフトバンク光：300〜500Mbps、楽天ひかり：200〜400Mbps。夜間・週末は混雑で50〜80%に低下、NURO光は独自回線で混雑に強い特徴があります。",
          },
          {
            question: "4K動画・オンラインゲームに必要な速度は？",
            answer: "4K動画視聴：25Mbps以上、8K動画：50Mbps以上、オンラインゲーム：30Mbps＋低遅延（ping 20ms以下）、ストリーマー配信：50Mbps上り（アップロード）。一般家庭なら200Mbps契約で十分、ヘビーユーザーは1Gbps契約＋2.5GbE対応ルーターがおすすめです。",
          },
          {
            question: "WiFiが遅い時の対処法は？",
            answer: "①ルーターを新しいものに（WiFi6対応・1〜2万円）②ルーター位置を家の中央へ③有線LAN接続で速度2倍④メッシュWiFi導入（広い家向け）⑤回線プラン変更（10Gbpsに昇格）⑥プロバイダ変更。2017年以前のルーターは遅いため、まず交換が最も効果的です。",
          },
          {
            question: "光回線のおすすめは？",
            answer: "NURO光（下り最大2Gbps・手頃な料金）、auひかり（au割引が大きい）、ソフトバンク光（ソフトバンクユーザー向け）、楽天ひかり（楽天SPU+1倍）、ドコモ光（ドコモユーザー向け）。モバイル契約とのセット割で月2〜3千円安くなる、既存キャリアに合わせた選択が合理的です。",
          },
        ]}
      />
      <AffiliateSection slug="wifi-speed-guide" category="日常ツール" />
      <RelatedTools currentSlug="wifi-speed-guide" category="日常ツール" />
    </div>
  );
}
