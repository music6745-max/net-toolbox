import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "必要保障額計算ツール - 生命保険の必要額を算出",
  description: "家族構成・年収・住宅ローンから生命保険の必要保障額を自動計算。遺族年金や貯蓄も考慮した過不足なしの保険設計に。",
  keywords: ["必要保障額", "生命保険", "計算", "遺族年金", "家族"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/insurance-need-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
