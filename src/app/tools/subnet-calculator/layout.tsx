import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サブネット計算機 - IPアドレスとサブネットマスクから計算",
  description:
    "IPアドレスとサブネットマスクからネットワークアドレス、ブロードキャスト、ホスト範囲を計算。CIDR表記対応の無料オンラインツール。",
  keywords: ["サブネット計算", "サブネットマスク", "CIDR", "IPアドレス", "ネットワーク"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
