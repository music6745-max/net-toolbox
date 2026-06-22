import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { publicTools } from "@/lib/publicCatalog";
import { categories } from "@/lib/categories";
import { FAQJsonLd } from "@/components/JsonLd";
import { ToolSearch } from "@/components/ToolSearch";

const featuredToolSlugs = [
  "character-count",
  "json-formatter",
  "qr-code",
  "password-generator",
  "image-compressor",
  "regex-tester",
  "markdown-preview",
  "timestamp-converter",
  "color-picker",
  "contrast-checker",
  "csv-json",
  "timezone-converter",
];

const workflowGuides = [
  {
    slug: "developer-tools-guide",
    title: "開発者向けツール活用ガイド",
    description:
      "JSON、正規表現、Base64、HTTP、構造化データなど、開発作業で使う確認ツールを用途別に整理。",
  },
  {
    slug: "web-tools-for-work",
    title: "仕事効率化に使える無料Webツール",
    description:
      "文章確認、画像調整、時刻変換、簡易チェックなど、日々の作業で使うツールの選び方を整理。",
  },
  {
    slug: "remote-work-tools",
    title: "リモートワークの作業環境ガイド",
    description:
      "時差、集中時間、共有前チェック、セキュリティ確認をブラウザ上のツールで補助する流れを解説。",
  },
  {
    slug: "small-business-software",
    title: "個人運営・小規模事業の作業環境ガイド",
    description:
      "請求、会計前の整理、共有、制作、サイト運営など、小規模な作業環境に必要なツールを整理します。",
  },
];

const faqItems = [
  {
    question: "ネットツールボックスは無料ですか？",
    answer:
      "はい。主要なWebツールは無料で利用でき、会員登録やログインも不要です。",
  },
  {
    question: "入力したデータはサーバーに送信されますか？",
    answer:
      "多くのツールはブラウザ内で処理します。DNS確認やIP確認など外部通信が必要な機能は、ページ内で利用する外部サービスを明示します。",
  },
  {
    question: "どのツールから使えばよいですか？",
    answer:
      "文章は文字数カウント、開発作業はJSON整形や正規表現テスト、画像作業はQRコード作成や画像圧縮から使うと効果を確認しやすいです。",
  },
  {
    question: "掲載ツールの基準はありますか？",
    answer:
      "現在は仕事・制作・開発で利用頻度が高いツールを中心に公開カタログへ掲載し、重複やテーマ外のページは検索向けの露出を抑えています。",
  },
];

export default function Home() {
  const toolsByCategory = categories.map((cat) => ({
    ...cat,
    tools: publicTools.filter((t) => t.category === cat.slug),
  }));

  const featuredTools = featuredToolSlugs
    .map((slug) => publicTools.find((tool) => tool.slug === slug))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <FAQJsonLd items={faqItems} />

      <section className="mb-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3">
            登録不要・ブラウザ中心の実務ツール
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            {siteConfig.name}
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            文章、開発、画像、デザイン、セキュリティ確認に使う無料Webツールを整理しています。
            多くの処理はブラウザ内で行い、短い作業でも迷わず使えることを重視しています。
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted">
            <span className="rounded-full border border-card-border px-3 py-1">
              厳選{publicTools.length}ツール
            </span>
            <span className="rounded-full border border-card-border px-3 py-1">
              会員登録不要
            </span>
            <span className="rounded-full border border-card-border px-3 py-1">
              スマホ・PC対応
            </span>
          </div>
        </div>
      </section>

      <ToolSearch />

      <section className="mb-12">
        <div className="flex items-center justify-between mb-4 gap-3">
          <h2 className="text-xl font-bold">よく使われる主要ツール</h2>
          <Link href="/tools" className="text-sm text-primary hover:underline">
            ツール一覧へ
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="block bg-card-bg border border-card-border rounded-lg p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
            >
              <div className="text-2xl mb-2">{tool.icon}</div>
              <h3 className="text-base font-semibold mb-1">{tool.name}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-4 gap-3">
          <h2 className="text-xl font-bold">作業フロー別ガイド</h2>
          <Link href="/guide" className="text-sm text-primary hover:underline">
            ガイド一覧へ
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {workflowGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className="block bg-card-bg border border-card-border rounded-lg p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
            >
              <h3 className="text-base font-semibold mb-2">{guide.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <nav className="mb-12" aria-label="カテゴリ">
        <h2 className="text-xl font-bold mb-4">カテゴリから探す</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolsByCategory
            .filter((cat) => cat.tools.length > 0)
            .map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="block bg-card-bg border border-card-border rounded-lg p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold">
                    {cat.icon} {cat.name}
                  </h3>
                  <span className="text-xs text-muted">
                    {cat.tools.length}件
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            ))}
        </div>
      </nav>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">運営方針</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "ローカル処理を優先",
              body: "多くのツールは入力値を端末内で処理します。保存や送信が必要な機能はページ内で明示します。",
            },
            {
              title: "重複ページの整理",
              body: "似た検索意図のページやテーマ外ページは公開カタログから外し、主要ツールの説明を優先します。",
            },
            {
              title: "訂正と更新",
              body: "仕様変更や誤りを確認した場合は、問い合わせ内容をもとに修正します。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-card-border rounded-lg p-5"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/quality" className="text-sm text-primary hover:underline">
            品質管理・編集方針を見る
          </Link>
        </div>
      </section>

      <section className="bg-card-bg border border-card-border rounded-lg p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-5">よくある質問</h2>
        <div className="space-y-5">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="border-b border-card-border pb-5 last:border-0 last:pb-0"
            >
              <h3 className="font-medium mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">
                A. {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
