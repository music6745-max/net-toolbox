import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "バーコード生成ツール - テキストからバーコードを作成",
  description:
    "テキストを入力してCode128バーコードを生成できる無料オンラインツール。生成したバーコードをPNGでダウンロード可能。",
  keywords: ["バーコード生成", "Code128", "バーコード", "QRコード", "無料", "オンラインツール"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
