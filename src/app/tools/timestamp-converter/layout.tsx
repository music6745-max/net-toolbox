import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unixタイムスタンプ変換ツール - 日時⇔タイムスタンプ変換",
  description:
    "Unix タイムスタンプと日時を相互変換。現在のタイムスタンプも確認できます。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["Unixタイムスタンプ", "タイムスタンプ変換", "日時変換", "epoch", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/timestamp-converter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
