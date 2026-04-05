import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON⇔YAML変換ツール - JSONとYAMLを相互変換",
  description:
    "JSONをYAML形式に、YAMLをJSON形式に相互変換する無料オンラインツール。ブラウザ内で処理するため安全です。",
  keywords: ["JSON", "YAML", "変換", "コンバーター", "オンライン", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/json-yaml",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
