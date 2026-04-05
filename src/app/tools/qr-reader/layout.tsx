import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "画像情報確認ツール - 画像のサイズ・形式を確認",
  description:
    "画像をアップロードするだけでファイルサイズ・解像度・形式・縦横比などの詳細情報を表示。ブラウザ内のみで処理されるため安全です。",
  keywords: ["画像情報", "画像サイズ", "解像度確認", "画像形式", "ファイルサイズ", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/qr-reader",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
