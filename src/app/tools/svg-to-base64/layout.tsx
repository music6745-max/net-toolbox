import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVG→Base64変換ツール - 無料オンラインSVG→Base64変換",
  description: "SVGコードをBase64エンコードしたdata URIに変換。CSS背景画像等に。無料・登録不要でブラウザ上で完結。",
  keywords: ["SVG","Base64","data URI"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/svg-to-base64",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
