import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "フォントサイズ変換ツール - px/pt/em/rem/%を相互変換",
  description: "px、pt、em、rem、%のフォントサイズを相互変換できるオンラインツール。Webデザインに便利。無料・登録不要。",
  keywords: ["フォントサイズ","px","em","rem","pt","変換"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/font-size-converter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
