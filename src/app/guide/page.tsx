import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import GuideList from "./GuideList";
import { guides } from "./guides.data";

export const metadata: Metadata = {
  title: `ガイド・比較記事一覧【全${guides.length}本】| 通信・金融・生活・仕事まで徹底解説`,
  description: `格安SIM・クレカ・VPN・レンタルサーバー・転職・英会話など${guides.length}本以上の比較ガイドを無料公開。2026年最新の料金・特徴を徹底解説し、あなたに最適なサービスを最短で見つけられます。`,
  alternates: {
    canonical: `${siteConfig.url}/guide`,
  },
  openGraph: {
    title: `ガイド・比較記事一覧【全${guides.length}本】`,
    description: `通信・金融・生活・仕事スキルまで、2026年最新の比較ガイド${guides.length}本を無料公開。`,
    url: `${siteConfig.url}/guide`,
    type: "website",
  },
};

function CollectionPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ガイド・比較記事一覧",
    description: `${guides.length}本以上の比較・活用ガイドを掲載。`,
    url: `${siteConfig.url}/guide`,
    inLanguage: "ja",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: guides.length,
      itemListElement: guides.slice(0, 30).map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteConfig.url}/guide/${g.slug}`,
        name: g.title,
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function GuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
        ]}
      />
      <CollectionPageJsonLd />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6" aria-label="パンくずリスト">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <span>ガイド</span>
      </nav>

      <section className="text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          ガイド・比較<span className="text-primary">記事一覧</span>
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto px-2">
          通信・金融・仕事スキル・生活・健康など、2026年最新の比較ガイドを無料公開。あなたに最適なサービスを最短で見つけられます。
        </p>
      </section>

      <GuideList guides={guides} />

      {/* About section */}
      <section className="mt-12 bg-card-bg border border-card-border rounded-xl p-6 sm:p-8 text-center">
        <h2 className="text-xl font-bold mb-3">ツールを使ってみる</h2>
        <p className="text-sm text-muted mb-4">
          ガイドで紹介しているツールはすべて無料・登録不要で今すぐ使えます。
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          ツール一覧を見る
        </Link>
      </section>
    </div>
  );
}
