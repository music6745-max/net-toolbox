import type { Metadata } from "next";
export const metadata: Metadata = { title: "電気料金計算ツール - 電化製品の電気代を計算", description: "消費電力（W）・使用時間・電気料金単価から月の電気代を計算する無料ツール。", keywords: ["電気料金", "電気代", "消費電力", "kWh", "節電", "電気代計算", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
