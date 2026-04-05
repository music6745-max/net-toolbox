import type { Metadata } from "next";
export const metadata: Metadata = { title: "マークダウンプレビューツール - リアルタイムでプレビュー", description: "マークダウン記法のテキストをリアルタイムでHTMLプレビュー表示する無料ツール。見出し・太字・リスト・リンクに対応。", keywords: ["マークダウン", "Markdown", "プレビュー", "変換", "エディタ", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/markdown-preview" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
