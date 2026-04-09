import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, ArticleJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】クレジットカードおすすめランキングTOP10｜還元率・年会費・特典で厳選",
  description:
    "2026年最新のクレジットカードおすすめランキングTOP10。楽天カード・三井住友NL・PayPayカード等、還元率・年会費・特典で厳選した人気カードを徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/credit-card-ranking-2026` },
};

const items = [
  { rank: 1, name: "三井住友カード(NL)", feat: "コンビニ・マクドで最大7%還元", annual: "永年無料", link: "/guide/credit-card-comparison" },
  { rank: 2, name: "楽天カード", feat: "楽天市場で還元率3%", annual: "永年無料", link: "/guide/credit-card-comparison" },
  { rank: 3, name: "PayPayカード", feat: "PayPayチャージで1.5%", annual: "永年無料", link: "/guide/paypay-vs-rakutenpay" },
  { rank: 4, name: "JCB CARD W", feat: "39歳以下で還元率2倍", annual: "永年無料", link: "/guide/credit-card-comparison" },
  { rank: 5, name: "dカード", feat: "ドコモユーザー特典充実", annual: "永年無料", link: "/guide/credit-card-comparison" },
  { rank: 6, name: "エポスカード", feat: "即日発行・マルイで10%OFF", annual: "永年無料", link: "/guide/credit-card-comparison" },
  { rank: 7, name: "リクルートカード", feat: "全店1.2%還元", annual: "永年無料", link: "/guide/credit-card-comparison" },
  { rank: 8, name: "イオンカード", feat: "イオンで5%OFF", annual: "永年無料", link: "/guide/credit-card-comparison" },
  { rank: 9, name: "アメックスゴールド", feat: "上質な特典と保険", annual: "39,600円", link: "/guide/credit-card-platinum-comparison" },
  { rank: 10, name: "三井住友カード ゴールド(NL)", feat: "年100万円利用で翌年以降永年無料", annual: "5,500円→無料", link: "/guide/credit-card-platinum-comparison" },
];

export default function CreditCardRankingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "クレジットカードランキング", url: `${siteConfig.url}/guide/credit-card-ranking-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】クレジットカードおすすめランキングTOP10" description="還元率・年会費・特典で厳選した人気クレジットカードTOP10。" url={`${siteConfig.url}/guide/credit-card-ranking-2026`} />
      <ItemListJsonLd name="クレジットカードTOP10" items={items.map((it) => ({ name: it.name, url: `${siteConfig.url}${it.link}` }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>クレジットカードランキング</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ランキング</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】クレジットカードおすすめランキングTOP10</h1>
        <p className="text-muted leading-relaxed">年会費無料で高還元率を狙えるカードから、ステータス重視のゴールドカードまで、2026年おすすめのクレカ10枚をランキング形式で紹介します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">クレジットカードTOP10</h2>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.rank} className="bg-card-bg border border-card-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">{it.rank}位</span>
                <h3 className="text-lg font-bold">{it.name}</h3>
              </div>
              <p className="text-sm text-muted mb-1"><span className="font-bold text-foreground">特徴: </span>{it.feat}</p>
              <p className="text-sm text-muted mb-2"><span className="font-bold text-foreground">年会費: </span>{it.annual}</p>
              <Link href={it.link} className="text-sm font-bold text-primary hover:underline">詳しく見る →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">無料発行のおすすめカード</h2>
        <ComparisonTableCTA
          services={[
            { name: "三井住友カード(NL)", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "コンビニ最大7%還元", price: "年会費永年無料", badge: "人気No.1" },
            { name: "楽天カード", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "楽天市場3%還元", price: "年会費永年無料" },
            { name: "JCB CARD W", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "39歳以下で2倍還元", price: "年会費永年無料" },
          ]}
        />
      </section>
    </div>
  );
}
