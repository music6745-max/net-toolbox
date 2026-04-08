import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "積立投資シミュレーター - 複利計算で資産推移を試算",
  description: "毎月の積立額・想定利回り・積立期間から将来の資産額を複利計算。NISA・iDeCoの積立シミュレーションに最適。",
  keywords: ["積立投資", "シミュレーション", "複利", "NISA", "iDeCo"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/investment-fund-simulator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
