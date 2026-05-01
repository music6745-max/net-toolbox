import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${siteConfig.name}へのお問い合わせページです。`,
};

export default function ContactPage() {
  const contactEmail = "contact@net-toolbox.jp";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>お問い合わせ</span>
      </nav>

      <h1 className="text-2xl font-bold mb-8">お問い合わせ</h1>

      <div className="bg-card-bg border border-card-border rounded-xl p-8">
        <p className="text-sm text-muted leading-relaxed mb-6">
          {siteConfig.name}に関するお問い合わせは、下記のメールアドレスまでお願いいたします。
          ツールの不具合報告、機能のご要望、掲載内容の修正依頼などがございましたらお気軽にご連絡ください。
        </p>

        <div className="bg-background rounded-lg p-6 text-center">
          <a
            href={`mailto:${contactEmail}`}
            className="inline-block mt-4 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            {contactEmail}
          </a>
          <p className="text-xs text-muted mt-4">
            技術的な不具合報告は、GitHub Issueからも受け付けています。
          </p>
          <a
            href="https://github.com/music6745-max/net-toolbox/issues"
            className="inline-block mt-3 text-sm text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Issueで報告
          </a>
        </div>

        <div className="mt-8">
          <h2 className="text-base font-semibold mb-3">よくある質問</h2>
          <div className="space-y-4 text-sm text-muted">
            <div>
              <p className="font-medium text-foreground">Q. ツールの利用は無料ですか？</p>
              <p>A. はい、すべてのツールは無料でご利用いただけます。</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Q. 入力したデータはサーバーに送信されますか？</p>
              <p>A. いいえ、すべての処理はブラウザ内で完結します。データが外部に送信されることはありません。</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Q. 会員登録は必要ですか？</p>
              <p>A. いいえ、会員登録やログインは不要です。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
