import type { Metadata } from "next";
export const metadata: Metadata = { title: "時間計算ツール - 時間の足し算・引き算", description: "時間・分・秒の足し算・引き算ができる無料ツール。複数の時間をまとめて合計することも可能。", keywords: ["時間計算", "時間の足し算", "時間の引き算", "時分秒", "合計時間", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/time-calculator" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
