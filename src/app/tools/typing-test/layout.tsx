import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "タイピング速度テストツール - タイピング速度を計測",
  description:
    "日本語テキストを使ったタイピング速度測定ツール。30秒・60秒モードに対応。1分あたりの文字数（CPM）を計測して上達を確認しましょう。",
  keywords: ["タイピング", "タイピング速度", "タイプテスト", "CPM", "キーボード練習", "日本語タイピング", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/typing-test",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
