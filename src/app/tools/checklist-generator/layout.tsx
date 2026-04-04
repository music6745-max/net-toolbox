import type { Metadata } from "next";
export const metadata: Metadata = { title: "チェックリスト生成ツール - チェックリストを作成", description: "テキストを入力するだけでチェックリストを自動生成。印刷用HTMLやMarkdown形式でのコピーにも対応した無料ツール。", keywords: ["チェックリスト", "チェック", "リスト", "印刷", "マークダウン", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
