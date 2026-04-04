import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ハッシュ生成ツール - SHA-256/SHA-512ハッシュ値を計算",
  description:
    "テキストからSHA-1、SHA-256、SHA-384、SHA-512のハッシュ値を生成する無料オンラインツール。データ整合性の確認に。",
  keywords: ["ハッシュ", "SHA-256", "SHA-512", "ハッシュ生成", "ハッシュ値", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
