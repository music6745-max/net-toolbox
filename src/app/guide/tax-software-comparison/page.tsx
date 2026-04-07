import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年】確定申告ソフト比較｜フリーランス・副業向けおすすめ",
  description:
    "2026年最新の確定申告ソフトを徹底比較。freee・弥生・マネーフォワードの料金プラン・特徴・メリットデメリットを解説。副業やフリーランスの確定申告に最適なソフトが見つかります。",
  keywords: [
    "確定申告ソフト",
    "比較",
    "フリーランス",
    "副業",
    "freee",
    "弥生",
    "マネーフォワード",
    "青色申告",
    "2026年",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/tax-software-comparison`,
  },
};

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年】確定申告ソフト比較｜フリーランス・副業向けおすすめ",
    description:
      "2026年最新の確定申告ソフトを徹底比較。freee・弥生・マネーフォワードの料金プラン・特徴・メリットデメリットを解説。",
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
    mainEntityOfPage: `${siteConfig.url}/guide/tax-software-comparison`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const softwareList = [
  {
    name: "freee（フリー）",
    plans: [
      { name: "スターター", price: "月額1,480円（年払い980円）" },
      { name: "スタンダード", price: "月額2,680円（年払い1,980円）" },
      { name: "プレミアム", price: "年払い39,800円" },
    ],
    features: [
      "スマホアプリでレシート撮影・自動仕訳",
      "銀行・クレジットカード自動連携",
      "確定申告書をそのまま電子申告（e-Tax）",
      "チャット・メールサポート",
      "請求書・見積書作成機能",
    ],
    pros: [
      "UIが直感的で会計知識ゼロでも使える",
      "スマホだけでも確定申告が完結できる",
      "自動仕訳の精度が高い",
    ],
    cons: [
      "月額料金がやや高め",
      "細かいカスタマイズがしにくい",
      "動作が重くなることがある",
    ],
    recommended: "会計知識がない初心者、スマホで手軽に確定申告したい人",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
    badge: "初心者に最適",
    color: "blue",
  },
  {
    name: "やよいの青色申告オンライン",
    plans: [
      { name: "セルフプラン", price: "年額11,330円（初年度無料）" },
      { name: "ベーシックプラン", price: "年額18,975円（初年度半額）" },
      { name: "トータルプラン", price: "年額33,000円（初年度半額）" },
    ],
    features: [
      "売上実績No.1の会計ソフト",
      "白色申告は永年無料プランあり",
      "銀行・クレジットカード自動取込",
      "確定申告書の作成・e-Tax対応",
      "電話・メール・チャットサポート（プランによる）",
    ],
    pros: [
      "初年度無料または半額で始められる",
      "長年の実績で安心感がある",
      "税理士・会計士からの認知度が高い",
    ],
    cons: [
      "UIがやや古い印象",
      "セルフプランはサポートなし",
      "スマホ操作はfreeeに劣る",
    ],
    recommended: "コストを抑えたい人、実績のあるソフトを使いたい人",
    url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
    badge: "初年度無料",
    color: "green",
  },
  {
    name: "マネーフォワード クラウド確定申告",
    plans: [
      { name: "パーソナルミニ", price: "月額1,280円（年払い800円）" },
      { name: "パーソナル", price: "月額1,680円（年払い980円）" },
      { name: "パーソナルプラス", price: "年払い35,760円" },
    ],
    features: [
      "家計簿アプリ「マネーフォワード ME」と連携",
      "銀行・クレジットカード・電子マネー自動連携",
      "確定申告書の作成・e-Tax対応",
      "請求書・経費精算も一元管理",
      "仕訳候補の自動提案",
    ],
    pros: [
      "連携できる金融機関が豊富",
      "マネーフォワードMEユーザーは移行が楽",
      "バランスの取れた機能と料金",
    ],
    cons: [
      "機能が多く最初は迷うことがある",
      "ミニプランは機能制限あり",
      "サポートの対応速度にばらつきがある",
    ],
    recommended:
      "マネーフォワードMEを使っている人、複数の金融サービスを連携したい人",
    url: "",
    badge: "連携力No.1",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  green:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

export default function TaxSoftwareComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          {
            name: "確定申告ソフト比較",
            url: `${siteConfig.url}/guide/tax-software-comparison`,
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
        <span>確定申告ソフト比較</span>
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
          <span className="text-xs text-muted">8分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年】確定申告ソフト比較｜フリーランス・副業向けおすすめ
        </h1>
        <p className="text-muted leading-relaxed">
          副業やフリーランスで収入を得たら、確定申告は避けて通れません。この記事では、人気の確定申告ソフト3社を料金・機能・使いやすさで徹底比較し、あなたに最適なソフトの選び方を解説します。
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-8">
        <h2 className="font-bold mb-3">目次</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#who-needs" className="text-primary hover:underline">
              1. 確定申告が必要な人とは？
            </a>
          </li>
          <li>
            <a href="#comparison" className="text-primary hover:underline">
              2. 確定申告ソフト3社比較
            </a>
          </li>
          <li>
            <a href="#price-table" className="text-primary hover:underline">
              3. 料金プラン比較表
            </a>
          </li>
          <li>
            <a href="#how-to-choose" className="text-primary hover:underline">
              4. 自分に合ったソフトの選び方
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary hover:underline">
              5. よくある質問
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1 - Who needs tax filing */}
      <section id="who-needs" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. 副業の確定申告が必要な人とは？
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          副業で収入を得ている場合、以下に該当すると確定申告が必要になります。
        </p>
        <div className="space-y-3">
          {[
            {
              title: "給与所得者（会社員）の場合",
              desc: "副業の所得（収入-経費）が年間20万円を超える場合に確定申告が必要です。",
            },
            {
              title: "フリーランス・個人事業主の場合",
              desc: "所得が年間48万円（基礎控除額）を超える場合に確定申告が必要です。",
            },
            {
              title: "確定申告した方がお得なケース",
              desc: "医療費控除やふるさと納税（6自治体以上）がある場合は、副業所得が20万円以下でも確定申告した方がお得です。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-card-border rounded-xl p-4"
            >
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
          <p className="text-sm font-medium mb-1">青色申告がおすすめ</p>
          <p className="text-sm text-muted">
            開業届と青色申告承認申請書を提出すれば、最大65万円の特別控除が受けられます。確定申告ソフトを使えば、複式簿記も自動で処理してくれるため、青色申告のハードルは大幅に下がります。
          </p>
        </div>
      </section>

      {/* Section 2 - Software comparison */}
      <section id="comparison" className="mb-10">
        <h2 className="text-2xl font-bold mb-6">2. 確定申告ソフト3社比較</h2>

        <div className="space-y-8">
          {softwareList.map((sw, index) => (
            <div
              key={sw.name}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{sw.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorMap[sw.color]}`}
                >
                  {sw.badge}
                </span>
              </div>

              {/* Plans */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2">料金プラン</h4>
                <div className="space-y-2">
                  {sw.plans.map((plan) => (
                    <div
                      key={plan.name}
                      className="flex justify-between items-center bg-background rounded-lg p-3 text-sm"
                    >
                      <span className="font-medium">{plan.name}</span>
                      <span className="text-muted">{plan.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2">主な特徴</h4>
                <ul className="space-y-1">
                  {sw.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 rounded-lg p-3">
                  <h4 className="text-sm font-bold mb-2 text-green-700 dark:text-green-300">
                    メリット
                  </h4>
                  <ul className="space-y-1">
                    {sw.pros.map((p) => (
                      <li key={p} className="text-sm text-muted">
                        + {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <h4 className="text-sm font-bold mb-2 text-red-700 dark:text-red-300">
                    デメリット
                  </h4>
                  <ul className="space-y-1">
                    {sw.cons.map((c) => (
                      <li key={c} className="text-sm text-muted">
                        - {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
                <p className="text-sm">
                  <span className="font-bold">こんな人におすすめ：</span>
                  {sw.recommended}
                </p>
              </div>

              {sw.url && (
                <div className="text-center">
                  <a
                    href={sw.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                  >
                    {sw.name}を無料で試す
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 - Price comparison */}
      <section id="price-table" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. 料金プラン比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card-bg">
                <th className="border border-card-border p-3 text-left">
                  ソフト名
                </th>
                <th className="border border-card-border p-3 text-left">
                  最安プラン
                </th>
                <th className="border border-card-border p-3 text-left">
                  無料期間
                </th>
                <th className="border border-card-border p-3 text-left">
                  e-Tax対応
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "freee",
                  cheapest: "年払い980円/月",
                  free: "30日間無料",
                  etax: "対応",
                },
                {
                  name: "やよい青色申告",
                  cheapest: "年11,330円",
                  free: "初年度無料",
                  etax: "対応",
                },
                {
                  name: "マネーフォワード",
                  cheapest: "年払い800円/月",
                  free: "1ヶ月無料",
                  etax: "対応",
                },
              ].map((row) => (
                <tr key={row.name}>
                  <td className="border border-card-border p-3 font-medium">
                    {row.name}
                  </td>
                  <td className="border border-card-border p-3">
                    {row.cheapest}
                  </td>
                  <td className="border border-card-border p-3">{row.free}</td>
                  <td className="border border-card-border p-3">{row.etax}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4 - How to choose */}
      <section id="how-to-choose" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. 自分に合ったソフトの選び方
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "会計の知識がまったくない",
              answer: "freeeがおすすめ",
              detail:
                "freeeは簿記の知識がなくても直感的に操作でき、質問に答えるだけで確定申告書が作成できます。スマホアプリも充実しています。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
            },
            {
              question: "できるだけ費用を抑えたい",
              answer: "やよいの青色申告がおすすめ",
              detail:
                "初年度無料のセルフプランがあり、白色申告なら永年無料で使えます。コストを最小限に抑えたい方に最適です。",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
            },
            {
              question: "家計簿と一緒に管理したい",
              answer: "マネーフォワードがおすすめ",
              detail:
                "家計簿アプリ「マネーフォワードME」と連携でき、個人の家計管理と事業の会計を一元的に管理できます。",
              url: "",
            },
          ].map((item) => (
            <div
              key={item.question}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-1">{item.question}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {item.answer}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {item.detail}
              </p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  無料で試してみる
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. よくある質問</h2>
        <div className="space-y-4">
          {[
            {
              q: "確定申告ソフトは途中で変更できる？",
              a: "はい、年度ごとにソフトを変更できます。ただし、前年度のデータ移行は手動になることが多いため、早めに決めて使い続けるのがおすすめです。",
            },
            {
              q: "白色申告と青色申告、どちらがいい？",
              a: "副業の所得が多い場合は青色申告がお得です。最大65万円の特別控除が受けられ、確定申告ソフトを使えば複式簿記も自動で処理してくれます。",
            },
            {
              q: "確定申告の期限はいつ？",
              a: "毎年2月16日〜3月15日が確定申告期間です。e-Taxを使えばオンラインで24時間提出可能です。早めの準備をおすすめします。",
            },
            {
              q: "副業がバレるのが心配...",
              a: "確定申告時に住民税の徴収方法を「自分で納付」にすれば、副業の住民税が会社に通知されません。確定申告ソフトでも設定できます。",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card-bg border border-card-border rounded-xl p-5"
            >
              <h3 className="font-bold mb-2">Q. {item.q}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related tool CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">
          副業の収入計算にはネットツールボックス
        </h2>
        <p className="text-sm text-muted mb-3">
          所得税の概算計算や、経費率のシミュレーションに便利な無料ツールを用意しています。
        </p>
        <Link
          href="/tools/tax-calculator"
          className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          税金計算ツールを使う
        </Link>
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
              name: "マネーフォワード クラウド確定申告",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4VMW8I+4JGQ+BXB8Z",
              highlight: "個人事業主の確定申告に特化",
              price: "月800円〜",
            },
            {
              name: "マネーフォワード クラウド会計",
              url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6",
              highlight: "法人・個人事業主向け定番",
              price: "月2,980円〜",
            },
          ]}
        />
      </section>

      {/* CTA */}
      <section className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">
          まずはfreeeで確定申告を始めよう
        </h2>
        <p className="text-sm text-muted mb-5">
          会計知識ゼロでもOK。スマホで領収書を撮影するだけで自動仕訳。30日間の無料体験で使い勝手を試せます。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            freeeを無料で試す
          </a>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block border border-card-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-card-bg transition-colors"
          >
            やよいの青色申告（初年度無料）
          </a>
        </div>
        <p className="text-xs text-muted mt-4">
          ※ 本記事はアフィリエイトプログラムに参加しています。
        </p>
      </section>
    </div>
  );
}
