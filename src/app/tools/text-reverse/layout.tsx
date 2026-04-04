import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキスト反転ツール - 文字列・単語・行を反転",
  description:
    "テキストを文字単位・単語単位・行単位で反転できる無料ツール。文字列を逆順にしたい場面に便利です。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["テキスト反転", "文字列逆順", "逆さ文字", "単語反転", "行反転", "テキスト加工", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
