import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "旅行予算シミュレーター - 人数・期間・宿泊ランクで試算",
  description:
    "旅行の人数・日数・宿泊ランク・交通費から総予算を自動計算。国内旅行・海外旅行の費用感を簡単に把握できます。",
  keywords: ["旅行予算", "旅行費用", "旅費計算", "旅行シミュレーター", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/travel-budget-simulator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
