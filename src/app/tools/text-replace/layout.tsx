import type { Metadata } from "next";
export const metadata: Metadata = { title: "テキスト置換ツール - 一括検索・置換", description: "テキスト内の文字列を一括で検索・置換する無料ツール。正規表現にも対応。大量のテキスト修正に便利。", keywords: ["テキスト置換", "一括置換", "検索置換", "正規表現", "テキスト", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
