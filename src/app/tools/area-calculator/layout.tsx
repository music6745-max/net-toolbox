import type { Metadata } from "next";
export const metadata: Metadata = { title: "面積計算ツール - 図形の面積を計算", description: "円・長方形・三角形・台形の面積を計算する無料ツール。辺の長さや半径を入力するだけで即座に計算。", keywords: ["面積計算", "面積", "円", "長方形", "三角形", "台形", "図形", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
