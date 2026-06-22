import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { getIndexableGuides } from "@/lib/retiredGuides";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import GuideList from "./GuideList";
import { guides } from "./guides.data";

const publicGuides = getIndexableGuides(guides);

export const metadata: Metadata = {
  title: `ガイド・比較記事一覧【厳選${publicGuides.length}本】| Webツール・通信・制作環境`,
  description: `Webツール、通信、クラウド、制作環境、個人運営に関係する${publicGuides.length}本のガイドを公開。作業目的に合うツールとサービスの選び方を整理します。`,
  alternates: {
    canonical: `${siteConfig.url}/guide`,
  },
  openGraph: {
    title: `ガイド・比較記事一覧【厳選${publicGuides.length}本】`,
    description: `Webツール、通信、クラウド、制作環境、個人運営に関係するガイド${publicGuides.length}本を公開。`,
    url: `${siteConfig.url}/guide`,
    type: "website",
  },
};

function CollectionPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ガイド・比較記事一覧",
    description: `${publicGuides.length}本以上の比較・活用ガイドを掲載。`,
    url: `${siteConfig.url}/guide`,
    inLanguage: "ja",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: publicGuides.length,
      itemListElement: publicGuides.slice(0, 30).map((g, i) => ({
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
          Webツール、通信、クラウド、制作環境、個人運営に関係するガイドを整理しています。
        </p>
      </section>

      <GuideList guides={publicGuides} />

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
