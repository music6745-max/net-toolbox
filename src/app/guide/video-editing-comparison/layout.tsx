import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】動画編集ソフト比較おすすめ5選｜機能・料金・初心者〜プロ向けを徹底解説",
  description:
    "2026年最新の動画編集ソフトを徹底比較。Adobe Premiere Pro・DaVinci Resolve・CapCut・Filmora・PowerDirector の機能・料金・対応環境を詳しく解説。YouTube・SNS動画制作に最適なソフトが見つかります。",
  keywords: [
    "動画編集ソフト 比較",
    "動画編集ソフト おすすめ",
    "動画編集 無料",
    "YouTube 動画編集 おすすめ",
    "DaVinci Resolve 比較",
    "Premiere Pro 比較",
    "CapCut PC",
    "動画編集 初心者 おすすめ",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/video-editing-comparison`,
  },
  openGraph: {
    title: "【2026年最新】動画編集ソフト比較おすすめ5選｜機能・料金・初心者〜プロ向けを徹底解説",
    description:
      "Adobe Premiere Pro・DaVinci Resolve・CapCut・Filmora・PowerDirectorの機能・料金を徹底比較。",
    url: `${siteConfig.url}/guide/video-editing-comparison`,
    type: "article",
  },
};

export default function VideoEditingComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
