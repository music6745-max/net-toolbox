import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

export const metadata: Metadata = {
  title: "安全なパスワードの作り方おすすめ7選【2026年最新】徹底解説｜セキュリティ対策",
  description:
    "アカウント乗っ取りや情報漏洩に不安はありませんか。安全なパスワードの作り方・危険な例・1Password等のパスワードマネージャー活用法まで、最新のセキュリティ対策を徹底解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/password-security`,
  },
};

const faqItems = [
  {
    question: "パスワードはどのくらいの頻度で変更すべきですか？",
    answer:
      "現在のセキュリティの考え方では、定期的な変更よりも強力なパスワードを設定し使い回さないことが重要です。ただし、情報漏洩が発生した場合は速やかに変更してください。",
  },
  {
    question: "パスワードマネージャーは安全ですか？",
    answer:
      "信頼性の高いパスワードマネージャーは暗号化技術で保護されており、同じパスワードを使い回すよりもはるかに安全です。マスターパスワードだけは強力なものを設定しましょう。",
  },
  {
    question: "二要素認証（2FA）は必ず設定すべきですか？",
    answer:
      "はい。特にメール、SNS、銀行口座など重要なアカウントには必ず設定してください。パスワードが漏洩しても、二要素認証があれば不正アクセスを防げます。",
  },
  {
    question: "ランダムなパスワードを覚えられません。どうすればいいですか？",
    answer:
      "パスワードマネージャーを使えばすべてのパスワードを安全に管理でき、覚える必要があるのはマスターパスワード1つだけです。また、パスフレーズ方式なら覚えやすく安全なパスワードを作れます。",
  },
];

export default function PasswordSecurityPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "パスワードセキュリティ",
            url: `${siteConfig.url}/guide/password-security`,
          },
        ]}
      />
      <ArticleJsonLd headline="安全なパスワードの作り方おすすめ7選【2026年最新】徹底解説｜セキュリティ対策" description="アカウント乗っ取りや情報漏洩に不安はありませんか。安全なパスワードの作り方・危険な例・1Password等のパスワードマネージャー活用法まで、最新のセキュリティ対策を徹底解説します。" url={`${siteConfig.url}/guide/password-security`} />
      <FAQJsonLd items={faqItems} />

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
        <span>パスワードセキュリティ</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">
            セキュリティ
          </span>
          <span className="text-xs text-muted">6分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          安全なパスワードの作り方｜セキュリティ対策ガイド
        </h1>
        <p className="text-muted leading-relaxed">
          インターネットを安全に利用するために最も重要なのがパスワードの管理です。この記事では、強力なパスワードの作り方から、パスワードマネージャーの活用法まで詳しく解説します。
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-important" className="text-primary hover:underline">
              1. なぜパスワードの安全性が重要なのか
            </a>
          </li>
          <li>
            <a href="#common-mistakes" className="text-primary hover:underline">
              2. よくある危険なパスワードの特徴
            </a>
          </li>
          <li>
            <a href="#strong-password" className="text-primary hover:underline">
              3. 強力なパスワードの条件
            </a>
          </li>
          <li>
            <a href="#creation-methods" className="text-primary hover:underline">
              4. 安全なパスワードの作り方3選
            </a>
          </li>
          <li>
            <a href="#password-manager" className="text-primary hover:underline">
              5. パスワードマネージャーの活用
            </a>
          </li>
          <li>
            <a href="#extra-security" className="text-primary hover:underline">
              6. さらにセキュリティを高める方法
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              7. よくある質問
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 */}
      <section id="why-important" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. なぜパスワードの安全性が重要なのか
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          サイバー攻撃の被害は年々増加しており、その多くがパスワードの脆弱性を突いたものです。一度アカウントが乗っ取られると、個人情報の流出、金銭的被害、なりすまし被害など深刻な問題につながります。
        </p>
        <div className="bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
          <p className="text-sm font-medium mb-2">こんな被害が起きています</p>
          <ul className="text-sm text-muted space-y-1">
            <li>
              ・ メールアカウントの乗っ取りによるフィッシング詐欺の踏み台にされる
            </li>
            <li>
              ・ SNSアカウントの不正利用で友人・知人に被害が拡大する
            </li>
            <li>
              ・ ネットバンキングの不正送金で金銭的な損害を受ける
            </li>
            <li>
              ・ 個人情報が流出し、闇市場で売買される
            </li>
          </ul>
        </div>
        <p className="text-muted leading-relaxed">
          これらの被害を防ぐ第一歩が、安全なパスワードを設定することです。パスワードはオンラインセキュリティの最も基本的な防御手段です。
        </p>
      </section>

      {/* Section 2 */}
      <section id="common-mistakes" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. よくある危険なパスワードの特徴
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          以下のようなパスワードは非常に危険です。世界中のハッカーが使う辞書攻撃やブルートフォース攻撃で数秒から数分で突破されてしまいます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "連続した数字・文字",
              example: "123456、abcdef、qwerty",
              risk: "辞書攻撃の最初の候補",
            },
            {
              title: "個人情報に基づくもの",
              example: "名前+誕生日、電話番号",
              risk: "SNSから推測可能",
            },
            {
              title: "短すぎるパスワード",
              example: "8文字未満のもの",
              risk: "総当たりで短時間で突破",
            },
            {
              title: "使い回しパスワード",
              example: "全サイトで同じパスワード",
              risk: "1つ漏洩すると全滅",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted mb-1">例: {item.example}</p>
              <p className="text-xs text-red-500 dark:text-red-400">
                危険: {item.risk}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section id="strong-password" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. 強力なパスワードの条件</h2>
        <p className="text-muted leading-relaxed mb-4">
          セキュリティの専門家が推奨する強力なパスワードには、以下の条件があります。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "✅",
              text: "12文字以上の長さ（16文字以上が理想）",
            },
            {
              icon: "✅",
              text: "大文字・小文字・数字・記号を組み合わせる",
            },
            {
              icon: "✅",
              text: "辞書に載っている単語をそのまま使わない",
            },
            {
              icon: "✅",
              text: "個人情報（名前、誕生日など）を含めない",
            },
            {
              icon: "✅",
              text: "サービスごとに異なるパスワードを使う",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0">{item.icon}</span>
              <p className="text-muted">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm font-medium mb-1">パスワード強度の目安</p>
          <p className="text-sm text-muted">
            8文字の英数字パスワードは数時間で解読される可能性がありますが、16文字のランダムな英数字+記号パスワードの解読には数百年以上かかると言われています。長さは最も効果的な防御です。
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="creation-methods" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 安全なパスワードの作り方3選
        </h2>

        <div className="space-y-6">
          <div className="bg-card-bg border border-card-border rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">
              方法1: パスワード生成ツールを使う（最も推奨）
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              ランダムなパスワードを自動生成するのが最も安全な方法です。ネットツールボックスのパスワード生成ツールでは、文字数や使用文字種を指定して、暗号学的に安全なパスワードを生成できます。
            </p>
            <Link
              href="/tools/password-generator"
              className="text-sm text-primary hover:underline"
            >
              パスワード生成ツールを使う →
            </Link>
          </div>

          <div className="bg-card-bg border border-card-border rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">
              方法2: パスフレーズ方式
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              複数の無関係な単語をつなげてパスワードを作る方法です。覚えやすさと安全性のバランスが取れています。4つ以上の単語を使い、間に数字や記号を挟むとより安全です。
            </p>
            <div className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 rounded-lg p-3">
              <p className="text-xs text-muted">
                例: 「雲-自転車!42-サボテン-月曜日」のように、無関係な単語を記号や数字で区切る
              </p>
            </div>
          </div>

          <div className="bg-card-bg border border-card-border rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">
              方法3: 基本パターン+サービス名方式
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              覚えやすい基本フレーズに、サービス名の一部を組み合わせる方法です。完全なランダムではないため安全性は劣りますが、使い回しを避ける方法としては有効です。
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
              <p className="text-xs text-muted">
                注意: この方法は他の方法より安全性が低いため、重要なアカウントには方法1か方法2を推奨します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="password-manager" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. パスワードマネージャーの活用
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          すべてのサービスで異なる複雑なパスワードを使うのは、人間の記憶力だけでは限界があります。そこでパスワードマネージャーの出番です。
        </p>

        <div className="space-y-3">
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <h3 className="font-bold mb-2">パスワードマネージャーの利点</h3>
            <ul className="text-sm text-muted space-y-2">
              <li>
                ・ サービスごとに異なるランダムパスワードを安全に管理できる
              </li>
              <li>
                ・ マスターパスワード1つだけ覚えれば、全パスワードにアクセス可能
              </li>
              <li>
                ・ ブラウザ拡張機能で自動入力できるため、入力の手間が省ける
              </li>
              <li>
                ・ パスワードの漏洩チェック機能があり、危険なパスワードを特定できる
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm font-medium mb-1">代表的なパスワードマネージャー</p>
          <p className="text-sm text-muted">
            1Password、Bitwarden（無料プランあり）、Apple
            キーチェーン、Google パスワードマネージャーなどが広く利用されています。自分の環境に合ったものを選びましょう。
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="extra-security" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. さらにセキュリティを高める方法
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "二要素認証（2FA）を有効にする",
              desc: "パスワードに加えて、スマホアプリやSMSでの認証を設定しましょう。万が一パスワードが漏洩しても、二要素認証があれば不正アクセスを防げます。",
            },
            {
              title: "漏洩チェックを定期的に行う",
              desc: "Have I Been Pwnedなどのサービスで、自分のメールアドレスやパスワードが過去の情報漏洩に含まれていないか確認しましょう。",
            },
            {
              title: "不審なメール・リンクに注意する",
              desc: "フィッシング詐欺は巧妙化しています。正規サービスを装ったメールやリンクでパスワードを入力させようとする手口に注意してください。",
            },
            {
              title: "ブラウザの自動入力を適切に管理する",
              desc: "ブラウザの自動入力機能は便利ですが、共有PCでは無効にしましょう。専用のパスワードマネージャーの方がセキュリティが高く管理もしやすいです。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">
                A. {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliate CTA */}
      <div className="space-y-6 my-8">
        <h3 className="text-xl font-bold text-center">セキュリティ強化におすすめのVPN</h3>
        <AffiliateCTA serviceName="MillenVPN" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6" badge="国産No.1" description="確定率99%・日本語サポート充実" color="blue" />
        <AffiliateCTA serviceName="NordVPN" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+3U4L4I+3YFI+60OXD" badge="世界最大手" description="高速通信・5,000+サーバー" color="purple" />
        <AffiliateCTA serviceName="ExpressVPN" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+3WIBJM+5JSS+5YRHE" badge="高速" description="業界最速クラスの通信速度" color="green" />
      </div>

      {/* CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          安全なパスワードを今すぐ生成しよう
        </h2>
        <p className="text-sm text-muted mb-5">
          ネットツールボックスのパスワード生成ツールで、暗号学的に安全なランダムパスワードを無料で作成できます。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/tools/password-generator"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            パスワード生成ツールを使う
          </Link>
          <Link
            href={`/category/${encodeURIComponent("セキュリティ")}`}
            className="inline-block border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg transition-colors"
          >
            セキュリティツール一覧
          </Link>
        </div>
      </section>
      <GuideRelatedLinks currentSlug="password-security" />
    </div>
  );
}
