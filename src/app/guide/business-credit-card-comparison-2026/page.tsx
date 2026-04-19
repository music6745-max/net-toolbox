import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】法人・個人事業主向けビジネスクレジットカードおすすめ比較10選",
  description:
    "三井住友ビジネスオーナーズ・freeeカード・楽天ビジネス・JCB Biz・UPSIDERを年会費/還元率/限度額/会計ソフト連携で徹底比較。決算書不要で即日発行できる開業直後向けカードも。",
  alternates: { canonical: `${siteConfig.url}/guide/business-credit-card-comparison-2026` },
};

const faqItems = [
  { question: "個人事業主でも法人カードは作れますか？", answer: "はい、三井住友ビジネスオーナーズ・JCB CARD Biz・freeeカード Unlimited等は決算書・登記簿不要。本人確認書類のみで個人事業主でも発行可能。開業届提出直後からでも申込OKです。" },
  { question: "ビジネスカードと個人カードの使い分けは？", answer: "事業用支出は必ずビジネスカード、個人支出は個人カードに完全分離するのが鉄則。仕訳作業が自動化され、確定申告時の経理工数が7〜8割削減。税務調査でも「事業費と個人費が明確」と説明しやすい。" },
  { question: "ポイント還元の税務処理は？", answer: "個人事業主のポイント還元は収入計上不要（事業主借で処理）。一方、法人のポイント還元は雑収入として売上計上必要。この違いを顧問税理士と確認しながら処理しましょう。" },
  { question: "会計ソフト連携でどう便利になる？", answer: "freee/マネーフォワード/弥生会計とビジネスカードを連携すると、利用明細が自動で仕訳候補として取り込まれ、AI仕訳サジェスト。経理時間が従来の1/3に削減できます。" },
];

const cards = [
  { name: "三井住友カード ビジネスオーナーズ", rank: 1, url: "https://www.smbc-card.com/nyukai/affiliate/business/bo_lp.jsp", type: "年会費永年無料", highlight: "決算書不要・個人事業主OK", points: ["年会費永年無料（一般版）", "登記簿謄本・決算書不要、本人確認書類のみで申込可", "追加カード年会費永年無料（18枚まで）", "Amazon Business 利用で1.5%還元（ゴールド版）"], bestFor: "開業直後の個人事業主・1人法人に最適。" },
  { name: "freee カード Unlimited", rank: 2, url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", type: "会計連携最強", highlight: "限度額最大2億円・AI審査で即日発行", points: ["freee会計と連動した自動仕訳", "利用限度額はAIが動的に算出（最大2億円）", "年会費無料、海外決済手数料も無料", "決算書・登記簿不要"], bestFor: "freee会計ユーザー、経理効率を最大化したい法人。" },
  { name: "楽天ビジネスカード", rank: 3, url: "https://www.rakuten-card.co.jp/card/rakuten-business-card/", type: "楽天経済圏", highlight: "楽天プレミアムカード必須・空港ラウンジ・1%還元", points: ["楽天プレミアム（年11,000円）の追加カードとして発行", "プライオリティパス無料、世界の空港ラウンジ使い放題", "楽天市場の仕入れで最大5%還元", "楽天市場の出店者と相性最高"], bestFor: "楽天市場で仕入・販売している事業者、海外出張が多い経営者。" },
  { name: "JCB CARD Biz", rank: 4, url: "https://www.jcb.co.jp/ordercard/business/biz/", type: "JCBプロパー", highlight: "本人確認書類のみで申込・JCBの信頼感", points: ["登記簿謄本・決算書不要、個人の本人確認書類のみ", "JCBプロパーの信頼性で対法人取引で有利", "年会費1,375円（初年度無料）", "弥生会計・freee・マネフォ 3大会計ソフトと連携"], bestFor: "大手法人との取引が多い経営者、JCBブランドを好む方。" },
  { name: "UPSIDER", rank: 5, url: "https://up-sider.com/lp/cards", type: "スタートアップ向け", highlight: "与信枠最大10億円・従業員カード無制限", points: ["設立1日目のスタートアップでも与信枠発行可能", "使い切り型仮想カードを従業員ごとに無制限発行", "年会費無料、ポイント還元率1.0〜1.5%", "クラウド会計との仕訳連携＋承認フロー機能"], bestFor: "急成長スタートアップ・従業員が多い企業。" },
];

export default function BusinessCreditCardPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "法人向けビジネスカード比較", url: `${siteConfig.url}/guide/business-credit-card-comparison-2026` }]} />
      <ArticleJsonLd headline="【2026年最新】法人・個人事業主向けビジネスクレジットカードおすすめ比較10選" description="主要ビジネスカードを徹底比較" url={`${siteConfig.url}/guide/business-credit-card-comparison-2026`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link><span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link><span className="mx-2">/</span>
        <span>法人ビジネスカード比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">決済・ビジネス</span>
          <span className="text-xs text-muted">13分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】法人・個人事業主向けビジネスクレジットカードおすすめ比較10選</h1>
        <p className="text-muted leading-relaxed">
          開業・起業した途端、立替経費の把握が煩雑になるのが個人事業主・法人の悩み。ビジネスカードは「経費の一元管理」「キャッシュフロー改善（最大55日後払い）」「会計ソフト連携」の3点で事業オーナーの時短を実現します。本記事では主要5枚を徹底比較し、用途別の最適カードを解説。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">用途別のおすすめ</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">開業直後・フリーランス → 三井住友ビジネスオーナーズ or freeeカード</span></p>
          <p><span className="font-bold">ネットショップ運営 → 楽天ビジネスカード（仕入5%還元）</span></p>
          <p><span className="font-bold">スタートアップ・急成長中 → UPSIDER</span></p>
          <p><span className="font-bold">海外出張多い経営者 → JCBプラチナビジネス</span></p>
          <p><span className="font-bold">広告出稿多い → Google/Facebook広告でマイル・ポイント還元</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ビジネスカードの3大メリット</h2>
        <p className="text-muted leading-relaxed mb-4">
          第一に「経費の一元管理」。事業用支出が1枚のカード明細にまとまり、確定申告時の経理工数が大幅削減。第二に「キャッシュフロー改善」。利用日から最大55日後の引落しで、仕入や広告費を先に払わずに済みます。第三に「会計ソフトとの自動連携」。freee・マネーフォワード・弥生とビジネスカードを連携すれば、AI仕訳で経理時間が7〜8割削減されます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">主要ビジネスカード5枚詳細比較</h2>
        <div className="space-y-6">
          {cards.map((b) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{b.rank}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3 text-primary">{b.highlight}</p>
              <ul className="space-y-1 mb-4">
                {b.points.map((pt) => <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>)}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{b.bestFor}</p>
              </div>
              <a href={b.url} target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-colors">公式サイトで詳細 →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ビジネスカード選びの5つのチェック項目</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted">
          <p><span className="font-bold text-foreground">1. 年会費と初年度無料条件：</span>開業直後は年会費無料 or 初年度無料を選ぶのが無難。</p>
          <p><span className="font-bold text-foreground">2. 還元率：</span>ビジネス系は0.5〜1.5%が標準。Amazon Business・楽天市場で特別還元があるかチェック。</p>
          <p><span className="font-bold text-foreground">3. 利用限度額：</span>仕入・広告費・設備購入で月100万円超なら、限度額300万円以上のカード必須。</p>
          <p><span className="font-bold text-foreground">4. 会計ソフト連携：</span>使っている会計ソフト（freee/マネフォ/弥生）との自動連携があるか。</p>
          <p><span className="font-bold text-foreground">5. 追加カード・ETCカード：</span>従業員・家族用の追加カードが年会費無料で発行できるか。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2 text-foreground">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">まず1枚目は年会費無料から</h2>
        <ComparisonTableCTA
          services={[
            { name: "三井住友ビジネスオーナーズ", url: "https://www.smbc-card.com/nyukai/affiliate/business/bo_lp.jsp", highlight: "年会費永年無料、決算書不要、個人事業主OK", price: "年会費無料", badge: "開業直後向き" },
            { name: "freeeカード Unlimited", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "AI限度額、freee会計連携で経理7〜8割削減", price: "年会費無料", badge: "会計連携最強" },
            { name: "UPSIDER", url: "https://up-sider.com/lp/cards", highlight: "スタートアップ特化、与信枠最大10億円", price: "年会費無料", badge: "急成長企業向き" },
          ]}
        />
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/freelance-startup-bundle-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">独立</div><div className="font-bold text-sm">フリーランス独立バンドル</div></Link>
          <Link href="/guide/accounting-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">会計</div><div className="font-bold text-sm">確定申告ソフト比較</div></Link>
          <Link href="/guide/tax-accountant-referral-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">税務</div><div className="font-bold text-sm">税理士無料紹介比較</div></Link>
          <Link href="/guide/credit-card-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">個人</div><div className="font-bold text-sm">クレジットカード比較</div></Link>
        </div>
      </section>
    </div>
  );
}
