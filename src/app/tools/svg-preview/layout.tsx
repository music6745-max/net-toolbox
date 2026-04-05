import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVGプレビューツール - 無料オンラインSVGプレビュー",
  description: "SVGコードを貼り付けてリアルタイムでプレビュー表示。サイズ確認にも。無料・登録不要でブラウザ上で完結。",
  keywords: ["SVG","プレビュー","画像"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/svg-preview",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
