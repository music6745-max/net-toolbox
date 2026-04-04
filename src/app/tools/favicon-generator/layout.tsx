import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ファビコン生成ツール - テキストや絵文字からファビコンを作成",
  description:
    "テキストや絵文字からファビコン（favicon）を簡単に生成できる無料オンラインツール。背景色・フォントサイズを自由にカスタマイズ。",
  keywords: ["ファビコン", "favicon", "アイコン生成", "絵文字", "Webサイト", "ブラウザタブ", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
