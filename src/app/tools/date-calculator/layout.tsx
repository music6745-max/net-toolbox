import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日数計算ツール - 日付間の日数を簡単計算",
  description:
    "2つの日付間の日数を計算する無料オンラインツール。何日後・何日前の日付も求められます。納期計算や記念日計算に便利。",
  keywords: ["日数計算", "日付計算", "何日後", "何日前", "日数カウント", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/date-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
