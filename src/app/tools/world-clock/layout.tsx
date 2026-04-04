import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "世界時計ツール - 世界各地の現在時刻を確認",
  description:
    "東京・ニューヨーク・ロンドン・パリ・シドニーなど世界主要都市の現在時刻をリアルタイムで表示。タイムゾーン確認に便利な無料ツールです。",
  keywords: ["世界時計", "世界時刻", "タイムゾーン", "現在時刻", "時差", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
