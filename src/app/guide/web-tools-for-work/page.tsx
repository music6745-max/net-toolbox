import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "仕事効率化に使える無料Webツール15選",
  description:
    "仕事の効率化に役立つ無料Webツール15個を厳選紹介。テキスト処理、データ変換、計算、デザイン補助まで、登録不要で今すぐ使えるツールをカテゴリ別にまとめました。",
  alternates: {
    canonical: `${siteConfig.url}/guide/web-tools-for-work`,
  },
};

const toolGroups = [
  {
    groupTitle: "テキスト処理・文書作成",
    groupIcon: "📝",
    groupDesc: "文章を扱う業務で欠かせないテキスト処理ツール",
    tools: [
      {
        name: "文字数カウント",
        slug: "character-count",
        desc: "文章の文字数・単語数・行数をリアルタイムでカウント。レポートやプレゼン資料、メール文面の文字数チェックに最適です。SNS投稿の文字数制限もすぐ確認できます。",
      },
      {
        name: "テキスト置換",
        slug: "text-replace",
        desc: "大量のテキストから特定の文字列を一括で検索・置換。CSVデータの修正や、文書内の表記揺れの統一に活用できます。正規表現にも対応しています。",
      },
      {
        name: "テキスト差分比較",
        slug: "text-diff",
        desc: "2つのテキストの差分をハイライト表示。契約書や仕様書の修正箇所の確認、コードレビューなど、変更点を正確に把握したいときに便利です。",
      },
    ],
  },
  {
    groupTitle: "データ変換・整形",
    groupIcon: "🔄",
    groupDesc: "異なるフォーマット間のデータ変換をスムーズに",
    tools: [
      {
        name: "CSV・JSON変換",
        slug: "csv-json",
        desc: "CSVとJSONを相互変換。Excelのデータをシステムに取り込んだり、APIのレスポンスを表計算ソフトで開いたり、データ連携の場面で重宝します。",
      },
      {
        name: "JSON整形",
        slug: "json-formatter",
        desc: "読みにくいJSON文字列を見やすくインデント整形。APIの動作確認やデバッグ、設定ファイルの編集時に活用できます。シンタックスハイライト付き。",
      },
      {
        name: "TSV・CSV変換",
        slug: "tsv-csv-converter",
        desc: "TSVとCSVを相互変換。Excelからコピーしたデータ（タブ区切り）をCSVに変換したり、その逆も簡単にできます。",
      },
    ],
  },
  {
    groupTitle: "計算・ビジネス",
    groupIcon: "📊",
    groupDesc: "ビジネスシーンで役立つ計算ツール",
    tools: [
      {
        name: "割引計算",
        slug: "discount-calculator",
        desc: "割引率や割引後の価格を即座に計算。見積もり作成時の値引き計算や、セール価格の確認に使えます。",
      },
      {
        name: "利益率計算",
        slug: "profit-calculator",
        desc: "原価と売価から利益率を計算。営業利益率や粗利率の算出に便利です。価格設定の検討や経営分析に活用できます。",
      },
      {
        name: "ローン計算",
        slug: "loan-calculator",
        desc: "借入額・金利・返済期間から月々の返済額を算出。設備投資の検討や、事業計画の作成に役立ちます。",
      },
    ],
  },
  {
    groupTitle: "デザイン・プレゼン",
    groupIcon: "🎨",
    groupDesc: "資料作成やWebデザインに役立つツール",
    tools: [
      {
        name: "カラーコード変換",
        slug: "color-converter",
        desc: "HEX、RGB、HSLなどのカラーコードを相互変換。Webサイトのデザインや、プレゼン資料の色指定に便利です。",
      },
      {
        name: "コントラストチェッカー",
        slug: "contrast-checker",
        desc: "テキストと背景色のコントラスト比を確認。WCAG基準に準拠したアクセシブルなデザインかどうかを簡単にチェックできます。",
      },
      {
        name: "QRコード作成",
        slug: "qr-code",
        desc: "URLやテキストからQRコードを生成。名刺やチラシ、プレゼン資料への埋め込みに。PNG画像でダウンロードできます。",
      },
    ],
  },
  {
    groupTitle: "セキュリティ・管理",
    groupIcon: "🔒",
    groupDesc: "安全な業務環境を維持するためのツール",
    tools: [
      {
        name: "パスワード生成",
        slug: "password-generator",
        desc: "安全なランダムパスワードを即座に生成。新しいアカウント作成時や、パスワード変更時に強力なパスワードを作成できます。",
      },
      {
        name: "ハッシュ生成",
        slug: "hash-generator",
        desc: "MD5、SHA-256などのハッシュ値を生成。ファイルの整合性確認やデータの検証に活用できます。",
      },
      {
        name: "URLエンコード",
        slug: "url-encode",
        desc: "URLに含まれる日本語や特殊文字を安全にエンコード。Web開発やAPI連携時のURL構築に必須のツールです。",
      },
    ],
  },
];

export default function WebToolsForWorkPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "仕事効率化Webツール15選",
            url: `${siteConfig.url}/guide/web-tools-for-work`,
          },
        ]}
      />

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
        <span>仕事効率化Webツール15選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
            仕事術
          </span>
          <span className="text-xs text-muted">8分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          仕事効率化に使える無料Webツール15選
        </h1>
        <p className="text-muted leading-relaxed">
          日々の業務で「ちょっとした作業」に時間を取られていませんか？テキスト処理やデータ変換、計算など、Webブラウザだけで完結する無料ツールを活用すれば、業務効率を大幅に改善できます。この記事では、登録不要ですぐに使える厳選15ツールを用途別に紹介します。
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          {toolGroups.map((group, i) => (
            <li key={group.groupTitle}>
              <a
                href={`#group-${i}`}
                className="text-primary hover:underline"
              >
                {i + 1}. {group.groupIcon} {group.groupTitle}
              </a>
            </li>
          ))}
          <li>
            <a href="#tips" className="text-primary hover:underline">
              6. ツール活用のコツ
            </a>
          </li>
        </ul>
      </div>

      {/* Intro */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
        <p className="text-sm font-medium mb-1">このガイドの特徴</p>
        <ul className="text-sm text-muted space-y-1">
          <li>・ すべて無料・登録不要で利用可能</li>
          <li>・ ブラウザ上で動作し、データがサーバーに送信されない</li>
          <li>・ PC・スマホ・タブレットに対応</li>
        </ul>
      </div>

      {/* Tool Groups */}
      {toolGroups.map((group, groupIndex) => (
        <section key={group.groupTitle} id={`group-${groupIndex}`} className="mb-10">
          <h2 className="text-2xl font-bold mb-2">
            {groupIndex + 1}. {group.groupIcon} {group.groupTitle}
          </h2>
          <p className="text-sm text-muted mb-5">{group.groupDesc}</p>

          <div className="space-y-4">
            {group.tools.map((tool, toolIndex) => (
              <div
                key={tool.slug}
                className="bg-card-bg border border-card-border rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded">
                    #{groupIndex * 3 + toolIndex + 1}
                  </span>
                  <h3 className="font-bold">{tool.name}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {tool.desc}
                </p>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="text-sm text-primary hover:underline"
                >
                  {tool.name}を使う →
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Tips */}
      <section id="tips" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. ツール活用のコツ
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              ブックマークに登録しておく
            </h3>
            <p className="text-sm text-muted">
              よく使うツールはブラウザのブックマークバーに登録しておきましょう。必要なときにワンクリックでアクセスでき、作業の中断を最小限に抑えられます。
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              チームに共有する
            </h3>
            <p className="text-sm text-muted">
              便利なツールはチームメンバーにも共有しましょう。全員の作業効率が上がれば、チーム全体の生産性向上につながります。SlackやTeamsでURLを共有するだけでOKです。
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">
              データの安全性を確認する
            </h3>
            <p className="text-sm text-muted">
              業務で扱うデータには機密情報が含まれることがあります。ネットツールボックスのツールはすべてブラウザ内で処理され、サーバーにデータが送信されないため安心してお使いいただけます。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          まだまだ便利なツールがあります
        </h2>
        <p className="text-sm text-muted mb-5">
          ネットツールボックスにはこの記事で紹介した15個以外にも、200以上の無料ツールが揃っています。きっと業務に役立つツールが見つかるはずです。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            全ツール一覧を見る
          </Link>
          <Link
            href={`/category/${encodeURIComponent("テキスト")}`}
            className="inline-block border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg transition-colors"
          >
            テキストツール
          </Link>
          <Link
            href={`/category/${encodeURIComponent("開発ツール")}`}
            className="inline-block border border-card-border px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-card-bg transition-colors"
          >
            開発ツール
          </Link>
        </div>
      </section>
    </div>
  );
}
