import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "フィボナッチ数列ツール - フィボナッチ数列を生成",
  description:
    "項数nを入力すると最初のn項のフィボナッチ数列を生成して表示します。各項の値と黄金比との関係も確認できます。",
  keywords: ["フィボナッチ", "fibonacci", "数列", "黄金比", "数学"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/fibonacci",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
