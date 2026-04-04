import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "バイト数計算ツール - テキストのバイト数を計測",
  description:
    "テキストのバイト数をUTF-8・UTF-16・Shift-JIS（概算）など複数のエンコーディングで計測する無料オンラインツール。",
  keywords: ["バイト数", "文字数", "UTF-8", "UTF-16", "Shift-JIS", "エンコード", "計算"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
