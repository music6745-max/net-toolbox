import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSONエスケープツール - 無料オンラインJSONエスケープ",
  description: "JSON文字列のエスケープ・アンエスケープ。特殊文字の処理に。無料・登録不要でブラウザ上で完結。",
  keywords: ["JSON","エスケープ","文字列"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
