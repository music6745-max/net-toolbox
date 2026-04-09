import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】美容クリニックおすすめランキングTOP10｜脱毛・美肌・痩身",
  description:
    "2026年最新の美容クリニックおすすめランキングTOP10。湘南美容クリニック・TCB・リゼクリニック等、脱毛・美肌・痩身・矯正で人気のクリニックを徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/beauty-clinic-ranking-2026` },
};

const items = [
  { rank: 1, name: "湘南美容クリニック", feat: "全国100院超、美容医療の最大手", target: "全般", link: "/guide/beauty-clinic-comparison" },
  { rank: 2, name: "TCB東京中央美容外科", feat: "学割・モニター割が豊富", target: "若年層", link: "/guide/beauty-clinic-comparison" },
  { rank: 3, name: "リゼクリニック", feat: "医療脱毛の定番", target: "脱毛", link: "/guide/hair-removal-comparison" },
  { rank: 4, name: "エミナルクリニック", feat: "医療脱毛のコスパ", target: "脱毛", link: "/guide/hair-removal-comparison" },
  { rank: 5, name: "品川美容外科", feat: "老舗の美容外科", target: "美肌・美容整形", link: "/guide/beauty-clinic-comparison" },
  { rank: 6, name: "フレイアクリニック", feat: "女性専用医療脱毛", target: "脱毛", link: "/guide/hair-removal-comparison" },
  { rank: 7, name: "AGAスキンクリニック", feat: "男性向けAGA治療", target: "AGA", link: "/guide/aga-clinic-comparison" },
  { rank: 8, name: "ゴリラクリニック", feat: "メンズ専門", target: "メンズ美容", link: "/guide/mens-hair-removal-comparison" },
  { rank: 9, name: "東京美容外科", feat: "高度な美容整形", target: "美容整形", link: "/guide/beauty-clinic-comparison" },
  { rank: 10, name: "ガーデンクリニック", feat: "老舗の美容整形", target: "美容整形", link: "/guide/beauty-clinic-comparison" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "美容クリニックランキング", url: `${siteConfig.url}/guide/beauty-clinic-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】美容クリニックおすすめランキングTOP10" description="脱毛・美肌・痩身・美容整形で人気のクリニック。" url={`${siteConfig.url}/guide/beauty-clinic-ranking-2026`} />
      <ItemListJsonLd name="美容クリニックTOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>美容クリニックランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】美容クリニックおすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">脱毛・美肌・美容整形・AGA治療まで、2026年に人気の美容クリニック10選をランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">美容クリニックTOP10</h2>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.rank} className="bg-card-bg border border-card-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">{it.rank}位</span>
                <h3 className="text-lg font-bold">{it.name}</h3>
              </div>
              <p className="text-sm text-muted mb-1"><span className="font-bold text-foreground">特徴: </span>{it.feat}</p>
              <p className="text-sm text-muted mb-2"><span className="font-bold text-foreground">得意分野: </span>{it.target}</p>
              <Link href={it.link} className="text-sm font-bold text-primary hover:underline">詳しく見る →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">無料カウンセリング予約</h2>
        <ComparisonTableCTA
          services={[
            { name: "湘南美容クリニック", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "業界最大手", price: "無料カウンセリング", badge: "定番" },
            { name: "TCB東京中央美容外科", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "学割・モニター割", price: "無料カウンセリング" },
            { name: "リゼクリニック", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "医療脱毛の定番", price: "無料カウンセリング" },
          ]}
        />
      </section>
    </div>
  );
}
