import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64エンコード/デコードツール - オンラインで変換",
  description:
    "テキストをBase64形式にエンコード・デコードする無料オンラインツール。日本語対応。ブラウザ内で処理するため安全です。",
  keywords: ["Base64", "エンコード", "デコード", "変換", "オンライン", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
