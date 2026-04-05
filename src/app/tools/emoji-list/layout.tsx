import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "絵文字一覧ツール - 絵文字を検索・コピー",
  description:
    "絵文字をカテゴリ別に一覧表示し、検索してコピーできる無料オンラインツール。100種類以上の絵文字を収録。",
  keywords: ["絵文字", "emoji", "一覧", "検索", "コピー", "カテゴリ", "オンライン", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/emoji-list",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
