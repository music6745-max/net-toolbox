import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

export const metadata: Metadata = {
  title: "ネット保険おすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "保険料が高い・内容がよく分からない方へ。ライフネット生命・SBI生命・アクサダイレクト・チューリッヒ・オリックス生命を保険料/保障/特約で徹底比較し最適な1社を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/insurance-comparison` },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】ネット保険比較おすすめ5選｜生命保険・医療保険・がん保険を徹底解説",
    description:
      "2026年最新のネット保険を徹底比較。ライフネット生命・SBI生命・アクサダイレクト生命・チューリッヒ生命・オリックス生命の保険料・保障内容・メリット・デメリットを詳しく解説。",
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
    mainEntityOfPage: `${siteConfig.url}/guide/insurance-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const insuranceServices = [
  {
    name: "ライフネット生命",
    type: "ネット専業生命保険",
    price: "定期死亡保険 月額798円〜（30歳男性・500万円）",
    products: "定期死亡保険「かぞくへの保険」、医療保険「じぶんへの保険3」、がん保険「ダブルエール」",
    feature: "ネット専業の生命保険会社、保険料が安い、申込みはネットで完結",
    pros: [
      "保険料が業界最安クラス",
      "ネットで完結（申込み・見積もり・解約まで）",
      "保険料の内訳を公開しており透明性が高い",
      "解約もネットで簡単にできる",
    ],
    cons: [
      "対面相談ができない",
      "商品ラインナップが少なめ",
    ],
    bestFor:
      "とにかく保険料を安く抑えたい方、ネットで手続きを完結させたい方に最適。保険料の内訳を公開している透明性の高さも魅力です。",
    url: "https://www.lifenet-seimei.co.jp/",
    badge: "保険料の安さNo.1",
    color: "green",
  },
  {
    name: "SBI生命",
    type: "SBIグループ生命保険",
    price: "定期死亡保険 月額830円〜（30歳男性・500万円）",
    products: "定期死亡保険、終身医療保険、就業不能保険",
    feature: "SBIグループの保険会社、合理的な保険料設定",
    pros: [
      "SBIグループの信頼性と安定した経営基盤",
      "住信SBIネット銀行との連携で便利",
      "保険料が割安に設定されている",
    ],
    cons: [
      "商品ラインナップが少ない",
      "知名度がやや低い",
    ],
    bestFor:
      "SBIグループのサービスを利用している方、合理的な保険料で基本的な保障を確保したい方におすすめです。",
    url: "https://www.sbilife.co.jp/",
    badge: "SBIグループの安心",
    color: "blue",
  },
  {
    name: "アクサダイレクト生命",
    type: "外資系ダイレクト生命保険",
    price: "定期保険 月額850円〜（30歳男性・500万円）",
    products: "定期保険2、終身医療保険、がん終身保険、収入保障2",
    feature: "フランスのアクサグループ、ダイレクト（ネット）販売で割安",
    pros: [
      "世界的保険グループの信頼性と安心感",
      "カスタマーサポートが充実している",
      "保険料が合理的に設定されている",
    ],
    cons: [
      "対面窓口がない",
      "一部商品は取扱停止中の場合あり",
    ],
    bestFor:
      "世界的ブランドの安心感を重視する方、充実したサポートを求める方におすすめ。ダイレクト販売で保険料も合理的です。",
    url: "https://www.axa-direct-life.co.jp/",
    badge: "世界的ブランド",
    color: "purple",
  },
  {
    name: "チューリッヒ生命",
    type: "外資系生命保険",
    price: "終身医療保険 月額1,557円〜（30歳男性）",
    products: "終身医療保険プレミアムZ、終身がん治療保険プレミアムZ、定期保険プレミアムDX",
    feature: "スイスのチューリッヒグループ、医療保険・がん保険に定評",
    pros: [
      "医療保険の保障内容が業界トップクラスに充実",
      "先進医療特約が付帯できる",
      "ストレス性疾病にも対応している",
    ],
    cons: [
      "生命保険の商品は少なめ",
      "保険料は最安ではない",
    ],
    bestFor:
      "医療保険・がん保険の保障内容を重視する方に最適。先進医療やストレス性疾病への対応など、充実した保障が魅力です。",
    url: "https://www.zurichlife.co.jp/",
    badge: "医療保険に強い",
    color: "red",
  },
  {
    name: "オリックス生命",
    type: "ハイブリッド型生命保険",
    price: "医療保険 月額1,531円〜（30歳男性）",
    products: "医療保険 新CURE、がん保険 Believe、終身保険RISE、定期保険Bridge",
    feature: "対面＋ネットのハイブリッド販売、商品ラインナップが豊富",
    pros: [
      "商品ラインナップが豊富で選択肢が多い",
      "対面相談も可能で安心",
      "保険料と保障のバランスが良い",
    ],
    cons: [
      "ネット専業と比べるとやや割高",
      "申込み手続きがやや複雑",
    ],
    bestFor:
      "豊富な商品から自分に合った保険を選びたい方、対面でも相談したい方におすすめ。保険料と保障のバランスが取れています。",
    url: "https://www.orixlife.co.jp/",
    badge: "バランス型",
    color: "orange",
  },
];

const colorMap: Record<string, string> = {
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  orange:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
};

const faqItems = [
  {
    question: "ネット保険は安全ですか？大手と比べて経営は大丈夫？",
    answer:
      "ネット保険会社も金融庁の監督下にあり、通常の保険会社と同じ規制を受けています。また、万が一保険会社が破綻した場合でも、生命保険契約者保護機構により契約者は保護されます。ライフネット生命は東証上場企業、SBI生命はSBIグループ、アクサダイレクト生命は世界最大級の保険グループであるアクサグループに属しており、経営基盤は安定しています。",
  },
  {
    question: "ネット保険と対面販売の保険はどう違いますか？",
    answer:
      "最大の違いは販売方法と保険料です。ネット保険は人件費や店舗費用を抑えられるため、同等の保障内容でも保険料が安くなる傾向があります。一方、対面販売では担当者に相談しながら保険を選べるメリットがあります。保障内容自体に大きな差はありませんが、ネット保険は自分で商品を比較・選択する必要があります。",
  },
  {
    question: "ネット保険の解約方法は？簡単にできますか？",
    answer:
      "ネット保険の解約は各社のマイページ（会員サイト）からオンラインで手続きできます。ライフネット生命やSBI生命などはマイページから数分で解約手続きが完了します。解約返戻金がある場合は指定口座に振り込まれます。契約期間の縛りや解約違約金はありません。",
  },
  {
    question: "持病があってもネット保険に入れますか？",
    answer:
      "持病がある場合でも加入できる商品はあります。各社とも「引受基準緩和型」の保険商品を用意しており、通常の保険より告知項目が少ないのが特徴です。ただし保険料は通常の商品より割高になります。告知内容によって加入可否が決まるため、正確に告知することが重要です。",
  },
  {
    question: "ネット保険で十分な保障は得られますか？",
    answer:
      "はい、基本的な保障（死亡保障・医療保障・がん保障）は十分にカバーできます。定期死亡保険で家族への保障、医療保険で入院・手術の保障、がん保険でがん治療の保障をそれぞれ備えることができます。ただし、学資保険や個人年金保険など一部の貯蓄型商品はネット保険では取り扱いが少ない傾向があります。",
  },
  {
    question: "保険料の支払い方法は何がありますか？",
    answer:
      "主な支払い方法はクレジットカード払いと口座振替です。ライフネット生命・SBI生命・アクサダイレクト生命はクレジットカード払いと口座振替に対応しています。クレジットカード払いならポイントも貯まるのでお得です。年払いにすると月払いより保険料が割安になる場合もあります。",
  },
  {
    question: "ネット保険はどのように選べばよいですか？",
    answer:
      "まず必要な保障（死亡・医療・がん）を明確にし、その上で各社の保険料と保障内容を比較しましょう。保険料の安さを重視するならライフネット生命やSBI生命、医療保険の充実度ならチューリッヒ生命、商品の豊富さならオリックス生命がおすすめです。複数社から見積もりを取って比較することが大切です。",
  },
];

export default function InsuranceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <ItemListJsonLd
        name="ネット保険おすすめ比較"
        items={insuranceServices.map((s) => ({ name: s.name, url: s.url }))}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "ネット保険比較おすすめ5選",
            url: `${siteConfig.url}/guide/insurance-comparison`,
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
        <span>ネット保険比較おすすめ5選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
            保険
          </span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】ネット保険比較おすすめ5選｜生命保険・医療保険・がん保険を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「ネット保険って安いけど大丈夫？」「どの保険会社を選べばいい？」そんな疑問にお答えします。この記事では、2026年現在おすすめのネット保険5社（ライフネット生命・SBI生命・アクサダイレクト生命・チューリッヒ生命・オリックス生命）を保険料・保障内容・サポート体制で徹底比較。あなたに最適なネット保険の選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              保険料の安さ重視 → ライフネット生命
            </span>
            （業界最安クラス・ネットで完結）
          </p>
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              グループの信頼性重視 → SBI生命
            </span>
            （SBIグループ・合理的な保険料）
          </p>
          <p>
            <span className="font-bold text-red-700 dark:text-red-300">
              医療保険の充実度重視 → チューリッヒ生命
            </span>
            （先進医療・ストレス性疾病対応）
          </p>
          <p>
            <span className="font-bold text-orange-700 dark:text-orange-300">
              対面相談もしたい → オリックス生命
            </span>
            （ハイブリッド販売・豊富な商品）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-net-insurance" className="text-primary hover:underline">
              1. ネット保険を選ぶメリット
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. ネット保険 5社の保険料・保障比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各社の詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 目的別おすすめネット保険
            </a>
          </li>
          <li>
            <a href="#how-to-apply" className="text-primary hover:underline">
              5. ネット保険の申込み手順
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              6. ネット保険の選び方5つのポイント
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

      {/* Section 1 - Why Net Insurance */}
      <section id="why-net-insurance" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. ネット保険を選ぶメリット
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          従来の対面販売型の保険と比較して、ネット保険には多くのメリットがあります。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128176;",
              title: "保険料が大幅に安い",
              desc: "ネット保険は人件費・店舗費用を削減しているため、同等の保障内容でも保険料が2〜5割程度安くなります。30歳男性の定期死亡保険（500万円）なら月額800円前後から加入できます。",
            },
            {
              icon: "&#128187;",
              title: "24時間いつでも申込み・見積もり可能",
              desc: "ネットで完結するため、忙しい方でも深夜や休日に自分のペースで見積もり・比較・申込みができます。来店予約や営業担当との面談は不要です。",
            },
            {
              icon: "&#128269;",
              title: "自分で比較検討できる",
              desc: "営業担当のセールストークに左右されず、自分で各社の保険料や保障内容を比較して選べます。必要な保障だけを選んで無駄のない保険設計ができます。",
            },
            {
              icon: "&#128274;",
              title: "解約も簡単・契約の縛りなし",
              desc: "ネット保険はマイページから簡単に解約手続きが可能。解約違約金もなく、ライフステージの変化に合わせて柔軟に見直しができます。",
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
          2. ネット保険 5社の保険料・保障比較表
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
                  <span className="text-green-600 dark:text-green-400">ライフネット生命</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">SBI生命</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">アクサダイレクト</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">チューリッヒ</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-orange-600 dark:text-orange-400">オリックス</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "定期死亡保険",
                  lifenet: "月額798円〜",
                  sbi: "月額830円〜",
                  axa: "月額850円〜",
                  zurich: "取扱あり",
                  orix: "取扱あり",
                },
                {
                  label: "医療保険",
                  lifenet: "取扱あり",
                  sbi: "取扱あり",
                  axa: "取扱あり",
                  zurich: "月額1,557円〜",
                  orix: "月額1,531円〜",
                },
                {
                  label: "がん保険",
                  lifenet: "取扱あり",
                  sbi: "取扱なし",
                  axa: "取扱あり",
                  zurich: "取扱あり",
                  orix: "取扱あり",
                },
                {
                  label: "販売方式",
                  lifenet: "ネット専業",
                  sbi: "ネット中心",
                  axa: "ダイレクト",
                  zurich: "ダイレクト",
                  orix: "ハイブリッド",
                },
                {
                  label: "対面相談",
                  lifenet: "なし",
                  sbi: "なし",
                  axa: "なし",
                  zurich: "なし",
                  orix: "あり",
                },
                {
                  label: "商品数",
                  lifenet: "少なめ",
                  sbi: "少なめ",
                  axa: "普通",
                  zurich: "普通",
                  orix: "豊富",
                },
                {
                  label: "保険料水準",
                  lifenet: "最安クラス",
                  sbi: "割安",
                  axa: "合理的",
                  zurich: "普通",
                  orix: "やや高め",
                },
                {
                  label: "グループ",
                  lifenet: "独立系（上場）",
                  sbi: "SBIグループ",
                  axa: "アクサグループ",
                  zurich: "チューリッヒ",
                  orix: "オリックス",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.lifenet}</td>
                  <td className="border border-card-border p-3">{row.sbi}</td>
                  <td className="border border-card-border p-3">{row.axa}</td>
                  <td className="border border-card-border p-3">{row.zurich}</td>
                  <td className="border border-card-border p-3">{row.orix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※ 保険料は2026年4月時点の情報です。30歳男性の場合の目安金額を記載。実際の保険料は年齢・性別・保障内容により異なります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各社の詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {insuranceServices.map((ins, index) => (
            <div
              key={ins.name}
              id={`ins-${index + 1}`}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{ins.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[ins.color]}`}
                >
                  {ins.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">保険料目安</span>
                  <span className="font-bold">{ins.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">販売方式</span>
                  <span className="font-bold">{ins.type}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">特徴</span>
                  <span className="font-bold">{ins.feature}</span>
                </div>
              </div>

              {/* Product Detail */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">主な商品ラインナップ</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted">{ins.products}</p>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-800 dark:text-slate-100">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {ins.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {ins.pros.map((p) => (
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
                  {ins.cons.map((c) => (
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
                  href={ins.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {ins.name}の公式サイトを見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Case Recommendations */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 目的別おすすめネット保険
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "とにかく保険料を安く抑えたい",
              ins: "ライフネット生命",
              reason:
                "ネット専業のため人件費・店舗費を徹底的に削減。定期死亡保険は月額798円からと業界最安クラスです。保険料の内訳も公開しており、透明性が高い点も安心です。",
              url: "https://www.lifenet-seimei.co.jp/",
            },
            {
              scene: "信頼できるグループ企業で安心したい",
              ins: "SBI生命 / アクサダイレクト生命",
              reason:
                "SBI生命はSBIグループ、アクサダイレクト生命は世界最大級のアクサグループに属しており、経営基盤が安定しています。合理的な保険料設定も魅力です。",
              url: "https://www.sbilife.co.jp/",
            },
            {
              scene: "医療保険・がん保険の保障を充実させたい",
              ins: "チューリッヒ生命",
              reason:
                "終身医療保険プレミアムZは保障内容が非常に充実しています。先進医療特約やストレス性疾病への対応など、他社にない手厚い保障が特徴です。",
              url: "https://www.zurichlife.co.jp/",
            },
            {
              scene: "対面でも相談しながら決めたい",
              ins: "オリックス生命",
              reason:
                "ネットでの申込みに加え、対面での相談にも対応。商品ラインナップも豊富で、生命保険・医療保険・がん保険・終身保険と幅広く取り揃えています。",
              url: "https://www.orixlife.co.jp/",
            },
            {
              scene: "家族のための死亡保障を確保したい",
              ins: "ライフネット生命",
              reason:
                "定期死亡保険「かぞくへの保険」は月額798円からとコストパフォーマンスが抜群。ネットで申込みから解約まで完結するため、管理も簡単です。",
              url: "https://www.lifenet-seimei.co.jp/",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.ins}
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
                {item.ins.split(" / ")[0]}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Apply */}
      <section id="how-to-apply" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. ネット保険の申込み手順
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          ネット保険の申込みは、以下の4ステップで完了します。来店不要でスマホやPCから手続きできます。
        </p>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "保険の種類と保障内容を決める",
              desc: "この記事の比較表や目的別おすすめを参考に、必要な保険の種類（死亡・医療・がん）と保障金額を決めましょう。迷ったらまず定期死亡保険と医療保険の組み合わせがおすすめです。",
            },
            {
              num: "2",
              title: "各社のサイトで見積もりを取る",
              desc: "各社の公式サイトで年齢・性別・保障内容を入力して保険料の見積もりを取りましょう。複数社を比較することで、最適な保険が見つかります。",
            },
            {
              num: "3",
              title: "オンラインで申込み・告知",
              desc: "申込みフォームに個人情報を入力し、健康状態の告知を行います。本人確認書類のアップロードも必要です。ライフネット生命などはスマホで撮影するだけで完了します。",
            },
            {
              num: "4",
              title: "審査完了・保障開始",
              desc: "申込み内容と告知内容の審査が行われ、通常1週間程度で結果が届きます。審査通過後、初回保険料の支払いが確認されると保障が開始します。",
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

      {/* Section 6 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. ネット保険の選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "必要な保障を明確にする",
              desc: "家族構成やライフステージに合わせて、必要な保障（死亡保障・医療保障・がん保障）を明確にしましょう。独身なら医療保険中心、家族がいれば死亡保障も重要です。",
            },
            {
              num: "2",
              title: "保険料を複数社で比較する",
              desc: "同じ保障内容でも保険会社によって保険料は異なります。最低3社以上の見積もりを取って比較しましょう。月数百円の差でも、30年で数十万円の差になります。",
            },
            {
              num: "3",
              title: "保障内容の細部を確認する",
              desc: "保険料だけでなく、入院日額・手術給付金・先進医療特約・がん診断一時金など、保障内容の細部も確認しましょう。安くても保障が薄い場合があります。",
            },
            {
              num: "4",
              title: "保険会社の経営安定性を確認する",
              desc: "ソルベンシー・マージン比率（支払余力）や格付け、親会社の信頼性を確認しましょう。長期間の契約になるため、経営の安定性は重要なポイントです。",
            },
            {
              num: "5",
              title: "サポート体制を確認する",
              desc: "電話やチャットのサポート体制、マイページの使いやすさ、請求手続きの簡便さも確認しましょう。万が一の時にスムーズに保険金を請求できることが大切です。",
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

      <section className="mb-10">
        <Link href="/tools/insurance-need-calculator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">必要保障額計算ツールを使う</div>
          <p className="text-xs text-muted">家族構成・収入・住宅ローンを入力するだけで、あなたに必要な生命保険の保障額を自動計算できます →</p>
        </Link>
        <Link href="/tools/education-cost-simulator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors mt-3">
          <div className="font-bold text-sm mb-1">教育費シミュレーターを使う</div>
          <p className="text-xs text-muted">幼稚園〜大学まで公立／私立別に累積教育費の目安を試算できます →</p>
        </Link>
      </section>

      {/* Section 8 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            ネット保険は、対面販売型の保険と比べて保険料が大幅に安く、自分のペースで比較・検討できるのが大きなメリットです。この記事で比較した5社は、いずれも信頼性の高い保険会社で安心して加入できます。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                ライフネット生命
              </span>
              <span className="text-sm text-muted">
                → 保険料最安クラス。ネット完結で手軽。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                SBI生命
              </span>
              <span className="text-sm text-muted">
                → SBIグループの信頼性。合理的な保険料。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                アクサダイレクト生命
              </span>
              <span className="text-sm text-muted">
                → 世界的ブランドの安心感。充実サポート。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/40 rounded-lg">
              <span className="font-bold text-red-700 dark:text-red-300 flex-shrink-0">
                チューリッヒ生命
              </span>
              <span className="text-sm text-muted">
                → 医療保険の保障が最も充実。先進医療対応。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/40 rounded-lg">
              <span className="font-bold text-orange-700 dark:text-orange-300 flex-shrink-0">
                オリックス生命
              </span>
              <span className="text-sm text-muted">
                → 豊富な商品＋対面相談可能。バランス重視。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            まずは各社の公式サイトで無料の見積もりを取り、保険料と保障内容を比較してみましょう。
          </p>
        </div>
      </section>

      {/* Related Tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          便利ツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          家計管理やパスワード生成など、生活に役立つ無料ツールも用意しています。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tools/password-generator"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            パスワード生成ツールを使う
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
          あなたに最適なネット保険を見つけよう
        </h2>
        <p className="text-sm text-muted mb-5">
          ネット保険なら対面型と比べて保険料を大幅に節約できます。まずは各社の公式サイトで無料見積もりを取って比較してみましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://www.lifenet-seimei.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            ライフネット生命
          </a>
          <a
            href="https://www.sbilife.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            SBI生命
          </a>
          <a
            href="https://www.axa-direct-life.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            アクサダイレクト生命
          </a>
          <a
            href="https://www.zurichlife.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
          >
            チューリッヒ生命
          </a>
          <a
            href="https://www.orixlife.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            オリックス生命
          </a>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連シミュレーター</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/tools/child-allowance-simulator" className="block bg-primary/10 border-2 border-primary rounded-xl p-5 text-center hover:bg-primary/20 transition-colors">
            <div className="text-sm font-bold text-primary mb-1">児童手当受給額シミュレーターを使う</div>
            <p className="text-xs text-muted">月額・年額・累計を試算</p>
          </Link>
          <Link href="/tools/birth-cost-simulator" className="block bg-primary/10 border-2 border-primary rounded-xl p-5 text-center hover:bg-primary/20 transition-colors">
            <div className="text-sm font-bold text-primary mb-1">出産費用シミュレーターを使う</div>
            <p className="text-xs text-muted">一時金差引後の自己負担額を試算</p>
          </Link>
        </div>
      </section>
      <GuideRelatedLinks currentSlug="insurance-comparison" />
    </div>
  );
}
