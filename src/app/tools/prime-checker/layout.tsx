import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "素数判定ツール - 素数かどうかを判定",
  description:
    "入力した数が素数かどうかを判定します。素数でない場合は因数（約数）を表示します。また指定した数までの素数一覧も表示できます。",
  keywords: ["素数", "素数判定", "因数", "prime", "素因数", "数学"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
