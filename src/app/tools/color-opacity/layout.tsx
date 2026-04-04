import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "色の透明度変換ツール - 無料オンライン色の透明度変換",
  description: "HEX・RGBカラーにアルファ値（透明度）を適用。rgba/hexa形式で出力。無料・登録不要でブラウザ上で完結。",
  keywords: ["透明度","opacity","rgba"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
