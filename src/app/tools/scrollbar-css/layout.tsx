import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "スクロールバーCSSツール - 無料オンラインスクロールバーCSS",
  description: "カスタムスクロールバーのCSSを生成。幅・色・角丸を設定。無料・登録不要でブラウザ上で完結。",
  keywords: ["スクロールバー","CSS","カスタマイズ"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
