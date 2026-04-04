import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プレゼンタイマーツール - 残り時間を大画面表示",
  description: "プレゼンテーション用のカウントダウンタイマー。警告時間になると黄色、最後の1分は赤色で表示します。",
};

export default function PresentationTimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
