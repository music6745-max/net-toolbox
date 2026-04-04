import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日本語ダミーテキスト生成ツール - 名文からサンプル文を生成",
  description: "夏目漱石、太宰治、芥川龍之介などの日本文学の名文からダミーテキストを生成します。",
};

export default function LoremJpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
