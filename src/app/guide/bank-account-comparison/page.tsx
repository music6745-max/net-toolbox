import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】ネット銀行口座開設キャンペーン比較5選｜金利・手数料・特典を徹底解説",
  description:
    "住信SBIネット銀行・楽天銀行・PayPay銀行・auじぶん銀行・ソニー銀行の5社を金利・手数料・キャンペーンで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/bank-account-comparison` },
};

const faqItems = [
  { question: "ネット銀行のメリットは？", answer: "ATM手数料・振込手数料が大手銀行より安く、定期預金金利も高めです。スマホで完結でき24時間利用可能です。" },
  { question: "口座開設は難しい？", answer: "完全オンラインで5〜10分で完結。本人確認書類があれば即日開設できる銀行もあります。" },
  { question: "メインバンクとして使える？", answer: "可能です。給与振込・引き落とし・振込手数料無料サービスを活用すれば大手銀行と遜色ありません。" },
  { question: "キャッシュバックキャンペーンは？", answer: "口座開設+条件達成で1,000〜10,000円のキャッシュバックがある銀行が多いです。比較して選びましょう。" },
];

const services = [
  { name: "住信SBIネット銀行", type: "総合", feature: "業界トップクラスの利便性", points: ["スマートプログラムでランク特典", "他行振込手数料月最大20回無料", "外貨預金も充実"], bestFor: "メインバンク利用。" },
  { name: "楽天銀行", type: "総合", feature: "楽天経済圏でお得", points: ["楽天ポイントが貯まる", "ハッピープログラムで優遇", "デビットカード一体化"], bestFor: "楽天ユーザー。" },
  { name: "PayPay銀行", type: "総合", feature: "PayPay連携", points: ["PayPay残高チャージ無料", "口座開設が早い", "24時間振込即時"], bestFor: "PayPayユーザー。" },
  { name: "auじぶん銀行", type: "総合", feature: "au経済圏", points: ["auユーザー特典", "外貨預金キャンペーン豊富", "Pontaポイントが貯まる"], bestFor: "auユーザー。" },
  { name: "ソニー銀行", type: "総合", feature: "外貨預金No.1クラス", points: ["10通貨に対応", "外貨預金金利高水準", "デビットカードキャッシュバック"], bestFor: "外貨投資・海外旅行。" },
];

export default function BankAccountComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "ネット銀行比較", url: `${siteConfig.url}/guide/bank-account-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】ネット銀行口座開設キャンペーン比較5選" description="住信SBI・楽天・PayPay・auじぶん・ソニー徹底比較。" url={`${siteConfig.url}/guide/bank-account-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>ネット銀行比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">10分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】ネット銀行口座開設キャンペーン比較5選｜金利・手数料・特典を徹底解説</h1>
        <p className="text-muted leading-relaxed">手数料を抑え、金利と特典をフル活用するならネット銀行が定番。本記事では主要5社を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめネット銀行5選</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">{s.feature}</p>
              <ul className="space-y-1 mb-4">
                {s.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">無料口座開設キャンペーン</h2>
        <ComparisonTableCTA
          services={[
            { name: "住信SBIネット銀行", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "メインバンク向き", price: "口座開設無料", badge: "おすすめ" },
            { name: "楽天銀行", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "楽天ポイント", price: "口座開設無料" },
            { name: "PayPay銀行", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "PayPay連携", price: "口座開設無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">クレジットカード比較</span>
            <p className="text-xs text-muted mt-1">セットで作るとお得</p>
          </Link>
          <Link href="/guide/online-broker-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット証券比較</span>
            <p className="text-xs text-muted mt-1">投資も同時に</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
