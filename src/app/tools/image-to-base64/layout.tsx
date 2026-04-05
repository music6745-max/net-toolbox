import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "画像→Base64変換ツール - 無料オンラインツール",
  description: "画像ファイルをBase64エンコードされた文字列に変換します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/image-to-base64",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
