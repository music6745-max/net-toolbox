import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { guides } from "../guide/guides.data";

const TITLE = "2026年人気ランキング｜ジャンル別ガイドTop3 | ネットツールボックス";
const DESC = "通信・金融・転職・英会話・プログラミング・サーバー・VPNなど主要ジャンルで、もっとも読まれている比較ガイドのTop3をまとめたハブページです。";
const URL = `${siteConfig.url}/rankings`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    type: "website",
  },
};

type Genre = {
  id: string;
  name: string;
  icon: string;
  desc: string;
  slugs: string[]; // Top3 guide slugs
};

const genres: Genre[] = [
  {
    id: "telecom",
    name: "通信",
    icon: "📡",
    desc: "格安SIM・光回線・モバイルWiFiなど、通信費節約ジャンルの人気トップ3。",
    slugs: ["sim-comparison", "wifi-comparison", "hikari-fiber-comparison"],
  },
  {
    id: "finance",
    name: "金融",
    icon: "💳",
    desc: "クレジットカード・ふるさと納税・NISAなど、お金まわりジャンルの人気トップ3。",
    slugs: ["credit-card-comparison", "furusato-tax-comparison", "nisa-comparison"],
  },
  {
    id: "career",
    name: "転職",
    icon: "💼",
    desc: "転職サイト・クラウドソーシング・副業ツールの人気トップ3。",
    slugs: ["job-site-comparison", "crowdsourcing-comparison", "side-business-tools"],
  },
  {
    id: "english",
    name: "英会話",
    icon: "🗣️",
    desc: "オンライン英会話・家庭教師サービスの人気トップ3。",
    slugs: ["online-english-comparison", "tutoring-comparison", "programming-school-comparison"],
  },
  {
    id: "programming",
    name: "プログラミング",
    icon: "💻",
    desc: "プログラミングスクール・開発ツール・副業向けリソースの人気トップ3。",
    slugs: ["programming-school-comparison", "developer-tools-guide", "web-tools-for-work"],
  },
  {
    id: "server",
    name: "サーバー",
    icon: "🖥️",
    desc: "レンタルサーバー・クラウドストレージの人気トップ3。",
    slugs: ["rental-server-comparison", "best-rental-servers", "cloud-storage-comparison"],
  },
  {
    id: "vpn",
    name: "VPN",
    icon: "🔐",
    desc: "セキュリティ強化に役立つVPNサービスの人気トップ3。",
    slugs: ["vpn-comparison", "best-vpn-services", "corporate-vpn-comparison"],
  },
];

function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

function CollectionPageJsonLd() {
  const itemList = genres.flatMap((genre, gi) =>
    genre.slugs.map((slug, si) => {
      const g = getGuide(slug);
      return {
        "@type": "ListItem",
        position: gi * 3 + si + 1,
        name: g?.title ?? slug,
        url: `${siteConfig.url}/guide/${slug}`,
      };
    })
  );
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESC,
    url: URL,
    inLanguage: "ja",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: itemList,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RankingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "人気ランキング", url: URL },
        ]}
      />
      <CollectionPageJsonLd />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <span>人気ランキング</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        2026年人気ランキング｜ジャンル別ガイドTop3
      </h1>
      <p className="text-muted leading-relaxed mb-8">
        通信・金融・転職・英会話・プログラミング・サーバー・VPNの7ジャンルで、
        もっとも読まれている比較ガイドのTop3をまとめました。
        知りたい分野のランキングから、あなたに最適なサービスがきっと見つかります。
      </p>

      <div className="space-y-10">
        {genres.map((genre) => (
          <section key={genre.id} id={genre.id} className="">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl" aria-hidden>{genre.icon}</span>
              <h2 className="text-2xl font-bold">{genre.name}</h2>
            </div>
            <p className="text-sm text-muted mb-4">{genre.desc}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {genre.slugs.map((slug, idx) => {
                const g = getGuide(slug);
                if (!g) return null;
                return (
                  <Link
                    key={slug}
                    href={`/guide/${slug}`}
                    className="group relative block bg-card-bg border border-card-border rounded-xl p-5 hover:border-primary transition-colors"
                  >
                    <span className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shadow">
                      {idx + 1}
                    </span>
                    <div className="text-2xl mb-2" aria-hidden>{g.icon}</div>
                    <h3 className="font-bold text-sm mb-2 leading-snug group-hover:text-primary">{g.title}</h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-3">{g.description}</p>
                    <div className="text-xs text-muted mt-2">読了 {g.readTime}</div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
        <h2 className="text-lg font-bold mb-2">ガイド一覧を見る</h2>
        <p className="text-sm text-muted mb-3">
          250件以上の比較ガイドを公開中。ジャンル別フィルターで探せます。
        </p>
        <Link
          href="/guide"
          className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          すべてのガイドを見る
        </Link>
      </section>
    </div>
  );
}
