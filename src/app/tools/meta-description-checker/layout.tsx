import type { Metadata } from "next";
export const metadata: Metadata = { title: "メタディスクリプションチェッカー - SEO説明文をチェック", description: "メタディスクリプションの文字数をチェックし、Google検索結果でのプレビューを表示する無料SEOツール。", keywords: ["メタディスクリプション", "SEO", "文字数", "Google", "検索結果", "プレビュー", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/meta-description-checker" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
