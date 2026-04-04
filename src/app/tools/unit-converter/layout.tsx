import type { Metadata } from "next";
export const metadata: Metadata = { title: "単位変換ツール - 長さ・重さ・温度を変換", description: "長さ（cm/m/km/inch/ft）、重さ（g/kg/lb/oz）、温度（℃/℉/K）の単位を相互変換する無料ツール。", keywords: ["単位変換", "長さ変換", "重さ変換", "温度変換", "cm", "inch", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
