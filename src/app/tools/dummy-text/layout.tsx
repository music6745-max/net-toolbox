import type { Metadata } from "next";
export const metadata: Metadata = { title: "ダミーテキスト生成ツール - 日本語ダミー文章を生成", description: "Webデザインやモックアップ用の日本語ダミーテキストを生成する無料ツール。段落数を指定して簡単生成。", keywords: ["ダミーテキスト", "Lorem Ipsum", "日本語", "ダミー文章", "モックアップ", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
