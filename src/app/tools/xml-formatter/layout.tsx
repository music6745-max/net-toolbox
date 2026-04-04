import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XML整形ツール - XMLを見やすくフォーマット",
  description:
    "XMLデータを見やすく整形・フォーマットする無料オンラインツール。適切なインデントで階層構造を分かりやすく表示します。",
  keywords: ["XML整形", "XMLフォーマット", "XML整形ツール", "XMLビューティファイ", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
