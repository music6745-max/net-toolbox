import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "乱数生成ツール - ランダムな数字を生成",
  description:
    "最小値と最大値を指定してランダムな整数を生成。複数生成や重複なし設定にも対応。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["乱数", "乱数生成", "ランダム", "ランダム数字", "抽選", "無作為", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
