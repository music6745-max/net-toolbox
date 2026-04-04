import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.name}のプライバシーポリシーです。個人情報の取り扱いについてご確認ください。`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>プライバシーポリシー</span>
      </nav>

      <h1 className="text-2xl font-bold mb-8">プライバシーポリシー</h1>

      <div className="prose prose-sm max-w-none text-foreground leading-relaxed space-y-6">
        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">1. 個人情報の収集について</h2>
          <p className="text-sm text-muted leading-relaxed">
            {siteConfig.name}（以下「当サイト」）では、ユーザーの個人情報を直接収集することはありません。
            当サイトのツールはすべてブラウザ内で動作し、入力されたデータがサーバーに送信されることはありません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">2. アクセス解析ツールについて</h2>
          <p className="text-sm text-muted leading-relaxed">
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用する場合があります。
            このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
            このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            この機能はCookieを無効にすることで収集を拒否することができます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">3. 広告の配信について</h2>
          <p className="text-sm text-muted leading-relaxed">
            当サイトでは、第三者配信の広告サービス（Google AdSense）を利用する場合があります。
            広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
            Cookieを無効にする設定やGoogleアドセンスに関する詳細は、
            <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">広告 - ポリシーと規約 - Google</a>
            をご確認ください。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">4. Cookieについて</h2>
          <p className="text-sm text-muted leading-relaxed">
            当サイトでは、ユーザー体験の向上やアクセス解析のためにCookieを使用する場合があります。
            ブラウザの設定によりCookieの受け取りを拒否することができますが、
            その場合一部の機能が制限される可能性があります。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">5. 免責事項</h2>
          <p className="text-sm text-muted leading-relaxed">
            当サイトのツールの利用によって生じたいかなる損害についても、当サイトは一切の責任を負いません。
            ツールの結果はあくまで参考としてご利用ください。
            当サイトからリンクやバナーなどによって他のサイトに移動された場合、
            移動先サイトで提供される情報やサービスについて当サイトは一切の責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mt-8 mb-3">6. プライバシーポリシーの変更について</h2>
          <p className="text-sm text-muted leading-relaxed">
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、
            本ポリシーの内容を適宜見直しその改善に努めます。
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </p>
        </section>

        <p className="text-sm text-muted mt-8">制定日: 2026年4月4日</p>
      </div>
    </div>
  );
}
