import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "エポック秒変換ツール - ミリ秒⇔日時を変換",
  description:
    "Unixエポック（秒・ミリ秒）と人間が読める日時を相互変換する無料ツール。現在のエポック秒もリアルタイム表示。",
  keywords: ["エポック秒", "Unix時間", "タイムスタンプ", "変換", "ミリ秒", "日時"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
