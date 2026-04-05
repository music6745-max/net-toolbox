import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSSボックスシャドウ生成ツール - box-shadowを生成",
  description:
    "スライダーでbox-shadowのCSSを直感的に生成できる無料ツール。x・y・blur・spread・color・insetをリアルタイムでプレビュー。",
  keywords: ["box-shadow", "CSSシャドウ", "ボックスシャドウ生成", "CSS生成", "開発ツール", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/css-box-shadow",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
