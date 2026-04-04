import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CIDRサブネット計算ツール - IPサブネットを計算",
  description: "CIDR表記を入力して、ネットワークアドレス、ブロードキャストアドレス、ホスト範囲、サブネットマスク、ホスト数を計算します。",
};

export default function CidrCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
