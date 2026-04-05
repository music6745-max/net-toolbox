import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const guides = [
  {
    slug: "rental-server-comparison",
    title:
      "【2026年最新】レンタルサーバー比較おすすめ5選｜料金・速度・WordPress対応を徹底解説",
    description:
      "ConoHa WING・エックスサーバー・ロリポップ・mixhost・シンレンタルサーバーの料金・速度・WordPress対応を徹底比較。初心者にも最適なサーバーが見つかります。",
    category: "比較",
    readTime: "15分",
    icon: "🖥️",
  },
  {
    slug: "best-rental-servers",
    title: "【2026年】レンタルサーバーおすすめ比較5選｜初心者向け",
    description:
      "ConoHa WING・エックスサーバー・ロリポップなど初心者向けにおすすめ5社の料金・速度・WordPress対応を徹底比較します。",
    category: "比較",
    readTime: "10分",
    icon: "🖥️",
  },
  {
    slug: "tax-software-comparison",
    title: "【2026年】確定申告ソフト比較｜フリーランス・副業向けおすすめ",
    description:
      "freee・弥生・マネーフォワードの料金プラン・特徴・メリットデメリットを解説。副業やフリーランスの確定申告に最適なソフトが見つかります。",
    category: "副業・税金",
    readTime: "8分",
    icon: "📊",
  },
  {
    slug: "accounting-software-comparison",
    title: "【2026年最新】確定申告ソフト比較おすすめ3選｜freee・弥生・マネーフォワード徹底解説",
    description:
      "freee・弥生会計・マネーフォワード クラウドの料金・機能・使いやすさ・e-Tax対応を徹底比較。個人事業主・フリーランスの確定申告に最適なソフトが見つかります。",
    category: "副業・税金",
    readTime: "15分",
    icon: "🧾",
  },
  {
    slug: "vpn-comparison",
    title: "【2026年最新】VPN比較おすすめ3選｜料金・速度・安全性を徹底解説",
    description:
      "NordVPN・ExpressVPN・MillenVPNの料金・速度・セキュリティを徹底比較。無料VPNとの違いや選び方のポイントも紹介。",
    category: "比較",
    readTime: "12分",
    icon: "🔐",
  },
  {
    slug: "sim-comparison",
    title: "【2026年最新】格安SIM比較おすすめ6選｜料金・速度・通話プランを徹底解説",
    description:
      "楽天モバイル・ahamo・LINEMO・povo・UQモバイル・ワイモバイルの料金・速度・通話プランを徹底比較。乗り換えのポイントも紹介。",
    category: "比較",
    readTime: "15分",
    icon: "📱",
  },
  {
    slug: "best-vpn-services",
    title: "【2026年】VPNおすすめ比較｜安全なインターネット利用に",
    description:
      "NordVPN・ExpressVPN・MillenVPNなどおすすめ5社の料金・速度・セキュリティ機能を比較。公共WiFi保護や海外利用に最適なVPNが見つかります。",
    category: "セキュリティ",
    readTime: "8分",
    icon: "🛡️",
  },
  {
    slug: "side-business-tools",
    title: "副業に必要なWebツール完全ガイド｜無料で始める",
    description:
      "ブログ開設のレンタルサーバー、確定申告ソフト、VPN、画像作成、文章作成まで。副業に必要なWebツールをカテゴリ別にまとめました。",
    category: "副業",
    readTime: "12分",
    icon: "💰",
  },
  {
    slug: "qr-code-howto",
    title: "【完全ガイド】QRコードの作り方と活用術",
    description:
      "QRコードの作成方法から、名刺・URL・WiFi共有・決済など実践的な活用術まで徹底解説。無料ツールを使った簡単な作り方も紹介します。",
    category: "実践ガイド",
    readTime: "5分",
    icon: "📱",
  },
  {
    slug: "password-security",
    title: "安全なパスワードの作り方｜セキュリティ対策ガイド",
    description:
      "パスワードの安全性を高める方法を解説。よくある危険なパスワード、強力なパスワードの条件、パスワードマネージャーの活用法まで。",
    category: "セキュリティ",
    readTime: "6分",
    icon: "🔒",
  },
  {
    slug: "web-tools-for-work",
    title: "仕事効率化に使える無料Webツール15選",
    description:
      "テキスト処理、データ変換、デザイン補助など、業務効率を上げる無料Webツール15個を厳選紹介。登録不要ですぐに使えます。",
    category: "仕事術",
    readTime: "8分",
    icon: "💼",
  },
  {
    slug: "developer-tools-guide",
    title: "Web開発者向け便利ツール活用ガイド",
    description:
      "JSON整形、Base64変換、正規表現テスト、ハッシュ生成など、Web開発で役立つオンラインツールの使い方を詳しく解説。",
    category: "開発",
    readTime: "7分",
    icon: "💻",
  },
  {
    slug: "remote-work-tools",
    title: "リモートワークに必須の無料ツール10選｜在宅勤務を効率化",
    description:
      "ポモドーロタイマー・世界時計・タイムゾーン変換・パスワード生成など、リモートワーク・在宅勤務に役立つ無料ツール10選を厳選紹介。",
    category: "リモートワーク",
    readTime: "7分",
    icon: "🏠",
  },
  {
    slug: "job-site-comparison",
    title: "【2026年最新】転職サイト比較おすすめ5選｜求人数・サポート・年齢層別に徹底解説",
    description:
      "doda・リクルートエージェント・マイナビ転職・ビズリーチ・エン転職の求人数・サポート体制・対象年齢層を徹底比較。20代・30代・40代の年代別おすすめも紹介。",
    category: "比較",
    readTime: "15分",
    icon: "💼",
  },
];

const categoryColors: Record<string, string> = {
  実践ガイド: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  セキュリティ: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  仕事術: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  開発: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  比較: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "副業・税金": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  副業: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  リモートワーク: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
};

export const metadata: Metadata = {
  title: "ガイド・使い方記事一覧",
  description:
    "Webツールの使い方、セキュリティ対策、仕事効率化など、役立つガイド記事をまとめています。初心者から上級者まで幅広く活用できます。",
  alternates: {
    canonical: `${siteConfig.url}/guide`,
  },
};

export default function GuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <span>ガイド</span>
      </nav>

      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">ガイド・使い方記事</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Webツールの活用方法やセキュリティ対策など、実践的なガイド記事をお届けします。
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guide/${guide.slug}`}
            className="block bg-card-bg border border-card-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-200 group"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl flex-shrink-0">{guide.icon}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[guide.category] || "bg-gray-100 text-gray-700"}`}
                  >
                    {guide.category}
                  </span>
                  <span className="text-xs text-muted">
                    {guide.readTime}で読める
                  </span>
                </div>
                <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {guide.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed line-clamp-2">
                  {guide.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* About section */}
      <section className="mt-12 bg-card-bg border border-card-border rounded-xl p-8 text-center">
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
