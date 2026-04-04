import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OGP画像サイズ一覧 - SNS別の推奨画像サイズ",
  description:
    "OGP・Twitter Card・Facebook・Instagram・YouTube等、SNS別の推奨画像サイズをまとめた一覧。Webサイト制作やSNS運用に役立てましょう。",
  keywords: ["OGP", "画像サイズ", "Twitter Card", "Facebook", "Instagram", "YouTube", "SNS"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
