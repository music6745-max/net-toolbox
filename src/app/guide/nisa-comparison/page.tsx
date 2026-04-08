import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】NISA口座徹底比較おすすめ5選｜手数料・商品ラインナップ・使い勝手を解説",
  description:
    "SBI証券・楽天証券・マネックス証券・松井証券・auカブコム証券のNISA口座を手数料・商品数・ポイント還元・アプリで徹底比較。新NISAで資産形成を最速化する選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/nisa-comparison` },
};

const faqItems = [
  { question: "新NISAの年間上限額は？", answer: "つみたて投資枠が年120万円、成長投資枠が年240万円、合計で年360万円まで投資可能です。生涯非課税限度額は1,800万円（うち成長投資枠は1,200万円まで）で、売却すれば翌年以降に再利用できます。" },
  { question: "NISA口座はいくつ開設できますか？", answer: "NISA口座は1人1口座のみで、同時に複数社では保有できません。毎年1回、金融機関の変更は可能ですが、その年に買付実績があると翌年まで変更できません。最初に選ぶ金融機関が非常に重要です。" },
  { question: "SBI証券と楽天証券どちらがいい？", answer: "総合力ではほぼ互角ですが、Vポイント・TポイントユーザーはSBI、楽天経済圏ユーザーは楽天が有利です。手数料はどちらもNISA国内株・投信は無料で、商品数も2,900本以上と豊富。アプリの使いやすさで選んでもOKです。" },
  { question: "つみたて投資枠と成長投資枠はどう使い分ける？", answer: "基本は長期・インデックス投信をつみたて投資枠で毎月自動積立し、個別株やアクティブ投信を成長投資枠で選ぶのが王道。迷ったらオルカン（全世界株式）やS&P500を満額つみたてるのが2026年現在の主流です。" },
];

const services = [
  { name: "SBI証券", type: "ネット証券最大手", rate: "売買手数料無料（国内株・投信）", points: ["投信本数2,900本以上で業界最多クラス", "三井住友カード積立で最大5%還元", "IPO取扱数業界No.1"], bestFor: "商品数・ポイント還元を重視する人。" },
  { name: "楽天証券", type: "楽天経済圏", rate: "売買手数料無料（国内株・投信）", points: ["楽天カード積立で最大1%還元", "楽天ポイントで投信購入可", "日経テレコン無料閲覧"], bestFor: "楽天経済圏を活用しているユーザー。" },
  { name: "マネックス証券", type: "米国株特化", rate: "売買手数料無料（国内株・投信）", points: ["米国株取扱数5,000銘柄以上", "dカード積立で最大1.1%還元", "銘柄スカウター無料"], bestFor: "米国株・個別株投資をしたい人。" },
  { name: "松井証券", type: "老舗ネット証券", rate: "売買手数料無料（国内株・投信）", points: ["100年以上の歴史を持つ老舗", "25歳以下は現物取引手数料完全無料", "投信残高最大1%還元"], bestFor: "若年層・サポート重視の投資家。" },
  { name: "auカブコム証券", type: "三菱UFJグループ", rate: "売買手数料無料（国内株・投信）", points: ["au PAYカード積立で最大1%還元", "Pontaポイント連携", "プチ株（単元未満株）対応"], bestFor: "auユーザー・少額投資志向。" },
];

export default function NisaComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "NISA口座徹底比較", url: `${siteConfig.url}/guide/nisa-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】NISA口座徹底比較おすすめ5選" description="SBI証券・楽天証券・マネックス・松井・auカブコムを手数料・商品数・ポイントで徹底比較。" url={`${siteConfig.url}/guide/nisa-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>NISA口座徹底比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】NISA口座徹底比較おすすめ5選｜手数料・商品ラインナップ・使い勝手を解説
        </h1>
        <p className="text-muted leading-relaxed">
          2024年にスタートした新NISAは、年間360万円・生涯1,800万円まで非課税で投資できる画期的な制度。口座は1人1つまでしか保有できないため、最初に選ぶ金融機関が極めて重要です。2026年現在の主要5社を手数料・商品数・ポイント還元・アプリの使いやすさで徹底比較します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">タイプ別おすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">総合力 → SBI証券</span></p>
          <p><span className="font-bold">楽天ユーザー → 楽天証券</span></p>
          <p><span className="font-bold">米国株投資 → マネックス証券</span></p>
          <p><span className="font-bold">25歳以下 → 松井証券</span></p>
          <p><span className="font-bold">auユーザー → auカブコム証券</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">NISA口座選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">
          新NISAは年間360万円（つみたて投資枠120万＋成長投資枠240万）、生涯1,800万円まで運用益と配当が完全非課税になる強力な制度。大手ネット証券はどこも国内株・投信の売買手数料が無料で、差がつくのは「投信の取扱本数」「クレジットカード積立のポイント還元率」「アプリの使いやすさ」の3点です。長期のインデックス運用が目的なら、商品ラインナップと積立クレカ還元率で選ぶのが正解。月5万円をクレカ積立すると、1%還元で年6,000円、5%還元なら年3万円のポイントが貯まります。20年積み立てると差は60万円にもなります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめNISA口座5社の詳細</h2>
        <div className="space-y-6">
          {services.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">手数料：{b.rate}</p>
              <ul className="space-y-1 mb-4">
                {b.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{b.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 情報は2026年4月時点のものです。最新の手数料・商品ラインナップは各証券会社の公式サイトでご確認ください。</p>
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
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            新NISAは日本人の資産形成を劇的に変える制度です。口座は1つしか持てないため、普段使うクレカや経済圏と連動する証券会社を選ぶのが賢い戦略。SBI・楽天・マネックスの3強から自分の生活圏に合ったものを選び、オルカンやS&P500のインデックス投信を毎月自動積立すれば、あとはほったらかしで資産が増えていきます。家計簿アプリや会計ソフトで生活費と投資額を可視化し、余裕資金を最大限活用しましょう。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">資産管理に役立つツール</h2>
        <ComparisonTableCTA
          services={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "家計・資産管理の定番", price: "年額制", badge: "定番" },
            { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "証券口座連携で自動管理", price: "月額制" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "副業・投資収益の確定申告", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/investment-app-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">投資アプリ比較</span>
            <p className="text-xs text-muted mt-1">スマホで始める投資</p>
          </Link>
          <Link href="/guide/online-broker-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット証券比較</span>
            <p className="text-xs text-muted mt-1">口座開設前にチェック</p>
          </Link>
          <Link href="/guide/crypto-exchange-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">暗号資産取引所比較</span>
            <p className="text-xs text-muted mt-1">分散投資の選択肢</p>
          </Link>
          <Link href="/guide/housing-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">住宅ローン比較</span>
            <p className="text-xs text-muted mt-1">家計の固定費最適化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
