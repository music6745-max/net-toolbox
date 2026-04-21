"use client";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="SNS画像サイズ一覧"
        howTo={[
          "表から使用プラットフォームを確認",
          "推奨幅・高さ・比率・ファイル形式に沿って画像作成",
          "Canva・Photoshop等で指定サイズで新規作成",
          "スマホアプリ（SNS各社）からのアップロードも同じサイズ推奨",
        ]}
        faqs={[
          {
            question: "YouTubeサムネイルのコツは？",
            answer: "推奨1280×720px（16:9比率）、2MB以内のJPG/PNG。クリック率を高めるコツ：①大きな文字（読みやすさ最優先）②顔が大きく写る③強い色のコントラスト（赤・黄・オレンジ効果的）④感情表現豊かな表情⑤数字やランキング表示。高CTR（10%超）サムネはチャンネル登録・視聴回数の決定的要素です。",
          },
          {
            question: "Instagramリール・TikTok動画のサイズは？",
            answer: "1080×1920px（9:16縦型）、再生時間60〜90秒が主流。ファイルサイズ：Instagram4GB・TikTok287MB。縦型動画はスマホ画面全体を活かしてインパクト大、横型動画より再生完了率2〜3倍高い。動画編集はCapCut（無料）・VLLO（月額）で簡単、テロップ・BGM・エフェクトを活用してバズを狙いましょう。",
          },
          {
            question: "OGP画像とは？",
            answer: "Open Graph Protocol、SNS（X・Facebook・LINE）シェア時に表示される画像。推奨1200×630px（1.91:1比率）。記事のクリック率を2〜3倍に上げる効果、記事タイトル＋画像の組合せで読者の注目を集める。WordPressならYoast SEO・All in One SEOプラグインで簡単設定、ブログ運営者必須の最適化項目です。",
          },
          {
            question: "各SNSの画像仕様変更頻度は？",
            answer: "年1〜2回変更される。公式ヘルプページ（YouTube・Instagram・X等）の最新版確認が安全。大幅な仕様変更時は既存画像のリサイズが必要、バッチ処理で一括変換がおすすめ。Canva・Figma・Photopeaの無料ツールで簡単にサイズ調整可能です。",
          },
        ]}
      />
      <AffiliateSection slug="youtube-thumbnail-size" category="日常ツール" />
      <RelatedTools currentSlug="youtube-thumbnail-size" category="日常ツール" />
    </div>
  );
}
