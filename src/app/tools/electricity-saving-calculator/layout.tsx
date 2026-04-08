import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "電気代節約シミュレーター - 家電別の使用時間で節約額を算出",
  description: "エアコン・冷蔵庫・照明など家電別の使用時間を入力するだけで、節約できる電気代を試算。年間の節約額がすぐ分かります。",
  keywords: ["電気代", "節約", "シミュレーター", "省エネ", "家電"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/electricity-saving-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
