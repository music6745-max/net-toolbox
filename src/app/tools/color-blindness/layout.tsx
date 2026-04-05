import type { Metadata } from "next";
export const metadata: Metadata = { title: "色覚シミュレーションツール - 色覚異常での色の見え方を確認", description: "16進数カラーコードを入力して、赤色覚異常・緑色覚異常・青色覚異常の方にどう見えるかをシミュレーションできる無料ツール。", keywords: ["色覚", "色盲", "シミュレーション", "カラーバリアフリー", "アクセシビリティ", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/color-blindness" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
