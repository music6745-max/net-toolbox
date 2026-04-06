import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { AffiliateCTA } from "@/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Web開発者向け便利ツール活用ガイド",
  description:
    "JSON整形、Base64変換、正規表現テスト、ハッシュ生成など、Web開発で日常的に使うオンラインツールの活用法を詳しく解説。すべて無料・登録不要で使えます。",
  alternates: {
    canonical: `${siteConfig.url}/guide/developer-tools-guide`,
  },
};

const faqItems = [
  {
    question: "ツールに入力したコードやデータは安全ですか？",
    answer:
      "はい。すべてのツールはブラウザ上のJavaScriptで動作し、入力データがサーバーに送信されることはありません。APIキーや機密情報を含むデータも安心してお使いいただけます。",
  },
  {
    question: "オフラインでも使えますか？",
    answer:
      "初回アクセス時にはインターネット接続が必要ですが、ブラウザにキャッシュされた後は一部のツールがオフラインでも動作します。ただし最新バージョンの利用にはオンライン接続を推奨します。",
  },
  {
    question: "プログラミング初心者でも使えますか？",
    answer:
      "はい。各ツールはシンプルなUIで設計されており、入力欄に値を入れるだけで結果が得られます。プログラミングの学習過程でも役立つツールが多数あります。",
  },
];

const toolSections = [
  {
    id: "json-tools",
    title: "JSON関連ツール",
    icon: "{ }",
    desc: "API開発やデータ処理で最も頻繁に使うJSON関連のツール群です。",
    tools: [
      {
        name: "JSON整形（フォーマッター）",
        slug: "json-formatter",
        description:
          "圧縮されたJSON文字列を読みやすくインデント整形します。APIレスポンスの確認やデバッグ時に欠かせないツールです。シンタックスハイライトで構造を視覚的に把握できます。",
        useCase: "APIデバッグ、設定ファイル編集、コードレビュー",
      },
      {
        name: "JSON差分比較",
        slug: "json-diff",
        description:
          "2つのJSONデータの差分をハイライト表示します。APIレスポンスの変更確認や、設定ファイルのバージョン間比較に最適です。",
        useCase: "APIバージョン比較、設定変更の確認、テスト結果の検証",
      },
      {
        name: "JSON → TypeScript型変換",
        slug: "json-to-typescript",
        description:
          "JSONデータからTypeScriptの型定義を自動生成します。APIレスポンスの型を手動で書く手間を省き、型安全な開発を加速します。",
        useCase: "TypeScriptプロジェクト、API型定義、フロントエンド開発",
      },
      {
        name: "JSONパスファインダー",
        slug: "json-path-finder",
        description:
          "複雑なJSONの中から特定の値へのパス（アクセス方法）を見つけます。深いネスト構造のデータを扱う際に便利です。",
        useCase: "複雑なAPIレスポンス解析、データマッピング",
      },
    ],
  },
  {
    id: "encoding-tools",
    title: "エンコード・デコードツール",
    icon: "🔀",
    desc: "データの変換や暗号化に関連するツールです。",
    tools: [
      {
        name: "Base64エンコード/デコード",
        slug: "base64",
        description:
          "テキストや画像をBase64形式に変換、またはBase64文字列をデコードします。APIでバイナリデータを扱う場合や、メール送信の添付処理などで使います。",
        useCase: "API開発、メール処理、画像埋め込み",
      },
      {
        name: "URLエンコード/デコード",
        slug: "url-encode",
        description:
          "URLに含まれる日本語や特殊文字をエンコード・デコードします。クエリパラメータの構築やデバッグ時に必須のツールです。",
        useCase: "URL構築、APIパラメータ処理、リダイレクトURL生成",
      },
      {
        name: "HTMLエスケープ",
        slug: "html-escape",
        description:
          "HTMLの特殊文字をエスケープ処理します。XSS対策やHTMLコンテンツの安全な表示に役立ちます。",
        useCase: "XSS対策、CMS入稿、テンプレート作成",
      },
    ],
  },
  {
    id: "regex-tools",
    title: "正規表現ツール",
    icon: "🔍",
    desc: "テキストのパターンマッチングに不可欠な正規表現を扱うツールです。",
    tools: [
      {
        name: "正規表現テスター",
        slug: "regex-tester",
        description:
          "正規表現パターンをリアルタイムでテストできます。マッチした部分がハイライト表示され、グループキャプチャの内容も確認可能。バリデーションパターンの開発に欠かせません。",
        useCase: "入力バリデーション、ログ解析、テキスト抽出",
      },
      {
        name: "正規表現チートシート",
        slug: "regex-cheatsheet",
        description:
          "正規表現の構文リファレンスをすぐに参照できます。メタ文字、量指定子、グループ化など、よく使うパターンをまとめています。",
        useCase: "正規表現の学習、構文リファレンス",
      },
    ],
  },
  {
    id: "security-tools",
    title: "セキュリティ・ハッシュツール",
    icon: "🔐",
    desc: "データの整合性確認やセキュリティ関連の開発に使うツールです。",
    tools: [
      {
        name: "ハッシュ生成",
        slug: "hash-generator",
        description:
          "MD5、SHA-1、SHA-256、SHA-512などのハッシュ値を生成します。ファイルの整合性検証、APIの署名生成、パスワードハッシュの確認などに使えます。",
        useCase: "ファイル検証、API署名、データ整合性チェック",
      },
      {
        name: "JWTデコーダー",
        slug: "jwt-decoder",
        description:
          "JSON Web Token（JWT）をデコードしてヘッダーとペイロードの内容を確認できます。認証システムのデバッグやトークンの有効期限確認に便利です。",
        useCase: "認証デバッグ、トークン検証、APIテスト",
      },
      {
        name: "パスワード生成",
        slug: "password-generator",
        description:
          "暗号学的に安全なランダムパスワードを生成します。開発環境のシークレットキーやテスト用パスワードの作成に活用できます。",
        useCase: "シークレットキー生成、テストデータ作成",
      },
    ],
  },
  {
    id: "web-dev-tools",
    title: "Web開発補助ツール",
    icon: "🌐",
    desc: "フロントエンド・バックエンド問わずWeb開発で役立つツールです。",
    tools: [
      {
        name: "CSSフォーマッター",
        slug: "css-formatter",
        description:
          "圧縮されたCSSを読みやすく整形します。既存プロジェクトのCSS解析やコードレビュー時に使えます。逆に圧縮（ミニファイ）も可能です。",
        useCase: "CSS最適化、コードレビュー、レガシーコード解析",
      },
      {
        name: "UUID生成",
        slug: "uuid-generator",
        description:
          "UUID v4を一括生成します。データベースの主キーやAPIのリクエストID、テストデータのID生成に便利です。",
        useCase: "DB設計、APIテスト、テストデータ生成",
      },
      {
        name: "cron式パーサー",
        slug: "cron-parser",
        description:
          "cron式を入力すると、次回以降の実行タイミングを一覧表示します。定期バッチ処理やスケジュールタスクの設定確認に最適です。",
        useCase: "バッチスケジュール設計、CI/CD設定、監視設定",
      },
      {
        name: "HTTPステータスコード一覧",
        slug: "http-status-codes",
        description:
          "HTTPステータスコードの意味と使い分けをすばやく確認できます。API開発時のレスポンス設計や、エラーハンドリングの参考に。",
        useCase: "API設計、エラーハンドリング、ドキュメント作成",
      },
    ],
  },
];

export default function DeveloperToolsGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "Web開発者向けツールガイド",
            url: `${siteConfig.url}/guide/developer-tools-guide`,
          },
        ]}
      />
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
        <span>Web開発者向けツールガイド</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            開発
          </span>
          <span className="text-xs text-muted">7分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Web開発者向け便利ツール活用ガイド
        </h1>
        <p className="text-muted leading-relaxed">
          Web開発の現場では、JSONの整形やBase64の変換、正規表現のテストなど、ちょっとした変換や確認作業が頻繁に発生します。この記事では、開発者が日常的に使えるオンラインツールをカテゴリ別に紹介し、それぞれの実践的な活用法を解説します。
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          {toolSections.map((section, i) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-primary hover:underline"
              >
                {i + 1}. {section.icon} {section.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#workflow-tips" className="text-primary hover:underline">
              6. 開発ワークフローに組み込むコツ
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              7. よくある質問
            </a>
          </li>
        </ul>
      </div>

      {/* Intro note */}
      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mb-8">
        <p className="text-sm font-medium mb-1">開発者にうれしいポイント</p>
        <ul className="text-sm text-muted space-y-1">
          <li>・ すべてブラウザ内で処理 - 機密データも安心</li>
          <li>・ 登録不要・広告控えめ - すぐに作業に集中できる</li>
          <li>・ レスポンシブ対応 - 外出先でもスマホから利用可能</li>
        </ul>
      </div>

      {/* Tool Sections */}
      {toolSections.map((section, sectionIndex) => (
        <section key={section.id} id={section.id} className="mb-10">
          <h2 className="text-2xl font-bold mb-2">
            {sectionIndex + 1}. {section.icon} {section.title}
          </h2>
          <p className="text-sm text-muted mb-5">{section.desc}</p>

          <div className="space-y-4">
            {section.tools.map((tool) => (
              <div
                key={tool.slug}
                className="bg-card-bg border border-card-border rounded-xl p-5"
              >
                <h3 className="font-bold mb-2">{tool.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-2">
                  {tool.description}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs text-muted bg-card-bg border border-card-border rounded-full px-3 py-1">
                    用途: {tool.useCase}
                  </span>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-sm text-primary hover:underline"
                  >
                    ツールを開く →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Workflow Tips */}
      <section id="workflow-tips" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. 開発ワークフローに組み込むコツ
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              ブラウザのピン留めタブを活用する
            </h3>
            <p className="text-sm text-muted">
              JSON整形や正規表現テスターなど、頻繁に使うツールはブラウザのピン留めタブにしておくと便利です。開発中にいつでもすぐアクセスでき、作業のコンテキストスイッチを最小限にできます。
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              ブックマークフォルダでツールを整理する
            </h3>
            <p className="text-sm text-muted">
              開発ツール用のブックマークフォルダを作成し、プロジェクトで使うツールをまとめて管理しましょう。チーム共有のブックマークとして活用すれば、メンバー間で同じツールセットを使えます。
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              コードレビューで活用する
            </h3>
            <p className="text-sm text-muted">
              JSON差分比較やテキスト差分比較のツールは、コードレビューの補助に最適です。設定ファイルの変更やAPIレスポンスの変更を視覚的に確認できるため、レビューの精度と速度が向上します。
            </p>
          </div>
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
        <h3 className="text-xl font-bold text-center">開発環境におすすめのレンタルサーバー</h3>
        <AffiliateCTA serviceName="ConoHa WING" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT" badge="高速" description="国内最速級・開発者に人気のレンタルサーバー" color="blue" />
        <AffiliateCTA serviceName="エックスサーバー" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1" badge="定番" description="安定性抜群・サポート充実のレンタルサーバー" color="orange" />
      </div>

      {/* CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          開発ツールを今すぐ使ってみる
        </h2>
        <p className="text-sm text-muted mb-5">
          ネットツールボックスには、この記事で紹介したツール以外にも多数の開発者向けツールが揃っています。すべて無料・登録不要です。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={`/category/${encodeURIComponent("開発ツール")}`}
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            開発ツール一覧を見る
          </Link>
          <Link
            href={`/category/${encodeURIComponent("セキュリティ")}`}
            className="inline-block border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg transition-colors"
          >
            セキュリティツール
          </Link>
          <Link
            href="/"
            className="inline-block border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg transition-colors"
          >
            全ツール一覧
          </Link>
        </div>
      </section>
    </div>
  );
}
