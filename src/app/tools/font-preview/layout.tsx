import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "フォントプレビューツール - フォントの表示を比較",
  description:
    "入力したテキストを様々なフォントで表示・比較できる無料オンラインツール。フォントサイズや太さも調整可能。",
  keywords: ["フォントプレビュー", "フォント比較", "Webフォント", "タイポグラフィ", "デザイン"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
