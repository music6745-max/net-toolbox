import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "老後資金シミュレーター - 月々の積立額を計算",
  description: "現在年齢・目標金額・想定利回りから老後資金の必要月額積立を自動計算。NISA・iDeCoの資産形成計画に。",
  keywords: ["老後資金", "シミュレーター", "積立", "NISA", "iDeCo"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/retirement-savings-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
