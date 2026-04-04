import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "半角カタカナ変換ツール - 全角⇔半角カタカナを変換",
  description:
    "全角カタカナと半角カタカナを相互変換できる無料オンラインツール。濁点・半濁点にも対応。",
  keywords: ["半角カタカナ変換", "全角カタカナ", "半角カタカナ", "全角半角変換", "カタカナ", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
