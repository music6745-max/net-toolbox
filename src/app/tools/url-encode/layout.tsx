import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URLエンコード/デコードツール - パーセントエンコーディング変換",
  description:
    "URLの日本語や特殊文字をエンコード・デコードする無料オンラインツール。パーセントエンコーディングに対応。",
  keywords: ["URLエンコード", "URLデコード", "パーセントエンコーディング", "URL変換", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
