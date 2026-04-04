import type { Metadata } from "next";
export const metadata: Metadata = { title: "画像容量見積もりツール - 画像のファイルサイズを推定", description: "画像の幅・高さ・色深度・圧縮率からJPEG/PNG/WebPのファイルサイズを推定する無料ツール。", keywords: ["画像容量", "ファイルサイズ", "JPEG", "PNG", "WebP", "推定", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
