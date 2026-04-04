import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markdownチートシートツール - 無料オンラインMarkdownチートシート",
  description: "Markdown記法の早見表。見出し・リスト・表・コードブロック等の書き方を一覧。無料・登録不要でブラウザ上で完結。",
  keywords: ["Markdown","チートシート","記法"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
