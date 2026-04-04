import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSSアニメーション生成ツール - アニメーションCSSを生成",
  description:
    "CSSアニメーションのプロパティ（duration, timing, iteration, direction）を設定し、ライブプレビューを確認しながらCSSコードを生成できる無料ツール。",
  keywords: ["CSSアニメーション", "animation", "CSS生成", "ライブプレビュー", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
