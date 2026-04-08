import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "家賃適正額計算ツール - 年収から推奨家賃を算出",
  description: "年収から無理のない適正家賃額を自動計算。手取り・家賃比率別の推奨額と上限額を表示。無料・登録不要。",
  keywords: ["家賃", "適正額", "年収", "計算", "手取り"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/rent-budget-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
