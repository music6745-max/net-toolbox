import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSS圧縮ツール - 無料オンラインCSS圧縮",
  description: "CSSコードを圧縮（ミニファイ）してファイルサイズを削減。無料・登録不要でブラウザ上で完結。",
  keywords: ["CSS","圧縮","ミニファイ"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/css-minifier",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
