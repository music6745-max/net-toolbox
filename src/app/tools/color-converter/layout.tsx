import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "カラーコード変換ツール - HEX/RGB/HSLを相互変換",
  description:
    "HEX・RGB・HSLのカラーコードを相互変換する無料オンラインツール。プレビュー付きで色を確認しながら操作できます。",
  keywords: ["カラーコード変換", "HEX", "RGB", "HSL", "色変換", "デザイン", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
