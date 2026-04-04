import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "コントラスト比チェックツール - 色のアクセシビリティを確認",
  description:
    "前景色と背景色のコントラスト比を計算し、WCAGのAA・AAAレベルの合否を確認できる無料オンラインツール。",
  keywords: ["コントラスト比", "WCAG", "アクセシビリティ", "AA", "AAA", "色", "デザイン"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
