import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ニューモーフィズムCSSツール - 無料オンラインニューモーフィズムCSS",
  description: "ニューモーフィズムデザインのCSSを生成。凹凸・影・色を調整。無料・登録不要でブラウザ上で完結。",
  keywords: ["ニューモーフィズム","CSS","デザイン"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/neumorphism",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
