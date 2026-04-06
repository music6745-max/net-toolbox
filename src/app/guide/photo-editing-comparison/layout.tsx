import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】写真編集ソフト比較おすすめ5選｜機能・料金・初心者向けを徹底解説",
  description:
    "2026年最新の写真編集ソフトを徹底比較。Adobe Lightroom・Canva・GIMP・Pixlr・Fotor の機能・料金・使いやすさ・AI機能を詳しく解説。初心者からプロまで最適なソフトが見つかります。",
  keywords: [
    "写真編集ソフト 比較",
    "写真編集ソフト おすすめ",
    "画像編集ソフト 無料",
    "写真加工アプリ 比較 2026",
    "Lightroom 代替",
    "GIMP 使い方",
    "Canva 写真編集",
    "フォトレタッチ おすすめ",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/photo-editing-comparison`,
  },
  openGraph: {
    title: "【2026年最新】写真編集ソフト比較おすすめ5選｜機能・料金・初心者向けを徹底解説",
    description:
      "Adobe Lightroom・Canva・GIMP・Pixlr・Fotorの機能・料金を徹底比較。あなたに最適な写真編集ソフトが見つかります。",
    url: `${siteConfig.url}/guide/photo-editing-comparison`,
    type: "article",
  },
};

export default function PhotoEditingComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
