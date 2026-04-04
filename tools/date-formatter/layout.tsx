import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日付フォーマットツール - 日付を様々な形式で表示",
  description: "日付を入力して、ISO 8601、日本語形式、US形式、Unixタイムスタンプなど様々な形式で表示します。",
};

export default function DateFormatterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
