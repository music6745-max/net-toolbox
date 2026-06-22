import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "運営者情報",
  description: `${siteConfig.name}の運営目的、公開しているツール、広告・PR表記、問い合わせ窓口について説明します。`,
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6" aria-label="パンくずリスト">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <span>運営者情報</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">運営者情報</h1>
        <p className="text-muted leading-relaxed">
          {siteConfig.name}は、文章作成、開発、画像調整、デザイン確認、セキュリティ確認など、
          ブラウザだけで完結する小さな作業を支援する無料Webツール集です。
          大量のページを並べるよりも、利用目的が明確な主要ツールと、その使い分けが分かるガイドを整備する方針で運営しています。
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">サイト概要</h2>
        <div className="bg-card-bg border border-card-border rounded-lg p-6">
          <dl className="space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-semibold sm:w-32 text-muted">サイト名</dt>
              <dd>{siteConfig.name}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-semibold sm:w-32 text-muted">URL</dt>
              <dd className="break-all">{siteConfig.url}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-semibold sm:w-32 text-muted">運営内容</dt>
              <dd>無料Webツールの提供、ツール活用ガイド、関連サービス比較</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-semibold sm:w-32 text-muted">問い合わせ</dt>
              <dd>
                <Link href="/contact" className="text-primary hover:underline">
                  お問い合わせページ
                </Link>
                から受け付けています。
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">提供している内容</h2>
        <div className="space-y-4">
          {[
            {
              title: "無料Webツール",
              body: "文字数カウント、JSON整形、QRコード作成、パスワード生成、画像圧縮、正規表現テストなど、日々の作業で使うツールを提供します。",
            },
            {
              title: "ツール活用ガイド",
              body: "開発、文章作成、リモートワーク、個人運営など、複数ツールを組み合わせる場面の使い分けを整理します。",
            },
            {
              title: "関連サービス比較",
              body: "通信、クラウド、制作、個人運営に関係するサービスを中心に、公式情報を確認しながら比較します。",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="bg-card-bg border border-card-border rounded-lg p-5"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">広告・アフィリエイトについて</h2>
        <div className="bg-card-bg border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted leading-relaxed mb-3">
            当サイトには広告、アフィリエイトリンク、PRリンクを掲載する場合があります。
            掲載時はPRまたは広告であることを明示し、リンク先の商品・サービスの契約条件は各公式サイトで確認できるようにします。
          </p>
          <p className="text-sm text-muted leading-relaxed">
            審査期間中は、ツールページの汎用PR導線を抑え、ツール本文と利用上の注意点を優先して表示します。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">関連ページ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/quality" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary/30 hover:shadow-sm transition-all">
            <span className="text-sm font-semibold">品質管理・編集方針</span>
            <p className="text-xs text-muted mt-1">公開基準と更新方針</p>
          </Link>
          <Link href="/privacy" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary/30 hover:shadow-sm transition-all">
            <span className="text-sm font-semibold">プライバシーポリシー</span>
            <p className="text-xs text-muted mt-1">データの取り扱い</p>
          </Link>
          <Link href="/contact" className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary/30 hover:shadow-sm transition-all">
            <span className="text-sm font-semibold">お問い合わせ</span>
            <p className="text-xs text-muted mt-1">修正依頼・不具合報告</p>
          </Link>
        </div>
      </section>

      <p className="text-xs text-muted">最終更新日: 2026年6月22日</p>
    </div>
  );
}
