import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UserAgent解析ツール - ブラウザ・OS情報を確認",
  description:
    "現在のUserAgent文字列を解析し、ブラウザ・OS・デバイス種別を判定する無料ツール。任意のUserAgentの解析にも対応。",
  keywords: ["UserAgent", "ユーザーエージェント", "ブラウザ判定", "OS判定", "開発ツール", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/useragent-parser",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
