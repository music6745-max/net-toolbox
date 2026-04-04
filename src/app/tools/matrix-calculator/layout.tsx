import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "行列計算ツール - 無料オンライン行列計算",
  description: "2×2、3×3行列の加算・乗算・行列式・逆行列を計算。無料・登録不要でブラウザ上で完結。",
  keywords: ["行列","行列式","逆行列"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
