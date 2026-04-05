import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "記憶力テストツール - 数字の記憶力をテスト",
  description:
    "数字の列を一瞬だけ表示し、正確に入力できるかテストする記憶力測定ツール。難易度が徐々に上がっていきます。ブラウザ内で完結します。",
  keywords: ["記憶力テスト", "数字記憶", "ワーキングメモリ", "脳トレ", "認知トレーニング", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/memory-test",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
