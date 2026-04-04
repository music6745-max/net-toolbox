import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サブネット計算ツール - 無料オンラインサブネット計算",
  description: "IPアドレスとサブネットマスクからネットワーク範囲・ホスト数を計算。無料・登録不要でブラウザ上で完結。",
  keywords: ["サブネット","IPアドレス","ネットワーク"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
