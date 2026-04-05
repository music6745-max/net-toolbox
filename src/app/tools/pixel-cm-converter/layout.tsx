import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ピクセル⇔cm変換ツール - 画像サイズの単位を変換",
  description:
    "ピクセル・cm・mm・インチを相互変換できる無料オンラインツール。72dpi・96dpi・150dpi・300dpiに対応。",
  keywords: ["ピクセル", "cm変換", "mm変換", "インチ変換", "DPI", "画像サイズ", "単位変換"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/pixel-cm-converter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
