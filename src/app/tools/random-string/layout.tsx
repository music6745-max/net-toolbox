import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ランダム文字列生成ツール - ランダムな文字列を生成",
  description:
    "長さ・文字種・生成数を指定してランダムな文字列を生成する無料オンラインツール。パスワードやトークンの生成に便利です。",
  keywords: ["ランダム文字列", "文字列生成", "パスワード生成", "トークン", "ランダム", "オンライン", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
