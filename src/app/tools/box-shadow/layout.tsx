import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "box-shadow生成ツール - CSSボックスシャドウジェネレーター",
  description:
    "CSSのbox-shadowプロパティをスライダーで視覚的に作成できる無料ジェネレーター。リアルタイムプレビュー付き。",
  keywords: ["box-shadow", "CSS", "ジェネレーター", "シャドウ", "デザイン", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
