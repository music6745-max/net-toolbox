import type { Metadata } from "next";
export const metadata: Metadata = { title: "○日後計算ツール - 指定日数後の日付を計算", description: "今日から何日後・何日前の日付を計算。100日後は何月何日？などの疑問をすぐに解決できる無料ツール。", keywords: ["日数計算", "○日後", "日付計算", "何日後", "カレンダー", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
