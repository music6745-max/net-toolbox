import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SNS文字数制限チェック - 各SNSの文字数制限を確認",
  description:
    "Twitter/X・Instagram・Facebook・LINE・YouTubeなど各SNSの文字数制限をリアルタイムでチェックできる無料ツール。投稿前に文字数オーバーを確認できます。",
  keywords: ["SNS 文字数", "Twitter 文字数", "Instagram 文字数", "文字数制限", "文字数チェック", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/sns-char-limit",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
