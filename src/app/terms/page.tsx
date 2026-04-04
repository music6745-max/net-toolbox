import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "利用規約",
  description: `${siteConfig.name}の利用規約です。ご利用前にご確認ください。`,
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>利用規約</span>
      </nav>

      <h1 className="text-2xl font-bold mb-8">利用規約</h1>

      <div className="prose prose-sm max-w-none text-foreground leading-relaxed space-y-6">
        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">第1条（適用）</h2>
          <p className="text-sm text-muted leading-relaxed">
            本規約は、{siteConfig.name}（以下「当サイト」）が提供するすべてのサービスの利用条件を定めるものです。
            ユーザーは本規約に同意したうえで当サイトをご利用ください。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">第2条（サービスの内容）</h2>
          <p className="text-sm text-muted leading-relaxed">
            当サイトは、各種Webツールを無料で提供するサービスです。
            すべてのツールはブラウザ上で動作し、ユーザーが入力したデータはサーバーに送信されません。
            当サイトは、ユーザーへの事前通知なくサービス内容を変更・追加・廃止することがあります。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">第3条（禁止事項）</h2>
          <div className="text-sm text-muted leading-relaxed">
            <p className="mb-2">ユーザーは以下の行為を行ってはなりません。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>当サイトに対する不正アクセスや過度なアクセス</li>
              <li>当サイトのコンテンツの無断転載・複製</li>
              <li>当サイトの運営を妨害する行為</li>
              <li>その他、当サイトが不適切と判断する行為</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">第4条（免責事項）</h2>
          <p className="text-sm text-muted leading-relaxed">
            当サイトが提供するツールの結果について、その正確性・完全性を保証するものではありません。
            ツールの利用によって生じたいかなる損害についても、当サイトは一切の責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">第5条（著作権）</h2>
          <p className="text-sm text-muted leading-relaxed">
            当サイトに掲載されているコンテンツの著作権は当サイトに帰属します。
            無断での転載・複製・改変を禁止します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">第6条（規約の変更）</h2>
          <p className="text-sm text-muted leading-relaxed">
            当サイトは、必要に応じて本規約を変更することがあります。
            変更後の規約は、当サイトに掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <p className="text-sm text-muted mt-8">制定日: 2026年4月4日</p>
      </div>
    </div>
  );
}
