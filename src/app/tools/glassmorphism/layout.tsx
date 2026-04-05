import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "グラスモーフィズムCSSツール - 無料オンライングラスモーフィズムCSS",
  description: "すりガラス風デザインのCSSを生成。透明度・ぼかし・色を調整。無料・登録不要でブラウザ上で完結。",
  keywords: ["グラスモーフィズム","CSS","ガラス"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/glassmorphism",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
