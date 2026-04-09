import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】生命保険おすすめランキングTOP10｜死亡保障・医療保障で厳選",
  description:
    "2026年最新の生命保険おすすめランキングTOP10。死亡保障・医療保障・終身・定期の人気保険を徹底比較。FP無料相談の活用法も解説。",
  alternates: { canonical: `${siteConfig.url}/guide/insurance-ranking-2026` },
};

const items = [
  { rank: 1, name: "オリックス生命 ブリッジ", feat: "ネット完結・保険料安い定期保険", price: "月1,000円台〜", link: "/guide/insurance-comparison" },
  { rank: 2, name: "メットライフ生命 スーパー割引定期保険", feat: "非喫煙者割引あり", price: "月額制", link: "/guide/insurance-comparison" },
  { rank: 3, name: "FWD生命 FWD収入保障", feat: "収入保障で合理的", price: "月額制", link: "/guide/insurance-comparison" },
  { rank: 4, name: "アクサダイレクト生命", feat: "ネット申込で手続き簡単", price: "月額制", link: "/guide/insurance-comparison" },
  { rank: 5, name: "ライフネット生命", feat: "業界初のネット生保", price: "月額制", link: "/guide/insurance-comparison" },
  { rank: 6, name: "チューリッヒ生命 終身医療保険プレミアムZ", feat: "医療保障の定番", price: "月額制", link: "/guide/insurance-comparison" },
  { rank: 7, name: "東京海上日動あんしん生命", feat: "大手の安心感", price: "月額制", link: "/guide/insurance-comparison" },
  { rank: 8, name: "メディケア生命 新メディフィットA", feat: "がん保険併用で安心", price: "月額制", link: "/guide/cancer-insurance-comparison" },
  { rank: 9, name: "日本生命 みらいのカタチ", feat: "大手生保の商品力", price: "月額制", link: "/guide/insurance-comparison" },
  { rank: 10, name: "ソニー生命 変額保険", feat: "運用もできる変額型", price: "月額制", link: "/guide/insurance-comparison" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "生命保険ランキング", url: `${siteConfig.url}/guide/insurance-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】生命保険おすすめランキングTOP10" description="死亡保障・医療保障で厳選。" url={`${siteConfig.url}/guide/insurance-ranking-2026`} />
      <ItemListJsonLd name="生命保険TOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>生命保険ランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】生命保険おすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">家族を守る生命保険は、ライフステージで見直すことが重要。人気10商品をランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">生命保険TOP10</h2>
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

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">無料FP相談でプロに相談</h2>
        <ComparisonTableCTA
          services={[
            { name: "保険チャンネル", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "リクルート運営", price: "完全無料", badge: "人気" },
            { name: "保険見直しラボ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "経験豊富なFP", price: "完全無料" },
            { name: "ほけんのぜんぶ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "子育て世帯に強い", price: "完全無料" },
          ]}
        />
      </section>
    </div>
  );
}
