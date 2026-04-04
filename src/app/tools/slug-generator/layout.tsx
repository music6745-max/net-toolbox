import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "スラッグ生成ツール - URL用スラッグを作成",
  description:
    "日本語・英語のテキストからURL用スラッグを生成。日本語はローマ字に変換し、SEOフレンドリーなスラッグを作成します。",
  keywords: ["スラッグ", "slug", "URL", "ローマ字", "SEO", "パーマリンク"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
