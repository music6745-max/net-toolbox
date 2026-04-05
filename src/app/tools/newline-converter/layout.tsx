import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "改行コード変換ツール - CRLF/LF/CRを変換",
  description:
    "テキストの改行コードをCRLF（Windows）・LF（Unix）・CR（Mac）に変換する無料オンラインツール。現在の改行コードも判定します。",
  keywords: ["改行コード", "CRLF", "LF", "CR", "変換", "Windows", "Unix", "オンライン", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/newline-converter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
