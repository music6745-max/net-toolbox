import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ボタンCSS生成ツール - 無料オンラインボタンCSS生成",
  description: "Webボタンのデザインをビジュアルにカスタマイズ。CSSコードを即生成。無料・登録不要でブラウザ上で完結。",
  keywords: ["ボタン","CSS","デザイン"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
