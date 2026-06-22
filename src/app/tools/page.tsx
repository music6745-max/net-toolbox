import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { publicTools } from "@/lib/publicCatalog";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import ToolsBrowser from "./ToolsBrowser";

const allTools = publicTools;

export const metadata: Metadata = {
  title: `ツール一覧【厳選${allTools.length}種】`,
  description: `${siteConfig.name}の主要な無料Webツールをカテゴリ別に一覧表示。文字数カウント、QRコード、JSON整形、パスワード生成など、登録不要で使えます。`,
  alternates: {
    canonical: `${siteConfig.url}/tools`,
  },
  openGraph: {
    title: `ツール一覧【厳選${allTools.length}種】| ${siteConfig.name}`,
    description: `${allTools.length}種類の主要な無料Web便利ツールをまとめて掲載。`,
    url: `${siteConfig.url}/tools`,
    type: "website",
  },
};

function CollectionPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ツール一覧",
    description: `${allTools.length}種類の主要な無料Webツールを掲載。`,
    url: `${siteConfig.url}/tools`,
    inLanguage: "ja",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allTools.length,
      itemListElement: allTools.slice(0, 50).map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteConfig.url}/tools/${t.slug}`,
        name: t.name,
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

export default function ToolsIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ツール一覧", url: `${siteConfig.url}/tools` },
        ]}
      />
      <CollectionPageJsonLd />

      <nav className="text-sm text-muted mb-6" aria-label="パンくずリスト">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <span>ツール一覧</span>
      </nav>

      <section className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          ツール<span className="text-primary">一覧</span>
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto px-2">
          仕事・制作・開発で使いやすい無料Webツールをカテゴリ別に整理しました。キーワード検索・カテゴリ絞り込みも可能です。
        </p>
      </section>

      <ToolsBrowser allTools={allTools} />
    </div>
  );
}
