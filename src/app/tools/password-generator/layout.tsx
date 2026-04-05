import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "パスワード生成ツール - 安全なランダムパスワードを作成",
  description:
    "安全なランダムパスワードを無料で生成。長さや文字種をカスタマイズ可能。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["パスワード生成", "パスワード", "ランダム", "セキュリティ", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/password-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
