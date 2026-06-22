import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "編集方針",
  description:
    "ネットツールボックスの編集方針、確認手順、外部情報の扱い、訂正対応についてまとめたページです。",
  alternates: { canonical: `${siteConfig.url}/author` },
};

function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    description:
      "無料Webツールと作業ガイドを提供するネットツールボックス。",
    sameAs: [siteConfig.url],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const reviewSteps = [
  {
    title: "公式情報を確認",
    body: "料金、仕様、制限、サポート範囲などは、サービス提供元の公式ページを優先して確認します。",
  },
  {
    title: "用途に分けて説明",
    body: "単純な順位付けではなく、初心者、個人運営、制作、開発、チーム利用などの用途別に向き不向きを整理します。",
  },
  {
    title: "注意点も書く",
    body: "無料枠の制限、解約条件、データの扱い、セキュリティ上の注意など、選ぶ前に確認すべき点を本文に含めます。",
  },
  {
    title: "古い情報を見直す",
    body: "仕様変更や料金改定が多いテーマは、確認日と更新日を意識して見直します。",
  },
];

export default function AuthorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <OrganizationJsonLd />

      <nav className="text-sm text-muted mb-6" aria-label="パンくずリスト">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <span>編集方針</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">編集方針</h1>
        <p className="text-muted leading-relaxed">
          {siteConfig.name}では、ツールの動作、使い分け、注意点を確認しやすい形で掲載します。
          特定の資格や監修を受けた専門メディアではないため、医療・投資・法律などの専門判断が必要な内容は扱いを限定し、
          公式情報と利用者自身の確認を前提に案内します。
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">確認手順</h2>
        <div className="space-y-4">
          {reviewSteps.map((step, index) => (
            <article
              key={step.title}
              className="bg-card-bg border border-card-border rounded-lg p-5"
            >
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">専門性が必要なテーマの扱い</h2>
        <div className="bg-card-bg border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted leading-relaxed mb-3">
            当サイトは無料Webツールと作業補助を中心に運営しています。
            金融、医療、法律、税務など、個別判断が必要なテーマは、専門家の助言や公的機関・公式サービスの情報を優先してください。
          </p>
          <p className="text-sm text-muted leading-relaxed">
            比較ガイドを掲載する場合も、契約や購入を促すことだけを目的にせず、利用前に確認すべき条件、制限、向いていないケースを併記します。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">連絡と訂正</h2>
        <div className="bg-card-bg border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted leading-relaxed">
            誤記、古い情報、ツールの不具合、説明不足を見つけた場合は、
            <Link href="/contact" className="text-primary hover:underline">
              お問い合わせページ
            </Link>
            からご連絡ください。確認できた内容から順に修正します。
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">関連ページ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/about" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary/30 hover:shadow-sm transition-all">
            <span className="text-sm font-semibold">運営者情報</span>
          </Link>
          <Link href="/quality" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary/30 hover:shadow-sm transition-all">
            <span className="text-sm font-semibold">品質管理</span>
          </Link>
          <Link href="/privacy" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary/30 hover:shadow-sm transition-all">
            <span className="text-sm font-semibold">プライバシーポリシー</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
