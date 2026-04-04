import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "カウントダウンタイマー - 目標日時までの残り時間を表示",
  description:
    "目標の日時を設定すると残り日数・時間・分・秒をリアルタイムで表示するカウントダウンタイマー。イベントや締め切りの管理に便利な無料ツール。",
  keywords: ["カウントダウンタイマー", "タイマー", "残り時間", "目標日時", "締め切り", "イベント", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
