import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";

export const metadata: Metadata = {
  title: "確定申告ソフトおすすめ3選【2026年最新】徹底比較｜選び方も解説",
  description:
    "確定申告に追われる個人事業主・副業の方へ。freee・弥生会計・マネーフォワードを料金/機能/e-Tax対応で徹底比較し作業を半減できる1本を解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/accounting-software-comparison` },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】確定申告ソフト比較おすすめ3選｜freee・弥生・マネーフォワード徹底解説",
    description:
      "2026年最新の確定申告・クラウド会計ソフトを徹底比較。freee・弥生会計・マネーフォワード クラウドの料金・機能・使いやすさ・e-Tax対応を詳しく解説。",
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
    mainEntityOfPage: `${siteConfig.url}/guide/accounting-software-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const accountingSoftware = [
  {
    name: "freee会計",
    price: "月額1,480円〜（スタータープラン）",
    starterPrice: "月額1,480円（年払い）/ 月額1,980円（月払い）",
    standardPrice: "月額2,680円（年払い）/ 月額3,980円（月払い）",
    premiumPrice: "月額4,980円（年払い）/ 月額6,980円（月払い）",
    freePlan: "お試し30日間無料",
    eFilingSupport: "e-Tax連携対応（アプリからワンクリック申告）",
    mobileApp: "iOS / Android 対応（フル機能）",
    invoiceSupport: "インボイス制度対応（適格請求書発行可）",
    bankSync: "3,200以上の金融機関と自動連携",
    pros: [
      "簿記知識ゼロでも使える直感的なUI設計",
      "スマホアプリでレシート撮影・自動仕訳が可能",
      "e-Taxとの連携が最もスムーズ（アプリから直接申告）",
      "銀行・クレジットカードの自動取り込みで仕訳を自動化",
      "インボイス制度・電子帳簿保存法に完全対応",
      "確定申告書の自動作成機能が充実",
    ],
    cons: [
      "月額料金が3社の中ではやや高め",
      "機能が多すぎて最初は迷うことがある",
      "電話サポートはスタンダードプラン以上",
    ],
    bestFor:
      "簿記知識がない方、スマホで手軽に経理をしたい方に最適。確定申告初心者ならfreeeが最もおすすめです。",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
    badge: "初心者おすすめNo.1",
    color: "blue",
    reward: "1,500〜20,000",
  },
  {
    name: "弥生会計オンライン",
    price: "年額11,330円〜（セルフプラン）",
    starterPrice: "年額11,330円（セルフプラン・初年度無料あり）",
    standardPrice: "年額18,480円（ベーシックプラン）",
    premiumPrice: "年額33,000円（トータルプラン）",
    freePlan: "初年度無料キャンペーンあり（セルフプラン）",
    eFilingSupport: "e-Tax連携対応（確定申告e-Taxモジュール）",
    mobileApp: "iOS / Android 対応（基本機能）",
    invoiceSupport: "インボイス制度対応（適格請求書発行可）",
    bankSync: "主要金融機関と自動連携",
    pros: [
      "初年度無料で始められるプランあり（セルフプラン）",
      "弥生シリーズ25年以上の実績と信頼性",
      "白色申告なら永年無料で利用可能",
      "電話・チャットサポートが充実（ベーシックプラン以上）",
      "税理士・会計事務所との連携実績が豊富",
      "確定申告の手順をガイド形式でわかりやすくナビゲート",
    ],
    cons: [
      "UIがやや古く、freeeほど直感的ではない",
      "スマホアプリの機能はfreeeに比べると限定的",
      "銀行連携の自動仕訳精度がやや低い場合がある",
    ],
    bestFor:
      "コストを抑えたい方、白色申告の方に最適。初年度無料で始められるので、まず試してみたい方におすすめです。",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
    badge: "コスパNo.1・初年度無料",
    color: "green",
    reward: "300〜2,000",
  },
  {
    name: "マネーフォワード クラウド確定申告",
    price: "月額1,078円〜（パーソナルミニ）",
    starterPrice: "月額1,078円（パーソナルミニ・年払い）",
    standardPrice: "月額1,408円（パーソナル・年払い）",
    premiumPrice: "月額2,948円（パーソナルプラス・年払い）",
    freePlan: "お試し1ヶ月無料",
    eFilingSupport: "e-Tax連携対応（e-Taxソフト経由）",
    mobileApp: "iOS / Android 対応（基本機能）",
    invoiceSupport: "インボイス制度対応（適格請求書発行可）",
    bankSync: "2,400以上の金融機関と自動連携",
    pros: [
      "家計簿アプリ「マネーフォワード ME」との連携が強力",
      "請求書・経費精算・給与計算など関連サービスが充実",
      "月額1,078円〜と有料プランの中では手頃な料金",
      "銀行・クレジットカードの自動連携精度が高い",
      "確定申告ガイド機能で申告手順を丁寧にサポート",
      "複数の関連サービスをパッケージで利用可能",
    ],
    cons: [
      "freeeに比べるとやや簿記知識が必要",
      "パーソナルミニは機能制限あり（確定申告書の作成は可能）",
      "電話サポートはパーソナルプラスのみ",
    ],
    bestFor:
      "マネーフォワード MEを使っている方、請求書・経費精算もまとめて管理したい方におすすめ。バランスの良い機能と料金が魅力です。",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
    badge: "総合管理に強い",
    color: "purple",
    reward: "700〜20,000",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

const faqItems = [
  {
    question: "確定申告ソフトは無料で使えますか？",
    answer:
      "弥生会計オンラインのセルフプランは初年度無料、白色申告オンラインは永年無料で利用できます。freeeとマネーフォワード クラウドにも無料お試し期間があります。まずは無料で試してみて、使いやすいソフトを選ぶのがおすすめです。",
  },
  {
    question: "簿記の知識がなくても確定申告ソフトは使えますか？",
    answer:
      "はい、特にfreee会計は簿記知識ゼロでも使えるよう設計されています。質問に答えていくだけで確定申告書が自動作成されます。弥生会計やマネーフォワード クラウドも、確定申告ガイド機能で手順をわかりやすくナビゲートしてくれるので、初心者でも安心です。",
  },
  {
    question: "白色申告と青色申告、どちらを選ぶべきですか？",
    answer:
      "副業の所得が少ない方は手軽な白色申告でも問題ありません。ただし、年間所得が増えてきたら、最大65万円の控除が受けられる青色申告がおすすめです。青色申告には複式簿記が必要ですが、クラウド会計ソフトを使えば自動で対応できるため、手間はほとんど変わりません。",
  },
  {
    question: "e-Tax（電子申告）はソフトから直接できますか？",
    answer:
      "freee会計はアプリからワンクリックでe-Tax申告が可能です。弥生会計オンラインは確定申告e-Taxモジュールを使って電子申告できます。マネーフォワード クラウドはe-Taxソフト経由での申告に対応しています。いずれもマイナンバーカードとICカードリーダー（またはスマホ）が必要です。",
  },
  {
    question: "インボイス制度に対応していますか？",
    answer:
      "freee・弥生・マネーフォワード クラウドの3社とも、インボイス制度（適格請求書等保存方式）に対応しています。適格請求書の発行、受領した適格請求書の管理、消費税の計算まで対応しているので、インボイス制度への移行もスムーズに行えます。",
  },
  {
    question: "スマホだけで確定申告はできますか？",
    answer:
      "freee会計はスマホアプリの機能が最も充実しており、レシート撮影から確定申告書の作成、e-Tax申告までスマホだけで完結できます。弥生やマネーフォワードもスマホアプリがありますが、確定申告書の作成はPC版で行うのがおすすめです。",
  },
  {
    question: "副業の確定申告にはどのソフトがおすすめですか？",
    answer:
      "副業の確定申告なら、簿記知識不要で手軽に始められるfreee会計がおすすめです。コストを抑えたい方は初年度無料の弥生会計オンラインも良い選択です。いずれも副業の収入・経費を入力するだけで、必要な申告書類を自動作成してくれます。",
  },
];

export default function AccountingSoftwareComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <ItemListJsonLd
        name="会計ソフトおすすめ比較"
        items={accountingSoftware.map((s) => ({ name: s.name, url: s.url }))}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "確定申告ソフト比較おすすめ3選",
            url: `${siteConfig.url}/guide/accounting-software-comparison`,
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
        <span>確定申告ソフト比較おすすめ3選</span>
      </nav>

      {/* PR Disclaimer */}
      <div className="text-xs text-muted mb-4 bg-card-bg border border-card-border rounded-lg px-3 py-2 inline-block">
        PR・広告を含みます
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
            副業・税金
          </span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            比較
          </span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】確定申告ソフト比較おすすめ3選｜freee・弥生・マネーフォワード徹底解説
        </h1>
        <p className="text-muted leading-relaxed">
          「確定申告ソフトって結局どれがいいの？」そんな疑問にお答えします。この記事では、2026年現在おすすめのクラウド会計ソフト3社（freee会計・弥生会計オンライン・マネーフォワード
          クラウド）を料金・機能・使いやすさ・e-Tax対応で徹底比較。フリーランス・個人事業主・副業の方に最適な確定申告ソフトの選び方を解説します。
        </p>
      </div>

      {/* Quick Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">結論：迷ったらこれ！</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p>
            <span className="font-bold text-blue-700 dark:text-blue-300">
              初心者・簿記知識なしなら → freee会計
            </span>
            （直感的なUI、スマホ完結、e-Tax連携が最も簡単）
          </p>
          <p>
            <span className="font-bold text-green-700 dark:text-green-300">
              コスト重視・白色申告なら → 弥生会計オンライン
            </span>
            （初年度無料、白色申告は永年無料）
          </p>
          <p>
            <span className="font-bold text-purple-700 dark:text-purple-300">
              総合管理・請求書も一括なら → マネーフォワード クラウド
            </span>
            （請求書・経費精算・給与計算も一元管理）
          </p>
        </div>
        <div className="mt-4">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            freee会計を30日間無料で試す
          </a>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#why-accounting" className="text-primary hover:underline">
              1. 確定申告ソフトはなぜ必要？
            </a>
          </li>
          <li>
            <a
              href="#comparison-table"
              className="text-primary hover:underline"
            >
              2. 3社の料金・機能比較表
            </a>
          </li>
          <li>
            <a href="#detail" className="text-primary hover:underline">
              3. 各ソフトの詳細レビュー（メリット・デメリット）
            </a>
          </li>
          <li>
            <a
              href="#white-vs-blue"
              className="text-primary hover:underline"
            >
              4. 白色申告 vs 青色申告｜どちらを選ぶべき？
            </a>
          </li>
          <li>
            <a href="#use-cases" className="text-primary hover:underline">
              5. 利用目的別おすすめソフト
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              6. 確定申告ソフトの選び方5つのポイント
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

      <section className="mb-10">
        <Link href="/tools/tax-bracket-calculator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">所得税ブラケット計算ツールを使う</div>
          <p className="text-xs text-muted">年収から課税所得・適用税率・所得税・住民税の概算を表示します →</p>
        </Link>
      </section>

      {/* Section 1 - Why Accounting Software */}
      <section id="why-accounting" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. 確定申告ソフトはなぜ必要？
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          フリーランス・個人事業主・副業をしている方にとって、確定申告は避けて通れない手続きです。クラウド会計ソフトを使うことで、以下のようなメリットがあります。
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "&#128200;",
              title: "自動仕訳で経理を効率化",
              desc: "銀行口座やクレジットカードと連携し、取引データを自動で取り込み・仕訳します。手入力の手間が大幅に減り、入力ミスも防げます。",
            },
            {
              icon: "&#128196;",
              title: "確定申告書を自動作成",
              desc: "日々の記帳データから確定申告に必要な書類（所得税申告書、青色申告決算書など）を自動で作成。質問に答えるだけで完成します。",
            },
            {
              icon: "&#128241;",
              title: "e-Tax対応で自宅から電子申告",
              desc: "税務署に行かなくても、自宅からe-Tax（電子申告）で確定申告が完結。マイナンバーカードとスマホがあればOKです。",
            },
            {
              icon: "&#128176;",
              title: "インボイス制度・電子帳簿保存法に対応",
              desc: "2023年開始のインボイス制度や電子帳簿保存法にも各ソフトが対応済み。法改正への対応もソフトが自動でアップデートしてくれます。",
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
          確定申告を簡単に終わらせたい方へ
        </p>
        <a
          href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          freee会計で確定申告を始める
        </a>
        <p className="text-xs text-muted mt-2">
          30日間無料お試しあり・簿記知識不要
        </p>
      </div>

      {/* Section 2 - Comparison Table */}
      <section id="comparison-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. 3社の料金・機能比較表
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          まずは3社の主要スペックを一覧で比較してみましょう。
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
                    freee会計
                  </span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-green-600 dark:text-green-400">
                    弥生会計オンライン
                  </span>
                </th>
                <th className="border border-card-border p-3 text-left">
                  <span className="text-purple-600 dark:text-purple-400">
                    マネーフォワード クラウド
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "最安プラン料金",
                  freee: "月額1,480円〜",
                  yayoi: "年額11,330円〜",
                  mf: "月額1,078円〜",
                },
                {
                  label: "無料プラン/お試し",
                  freee: "30日間無料",
                  yayoi: "初年度無料あり",
                  mf: "1ヶ月無料",
                },
                {
                  label: "白色申告対応",
                  freee: "対応",
                  yayoi: "永年無料",
                  mf: "対応",
                },
                {
                  label: "青色申告対応",
                  freee: "対応（全プラン）",
                  yayoi: "対応（全プラン）",
                  mf: "対応（全プラン）",
                },
                {
                  label: "e-Tax連携",
                  freee: "アプリから直接",
                  yayoi: "専用モジュール経由",
                  mf: "e-Taxソフト経由",
                },
                {
                  label: "銀行連携数",
                  freee: "3,200以上",
                  yayoi: "主要金融機関",
                  mf: "2,400以上",
                },
                {
                  label: "スマホアプリ",
                  freee: "フル機能",
                  yayoi: "基本機能",
                  mf: "基本機能",
                },
                {
                  label: "インボイス対応",
                  freee: "対応",
                  yayoi: "対応",
                  mf: "対応",
                },
                {
                  label: "請求書作成",
                  freee: "対応（無料枠あり）",
                  yayoi: "対応（別サービス）",
                  mf: "対応（パッケージ内）",
                },
                {
                  label: "経費精算",
                  freee: "対応",
                  yayoi: "対応（別サービス）",
                  mf: "対応（パッケージ内）",
                },
                {
                  label: "電話サポート",
                  freee: "スタンダード以上",
                  yayoi: "ベーシック以上",
                  mf: "パーソナルプラスのみ",
                },
                {
                  label: "操作の簡単さ",
                  freee: "非常に簡単",
                  yayoi: "簡単",
                  mf: "やや簿記知識が必要",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">{row.freee}</td>
                  <td className="border border-card-border p-3">{row.yayoi}</td>
                  <td className="border border-card-border p-3">{row.mf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          ※
          料金は2026年4月時点の情報です。キャンペーンにより変動する場合があります。
        </p>
      </section>

      {/* Section 3 - Detailed Reviews */}
      <section id="detail" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          3. 各ソフトの詳細レビュー（メリット・デメリット）
        </h2>

        <div className="space-y-10">
          {accountingSoftware.map((soft, index) => (
            <div
              key={soft.name}
              id={`soft-${index + 1}`}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}位
                </span>
                <h3 className="text-xl font-bold">{soft.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[soft.color]}`}
                >
                  {soft.badge}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">最安プラン</span>
                  <span className="font-bold">{soft.price}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">無料お試し</span>
                  <span className="font-bold">{soft.freePlan}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block mb-1">e-Tax対応</span>
                  <span className="font-bold text-xs">{soft.eFilingSupport}</span>
                </div>
              </div>

              {/* Pricing Detail */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2">料金プラン</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                  <div className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20">
                    <span className="text-primary block text-xs mb-1 font-bold">
                      スターター/ミニ（最安）
                    </span>
                    <span className="font-bold">{soft.starterPrice}</span>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <span className="text-muted block text-xs mb-1">
                      スタンダード/パーソナル
                    </span>
                    <span>{soft.standardPrice}</span>
                  </div>
                  <div className="bg-background rounded-lg p-3 text-center">
                    <span className="text-muted block text-xs mb-1">
                      プレミアム/プラス
                    </span>
                    <span>{soft.premiumPrice}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5 text-sm">
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block text-xs mb-1">
                    スマホアプリ
                  </span>
                  <span>{soft.mobileApp}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block text-xs mb-1">
                    インボイス対応
                  </span>
                  <span>{soft.invoiceSupport}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <span className="text-muted block text-xs mb-1">
                    銀行連携
                  </span>
                  <span>{soft.bankSync}</span>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-5">
                <p className="text-sm text-slate-800 dark:text-slate-100">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {soft.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-600 dark:text-green-400">
                  メリット
                </h4>
                <ul className="space-y-1">
                  {soft.pros.map((p) => (
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
                  {soft.cons.map((c) => (
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
                  href={soft.url}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {soft.name}の公式サイトを見る
                </a>
                <p className="text-xs text-muted mt-2">
                  {soft.freePlan}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mid CTA Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-10">
        <h3 className="text-lg font-bold mb-2 text-center">
          3社とも無料お試しあり！まずは使ってみよう
        </h3>
        <p className="text-sm text-muted text-center mb-4">
          すべてのソフトに無料お試し期間があります。実際に触ってみて、自分に合ったソフトを選びましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            freee会計を試す
          </a>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            弥生会計を試す
          </a>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            マネーフォワードを試す
          </a>
        </div>
      </div>

      {/* Section 4 - White vs Blue Filing */}
      <section id="white-vs-blue" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 白色申告 vs 青色申告｜どちらを選ぶべき？
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          確定申告には「白色申告」と「青色申告」の2種類があります。それぞれの違いを理解して、自分に合った申告方法を選びましょう。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">
                  比較項目
                </th>
                <th className="border border-card-border p-3 text-left">
                  白色申告
                </th>
                <th className="border border-card-border p-3 text-left">
                  青色申告
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "特別控除",
                  white: "なし",
                  blue: "最大65万円",
                },
                {
                  label: "帳簿の種類",
                  white: "簡易簿記（単式簿記）",
                  blue: "複式簿記",
                },
                {
                  label: "手続きの手間",
                  white: "少ない",
                  blue: "やや多い（ソフトで自動化可能）",
                },
                {
                  label: "事前届出",
                  white: "不要",
                  blue: "開業届＋青色申告承認申請書が必要",
                },
                {
                  label: "赤字の繰越",
                  white: "不可",
                  blue: "3年間繰越可能",
                },
                {
                  label: "家族への給与",
                  white: "事業専従者控除（上限あり）",
                  blue: "青色事業専従者給与（全額経費）",
                },
                {
                  label: "おすすめの人",
                  white: "副業所得が少ない方、手軽さ重視の方",
                  blue: "所得が増えてきた方、節税したい方",
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="border border-card-border p-3 font-medium bg-card-bg">
                    {row.label}
                  </td>
                  <td className="border border-card-border p-3">
                    {row.white}
                  </td>
                  <td className="border border-card-border p-3">
                    {row.blue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 rounded-xl p-4">
            <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-2">
              白色申告におすすめのソフト
            </p>
            <p className="text-sm text-muted mb-3">
              弥生の「やよいの白色申告
              オンライン」は永年無料で利用できます。副業を始めたばかりで所得が少ない方は、まず白色申告から始めるのがおすすめです。
            </p>
            <a
              href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
            >
              弥生の白色申告を無料で始める
            </a>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
            <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-2">
              青色申告におすすめのソフト
            </p>
            <p className="text-sm text-muted mb-3">
              青色申告には複式簿記が必要ですが、freee会計なら簿記知識がなくても自動で複式簿記に対応。最大65万円の青色申告特別控除を簡単に受けられます。
            </p>
            <a
              href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              freee会計で青色申告を始める
            </a>
          </div>
        </div>
      </section>

      {/* Section 5 - Use Case Recommendations */}
      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          5. 利用目的別おすすめソフト
        </h2>
        <div className="space-y-4">
          {[
            {
              scene: "確定申告を初めてする（簿記知識なし）",
              soft: "freee会計",
              reason:
                "質問に答えるだけで確定申告書が自動作成されます。簿記の知識がまったくなくても、直感的な操作で確定申告を完了できます。スマホアプリも充実しているので、通勤中にレシート撮影や経費登録も可能です。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
            },
            {
              scene: "副業の確定申告をコストを抑えて行いたい",
              soft: "弥生会計オンライン",
              reason:
                "セルフプランは初年度無料、白色申告は永年無料で利用できます。25年以上の実績がある弥生シリーズなので信頼性も抜群。まず無料で始めて、必要に応じてプランアップできます。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
            },
            {
              scene: "請求書発行・経費精算もまとめて管理したい",
              soft: "マネーフォワード クラウド",
              reason:
                "確定申告だけでなく、請求書作成・経費精算・給与計算なども同じプラットフォームで一元管理できます。事業が成長して従業員を雇う際にもスムーズに移行できます。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
            },
            {
              scene: "スマホだけで経理と確定申告を済ませたい",
              soft: "freee会計",
              reason:
                "freeeのスマホアプリは3社の中で最も機能が充実。レシート撮影、銀行連携、仕訳入力、確定申告書の作成からe-Tax申告まで、スマホだけで完結できます。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
            },
            {
              scene: "税理士と連携して確定申告を行いたい",
              soft: "弥生会計オンライン",
              reason:
                "弥生シリーズは税理士・会計事務所での採用実績が最も多く、データ共有もスムーズです。税理士に記帳を依頼する場合も、弥生なら対応してもらいやすいです。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
            },
          ].map((item) => (
            <div
              key={item.scene}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.scene}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.soft}
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
                {item.soft}を詳しく見る
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 - How to Choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          6. 確定申告ソフトの選び方5つのポイント
        </h2>
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "操作の簡単さ（UI/UX）",
              desc: "簿記知識がない方は、直感的に操作できるソフトを選びましょう。freee会計は質問形式で入力でき、最も初心者に優しい設計です。",
            },
            {
              num: "2",
              title: "料金とコストパフォーマンス",
              desc: "月額料金だけでなく、年払いの割引や初年度無料キャンペーンもチェック。白色申告なら弥生が永年無料、有料プランならマネーフォワードが月額1,078円〜と手頃です。",
            },
            {
              num: "3",
              title: "e-Tax（電子申告）対応",
              desc: "e-Taxで電子申告すると青色申告特別控除が最大65万円に。freee会計はアプリからワンクリックでe-Tax申告でき、最も手軽です。",
            },
            {
              num: "4",
              title: "銀行・クレジットカード連携",
              desc: "自動連携できる金融機関の数と、自動仕訳の精度を確認。freeeは3,200以上、マネーフォワードは2,400以上の金融機関と連携しています。",
            },
            {
              num: "5",
              title: "サポート体制",
              desc: "初めての確定申告で不安がある方は、電話やチャットサポートが充実しているプランを選びましょう。弥生会計のベーシックプランは電話・メール・チャットすべてに対応しています。",
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

      {/* Section 8 - Summary */}
      <section id="summary" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed mb-4">
            確定申告ソフトは、フリーランス・個人事業主・副業をしている方にとって欠かせないツールです。この記事で比較した3社は、いずれも信頼性が高く無料お試し期間があるため、安心して試すことができます。
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <span className="font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">
                freee会計
              </span>
              <span className="text-sm text-muted">
                →
                初心者No.1。簿記知識不要で直感的に操作でき、スマホ完結も可能。迷ったらこれ。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/40 rounded-lg">
              <span className="font-bold text-green-700 dark:text-green-300 flex-shrink-0">
                弥生会計
              </span>
              <span className="text-sm text-muted">
                →
                コスパNo.1。初年度無料、白色申告は永年無料。25年以上の実績で安心。
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
              <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">
                マネーフォワード
              </span>
              <span className="text-sm text-muted">
                →
                総合管理に強い。請求書・経費精算・給与計算も一元管理で事業拡大にも対応。
              </span>
            </div>
          </div>
          <p className="text-sm text-muted">
            3社とも無料お試し期間があるので、まずは実際に触ってみて自分に合ったソフトを見つけましょう。
          </p>
        </div>
      </section>

      {/* Related Tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          副業に役立つツールもチェック
        </h2>
        <p className="text-sm text-muted mb-3">
          パスワード生成やQRコード作成など、副業に役立つ無料ツールも用意しています。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guide/side-business-tools"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            副業ツール完全ガイドを見る
          </Link>
          <Link
            href="/guide/best-rental-servers"
            className="inline-block border border-card-border px-6 py-2 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            レンタルサーバー比較も見る
          </Link>
        </div>
      </section>

      {/* Comparison Table CTA */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">確定申告ソフトを今すぐ比較・申し込み</h2>
        <ComparisonTableCTA
          services={[
            {
              name: "弥生シリーズ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
              highlight: "確定率91.74%の安心実績",
              price: "無料〜年26,000円",
              badge: "高確定率",
            },
            {
              name: "freee会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
              highlight: "クラウド会計シェアNo.1",
              price: "月1,180円〜",
            },
            {
              name: "マネーフォワード クラウド会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
              highlight: "法人・個人事業主向け定番",
              price: "月2,980円〜",
            },
            {
              name: "マネーフォワード クラウド確定申告",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4VMW8I+4JGQ+BXB8Z",
              highlight: "個人事業主の確定申告に特化",
              price: "月800円〜",
            },
            {
              name: "マネーフォワード クラウド(Wiz)",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4WTRG2+3SPO+C8LMIP",
              highlight: "Wiz経由のMFクラウド申込",
              price: "月額制",
            },
            {
              name: "freee会計(Wiz)",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
              highlight: "Wiz経由のfreee申込",
              price: "月額制",
            },
            {
              name: "UMaTレジ",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1VA04Y+3SPO+83QM4Y",
              highlight: "店舗向けクラウドPOSレジ",
              price: "月額制",
            },
          ]}
        />
      </section>

      {/* Final CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          freee会計で確定申告をラクに終わらせよう
        </h2>
        <p className="text-sm text-muted mb-5">
          簿記知識がなくても大丈夫。質問に答えるだけで確定申告書を自動作成、スマホからe-Tax申告も可能。銀行口座・クレジットカードの自動連携で日々の経理もラクになります。30日間の無料お試しがあるので、まずは触ってみてください。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            freee会計を無料で試す
          </a>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block border border-card-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            弥生会計（初年度無料）を見る
          </a>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block border border-card-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            マネーフォワード クラウドを見る
          </a>
        </div>
        <p className="text-xs text-muted mt-4">
          ※ 本記事はアフィリエイトプログラムに参加しています。
        </p>
      </section>
      <section className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">税額シミュレーター</h2>
        <p className="text-sm text-muted mb-3">フリーランスの所得税・住民税・国保・年金をまとめて試算できます。</p>
        <Link href="/tools/freelance-tax-calculator" className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">フリーランス税金計算ツールを使う</Link>
      </section>
      <GuideRelatedLinks currentSlug="accounting-software-comparison" />
    </div>
  );
}
