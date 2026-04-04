import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "動画容量計算ツール - 動画のファイルサイズを見積もり",
  description:
    "解像度・ビットレート・再生時間を入力して動画ファイルのおおよそのファイルサイズを計算する無料ツール。MP4・MOV・AVIなど各フォーマットの目安を確認できます。",
  keywords: ["動画容量計算", "動画ファイルサイズ", "ビットレート計算", "動画圧縮", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
