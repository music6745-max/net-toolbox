import type { Metadata } from "next";
export const metadata: Metadata = { title: "見出し構造チェッカー - HTML見出しの階層を確認", description: "HTMLの見出しタグ（H1〜H6）を抽出し、階層構造を可視化する無料SEOツール。見出しの問題点も確認できます。", keywords: ["見出し構造", "H1", "H2", "SEO", "HTML", "チェッカー", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
