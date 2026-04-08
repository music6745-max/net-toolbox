import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { AdSenseUnit } from "@/components/AdSenseUnit";

export const metadata: Metadata = {
  title: "クレジットカードおすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "年会費とポイント還元で迷う方へ。楽天カード・三井住友カード(NL)・JCBカードW・PayPayカード・dカードを年会費/還元率/特典で徹底比較し最適な1枚を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/credit-card-comparison` },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】クレジットカード比較おすすめ5選｜年会費無料・ポイント還元率を徹底解説",
    description:
      "2026年最新のクレジットカードを徹底比較。楽天カード・三井住友カード(NL)・JCBカードW・PayPayカード・dカードの年会費・ポイント還元率・特典・付帯保険を詳しく解説。",
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
    mainEntityOfPage: `${siteConfig.url}/guide/credit-card-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const cardServices = [
  {
    name: "楽天カード",
    brand: "Visa / Mastercard / JCB / American Express",
    price: "年会費永年無料",
    plan: "楽天カード（一般）",
    rate: "基本1.0%（楽天市場で3.0%以上）",
    rateDetail: "100円につき1ポイント。楽天市場ではSPU適用で3.0%以上。楽天ペイ利用で最大1.5%還元",
    benefits: "楽天ポイントが貯まる・使える、楽天市場でポイントアップ",
    benefitsDetail: "楽天市場SPU対応、楽天ペイ連携、楽天Edy搭載、ポイントで投資信託購入可能",
    insurance: "海外旅行傷害保険（最高2,000万円・利用付帯）",
    contract: "年会費永年無料・入会金なし",
    pros: [
      "年会費永年無料で基本還元率1.0%は最高水準",
      "楽天市場でSPU適用3.0%以上の高還元",
      "楽天ポイントの使い道が非常に豊富（楽天ペイ・投資・旅行など）",
      "新規入会キャンペーンで5,000〜8,000ポイントもらえる",
      "4つの国際ブランドから選べる",
      "楽天ペイとの組み合わせで実店舗でも高還元",
    ],
    cons: [
      "楽天経済圏以外ではポイントのメリットが薄い",
      "ETCカードが年会費550円（ダイヤモンド・プラチナ会員は無料）",
      "利用明細の郵送は有料（Web明細推奨）",
    ],
    bestFor:
      "楽天市場や楽天サービスをよく利用する方に最適。SPUでポイント最大16倍、楽天ペイでの実店舗利用も高還元で、楽天経済圏なら圧倒的にお得です。",
    url: "https://www.rakuten-card.co.jp/",
    badge: "楽天経済圏最強",
    color: "pink",
  },
  {
    name: "三井住友カード(NL)",
    brand: "Visa / Mastercard",
    price: "年会費永年無料",
    plan: "三井住友カード(NL)（ナンバーレス）",
    rate: "基本0.5%（対象コンビニ・飲食店で最大7%）",
    rateDetail: "200円につき1ポイント。対象のコンビニ・飲食店でスマホタッチ決済すると最大7%還元",
    benefits: "ナンバーレスで高セキュリティ、コンビニ・飲食店で高還元",
    benefitsDetail: "カード番号がカード面に印字なし、Vポイント付与、SBI証券でのクレカ積立対応、Apple Pay/Google Pay対応",
    insurance: "海外旅行傷害保険（最高2,000万円・利用付帯）",
    contract: "年会費永年無料・入会金なし",
    pros: [
      "年会費永年無料でナンバーレスの高セキュリティ",
      "対象コンビニ・飲食店でスマホタッチ決済最大7%還元",
      "SBI証券のクレカ積立で0.5%ポイント付与",
      "Vポイントはキャッシュバックにも使える",
      "Apple Pay・Google Pay対応でスマホ決済が便利",
      "三井住友ブランドの安心感と信頼性",
    ],
    cons: [
      "基本還元率0.5%は楽天カードより低い",
      "対象店舗以外ではポイント還元率が低め",
      "ETCカードは年1回以上利用で年会費無料（未利用だと550円）",
    ],
    bestFor:
      "コンビニや飲食店をよく利用する方に最適。セブン-イレブン・ローソン・マクドナルドなどでスマホタッチ決済するだけで最大7%還元は驚異的です。",
    url: "https://www.smbc-card.com/nyukai/card/numberless.jsp",
    badge: "コンビニ最大7%",
    color: "green",
  },
  {
    name: "JCB カード W",
    brand: "JCB",
    price: "年会費永年無料",
    plan: "JCB カード W",
    rate: "基本1.0%（JCB ORIGINAL SERIESパートナーで最大10.5%）",
    rateDetail: "1,000円につき2ポイント（通常の2倍）。Amazon・セブン-イレブン・スターバックスなどで大幅アップ",
    benefits: "高還元率、Amazon・スタバで特にお得",
    benefitsDetail: "Amazon 2.0%、セブン-イレブン 2.0%、スターバックス 10.5%、Oki Dokiポイントが貯まる",
    insurance: "海外旅行傷害保険（最高2,000万円・利用付帯）、ショッピングガード保険（海外）",
    contract: "年会費永年無料・入会金なし（18〜39歳限定申込）",
    pros: [
      "年会費永年無料で基本還元率1.0%（JCBカード最高水準）",
      "Amazonで2.0%、スターバックスで10.5%の高還元",
      "39歳までに入会すれば40歳以降も年会費無料で継続",
      "JCB ORIGINAL SERIESパートナー店舗でポイントアップ",
      "Apple Pay・Google Pay対応",
      "ショッピングガード保険（海外）が付帯",
    ],
    cons: [
      "申込みは18〜39歳限定",
      "JCBブランドのため海外での利用可能店舗がVisa/Mastercardより少ない",
      "国内のショッピング保険は付帯なし",
    ],
    bestFor:
      "Amazonやスターバックスをよく利用する18〜39歳の方に最適。基本還元率1.0%に加え、パートナー店舗でのポイントアップが非常に魅力的です。",
    url: "https://www.jcb.co.jp/ordercard/kojin_card/os_card_w.html",
    badge: "Amazon・スタバ高還元",
    color: "blue",
  },
  {
    name: "PayPayカード",
    brand: "Visa / Mastercard / JCB",
    price: "年会費永年無料",
    plan: "PayPayカード",
    rate: "基本1.0%（Yahoo!ショッピングで最大5%）",
    rateDetail: "200円につき1%のPayPayポイント付与。Yahoo!ショッピングで毎日最大5%還元",
    benefits: "PayPayポイントが貯まる、Yahoo!ショッピングで高還元",
    benefitsDetail: "PayPayアプリとの連携、Yahoo!ショッピング高還元、PayPayあと払い対応、ナンバーレスデザイン",
    insurance: "付帯保険なし",
    contract: "年会費永年無料・入会金なし",
    pros: [
      "年会費永年無料で基本還元率1.0%",
      "PayPayポイントが貯まり実店舗ですぐ使える",
      "Yahoo!ショッピングで毎日最大5%還元",
      "PayPayあと払いに登録でPayPay利用でもポイント付与",
      "ナンバーレスデザインでセキュリティが高い",
      "3つの国際ブランドから選べる",
    ],
    cons: [
      "旅行傷害保険やショッピング保険が付帯なし",
      "PayPay経済圏以外ではメリットが薄い",
      "家族カードがない",
    ],
    bestFor:
      "PayPayやYahoo!ショッピングをよく利用する方に最適。貯まったPayPayポイントはPayPay加盟店（全国400万カ所以上）ですぐに使えるので利便性抜群です。",
    url: "https://www.paypay-card.co.jp/",
    badge: "PayPay経済圏",
    color: "red",
  },
  {
    name: "dカード",
    brand: "Visa / Mastercard",
    price: "年会費永年無料",
    plan: "dカード",
    rate: "基本1.0%（dカード特約店で最大4%）",
    rateDetail: "100円につき1ポイント。マツモトキヨシ3.0%、スターバックスカード4.0%など特約店で大幅アップ",
    benefits: "dポイントが貯まる、ドコモユーザー特典、d払い連携",
    benefitsDetail: "dポイント加盟店で使える、d払いとの連携でポイント二重取り、ケータイ補償（1万円）、29歳以下は旅行保険付帯",
    insurance: "ショッピング保険（年間100万円）、29歳以下は旅行傷害保険付帯",
    contract: "年会費永年無料・入会金なし",
    pros: [
      "年会費永年無料で基本還元率1.0%",
      "dポイント加盟店が非常に多く使い道が豊富",
      "d払い連携でポイント二重取りが可能",
      "dカード特約店（マツキヨ・スタバ等）で高還元",
      "ショッピング保険が年間100万円まで付帯",
      "ドコモスマホのケータイ補償（1万円）あり",
    ],
    cons: [
      "ドコモユーザー以外にはメリットがやや薄い",
      "ETCカードは年1回以上利用で年会費無料（未利用だと550円）",
      "29歳以上は旅行傷害保険が付帯しない",
    ],
    bestFor:
      "ドコモユーザーやd払いをよく利用する方に最適。d払いとの連携でポイント二重取りができ、dポイント加盟店の多さで実店舗でも効率よくポイントが貯まります。",
    url: "https://d-card.jp/",
    badge: "ドコモ＋d払い",
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
    question: "クレジットカードの還元率はどれくらいが良いですか？",
    answer:
      "年会費無料のクレジットカードの基本還元率は0.5%が一般的です。1.0%以上あれば高還元カードと言えます。この記事で紹介した5枚のうち、楽天カード・JCBカードW・PayPayカード・dカードは基本還元率1.0%で、年会費無料カードとしては最高水準です。",
  },
  {
    question: "初めてのクレジットカードはどれがおすすめですか？",
    answer:
      "初めての1枚には楽天カードがおすすめです。年会費無料で基本還元率1.0%、ポイントの使い道が豊富で、審査も比較的通りやすいとされています。コンビニをよく使う方は三井住友カード(NL)、Amazonをよく使う方はJCBカードWも良い選択です。",
  },
  {
    question: "クレジットカードは何枚持つのが理想ですか？",
    answer:
      "メインカード1枚＋サブカード1〜2枚の合計2〜3枚が理想的です。メインで高還元率カードを使い、サブで特定店舗向けの高還元カードを使い分けると効率的にポイントが貯まります。年会費無料のカードなら複数持っても維持費はかかりません。",
  },
  {
    question: "ポイント還元と付帯保険、どちらを重視すべきですか？",
    answer:
      "日常の買い物が中心ならポイント還元率を重視しましょう。海外旅行が多い方は付帯保険も重要です。この記事の5枚はすべて年会費無料なので、メインは高還元カード、サブで保険付帯カードを持つ使い分けがおすすめです。",
  },
  {
    question: "年会費無料でもゴールドカードに近い特典はありますか？",
    answer:
      "三井住友カード(NL)のコンビニ・飲食店最大7%還元、JCBカードWのスタバ10.5%還元など、特定店舗での還元率はゴールドカードを超えるケースもあります。年会費無料カードでも使い方次第で十分にお得です。",
  },
  {
    question: "スマホ決済と相性の良いクレジットカードはどれですか？",
    answer:
      "楽天カードは楽天ペイ、三井住友カード(NL)はApple Pay/Google Pay、PayPayカードはPayPay、dカードはd払いとそれぞれ相性が良いです。普段使っているスマホ決済に合わせてカードを選ぶと、ポイント二重取りができてお得です。",
  },
  {
    question: "クレジットカードのセキュリティ対策は大丈夫ですか？",
    answer:
      "今回紹介した5枚はすべて不正利用監視システムを搭載しており、不正利用があった場合は原則補償されます。三井住友カード(NL)とPayPayカードはナンバーレスデザインで、カード番号の盗み見を防げます。",
  },
];

export default function CreditCardComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <ItemListJsonLd
        name="クレジットカードおすすめ比較"
        items={cardServices.map((s) => ({ name: s.name, url: s.url }))}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "クレジットカード比較おすすめ5選",
            url: `${siteConfig.url}/guide/credit-card-comparison`,
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
        <span>クレジットカード比較おすすめ5選</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            クレジットカード
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】クレジットカード比較おすすめ5選｜年会費無料・ポイント還元率を徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「年会費無料でポイントが貯まるクレジットカードはどれ？」そんな疑問にお答えします。この記事では、2026年現在おすすめの年会費無料クレジットカード5枚（楽天カード・三井住友カード(NL)・JCBカードW・PayPayカード・dカード）を年会費・ポイント還元率・特典・付帯保険で徹底比較します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：タイプ別おすすめはこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-pink-700 dark:text-pink-300">
              楽天市場をよく使う → 楽天カード
            </span>
            （SPUで3.0%以上＋ポイント使い道豊富）
          </p>
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              コンビニ・飲食店が多い → 三井住友カード(NL)
            </span>
            （スマホタッチで最大7%還元）
          </p>
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              Amazon・スタバが多い → JCBカードW
            </span>
            （Amazon 2.0%・スタバ10.5%）
          </p>
          <p>
            <span className="font-bold text-red-700 dark:text-red-300">
              PayPay経済圏 → PayPayカード
            </span>
            （PayPayポイント1.0%＋Yahoo!最大5%）
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-card" className="text-primary hover:underline">
              1. クレジットカードを選ぶメリット
            </a>
          </li>
          <li>
            <a href="#comparison-table" className="text-primary hover:underline">
              2. 5枚の年会費・還元率比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各カードの詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              4. 利用タイプ別おすすめカード
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              5. クレジットカードの選び方5つのポイント
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

      {/* Section 1 - Why Card */}
      <section id="why-card" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. クレジットカードを選ぶメリット
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          年会費無料のクレジットカードを正しく選ぶことで、日常の買い物で効率的にポイントを貯められます。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128176;",
              title: "ポイント還元で実質的な節約",
              desc: "還元率1.0%のカードで月10万円使うと、年間12,000ポイント。特定店舗での高還元を活用すればさらに多くのポイントが貯まります。",
            },
            {
              icon: "&#128179;",
              title: "年会費無料で維持コストゼロ",
              desc: "今回紹介する5枚はすべて年会費永年無料。持っているだけでコストがかからないので、複数枚持ちで使い分けても損しません。",
            },
            {
              icon: "&#128274;",
              title: "セキュリティと補償が充実",
              desc: "不正利用の監視と補償、ショッピング保険、旅行傷害保険など、現金にはない安心感があります。ナンバーレスカードならさらに安全です。",
            },
            {
              icon: "&#128241;",
              title: "スマホ決済との連携でさらにお得",
              desc: "各カードは対応するスマホ決済と連携でポイント二重取りが可能。楽天ペイ・PayPay・d払いなど、普段の買い物がさらにお得になります。",
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
          2. 5枚の年会費・還元率比較表
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          まずは5枚のクレジットカードの主要スペックを一覧で比較してみましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">
                  項目
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-pink-600 dark:text-pink-400">楽天カード</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">三井住友(NL)</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-blue-600 dark:text-blue-400">JCBカードW</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-red-600 dark:text-red-400">PayPayカード</span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">dカード</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "年会費",
                  rakuten: "永年無料",
                  smbc: "永年無料",
                  jcb: "永年無料",
                  paypay: "永年無料",
                  dcard: "永年無料",
                },
                {
                  label: "基本還元率",
                  rakuten: "1.0%",
                  smbc: "0.5%",
                  jcb: "1.0%",
                  paypay: "1.0%",
                  dcard: "1.0%",
                },
                {
                  label: "最大還元率",
                  rakuten: "16倍(楽天)",
                  smbc: "7%(コンビニ)",
                  jcb: "10.5%(スタバ)",
                  paypay: "5%(Yahoo!)",
                  dcard: "4%(特約店)",
                },
                {
                  label: "国際ブランド",
                  rakuten: "4ブランド",
                  smbc: "Visa/MC",
                  jcb: "JCB",
                  paypay: "3ブランド",
                  dcard: "Visa/MC",
                },
                {
                  label: "ポイント種類",
                  rakuten: "楽天ポイント",
                  smbc: "Vポイント",
                  jcb: "Oki Doki",
                  paypay: "PayPayポイント",
                  dcard: "dポイント",
                },
                {
                  label: "スマホ決済",
                  rakuten: "楽天ペイ",
                  smbc: "Apple/Google",
                  jcb: "Apple/Google",
                  paypay: "PayPay",
                  dcard: "d払い",
                },
                {
                  label: "旅行保険",
                  rakuten: "海外2,000万",
                  smbc: "海外2,000万",
                  jcb: "海外2,000万",
                  paypay: "なし",
                  dcard: "29歳以下のみ",
                },
                {
                  label: "ナンバーレス",
                  rakuten: "なし",
                  smbc: "あり",
                  jcb: "あり",
                  paypay: "あり",
                  dcard: "なし",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.rakuten}</td>
                  <td className="border border-card-border p-3">{row.smbc}</td>
                  <td className="border border-card-border p-3">{row.jcb}</td>
                  <td className="border border-card-border p-3">{row.paypay}</td>
                  <td className="border border-card-border p-3">{row.dcard}</td>
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
          3. 各カードの詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {cardServices.map((card, index) => (
            <div
              key={card.name}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{card.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[card.color]}`}
                >
                  {card.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">年会費</span>
                  <span className="font-bold">{card.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">基本還元率</span>
                  <span className="font-bold">{card.rate}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">国際ブランド</span>
                  <span className="font-bold">{card.brand}</span>
                </div>
              </div>

              {/* Plan Detail */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">カード詳細</h4>
                <div className="bg-background rounded-lg p-3 text-sm">
                  <p className="text-muted mb-1"><span className="font-medium">還元率：</span>{card.rateDetail}</p>
                  <p className="text-muted mb-1"><span className="font-medium">特典：</span>{card.benefitsDetail}</p>
                  <p className="text-muted"><span className="font-medium">保険：</span>{card.insurance}</p>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-800 dark:text-slate-100">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {card.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {card.pros.map((p) => (
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
                  {card.cons.map((c) => (
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
                  href={card.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {card.name}の公式サイトを見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Use Case Recommendations */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 利用タイプ別おすすめカード
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "ネットショッピングが多い（楽天市場中心）",
              card: "楽天カード",
              reason:
                "楽天市場でSPU適用3.0%以上、お買い物マラソンやスーパーSALEでさらにポイントアップ。楽天経済圏で生活するなら圧倒的にお得なメインカードです。",
              url: "https://www.rakuten-card.co.jp/",
            },
            {
              scene: "コンビニ・ファストフード店をよく利用する",
              card: "三井住友カード(NL)",
              reason:
                "セブン-イレブン・ローソン・マクドナルドなどでスマホタッチ決済するだけで最大7%還元。通勤途中のコンビニ利用が多い方は驚くほどポイントが貯まります。",
              url: "https://www.smbc-card.com/nyukai/card/numberless.jsp",
            },
            {
              scene: "Amazonやスターバックスをよく利用する",
              card: "JCBカードW",
              reason:
                "Amazon 2.0%、スターバックス10.5%と特定店舗での還元率が圧倒的。基本還元率も1.0%と高く、18〜39歳なら迷わず申し込むべき1枚です。",
              url: "https://www.jcb.co.jp/ordercard/kojin_card/os_card_w.html",
            },
            {
              scene: "PayPayやYahoo!ショッピングをよく使う",
              card: "PayPayカード",
              reason:
                "PayPayポイントが1.0%貯まり、Yahoo!ショッピングで最大5%還元。PayPayあと払いでポイント付与もあり、PayPay経済圏なら最適です。",
              url: "https://www.paypay-card.co.jp/",
            },
            {
              scene: "ドコモユーザー・d払いをよく使う",
              card: "dカード",
              reason:
                "d払いとの連携でポイント二重取り、dカード特約店で高還元。ドコモスマホのケータイ補償もあり、ドコモユーザーなら必携の1枚です。",
              url: "https://d-card.jp/",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.card}
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
                {item.card}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. クレジットカードの選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "よく使うお店・サービスで選ぶ",
              desc: "楽天市場なら楽天カード、コンビニなら三井住友カード(NL)、Amazonなら JCBカードWなど、日常的に使う場所で高還元になるカードを選ぶのが最も効果的です。",
            },
            {
              num: "2",
              title: "基本還元率を確認する",
              desc: "特定店舗以外でも使うことを考えると、基本還元率が高いカードが有利。1.0%のカード（楽天・JCB W・PayPay・dカード）はどこで使ってもお得です。",
            },
            {
              num: "3",
              title: "ポイントの使い道を確認する",
              desc: "貯まったポイントが使いやすいかどうかも重要。楽天ポイントやPayPayポイントは使える場所が多く、dポイントもコンビニなど身近な場所で使えます。",
            },
            {
              num: "4",
              title: "スマホ決済との相性を確認する",
              desc: "普段使っているスマホ決済と相性の良いカードを選ぶと、ポイント二重取りができます。楽天ペイ→楽天カード、PayPay→PayPayカード、d払い→dカードの組み合わせが最強です。",
            },
            {
              num: "5",
              title: "付帯保険や特典を確認する",
              desc: "海外旅行が多い方は旅行傷害保険の有無をチェック。ショッピング保険はdカードが年間100万円まで付帯しており、高額な買い物にも安心です。",
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
            年会費無料のクレジットカードは、正しく選ぶだけで年間数万円分のポイントが貯まります。5枚すべて年会費無料なので、メインとサブで使い分けるのもおすすめです。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/40 rounded-lg">
              <span className="font-bold text-pink-700 dark:text-pink-300 flex-shrink-0">
                楽天カード
              </span>
              <span className="text-sm text-muted">
                → 楽天市場SPU 3.0%以上。楽天経済圏のメインカード。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                三井住友(NL)
              </span>
              <span className="text-sm text-muted">
                → コンビニ・飲食店で最大7%。セキュリティも万全。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                JCBカードW
              </span>
              <span className="text-sm text-muted">
                → Amazon 2.0%・スタバ10.5%。39歳以下なら必見。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/40 rounded-lg">
              <span className="font-bold text-red-700 dark:text-red-300 flex-shrink-0">
                PayPayカード
              </span>
              <span className="text-sm text-muted">
                → PayPay経済圏で1.0%還元。Yahoo!ショッピングで最大5%。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                dカード
              </span>
              <span className="text-sm text-muted">
                → d払い二重取り＋特約店高還元。ドコモユーザー必携。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            すべて年会費永年無料なので、まずは自分のライフスタイルに合った1枚から始めてみましょう。
          </p>
        </div>
      </section>

      {/* Related Tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          便利ツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          パスワード生成やQRコード作成など、日常に役立つ無料ツールも用意しています。
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
          あなたに最適なクレジットカードを見つけよう
        </h2>
        <p className="text-sm text-muted mb-5">
          すべて年会費永年無料。正しいカード選びで年間数万円分のポイントが貯まります。まずは気になるカードに申し込んでみましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://www.rakuten-card.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-pink-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-pink-700 transition-colors"
          >
            楽天カード
          </a>
          <a
            href="https://www.smbc-card.com/nyukai/card/numberless.jsp"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            三井住友カード(NL)
          </a>
          <a
            href="https://www.jcb.co.jp/ordercard/kojin_card/os_card_w.html"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            JCBカードW
          </a>
          <a
            href="https://www.paypay-card.co.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            PayPayカード
          </a>
          <a
            href="https://d-card.jp/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block border border-card-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            dカード
          </a>
        </div>
      </section>
      <GuideRelatedLinks currentSlug="credit-card-comparison" />
      <AdSenseUnit adSlot="0000000000" adFormat="auto" />
    </div>
  );
}
