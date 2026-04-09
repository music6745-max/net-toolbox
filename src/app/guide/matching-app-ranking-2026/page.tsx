import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】マッチングアプリおすすめランキングTOP10｜真剣・婚活・恋活",
  description:
    "2026年最新のマッチングアプリおすすめランキングTOP10。Pairs・with・Omiai・マリッシュ等、真剣交際・婚活・恋活目的別に徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/matching-app-ranking-2026` },
};

const items = [
  { rank: 1, name: "Pairs", feat: "累計会員数2,000万人の最大手", purpose: "恋活・婚活両対応", link: "/guide/matching-app-comparison" },
  { rank: 2, name: "with", feat: "心理テストでマッチング", purpose: "恋活", link: "/guide/matching-app-comparison" },
  { rank: 3, name: "Omiai", feat: "真剣度が高い", purpose: "婚活", link: "/guide/matching-app-comparison" },
  { rank: 4, name: "マリッシュ", feat: "再婚・シンママに優しい", purpose: "再婚", link: "/guide/matching-app-comparison" },
  { rank: 5, name: "タップル", feat: "20代に人気", purpose: "恋活", link: "/guide/matching-app-comparison" },
  { rank: 6, name: "youbride", feat: "成婚率が高い", purpose: "婚活", link: "/guide/matching-app-comparison" },
  { rank: 7, name: "ゼクシィ縁結び", feat: "リクルート運営", purpose: "婚活", link: "/guide/matching-app-comparison" },
  { rank: 8, name: "Tinder", feat: "海外出身者と出会える", purpose: "カジュアル", link: "/guide/matching-app-comparison" },
  { rank: 9, name: "Dine", feat: "食事デート特化", purpose: "恋活", link: "/guide/matching-app-comparison" },
  { rank: 10, name: "東カレデート", feat: "ハイクラス会員限定", purpose: "ハイクラス", link: "/guide/matching-app-comparison" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "マッチングアプリランキング", url: `${siteConfig.url}/guide/matching-app-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】マッチングアプリおすすめランキングTOP10" description="真剣・婚活・恋活で人気のマッチングアプリ。" url={`${siteConfig.url}/guide/matching-app-ranking-2026`} />
      <ItemListJsonLd name="マッチングアプリTOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>マッチングアプリランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】マッチングアプリおすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">真剣交際・婚活・恋活など目的別に最適なマッチングアプリ10選をランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">マッチングアプリTOP10</h2>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.rank} className="bg-card-bg border border-card-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">{it.rank}位</span>
                <h3 className="text-lg font-bold">{it.name}</h3>
              </div>
              <p className="text-sm text-muted mb-1"><span className="font-bold text-foreground">特徴: </span>{it.feat}</p>
              <p className="text-sm text-muted mb-2"><span className="font-bold text-foreground">目的: </span>{it.purpose}</p>
              <Link href={it.link} className="text-sm font-bold text-primary hover:underline">詳しく見る →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">無料登録で始める</h2>
        <ComparisonTableCTA
          services={[
            { name: "Pairs", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "会員数No.1", price: "無料登録", badge: "定番" },
            { name: "with", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "心理テスト", price: "無料登録" },
            { name: "Omiai", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "真剣度高め", price: "無料登録" },
          ]}
        />
      </section>
    </div>
  );
}
