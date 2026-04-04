import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQLフォーマッターツール - SQLを見やすく整形",
  description:
    "SQLクエリを見やすく整形・フォーマットする無料オンラインツール。SELECT、FROM、WHERE、JOINなどのキーワードで自動改行・インデントします。",
  keywords: ["SQLフォーマット", "SQL整形", "SQL整形ツール", "SQLビューティファイ", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
