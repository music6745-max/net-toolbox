import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】VPN比較おすすめ3選｜料金・速度・安全性を徹底解説",
  description:
    "2026年最新のVPNサービスを徹底比較。NordVPN・ExpressVPN・MillenVPNの料金・通信速度・セキュリティ機能・サーバー数を詳しく解説。無料VPNとの違いや選び方のポイントも紹介します。",
  keywords: [
    "VPN 比較",
    "VPN おすすめ",
    "VPN 無料",
    "VPN 安い",
    "NordVPN",
    "ExpressVPN",
    "MillenVPN",
    "VPN おすすめ 比較 2026",
    "VPN 選び方",
    "VPN セキュリティ",
    "VPN 速度",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/vpn-comparison`,
  },
  openGraph: {
    title: "【2026年最新】VPN比較おすすめ3選｜料金・速度・安全性を徹底解説",
    description:
      "NordVPN・ExpressVPN・MillenVPNの料金・速度・セキュリティを徹底比較。あなたに最適なVPNが見つかります。",
    url: `${siteConfig.url}/guide/vpn-comparison`,
    type: "article",
  },
};

export default function VpnComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
