import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTMLタグ除去ツール - HTMLからテキストを抽出",
  description:
    "HTMLタグを除去してプレーンテキストを抽出する無料オンラインツール。ブラウザ内で処理するため安全です。",
  keywords: ["HTMLタグ", "除去", "テキスト抽出", "ストリップ", "変換", "オンライン", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/html-strip",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
