import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ポート番号一覧 - よく使われるポート番号を検索",
  description:
    "TCP/UDPのよく使われるポート番号を一覧で確認・検索できる無料ツール。HTTP、HTTPS、SSH、MySQLなど50以上のポートをまとめています。",
  keywords: ["ポート番号", "TCP", "UDP", "ポート一覧", "ネットワーク", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
