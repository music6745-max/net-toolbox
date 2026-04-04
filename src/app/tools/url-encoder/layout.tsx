import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URLエンコード/デコードツール - 特殊文字を変換",
  description:
    "URLの特殊文字をエンコード・デコードする無料オンラインツール。日本語やスペースを含むURLの変換に。",
  keywords: ["URLエンコード", "URLデコード", "パーセントエンコーディング", "URL変換", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
