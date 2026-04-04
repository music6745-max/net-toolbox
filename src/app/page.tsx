import Link from "next/link";
import { tools, siteConfig } from "@/lib/tools";
import { categories } from "@/lib/categories";
import { FAQJsonLd } from "@/components/JsonLd";
import { ToolSearch } from "@/components/ToolSearch";

const faqItems = [
  {
    question: "ネットツールボックスは無料ですか？",
    answer: "はい、すべてのツールを完全無料でご利用いただけます。会員登録やログインも不要です。",
  },
  {
    question: "入力したデータは安全ですか？",
    answer: "すべてのツールはブラウザ上で動作し、入力したデータがサーバーに送信されることはありません。安心してご利用いただけます。",
  },
  {
    question: "スマートフォンでも使えますか？",
    answer: "はい、すべてのツールはスマートフォン・タブレット・PCのブラウザに対応しています。",
  },
  {
    question: "ツールの数はどれくらいありますか？",
    answer: `現在${tools.length}種類以上のツールをご用意しています。テキスト処理、開発ツール、デザイン、日常ツールなど幅広いカテゴリをカバーしています。`,
  },
];

export default function Home() {
  const toolsByCategory = categories.map((cat) => ({
    ...cat,
    tools: tools.filter((t) => t.category === cat.slug),
  }));

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <FAQJsonLd items={faqItems} />

      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">{siteConfig.name}</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          無料で使えるWeb便利ツール集。すべてブラウザ上で動作し、データがサーバーに送信されることはありません。
        </p>
        <p className="text-sm text-muted mt-2">
          全{tools.length}ツール ・ 登録不要 ・ 完全無料
        </p>
      </section>

      <ToolSearch />

      {/* Category navigation */}
      <nav className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${encodeURIComponent(cat.slug)}`}
            className="inline-flex items-center gap-1.5 bg-card-bg border border-card-border rounded-full px-4 py-2 text-sm hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <span>{cat.icon}</span>
            <span>{cat.slug}</span>
            <span className="text-xs text-muted">
              ({tools.filter((t) => t.category === cat.slug).length})
            </span>
          </Link>
        ))}
      </nav>

      {/* Tools by category */}
      {toolsByCategory.map((cat) => (
        <section key={cat.slug} className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">
              {cat.icon} {cat.name}
            </h2>
            <Link
              href={`/category/${encodeURIComponent(cat.slug)}`}
              className="text-sm text-primary hover:underline"
            >
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.tools.slice(0, 6).map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="block bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
              >
                <div className="text-2xl mb-2">{tool.icon}</div>
                <h3 className="text-base font-semibold mb-1">{tool.name}</h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-2">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="mt-8 bg-card-bg border border-card-border rounded-xl p-8">
        <h2 className="text-xl font-bold mb-6">よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-card-border pb-4 last:border-0 last:pb-0">
              <h3 className="font-medium mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="mt-8 bg-card-bg border border-card-border rounded-xl p-8">
        <h2 className="text-xl font-bold mb-4">
          {siteConfig.name}について
        </h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            {siteConfig.name}は、日常的に使えるWeb便利ツールを無料で提供するサイトです。
            QRコード作成、文字数カウント、パスワード生成、JSON整形、カラーコード変換など、
            {tools.length}種類以上のツールを取り揃えています。
          </p>
          <p>
            すべてのツールはブラウザ上で動作するため、入力したデータがサーバーに送信されることはありません。
            安心してご利用ください。会員登録やログインも不要です。
          </p>
        </div>
      </section>
    </div>
  );
}
