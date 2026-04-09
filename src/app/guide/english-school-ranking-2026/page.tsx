import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】オンライン英会話おすすめランキングTOP10｜料金・講師数・日本語サポート",
  description:
    "2026年最新のオンライン英会話ランキングTOP10。ネイティブキャンプ・DMM英会話・Bizmates等、料金・講師数・日本語サポートで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/english-school-ranking-2026` },
};

const items = [
  { rank: 1, name: "ネイティブキャンプ", feat: "月額6,480円で毎日無制限", price: "月6,480円", link: "/guide/online-english-comparison" },
  { rank: 2, name: "DMM英会話", feat: "120ヶ国以上の講師", price: "月6,980円〜", link: "/guide/online-english-comparison" },
  { rank: 3, name: "レアジョブ英会話", feat: "業界最大手の老舗", price: "月4,620円〜", link: "/guide/online-english-comparison" },
  { rank: 4, name: "QQ English", feat: "カランメソッド正式認定校", price: "月2,980円〜", link: "/guide/online-english-comparison" },
  { rank: 5, name: "Bizmates", feat: "ビジネス英語特化", price: "月13,200円〜", link: "/guide/online-english-comparison" },
  { rank: 6, name: "Cambly", feat: "ネイティブ講師のみ", price: "月6,490円〜", link: "/guide/online-english-comparison" },
  { rank: 7, name: "AQUES", feat: "日本人×外国人ハイブリッド", price: "月額制", link: "/guide/online-english-comparison" },
  { rank: 8, name: "産経オンライン英会話Plus", feat: "家族でシェア可", price: "月4,620円〜", link: "/guide/online-english-comparison" },
  { rank: 9, name: "ECCオンラインレッスン", feat: "ECC品質をオンラインで", price: "月8,360円〜", link: "/guide/online-english-comparison" },
  { rank: 10, name: "Kimini英会話", feat: "学研監修の教材", price: "月1,210円〜", link: "/guide/online-english-comparison" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "英会話ランキング", url: `${siteConfig.url}/guide/english-school-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】オンライン英会話おすすめランキングTOP10" description="料金・講師数・日本語サポートで厳選したランキング。" url={`${siteConfig.url}/guide/english-school-ranking-2026`} />
      <ItemListJsonLd name="オンライン英会話TOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>英会話ランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】オンライン英会話おすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">自宅で気軽に英語学習ができるオンライン英会話。2026年おすすめの10社をランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">オンライン英会話TOP10</h2>
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
        <h2 className="text-xl font-bold mb-4">無料体験レッスン予約</h2>
        <ComparisonTableCTA
          services={[
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "毎日無制限", price: "月6,480円", badge: "定番" },
            { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "カランメソッド", price: "月2,980円〜" },
            { name: "AQUES", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "ハイブリッド指導", price: "月額制" },
          ]}
        />
      </section>
    </div>
  );
}
