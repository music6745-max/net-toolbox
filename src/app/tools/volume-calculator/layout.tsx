import type { Metadata } from "next";
export const metadata: Metadata = { title: "体積計算ツール - 立体の体積を計算", description: "直方体・球・円柱・円錐の体積を計算する無料ツール。各辺や半径を入力するだけで即座に計算。", keywords: ["体積計算", "体積", "直方体", "球", "円柱", "円錐", "立体", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/volume-calculator" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
