import type { Metadata } from "next";
export const metadata: Metadata = { title: "グラデーション文字生成ツール - グラデーション文字のCSSを生成", description: "テキストと色を選ぶだけでグラデーション文字のCSSコードを自動生成。ライブプレビュー付きの無料ツール。", keywords: ["グラデーション", "テキスト", "CSS", "文字", "デザイン", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/gradient-text" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
