import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】ペット保険おすすめランキングTOP10｜犬猫の医療費に備える",
  description:
    "2026年最新のペット保険おすすめランキングTOP10。補償範囲・保険料・継続年齢で厳選した人気のペット保険を徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/pet-insurance-ranking-2026` },
};

const items = [
  { rank: 1, name: "アニコム損保", feat: "業界最大手、窓口精算対応", price: "月額制", link: "/guide/pet-insurance-comparison" },
  { rank: 2, name: "アイペット損保", feat: "業界2位、手厚い手術プラン", price: "月額制", link: "/guide/pet-insurance-comparison" },
  { rank: 3, name: "FPC", feat: "業界最安級の保険料", price: "月額1,000円台〜", link: "/guide/pet-clinic-comparison" },
  { rank: 4, name: "SBIプリズム少短", feat: "18歳まで継続可能", price: "月額制", link: "/guide/pet-clinic-comparison" },
  { rank: 5, name: "楽天ペット保険", feat: "楽天ポイントが貯まる", price: "月額制", link: "/guide/pet-insurance-comparison" },
  { rank: 6, name: "au損保", feat: "au経済圏との連携", price: "月額制", link: "/guide/pet-insurance-comparison" },
  { rank: 7, name: "PS保険", feat: "ペットアンドファミリー運営", price: "月額制", link: "/guide/pet-insurance-comparison" },
  { rank: 8, name: "日本ペット少額短期保険", feat: "獣医師監修", price: "月額制", link: "/guide/pet-insurance-comparison" },
  { rank: 9, name: "リトルファミリー少短", feat: "中高齢ペットに優しい", price: "月額制", link: "/guide/pet-insurance-comparison" },
  { rank: 10, name: "イーペット", feat: "シンプルプラン", price: "月額制", link: "/guide/pet-insurance-comparison" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ペット保険ランキング", url: `${siteConfig.url}/guide/pet-insurance-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】ペット保険おすすめランキングTOP10" description="犬猫の医療費に備えるペット保険ランキング。" url={`${siteConfig.url}/guide/pet-insurance-ranking-2026`} />
      <ItemListJsonLd name="ペット保険TOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ペット保険ランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】ペット保険おすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">愛犬・愛猫の万が一に備えるペット保険。人気10商品をランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">ペット保険TOP10</h2>
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
        <h2 className="text-xl font-bold mb-4">無料資料請求</h2>
        <ComparisonTableCTA
          services={[
            { name: "アニコム損保", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "業界最大手", price: "資料請求無料", badge: "人気" },
            { name: "アイペット損保", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "業界2位", price: "資料請求無料" },
            { name: "FPC", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "業界最安級", price: "資料請求無料" },
          ]}
        />
      </section>
    </div>
  );
}
