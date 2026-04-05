import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ローン返済計算ツール - 無料オンラインローン返済計算",
  description: "借入額・金利・返済期間から月々の返済額と総返済額を計算。住宅ローンにも。無料・登録不要でブラウザ上で完結。",
  keywords: ["ローン","返済","住宅ローン","金利"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/loan-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
