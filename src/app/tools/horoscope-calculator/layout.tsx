import type { Metadata } from "next";
export const metadata: Metadata = { title: "星座計算ツール - 誕生日から星座を調べる", description: "誕生日（月・日）を入力して星座を調べる無料ツール。12星座すべてに対応。", keywords: ["星座", "誕生日", "星座計算", "12星座", "占い", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/horoscope-calculator" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
