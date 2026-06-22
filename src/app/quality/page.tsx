import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "品質管理・編集方針",
  description:
    "ネットツールボックスの品質管理、公開カタログの選定基準、ツール検証、広告・アフィリエイトの扱い、訂正対応について説明します。",
  alternates: { canonical: `${siteConfig.url}/quality` },
};

const policies = [
  {
    title: "公開カタログの選定",
    body: "仕事、制作、開発、画像、デザイン、セキュリティ確認に使いやすいツールを優先して掲載します。似たページ、季節性の強いページ、サイト主題から遠いページは検索向け露出を抑え、主要ページの品質を優先します。",
  },
  {
    title: "ツールの検証",
    body: "入力例、空欄、長い文字列、形式エラー、スマートフォン表示などを確認します。開発・変換系ツールは、結果をそのまま本番投入せず、利用者側の環境で再検証する前提の補助ツールとして提供します。",
  },
  {
    title: "ブラウザ内処理",
    body: "多くのツールはブラウザ上で処理します。入力内容を保存する機能や外部通信を伴う機能がある場合は、ページ内で明示します。公開端末や共有端末で機密情報を入力しないことも案内します。",
  },
  {
    title: "比較ガイドの扱い",
    body: "比較記事はWebツール、通信、クラウド、制作、個人運営に関係するものを中心に残します。金融、医療、美容、生活サービスなどサイト主題から遠い記事は、審査と品質管理のため公開カタログから外します。",
  },
  {
    title: "広告・PRの扱い",
    body: "広告やアフィリエイトリンクを掲載する場合は、PRであることを明示します。審査期間中はツールページの汎用広告枠と汎用PR導線を抑え、本文とツールの利用価値が主役になるようにしています。",
  },
  {
    title: "訂正対応",
    body: "仕様変更、誤記、不具合、説明不足を確認した場合は、お問い合わせ内容や検証結果をもとに修正します。重要な変更は該当ページ内の説明にも反映します。",
  },
];

export default function QualityPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6" aria-label="パンくずリスト">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <span>品質管理・編集方針</span>
      </nav>

      <header className="mb-10">
        <p className="text-sm font-medium text-primary mb-3">
          運営の透明性
        </p>
        <h1 className="text-3xl font-bold mb-4">品質管理・編集方針</h1>
        <p className="text-muted leading-relaxed">
          {siteConfig.name}は、無料Webツールを安心して使える状態で提供することを目的にしています。
          ページ数を増やすことよりも、利用目的が明確で、動作と説明を確認できるページを前に出す方針です。
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">現在の重点方針</h2>
        <div className="bg-card-bg border border-card-border rounded-lg p-6">
          <ul className="space-y-3 text-sm text-muted leading-relaxed">
            <li>
              <span className="font-semibold text-foreground">1. 主題を絞る:</span>{" "}
              文章、開発、画像、デザイン、セキュリティ、作業効率化に関係するページを中心にします。
            </li>
            <li>
              <span className="font-semibold text-foreground">2. 薄い導線を減らす:</span>{" "}
              重複ページ、テーマ外ガイド、短い比較記事は検索向けの公開カタログから外します。
            </li>
            <li>
              <span className="font-semibold text-foreground">3. 利用前後の判断材料を足す:</span>{" "}
              ツール下部に処理方針、確認ポイント、注意点を追加し、単なるフォームだけのページにしません。
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">運営ポリシー</h2>
        <div className="space-y-4">
          {policies.map((policy) => (
            <article
              key={policy.title}
              className="bg-card-bg border border-card-border rounded-lg p-5"
            >
              <h3 className="font-semibold mb-2">{policy.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {policy.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">関連ページ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/about"
            className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <span className="text-sm font-semibold">運営者情報</span>
            <p className="text-xs text-muted mt-1">サイト目的と運営情報</p>
          </Link>
          <Link
            href="/privacy"
            className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <span className="text-sm font-semibold">プライバシーポリシー</span>
            <p className="text-xs text-muted mt-1">データとCookieの扱い</p>
          </Link>
          <Link
            href="/contact"
            className="block bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <span className="text-sm font-semibold">お問い合わせ</span>
            <p className="text-xs text-muted mt-1">修正依頼・不具合報告</p>
          </Link>
        </div>
      </section>

      <p className="text-xs text-muted">最終更新日: 2026年6月22日</p>
    </div>
  );
}
