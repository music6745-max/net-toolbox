import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTTPステータスコード一覧 - コードの意味を検索・確認",
  description:
    "HTTPステータスコードの意味を一覧表示・検索できる無料ツール。1xx〜5xxの全コードを日本語で解説。Web開発の参照に便利。",
  keywords: ["HTTPステータスコード", "ステータスコード", "HTTP", "404", "500", "Web開発", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
