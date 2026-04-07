import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】レンタルサーバー比較おすすめ5選｜料金・速度・WordPress対応を徹底解説",
    description:
      "2026年最新のレンタルサーバーを徹底比較。ConoHa WING・エックスサーバー・ロリポップ・mixhost・シンレンタルサーバーの料金・速度・WordPress対応を詳しく解説。",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    mainEntityOfPage: `${siteConfig.url}/guide/rental-server-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const serverServices = [
  {
    name: "ConoHa WING",
    price: "月額652円〜（36ヶ月契約）",
    monthlyPrice: "月額1,452円",
    yearlyPrice: "月額941円（12ヶ月契約）",
    longTermPrice: "月額652円（36ヶ月契約）",
    disk: "SSD 300GB",
    speed: "国内最速クラス（WEXAL搭載）",
    wordpress: "簡単セットアップ（最短10分）",
    ssl: "無料独自SSL（アルファSSL）",
    domains: "2つ永久無料（WINGパック）",
    transfer: "無制限",
    support: "電話・メール・チャット",
    pros: [
      "国内最速クラスの表示速度（WEXAL Page Speed Technology搭載）",
      "WordPressかんたんセットアップで初心者でも最短10分で開設",
      "WINGパックなら独自ドメイン2つが永久無料",
      "管理画面が直感的でわかりやすい",
      "自動バックアップ（14日間）が無料",
      "初期費用0円で始められる",
    ],
    cons: [
      "電話サポートの受付時間が平日のみ",
      "プラン変更時に一部制約がある",
      "サーバー歴はエックスサーバーに比べると短い",
    ],
    bestFor:
      "これからWordPressブログを始める初心者に最もおすすめ。表示速度が速く、セットアップも簡単で、ドメイン2つ無料と圧倒的なコスパです。",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
    badge: "総合No.1おすすめ",
    color: "blue",
    reward: "5,000〜12,000",
  },
  {
    name: "エックスサーバー",
    price: "月額693円〜（36ヶ月契約）",
    monthlyPrice: "月額1,320円",
    yearlyPrice: "月額1,100円（12ヶ月契約）",
    longTermPrice: "月額693円（36ヶ月契約）",
    disk: "NVMe SSD 300GB",
    speed: "高速（KUSANAGI技術導入）",
    wordpress: "簡単インストール対応",
    ssl: "無料独自SSL",
    domains: "1つ永久無料",
    transfer: "無制限",
    support: "電話・メール・チャット（24時間）",
    pros: [
      "国内シェアNo.1の圧倒的な実績と安定性",
      "20年以上の運営実績で信頼性が高い",
      "KUSANAGI技術による高速WordPress環境",
      "24時間365日のメールサポート対応",
      "自動バックアップ（14日間）が無料",
      "法人利用にも十分な安定稼働率99.99%",
    ],
    cons: [
      "ConoHa WINGと比べると月額がやや高め",
      "管理画面のデザインがやや古い印象",
      "プラン変更は月単位でのみ可能",
    ],
    bestFor:
      "安定性と実績を重視する方におすすめ。国内シェアNo.1で、長期運用するブログや企業サイトに最適です。困った時のサポート体制も充実しています。",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
    badge: "安定性No.1",
    color: "orange",
    reward: "5,000〜10,000",
  },
  {
    name: "ロリポップ!",
    price: "月額220円〜（ライトプラン36ヶ月）",
    monthlyPrice: "月額550円（ハイスピード1ヶ月）",
    yearlyPrice: "月額550円（ハイスピード12ヶ月）",
    longTermPrice: "月額550円（ハイスピード36ヶ月）",
    disk: "SSD 400GB（ハイスピード）",
    speed: "高速（LiteSpeed採用）",
    wordpress: "簡単インストール対応",
    ssl: "無料独自SSL",
    domains: "2つ無料（ハイスピード12ヶ月以上）",
    transfer: "無制限",
    support: "電話・メール・チャット",
    pros: [
      "月額220円〜と業界最安クラスの料金設定",
      "ハイスピードプランはLiteSpeed採用で高速",
      "10日間の無料お試し期間あり",
      "200万サイト以上の運用実績",
      "WordPress簡単インストール対応",
      "ハイスピードプランなら独自ドメイン2つ無料",
    ],
    cons: [
      "ライトプランは性能が限定的",
      "電話サポートはスタンダードプラン以上",
      "バックアップ復元は有料（月額330円）",
    ],
    bestFor:
      "とにかく費用を抑えたい初心者の方に最適。ハイスピードプランなら月額550円でLiteSpeed搭載の高速サーバーが使え、コスパ抜群です。",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1AFTYQ+348+5YZ76",
    badge: "最安値",
    color: "green",
    reward: "",
  },
  {
    name: "mixhost",
    price: "月額968円〜（36ヶ月契約）",
    monthlyPrice: "月額2,178円",
    yearlyPrice: "月額1,518円（12ヶ月契約）",
    longTermPrice: "月額968円（36ヶ月契約）",
    disk: "NVMe SSD 無制限",
    speed: "高速（LiteSpeed採用）",
    wordpress: "自動インストール対応",
    ssl: "無料独自SSL",
    domains: "1つ永久無料",
    transfer: "無制限",
    support: "メール",
    pros: [
      "ディスク容量無制限で大規模サイトにも対応",
      "LiteSpeed Webサーバー採用で高速表示",
      "アダルトサイトも運営可能（業界でも珍しい）",
      "初期費用0円で始められる",
      "自動バックアップ（14日間）が無料",
      "HTTP/3対応で最新技術を採用",
    ],
    cons: [
      "電話サポートがない（メールのみ）",
      "料金は他社と比べるとやや高め",
      "管理画面がcPanelベースで慣れが必要",
    ],
    bestFor:
      "大容量データを扱うサイトや、アダルトコンテンツを含むサイトを運営したい方に最適。ディスク無制限と最新技術が魅力です。",
    url: "https://mixhost.jp/",
    badge: "大容量・高機能",
    color: "purple",
    reward: "",
  },
  {
    name: "シンレンタルサーバー",
    price: "月額539円〜（36ヶ月契約）",
    monthlyPrice: "月額990円",
    yearlyPrice: "月額880円（12ヶ月契約）",
    longTermPrice: "月額539円（36ヶ月契約）",
    disk: "NVMe SSD 300GB",
    speed: "超高速（KUSANAGI技術・最新ハード）",
    wordpress: "簡単インストール対応",
    ssl: "無料独自SSL",
    domains: "1つ永久無料",
    transfer: "無制限",
    support: "メール",
    pros: [
      "エックスサーバーの技術基盤で最新ハードウェアを採用",
      "KUSANAGI技術でWordPressが超高速",
      "月額539円〜とエックスサーバーより安い料金設定",
      "NVMe SSD採用で読み書き速度が高速",
      "自動バックアップ（14日間）が無料",
      "初期費用0円で始められる",
    ],
    cons: [
      "電話サポートがない（メールのみ）",
      "サービス開始が2021年と実績がまだ浅い",
      "収容ユーザー数の制限が緩く、混雑時の影響がある可能性",
    ],
    bestFor:
      "エックスサーバーの技術力を低価格で使いたい方におすすめ。最新ハードウェアとKUSANAGI技術で高速表示を実現しつつ、コストを抑えられます。",
    url: "https://www.shin-server.jp/",
    badge: "高速・低価格",
    color: "red",
    reward: "",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  orange:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

const faqItems = [
  {
    question: "レンタルサーバーとは何ですか？初心者にもわかるように教えてください",
    answer:
      "レンタルサーバーとは、Webサイトやブログのデータを保管・公開するためのサーバーをレンタルするサービスです。自分でサーバーを用意・管理する必要がなく、月額数百円から利用できます。WordPressブログやWebサイトを公開するには、レンタルサーバーとドメイン（サイトの住所）が必要です。",
  },
  {
    question: "WordPressブログを始めるのにおすすめのサーバーはどれですか？",
    answer:
      "初心者がWordPressブログを始めるなら、ConoHa WINGが最もおすすめです。「WordPressかんたんセットアップ」機能で最短10分でブログを開設でき、表示速度も国内最速クラス。WINGパックならドメイン2つが永久無料で、月額652円〜とコスパも優れています。",
  },
  {
    question: "無料のレンタルサーバーではダメですか？",
    answer:
      "無料サーバーは広告が強制表示される、独自ドメインが使えない、表示速度が遅い、サポートがないなどのデメリットがあります。アフィリエイトやAdSenseで収益化を考えている場合、審査に通りにくいことも。月額数百円から使える有料サーバーの方が、長期的にはコスパが良いです。",
  },
  {
    question: "レンタルサーバーの表示速度はなぜ重要ですか？",
    answer:
      "Googleはページの表示速度を検索順位の評価要素にしています。表示が3秒以上かかるとユーザーの53%が離脱するというデータもあり、SEOとユーザー体験の両面で速度は重要です。ConoHa WINGやエックスサーバーは高速化技術を導入しており、表示速度に優れています。",
  },
  {
    question: "SSL対応は必要ですか？",
    answer:
      "はい、SSL（https化）は必須です。Googleは2014年からSSL対応をランキング要素にしており、SSL非対応サイトはブラウザで「保護されていない通信」と警告表示されます。今回紹介した5社はすべて無料SSLに対応しているので、追加費用なくSSL化できます。",
  },
  {
    question: "サーバーの移行（引っ越し）は難しいですか？",
    answer:
      "ConoHa WINGやエックスサーバーにはWordPressの移行機能が用意されており、比較的簡単に引っ越しできます。また、エックスサーバーは無料の移行代行サービスも提供しています。ただし、移行作業に不安がある場合は、最初から良いサーバーを選んでおくのがおすすめです。",
  },
  {
    question: "レンタルサーバーの契約期間はどれがお得ですか？",
    answer:
      "一般的に契約期間が長いほど月額料金が安くなります。36ヶ月契約が最安ですが、初めてなら12ヶ月契約がバランスが良くおすすめです。ConoHa WINGのWINGパックは最低3ヶ月から契約でき、ドメイン無料特典もあるので試しやすいです。",
  },
];

export default function RentalServerComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "レンタルサーバー比較おすすめ5選",
            url: `${siteConfig.url}/guide/rental-server-comparison`,
          },
        ]}
      />
      <FAQJsonLd
        items={faqItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
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
        <span>レンタルサーバー比較おすすめ5選</span>
      </nav>

      {/* PR Disclaimer */}
      <div className="text-xs text-muted mb-4 bg-card-bg border border-card-border rounded-lg px-3 py-2 inline-block">
        PR・広告を含みます
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            WordPress
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】レンタルサーバー比較おすすめ5選｜料金・速度・WordPress対応を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「レンタルサーバーってどれを選べばいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめのレンタルサーバー5社（ConoHa
          WING・エックスサーバー・ロリポップ・mixhost・シンレンタルサーバー）を料金・表示速度・WordPress対応・ディスク容量・SSL対応で徹底比較。初心者の方にもわかりやすく、あなたに最適なサーバーの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：迷ったらこれ!</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              初心者・総合力で選ぶなら → ConoHa WING
            </span>
            （速度最速クラス・ドメイン2つ無料・WordPress簡単セットアップ）
          </p>
          <p>
            <span className="font-bold text-orange-700 dark:text-orange-300">
              安定性・実績重視なら → エックスサーバー
            </span>
            （国内シェアNo.1・20年以上の運営実績）
          </p>
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              とにかく安く始めたいなら → ロリポップ!
            </span>
            （月額220円〜・ハイスピードプランならLiteSpeed搭載）
          </p>
        </div>
        <div className="mt-4">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            ConoHa WINGを公式サイトで見る
          </a>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-server" className="text-primary hover:underline">
              1. レンタルサーバーはなぜ必要？
            </a>
          </li>
          <li>
            <a
              href="#comparison-table"
              className="text-primary hover:underline"
            >
              2. レンタルサーバー5社の料金・スペック比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各サーバーの詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 目的別おすすめサーバー
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              5. レンタルサーバーの選び方5つのポイント
            </a>
          </li>
          <li>
            <a href="#wordpress-setup" className="text-primary hover:underline">
              6. WordPressブログの始め方（簡単3ステップ）
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              7. よくある質問（FAQ）
            </a>
          </li>
          <li>
            <a href="#summary" className="text-primary hover:underline">
              8. まとめ
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 - Why Server */}
      <section id="why-server" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. レンタルサーバーはなぜ必要？
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          ブログやWebサイトを公開するには、サイトのデータを保管・配信するサーバーが必要です。レンタルサーバーを利用すれば、自分でサーバーを構築・管理する必要がなく、月額数百円で手軽にサイト運営を始められます。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128221;",
              title: "WordPressブログ・アフィリエイトサイトの運営",
              desc: "WordPressを使ったブログやアフィリエイトサイトを運営するには、レンタルサーバーが必須です。独自ドメインと組み合わせることで、プロフェッショナルなサイトを構築できます。",
            },
            {
              icon: "&#9889;",
              title: "表示速度がSEO・収益に直結",
              desc: "Googleは表示速度を検索順位の要因にしています。高速なサーバーを選ぶことで、検索順位の向上とユーザー離脱率の低減が期待でき、収益アップにつながります。",
            },
            {
              icon: "&#128274;",
              title: "SSL対応でサイトの信頼性を確保",
              desc: "SSL（https化）に対応したサーバーを選ぶことで、ユーザーの個人情報を保護し、ブラウザの警告表示を防げます。Google検索でも有利に働きます。",
            },
            {
              icon: "&#128200;",
              title: "アクセス増加にも対応できるスケーラビリティ",
              desc: "サイトの成長に合わせてプランをアップグレードできるサーバーを選ぶことで、急なアクセス増加にも柔軟に対応できます。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <h3 className="font-bold text-sm mb-1">
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />{" "}
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mid CTA */}
      <div className="bg-card-bg border-2 border-primary/30 rounded-xl p-5 mb-10 text-center">
        <p className="text-sm font-bold mb-3">
          WordPressブログを最短10分で始めたい方へ
        </p>
        <a
          href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          ConoHa WINGでブログを始める
        </a>
        <p className="text-xs text-muted mt-2">
          WINGパックならドメイン2つ永久無料
        </p>
      </div>

      {/* Section 2 - Comparison Table */}
      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. レンタルサーバー5社の料金・スペック比較表
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          まずは5社の主要スペックを一覧で比較してみましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">
                  項目
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">
                    ConoHa WING
                  </span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-orange-600 dark:text-orange-400">
                    エックスサーバー
                  </span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">
                    ロリポップ!
                  </span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">
                    mixhost
                  </span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">
                    シンレンタル
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "月額料金（36ヶ月）",
                  conoha: "652円〜",
                  xserver: "693円〜",
                  lolipop: "550円〜",
                  mixhost: "968円〜",
                  shin: "539円〜",
                },
                {
                  label: "月額料金（12ヶ月）",
                  conoha: "941円〜",
                  xserver: "1,100円〜",
                  lolipop: "550円〜",
                  mixhost: "1,518円〜",
                  shin: "880円〜",
                },
                {
                  label: "初期費用",
                  conoha: "無料",
                  xserver: "無料",
                  lolipop: "無料",
                  mixhost: "無料",
                  shin: "無料",
                },
                {
                  label: "ディスク容量",
                  conoha: "SSD 300GB",
                  xserver: "NVMe 300GB",
                  lolipop: "SSD 400GB",
                  mixhost: "NVMe 無制限",
                  shin: "NVMe 300GB",
                },
                {
                  label: "表示速度",
                  conoha: "国内最速クラス",
                  xserver: "高速",
                  lolipop: "高速",
                  mixhost: "高速",
                  shin: "超高速",
                },
                {
                  label: "WordPress",
                  conoha: "簡単セットアップ",
                  xserver: "簡単インストール",
                  lolipop: "簡単インストール",
                  mixhost: "自動インストール",
                  shin: "簡単インストール",
                },
                {
                  label: "無料SSL",
                  conoha: "対応",
                  xserver: "対応",
                  lolipop: "対応",
                  mixhost: "対応",
                  shin: "対応",
                },
                {
                  label: "無料ドメイン",
                  conoha: "2つ永久無料",
                  xserver: "1つ永久無料",
                  lolipop: "2つ無料",
                  mixhost: "1つ永久無料",
                  shin: "1つ永久無料",
                },
                {
                  label: "転送量",
                  conoha: "無制限",
                  xserver: "無制限",
                  lolipop: "無制限",
                  mixhost: "無制限",
                  shin: "無制限",
                },
                {
                  label: "自動バックアップ",
                  conoha: "14日間（無料）",
                  xserver: "14日間（無料）",
                  lolipop: "有料（月330円）",
                  mixhost: "14日間（無料）",
                  shin: "14日間（無料）",
                },
                {
                  label: "サポート",
                  conoha: "電話・メール・チャット",
                  xserver: "電話・メール・チャット",
                  lolipop: "電話・メール・チャット",
                  mixhost: "メール",
                  shin: "メール",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg whitespace-nowrap">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">
                    {row.conoha}
                  </td>
                  <td className="border border-card-border p-3">
                    {row.xserver}
                  </td>
                  <td className="border border-card-border p-3">
                    {row.lolipop}
                  </td>
                  <td className="border border-card-border p-3">
                    {row.mixhost}
                  </td>
                  <td className="border border-card-border p-3">{row.shin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※
          料金は2026年4月時点の情報です。キャンペーンにより変動する場合があります。ロリポップの料金はハイスピードプラン基準です。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各サーバーの詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {serverServices.map((server, index) => (
            <div
              key={server.name}
              id={`server-${index + 1}`}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}位
                </span>
                <h3 className="text-xl font-bold">{server.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[server.color]}`}
                >
                  {server.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">月額料金</span>
                  <span className="font-bold">{server.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">ディスク容量</span>
                  <span className="font-bold">{server.disk}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">表示速度</span>
                  <span className="font-bold">{server.speed}</span>
                </div>
              </div>

              {/* Pricing Detail */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">料金プラン</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                  <div className="bg-background rounded-lg p-3 text-center">
                    <span className="text-muted block text-xs mb-1">
                      1ヶ月
                    </span>
                    <span>{server.monthlyPrice}</span>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <span className="text-muted block text-xs mb-1">
                      12ヶ月契約
                    </span>
                    <span>{server.yearlyPrice}</span>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20">
                    <span className="text-primary block text-xs mb-1 font-bold">
                      36ヶ月契約（最安）
                    </span>
                    <span className="font-bold">{server.longTermPrice}</span>
                  </div>
                </div>
              </div>

              {/* Additional Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 text-xs">
                <div className="bg-background rounded-lg p-2 text-center">
                  <span className="text-muted block mb-0.5">WordPress</span>
                  <span className="font-medium">{server.wordpress}</span>
                </div>
                <div className="bg-background rounded-lg p-2 text-center">
                  <span className="text-muted block mb-0.5">SSL</span>
                  <span className="font-medium">{server.ssl}</span>
                </div>
                <div className="bg-background rounded-lg p-2 text-center">
                  <span className="text-muted block mb-0.5">
                    無料ドメイン
                  </span>
                  <span className="font-medium">{server.domains}</span>
                </div>
                <div className="bg-background rounded-lg p-2 text-center">
                  <span className="text-muted block mb-0.5">転送量</span>
                  <span className="font-medium">{server.transfer}</span>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-800 dark:text-slate-100">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {server.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {server.pros.map((p) => (
                    <li
                      key={p}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-green-500 mt-0.5">&#9675;</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2 text-red-600 dark:text-red-400">
                  デメリット
                </h4>
                <ul className="space-y-1">
                  {server.cons.map((c) => (
                    <li
                      key={c}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-red-500 mt-0.5">&#9651;</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href={server.url}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {server.name}の公式サイトを見る
                </a>
                {server.reward && (
                  <p className="text-xs text-muted mt-2">
                    初期費用0円・独自ドメイン無料
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mid CTA Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/20 dark:to-orange-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-10">
        <h3 className="text-lg font-bold mb-2 text-center">
          迷ったらConoHa WINGがおすすめ!
        </h3>
        <p className="text-sm text-muted text-center mb-4">
          表示速度・コスパ・使いやすさのバランスが最も良く、初心者からベテランまで幅広く支持されています。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            ConoHa WINGを試す
          </a>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors"
          >
            エックスサーバーを試す
          </a>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1AFTYQ+348+5YZ76"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            ロリポップを試す
          </a>
        </div>
      </div>

      {/* Section 4 - Use Case Recommendations */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 目的別おすすめサーバー
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "WordPressブログを最短で開設したい",
              server: "ConoHa WING",
              reason:
                "「WordPressかんたんセットアップ」機能で、サーバー契約・ドメイン取得・WordPress設置・SSL設定まで最短10分で完了。初心者でも迷わずブログを始められます。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
            },
            {
              scene: "長期運用で安定性を重視したい",
              server: "エックスサーバー",
              reason:
                "国内シェアNo.1で20年以上の運営実績。稼働率99.99%の安定性と24時間365日のサポート体制で、法人サイトやメディアの長期運用に最適です。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
            },
            {
              scene: "とにかく初期費用を抑えたい",
              server: "ロリポップ!",
              reason:
                "月額220円〜と業界最安クラス。ハイスピードプランでもたった月額550円でLiteSpeed搭載の高速サーバーが使えます。10日間の無料お試しもあるので安心です。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1AFTYQ+348+5YZ76",
            },
            {
              scene: "大量の画像・動画を扱うサイトを作りたい",
              server: "mixhost",
              reason:
                "ディスク容量無制限で大量のメディアファイルも安心。LiteSpeed採用で高速表示も実現。アダルトコンテンツにも対応した数少ないサーバーです。",
              url: "https://mixhost.jp/",
            },
            {
              scene: "高速表示をコスパよく実現したい",
              server: "シンレンタルサーバー",
              reason:
                "エックスサーバーの技術基盤に最新ハードウェアを組み合わせ、月額539円〜で超高速環境を提供。KUSANAGI技術でWordPressも高速に動作します。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1F7ASY+5GDG+5ZMCJ",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.server}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {item.reason}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                {item.server}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. レンタルサーバーの選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "表示速度（サーバー性能）",
              desc: "表示速度はSEOとユーザー体験に直結します。WEXAL（ConoHa）やKUSANAGI（エックスサーバー・シンレンタル）、LiteSpeed（ロリポップ・mixhost）など高速化技術を導入しているサーバーがおすすめです。",
            },
            {
              num: "2",
              title: "WordPress対応・簡単インストール",
              desc: "WordPressブログを作るなら、簡単インストール機能は必須です。特にConoHa WINGの「かんたんセットアップ」は契約と同時にWordPressが設置され、最短10分で始められます。",
            },
            {
              num: "3",
              title: "料金・コスパ",
              desc: "長期契約ほど月額が安くなります。初期費用が無料かどうか、独自ドメインが無料で付くかもチェック。ConoHa WINGはドメイン2つ無料で総合コスパが高いです。",
            },
            {
              num: "4",
              title: "サポート体制",
              desc: "初心者は電話サポートがあると安心です。ConoHa WINGとエックスサーバーは電話・メール・チャットの3種類に対応。mixhostとシンレンタルはメールのみなので注意。",
            },
            {
              num: "5",
              title: "安定性・稼働率",
              desc: "サーバーがダウンするとサイトが表示されなくなり、SEOにも悪影響。エックスサーバーは稼働率99.99%を誇り、安定性では業界トップクラスです。",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 - WordPress Setup */}
      <section id="wordpress-setup" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. WordPressブログの始め方（簡単3ステップ）
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          ConoHa
          WINGの「WordPressかんたんセットアップ」を使えば、たった3ステップでブログを開設できます。
        </p>
        <div className="space-y-4">
          {[
            {
              step: "STEP 1",
              title: "ConoHa WINGに申し込む",
              desc: "公式サイトからWINGパックを選択し、契約期間・プランを決めます。12ヶ月以上の契約で独自ドメインが2つ無料になります。メールアドレスとパスワードだけで簡単に登録できます。",
            },
            {
              step: "STEP 2",
              title: "WordPressかんたんセットアップを実行",
              desc: "契約画面でそのままWordPressのセットアップが可能。サイト名・ユーザー名・パスワードを入力するだけで、ドメイン取得・WordPress設置・SSL設定まで自動で完了します。",
            },
            {
              step: "STEP 3",
              title: "ブログの初期設定をして記事を書き始める",
              desc: "WordPress管理画面にログインし、テーマの選択・パーマリンク設定・プラグインの導入を行えば準備完了。あとは記事を書いて公開するだけです。",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            ConoHa WINGでWordPressブログを始める
          </a>
          <p className="text-xs text-muted mt-2">
            最短10分でブログ開設・ドメイン2つ永久無料
          </p>
        </div>
      </section>

      {/* Section 7 - FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. よくある質問（FAQ）</h2>
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

      {/* Section 8 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            レンタルサーバーはWordPressブログやWebサイト運営の基盤となる重要なサービスです。この記事で比較した5社は、いずれも信頼性が高く初心者でも安心して使えるサーバーです。迷ったら以下を参考にしてください。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0 whitespace-nowrap">
                ConoHa WING
              </span>
              <span className="text-sm text-muted">
                →
                総合No.1。速度・コスパ・使いやすさのバランスが最も良く、初心者に最もおすすめ。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <span className="font-bold text-orange-700 dark:text-orange-300 flex-shrink-0 whitespace-nowrap">
                エックスサーバー
              </span>
              <span className="text-sm text-muted">
                →
                安定性No.1。国内シェアトップの実績と充実のサポートで長期運用に最適。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0 whitespace-nowrap">
                ロリポップ!
              </span>
              <span className="text-sm text-muted">
                →
                最安値。月額220円〜で始められ、ハイスピードプランなら高速サーバーも月額550円。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0 whitespace-nowrap">
                mixhost
              </span>
              <span className="text-sm text-muted">
                →
                大容量・高機能。ディスク無制限で大規模サイトに最適。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <span className="font-bold text-red-700 dark:text-red-300 flex-shrink-0 whitespace-nowrap">
                シンレンタル
              </span>
              <span className="text-sm text-muted">
                →
                高速・低価格。エックスサーバーの技術力を月額539円〜で利用可能。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            まずはConoHa
            WINGで始めてみるのが最もおすすめです。WordPressかんたんセットアップで最短10分でブログを開設でき、ドメイン2つも永久無料で付いてきます。
          </p>
        </div>
      </section>

      {/* Related Tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          サイト運営に役立つツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          SEO対策やサイト運営に役立つ無料ツールも用意しています。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tools/password-generator"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            パスワード生成ツールを使う
          </Link>
          <Link
            href="/guide/side-business-tools"
            className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            副業ツール完全ガイドも見る
          </Link>
        </div>
      </section>

      {/* Comparison Table CTA */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">おすすめサーバー比較表</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "ConoHa WING",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
              highlight: "国内最速・確定率94%",
              price: "月687円〜",
              badge: "おすすめ",
            },
            {
              name: "エックスサーバー",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
              highlight: "20年以上の安定実績",
              price: "月990円〜",
              badge: "定番",
            },
            {
              name: "ロリポップ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1AFTYQ+348+5YZ76",
              highlight: "初心者向け低価格",
              price: "月99円〜",
            },
            {
              name: "シンレンタルサーバー",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1F7ASY+5GDG+5ZMCJ",
              highlight: "エックスサーバー系・高速NVMe",
              price: "月770円〜",
            },
            {
              name: "お名前.comレンタルサーバー",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1823JM+50+354SDD",
              highlight: "ドメインとセットでお得",
              price: "月額制",
            },
            {
              name: "カラフルボックス",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1E0FLE+42SG+661TT",
              highlight: "アダルトOK・柔軟なプラン",
              price: "月528円〜",
            },
            {
              name: "ヘテムル",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1GZLMA+348+TWTFM",
              highlight: "クリエイター向け大容量",
              price: "月1,100円〜",
            },
            {
              name: "カゴヤ・ジャパン",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1HL182+7YE+674EQ",
              highlight: "老舗ホスティング事業者",
              price: "月額制",
            },
            {
              name: "さくらインターネット",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1DEZZM+D8Y+6R9PT",
              highlight: "国内老舗・安定のインフラ",
              price: "月131円〜",
            },
            {
              name: "ABLENETレンタルサーバー",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1I6GTU+4NIK+BXYE9",
              highlight: "VPSも選べる総合ホスティング",
              price: "月額制",
            },
          ]}
        />
      </section>

      {/* Final CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          ConoHa WINGでWordPressブログを始めよう
        </h2>
        <p className="text-sm text-muted mb-5">
          国内最速クラスの表示速度、WordPressかんたんセットアップ、独自ドメイン2つ永久無料。初心者に最もおすすめのレンタルサーバーです。月額652円〜で始められます。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            ConoHa WING公式サイトへ
          </a>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block border border-card-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            エックスサーバーを見る
          </a>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1AFTYQ+348+5YZ76"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block border border-card-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            ロリポップを見る
          </a>
        </div>
        <p className="text-xs text-muted mt-4">
          ※ 本記事はアフィリエイトプログラムに参加しています。
        </p>
      </section>
    </div>
  );
}
