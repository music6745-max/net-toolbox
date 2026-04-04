import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ランダムカラー生成ツール - ランダムな色を生成",
  description:
    "ランダムな色をHEX・RGB・HSL形式で生成する無料オンラインツール。複数色の一括生成やお気に入り色のロック機能付き。",
  keywords: ["ランダムカラー", "色生成", "HEX", "RGB", "HSL", "カラーパレット", "デザイン"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
