import type { Metadata } from "next";
export const metadata: Metadata = { title: "全角半角変換ツール - 全角⇔半角・ひらがな⇔カタカナ変換", description: "全角⇔半角の英数字変換、ひらがな⇔カタカナ変換ができる無料オンラインツール。データ入力の統一に便利。", keywords: ["全角半角変換", "全角", "半角", "ひらがな", "カタカナ", "変換", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/fullwidth-halfwidth" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
