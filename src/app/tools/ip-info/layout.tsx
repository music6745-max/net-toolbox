import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPアドレス確認ツール - 自分のIP・端末情報を確認",
  description:
    "自分のパブリックIPアドレス・ブラウザ情報・画面解像度・言語・タイムゾーンをブラウザ上で無料確認。外部サービスへのデータ送信はIPアドレス取得のみです。",
  keywords: ["IPアドレス", "IP確認", "ブラウザ情報", "端末情報", "タイムゾーン", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
