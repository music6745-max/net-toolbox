import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "パスワード強度チェックツール - パスワードの安全性を診断",
  description:
    "パスワードの強度をエントロピー計算で診断する無料ツール。文字の種類・長さ・よくあるパターンを検出し、安全なパスワード作成をサポートします。",
  keywords: ["パスワード強度", "パスワードチェック", "セキュリティ", "エントロピー", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
