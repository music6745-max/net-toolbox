import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】VPNおすすめランキングTOP10｜安全性・速度・料金で厳選",
  description:
    "2026年最新のVPNおすすめランキングTOP10。NordVPN・ExpressVPN・Surfshark等、安全性・速度・料金で厳選した人気VPNを徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/vpn-ranking-2026` },
};

const items = [
  { rank: 1, name: "NordVPN", feat: "業界最大手、速度も高評価", price: "月額390円〜", link: "/guide/vpn-comparison" },
  { rank: 2, name: "ExpressVPN", feat: "速度最速級、海外動画に強い", price: "月額1,200円〜", link: "/guide/vpn-comparison" },
  { rank: 3, name: "Surfshark", feat: "同時接続数無制限", price: "月額350円〜", link: "/guide/vpn-comparison" },
  { rank: 4, name: "MillenVPN", feat: "国産の安心感", price: "月額396円〜", link: "/guide/vpn-comparison" },
  { rank: 5, name: "CyberGhost", feat: "ストリーミング特化", price: "月額330円〜", link: "/guide/vpn-comparison" },
  { rank: 6, name: "Private Internet Access", feat: "プライバシー重視", price: "月額300円〜", link: "/guide/vpn-comparison" },
  { rank: 7, name: "ProtonVPN", feat: "無料プランあり", price: "無料〜", link: "/guide/vpn-comparison" },
  { rank: 8, name: "Atlas VPN", feat: "コスパ良好", price: "月額270円〜", link: "/guide/vpn-comparison" },
  { rank: 9, name: "PrivadoVPN", feat: "無料10GB付き", price: "無料〜", link: "/guide/vpn-comparison" },
  { rank: 10, name: "Windscribe", feat: "無料10GB利用可", price: "無料〜", link: "/guide/vpn-comparison" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "VPNランキング", url: `${siteConfig.url}/guide/vpn-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】VPNおすすめランキングTOP10" description="安全性・速度・料金で厳選したVPNランキング。" url={`${siteConfig.url}/guide/vpn-ranking-2026`} />
      <ItemListJsonLd name="VPNサービスTOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>VPNランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】VPNおすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">公共WiFiでの情報漏洩を防ぎ、海外サイトにアクセスするためのVPNを厳選。人気10サービスをランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">VPN サービス TOP10</h2>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.rank} className="bg-card-bg border border-card-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">{it.rank}位</span>
                <h3 className="text-lg font-bold">{it.name}</h3>
              </div>
              <p className="text-sm text-muted mb-1"><span className="font-bold text-foreground">特徴: </span>{it.feat}</p>
              <p className="text-sm text-muted mb-2"><span className="font-bold text-foreground">料金: </span>{it.price}</p>
              <Link href={it.link} className="text-sm font-bold text-primary hover:underline">詳しく見る →</Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
