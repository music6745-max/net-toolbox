import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "画像Base64変換ツール - 画像をBase64に変換",
  description:
    "画像ファイルをアップロードしてBase64データURLに変換する無料ツール。変換前後のサイズ比較や、HTMLへの埋め込みコードもすぐに確認できます。",
  keywords: ["画像Base64変換", "Base64エンコード", "データURL", "画像変換", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
