import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "正規表現チートシート - 正規表現の書き方一覧",
  description:
    "正規表現の構文と使い方を一覧で確認できる無料チートシート。基本・量指定子・グループ・アンカー・文字クラス・先読み後読みなどカテゴリ別に解説。",
  keywords: ["正規表現", "regex", "チートシート", "正規表現一覧", "正規表現 書き方", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/regex-cheatsheet",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
