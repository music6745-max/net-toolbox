import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】ネット証券おすすめランキングTOP10｜新NISA対応の人気口座",
  description:
    "2026年最新のネット証券TOP10をランキング形式で紹介。SBI証券・楽天証券・マネックス証券等、新NISA対応の人気証券口座を徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/online-broker-ranking-2026` },
};

const items = [
  { rank: 1, name: "SBI証券", feat: "口座数No.1、商品ラインナップ最強", nisa: "新NISA完全対応", link: "/guide/online-broker-comparison" },
  { rank: 2, name: "楽天証券", feat: "楽天ポイントで投信購入可", nisa: "新NISA完全対応", link: "/guide/online-broker-comparison" },
  { rank: 3, name: "マネックス証券", feat: "米国株の銘柄数No.1", nisa: "新NISA対応", link: "/guide/online-broker-comparison" },
  { rank: 4, name: "auカブコム証券", feat: "auユーザーに特典", nisa: "新NISA対応", link: "/guide/online-broker-comparison" },
  { rank: 5, name: "松井証券", feat: "1日50万円まで手数料無料", nisa: "新NISA対応", link: "/guide/online-broker-comparison" },
  { rank: 6, name: "SMBC日興証券", feat: "IPO取扱数上位", nisa: "新NISA対応", link: "/guide/online-broker-comparison" },
  { rank: 7, name: "PayPay証券", feat: "1,000円から株が買える", nisa: "つみたてNISA可", link: "/guide/investment-app-comparison" },
  { rank: 8, name: "GMOクリック証券", feat: "FX取引高No.1", nisa: "新NISA対応", link: "/guide/fx-broker-comparison" },
  { rank: 9, name: "LINE証券", feat: "LINEで簡単投資", nisa: "つみたてNISA可", link: "/guide/investment-app-comparison" },
  { rank: 10, name: "IG証券", feat: "CFD取引に強い", nisa: "非対応", link: "/guide/fx-broker-comparison" },
];

export default function OnlineBrokerRankingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ネット証券ランキング", url: `${siteConfig.url}/guide/online-broker-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】ネット証券おすすめランキングTOP10" description="新NISA対応のネット証券TOP10を徹底比較。" url={`${siteConfig.url}/guide/online-broker-ranking-2026`} />
      <ItemListJsonLd name="ネット証券TOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ネット証券ランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】ネット証券おすすめランキングTOP10｜新NISA対応の人気口座</h1>
        <p className="text-muted leading-relaxed">※本記事は投資助言ではありません。新NISA時代に最適な証券口座TOP10をランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">ネット証券TOP10</h2>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.rank} className="bg-card-bg border border-card-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">{it.rank}位</span>
                <h3 className="text-lg font-bold">{it.name}</h3>
              </div>
              <p className="text-sm text-muted mb-1"><span className="font-bold text-foreground">特徴: </span>{it.feat}</p>
              <p className="text-sm text-muted mb-2"><span className="font-bold text-foreground">新NISA: </span>{it.nisa}</p>
              <Link href={it.link} className="text-sm font-bold text-primary hover:underline">詳しく見る →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">無料口座開設</h2>
        <ComparisonTableCTA
          services={[
            { name: "SBI証券", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "口座数No.1", price: "口座開設無料", badge: "定番" },
            { name: "楽天証券", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "楽天ポイント連携", price: "口座開設無料" },
            { name: "マネックス証券", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "米国株に強い", price: "口座開設無料" },
          ]}
        />
      </section>
    </div>
  );
}
