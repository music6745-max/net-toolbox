import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON整形ツール - JSONを見やすくフォーマット",
  description:
    "JSONデータを見やすく整形（フォーマット）・圧縮（ミニファイ）する無料オンラインツール。構文エラーの検出機能付き。",
  keywords: ["JSON整形", "JSONフォーマット", "JSON変換", "JSON", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
