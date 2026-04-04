import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "縦書き変換ツール - テキストを縦書きに変換",
  description:
    "横書きのテキストを縦書きに変換して表示・コピーできる無料オンラインツール。日本語の縦書き組版に対応。",
  keywords: ["縦書き変換", "縦書き", "縦書きテキスト", "writing-mode", "日本語", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
