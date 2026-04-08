import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "英文タイピング速度テスト（WPM）- 英語タイピング計測",
  description:
    "英文テキストを使ったタイピング速度測定ツール。WPM（Words Per Minute）と正確率を計測。30秒・60秒モード対応、英語学習やプログラミング学習のウォームアップに最適。",
  keywords: ["タイピング", "WPM", "英文タイピング", "英語タイピング", "速度測定", "無料"],
  alternates: { canonical: "https://net-toolbox.jp/tools/typing-speed-test" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
