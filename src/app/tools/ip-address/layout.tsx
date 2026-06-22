import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPアドレス確認ツール - 現在のIPとユーザーエージェント表示",
  description:
    "現在のグローバルIPアドレスとユーザーエージェント情報を確認できる無料オンラインツール。IP取得には外部APIを使用します。",
  keywords: ["IPアドレス", "IP確認", "ユーザーエージェント", "グローバルIP", "ネットワーク", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/ip-address",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
