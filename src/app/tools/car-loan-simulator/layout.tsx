import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "自動車ローンシミュレーター - 月々の返済額を試算",
  description: "車両価格・頭金・金利・返済期間から自動車ローンの月々の返済額・総返済額・利息合計を試算。無料・登録不要。",
  keywords: ["自動車ローン", "マイカーローン", "シミュレーター", "月額", "金利"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/car-loan-simulator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
