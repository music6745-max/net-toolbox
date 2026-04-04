import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "和暦西暦変換ツール - 令和・平成・昭和を西暦に変換",
  description:
    "令和・平成・昭和・大正・明治の和暦と西暦を相互変換。和暦から西暦、西暦から和暦への変換が簡単にできます。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["和暦変換", "西暦変換", "令和", "平成", "昭和", "大正", "明治", "年号変換", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
