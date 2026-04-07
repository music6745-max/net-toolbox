import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年】VPNおすすめ比較｜安全なインターネット利用に",
  description:
    "2026年最新のVPNサービスを徹底比較。NordVPN・ExpressVPN・MillenVPNなどおすすめ5社の料金・速度・セキュリティ機能を解説。公共WiFi保護や海外利用に最適なVPNが見つかります。",
  keywords: [
    "VPN",
    "おすすめ",
    "比較",
    "NordVPN",
    "ExpressVPN",
    "MillenVPN",
    "セキュリティ",
    "公共WiFi",
    "2026年",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/best-vpn-services`,
  },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年】VPNおすすめ比較｜安全なインターネット利用に",
    description:
      "2026年最新のVPNサービスを徹底比較。NordVPN・ExpressVPN・MillenVPNなどおすすめ5社の料金・速度・セキュリティ機能を解説。",
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
    mainEntityOfPage: `${siteConfig.url}/guide/best-vpn-services`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const vpnList = [
  {
    name: "NordVPN",
    price: "月額530円〜（2年プラン）",
    servers: "111カ国 6,400台以上",
    speed: "非常に高速（NordLynxプロトコル）",
    features: [
      "業界最高水準のセキュリティ",
      "ノーログポリシー（第三者監査済み）",
      "同時接続10台",
      "脅威対策機能（広告・マルウェアブロック）",
      "30日間返金保証",
    ],
    useCases: [
      "公共WiFiでの安全な通信",
      "海外から日本の動画サービスを視聴",
      "オンラインプライバシーの保護",
    ],
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+60OXD",
    badge: "総合No.1",
    color: "blue",
  },
  {
    name: "ExpressVPN",
    price: "月額750円〜（2年プラン）",
    servers: "105カ国 3,000台以上",
    speed: "業界最速クラス（Lightwayプロトコル）",
    features: [
      "独自プロトコルLightwayで超高速",
      "使いやすいアプリデザイン",
      "同時接続8台",
      "ノーログポリシー（TrustedServer技術）",
      "30日間返金保証",
    ],
    useCases: [
      "動画ストリーミングの高速視聴",
      "中国・制限の厳しい国からの接続",
      "日常的なVPN利用",
    ],
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3WIBJM+5JSS+5YRHE",
    badge: "速度No.1",
    color: "green",
  },
  {
    name: "MillenVPN",
    price: "月額396円〜（2年プラン）",
    servers: "72カ国 1,300台以上",
    speed: "高速（WireGuard対応）",
    features: [
      "日本企業が運営（アズポケット株式会社）",
      "日本語サポートが充実",
      "同時接続10台",
      "ノーログポリシー",
      "30日間返金保証",
    ],
    useCases: [
      "日本語でのサポートを重視",
      "海外から日本のサービスにアクセス",
      "コスパ重視のVPN選び",
    ],
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6",
    badge: "国産VPN",
    color: "orange",
  },
  {
    name: "Surfshark",
    price: "月額328円〜（2年プラン）",
    servers: "100カ国 3,200台以上",
    speed: "高速（WireGuard対応）",
    features: [
      "デバイス接続台数無制限",
      "CleanWeb機能（広告・マルウェアブロック）",
      "MultiHop（二重VPN）",
      "ノーログポリシー",
      "30日間返金保証",
    ],
    useCases: [
      "家族や複数デバイスで共有",
      "とにかく安く使いたい",
      "広告ブロックも一緒に",
    ],
    url: "",
    badge: "台数無制限",
    color: "purple",
  },
  {
    name: "セカイVPN",
    price: "月額1,100円",
    servers: "10カ国",
    speed: "標準的",
    features: [
      "日本のインターリンク社が運営",
      "最大2ヶ月無料体験",
      "同時接続3台",
      "日本語サポート完全対応",
      "シンプルな料金体系",
    ],
    useCases: [
      "海外在住で日本のサイトにアクセスしたい",
      "日本語サポートが絶対条件",
      "短期間だけ使いたい",
    ],
    url: "",
    badge: "無料体験あり",
    color: "red",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  orange:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

export default function BestVpnServicesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "VPNおすすめ比較",
            url: `${siteConfig.url}/guide/best-vpn-services`,
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
        <span>VPNおすすめ比較</span>
      </nav>

      {/* PR Disclaimer */}
      <div className="text-xs text-muted mb-4 bg-card-bg border border-card-border rounded-lg px-3 py-2 inline-block">
        PR・広告を含みます
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">
            セキュリティ
          </span>
          <span className="text-xs text-muted">8分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年】VPNおすすめ比較｜安全なインターネット利用に
        </h1>
        <p className="text-muted leading-relaxed">
          カフェやホテルの公共WiFiを安全に使いたい、海外から日本の動画を見たい、オンラインのプライバシーを守りたい。そんなときに必要なのがVPNです。この記事では、2026年おすすめのVPN5社を料金・速度・セキュリティで徹底比較します。
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#what-is-vpn" className="text-primary hover:underline">
              1. VPNとは？なぜ必要？
            </a>
          </li>
          <li>
            <a href="#comparison" className="text-primary hover:underline">
              2. おすすめVPN5選
            </a>
          </li>
          <li>
            <a href="#price-table" className="text-primary hover:underline">
              3. 料金比較表
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 利用シーン別おすすめVPN
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
      <section id="what-is-vpn" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. VPNとは？なぜ必要？</h2>
        <p className="text-muted leading-relaxed mb-4">
          VPN（Virtual Private
          Network）は、インターネット通信を暗号化して安全にするサービスです。あなたのデータを第三者から守り、プライバシーを保護します。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128274;",
              title: "公共WiFiの保護",
              desc: "カフェ・空港・ホテルなどの公共WiFiは暗号化されていないことが多く、データを盗まれるリスクがあります。VPNを使えば通信が暗号化され安全です。",
            },
            {
              icon: "&#127758;",
              title: "地域制限の解除",
              desc: "海外から日本の動画配信サービスにアクセスしたり、逆に日本から海外のコンテンツにアクセスする際にVPNが役立ちます。",
            },
            {
              icon: "&#128373;",
              title: "プライバシー保護",
              desc: "IPアドレスを隠してオンラインでの匿名性を確保。広告トラッキングやデータ収集からプライバシーを守ります。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <h3 className="font-bold text-sm mb-1">
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />{" "}
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 - VPN details */}
      <section id="comparison" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">2. おすすめVPN5選</h2>

        <div className="space-y-8">
          {vpnList.map((vpn, index) => (
            <div
              key={vpn.name}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}位
                </span>
                <h3 className="text-xl font-bold">{vpn.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[vpn.color]}`}
                >
                  {vpn.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">月額料金</span>
                  <span className="font-bold">{vpn.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">サーバー数</span>
                  <span className="font-bold">{vpn.servers}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">速度</span>
                  <span className="font-bold">{vpn.speed}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2">主な特徴</h4>
                <ul className="space-y-1">
                  {vpn.features.map((f) => (
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

              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2">おすすめの利用シーン</h4>
                <div className="flex flex-wrap gap-2">
                  {vpn.useCases.map((uc) => (
                    <span
                      key={uc}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </div>

              {vpn.url && (
                <div className="text-center">
                  <a
                    href={vpn.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                  >
                    {vpn.name}の公式サイトを見る
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 - Price table */}
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
                  月額（2年プラン）
                </th>
                <th className="border border-card-border p-3 text-left">
                  同時接続
                </th>
                <th className="border border-card-border p-3 text-left">
                  返金保証
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "NordVPN",
                  price: "530円〜",
                  devices: "10台",
                  refund: "30日間",
                },
                {
                  name: "ExpressVPN",
                  price: "750円〜",
                  devices: "8台",
                  refund: "30日間",
                },
                {
                  name: "MillenVPN",
                  price: "396円〜",
                  devices: "10台",
                  refund: "30日間",
                },
                {
                  name: "Surfshark",
                  price: "328円〜",
                  devices: "無制限",
                  refund: "30日間",
                },
                {
                  name: "セカイVPN",
                  price: "1,100円",
                  devices: "3台",
                  refund: "最大2ヶ月無料",
                },
              ].map((row) => (
                <tr key={row.name}>
                  <td className="border border-card-border p-3 font-medium">
                    {row.name}
                  </td>
                  <td className="border border-card-border p-3">
                    {row.price}
                  </td>
                  <td className="border border-card-border p-3">
                    {row.devices}
                  </td>
                  <td className="border border-card-border p-3">
                    {row.refund}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 料金はキャンペーンにより変動する場合があります。
        </p>
      </section>

      {/* Section 4 - Use case recommendations */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 利用シーン別おすすめVPN
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "カフェ・ホテルの公共WiFiを安全に使いたい",
              vpn: "NordVPN",
              reason:
                "業界最高水準の暗号化技術とノーログポリシーで、公共WiFiでも安心してインターネットを使えます。脅威対策機能で悪質なサイトもブロック。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+60OXD",
            },
            {
              scene: "海外から日本の動画配信サービスを見たい",
              vpn: "MillenVPN",
              reason:
                "日本企業が運営しているため、日本のサービスとの互換性が高いです。日本語サポートも充実しており、設定で困っても安心。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6",
            },
            {
              scene: "家族みんなで使いたい",
              vpn: "Surfshark",
              reason:
                "デバイス接続台数が無制限なので、家族全員のスマホ・PC・タブレットで利用できます。月額328円〜とコスパも抜群。",
              url: "",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.vpn}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {item.reason}
              </p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {item.vpn}を詳しく見る
                </a>
              )}
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
              q: "VPNは違法ですか？",
              a: "日本でのVPN利用は完全に合法です。ただし、VPNを使って違法行為を行うことは当然違法です。",
            },
            {
              q: "無料VPNでも大丈夫？",
              a: "無料VPNはデータ量制限や速度制限があるだけでなく、ユーザーデータを広告会社に販売しているケースも報告されています。セキュリティ目的なら有料VPNをおすすめします。",
            },
            {
              q: "VPNを使うと速度は落ちる？",
              a: "暗号化処理のため若干の速度低下はありますが、NordVPNやExpressVPNなどの高品質VPNなら体感できないレベルです。",
            },
            {
              q: "スマホでもVPNは使える？",
              a: "はい、主要なVPNサービスはiOS・Android両対応のアプリを提供しています。ワンタップで接続できます。",
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

      {/* VPN Comparison Table CTA */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">VPNサービス比較表</h2>
        <p className="text-sm text-muted mb-4">
          おすすめ3社の特徴と料金をまとめました。すべて30日間返金保証付きです。
        </p>
        <ComparisonTableCTA
          services={[
            {
              name: "MillenVPN",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6",
              highlight: "確定率99%・国産VPN",
              price: "月396円〜",
              badge: "高確定率",
            },
            {
              name: "NordVPN",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+60OXD",
              highlight: "世界シェアNo.1",
              price: "月560円〜",
              badge: "人気No.1",
            },
            {
              name: "ExpressVPN",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+3WIBJM+5JSS+5YRHE",
              highlight: "最速通信速度",
              price: "月899円〜",
            },
          ]}
        />
      </section>

      {/* Related tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          セキュリティツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          パスワード生成やハッシュ計算など、セキュリティに役立つ無料ツールも用意しています。
        </p>
        <Link
          href="/tools/password-generator"
          className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          パスワード生成ツールを使う
        </Link>
      </section>

      {/* CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          NordVPNでオンラインセキュリティを強化しよう
        </h2>
        <p className="text-sm text-muted mb-5">
          世界で最も信頼されるVPNサービス。30日間の返金保証があるので、まずは試してみてください。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+60OXD"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            NordVPN公式サイトへ
          </a>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block border border-card-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            MillenVPN（国産VPN）を見る
          </a>
        </div>
        <p className="text-xs text-muted mt-4">
          ※ 本記事はアフィリエイトプログラムに参加しています。
        </p>
      </section>
    </div>
  );
}
