import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QRコード一括生成ツール - 複数QRコードを一度に作成",
  description: "複数のテキストやURLを入力して、QRコードを一括生成します。",
};

export default function QrBulkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
