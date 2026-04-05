import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DNS情報確認ツール - ドメインのDNSレコード表示",
  description:
    "ドメインのDNSレコード情報を確認する教育用ツール。A/AAAA/MX/NSなどのDNSレコードタイプを解説。",
  keywords: ["DNS", "DNSレコード", "ドメイン", "DNS確認", "Aレコード", "MXレコード", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/dns-lookup",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
