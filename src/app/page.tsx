import Link from "next/link";
import { tools, siteConfig } from "@/lib/tools";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-3">{siteConfig.name}</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          無料で使えるWeb便利ツール集。すべてブラウザ上で動作し、データがサーバーに送信されることはありません。
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="block bg-card-bg border border-card-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <div className="text-3xl mb-3">{tool.icon}</div>
            <h2 className="text-lg font-semibold mb-1">{tool.name}</h2>
            <p className="text-sm text-muted leading-relaxed">
              {tool.description}
            </p>
            <span className="inline-block mt-3 text-xs bg-background px-2 py-1 rounded text-muted">
              {tool.category}
            </span>
          </Link>
        ))}
      </div>

      <section className="mt-16 bg-card-bg border border-card-border rounded-xl p-8">
        <h2 className="text-xl font-bold mb-4">
          {siteConfig.name}について
        </h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            {siteConfig.name}は、日常的に使えるWeb便利ツールを無料で提供するサイトです。
            QRコード作成、文字数カウント、パスワード生成、JSON整形、カラーコード変換など、
            さまざまなツールを取り揃えています。
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
