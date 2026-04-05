import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "成績計算ツール - 無料オンライン成績計算",
  description: "テストの点数と配点から平均点・合計点・偏差値を計算。無料・登録不要でブラウザ上で完結。",
  keywords: ["成績","平均点","偏差値"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/grade-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
