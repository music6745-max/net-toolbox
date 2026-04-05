import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキスト差分比較ツール - 2つのテキストの違いを比較",
  description:
    "2つのテキストの差分を比較してハイライト表示する無料オンラインツール。コードレビューや文書の変更確認に最適。",
  keywords: ["テキスト比較", "差分", "diff", "テキスト差分", "比較ツール", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/text-diff",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
