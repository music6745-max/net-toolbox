import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキスト⇔バイナリ変換ツール - 文字を2進数に変換",
  description:
    "テキストを2進数（バイナリ）に変換したり、バイナリからテキストに戻す無料オンラインツール。ブラウザ内で処理するため安全です。",
  keywords: ["テキスト", "バイナリ", "2進数", "変換", "0と1", "オンライン", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
