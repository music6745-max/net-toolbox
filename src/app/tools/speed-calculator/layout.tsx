import type { Metadata } from "next";
export const metadata: Metadata = { title: "速度計算ツール - 距離・時間・速度を計算", description: "距離・時間・速度のうち2つを入力して残りの1つを計算する無料ツール。", keywords: ["速度計算", "距離計算", "時間計算", "速さ", "km/h", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/speed-calculator" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
