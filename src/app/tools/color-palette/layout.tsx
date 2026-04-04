import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "カラーパレット生成ツール - 配色パレットを自動生成",
  description:
    "ベースカラーを入力するだけで、補色・類似色・三角配色・スプリット補色のパレットを自動生成する無料オンラインツール。",
  keywords: ["カラーパレット", "配色", "補色", "類似色", "デザイン", "色彩", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
