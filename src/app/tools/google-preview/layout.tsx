import type { Metadata } from "next";
export const metadata: Metadata = { title: "Google検索結果プレビュー - SERPでの表示を確認", description: "タイトル・URL・説明文を入力してGoogle検索結果での表示をプレビューできる無料SEOツール。", keywords: ["Google検索", "SERP", "プレビュー", "SEO", "タイトル", "メタディスクリプション", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/google-preview" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
