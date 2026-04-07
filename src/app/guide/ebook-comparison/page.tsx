import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { AffiliateCTA } from "@/components/AffiliateCTA";

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】電子書籍サービス比較おすすめ5選｜品揃え・料金・使いやすさを徹底解説",
    description:
      "2026年最新の電子書籍サービスを徹底比較。Kindle・楽天Kobo・BookLive!・ebookjapan・DMMブックスの品揃え・料金・キャンペーン・読み放題プラン・対応デバイスを詳しく解説。",
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
    mainEntityOfPage: `${siteConfig.url}/guide/ebook-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const ebookServices = [
  {
    name: "Kindle（Amazon）",
    provider: "Amazon",
    price: "1冊ずつ購入 / Kindle Unlimited 980円/月",
    plan: "個別購入 / Kindle Unlimited（読み放題）",
    catalog: "700万冊以上（和書・洋書合計）",
    catalogDetail: "和書は約60万冊以上。洋書を含めると700万冊以上で業界最大級の品揃え",
    campaign: "日替わりセール、月替わりセール、Kindle Unlimited初回無料体験",
    campaignDetail: "日替わりセール（最大70%OFF）、月替わりセール、プライムデーや年末年始の大型セール。Kindle Unlimited初回30日間無料",
    unlimited: "Kindle Unlimited 月額980円（200万冊以上読み放題）",
    device: "Kindle端末 / iOS / Android / PC / Mac / Fire タブレット",
    pros: [
      "品揃えが業界最大級（700万冊以上）",
      "Kindle Unlimited（月額980円）で200万冊以上が読み放題",
      "日替わり・月替わりセールで安く購入できる",
      "Kindle端末で目に優しい読書体験",
      "Whispersync機能で複数端末間の同期がシームレス",
      "Prime Reading（Prime会員特典）で数百冊が無料",
    ],
    cons: [
      "Kindle独自フォーマットで他社サービスに移行しにくい",
      "アプリ内から直接購入できない（iOS）",
      "クーポンやポイント還元は他社より控えめ",
    ],
    bestFor:
      "豊富な品揃えと読み放題を両立したい方に最適。Kindle Unlimitedは200万冊以上が月額980円で読み放題、Prime会員ならPrime Readingも使えます。",
    url: "https://www.amazon.co.jp/kindle-dbs/hz/subscribe/ku",
    badge: "品揃え最大",
    color: "blue",
  },
  {
    name: "楽天Kobo",
    provider: "楽天グループ",
    price: "1冊ずつ購入 / 楽天ポイント利用可",
    plan: "個別購入（楽天ポイント対応）",
    catalog: "400万冊以上（和書・洋書合計）",
    catalogDetail: "和書は約100万冊以上。洋書を含めると400万冊以上。楽天ブックスと連携",
    campaign: "毎週クーポン配布、楽天スーパーSALE、お買い物マラソン対象",
    campaignDetail: "毎週金曜〜日曜に最大20%OFFクーポン、楽天スーパーSALE時は最大50%OFF。SPU対象でポイント倍率アップ",
    unlimited: "なし（読み放題プランは提供なし）",
    device: "Kobo端末 / iOS / Android / PC / Mac",
    pros: [
      "楽天ポイントが貯まる・使えるので楽天経済圏ユーザーに最適",
      "毎週のクーポン配布で実質的な割引率が高い",
      "楽天スーパーSALEやお買い物マラソンの対象でポイント大量獲得",
      "SPU対象で楽天市場のポイント倍率もアップ",
      "Kobo端末は防水対応モデルもあり",
      "和書の品揃えが充実",
    ],
    cons: [
      "読み放題プランがない",
      "Kindle Unlimitedのような定額読み放題には非対応",
      "アプリのUIがKindleに比べやや劣る",
    ],
    bestFor:
      "楽天経済圏の方に最適。楽天ポイントで電子書籍を購入でき、さらにSPUでポイント倍率アップ。毎週のクーポンも含めると実質的な割引率は業界トップクラスです。",
    url: "https://books.rakuten.co.jp/e-book/",
    badge: "楽天ポイント最強",
    color: "pink",
  },
  {
    name: "BookLive!",
    provider: "BookLive Co., Ltd.",
    price: "1冊ずつ購入 / クーポンで大幅割引",
    plan: "個別購入（初回50%OFFクーポンあり）",
    catalog: "150万冊以上",
    catalogDetail: "マンガ・ライトノベル・小説・ビジネス書など150万冊以上。特にマンガの品揃えが充実",
    campaign: "初回50%OFFクーポン、毎日クーポンガチャ、来店ポイント",
    campaignDetail: "新規登録で50%OFFクーポン。毎日引けるクーポンガチャで最大50%OFF。毎日の来店でポイント付与",
    unlimited: "読み放題プラン（マンガ中心・月額780円〜）",
    device: "iOS / Android / PC / Mac / ブラウザ",
    pros: [
      "初回登録で50%OFFクーポンがもらえる",
      "毎日のクーポンガチャで最大50%OFFクーポンが当たる",
      "Tポイントが貯まる・使える",
      "マンガの品揃えとレコメンド機能が優秀",
      "来店ポイントで毎日ポイントが貯まる",
      "ブラウザでも読めるのでアプリ不要",
    ],
    cons: [
      "品揃え総数はKindleや楽天Koboより少ない",
      "専用端末がない",
      "読み放題プランの対象冊数がKindle Unlimitedより少ない",
    ],
    bestFor:
      "マンガをお得に読みたい方に最適。初回50%OFFクーポンに加え、毎日のクーポンガチャとポイントで継続的にお得に購入できます。",
    url: "https://booklive.jp/",
    badge: "クーポン充実",
    color: "green",
  },
  {
    name: "ebookjapan",
    provider: "Yahoo! Japan / LINE Digital Frontier",
    price: "1冊ずつ購入 / 初回70%OFFクーポン",
    plan: "個別購入（初回70%OFFクーポンあり）",
    catalog: "100万冊以上",
    catalogDetail: "マンガを中心に100万冊以上。特にマンガの品揃えと背表紙表示が人気",
    campaign: "初回70%OFFクーポン（6回使える）、毎週金曜PayPay還元最大30%",
    campaignDetail: "新規登録で70%OFFクーポン（上限500円×6回）。毎週金曜日はPayPayポイント最大30%還元。曜日ごとのキャンペーンも",
    unlimited: "なし",
    device: "iOS / Android / PC / Mac / ブラウザ",
    pros: [
      "初回70%OFFクーポンが6回使える（最大3,000円お得）",
      "毎週金曜日はPayPayポイント最大30%還元",
      "マンガの背表紙表示機能で本棚感覚で管理できる",
      "曜日ごとのキャンペーンでいつでもお得",
      "PayPayポイントが貯まる・使える",
      "無料で読めるマンガが10,000冊以上",
    ],
    cons: [
      "品揃え総数はKindleや楽天Koboより少ない",
      "マンガ以外のジャンルはやや弱い",
      "専用端末がない",
    ],
    bestFor:
      "マンガ好きでPayPayユーザーの方に最適。初回70%OFFクーポン（6回分）と毎週金曜のPayPay還元で、マンガを最もお得に購入できるサービスです。",
    url: "https://ebookjapan.yahoo.co.jp/",
    badge: "マンガ最安",
    color: "red",
  },
  {
    name: "DMMブックス",
    provider: "DMM.com",
    price: "1冊ずつ購入 / 初回90%OFFクーポン",
    plan: "個別購入（初回90%OFFクーポンあり）",
    catalog: "98万冊以上",
    catalogDetail: "マンガ・ライトノベル・小説・写真集・BLなど98万冊以上。独自ジャンルの品揃えが豊富",
    campaign: "初回90%OFFクーポン（上限2,000円）、定期的なスーパーセール",
    campaignDetail: "新規登録で90%OFFクーポン（上限2,000円）。年数回のスーパーセールで最大50%ポイント還元。DMMポイント利用可能",
    unlimited: "なし",
    device: "iOS / Android / PC / Mac / ブラウザ",
    pros: [
      "初回90%OFFクーポンが最大2,000円割引で業界最高の初回特典",
      "DMMスーパーセールで最大50%ポイント還元",
      "DMMポイントが貯まり他のDMMサービスでも使える",
      "独自ジャンル（BL・TL・写真集等）の品揃えが充実",
      "ブラウザでも快適に読める",
      "年齢確認済みアカウントで全ジャンル利用可能",
    ],
    cons: [
      "品揃え総数はKindleや楽天Koboより少ない",
      "専用端末がない",
      "一般書籍の品揃えはやや少なめ",
    ],
    bestFor:
      "初回の大幅割引を活用してまとめ買いしたい方に最適。90%OFFクーポンで初回購入が最もお得。DMMの他サービスも利用している方にもおすすめです。",
    url: "https://book.dmm.com/",
    badge: "初回90%OFF",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

const faqItems = [
  {
    question: "電子書籍と紙の本、どちらがいいですか？",
    answer:
      "電子書籍は「いつでもどこでも読める」「場所を取らない」「セール・クーポンで安く買える」メリットがあります。紙の本は「目が疲れにくい」「所有感がある」「貸し借りしやすい」メリットがあります。マンガや軽い読書は電子書籍、じっくり読みたい本は紙の本と使い分けるのもおすすめです。",
  },
  {
    question: "電子書籍はサービス終了したら読めなくなりますか？",
    answer:
      "理論上はサービス終了時に読めなくなるリスクがあります。ただし、今回紹介した5社は大手企業が運営しており、すぐにサービス終了する可能性は低いです。過去のサービス終了事例では、他社への移行措置やポイント還元が行われたケースがほとんどです。",
  },
  {
    question: "電子書籍を最も安く買う方法は？",
    answer:
      "初回ならDMMブックス（90%OFF）やebookjapan（70%OFF×6回）の初回クーポンが最もお得です。継続的に安く買うなら、楽天Koboの毎週クーポン＋楽天ポイント、ebookjapanの金曜PayPay還元が効果的。大量に読むならKindle Unlimited（月額980円読み放題）も検討しましょう。",
  },
  {
    question: "読み放題プランはお得ですか？",
    answer:
      "月に2〜3冊以上読むなら、Kindle Unlimited（月額980円）は十分にお得です。200万冊以上が対象で、ビジネス書・小説・マンガ・雑誌と幅広いジャンルが読めます。まずは30日間の無料体験で試してみることをおすすめします。",
  },
  {
    question: "電子書籍リーダー（専用端末）は必要ですか？",
    answer:
      "必須ではありません。スマホやタブレットのアプリで十分快適に読めます。ただし、読書量が多い方はKindle端末やKobo端末がおすすめです。E-Inkディスプレイで目が疲れにくく、バッテリーも数週間持ちます。",
  },
  {
    question: "複数の電子書籍サービスを併用してもいいですか？",
    answer:
      "はい、問題ありません。むしろ複数サービスを使い分けるのがお得です。読み放題はKindle Unlimited、マンガはebookjapan（金曜PayPay還元）、楽天経済圏の方は楽天Kobo、初回は DMMブックスの90%OFFクーポンなど、目的別に使い分けましょう。",
  },
  {
    question: "電子書籍のセールはいつが狙い目ですか？",
    answer:
      "Kindleは年末年始・プライムデー（7月）・ブラックフライデー（11月）が大型セール。楽天Koboは3月・6月・9月・12月の楽天スーパーSALE。ebookjapanは毎週金曜のPayPay還元が定期的に狙い目です。各サービスのメルマガやアプリ通知を設定しておくとセール情報を見逃しません。",
  },
];

export default function EbookComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "電子書籍サービス比較おすすめ5選",
            url: `${siteConfig.url}/guide/ebook-comparison`,
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
        <span>電子書籍サービス比較おすすめ5選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            電子書籍
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】電子書籍サービス比較おすすめ5選｜品揃え・料金・使いやすさを徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「電子書籍を始めたいけど、どのサービスがいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめの電子書籍サービス5社（Kindle・楽天Kobo・BookLive!・ebookjapan・DMMブックス）を品揃え・料金・キャンペーン・読み放題プラン・対応デバイス・使いやすさで徹底比較します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              品揃え重視・読み放題 → Kindle
            </span>
            （700万冊＋Unlimited月額980円）
          </p>
          <p>
            <span className="font-bold text-pink-700 dark:text-pink-300">
              楽天経済圏でお得に → 楽天Kobo
            </span>
            （ポイント＋毎週クーポン）
          </p>
          <p>
            <span className="font-bold text-red-700 dark:text-red-300">
              マンガをPayPayで安く → ebookjapan
            </span>
            （初回70%OFF＋金曜30%還元）
          </p>
          <p>
            <span className="font-bold text-purple-700 dark:text-purple-300">
              初回まとめ買い → DMMブックス
            </span>
            （業界最高の初回90%OFF）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-ebook" className="text-primary hover:underline">
              1. 電子書籍のメリット
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. 5社の品揃え・料金比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各社の詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 利用タイプ別おすすめ電子書籍サービス
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              5. 電子書籍サービスの選び方5つのポイント
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              6. よくある質問（FAQ）
            </a>
          </li>
          <li>
            <a href="#summary" className="text-primary hover:underline">
              7. まとめ
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 - Why eBook */}
      <section id="why-ebook" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. 電子書籍のメリット
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          電子書籍は、スマホやタブレットでいつでもどこでも読書を楽しめる便利なサービスです。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128218;",
              title: "いつでもどこでも読める",
              desc: "スマホがあれば通勤中・休憩中・寝る前など、場所を選ばず読書できます。数千冊の本をポケットに入れて持ち歩けます。",
            },
            {
              icon: "&#128176;",
              title: "セール・クーポンで安く購入できる",
              desc: "電子書籍は紙の本より安いことが多く、さらにセールやクーポンで大幅割引も。初回クーポンで最大90%OFFのサービスもあります。",
            },
            {
              icon: "&#127968;",
              title: "場所を取らない",
              desc: "本棚のスペースは不要。数千冊の蔵書もクラウドに保存されるため、部屋がすっきりします。引っ越しの際も荷物が増えません。",
            },
            {
              icon: "&#128269;",
              title: "検索・マーカー機能が便利",
              desc: "本文検索、マーカー（ハイライト）、しおり機能で効率的に読書できます。ビジネス書や勉強用の本で特に便利です。",
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

      {/* Section 2 - Comparison Table */}
      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. 5社の品揃え・料金比較表
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
                  <span className="text-blue-600 dark:text-blue-400">Kindle</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-pink-600 dark:text-pink-400">楽天Kobo</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">BookLive!</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">ebookjapan</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">DMMブックス</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "品揃え",
                  kindle: "700万冊+",
                  kobo: "400万冊+",
                  booklive: "150万冊+",
                  ebookjapan: "100万冊+",
                  dmm: "98万冊+",
                },
                {
                  label: "初回特典",
                  kindle: "Unlimited無料体験",
                  kobo: "ポイント還元",
                  booklive: "50%OFF",
                  ebookjapan: "70%OFF×6回",
                  dmm: "90%OFF",
                },
                {
                  label: "読み放題",
                  kindle: "980円/月",
                  kobo: "なし",
                  booklive: "780円/月〜",
                  ebookjapan: "なし",
                  dmm: "なし",
                },
                {
                  label: "ポイント",
                  kindle: "Amazonポイント",
                  kobo: "楽天ポイント",
                  booklive: "Tポイント",
                  ebookjapan: "PayPayポイント",
                  dmm: "DMMポイント",
                },
                {
                  label: "専用端末",
                  kindle: "Kindle端末",
                  kobo: "Kobo端末",
                  booklive: "なし",
                  ebookjapan: "なし",
                  dmm: "なし",
                },
                {
                  label: "マンガ強い",
                  kindle: "普通",
                  kobo: "強い",
                  booklive: "強い",
                  ebookjapan: "非常に強い",
                  dmm: "強い",
                },
                {
                  label: "ブラウザ読書",
                  kindle: "対応",
                  kobo: "対応",
                  booklive: "対応",
                  ebookjapan: "対応",
                  dmm: "対応",
                },
                {
                  label: "無料作品",
                  kindle: "あり",
                  kobo: "あり",
                  booklive: "あり",
                  ebookjapan: "10,000冊+",
                  dmm: "あり",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.kindle}</td>
                  <td className="border border-card-border p-3">{row.kobo}</td>
                  <td className="border border-card-border p-3">{row.booklive}</td>
                  <td className="border border-card-border p-3">{row.ebookjapan}</td>
                  <td className="border border-card-border p-3">{row.dmm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 情報は2026年4月時点のものです。キャンペーンにより変動する場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各社の詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {ebookServices.map((ebook, index) => (
            <div
              key={ebook.name}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{ebook.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[ebook.color]}`}
                >
                  {ebook.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">品揃え</span>
                  <span className="font-bold">{ebook.catalog}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">料金</span>
                  <span className="font-bold">{ebook.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">対応デバイス</span>
                  <span className="font-bold">{ebook.device}</span>
                </div>
              </div>

              {/* Plan Detail */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">サービス詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">品揃え：</span>{ebook.catalogDetail}</p>
                  <p className="text-muted mb-1"><span className="font-medium">キャンペーン：</span>{ebook.campaignDetail}</p>
                  <p className="text-muted"><span className="font-medium">読み放題：</span>{ebook.unlimited}</p>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {ebook.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {ebook.pros.map((p) => (
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
                  {ebook.cons.map((c) => (
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
                  href={ebook.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {ebook.name.split("（")[0]}の公式サイトを見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Case Recommendations */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 利用タイプ別おすすめ電子書籍サービス
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "たくさん読むから読み放題で済ませたい",
              ebook: "Kindle（Kindle Unlimited）",
              reason:
                "月額980円で200万冊以上が読み放題。ビジネス書・小説・マンガ・雑誌と幅広いジャンルが対象。月に2〜3冊読むなら元が取れます。30日間無料体験から始められます。",
              url: "https://www.amazon.co.jp/kindle-dbs/hz/subscribe/ku",
            },
            {
              scene: "楽天ポイントを活用してお得に買いたい",
              ebook: "楽天Kobo",
              reason:
                "楽天ポイントで電子書籍を購入でき、購入でもポイントが貯まります。毎週のクーポンやスーパーSALEを活用すれば、実質的な割引率は業界トップクラスです。",
              url: "https://books.rakuten.co.jp/e-book/",
            },
            {
              scene: "マンガをとにかく安く大量に買いたい",
              ebook: "ebookjapan",
              reason:
                "初回70%OFFクーポン（6回使える）で最大3,000円割引。さらに毎週金曜日はPayPayポイント最大30%還元。マンガの品揃えも充実で、まとめ買いに最適です。",
              url: "https://ebookjapan.yahoo.co.jp/",
            },
            {
              scene: "初回で一気にまとめ買いしたい",
              ebook: "DMMブックス",
              reason:
                "初回90%OFFクーポン（上限2,000円）は業界最高の初回特典。まとめ買いの一発目として最もお得なサービスです。DMMスーパーセールも見逃せません。",
              url: "https://book.dmm.com/",
            },
            {
              scene: "毎日コツコツお得に買いたい",
              ebook: "BookLive!",
              reason:
                "初回50%OFFクーポンに加え、毎日のクーポンガチャと来店ポイントで継続的にお得。マンガのレコメンド機能も優秀で、新しい作品との出会いも楽しめます。",
              url: "https://booklive.jp/",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.ebook}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {item.reason}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                {item.ebook.split("（")[0]}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. 電子書籍サービスの選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "読みたいジャンルの品揃えを確認する",
              desc: "マンガ中心ならebookjapan・BookLive!、幅広いジャンルを読むならKindle・楽天Koboがおすすめ。まずは読みたい本が各サービスにあるか検索してみましょう。",
            },
            {
              num: "2",
              title: "初回特典を最大限活用する",
              desc: "DMMブックス90%OFF、ebookjapan70%OFF×6回、BookLive!50%OFFなど、初回特典はどのサービスも魅力的。複数サービスの初回特典を順に使うのも賢い方法です。",
            },
            {
              num: "3",
              title: "普段使っているポイント経済圏で選ぶ",
              desc: "楽天ポイントなら楽天Kobo、PayPayポイントならebookjapan、DMMポイントならDMMブックスなど、普段貯めているポイントが使えるサービスを選ぶとお得です。",
            },
            {
              num: "4",
              title: "読み放題の必要性を考える",
              desc: "月に3冊以上読むならKindle Unlimited（月額980円）がコスパ最強。1〜2冊程度なら個別購入＋クーポン活用の方が安い場合もあります。",
            },
            {
              num: "5",
              title: "対応デバイスとアプリの使いやすさを確認する",
              desc: "専用端末で快適に読みたいならKindle端末やKobo端末。スマホのみならアプリのUIや使いやすさも重要。各サービスの無料作品でアプリの使い勝手を試してみましょう。",
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

      {/* Section 6 - FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. よくある質問（FAQ）</h2>
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

      {/* Section 7 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            電子書籍はセール・クーポンを活用すれば紙の本よりもはるかにお得に読書を楽しめます。複数サービスの初回特典を使い分けるのが最もお得な始め方です。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                Kindle
              </span>
              <span className="text-sm text-muted">
                → 品揃え700万冊最大。Unlimited月額980円で読み放題。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
              <span className="font-bold text-pink-700 dark:text-pink-300 flex-shrink-0">
                楽天Kobo
              </span>
              <span className="text-sm text-muted">
                → 楽天ポイント＋毎週クーポン。楽天経済圏ならこれ。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                BookLive!
              </span>
              <span className="text-sm text-muted">
                → 毎日クーポンガチャ＋来店ポイント。継続的にお得。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <span className="font-bold text-red-700 dark:text-red-300 flex-shrink-0">
                ebookjapan
              </span>
              <span className="text-sm text-muted">
                → 初回70%OFF×6回＋金曜PayPay30%。マンガ最安。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                DMMブックス
              </span>
              <span className="text-sm text-muted">
                → 初回90%OFF（上限2,000円）。まとめ買いの初手に。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            まずは各サービスの初回特典を活用して、自分に合ったサービスを見つけましょう。複数サービスの併用もおすすめです。
          </p>
        </div>
      </section>

      {/* Related Tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          便利ツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          文字数カウントやQRコード作成など、読書や日常に役立つ無料ツールも用意しています。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tools/character-counter"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            文字数カウントツールを使う
          </Link>
          <Link
            href="/guide"
            className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            他のガイド記事を見る
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          あなたに最適な電子書籍サービスを見つけよう
        </h2>
        <p className="text-sm text-muted mb-5">
          初回特典はどのサービスも魅力的。まずは気になるサービスの初回クーポンを使って、お得に電子書籍デビューしましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://www.amazon.co.jp/kindle-dbs/hz/subscribe/ku"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Kindle
          </a>
          <a
            href="https://books.rakuten.co.jp/e-book/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-pink-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-pink-700 transition-colors"
          >
            楽天Kobo
          </a>
          <a
            href="https://booklive.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            BookLive!
          </a>
          <a
            href="https://ebookjapan.yahoo.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            ebookjapan
          </a>
          <a
            href="https://book.dmm.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            DMMブックス
          </a>
        </div>
      </section>

      {/* Affiliate CTAs */}
      <div className="space-y-6 my-8">
        <h3 className="text-xl font-bold text-center">おすすめ電子書籍ストア</h3>
        <AffiliateCTA serviceName="Renta!" url="https://renta.papy.co.jp/" badge="レンタル" description="お得なレンタル作品多数・漫画読むならRenta!" color="red" />
        <AffiliateCTA serviceName="BOOK☆WALKER" url="https://bookwalker.jp/" badge="角川系" description="KADOKAWA直営・ライトノベル充実" color="purple" />
        <AffiliateCTA serviceName="楽天Kobo" url="https://af.moshimo.com/af/c/click?a_id=5465446&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fbooks.rakuten.co.jp%2F" badge="楽天ポイント" description="楽天ポイントが貯まる・使える電子書籍ストア" color="red" />
      </div>
    </div>
  );
}
