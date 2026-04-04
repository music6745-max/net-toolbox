import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URLパーサーツール - URLの構成要素を分解",
  description:
    "URLを入力してプロトコル・ホスト・ポート・パス・クエリパラメータ・ハッシュなどの構成要素を分解・表示する無料オンラインツール。",
  keywords: ["URLパーサー", "URL解析", "クエリパラメータ", "URL分解", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
