import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSSフォーマッターツール - CSSを見やすく整形",
  description:
    "CSSコードを見やすく整形・フォーマットする無料オンラインツール。適切なインデントと改行を自動で追加します。",
  keywords: ["CSSフォーマット", "CSS整形", "CSSビューティファイ", "CSS整形ツール", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
