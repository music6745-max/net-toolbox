import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "面接タイマーツール - 面接の時間配分を管理",
  description: "面接の各フェーズ（自己紹介、本題、質疑応答など）ごとにカウントダウンタイマーを管理します。",
};

export default function InterviewTimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
