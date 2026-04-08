import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "出産費用シミュレーター - 出産育児一時金を考慮した自己負担額試算",
  description: "分娩方法・入院日数・部屋タイプから出産費用の総額と、出産育児一時金50万円を差し引いた自己負担額を試算。",
  keywords: ["出産費用", "出産育児一時金", "シミュレーター", "分娩"],
  alternates: { canonical: "https://net-toolbox.jp/tools/birth-cost-simulator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
