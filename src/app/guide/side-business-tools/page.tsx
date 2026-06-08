import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

export const metadata: Metadata = {
  title: "副業向けWebツールおすすめ10選【2026年最新】徹底比較｜無料で始める",
  description:
    "副業を始めたい方へ。ブログ開設のレンタルサーバー・確定申告ソフト・VPN・画像作成・文章作成ツールを徹底比較し、無料から使える副業必須ツールの選び方を解説します。",
  keywords: [
    "副業",
    "Webツール",
    "ブログ",
    "確定申告",
    "VPN",
    "画像作成",
    "無料ツール",
    "フリーランス",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/side-business-tools`,
  },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "副業に必要なWebツール完全ガイド｜無料で始める",
    description:
      "副業を始めるのに必要なWebツールを完全網羅。ブログ開設のレンタルサーバー、確定申告ソフト、VPN、画像作成、文章作成まで。",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    mainEntityOfPage: `${siteConfig.url}/guide/side-business-tools`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const sections = [
  {
    id: "blog",
    title: "ブログ・Webサイト開設",
    icon: "&#128187;",
    description:
      "副業の王道であるブログ。広告収入やアフィリエイトで収益化できます。まずはレンタルサーバーを契約してWordPressでブログを始めましょう。",
    services: [
      {
        name: "ConoHa WING",
        desc: "国内最速クラスのレンタルサーバー。初心者でも最短5分でWordPressブログを開設できます。ドメイン2つ永久無料。",
        price: "月額678円〜",
        url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
        tag: "おすすめ",
      },
      {
        name: "エックスサーバー",
        desc: "国内シェアNo.1の安定性。20年以上の実績があり、大規模サイトの運営にも対応できます。",
        price: "月額693円〜",
        url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
        tag: "安定性重視",
      },
    ],
    tools: [
      {
        name: "QRコード作成",
        desc: "ブログのURLをQRコードにして名刺やSNSで共有",
        path: "/tools/qr-code",
      },
      {
        name: "文字数カウント",
        desc: "記事の文字数をリアルタイムでカウント",
        path: "/tools/character-count",
      },
    ],
    guideLink: "/guide/rental-server-comparison",
    guideLinkText: "レンタルサーバー比較の詳細を見る",
  },
  {
    id: "accounting",
    title: "会計・確定申告",
    icon: "&#128200;",
    description:
      "副業で年間20万円以上の所得がある場合、確定申告が必要です。クラウド会計ソフトを使えば、簿記の知識がなくても簡単に申告書を作成できます。",
    services: [
      {
        name: "freee（フリー）",
        desc: "会計知識ゼロでもOK。スマホで領収書を撮影するだけで自動仕訳。確定申告書もそのまま電子申告可能。",
        price: "月額980円〜（年払い）",
        url: "/guide/accounting-software-comparison",
        tag: "初心者向け",
      },
      {
        name: "やよいの青色申告",
        desc: "売上実績No.1の会計ソフト。初年度無料のプランがあり、コストを抑えて始められます。",
        price: "初年度無料〜",
        url: "/guide/accounting-software-comparison",
        tag: "コスパ重視",
      },
    ],
    tools: [
      {
        name: "税金計算ツール",
        desc: "所得税の概算をすばやく計算",
        path: "/tools/tax-calculator",
      },
      {
        name: "複利計算ツール",
        desc: "副業収入の投資シミュレーション",
        path: "/tools/compound-interest",
      },
    ],
    guideLink: "/guide/accounting-software-comparison",
    guideLinkText: "確定申告ソフト比較の詳細を見る",
  },
  {
    id: "security",
    title: "セキュリティ・VPN",
    icon: "&#128272;",
    description:
      "副業でカフェや外出先で作業する際、公共WiFiのセキュリティが気になります。VPNを使えば通信を暗号化して安全に作業できます。",
    services: [
      {
        name: "NordVPN",
        desc: "世界で最も信頼されるVPN。公共WiFiでの安全な通信と、海外コンテンツへのアクセスに。",
        price: "月額530円〜",
        url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+60OXD",
        tag: "総合No.1",
      },
      {
        name: "MillenVPN",
        desc: "日本企業が運営する国産VPN。日本語サポートが充実しており、安心して使えます。",
        price: "月額396円〜",
        url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6",
        tag: "国産VPN",
      },
    ],
    tools: [
      {
        name: "パスワード生成",
        desc: "安全なパスワードをワンクリックで生成",
        path: "/tools/password-generator",
      },
      {
        name: "ハッシュ生成",
        desc: "テキストのハッシュ値を計算",
        path: "/tools/hash-generator",
      },
    ],
    guideLink: "/guide/vpn-comparison",
    guideLinkText: "VPN比較の詳細を見る",
  },
  {
    id: "image",
    title: "画像作成・編集",
    icon: "&#127912;",
    description:
      "ブログのアイキャッチ画像やSNS投稿画像など、副業では画像作成の機会が多いです。無料ツールを活用してプロ並みの画像を作成しましょう。",
    services: [],
    tools: [
      {
        name: "画像リサイズ",
        desc: "ブログやSNSに最適なサイズに画像をリサイズ",
        path: "/tools/image-resize",
      },
      {
        name: "画像圧縮",
        desc: "画像のファイルサイズを圧縮して表示速度を改善",
        path: "/tools/image-compress",
      },
      {
        name: "QRコード作成",
        desc: "URLやテキストからQRコードを簡単に作成",
        path: "/tools/qr-code",
      },
      {
        name: "カラーコード変換",
        desc: "HEX・RGB・HSLのカラーコードを変換",
        path: "/tools/color-converter",
      },
    ],
    guideLink: "",
    guideLinkText: "",
  },
  {
    id: "text",
    title: "文章作成・テキスト処理",
    icon: "&#9997;",
    description:
      "ブログ記事やSNS投稿文、メールの作成など、文章力は副業の基本スキル。テキスト処理ツールを活用して効率的に作業しましょう。",
    services: [],
    tools: [
      {
        name: "文字数カウント",
        desc: "記事の文字数をリアルタイムでカウント",
        path: "/tools/character-count",
      },
      {
        name: "テキスト変換",
        desc: "大文字・小文字・全角・半角の変換",
        path: "/tools/text-converter",
      },
      {
        name: "文字列置換",
        desc: "テキストの一括置換に便利",
        path: "/tools/text-replace",
      },
      {
        name: "Markdown変換",
        desc: "Markdownをプレビュー・HTMLに変換",
        path: "/tools/markdown-preview",
      },
    ],
    guideLink: "",
    guideLinkText: "",
  },
];

export default function SideBusinessToolsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "副業Webツールガイド",
            url: `${siteConfig.url}/guide/side-business-tools`,
          },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">
          ガイド
        </Link>
        <span className="mx-2">/</span>
        <span>副業Webツールガイド</span>
      </nav>

      {/* PR Disclaimer */}
      <div className="text-xs text-muted mb-4 bg-card-bg border border-card-border rounded-lg px-3 py-2 inline-block">
        PR・広告を含みます
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
            副業
          </span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          副業に必要なWebツール完全ガイド｜無料で始める
        </h1>
        <p className="text-muted leading-relaxed">
          副業を始めたいけど、何から準備すればいい？この記事では、ブログ開設からセキュリティ対策、確定申告まで、副業に必要なWebツールとサービスをカテゴリ別にまとめました。無料で使えるツールも多数紹介しています。
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-primary hover:underline">
                {i + 1}. {s.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#roadmap" className="text-primary hover:underline">
              6. 副業スタートのロードマップ
            </a>
          </li>
        </ul>
      </div>

      {/* Sections */}
      {sections.map((section, sIndex) => (
        <section key={section.id} id={section.id} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            <span dangerouslySetInnerHTML={{ __html: section.icon }} />{" "}
            {sIndex + 1}. {section.title}
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            {section.description}
          </p>

          {/* Recommended services (affiliate) */}
          {section.services.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">おすすめサービス</h3>
              <div className="space-y-3">
                {section.services.map((svc) => (
                  <a
                    key={svc.name}
                    href={svc.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm">{svc.name}</h4>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full whitespace-nowrap">
                            {svc.tag}
                          </span>
                        </div>
                        <p className="text-sm text-muted leading-relaxed mb-1">
                          {svc.desc}
                        </p>
                        <p className="text-xs text-primary font-medium">
                          {svc.price}
                        </p>
                      </div>
                      <span className="text-sm text-primary whitespace-nowrap font-medium shrink-0">
                        詳しく見る →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Free tools on the site */}
          {section.tools.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-3">
                無料で使えるツール（当サイト）
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.tools.map((tool) => (
                  <Link
                    key={tool.name}
                    href={tool.path}
                    className="block bg-card-bg border border-card-border rounded-lg p-4 hover:shadow-md hover:border-primary/30 transition-all duration-200"
                  >
                    <h4 className="font-bold text-sm mb-1">{tool.name}</h4>
                    <p className="text-xs text-muted">{tool.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Link to detailed guide */}
          {section.guideLink && (
            <Link
              href={section.guideLink}
              className="inline-flex items-center text-sm text-primary hover:underline font-medium"
            >
              {section.guideLinkText} →
            </Link>
          )}
        </section>
      ))}

      {/* Accounting CTA */}

      {/* Rental Server CTA */}
      <section className="mb-12">
        <h3 className="text-lg font-bold mb-4">レンタルサーバーを比較して選ぶ</h3>
        <ComparisonTableCTA
          services={[
            {
              name: "ConoHa WING",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
              highlight: "国内最速",
              price: "月687円〜",
              badge: "おすすめ",
            },
            {
              name: "エックスサーバー",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
              highlight: "安定実績20年",
              price: "月990円〜",
            },
          ]}
        />
      </section>

      {/* CrowdWorks CTA */}
      <div className="space-y-6 my-8">
        <AffiliateCTA serviceName="クラウドワークス" url="https://crowdworks.jp/" badge="副業" description="日本最大級のクラウドソーシング" color="blue" />
        <AffiliateCTA serviceName="マクロミル" url="https://px.a8.net/svt/ejp?a8mat=4B1O1P+8XJMI+2WL0+CLYLD" badge="アンケート" description="スキマ時間で月5,000〜15,000円のアンケートモニター副業。登録無料。" color="blue" />
      </div>

      {/* Roadmap section */}
      <section id="roadmap" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. 副業スタートのロードマップ
        </h2>
        <p className="text-muted leading-relaxed mb-6">
          副業を始める手順をステップバイステップでまとめました。
        </p>
        <div className="space-y-4">
          {[
            {
              step: "STEP 1",
              title: "レンタルサーバーを契約してブログを開設",
              desc: "ConoHa WINGなら最短5分でWordPressブログを開設できます。まずは発信の場を作りましょう。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
              linkText: "ConoHa WINGでブログを始める",
            },
            {
              step: "STEP 2",
              title: "セキュリティ対策をする",
              desc: "外出先でも安全に作業できるよう、VPNを導入しましょう。強力なパスワードも必須です。",
              url: "",
              linkText: "",
            },
            {
              step: "STEP 3",
              title: "記事を書いて収益化を目指す",
              desc: "当サイトの文字数カウントやテキスト処理ツールを活用して、効率的に記事を作成しましょう。",
              url: "",
              linkText: "",
            },
            {
              step: "STEP 4",
              title: "収入が出たら確定申告の準備",
              desc: "副業所得が年間20万円を超えたら確定申告が必要です。早めに会計ソフトを導入しておきましょう。",
              url: "/guide/accounting-software-comparison",
              linkText: "freeeで確定申告を始める",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <div className="flex items-start gap-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted mb-2">{item.desc}</p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="inline-block bg-primary text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-primary-hover transition-colors"
                    >
                      {item.linkText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          まずは無料ツールから始めよう
        </h2>
        <p className="text-sm text-muted mb-5">
          ネットツールボックスでは、副業に役立つ250以上の無料ツールを提供しています。登録不要ですぐに使えます。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            全ツール一覧を見る
          </Link>
          <Link
            href="/guide"
            className="inline-block border border-card-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            他のガイド記事を読む
          </Link>
        </div>
        <p className="text-xs text-muted mt-4">
          ※ 一部のサービス紹介にはアフィリエイトリンクを含みます。
        </p>
      </section>
      <section className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">副業がバレるかシミュレーション</h2>
        <p className="text-sm text-muted mb-3">副業の所得額から確定申告の要否と住民税への影響を判定します。</p>
        <Link href="/tools/side-business-tax-calculator" className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">副業バレない収入シミュレーターを使う</Link>
      </section>
      <GuideRelatedLinks currentSlug="side-business-tools" />
    </div>
  );
}
