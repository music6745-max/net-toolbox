import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "自動車年間維持費計算 - 税金・保険・車検・燃料を一括試算",
  description: "自動車税・任意保険・車検・燃料費・駐車場代など、自動車を所有するうえでの年間維持費を一括で試算します。",
  keywords: ["自動車", "維持費", "年間", "計算", "車検", "保険"],
  alternates: { canonical: "https://net-toolbox.jp/tools/car-expense-yearly-calculator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
