import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NATOフォネティックコードツール - 無料オンラインNATOフォネティックコード",
  description: "テキストをNATOフォネティックアルファベットに変換。電話での伝達に。無料・登録不要でブラウザ上で完結。",
  keywords: ["NATO","フォネティック","アルファベット"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
