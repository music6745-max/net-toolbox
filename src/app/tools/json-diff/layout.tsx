import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON差分比較ツール - 2つのJSONの違いを比較",
  description:
    "2つのJSONオブジェクトを比較して差分をハイライト表示する無料ツール。追加・削除・変更されたキーを一目で確認できます。",
  keywords: ["JSON", "差分", "比較", "diff", "追加", "削除", "変更"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/json-diff",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
