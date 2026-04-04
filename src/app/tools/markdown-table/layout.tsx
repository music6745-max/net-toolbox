import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マークダウンテーブル生成ツール - 表のMarkdownを作成",
  description:
    "行数・列数を指定してデータを入力するだけでMarkdown形式の表を自動生成できる無料ツール。GitHubやQiitaなどのMarkdown記法に対応しています。",
  keywords: ["マークダウン テーブル", "Markdown 表", "Markdown 生成", "マークダウン 書き方", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
