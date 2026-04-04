import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MACアドレスフォーマッターツール - MACアドレスを整形",
  description:
    "MACアドレスをコロン区切り・ハイフン区切り・ドット区切りの各形式に変換・整形できる無料ツール。入力値の検証とベンダー情報の確認にも対応。",
  keywords: ["MACアドレス", "MAC", "フォーマット", "変換", "ネットワーク", "OUI", "整形"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
