import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "絵文字検索ツール - 無料オンライン絵文字検索",
  description: "キーワードで絵文字を検索。カテゴリ別一覧も。クリックでコピー。無料・登録不要でブラウザ上で完結。",
  keywords: ["絵文字","検索","コピー"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/emoji-search",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
