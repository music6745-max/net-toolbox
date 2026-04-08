"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const useCases: { name: string; required: number; desc: string }[] = [
  { name: "メール・SNS", required: 1, desc: "テキスト中心の用途。1Mbps以上で快適" },
  { name: "Web閲覧", required: 3, desc: "画像が多いサイトも快適に表示" },
  { name: "音楽ストリーミング", required: 2, desc: "Spotify・Apple Music等" },
  { name: "標準画質動画（SD）", required: 3, desc: "YouTube 480p / Netflix SD" },
  { name: "HD動画（720p〜1080p）", required: 5, desc: "YouTube・Netflix HD" },
  { name: "4K動画ストリーミング", required: 25, desc: "Netflix 4K / YouTube 2160p" },
  { name: "ビデオ会議（Zoom 1対1）", required: 3, desc: "HD通話で安定" },
  { name: "ビデオ会議（Zoomグループ）", required: 8, desc: "5人以上のグループ通話" },
  { name: "オンラインゲーム（標準）", required: 30, desc: "FPS・MMOなど。低Pingも重要" },
  { name: "クラウドゲーミング", required: 50, desc: "GeForce NOW・Xbox Cloud等" },
  { name: "大容量ファイルDL", required: 100, desc: "ゲーム・OSアップデート" },
  { name: "ライブ配信（HD送信）", required: 10, desc: "Twitch・YouTube Live配信側" },
];

export default function Page() {
  const [speed, setSpeed] = useState("100");
  const s = Math.max(0, parseFloat(speed) || 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>通信速度の用途適性チェッカー</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">通信速度の用途適性チェッカー</h1>
      <p className="text-muted mb-8">あなたの回線速度（Mbps）を入力すると、動画・ゲーム・会議などの用途ごとに快適に使えるかを判定します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div>
          <label className="block text-sm font-medium mb-2">あなたの通信速度（Mbps）</label>
          <input type="number" min="0" value={speed} onChange={e => setSpeed(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <p className="text-xs text-muted mt-1">スピードテスト（fast.com等）の下り速度を入力してください</p>
        </div>

        <div className="mt-6 space-y-2">
          {useCases.map((u) => {
            const ok = s >= u.required;
            const ample = s >= u.required * 2;
            return (
              <div key={u.name} className={`flex items-center justify-between rounded-lg p-3 text-sm ${ample ? "bg-primary/10 border border-primary/30" : ok ? "bg-background border border-card-border" : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40"}`}>
                <div className="flex-1">
                  <div className="font-medium">{u.name}</div>
                  <div className="text-xs text-muted">{u.desc}（必要 {u.required}Mbps）</div>
                </div>
                <div className="text-right">
                  {ample ? <span className="text-primary font-bold">◎ 余裕</span> : ok ? <span className="font-bold">○ 可能</span> : <span className="text-red-600 dark:text-red-400 font-bold">× 不足</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="mt-8">
        <Link href="/guide/hikari-fiber-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">速度に不満なら光回線5選を比較</div>
          <p className="text-xs text-muted">NURO光・auひかり等、用途に合った高速光回線の選び方ガイドへ →</p>
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>fast.com・Googleスピードテスト等で測った下り速度（Mbps）を入力するだけ。各用途に対し「× 不足／○ 可能／◎ 余裕」の3段階で判定します。Pingやアップロード速度は別途確認してください。</p>
        </div>
      </section>

      <AffiliateSection slug="internet-speed-grade-checker" category="日常ツール" />
      <RelatedTools currentSlug="internet-speed-grade-checker" category="日常ツール" />
    </div>
  );
}
