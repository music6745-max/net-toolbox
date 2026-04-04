import type { Metadata } from "next";
export const metadata: Metadata = { title: "文字化け修復ツール - 文字化けしたテキストを修復", description: "文字化けしたテキストを貼り付けて、エンコーディングを変換して修復を試みる無料ツール。Shift-JIS・EUC-JP・UTF-8などに対応。", keywords: ["文字化け", "エンコーディング", "Shift-JIS", "UTF-8", "修復", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
