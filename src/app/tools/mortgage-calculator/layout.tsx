import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "住宅ローン計算ツール - 月々の返済額を計算",
  description:
    "借入金額・金利・返済期間を入力するだけで月々の返済額・総返済額・利息総額を無料で計算。住宅ローンのシミュレーションにご活用ください。",
  keywords: ["住宅ローン", "ローン計算", "返済額", "金利", "シミュレーション", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/mortgage-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
