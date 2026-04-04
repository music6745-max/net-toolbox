import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTTPステータスコード一覧 - ステータスコードの意味を検索",
  description:
    "HTTPステータスコードの一覧と意味を日本語で解説。1xx〜5xxの全ステータスコードを検索・確認できる無料ツール。",
  keywords: ["HTTPステータスコード", "ステータスコード一覧", "404", "500", "HTTP", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
