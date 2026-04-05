import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "モールス信号変換ツール - テキスト⇔モールス信号",
  description: "テキストをモールス信号に変換、またはモールス信号をテキストに復元するオンラインツール。日本語のローマ字変換にも対応。無料・登録不要。",
  keywords: ["モールス信号","変換","符号","SOS"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/morse-code",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
