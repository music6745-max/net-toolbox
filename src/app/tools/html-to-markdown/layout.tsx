import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML→Markdown変換ツール - 無料オンラインHTML→Markdown変換",
  description: "HTMLコードをMarkdown記法に変換。ブログ記事の移行等に便利。無料・登録不要でブラウザ上で完結。",
  keywords: ["HTML","Markdown","変換"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
