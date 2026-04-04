import type { Metadata } from "next";
export const metadata: Metadata = { title: "曜日計算ツール - 日付の曜日を調べる", description: "日付を入力するだけで曜日を調べられる無料ツール。過去・未来の日付にも対応。", keywords: ["曜日", "曜日計算", "日付", "カレンダー", "何曜日", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
