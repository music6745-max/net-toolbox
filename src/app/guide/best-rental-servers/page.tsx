import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

export const metadata: Metadata = {
  title: "レンタルサーバーおすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "WordPressブログを始めたい方へ。ConoHa WING・エックスサーバー・ロリポップ・mixhost・カラフルボックスを料金/速度/サポートで徹底比較し最適なサーバー選びを解説します。",
  keywords: [
    "レンタルサーバー",
    "おすすめ",
    "比較",
    "初心者",
    "WordPress",
    "ConoHa WING",
    "エックスサーバー",
    "ロリポップ",
    "2026年",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/best-rental-servers`,
  },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年】レンタルサーバーおすすめ比較5選｜初心者向け",
    description:
      "2026年最新のレンタルサーバーを徹底比較。ConoHa WING・エックスサーバー・ロリポップなど初心者向けにおすすめ5社の料金・速度・WordPress対応を解説します。",
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
    mainEntityOfPage: `${siteConfig.url}/guide/best-rental-servers`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const servers = [
  {
    name: "ConoHa WING",
    price: "月額678円〜（WINGパック）",
    speed: "国内最速クラス（NGINX + LiteSpeed LSAPI）",
    wordpress: "簡単セットアップ対応（最短5分）",
    features: [
      "初期費用無料",
      "独自ドメイン2つ永久無料",
      "自動バックアップ（14日間）",
      "無料SSL",
      "管理画面が使いやすい",
    ],
    recommended: "コスパ重視で高速サーバーを使いたい初心者",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
    color: "blue",
    badge: "コスパNo.1",
  },
  {
    name: "エックスサーバー",
    price: "月額693円〜（スタンダードプラン）",
    speed: "高速（KUSANAGI技術導入）",
    wordpress: "簡単インストール対応",
    features: [
      "国内シェアNo.1の安定性",
      "20年以上の実績",
      "独自ドメイン1つ永久無料",
      "自動バックアップ（14日間）",
      "電話・メールサポート充実",
    ],
    recommended: "安定性・実績を重視する人、サポートを重視する人",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
    color: "orange",
    badge: "安定性No.1",
  },
  {
    name: "ロリポップ！",
    price: "月額220円〜（ライトプラン）",
    speed: "標準的（ハイスピードプランで高速化）",
    wordpress: "簡単インストール対応",
    features: [
      "業界最安クラスの料金",
      "ハイスピードプラン（月額550円〜）でLiteSpeed対応",
      "10日間無料お試し期間",
      "WordPress簡単引越し機能",
    ],
    recommended: "とにかく安く始めたい初心者、趣味ブログ向け",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1AFTYQ+348+5YZ76",
    color: "pink",
    badge: "最安値",
  },
  {
    name: "お名前.com レンタルサーバー",
    price: "月額891円〜（RSプラン）",
    speed: "高速（NGINX対応）",
    wordpress: "簡単セットアップ対応",
    features: [
      "ドメインとセットで管理が楽",
      "初期費用無料",
      "自動バックアップ（14日間）",
      "電話サポート24時間365日",
    ],
    recommended: "ドメインも一緒に取得したい人、サポート重視の人",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1823JM+50+354SDD",
    color: "green",
    badge: "ドメインセット",
  },
  {
    name: "シンレンタルサーバー",
    price: "月額539円〜（ベーシックプラン）",
    speed: "超高速（KUSANAGI + オールNVMe SSD）",
    wordpress: "簡単インストール対応",
    features: [
      "エックスサーバー系列の新ブランド",
      "最新技術を積極採用",
      "初期費用無料",
      "独自ドメイン1つ永久無料",
      "コスパに優れた高性能",
    ],
    recommended: "最新技術で高速表示を求める中級者以上",
    url: "",
    color: "purple",
    badge: "高速特化",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  orange:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

export default function BestRentalServersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "レンタルサーバー比較",
            url: `${siteConfig.url}/guide/best-rental-servers`,
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
        <span>レンタルサーバー比較</span>
      </nav>

      {/* PR Disclaimer */}
      <div className="text-xs text-muted mb-4 bg-card-bg border border-card-border rounded-lg px-3 py-2 inline-block">
        PR・広告を含みます
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年】レンタルサーバーおすすめ比較5選｜初心者向け
        </h1>
        <p className="text-muted leading-relaxed">
          ブログやWebサイトを始めるには、まずレンタルサーバーが必要です。この記事では、初心者でも失敗しないレンタルサーバーの選び方と、2026年おすすめのサーバー5社を料金・速度・機能で徹底比較します。
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              1. レンタルサーバーの選び方
            </a>
          </li>
          <li>
            <a href="#comparison" className="text-primary hover:underline">
              2. おすすめレンタルサーバー5選
            </a>
          </li>
          <li>
            <a href="#price-table" className="text-primary hover:underline">
              3. 料金比較表
            </a>
          </li>
          <li>
            <a href="#purpose" className="text-primary hover:underline">
              4. 目的別おすすめサーバー
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              5. よくある質問
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. レンタルサーバーの選び方
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          レンタルサーバーを選ぶ際は、以下の5つのポイントを確認しましょう。
        </p>
        <div className="space-y-3">
          {[
            {
              title: "表示速度",
              desc: "サイトの表示速度はSEOにも直結します。LiteSpeedやNGINX対応のサーバーがおすすめです。",
            },
            {
              title: "料金プラン",
              desc: "初期費用の有無、月額料金、長期契約割引を確認。無料ドメイン付きかも重要です。",
            },
            {
              title: "WordPress対応",
              desc: "WordPressの簡単インストール・簡単セットアップに対応しているかチェック。",
            },
            {
              title: "サポート体制",
              desc: "初心者は電話サポートがあると安心。メール・チャットの対応時間も確認しましょう。",
            },
            {
              title: "バックアップ",
              desc: "自動バックアップの有無と保持期間。万が一のトラブル時に重要になります。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 - Server details */}
      <section id="comparison" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          2. おすすめレンタルサーバー5選
        </h2>

        <div className="space-y-8">
          {servers.map((server, index) => (
            <div
              key={server.name}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}位
                </span>
                <h3 className="text-xl font-bold">{server.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[server.color]}`}
                >
                  {server.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">月額料金</span>
                  <span className="font-bold">{server.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">表示速度</span>
                  <span className="font-bold">{server.speed}</span>
                </div>
                <div className="bg-background rounded-lg p-3 sm:col-span-2">
                  <span className="text-muted block mb-1">WordPress</span>
                  <span className="font-bold">{server.wordpress}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2">主な特徴</h4>
                <ul className="space-y-1">
                  {server.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
                <p className="text-sm">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {server.recommended}
                </p>
              </div>

              {server.url && (
                <div className="text-center">
                  <a
                    href={server.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                  >
                    {server.name}の公式サイトを見る
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 - Price comparison table */}
      <section id="price-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. 料金比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">
                  サービス名
                </th>
                <th className="border border-card-border p-3 text-left">
                  月額料金
                </th>
                <th className="border border-card-border p-3 text-left">
                  初期費用
                </th>
                <th className="border border-card-border p-3 text-left">
                  無料ドメイン
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "ConoHa WING",
                  price: "678円〜",
                  initial: "無料",
                  domain: "2つ",
                },
                {
                  name: "エックスサーバー",
                  price: "693円〜",
                  initial: "無料",
                  domain: "1つ",
                },
                {
                  name: "ロリポップ！",
                  price: "220円〜",
                  initial: "無料",
                  domain: "なし（ハイスピード以上で1つ）",
                },
                {
                  name: "お名前.com",
                  price: "891円〜",
                  initial: "無料",
                  domain: "1つ",
                },
                {
                  name: "シンレンタルサーバー",
                  price: "539円〜",
                  initial: "無料",
                  domain: "1つ",
                },
              ].map((row) => (
                <tr key={row.name}>
                  <td className="border border-card-border p-3 font-medium">
                    {row.name}
                  </td>
                  <td className="border border-card-border p-3">{row.price}</td>
                  <td className="border border-card-border p-3">
                    {row.initial}
                  </td>
                  <td className="border border-card-border p-3">
                    {row.domain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 料金は12ヶ月契約時の月額換算です。キャンペーンにより変動する場合があります。
        </p>
      </section>

      {/* Section 4 - Purpose-based recommendations */}
      <section id="purpose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. 目的別おすすめサーバー</h2>
        <div className="space-y-4">
          {[
            {
              purpose: "初めてブログを作る人",
              server: "ConoHa WING",
              reason:
                "管理画面が直感的で分かりやすく、WordPress簡単セットアップで最短5分でブログを開設できます。ドメインも2つ無料で、コスパも抜群です。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
            },
            {
              purpose: "安定性を最優先にしたい人",
              server: "エックスサーバー",
              reason:
                "20年以上の運用実績と国内シェアNo.1の信頼性。大規模サイトの運営にも耐える安定したサーバー環境です。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
            },
            {
              purpose: "とにかく安く始めたい人",
              server: "ロリポップ！",
              reason:
                "月額220円から利用可能で、業界最安クラスの料金。趣味ブログや個人サイトのスタートに最適です。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1AFTYQ+348+5YZ76",
            },
          ].map((item) => (
            <div
              key={item.purpose}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.purpose}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.server}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {item.reason}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                {item.server}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. よくある質問</h2>
        <div className="space-y-4">
          {[
            {
              q: "レンタルサーバーの契約に必要なものは？",
              a: "メールアドレス、クレジットカード（またはConoHaチャージ等の前払い）があれば契約できます。本人確認書類は基本的に不要です。",
            },
            {
              q: "WordPressブログを始めるのにどれくらい費用がかかる？",
              a: "レンタルサーバー代が月額500〜1,000円程度、ドメインはサーバー契約で無料になるケースが多いです。WordPress自体は無料で使えるため、月額1,000円以内で始められます。",
            },
            {
              q: "サーバーの乗り換えは簡単にできる？",
              a: "多くのサーバーがWordPressの引越し機能を提供しています。ただし、初めから評判の良いサーバーを選んでおくと手間が省けます。",
            },
            {
              q: "無料レンタルサーバーではダメ？",
              a: "無料サーバーは広告が表示される、速度が遅い、独自ドメインが使えないなどの制限があります。本格的にブログを運営するなら有料サーバーを選びましょう。",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-2">Q. {item.q}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table CTA */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">おすすめサーバー比較表</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "ConoHa WING",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
              highlight: "国内最速・確定率94%",
              price: "月687円〜",
              badge: "おすすめ",
            },
            {
              name: "エックスサーバー",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
              highlight: "20年以上の安定実績",
              price: "月990円〜",
              badge: "定番",
            },
            {
              name: "ロリポップ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1AFTYQ+348+5YZ76",
              highlight: "初心者向け低価格",
              price: "月99円〜",
            },
            {
              name: "シンレンタルサーバー",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1F7ASY+5GDG+5ZMCJ",
              highlight: "高速NVMe・KUSANAGI対応",
              price: "月770円〜",
            },
            {
              name: "カラフルボックス",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1E0FLE+42SG+661TT",
              highlight: "柔軟なプラン・アダルトOK",
              price: "月528円〜",
            },
            {
              name: "ヘテムル",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1GZLMA+348+TWTFM",
              highlight: "クリエイター向け大容量",
              price: "月1,100円〜",
            },
            {
              name: "カゴヤ・ジャパン",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1HL182+7YE+674EQ",
              highlight: "老舗ホスティング事業者",
              price: "月額制",
            },
            {
              name: "さくらインターネット",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1DEZZM+D8Y+6R9PT",
              highlight: "国内老舗・安定のインフラ",
              price: "月131円〜",
            },
            {
              name: "ABLENETレンタルサーバー",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1I6GTU+4NIK+BXYE9",
              highlight: "VPSも選べる総合ホスティング",
              price: "月額制",
            },
          ]}
        />
      </section>

      {/* CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          まずはConoHa WINGでブログを始めよう
        </h2>
        <p className="text-sm text-muted mb-5">
          迷ったらConoHa WINGがおすすめ。国内最速クラスの表示速度で、初心者でも最短5分でWordPressブログを開設できます。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            ConoHa WING公式サイトへ
          </a>
          <Link
            href="/guide"
            className="inline-block border border-card-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            他のガイドを見る
          </Link>
        </div>
        <p className="text-xs text-muted mt-4">
          ※ 本記事はアフィリエイトプログラムに参加しています。
        </p>
      </section>
      <GuideRelatedLinks currentSlug="best-rental-servers" />
    </div>
  );
}
