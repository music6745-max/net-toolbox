import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】レンタルサーバーおすすめランキングTOP10｜WordPress/速度/料金",
  description:
    "2026年最新のレンタルサーバーおすすめランキングTOP10。ConoHa WING・エックスサーバー・ロリポップ等、WordPress対応・速度・料金で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/rental-server-ranking-2026` },
};

const items = [
  { rank: 1, name: "ConoHa WING", feat: "国内最速級、WordPressかんたんセットアップ", price: "月額1,452円〜", link: "/guide/rental-server-comparison" },
  { rank: 2, name: "エックスサーバー", feat: "業界最大手の安定性", price: "月額990円〜", link: "/guide/rental-server-comparison" },
  { rank: 3, name: "ロリポップ！", feat: "低価格で初心者向き", price: "月額220円〜", link: "/guide/rental-server-comparison" },
  { rank: 4, name: "mixhost", feat: "LiteSpeed搭載で高速", price: "月額968円〜", link: "/guide/rental-server-comparison" },
  { rank: 5, name: "シン・レンタルサーバー", feat: "高速・高機能", price: "月額770円〜", link: "/guide/rental-server-comparison" },
  { rank: 6, name: "カラフルボックス", feat: "無料お試し30日", price: "月額528円〜", link: "/guide/rental-server-comparison" },
  { rank: 7, name: "さくらのレンタルサーバ", feat: "老舗の安心感", price: "月額131円〜", link: "/guide/rental-server-comparison" },
  { rank: 8, name: "wpX Speed", feat: "WordPress特化", price: "月額2,200円〜", link: "/guide/rental-server-comparison" },
  { rank: 9, name: "CORESERVER", feat: "大容量・低価格", price: "月額418円〜", link: "/guide/rental-server-comparison" },
  { rank: 10, name: "heteml", feat: "GMO運営、バランス型", price: "月額880円〜", link: "/guide/rental-server-comparison" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "レンタルサーバーランキング", url: `${siteConfig.url}/guide/rental-server-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】レンタルサーバーおすすめランキングTOP10" description="WordPress/速度/料金で厳選したランキング。" url={`${siteConfig.url}/guide/rental-server-ranking-2026`} />
      <ItemListJsonLd name="レンタルサーバーTOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>レンタルサーバーランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】レンタルサーバーおすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">ブログ・企業サイトに最適なレンタルサーバー10社をランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">レンタルサーバーTOP10</h2>
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
