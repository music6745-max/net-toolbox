import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "タイマーツール - カウントダウンタイマー",
  description:
    "分・秒を入力してカウントダウンできるタイマーツールです。スタート・一時停止・リセットができ、終了時に音でお知らせします。",
  keywords: ["タイマー", "カウントダウン", "countdown", "timer", "時間管理"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/timer",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
