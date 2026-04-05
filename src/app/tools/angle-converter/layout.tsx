import type { Metadata } from "next";
export const metadata: Metadata = { title: "角度変換ツール - 度・ラジアン・グラジアンを変換", description: "度・ラジアン・グラジアン・回転数を相互変換する無料ツール。数学・工学の角度計算に便利です。", keywords: ["角度変換", "度", "ラジアン", "グラジアン", "単位変換", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/angle-converter" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
