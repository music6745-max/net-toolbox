import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキスト→HTML変換ツール - 無料オンラインテキスト→HTML変換",
  description: "プレーンテキストをHTML形式に変換。改行をbrタグ、URLをリンクに自動変換。無料・登録不要でブラウザ上で完結。",
  keywords: ["テキスト","HTML","変換"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
