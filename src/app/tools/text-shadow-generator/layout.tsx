import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキストシャドウ生成ツール - 無料オンラインテキストシャドウ生成",
  description: "CSSのtext-shadowをビジュアルに設定。プレビュー付きでコードを生成。無料・登録不要でブラウザ上で完結。",
  keywords: ["text-shadow","CSS","テキストシャドウ"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/text-shadow-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
