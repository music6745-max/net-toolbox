import type { Metadata } from "next";
export const metadata: Metadata = { title: "データ容量変換ツール - B/KB/MB/GB/TBを変換", description: "バイト・KB・MB・GB・TB・PBを相互変換する無料ツール。2進数(1024)と10進数(1000)の両モードに対応。", keywords: ["データ容量", "変換", "KB", "MB", "GB", "TB", "バイト", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/data-size-converter" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
