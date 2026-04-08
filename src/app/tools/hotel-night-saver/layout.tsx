import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ホテル料金節約計算ツール - 連泊・早期・平日割引後の金額",
  description:
    "連泊割引・早期予約割引・平日割引を適用したホテル料金を計算。どのプランが最もお得か素早く比較できます。",
  keywords: ["ホテル料金", "連泊割引", "早割", "平日割引", "宿泊費計算"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/hotel-night-saver",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
