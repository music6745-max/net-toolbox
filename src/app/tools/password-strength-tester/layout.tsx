import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "パスワード強度テスター - リアルタイム評価＆解析時間推定",
  description:
    "入力したパスワードの強度をリアルタイムで評価。エントロピー・推定解析時間・改善提案まで表示する無料ツールです。データはブラウザ内処理のみで送信されません。",
  keywords: ["パスワード", "強度", "セキュリティ", "エントロピー", "解析時間"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/password-strength-tester",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
