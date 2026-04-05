import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTMLエンティティ一覧ツール - 無料オンラインHTMLエンティティ一覧",
  description: "よく使うHTMLエンティティ（特殊文字）の一覧表。コピー機能付き。無料・登録不要でブラウザ上で完結。",
  keywords: ["HTML","エンティティ","特殊文字"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/html-entities",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
