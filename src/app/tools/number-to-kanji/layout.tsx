import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "数字⇔漢数字変換ツール - 数字を漢数字に変換",
  description:
    "アラビア数字を漢数字（一二三・壱弐参）に変換、または漢数字をアラビア数字に戻せる無料ツール。大字（だいじ）にも対応。",
  keywords: ["漢数字", "変換", "一二三", "壱弐参", "大字", "数字", "日本語"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
