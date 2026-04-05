import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ファビコンプレビューツール - ファビコンの表示を確認",
  description:
    "テキストや絵文字を入力して、ブラウザタブでのファビコン表示をプレビューできる無料オンラインツール。背景色やフォントも自由に設定可能。",
  keywords: ["ファビコン", "favicon", "プレビュー", "ブラウザタブ", "アイコン", "デザイン"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/favicon-preview",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
