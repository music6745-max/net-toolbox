import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ランダム名前生成ツール - ダミーの日本人名を生成",
  description:
    "日本人の苗字・名前をランダムに組み合わせてダミー名を生成します。男女別に対応。テストデータや小説のキャラクター名などに活用できます。",
  keywords: ["ランダム名前", "日本人名", "ダミーデータ", "名前生成", "苗字", "テストデータ", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
