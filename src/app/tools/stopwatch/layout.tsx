import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ストップウォッチツール - 経過時間を計測",
  description:
    "スタート・ストップ・リセット・ラップ機能付きのストップウォッチです。ミリ秒単位で経過時間を計測し、ラップタイムの一覧を表示します。",
  keywords: ["ストップウォッチ", "stopwatch", "ラップ", "時間計測", "タイム"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
