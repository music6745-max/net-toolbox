import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "反応速度テストツール - 反応速度を計測",
  description:
    "画面が緑色に変わったらすぐにクリック！反応時間をミリ秒単位で計測します。5回の平均・最速・最遅を表示。",
  keywords: ["反応速度", "反応時間", "リアクションテスト", "ミリ秒", "測定", "ゲーム", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/reaction-test",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
