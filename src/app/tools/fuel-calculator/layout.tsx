import type { Metadata } from "next";
export const metadata: Metadata = { title: "燃費計算ツール - 車の燃費を計算", description: "走行距離と使用燃料を入力してkm/LやL/100kmの燃費を計算する無料ツール。ガソリン代の目安も表示。", keywords: ["燃費計算", "燃費", "km/L", "ガソリン代", "車", "エコ", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
