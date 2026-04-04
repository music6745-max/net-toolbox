import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QRコード作成ツール - 無料でQRコードを生成",
  description:
    "テキストやURLからQRコードを無料で作成できるオンラインツール。生成したQRコードはPNG画像としてダウンロード可能。登録不要でブラウザ上で完結。",
  keywords: ["QRコード", "QRコード作成", "QRコード生成", "無料", "オンライン"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
