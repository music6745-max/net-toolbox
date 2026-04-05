import type { Metadata } from "next";
export const metadata: Metadata = { title: "プレースホルダー画像生成ツール - ダミー画像URLを生成", description: "幅・高さを指定してダミー画像のURLを生成。picsum.photosやvia.placeholder.comを利用した無料ツール。", keywords: ["プレースホルダー", "ダミー画像", "placeholder", "画像URL", "picsum", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/placeholder-image" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
