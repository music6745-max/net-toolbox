"use client";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const platforms = [
  { name: "YouTubeサムネイル", w: 1280, h: 720, ratio: "16:9", max: "2MB", format: "JPG/PNG/GIF/BMP" },
  { name: "YouTubeバナー", w: 2560, h: 1440, ratio: "16:9", max: "6MB", format: "JPG/PNG" },
  { name: "Instagramフィード", w: 1080, h: 1080, ratio: "1:1", max: "30MB", format: "JPG/PNG" },
  { name: "Instagramストーリー", w: 1080, h: 1920, ratio: "9:16", max: "30MB", format: "JPG/PNG/MP4" },
  { name: "Instagramリール", w: 1080, h: 1920, ratio: "9:16", max: "4GB", format: "MP4" },
  { name: "TikTok", w: 1080, h: 1920, ratio: "9:16", max: "287MB", format: "MP4/MOV" },
  { name: "X(Twitter)投稿画像", w: 1200, h: 675, ratio: "16:9", max: "5MB", format: "JPG/PNG/GIF" },
  { name: "Xヘッダー画像", w: 1500, h: 500, ratio: "3:1", max: "5MB", format: "JPG/PNG" },
  { name: "Facebookカバー", w: 820, h: 312, ratio: "2.63:1", max: "100KB推奨", format: "JPG/PNG" },
  { name: "Facebook投稿画像", w: 1200, h: 630, ratio: "1.91:1", max: "30MB", format: "JPG/PNG" },
  { name: "noteカバー", w: 1280, h: 670, ratio: "1.91:1", max: "10MB", format: "JPG/PNG" },
  { name: "OGP画像", w: 1200, h: 630, ratio: "1.91:1", max: "-", format: "JPG/PNG" },
  { name: "Googleビジネスプロフィール", w: 720, h: 720, ratio: "1:1", max: "5MB", format: "JPG/PNG" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>SNS画像サイズ一覧</span></nav>
      <h1 className="text-2xl font-bold mb-2">SNS・動画プラットフォーム推奨画像サイズ一覧</h1>
      <p className="text-muted mb-8">YouTube・Instagram・TikTok・X等の推奨画像サイズをまとめて確認。サムネイル・バナー・投稿画像の作成に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-card-border"><th className="text-left py-2 px-2">用途</th><th className="text-right py-2 px-2">幅</th><th className="text-right py-2 px-2">高さ</th><th className="text-center py-2 px-2">比率</th><th className="text-right py-2 px-2">上限</th><th className="text-left py-2 px-2">形式</th></tr></thead>
            <tbody>
              {platforms.map(p => (
                <tr key={p.name} className="border-b border-card-border/50 hover:bg-primary/5">
                  <td className="py-2 px-2 font-bold text-xs">{p.name}</td>
                  <td className="py-2 px-2 text-right font-mono">{p.w}</td>
                  <td className="py-2 px-2 text-right font-mono">{p.h}</td>
                  <td className="py-2 px-2 text-center text-muted">{p.ratio}</td>
                  <td className="py-2 px-2 text-right text-muted text-xs">{p.max}</td>
                  <td className="py-2 px-2 text-muted text-xs">{p.format}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AffiliateSection slug="youtube-thumbnail-size" category="日常ツール" />
      <RelatedTools currentSlug="youtube-thumbnail-size" category="日常ツール" />
    </div>
  );
}
