import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "カウントダウンタイマー - 目標日までの残り時間を表示",
  description:
    "目標の日時を入力すると、残り日数・時間・分・秒をリアルタイムで表示するカウントダウンタイマー。イベント・締め切り・記念日の管理に便利です。",
  keywords: ["カウントダウン", "タイマー", "残り時間", "目標日", "締め切り", "イベント", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/countdown",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
