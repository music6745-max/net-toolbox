import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】ポケットWiFi・クラウドWiFiおすすめランキングTOP10",
  description:
    "2026年最新のポケットWiFi・クラウドWiFiおすすめランキングTOP10。月額料金・速度・データ容量で厳選した人気サービスを徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/wifi-ranking-2026` },
};

const items = [
  { rank: 1, name: "楽天モバイル", feat: "データ無制限で月3,278円", price: "月3,278円", link: "/guide/wifi-comparison" },
  { rank: 2, name: "WiMAX +5G", feat: "高速通信、工事不要", price: "月4,000円〜", link: "/guide/wifi-comparison" },
  { rank: 3, name: "Broad WiMAX", feat: "キャンペーン豊富", price: "月2,999円〜", link: "/guide/wifi-comparison" },
  { rank: 4, name: "MUGEN WiFi", feat: "クラウド型で100GB", price: "月3,438円〜", link: "/guide/wifi-comparison" },
  { rank: 5, name: "縛られないWiFi", feat: "解約金なし", price: "月3,300円〜", link: "/guide/wifi-comparison" },
  { rank: 6, name: "THE WiFi", feat: "食事優待特典", price: "月3,278円〜", link: "/guide/wifi-comparison" },
  { rank: 7, name: "ZEUS WiFi", feat: "30GB月額2,361円", price: "月2,361円〜", link: "/guide/wifi-comparison" },
  { rank: 8, name: "クラウドWiFi東京", feat: "シンプル料金", price: "月3,718円", link: "/guide/wifi-comparison" },
  { rank: 9, name: "Air-WiFi", feat: "安定のクラウド型", price: "月3,278円〜", link: "/guide/wifi-comparison" },
  { rank: 10, name: "X-mobile", feat: "地方カバーに強い", price: "月額制", link: "/guide/wifi-comparison" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ポケットWiFiランキング", url: `${siteConfig.url}/guide/wifi-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】ポケットWiFi・クラウドWiFiおすすめランキングTOP10" description="月額料金・速度・データ容量で厳選。" url={`${siteConfig.url}/guide/wifi-ranking-2026`} />
      <ItemListJsonLd name="ポケットWiFi TOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ポケットWiFiランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】ポケットWiFi・クラウドWiFiおすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">在宅ワーク・出張・旅行に便利なポケットWiFi。月額料金・速度・データ容量で厳選した10サービスをランキングで紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">ポケットWiFi TOP10</h2>
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
