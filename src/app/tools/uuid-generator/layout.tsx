import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID生成ツール - ランダムなUUIDを生成",
  description:
    "UUID v4をブラウザ上でランダム生成。一度に最大100件まとめて生成可能。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["UUID", "UUID生成", "GUID", "ランダムID", "v4", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/uuid-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
